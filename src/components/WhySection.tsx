import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const WhySection = () => (
  <section className="section-padding bg-section-alt">
    <div className="section-narrow text-center">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light text-foreground mb-6"
      >
        Pourquoi les régimes ne fonctionnent pas
        <span className="italic text-primary"> durablement</span>
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
        className="text-body text-base md:text-lg text-muted-foreground mb-14 max-w-2xl mx-auto"
      >
        Les méthodes classiques agissent en surface. Elles vous disent <em>quoi</em> manger,
        mais ne changent jamais <em>pourquoi</em> vous mangez.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          {
            title: "Les régimes",
            desc: "Ils imposent des règles extérieures à un problème intérieur. Le contrôle finit toujours par craquer.",
          },
          {
            title: "La volonté seule",
            desc: "Elle s'épuise. Car elle lutte contre des automatismes profonds, ancrés depuis des années.",
          },
          {
            title: "La vraie racine",
            desc: "Vos comportements alimentaires sont pilotés par votre subconscient. C'est là que le changement doit naître.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
            variants={fadeUp}
            className="bg-background rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-display text-xl font-medium text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-body text-muted-foreground text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
