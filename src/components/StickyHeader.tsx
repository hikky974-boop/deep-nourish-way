import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoLunea from "@/assets/logo-lunea.png";

const StickyHeader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToCta = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50"
          style={{ backgroundColor: "hsl(37 27% 95% / 0.92)" }}
        >
          <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
            <img src={logoLunea} alt="Lunéa" className="h-14 lg:h-16 w-auto object-contain" />
            <Button variant="hero" size="sm" onClick={scrollToCta} className="text-sm px-6 h-9">
              Commencer
            </Button>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
