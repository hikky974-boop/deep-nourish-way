import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  getStoredConsent,
  OPEN_BANNER_EVENT,
  setConsent,
  type ClarityConsent,
} from "@/lib/clarity";
import {
  applyStoredGoogleConsent,
  handleLandingConsentChange,
  persistAttributionParams,
  updateGoogleConsent,
} from "@/lib/tracking";
import { needsConsentChoice, setAdsConsent, syncAdsConsentCookie } from "@/lib/consent";

// Use layout effect in the browser so the stored consent update runs ASAP.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useIsoLayoutEffect(() => {
    // Legacy keys are migrated to "lunae_consent_v1" inside getStoredConsent().
    // Legacy "accepted" returns null so we prompt again for explicit consent.
    // An older visitor with analytics-only consent still has no advertising
    // choice: the banner reopens to ask for it explicitly.
    if (needsConsentChoice()) setVisible(true);
    // Re-apply a previously stored choice to Google Consent Mode.
    applyStoredGoogleConsent();
    // Mirror an existing explicit advertising choice to the shared cookie.
    syncAdsConsentCookie();
    persistAttributionParams();
    const open = () => setVisible(true);
    window.addEventListener(OPEN_BANNER_EVENT, open);
    return () => window.removeEventListener(OPEN_BANNER_EVENT, open);
  }, []);

  const choose = (v: ClarityConsent) => {
    const previousConsent = getStoredConsent();
    setConsent(v);
    // The two categories are answered together by these two buttons:
    // "Accepter les cookies" = audience + advertising measurement,
    // "Refuser" = every category denied.
    setAdsConsent(v);
    updateGoogleConsent(v, v);
    if (v === "granted") persistAttributionParams();
    handleLandingConsentChange(previousConsent, v);
    setVisible(false);
  };

  if (!visible) return null;


  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:px-6 md:pb-6"
    >
      <div className="max-w-3xl mx-auto bg-card border border-border/60 rounded-2xl shadow-lg px-5 py-4 md:px-7 md:py-5 flex flex-col gap-4">
        <div className="space-y-2">
          <p className="text-body text-sm text-foreground/85 leading-relaxed">
            <strong className="font-medium">Lunaé utilise des cookies</strong>
          </p>
          <p className="text-body text-sm text-foreground/75 leading-relaxed">
            « Accepter les cookies » couvre la mesure d’audience (comprendre comment le site est utilisé)
            et la mesure publicitaire Meta et Google. « Refuser » conserve toutes ces catégories désactivées.
          </p>
          <p className="text-body text-xs text-foreground/60">
            <Link
              to="/politique-confidentialite"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              En savoir plus
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => choose("denied")}
            className="rounded-full border-foreground/20 text-foreground/70 hover:bg-accent/40 text-xs h-8 px-4"
          >
            Refuser
          </Button>
          <Button
            variant="hero"
            size="sm"
            onClick={() => choose("granted")}
            className="rounded-full text-xs h-8 px-4"
          >
            Accepter les cookies
          </Button>
          <button
            onClick={() => choose("denied")}
            aria-label="Fermer"
            className="ml-1 text-foreground/40 hover:text-foreground/70 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
