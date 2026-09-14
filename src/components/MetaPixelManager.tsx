import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { ADS_CONSENT_EVENT, getStoredAdsConsent } from "@/lib/consent";
import { isMetaPixelAllowedLocation, startMetaPixel, stopMetaPixel } from "@/lib/metaPixel";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const MetaPixelManager = () => {
  const location = useLocation();

  useIsoLayoutEffect(() => {
    const apply = () => {
      const loc = {
        hostname: window.location.hostname,
        pathname: location.pathname,
      };
      if (getStoredAdsConsent() === "granted" && isMetaPixelAllowedLocation(loc)) {
        startMetaPixel(loc);
      } else {
        // Covers: no choice, refusal, withdrawal, off-host, off-path.
        stopMetaPixel();
      }
    };
    apply();
    const onConsent = () => apply();
    window.addEventListener(ADS_CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(ADS_CONSENT_EVENT, onConsent);
  }, [location.pathname]);

  return null;
};

export default MetaPixelManager;
