import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const STORAGE_KEY = "lunea_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem(STORAGE_KEY, accepted ? "accepted" : "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:px-6 md:pb-6"
    >
      <div className="max-w-3xl mx-auto bg-card border border-border/60 rounded-2xl shadow-lg px-5 py-4 md:px-7 md:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-body text-sm text-foreground/75 leading-relaxed flex-1">
          Lunéa utilise des cookies essentiels au fonctionnement du site. En continuant, tu acceptes notre{" "}
          <Link
            to="/politique-confidentialite"
            className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
          >
            politique de confidentialité
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleChoice(false)}
            className="rounded-full border-foreground/20 text-foreground/70 hover:bg-accent/40 text-xs h-8 px-4"
          >
            Refuser
          </Button>
          <Button
            variant="hero"
            size="sm"
            onClick={() => handleChoice(true)}
            className="rounded-full text-xs h-8 px-4"
          >
            Accepter
          </Button>
          <button
            onClick={() => handleChoice(false)}
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
