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
  <section id="pricing" className="px-4 md:px-6 py-10 md:py-16" style={{ backgroundColor: "#e8ede6" }}>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl w-full mx-auto bg-warm-glow/60 rounded-3xl border border-border/50 overflow-hidden organic-bg"
    >
      <div className="grid md:grid-cols-2 gap-0 items-stretch">
        {/* Left — vase as full background */}
        <div
          className="relative min-h-[260px] md:min-h-[480px] p-5 sm:p-8 md:p-14 flex flex-col justify-center text-center md:text-left"
          style={{
            backgroundImage: `url(${summaryVase})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-warm-glow/80 backdrop-blur-[2px]" aria-hidden="true" />

          <div className="relative z-10 max-w-md mx-auto md:mx-0">
            <p className="text-display text-2xl md:text-3xl italic text-primary font-light mb-3">
              En résumé
            </p>
            <p className="text-body text-base text-muted-foreground mb-4 leading-relaxed break-words">
              Tu n'achètes pas un programme de perte de poids.
            </p>
            <p
              className="text-display text-xl md:text-2xl font-light leading-snug break-words"
              style={{ hyphens: "auto", WebkitHyphens: "auto" }}
            >
              Tu investis dans une nouvelle relation avec toi-même.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="p-5 sm:p-8 md:p-14 min-w-0">
          <ul className="space-y-3 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 min-w-0">
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: "#5F6F5A" }}
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </span>
                <span className="text-body text-base text-foreground/85 min-w-0 break-words overflow-hidden">
                  {p}
                </span>
              </li>
            ))}
          </ul>

          <div className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 border border-border/50 min-w-0">
            <span
              className="inline-block mb-3 px-3 py-1 rounded-full text-[10px] tracking-[0.2em] font-semibold"
              style={{ backgroundColor: "#8b2635", color: "#fff", fontVariant: "small-caps" }}
            >
              Tarif de lancement
            </span>
            <div className="flex items-baseline gap-3 mb-5 flex-wrap">
              <span
                className="text-display text-5xl sm:text-6xl md:text-7xl font-light leading-none tracking-tight"
                style={{ color: "#2d4a2a" }}
              >
                67,90&nbsp;€
              </span>
              <span
                className="text-body text-xl font-medium line-through decoration-2"
                style={{ color: "#8b2635" }}
              >
                99&nbsp;€
              </span>
            </div>

            <Button
              variant="hero"
              size="xl"
              asChild
              className="w-full mb-3 shadow-md shadow-primary/20 text-sm sm:text-base px-3 sm:px-6 whitespace-nowrap"
            >
              <a href="https://equilibre-interieur-0795f791.base44.app/Paywall">
                Rejoindre Lunéa maintenant
              </a>
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-body text-xs text-muted-foreground">
              <Lock className="w-3 h-3 shrink-0" /> Paiement sécurisé
            </p>
          </div>

          <p className="text-body text-xs text-muted-foreground/80 mt-4 text-center md:text-left break-words">
            Tarif réservé aux premières personnes qui rejoignent le programme.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default PricingSection;
