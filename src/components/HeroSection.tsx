import { motion } from "framer-motion";
import { Zap, Headphones, ListChecks, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDoorway from "@/assets/hero-doorway.png";

const badges = [
  { icon: Zap, label: "Accès immédiat" },
  { icon: Headphones, label: "Audios d'hypnose" },
  { icon: ListChecks, label: "Exercices guidés" },
  { icon: CalendarCheck, label: "Suivi quotidien" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Right-side full-height image with soft fade on the left edge */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 z-0">
        <img
          src={heroDoorway}
          alt="Porte ouverte sur un jardin botanique fleuri"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 12%, hsl(var(--background) / 0.6) 22%, hsl(var(--background) / 0.2) 30%, transparent 35%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 min-w-0 w-full"
        >
          <h1 className="text-display text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight break-words">
            Perdre du poids
            <br />
            <span className="italic font-normal text-primary">autrement.</span>
          </h1>

          <p className="text-body text-sm md:text-base text-foreground/70 max-w-md mb-8 leading-relaxed">
            Lunéa est un parcours de transformation de 33 jours qui agit là où
            tout se joue vraiment&nbsp;: le cerveau, les émotions et les automatismes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button variant="hero" size="lg" onClick={() => scrollTo("pricing")} className="w-full sm:w-auto">
              Accéder au programme
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("approche")}
              className="w-full sm:w-auto rounded-full border-foreground/20 hover:bg-accent/40"
            >
              Découvrir l'approche
            </Button>
          </div>

          <div className="-mx-6 px-6 flex flex-nowrap gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
            {badges.map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full bg-card border border-border/60 text-body text-[11px] sm:text-xs text-foreground/75 whitespace-nowrap shrink-0"
              >
                <b.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary shrink-0" strokeWidth={1.6} />
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>


        {/* Mobile / tablet image (kept inline so layout doesn't break) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="relative lg:hidden"
        >
          <img
            src={heroDoorway}
            alt="Porte ouverte sur un jardin botanique fleuri"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Spacer to preserve grid height on desktop where image is absolute */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
};

export default HeroSection;
