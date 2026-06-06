import { motion } from "framer-motion";
import { Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import summaryVase from "@/assets/summary-vase.jpg";

const points = [
  "Accès immédiat",
  "33 jours de transformation complète",
  "Un accompagnement bienveillant et intelligent",
  "Des outils concrets, testés et validés",
];

const PricingSection = () => (
  <section id="pricing" className="px-6 py-16 md:py-24 bg-background">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto bg-warm-glow/60 rounded-3xl border border-border/50 overflow-hidden organic-bg"
    >
      <div className="grid md:grid-cols-2 gap-0 items-stretch">
        {/* Left — vase as full background */}
        <div
          className="relative min-h-[320px] md:min-h-[480px] p-8 md:p-14 flex flex-col justify-center text-center md:text-left"
          style={{
            backgroundImage: `url(${summaryVase})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Cream overlay for legibility */}
          <div className="absolute inset-0 bg-warm-glow/80 backdrop-blur-[2px]" aria-hidden="true" />

          <div className="relative z-10 max-w-md mx-auto md:mx-0">
            <p className="text-display text-2xl md:text-3xl italic text-primary font-light mb-3">
              En résumé
            </p>
            <p className="text-body text-base text-muted-foreground mb-4 leading-relaxed">
              Tu n'achètes pas un programme de perte de poids.
            </p>
            <p
              className="text-display text-xl md:text-2xl font-light leading-snug"
              style={{ hyphens: "none", WebkitHyphens: "none", overflowWrap: "normal", wordBreak: "keep-all" }}
            >
              Tu investis dans une nouvelle relation avec toi-même.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="p-8 md:p-14">
          <ul className="space-y-3 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: "#5F6F5A" }}
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </span>
                <span className="text-body text-base text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>

          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
            <p className="text-body text-[10px] tracking-[0.25em] uppercase text-primary mb-3">
              Tarif de lancement
            </p>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-display text-4xl sm:text-5xl md:text-6xl font-light text-primary leading-none tracking-tight">
                67,90&nbsp;€
              </span>
              <span className="text-body text-lg text-muted-foreground line-through decoration-muted-foreground/50">
                99&nbsp;€
              </span>
            </div>

            <Button variant="hero" size="lg" className="w-full mb-3">
              Je commence maintenant
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-body text-xs text-muted-foreground">
              <Lock className="w-3 h-3" /> Paiement sécurisé
            </p>
          </div>

          <p className="text-body text-xs text-muted-foreground/80 mt-4 text-center md:text-left">
            Tarif réservé aux premières personnes qui rejoignent le programme.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default PricingSection;
