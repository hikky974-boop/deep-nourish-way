import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CGV from "./pages/CGV.tsx";
import CGU from "./pages/CGU.tsx";
import Aide from "./pages/Aide.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import NotFound from "./pages/NotFound.tsx";
import CookieBanner from "./components/CookieBanner.tsx";
import ClarityManager from "./components/ClarityManager.tsx";

const canonicalMap: Record<string, string> = {
  "/": "https://lunae-app.fr/",
  "/politique-confidentialite": "https://lunae-app.fr/politique-confidentialite",
  "/cgv": "https://lunae-app.fr/cgv",
  "/cgu": "https://lunae-app.fr/cgu",
  "/mentions-legales": "https://lunae-app.fr/mentions-legales",
  "/aide": "https://lunae-app.fr/aide",
};

const titleMap: Record<string, string> = {
  "/": "Lunaé — Libère ta relation à la nourriture",
  "/mentions-legales": "Mentions légales — Lunaé",
  "/politique-confidentialite": "Politique de confidentialité | Lunaé",
  "/cgv": "Conditions générales de vente | Lunaé",
  "/cgu": "Conditions générales d’utilisation | Lunaé",
  "/aide": "Aide et contact | Lunaé",
};

const HOME_OG_TITLE = "Lunaé — Libère ta relation à la nourriture";
const HOME_OG_DESCRIPTION =
  "Un parcours personnalisé de 33 jours pour mieux comprendre vos émotions, vos automatismes et vos envies de manger.";

const descriptionMap: Record<string, string> = {
  "/": "Découvrez Lunaé, un programme personnalisé de 33 jours pour comprendre l’alimentation émotionnelle, apaiser les envies de manger et sortir des automatismes.",
  "/mentions-legales":
    "Consultez les mentions légales du site Lunaé, les informations relatives à l’éditeur, à l’hébergement et aux conditions d’utilisation du site.",
  "/politique-confidentialite":
    "Découvrez comment Lunaé collecte, utilise et protège vos données personnelles, ainsi que les droits dont vous disposez.",
  "/cgv":
    "Consultez les conditions générales de vente du programme Lunaé, notamment les modalités de paiement, d’accès et de rétractation.",
  "/cgu": "Consultez les conditions générales d’utilisation du site et du programme Lunaé.",
  "/aide": "Retrouvez les réponses aux questions fréquentes et les moyens de contacter l’équipe Lunaé.",
};

const ogTitleMap: Record<string, string> = {
  "/": HOME_OG_TITLE,
  "/mentions-legales": "Mentions légales — Lunaé",
  "/politique-confidentialite": "Politique de confidentialité | Lunaé",
  "/cgv": "Conditions générales de vente | Lunaé",
  "/cgu": "Conditions générales d’utilisation | Lunaé",
  "/aide": "Aide et contact | Lunaé",
};

const ogDescriptionMap: Record<string, string> = {
  "/": HOME_OG_DESCRIPTION,
  "/mentions-legales": descriptionMap["/mentions-legales"],
  "/politique-confidentialite": descriptionMap["/politique-confidentialite"],
  "/cgv": descriptionMap["/cgv"],
  "/cgu": descriptionMap["/cgu"],
  "/aide": descriptionMap["/aide"],
};

const JSONLD_WEBSITE_ID = "ld-website-lunae";
const JSONLD_WEBSITE_CONTENT = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lunaé",
  url: "https://lunae-app.fr/",
});

type MetaSelector =
  | { attr: "name"; value: string }
  | { attr: "property"; value: string };

const upsertMeta = (selector: MetaSelector, content: string) => {
  const query = `meta[${selector.attr}="${selector.value}"]`;
  const nodes = Array.from(document.head.querySelectorAll(query));
  const [first, ...rest] = nodes;
  rest.forEach((el) => el.remove());
  let el = first as HTMLMetaElement | undefined;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(selector.attr, selector.value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const removeMeta = (selector: MetaSelector) => {
  const query = `meta[${selector.attr}="${selector.value}"]`;
  document.head.querySelectorAll(query).forEach((el) => el.remove());
};

const CanonicalManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const href = canonicalMap[path];

    document.head.querySelectorAll('link[rel="canonical"]').forEach((el) => el.remove());

    if (href) {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", href);
      document.head.appendChild(link);
    }
  }, [location.pathname]);

  return null;
};

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (titleMap[path]) {
      document.title = titleMap[path];
    } else {
      document.title = "Page introuvable | Lunaé";
    }
  }, [location.pathname]);

  return null;
};

const MetaManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const description = descriptionMap[path];
    const ogTitle = ogTitleMap[path];
    const ogDescription = ogDescriptionMap[path];
    const isKnownRoute = Boolean(description && ogTitle && ogDescription);

    if (isKnownRoute) {
      upsertMeta({ attr: "name", value: "description" }, description!);
      upsertMeta({ attr: "property", value: "og:title" }, ogTitle!);
      upsertMeta({ attr: "property", value: "og:description" }, ogDescription!);
      if (path === "/mentions-legales") {
        upsertMeta({ attr: "name", value: "robots" }, "noindex, follow");
      } else {
        removeMeta({ attr: "name", value: "robots" });
      }
    } else {
      removeMeta({ attr: "name", value: "description" });
      removeMeta({ attr: "property", value: "og:title" });
      removeMeta({ attr: "property", value: "og:description" });
      upsertMeta({ attr: "name", value: "robots" }, "noindex");
    }

    // JSON-LD WebSite: only on home
    const existing = document.getElementById(JSONLD_WEBSITE_ID);
    if (path === "/") {
      if (existing) {
        existing.textContent = JSONLD_WEBSITE_CONTENT;
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = JSONLD_WEBSITE_ID;
        script.textContent = JSONLD_WEBSITE_CONTENT;
        document.head.appendChild(script);
      }
    } else if (existing) {
      existing.remove();
    }
  }, [location.pathname]);

  return null;
};


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CanonicalManager />
        <TitleManager />
        <MetaManager />
        <ClarityManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/aide" element={<Aide />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
