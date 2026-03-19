import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const ProblemSection = () => (
  <section className="section-padding bg-background">
    <div className="section-narrow text-center">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4"
      >
        Vous vous reconnaissez ?
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light mb-12"
      >
        Ce cercle que vous connaissez
        <span className="italic text-primary"> trop bien</span>
      </motion.h2>

      <div className="space-y-5 text-left max-w-xl mx-auto">
        {[
          "Vous mangez sans faim — par stress, par ennui, par habitude. Et chaque soir, la même culpabilité revient.",
          "Vous avez essayé de reprendre le contrôle. Cela fonctionne parfois un temps. Puis tout revient.",
          "Vous savez souvent ce qu'il faudrait faire. Mais quelque chose en vous résiste encore.",
          "Vous êtes fatiguée de devoir vous battre contre vous-même.",
        ].map((text, i) => (
          <motion.p
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
            variants={fadeUp}
            className="text-body text-base text-muted-foreground border-l-2 border-primary/20 pl-6 py-1"
          >
            {text}
          </motion.p>
        ))}
      </div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={7}
        variants={fadeUp}
        className="text-display text-xl italic text-primary mt-14 font-normal leading-relaxed"
      >
        Et si le vrai problème n'était pas
        <br />
        un manque de volonté ?
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
