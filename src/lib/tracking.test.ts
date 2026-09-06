import { beforeEach, describe, expect, it } from "vitest";
import { CONSENT_KEY } from "@/lib/clarity";
import {
  ATTRIBUTION_COOKIE,
  applyStoredGoogleConsent,
  currentAttributionParams,
  decorateAppUrl,
  persistAttributionParams,
  sendLandingView,
  updateGoogleConsent,
  __resetLandingView,
} from "@/lib/tracking";

const dl = () => (window as unknown as { dataLayer: unknown[] }).dataLayer;

beforeEach(() => {
  localStorage.clear();
  (window as unknown as { dataLayer?: unknown[] }).dataLayer = [];
  document.cookie = `${ATTRIBUTION_COOKIE}=; path=/; max-age=0`;
  __resetLandingView();
});

const SEARCH =
  "?gclid=ABC123&utm_source=google&utm_medium=cpc&utm_campaign=lunae&utm_content=c1&utm_term=t1&_gl=1x&other=keep";

describe("consent", () => {
  it("denied keeps the 4 signals denied", () => {
    updateGoogleConsent("denied");
    expect(dl()[0]).toEqual([
      "consent",
      "update",
      {
        ad_storage: "denied",
        analytics_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      },
    ]);
  });

  it("granted sets the 4 signals to granted", () => {
    updateGoogleConsent("granted");
    expect((dl()[0] as unknown[])[2]).toEqual({
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
  });

  it("assumes nothing when no choice is stored", () => {
    applyStoredGoogleConsent();
    expect(dl()).toHaveLength(0);
  });

  it("re-applies a stored choice on later visits", () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    applyStoredGoogleConsent();
    expect((dl()[0] as unknown[])[2]).toMatchObject({ analytics_storage: "granted" });
  });
});

describe("landing_view", () => {
  it("is sent only once", () => {
    sendLandingView();
    sendLandingView();
    const events = dl().filter((e) => (e as unknown[])[0] === "event");
    expect(events).toHaveLength(1);
    expect((events[0] as unknown[])[1]).toBe("landing_view");
    expect((events[0] as unknown[])[2]).toEqual({
      page_location: window.location.href,
      page_title: document.title,
      send_to: "G-C7X99HEE6W",
    });
  });
});

describe("attribution propagation", () => {
  it("copies params to /Paywall without duplicates", () => {
    const url = decorateAppUrl("https://app.lunae-app.fr/Paywall", SEARCH);
    const parsed = new URL(url);
    expect(parsed.pathname).toBe("/Paywall");
    expect(parsed.searchParams.get("gclid")).toBe("ABC123");
    expect(parsed.searchParams.get("utm_source")).toBe("google");
    expect(parsed.searchParams.get("_gl")).toBe("1x");
    expect(parsed.searchParams.getAll("gclid")).toHaveLength(1);
    expect(parsed.searchParams.get("other")).toBeNull();
  });

  it("copies params to /checkout/gift and keeps existing ones", () => {
    const url = decorateAppUrl("https://app.lunae-app.fr/checkout/gift?ref=x", SEARCH);
    const parsed = new URL(url);
    expect(parsed.pathname).toBe("/checkout/gift");
    expect(parsed.searchParams.get("ref")).toBe("x");
    expect(parsed.searchParams.get("utm_campaign")).toBe("lunae");
  });

  it("leaves non-app URLs untouched", () => {
    expect(decorateAppUrl("https://lunae-app.fr/cgv", SEARCH)).toBe("https://lunae-app.fr/cgv");
  });

  it("does not write persistent storage without ad consent", () => {
    persistAttributionParams(SEARCH);
    expect(document.cookie).not.toContain(ATTRIBUTION_COOKIE);
    // direct URL pass-through still works
    expect(decorateAppUrl("https://app.lunae-app.fr/Paywall", SEARCH)).toContain("gclid=ABC123");
  });

  it("stores params first-party once consent is granted", () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    persistAttributionParams(SEARCH);
    expect(document.cookie).toContain(ATTRIBUTION_COOKIE);
    expect(currentAttributionParams("")).toMatchObject({ gclid: "ABC123" });
    expect(decorateAppUrl("https://app.lunae-app.fr/checkout/gift", "")).toContain("gclid=ABC123");
  });
});
