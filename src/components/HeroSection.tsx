import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-botanical.jpg";

const HeroSection = () => {
  const scrollToCta = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Subtle organic gradient */}
      <div className="absolute inset-0 organic-bg" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Programme d'hypnose et PNL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-7"
        >
          Libérez-vous de l'intérieur.
          <br />
          <span className="italic font-light text-primary">Le poids suit naturellement.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-body text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Un programme guidé associant hypnose et PNL pour apaiser votre relation
          à la nourriture, réduire les automatismes émotionnels et retrouver un
          équilibre durable — sans régime, sans lutte permanente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
