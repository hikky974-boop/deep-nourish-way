import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const MethodSection = () => (
  <section className="section-padding bg-background organic-bg">
    <div className="section-medium text-center">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4"
      >
        La méthode
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light mb-6"
      >
        Une approche douce, profonde
        <br />
        <span className="italic text-primary">et structurée</span>
      </motion.h2>

      <div className="divider-leaf" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={fadeUp}
        className="text-body text-base md:text-lg text-muted-foreground space-y-6 text-left max-w-2xl mx-auto mt-10"
      >
        <p>
          Ce programme associe <strong className="font-medium text-foreground">l'hypnose guidée</strong> et des outils issus de la <strong className="font-medium text-foreground">PNL</strong> pour agir en profondeur sur les automatismes, les associations émotionnelles et les schémas intérieurs liés à l'alimentation.
        </p>
        <p>
          L'hypnose permet d'accéder à un état de concentration intérieure favorable au changement.
        </p>
        <p>
          La PNL aide à modifier certains conditionnements, perceptions et réponses automatiques.
        </p>
        <p className="text-foreground font-normal italic font-display text-xl text-center pt-4 leading-relaxed">
          L'objectif n'est pas de lutter davantage,
          <br />
          mais de transformer progressivement ce qui,
          <br />
          en vous, pilote encore malgré vous.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MethodSection;
