import { motion } from "framer-motion";

const items = [
  "Le stress s'installe, les émotions débordent et la nourriture devient un refuge.",
  "Vous mangez sans vraiment choisir, presque sans y penser, pour apaiser le moment.",
  "La culpabilité arrive juste après, avec la honte et les promesses de faire mieux demain.",
  "Vous recommencez avec détermination, mais c'est toujours plus fort que vous.",
];

const CycleSection = () => (
  <section className="px-6 py-16 md:py-24 bg-background">
    <div className="max-w-4xl mx-auto bg-card rounded-3xl border border-border/50 p-8 md:p-14">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-display text-3xl md:text-4xl font-light text-center mb-10 italic"
      >
        Ce cercle que vous connaissez trop bien
      </motion.h2>

      <ol className="space-y-5">
        {items.map((text, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-4"
          >
            <span className="shrink-0 w-7 h-7 rounded-full border border-primary/40 text-primary text-display text-base flex items-center justify-center">
              {i + 1}
            </span>
            <p className="text-body text-base text-foreground/80 leading-relaxed pt-0.5">
              {text}
            </p>
          </motion.li>
        ))}

        <motion.li
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-start gap-4"
        >
          <span className="shrink-0 w-7 h-7 rounded-full border border-primary/40 text-primary text-display text-base flex items-center justify-center">
            5
          </span>
          <p className="text-body text-base text-foreground/80 leading-relaxed pt-0.5">
            Vous vous êtes peut-être dit&nbsp;: le problème c'est moi. Que vous
            manquez de volonté. Que les autres y arrivent mais pas vous. Cette
            pensée est fausse —{" "}
            <span className="text-foreground font-medium">
              et Lunéa est là pour vous le prouver.
            </span>
          </p>
        </motion.li>
      </ol>
    </div>
  </section>
);

export default CycleSection;
