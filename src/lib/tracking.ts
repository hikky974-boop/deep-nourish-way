// Google tracking helpers: Consent Mode v2 updates, GA4 events, cross-domain
// attribution parameter propagation. No personal data is ever pushed.
// The GTM container + Consent Mode defaults are installed in index.html.

import { getStoredConsent, type ClarityConsent } from "@/lib/clarity";

export const ATTRIBUTION_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "dclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "_gl",
] as const;

export const ATTRIBUTION_COOKIE = "lunae_attr";
export const APP_HOST = "app.lunae-app.fr";
export const GA4_MEASUREMENT_ID = "G-C7X99HEE6W";

type Gtag = (...args: unknown[]) => void;

type GoogleTagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: Gtag;
  google_tag_manager?: Record<string, unknown>;
};

const GTM_CONTAINER_ID = "GTM-TXSSG73C";

/**
 * Use the page-level gtag installed before GTM whenever it is available.
 * This keeps consent commands on the exact global path observed by Google
 * Tag Assistant. The fallback preserves the same dataLayer semantics in tests
 * or if this module executes before the inline bootstrap.
 */
export const gtag: Gtag = (...args) => {
  const w = window as GoogleTagWindow;
  if (typeof w.gtag === "function" && w.gtag !== gtag) {
    w.gtag(...args);
    return;
  }
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
};

const allDenied = {
  ad_storage: "denied",
  analytics_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
} as const;

const analyticsGrantedAdsDenied = {
  ad_storage: "denied",
  analytics_storage: "granted",
  ad_user_data: "denied",
  ad_personalization: "denied",
} as const;

/** Push a Consent Mode v2 update matching the Lunaé banner choice.
 *  "granted" = analytics only; advertising signals stay denied.
 *  "denied"  = all four signals denied. */
export const updateGoogleConsent = (consent: ClarityConsent): void => {
  gtag("consent", "update", consent === "granted" ? analyticsGrantedAdsDenied : allDenied);
};

/** Re-apply a previously stored choice on later visits. Never assumes consent. */
export const applyStoredGoogleConsent = (): void => {
  const stored = getStoredConsent();
  if (stored === "granted") updateGoogleConsent("granted");
  else if (stored === "denied") updateGoogleConsent("denied");
};

export const hasAdConsent = (): boolean => getStoredConsent() === "granted";

/* ------------------------- attribution parameters ------------------------- */

const readCookieParams = (): Record<string, string> => {
  try {
    const raw = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${ATTRIBUTION_COOKIE}=`));
    if (!raw) return {};
    const value = decodeURIComponent(raw.slice(ATTRIBUTION_COOKIE.length + 1));
    const params = new URLSearchParams(value);
    const out: Record<string, string> = {};
    for (const key of ATTRIBUTION_PARAMS) {
      const v = params.get(key);
      if (v) out[key] = v;
    }
    return out;
  } catch {
    return {};
  }
};

export const currentAttributionParams = (
  search: string = typeof window !== "undefined" ? window.location.search : "",
): Record<string, string> => {
  const out: Record<string, string> = hasAdConsent() ? readCookieParams() : {};
  const params = new URLSearchParams(search);
  for (const key of ATTRIBUTION_PARAMS) {
    const v = params.get(key);
    if (v) out[key] = v;
  }
  return out;
};

/**
 * Persist attribution params first-party ONLY when advertising consent is granted.
 * Without consent nothing is written to persistent storage.
 */
export const persistAttributionParams = (
  search: string = typeof window !== "undefined" ? window.location.search : "",
): void => {
  if (!hasAdConsent()) return;
  const merged = currentAttributionParams(search);
  if (Object.keys(merged).length === 0) return;
  const value = new URLSearchParams(merged).toString();
  const maxAge = 60 * 60 * 24 * 90;
  const onBrandDomain = window.location.hostname.endsWith("lunae-app.fr");
  const domain = onBrandDomain ? "; domain=.lunae-app.fr" : "";
  document.cookie = `${ATTRIBUTION_COOKIE}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}${domain}; SameSite=Lax`;
};

/** Copy attribution params onto an app.lunae-app.fr URL, without duplicates. */
export const decorateAppUrl = (
  href: string,
  search: string = typeof window !== "undefined" ? window.location.search : "",
): string => {
  let url: URL;
  try {
    url = new URL(href, "https://lunae-app.fr");
  } catch {
    return href;
  }
  if (url.hostname !== APP_HOST) return href;

  const incoming = currentAttributionParams(search);
  for (const [key, value] of Object.entries(incoming)) {
    url.searchParams.set(key, value);
  }
  return url.toString();
};

/* --------------------------------- GA4 ---------------------------------- */

/** Emit a GA4 application event, always targeting the Lunaé property. */
const sendGA4Event = (name: string, params: Record<string, unknown> = {}): void => {
  gtag("event", name, { ...params, send_to: GA4_MEASUREMENT_ID });
};

let landingTrackingInitialized = false;
let landingViewSent = false;
let manualPageViewSent = false;
let pendingLandingMode: "restored" | "newly-granted" | null = null;

/**
 * The official gtag/dataLayer queue is installed before GTM and accepts
 * commands ahead of full availability: GTM replays them in order. No polling
 * or container introspection is needed.
 */
const flushLandingTracking = (): void => {
  if (!pendingLandingMode || landingViewSent || getStoredConsent() !== "granted") return;

  const page = {
    page_location: window.location.href,
    page_title: document.title,
  };

  if (pendingLandingMode === "newly-granted" && !manualPageViewSent) {
    manualPageViewSent = true;
    sendGA4Event("page_view", page);
  }

  landingViewSent = true;
  pendingLandingMode = null;
  sendGA4Event("landing_view", page);
};

const queueLandingTracking = (mode: "restored" | "newly-granted"): void => {
  if (landingViewSent) return;
  if (mode === "newly-granted" || pendingLandingMode === null) pendingLandingMode = mode;
  flushLandingTracking();
};

/** Called once by the landing page. Existing consent keeps GA4's automatic page_view. */
export const initializeLandingTracking = (): void => {
  if (landingTrackingInitialized) return;
  landingTrackingInitialized = true;
  if (getStoredConsent() === "granted") queueLandingTracking("restored");
};

/** Called after the banner has persisted and pushed the Google consent update. */
export const handleLandingConsentChange = (
  previousConsent: ClarityConsent | null,
  consent: ClarityConsent,
): void => {
  if (consent !== "granted") {
    pendingLandingMode = null;
    return;
  }
  queueLandingTracking(previousConsent === "granted" ? "restored" : "newly-granted");
};

/** Test-only reset. */
export const __resetLandingView = () => {
  clearReadinessTimer();
  landingTrackingInitialized = false;
  landingViewSent = false;
  manualPageViewSent = false;
  pendingLandingMode = null;
};
