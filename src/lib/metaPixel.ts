// Meta pixel loader — advertising-consent-gated, host+path-scoped.
// Pixel 1610792703917119. Loads ONLY on hostname "lunae-app.fr" and pathname "/".
//
// Deliberate choices:
//  - No <noscript><img src="facebook.com/tr..."> fallback in index.html: on a
//    static page that request would fire before any consent can be read.
//  - No dynamic <img> tracking pixel in addition to the script: it would send a
//    second PageView for the same page load.
//  - Never auto-injected from index.html; never active without explicit
//    advertising consent (see src/lib/consent.ts).

import { getStoredAdsConsent } from "@/lib/consent";

export const META_PIXEL_ID = "1610792703917119";
export const META_PIXEL_SCRIPT_ID = "lunae-meta-pixel";
export const META_PIXEL_SRC = "https://connect.facebook.net/en_US/fbevents.js";

const STARTED_FLAG = "__lunaeMetaPixelStarted";
const PAGEVIEW_FLAG = "__lunaeMetaPixelPageViewSent";

export interface LocationLike {
  hostname: string;
  pathname: string;
}

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

type PixelWindow = Window &
  Record<string, unknown> & { fbq?: Fbq; _fbq?: Fbq };

/** Strict allowlist — no exception for preview, www, app subdomain or legal pages. */
export const isMetaPixelAllowedLocation = (loc: LocationLike): boolean =>
  loc.hostname === "lunae-app.fr" && loc.pathname === "/";

const ensureFbq = (w: PixelWindow): Fbq => {
  if (typeof w.fbq === "function") return w.fbq;
  const stub: Fbq = function (this: unknown, ...args: unknown[]) {
    if (stub.callMethod) stub.callMethod.apply(stub, args);
    else (stub.queue = stub.queue || []).push(args);
  } as Fbq;
  stub.push = stub;
  stub.loaded = true;
  stub.version = "2.0";
  stub.queue = [];
  w.fbq = stub;
  if (!w._fbq) w._fbq = stub;
  return stub;
};

/**
 * Start the Meta pixel. Self-guarded: verifies the strict host/path predicate
 * AND explicit granted advertising consent before doing anything.
 * Idempotent via DOM id + global markers: safe under React StrictMode, repeated
 * consent updates and internal SPA navigations (exactly one PageView per load).
 */
export const startMetaPixel = (loc: LocationLike = window.location): void => {
  if (!isMetaPixelAllowedLocation(loc)) return;
  if (getStoredAdsConsent() !== "granted") return;

  const w = window as unknown as PixelWindow;
  if (w[STARTED_FLAG]) return;
  w[STARTED_FLAG] = true;

  const fbq = ensureFbq(w);

  if (!document.getElementById(META_PIXEL_SCRIPT_ID)) {
    const s = document.createElement("script");
    s.id = META_PIXEL_SCRIPT_ID;
    s.async = true;
    s.src = META_PIXEL_SRC;
    document.head.appendChild(s);
  }

  fbq("consent", "grant");
  fbq("init", META_PIXEL_ID);

  if (!w[PAGEVIEW_FLAG]) {
    w[PAGEVIEW_FLAG] = true;
    fbq("track", "PageView");
  }
};

/**
 * Withdrawal: revoke Meta consent, remove the script, clear markers.
 * No further event is emitted. Does NOT change the stored preference.
 */
export const stopMetaPixel = (): void => {
  const w = window as unknown as PixelWindow;

  if (typeof w.fbq === "function") {
    try {
      w.fbq("consent", "revoke");
    } catch {
      /* ignore */
    }
  }

  document
    .querySelectorAll<HTMLScriptElement>(
      `script#${META_PIXEL_SCRIPT_ID}, script[src^="${META_PIXEL_SRC}"]`,
    )
    .forEach((el) => el.remove());

  w[STARTED_FLAG] = false;
  // PAGEVIEW_FLAG stays set: one PageView per real page load, never re-sent
  // after an internal navigation or a withdrawal followed by a new grant.
};
