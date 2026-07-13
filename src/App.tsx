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

const canonicalMap: Record<string, string> = {
  "/": "https://lunae-app.fr/",
  "/politique-confidentialite": "https://lunae-app.fr/politique-confidentialite",
  "/cgv": "https://lunae-app.fr/cgv",
  "/cgu": "https://lunae-app.fr/cgu",
  "/mentions-legales": "https://lunae-app.fr/mentions-legales",
  "/aide": "https://lunae-app.fr/aide",
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CanonicalManager />
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
