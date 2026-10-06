// Granular, versioned consent for Lunaé.
//
// Two independent categories:
//  - "analytics" (audience measurement: GA4, Clarity)  -> stored by clarity.ts under lunae_consent_v1
//  - "ads"       (advertising measurement: Meta pixel, Google Ads signals)
//
// An older visitor who only stored lunae_consent_v1="granted" gave consent for
// audience measurement ONLY. That value is NEVER upgraded to advertising
// consent: the ads category stays unknown (null) so the banner asks again.

import { getStoredConsent, type ClarityConsent } from "@/lib/clarity";

export const ADS_CONSENT_KEY = "lunae_consent_ads_v1";
export const ADS_CONSENT_EVENT = "lunae:ads-consent-change";

export type AdsConsent = ClarityConsent;

export const getStoredAdsConsent = (): AdsConsent | null => {
  try {
    const v = localStorage.getItem(ADS_CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};

/* ------------------------------------------------------------------ */
/* Parent-domain cookie: shares the explicit advertising choice with    */
/* app.lunae-app.fr. No PII, no identifier, no attribution, no health   */
/* data — only a status, a policy version and a timestamp.              */
/* It is NEVER written from an analytics-only consent.                  */
/* ------------------------------------------------------------------ */

export const ADS_CONSENT_COOKIE = "lunae_ads_consent_v1";
export const ADS_CONSENT_POLICY_VERSION = "meta_ads_v1";
/** 90 days, consistent with the other first-party retention on the landing. */
export const ADS_CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 90;

export interface AdsConsentCookiePayload {
  status: AdsConsent;
  policy_version: string;
  chosen_at: string;
}

const SHARED_HOSTS = ["lunae-app.fr", "app.lunae-app.fr"];

/** Only the brand hosts get the parent-domain attribute. */
export const isSharedConsentHost = (hostname: string): boolean =>
  SHARED_HOSTS.includes(hostname);

export const readAdsConsentCookie = (): AdsConsentCookiePayload | null => {
  try {
    const raw = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${ADS_CONSENT_COOKIE}=`));
    if (!raw) return null;
    const parsed = JSON.parse(
      decodeURIComponent(raw.slice(ADS_CONSENT_COOKIE.length + 1)),
    ) as Partial<AdsConsentCookiePayload>;
    if (parsed.status !== "granted" && parsed.status !== "denied") return null;
    return {
      status: parsed.status,
      policy_version: parsed.policy_version ?? ADS_CONSENT_POLICY_VERSION,
      chosen_at: parsed.chosen_at ?? "",
    };
  } catch {
    return null;
  }
};

/** Write the minimal versioned payload on the shared parent domain. */
export const writeAdsConsentCookie = (
  status: AdsConsent,
  chosenAt: string = new Date().toISOString(),
): void => {
  try {
    const payload: AdsConsentCookiePayload = {
      status,
      policy_version: ADS_CONSENT_POLICY_VERSION,
      chosen_at: chosenAt,
    };
    const value = encodeURIComponent(JSON.stringify(payload));
    const shared = isSharedConsentHost(window.location.hostname);
    const domain = shared ? "; Domain=.lunae-app.fr" : "";
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie =
      `${ADS_CONSENT_COOKIE}=${value}; Path=/${domain}; Max-Age=${ADS_CONSENT_COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
  } catch {
    /* ignore disabled storage */
  }
};

/**
 * Restore the cookie from an explicit advertising choice already stored in
 * localStorage. An analytics-only consent never produces a cookie.
 */
export const syncAdsConsentCookie = (): void => {
  const stored = getStoredAdsConsent();
  if (stored === null) return;
  const cookie = readAdsConsentCookie();
  if (cookie && cookie.status === stored) return;
  writeAdsConsentCookie(stored);
};

export const setAdsConsent = (v: AdsConsent): void => {
  try {
    localStorage.setItem(ADS_CONSENT_KEY, v);
  } catch {
    /* ignore quota / disabled storage */
  }
  // Explicit choice (accept, refuse or withdrawal) -> mirror it immediately.
  writeAdsConsentCookie(v);
  try {
    window.dispatchEvent(new CustomEvent(ADS_CONSENT_EVENT, { detail: v }));
  } catch {
    /* ignore */
  }
};

export const hasAdvertisingConsent = (): boolean => getStoredAdsConsent() === "granted";

/** True when at least one category has never been answered -> show the banner. */
export const needsConsentChoice = (): boolean =>
  getStoredConsent() === null || getStoredAdsConsent() === null;
