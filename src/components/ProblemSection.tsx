import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
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
        className="text-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4"
      >
        Vous vous reconnaissez ?
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light text-foreground mb-12"
      >
        Ce cercle que vous connaissez
        <span className="italic text-primary"> trop bien</span>
      </motion.h2>

      <div className="space-y-6 text-left">
        {[
          "Vous mangez sans faim — par stress, par ennui, par habitude. Et chaque soir, la même culpabilité revient.",
          "Vous avez essayé les régimes. Ça marche… quelques semaines. Puis le poids revient, avec encore plus de frustration.",
          "Vous savez exactement ce qu'il faudrait faire. Mais quelque chose en vous résiste, comme si votre corps avait ses propres règles.",
          "Vous êtes fatigué·e. Pas seulement physiquement — mentalement épuisé·e par cette bataille permanente contre vous-même.",
        ].map((text, i) => (
          <motion.p
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
            variants={fadeUp}
            className="text-body text-base md:text-lg text-muted-foreground border-l-2 border-primary/20 pl-6 py-1"
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
        className="text-body text-lg text-foreground mt-12 font-normal"
      >
        Si vous lisez ces mots et que quelque chose résonne…
        <br />
        <span className="text-primary italic font-display text-xl">c'est peut-être le bon moment.</span>
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
