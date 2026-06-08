import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "Tu manges sous l'effet des émotions ou des automatismes",
  "Tu es fatiguée des approches superficielles",
  "Tu cherches une transformation douce mais profonde",
  "Tu veux un chemin plus respectueux et plus durable",
  "Tu as tout essayé et rien n'a duré",
];

const notForYou = [
  "Tu cherches une solution express",
  "Tu veux uniquement des règles alimentaires strictes",
  "Tu refuses toute approche intérieure du changement",
];

const ForWhoSection = () => (
  <section className="px-6 py-10 md:py-16 bg-background">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl p-8 md:p-10 border border-border/50"
      >
        <h3 className="text-display text-xl md:text-2xl font-light mb-6 italic text-center">
          Ce programme est fait pour toi si…
        </h3>
        <ul className="space-y-4">
          {forYou.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                style={{ backgroundColor: "#5F6F5A" }}
              >
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </span>
              <span className="text-body text-sm text-foreground/80">{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-card rounded-2xl p-8 md:p-10 border border-border/50"
      >
        <h3 className="text-display text-xl md:text-2xl font-light mb-6 italic text-center">
          Pas pour toi si…
        </h3>
        <ul className="space-y-4">
          {notForYou.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
                <X className="w-3 h-3 text-muted-foreground" strokeWidth={2.5} />
              </span>
              <span className="text-body text-sm text-foreground/80">{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default ForWhoSection;
