import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const cards = [
  {
    title: "Contrôle extérieur",
    desc: "On vous donne des règles, mais pas de solution profonde à ce qui déclenche réellement le comportement.",
  },
  {
    title: "Volonté épuisée",
    desc: "La volonté seule finit par fatiguer lorsqu'elle lutte contre des schémas installés depuis longtemps.",
  },
  {
    title: "Vraie racine",
    desc: "Une partie du comportement alimentaire se joue dans les automatismes, les associations émotionnelles et les réflexes intérieurs.",
  },
];

const WhySection = () => (
  <section className="section-padding bg-section-alt">
    <div className="section-medium text-center">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light mb-4"
      >
        Pourquoi les approches classiques
        <br />
        <span className="italic text-primary">ne suffisent pas durablement</span>
      </motion.h2>

      <div className="divider-leaf" />

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {cards.map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
            variants={fadeUp}
            className="bg-card rounded-2xl p-8 text-left transition-shadow duration-300 hover:shadow-md"
          >
            <h3 className="text-display text-xl font-medium mb-3">
              {item.title}
            </h3>
            <p className="text-body text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
