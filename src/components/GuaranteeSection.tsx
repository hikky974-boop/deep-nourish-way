import { motion } from "framer-motion";
import { Moon, Check } from "lucide-react";

const points = [
  "Sans abonnement, sans date d'expiration",
  "Avance à ton rythme, recommence quand tu veux",
  "Mises à jour incluses, pour toujours",
];

const GuaranteeSection = () => (
  <section className="px-6 py-10 md:py-16 bg-background">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl mx-auto bg-accent/40 border border-primary/15 rounded-3xl px-8 py-12 md:px-14 md:py-16 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
        <Moon className="w-7 h-7 text-primary" strokeWidth={1.5} />
      </div>

      <h2 className="text-display text-2xl md:text-3xl font-semibold mb-3">
        Accès à vie garanti
      </h2>
      <p className="text-body text-base text-muted-foreground mb-8 leading-relaxed">
        Lunéa t'accompagne aussi longtemps que tu en as besoin.
      </p>

      <ul className="space-y-3 inline-block text-left">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
            </span>
            <span className="text-body text-sm text-foreground/80">{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default GuaranteeSection;
