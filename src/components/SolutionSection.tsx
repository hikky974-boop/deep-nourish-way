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
        className="text-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4"
      >
        La solution
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light text-foreground mb-8"
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
        className="text-body text-base md:text-lg text-muted-foreground space-y-6 text-left max-w-2xl mx-auto"
      >
        <p>
          Ce programme utilise l'hypnose guidée pour accéder directement à votre subconscient — 
          là où se logent vos habitudes, vos réflexes et vos émotions liées à la nourriture.
        </p>
        <p>
          Pas de privation. Pas de lutte.
          <br />
          Une <strong className="font-medium text-foreground">reprogrammation douce</strong> qui vous aide
          à retrouver un rapport naturel et apaisé à l'alimentation.
        </p>
        <p>
          Progressivement, les compulsions s'apaisent. Les envies irrationnelles diminuent.
          Vous ne mangez plus pour combler un vide — mais parce que votre corps en a besoin.
        </p>
        <p className="text-foreground font-normal italic font-display text-xl text-center pt-4">
          La transformation intérieure précède toujours
          <br />la transformation visible.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
