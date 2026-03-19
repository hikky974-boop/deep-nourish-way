import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-botanical.jpg";

const HeroSection = () => {
  const scrollToCta = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Base warm gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-background to-section-alt" />

      {/* Subtle paper grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Botanical illustration — right side, editorial crop */}
      <div className="absolute top-0 right-0 w-[55%] h-full">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-left-top"
        />
        {/* Fade botanical into background on the left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        {/* Soft fade at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Warm halo behind text area */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-warm-white/60 rounded-full blur-[120px]" />

      {/* Content — left-aligned for asymmetric editorial layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="max-w-xl">
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
