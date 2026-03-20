import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const ProofSection = () => (
  <section className="section-padding bg-background organic-bg">
    <div className="section-narrow text-center">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4"
      >
        Comprendre l'approche
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light mb-6"
      >
        Pourquoi cette approche peut créer
        <br />
        <span className="italic text-primary">un vrai changement</span>
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
           L'hypnose n'est pas une perte de contrôle.
           C'est un <strong className="font-medium text-foreground">état naturel de concentration intérieure</strong>.
         </p>
         <p>
           Dans cet état, l'esprit devient plus réceptif à de nouvelles suggestions,
           de nouveaux repères et de nouvelles associations.
         </p>
         <p>
           Ce processus aide à modifier
           certains liens automatiques entre émotions, pensées et comportements.
        </p>
        <p>
          Le but n'est pas de forcer.
          <br />
          Le but est de faire évoluer durablement ce qui se rejoue en arrière-plan.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProofSection;
