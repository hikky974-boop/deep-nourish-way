// Microsoft Clarity loader — consent-gated, host+path-scoped.
// Project: xmrxotpa8x. Loads ONLY on hostname "lunae-app.fr" and pathname "/".
// Never auto-injected via index.html; never active without explicit granted consent.

export const CLARITY_PROJECT_ID = "xmrxotpa8x";
export const CLARITY_SCRIPT_ID = "lunae-clarity-script";
export const CLARITY_SRC = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;

export const CONSENT_KEY = "lunae_clarity_consent_v1";
export const LEGACY_CONSENT_KEY = "lunea_cookie_consent";
export const CLARITY_CONSENT_EVENT = "lunae:clarity-consent-change";
export const OPEN_BANNER_EVENT = "lunae:open-cookie-banner";

const STARTED_FLAG = "__lunaeClarityStarted";

export type ClarityConsent = "granted" | "denied";
export interface LocationLike {
  hostname: string;
  pathname: string;
}

/** Strict allowlist — no exception for preview, www, or app subdomain. */
export const isClarityAllowedLocation = (loc: LocationLike): boolean =>
  loc.hostname === "lunae-app.fr" && loc.pathname === "/";

/**
 * Read stored consent. Migrates legacy key:
 *  - legacy "refused" -> "denied" (persisted, legacy removed)
 *  - legacy "accepted" -> null (explicit re-consent required for Clarity)
 */
export const getStoredConsent = (): ClarityConsent | null => {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    if (v === "granted" || v === "denied") return v;
    const legacy = localStorage.getItem(LEGACY_CONSENT_KEY);
    if (legacy === "refused") {
      localStorage.setItem(CONSENT_KEY, "denied");
      localStorage.removeItem(LEGACY_CONSENT_KEY);
      return "denied";
    }
    return null;
  } catch {
    return null;
  }
};

export const setConsent = (v: ClarityConsent): void => {
  try {
    localStorage.setItem(CONSENT_KEY, v);
    localStorage.removeItem(LEGACY_CONSENT_KEY);
  } catch {
    /* ignore quota / disabled storage */
  }
  try {
    window.dispatchEvent(new CustomEvent(CLARITY_CONSENT_EVENT, { detail: v }));
  } catch {
    /* ignore */
  }
};

const expireCookie = (name: string, domain?: string) => {
  const base = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  document.cookie = domain ? `${base}; domain=${domain}` : base;
};

export const expireClarityCookies = (): void => {
  for (const name of ["_clck", "_clsk"]) {
    expireCookie(name); // host-only
    expireCookie(name, "lunae-app.fr");
    expireCookie(name, ".lunae-app.fr");
  }
};

/**
 * Start Clarity. Self-guarded: verifies the strict host/path predicate AND
 * explicit granted consent (via getStoredConsent) before doing anything.
 * Idempotent via DOM id + global marker, safe under React StrictMode / rerenders.
 */
export const startClarity = (loc: LocationLike = window.location): void => {
  if (!isClarityAllowedLocation(loc)) return;
  if (getStoredConsent() !== "granted") return;

  const w = window as unknown as Record<string, unknown> & {
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
  };

  if (w[STARTED_FLAG]) return;
  if (document.getElementById(CLARITY_SCRIPT_ID)) return;

  if (typeof w.clarity !== "function") {
    const stub = function (this: unknown, ...args: unknown[]) {
      (stub.q = stub.q || []).push(args);
    } as ((...args: unknown[]) => void) & { q?: unknown[] };
    w.clarity = stub;
  }

  // Queue consent BEFORE injecting the script.
  w.clarity!("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });

  const s = document.createElement("script");
  s.id = CLARITY_SCRIPT_ID;
  s.type = "text/javascript";
  s.async = true;
  s.src = CLARITY_SRC;
  document.head.appendChild(s);

  w[STARTED_FLAG] = true;
};

/**
 * Stop Clarity: revoke consent (if runtime present), remove any residual
 * scripts, expire cookies, clear global marker and window.clarity.
 * Always performs DOM/cookie cleanup, even if no runtime was detected —
 * so lingering _clck/_clsk cookies can be cleared from any page.
 * Does NOT change stored preference.
 */
export const stopClarity = (): void => {
  const w = window as unknown as Record<string, unknown> & {
    clarity?: (...args: unknown[]) => void;
  };



  if (typeof w.clarity === "function") {
    try {
      w.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
    } catch {
      /* ignore */
    }
    try {
      w.clarity("consent", false);
    } catch {
      /* ignore */
    }
    try {
      w.clarity("stop");
    } catch {
      /* ignore */
    }
  }

  document
    .querySelectorAll<HTMLScriptElement>(
      `script[src^="https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}"], script#${CLARITY_SCRIPT_ID}`,
    )
    .forEach((el) => el.remove());

  expireClarityCookies();

  w[STARTED_FLAG] = false;
  try {
    delete (w as { clarity?: unknown }).clarity;
  } catch {
    (w as { clarity?: unknown }).clarity = undefined;
  }
};
