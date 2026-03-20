import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const SolutionSection = () => (
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
        La solution
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light mb-8"
      >
        Un programme qui agit
        <span className="italic text-primary"> là où tout commence</span>
      </motion.h2>

      <div className="divider-leaf" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={fadeUp}
        className="text-body text-base md:text-lg text-muted-foreground space-y-6 text-left max-w-xl mx-auto"
      >
        <p>
          Ce programme utilise l'<strong className="font-medium text-foreground">hypnose guidée</strong> pour intervenir en profondeur sur votre rapport à l'alimentation.
        </p>
        <p>
          Il ne s'agit pas de vous contraindre davantage.
          <br />
          Il s'agit de transformer progressivement les mécanismes intérieurs qui entretiennent les envies automatiques, les compulsions et la lutte.
        </p>
        <p className="text-foreground font-normal italic font-display text-xl text-center pt-4 leading-relaxed">
          La transformation intérieure précède
          <br />souvent la transformation visible.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
