import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  CLARITY_SCRIPT_ID,
  CLARITY_SRC,
  CONSENT_KEY,
  LEGACY_CONSENT_KEY,
  expireClarityCookies,
  getStoredConsent,
  isClarityAllowedLocation,
  setConsent,
  startClarity,
  stopClarity,
} from "./clarity";

const ALLOWED = { hostname: "lunae-app.fr", pathname: "/" };
const APP_SUB = { hostname: "app.lunae-app.fr", pathname: "/" };
const WWW = { hostname: "www.lunae-app.fr", pathname: "/" };
const LEGAL = { hostname: "lunae-app.fr", pathname: "/politique-confidentialite" };

const scriptCount = () =>
  document.querySelectorAll(`script[src^="${CLARITY_SRC}"]`).length;

const hasClickCookies = () => /(?:^|; )_(clck|clsk)=/.test(document.cookie);

const cleanup = () => {
  localStorage.clear();
  document
    .querySelectorAll(`script[src^="${CLARITY_SRC}"], script#${CLARITY_SCRIPT_ID}`)
    .forEach((n) => n.remove());
  delete (window as unknown as Record<string, unknown>).clarity;
  delete (window as unknown as Record<string, unknown>).__lunaeClarityStarted;
  expireClarityCookies();
};

beforeEach(cleanup);
afterEach(cleanup);

// ---------------------------------------------------------------------------
// 0. Predicate
// ---------------------------------------------------------------------------
describe("isClarityAllowedLocation", () => {
  it("is true only on lunae-app.fr /", () => {
    expect(isClarityAllowedLocation(ALLOWED)).toBe(true);
    expect(isClarityAllowedLocation(APP_SUB)).toBe(false);
    expect(isClarityAllowedLocation(WWW)).toBe(false);
    expect(isClarityAllowedLocation(LEGAL)).toBe(false);
    expect(isClarityAllowedLocation({ hostname: "preview.lovable.app", pathname: "/" })).toBe(false);
    expect(isClarityAllowedLocation({ hostname: "lunae-app.fr", pathname: "/cgv" })).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Legacy migration
// ---------------------------------------------------------------------------
describe("legacy consent migration", () => {
  it("maps legacy 'refused' to denied and removes legacy key", () => {
    localStorage.setItem(LEGACY_CONSENT_KEY, "refused");
    expect(getStoredConsent()).toBe("denied");
    expect(localStorage.getItem(LEGACY_CONSENT_KEY)).toBe(null);
    expect(localStorage.getItem(CONSENT_KEY)).toBe("denied");
  });

  it("NEVER treats legacy 'accepted' as Clarity granted", () => {
    localStorage.setItem(LEGACY_CONSENT_KEY, "accepted");
    expect(getStoredConsent()).toBe(null);
  });

  it("setConsent removes legacy key after a new choice", () => {
    localStorage.setItem(LEGACY_CONSENT_KEY, "accepted");
    setConsent("granted");
    expect(localStorage.getItem(LEGACY_CONSENT_KEY)).toBe(null);
    expect(localStorage.getItem(CONSENT_KEY)).toBe("granted");
  });
});

// ---------------------------------------------------------------------------
// 1. No choice
// ---------------------------------------------------------------------------
describe("1. no choice", () => {
  it("does not inject script, create window.clarity, or set cookies", () => {
    expect(getStoredConsent()).toBe(null);
    expect(scriptCount()).toBe(0);
    expect((window as unknown as { clarity?: unknown }).clarity).toBeUndefined();
    expect(hasClickCookies()).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// 2. Denied / Tout refuser
// ---------------------------------------------------------------------------
describe("2. denied", () => {
  it("stays inert even after reset", () => {
    setConsent("denied");
    expect(scriptCount()).toBe(0);
    expect((window as unknown as { clarity?: unknown }).clarity).toBeUndefined();
    expect(hasClickCookies()).toBe(false);
    // Simulate manager reload: consent still denied -> no start.
    expect(getStoredConsent()).toBe("denied");
    expect(scriptCount()).toBe(0);
    expect(hasClickCookies()).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// 3. Granted + lunae-app.fr /
// ---------------------------------------------------------------------------
describe("3. granted on lunae-app.fr /", () => {
  it("injects exactly one script with consentv2 analytics=granted, ads=denied", () => {
    startClarity(ALLOWED);
    expect(scriptCount()).toBe(1);
    const s = document.getElementById(CLARITY_SCRIPT_ID) as HTMLScriptElement;
    expect(s).not.toBeNull();
    expect(s.src).toBe(CLARITY_SRC);
    expect(s.async).toBe(true);
    expect(s.type).toBe("text/javascript");

    const q = (window as unknown as { clarity: { q: unknown[][] } }).clarity.q;
    expect(q[0][0]).toBe("consentv2");
    expect(q[0][1]).toEqual({ ad_Storage: "denied", analytics_Storage: "granted" });
  });

  it("is idempotent across double start and rerenders (StrictMode-safe)", () => {
    startClarity(ALLOWED);
    startClarity(ALLOWED);
    startClarity(ALLOWED);
    expect(scriptCount()).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// 4. Granted + app.lunae-app.fr /
// ---------------------------------------------------------------------------
describe("4. granted on app.lunae-app.fr /", () => {
  it("does not inject any script and does not create window.clarity", () => {
    startClarity(APP_SUB);
    expect(scriptCount()).toBe(0);
    expect((window as unknown as { clarity?: unknown }).clarity).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// 5. Granted + legal page ; SPA leave from /
// ---------------------------------------------------------------------------
describe("5. granted on legal page + SPA leaving /", () => {
  it("does not inject on /politique-confidentialite", () => {
    startClarity(LEGAL);
    expect(scriptCount()).toBe(0);
    expect((window as unknown as { clarity?: unknown }).clarity).toBeUndefined();
  });

  it("stop on SPA leave from / cleans DOM without changing stored preference", () => {
    setConsent("granted");
    startClarity(ALLOWED);
    expect(scriptCount()).toBe(1);
    // simulate manager reacting to a route change off "/"
    stopClarity();
    expect(scriptCount()).toBe(0);
    expect((window as unknown as { clarity?: unknown }).clarity).toBeUndefined();
    // preference untouched
    expect(localStorage.getItem(CONSENT_KEY)).toBe("granted");
    expect(getStoredConsent()).toBe("granted");
  });
});

// ---------------------------------------------------------------------------
// 6. Withdrawal
// ---------------------------------------------------------------------------
describe("6. withdrawal", () => {
  it("emits consentv2 denied/denied + consent false + stop, removes script, expires cookies, and blocks restart", () => {
    setConsent("granted");
    startClarity(ALLOWED);
    expect(scriptCount()).toBe(1);

    // Seed cookies to prove they get expired.
    document.cookie = "_clck=abc; path=/";
    document.cookie = "_clsk=def; path=/";
    expect(hasClickCookies()).toBe(true);

    // Spy on clarity() calls emitted during stop.
    const calls: unknown[][] = [];
    (window as unknown as { clarity: (...a: unknown[]) => void }).clarity = (
      ...args: unknown[]
    ) => {
      calls.push(args);
    };

    setConsent("denied");
    stopClarity();

    expect(calls[0]).toEqual([
      "consentv2",
      { ad_Storage: "denied", analytics_Storage: "denied" },
    ]);
    expect(calls[1]).toEqual(["consent", false]);
    expect(calls[2]).toEqual(["stop"]);

    expect(scriptCount()).toBe(0);
    expect(document.getElementById(CLARITY_SCRIPT_ID)).toBeNull();
    expect(hasClickCookies()).toBe(false);
    expect((window as unknown as { clarity?: unknown }).clarity).toBeUndefined();

    // Preference is denied -> manager would not restart.
    expect(getStoredConsent()).toBe("denied");
  });
});
