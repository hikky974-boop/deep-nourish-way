import { motion } from "framer-motion";
import { Zap, Headphones, ListChecks, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDoorway from "@/assets/hero-doorway.jpg";

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
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-6">
            Perdre du poids
            <br />
            <span className="italic text-primary">autrement.</span>
          </h1>

          <p className="text-body text-base md:text-lg text-foreground/75 max-w-md mb-8 leading-relaxed">
            Lunéa est un parcours de transformation de 33 jours qui agit là où
            tout se joue vraiment&nbsp;: le cerveau, les émotions et les automatismes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button variant="hero" size="lg" onClick={() => scrollTo("pricing")}>
              Accéder au programme
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("approche")}
              className="rounded-full border-foreground/20 hover:bg-accent/40"
            >
              Découvrir l'approche
            </Button>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/60 text-body text-xs text-foreground/75"
              >
                <b.icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.6} />
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="relative"
        >
          <img
            src={heroDoorway}
            alt="Porte ouverte sur un jardin botanique fleuri"
            width={1024}
            height={1024}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
