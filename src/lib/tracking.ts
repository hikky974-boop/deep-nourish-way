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

export const gtag: Gtag = (...args) => {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
};

const consentSignals = (v: "granted" | "denied") => ({
  ad_storage: v,
  analytics_storage: v,
  ad_user_data: v,
  ad_personalization: v,
});

/** Push a Consent Mode v2 update for the 4 signals. */
export const updateGoogleConsent = (consent: ClarityConsent): void => {
  gtag("consent", "update", consentSignals(consent === "granted" ? "granted" : "denied"));
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

let landingViewSent = false;

/** Fire the GA4 landing_view event exactly once. */
export const sendLandingView = (): void => {
  if (landingViewSent) return;
  landingViewSent = true;
  gtag("event", "landing_view", {
    page_location: window.location.href,
    page_title: document.title,
  });
};

/** Test-only reset. */
export const __resetLandingView = () => {
  landingViewSent = false;
};
