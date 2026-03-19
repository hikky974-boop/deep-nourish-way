import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-botanical.jpg";

const HeroSection = () => {
  const scrollToCta = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Fond doux avec profondeur légère */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-background to-section-alt" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Colonne gauche : texte */}
          <div className="max-w-xl">
            {/* voile léger pour renforcer la lisibilité */}
            <div className="rounded-[2rem] bg-background/55 backdrop-blur-[1px] p-2 -m-2">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
              >
                Programme d'hypnose et PNL
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-7"
              >
                Libérez-vous de l'intérieur.
                <br />
                <span className="italic font-light text-primary">Le poids suit naturellement.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-10"
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
          </div>

          {/* Colonne droite : bloc visuel premium avec la branche existante */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] rounded-[2.25rem] bg-card border border-border/80 overflow-hidden shadow-[0_24px_60px_-40px_hsl(var(--foreground)/0.28)]"
          >
            <img
              src={heroImage}
              alt="Illustration botanique d'une branche d'olivier"
              className="absolute inset-0 w-full h-full object-cover object-right"
              loading="eager"
            />

            {/* Dégradés subtils pour intégration premium sans masquer le visuel */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card/18" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/16 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
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
