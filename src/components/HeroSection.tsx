import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-botanical.jpg";

const HeroSection = () => {
  const scrollToCta = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Fond subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-background to-section-alt" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12 pt-24 pb-18 md:pt-[96px] md:pb-[72px]">
        {/* Grille 2 colonnes desktop, stack mobile */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[64px]">
          {/* Colonne gauche — texte */}
          <div className="lg:w-[56%] max-w-[560px]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-7"
            >
              Programme d'hypnose et PNL
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-display text-4xl md:text-5xl lg:text-[3.4rem] font-light leading-[1.15] mb-6"
            >
              Libérez-vous de l'intérieur.
              <br />
              <span className="italic font-light text-primary">Le poids suit naturellement.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-body text-base md:text-lg text-muted-foreground leading-relaxed mb-9 max-w-[480px]"
            >
              Un programme guidé associant hypnose et PNL pour apaiser votre relation
              à la nourriture, réduire les automatismes émotionnels et retrouver un
              équilibre durable — sans régime, sans lutte permanente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="space-y-3"
            >
              <Button variant="hero" size="xl" onClick={scrollToCta}>
                Commencer le programme
              </Button>
              <p className="text-body text-xs text-muted-foreground/70 tracking-wide">
                Accès immédiat — à votre rythme
              </p>
            </motion.div>
          </div>

          {/* Colonne droite — bloc visuel */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="lg:w-[44%] mt-12 lg:mt-0"
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                height: "clamp(340px, 44vw, 500px)",
                borderRadius: "32px",
                backgroundColor: "hsl(38, 30%, 97%)",
                border: "1px solid hsl(30, 18%, 86%)",
              }}
            >
              <img
                src={heroImage}
                alt="Illustration botanique — branche d'olivier"
                loading="eager"
                className="absolute bottom-0 right-0"
                style={{
                  maxWidth: "88%",
                  maxHeight: "88%",
                  objectFit: "contain",
                  objectPosition: "right bottom",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-px h-10 bg-primary/25"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
