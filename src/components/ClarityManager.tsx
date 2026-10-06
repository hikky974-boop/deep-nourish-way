import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  CLARITY_CONSENT_EVENT,
  getStoredConsent,
  isClarityAllowedLocation,
  startClarity,
  stopClarity,
} from "@/lib/clarity";

// Use layout effect in the browser, plain effect during SSR/test SSR (defensive).
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ClarityManager = () => {
  const location = useLocation();

  useIsoLayoutEffect(() => {
    const apply = () => {
      const consent = getStoredConsent();
      const loc = {
        hostname: window.location.hostname,
        pathname: location.pathname,
      };
      if (consent === "granted" && isClarityAllowedLocation(loc)) {
        startClarity(loc);
      } else {
        // Covers: no consent, denied, off-host, off-path, and SPA leaving "/".
        // Does NOT change stored preference.
        stopClarity();
      }
    };
    apply();
    const onConsent = () => apply();
    window.addEventListener(CLARITY_CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CLARITY_CONSENT_EVENT, onConsent);
  }, [location.pathname]);

  return null;
};

export default ClarityManager;
