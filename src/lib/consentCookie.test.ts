import { beforeEach, describe, expect, it } from "vitest";
import { CONSENT_KEY } from "@/lib/clarity";
import {
  ADS_CONSENT_COOKIE,
  ADS_CONSENT_KEY,
  ADS_CONSENT_POLICY_VERSION,
  readAdsConsentCookie,
  setAdsConsent,
  syncAdsConsentCookie,
} from "@/lib/consent";
import { hasAdConsent } from "@/lib/tracking";

// No test contacts Meta: this module performs no network request at all.

const rawCookie = () =>
  document.cookie.split("; ").find((c) => c.startsWith(`${ADS_CONSENT_COOKIE}=`)) ?? "";

beforeEach(() => {
  localStorage.clear();
  document.cookie = `${ADS_CONSENT_COOKIE}=; path=/; max-age=0`;
});

describe("shared advertising consent cookie", () => {
  it("never grants from a legacy analytics-only consent", () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    syncAdsConsentCookie();
    expect(readAdsConsentCookie()).toBeNull();
    expect(hasAdConsent()).toBe(false);
  });

  it("writes granted after an explicit advertising acceptance", () => {
    setAdsConsent("granted");
    const cookie = readAdsConsentCookie();
    expect(cookie?.status).toBe("granted");
    expect(cookie?.policy_version).toBe(ADS_CONSENT_POLICY_VERSION);
    expect(new Date(cookie!.chosen_at).toString()).not.toBe("Invalid Date");
    expect(hasAdConsent()).toBe(true);
  });

  it("writes denied immediately on refusal and on withdrawal", () => {
    setAdsConsent("denied");
    expect(readAdsConsentCookie()?.status).toBe("denied");

    setAdsConsent("granted");
    expect(readAdsConsentCookie()?.status).toBe("granted");
    setAdsConsent("denied");
    expect(readAdsConsentCookie()?.status).toBe("denied");
    expect(hasAdConsent()).toBe(false);
  });

  it("carries no identifier or extra field", () => {
    setAdsConsent("granted");
    const value = decodeURIComponent(rawCookie().slice(ADS_CONSENT_COOKIE.length + 1));
    expect(Object.keys(JSON.parse(value)).sort()).toEqual([
      "chosen_at",
      "policy_version",
      "status",
    ]);
  });

  it("restores the cookie from an existing explicit choice when it is missing", () => {
    localStorage.setItem(ADS_CONSENT_KEY, "granted");
    expect(readAdsConsentCookie()).toBeNull();
    syncAdsConsentCookie();
    expect(readAdsConsentCookie()?.status).toBe("granted");
  });
});
