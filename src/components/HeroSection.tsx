import { motion } from "framer-motion";
import { Zap, Headphones, ListChecks, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDoorway from "@/assets/hero-doorway.png";
import { quizUrl } from "@/lib/links";

const badges = [
  { icon: Zap, label: "3 jours gratuits" },
  { icon: Headphones, label: "Audios PNL & reprogrammation neuro-émotionnelle" },
  { icon: ListChecks, label: "Exercices guidés" },
  { icon: CalendarCheck, label: "Suivi quotidien" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-x-clip bg-background">

      {/* Mobile / tablet : image plein-écran en fond + overlay crème */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src={heroDoorway}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(250, 246, 240, 0.75)" }}
        />
      </div>

      {/* Desktop : image collée à droite avec dégradé crème vers la gauche */}
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
              "linear-gradient(to right, hsl(var(--hero-bg)) 0%, hsl(var(--hero-bg) / 0.9) 12%, hsl(var(--hero-bg) / 0.55) 28%, hsl(var(--hero-bg) / 0.15) 50%, transparent 70%, hsl(var(--hero-bg) / 0.35) 90%, hsl(var(--hero-bg) / 0.75) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, hsl(var(--hero-bg) / 0.5) 0%, transparent 20%, transparent 80%, hsl(var(--hero-bg) / 0.5) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-12 md:pt-16 md:pb-20 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        {/* Contenu texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 min-w-0 w-full"
        >
          <h1 className="text-display text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight break-words">
            Libère-toi de
            <br />
            <span className="italic font-normal text-primary">l'effet yo-yo.</span>
          </h1>

          <p className="text-body text-base md:text-lg text-foreground/85 max-w-md mb-3 leading-relaxed">
            Perds du poids avec une méthode douce et profonde en 33&nbsp;jours, qui reprogramme
            tes habitudes alimentaires sans privation ni frustration.
          </p>
          <p className="text-body text-sm md:text-base text-foreground/70 max-w-md mb-8 leading-relaxed">
            Lunaé agit sur ce que les régimes ignorent&nbsp;: tes automatismes, tes émotions et tes
            déclencheurs. Audios guidés, bouton d’urgence et coach IA t’accompagnent pendant
            33&nbsp;jours.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-5 mb-4">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
              <a href={quizUrl("hero")}>
                Je fais le test gratuit
              </a>
            </Button>
            <button
              type="button"
              onClick={() => scrollTo("approche")}
              className="text-body text-sm text-foreground/60 hover:text-foreground/85 transition-colors underline-offset-4 hover:underline focus:outline-none focus-visible:underline"
            >
              Découvrir l’approche →
            </button>
          </div>
          <p className="text-body text-xs text-foreground/70 mb-8">
            3 minutes · gratuit · découvre ton profil
          </p>

          {/* Pills — wrap sur mobile/tablette, ligne unique sur desktop */}
          <div className="flex flex-wrap lg:flex-nowrap gap-1.5 sm:gap-2 lg:overflow-visible">
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

        {/* Espaceur desktop pour conserver la grille 2 colonnes */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
};

export default HeroSection;
