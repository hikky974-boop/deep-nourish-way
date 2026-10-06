import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { CONSENT_KEY } from "@/lib/clarity";
import { ADS_CONSENT_KEY, setAdsConsent } from "@/lib/consent";
import {
  META_PIXEL_ID,
  META_PIXEL_SCRIPT_ID,
  META_PIXEL_SRC,
  isMetaPixelAllowedLocation,
  startMetaPixel,
  stopMetaPixel,
} from "@/lib/metaPixel";

const ALLOWED = { hostname: "lunae-app.fr", pathname: "/" };
const APP_SUB = { hostname: "app.lunae-app.fr", pathname: "/" };
const LEGAL = { hostname: "lunae-app.fr", pathname: "/politique-confidentialite" };

const scriptCount = () =>
  document.querySelectorAll(`script[src^="${META_PIXEL_SRC}"]`).length;

type Fbq = ((...args: unknown[]) => void) & { queue?: unknown[] };
const calls = (): unknown[][] => {
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  return (fbq?.queue as unknown[][]) ?? [];
};

const cleanup = () => {
  localStorage.clear();
  document
    .querySelectorAll(`script[src^="${META_PIXEL_SRC}"], script#${META_PIXEL_SCRIPT_ID}`)
    .forEach((n) => n.remove());
  const w = window as unknown as Record<string, unknown>;
  delete w.fbq;
  delete w._fbq;
  delete w.__lunaeMetaPixelStarted;
  delete w.__lunaeMetaPixelPageViewSent;
};

beforeEach(cleanup);
afterEach(cleanup);

describe("scope", () => {
  it("is allowed only on lunae-app.fr /", () => {
    expect(isMetaPixelAllowedLocation(ALLOWED)).toBe(true);
    expect(isMetaPixelAllowedLocation(APP_SUB)).toBe(false);
    expect(isMetaPixelAllowedLocation(LEGAL)).toBe(false);
    expect(isMetaPixelAllowedLocation({ hostname: "www.lunae-app.fr", pathname: "/" })).toBe(false);
    expect(isMetaPixelAllowedLocation({ hostname: "preview.lovable.app", pathname: "/" })).toBe(false);
  });

  it("does not load on legal pages or on app.lunae-app.fr even with ad consent", () => {
    setAdsConsent("granted");
    startMetaPixel(LEGAL);
    startMetaPixel(APP_SUB);
    expect(scriptCount()).toBe(0);
    expect((window as unknown as { fbq?: unknown }).fbq).toBeUndefined();
  });
});

describe("consent gating", () => {
  it("loads nothing without any choice", () => {
    startMetaPixel(ALLOWED);
    expect(scriptCount()).toBe(0);
    expect((window as unknown as { fbq?: unknown }).fbq).toBeUndefined();
  });

  it("loads nothing when advertising is refused", () => {
    setAdsConsent("denied");
    startMetaPixel(ALLOWED);
    expect(scriptCount()).toBe(0);
    expect((window as unknown as { fbq?: unknown }).fbq).toBeUndefined();
  });

  it("treats an old analytics-only consent as NO advertising consent", () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    expect(localStorage.getItem(ADS_CONSENT_KEY)).toBeNull();
    startMetaPixel(ALLOWED);
    expect(scriptCount()).toBe(0);
  });
});

describe("granted advertising consent", () => {
  it("loads one script, inits the exact pixel id and sends one PageView", () => {
    setAdsConsent("granted");
    startMetaPixel(ALLOWED);

    expect(scriptCount()).toBe(1);
    const s = document.getElementById(META_PIXEL_SCRIPT_ID) as HTMLScriptElement;
    expect(s.src).toBe(META_PIXEL_SRC);
    expect(s.async).toBe(true);

    expect(calls()).toEqual([
      ["consent", "grant"],
      ["init", META_PIXEL_ID],
      ["track", "PageView"],
    ]);
    expect(META_PIXEL_ID).toBe("1610792703917119");
  });

  it("stays at one script, one init and one PageView on repeated calls", () => {
    setAdsConsent("granted");
    startMetaPixel(ALLOWED);
    startMetaPixel(ALLOWED);
    setAdsConsent("granted");
    startMetaPixel(ALLOWED);

    expect(scriptCount()).toBe(1);
    expect(calls().filter((c) => c[0] === "init")).toHaveLength(1);
    expect(calls().filter((c) => c[1] === "PageView")).toHaveLength(1);
  });
});

describe("withdrawal", () => {
  it("revokes consent, removes the script and emits nothing more", () => {
    setAdsConsent("granted");
    startMetaPixel(ALLOWED);
    expect(scriptCount()).toBe(1);

    setAdsConsent("denied");
    stopMetaPixel();

    expect(scriptCount()).toBe(0);
    expect(document.getElementById(META_PIXEL_SCRIPT_ID)).toBeNull();
    expect(calls()[calls().length - 1]).toEqual(["consent", "revoke"]);

    // A later start attempt (refused) emits nothing.
    startMetaPixel(ALLOWED);
    expect(scriptCount()).toBe(0);
    expect(calls().filter((c) => c[1] === "PageView")).toHaveLength(1);
  });

  // No <noscript> facebook.com/tr fallback and no extra <img>: the first would
  // fire before consent can be read on a static page, the second would double
  // the PageView.
  it("never uses a tracking image in addition to the script", () => {
    setAdsConsent("granted");
    startMetaPixel(ALLOWED);
    expect(document.querySelectorAll('img[src*="facebook.com/tr"]')).toHaveLength(0);
    expect(document.querySelectorAll("noscript")).toHaveLength(0);
  });
});
