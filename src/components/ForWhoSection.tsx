import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const forYou = [
  "Vous mangez sous l'effet des émotions ou des automatismes",
  "Vous êtes fatiguée des approches superficielles",
  "Vous cherchez une transformation douce mais profonde",
  "Vous voulez un chemin plus respectueux et plus durable",
];

const notForYou = [
  "Vous cherchez une solution express",
  "Vous voulez uniquement des règles alimentaires strictes",
  "Vous refusez toute approche intérieure du changement",
];

const ForWhoSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="section-medium">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light text-center mb-14"
      >
        Ce programme est fait <span className="italic text-primary">pour vous si…</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="bg-card rounded-2xl p-8 md:p-10"
        >
          <h3 className="text-display text-xl font-medium mb-6">
            Pour vous si…
          </h3>
          <ul className="space-y-4">
            {forYou.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" strokeWidth={2} />
                <span className="text-body text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
          className="bg-card rounded-2xl p-8 md:p-10"
        >
          <h3 className="text-display text-xl font-medium mb-6">
            Pas pour vous si…
          </h3>
          <ul className="space-y-4">
            {notForYou.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <X className="w-4 h-4 text-muted-foreground/60 mt-1 flex-shrink-0" strokeWidth={2} />
                <span className="text-body text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ForWhoSection;
