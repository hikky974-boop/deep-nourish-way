import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBotanical from "@/assets/hero-botanical.png";

const HeroSection = () => {
  const scrollToCta = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base warm background */}
      <div className="absolute inset-0 bg-background" />

      {/* Layered gradient for depth — warm top, subtle cooler bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-background to-section-alt" />

      {/* Radial warmth behind text area */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(33 30% 92% / 0.6), transparent 70%)",
        }}
      />

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Fine horizontal line accent */}
      <div className="absolute top-[18%] left-[8%] right-[8%] h-px bg-border/30 pointer-events-none hidden lg:block" />

      {/* Botanical illustration — right side, large and visible */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="absolute right-[-40px] md:right-[-10px] lg:right-[0%] top-[8%] md:top-[5%] w-[360px] md:w-[500px] lg:w-[600px] pointer-events-none z-[1]"
      >
        <img
          src={heroBotanical}
          alt=""
          className="w-full h-auto opacity-[0.28] md:opacity-[0.32] rotate-[8deg]"
          style={{ filter: "saturate(0.8) contrast(0.92)" }}
        />
      </motion.div>

      {/* Mirror botanical — left side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="absolute left-[-60px] md:left-[-20px] bottom-[5%] md:bottom-[3%] w-[240px] md:w-[340px] lg:w-[400px] pointer-events-none z-[1] hidden md:block"
      >
        <img
          src={heroBotanical}
          alt=""
          className="w-full h-auto opacity-[0.15] md:opacity-[0.20] -rotate-[20deg] -scale-x-100"
          style={{ filter: "saturate(0.6) contrast(0.88)" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Lunéa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-7"
        >
          Libérez-vous de l'intérieur.
          <br />
          <span className="italic font-light text-primary">Le poids suit naturellement.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-body text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Un programme guidé associant hypnose et PNL pour apaiser votre relation
          à la nourriture, réduire les automatismes émotionnels et retrouver un
          équilibre durable — sans régime, sans lutte permanente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
        transition={{ delay: 1.6 }}
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
