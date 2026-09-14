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

export const setAdsConsent = (v: AdsConsent): void => {
  try {
    localStorage.setItem(ADS_CONSENT_KEY, v);
  } catch {
    /* ignore quota / disabled storage */
  }
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
