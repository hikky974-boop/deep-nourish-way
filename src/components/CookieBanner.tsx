import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  getStoredConsent,
  OPEN_BANNER_EVENT,
  setConsent,
  type ClarityConsent,
} from "@/lib/clarity";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Legacy "refused" is migrated to "denied" inside getStoredConsent().
    // Legacy "accepted" returns null so we prompt again for explicit Clarity consent.
    if (getStoredConsent() === null) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_BANNER_EVENT, open);
    return () => window.removeEventListener(OPEN_BANNER_EVENT, open);
  }, []);

  const choose = (v: ClarityConsent) => {
    setConsent(v);
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
          <p className="text-body text-sm font-medium text-foreground/90 leading-relaxed">
            Lunaé utilise des cookies
          </p>
          <p className="text-body text-sm text-foreground/75 leading-relaxed">
            Nous utilisons des cookies pour comprendre comment le site est utilisé et améliorer votre expérience.{" "}
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
            Tout refuser
          </Button>
          <Button
            variant="hero"
            size="sm"
            onClick={() => choose("granted")}
            className="rounded-full text-xs h-8 px-4"
          >
            Accepter la mesure d’audience
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
