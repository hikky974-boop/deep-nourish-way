import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const ExperienceSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="section-medium text-center">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light mb-14"
      >
        Simple. Doux. <span className="italic text-primary">À votre rythme.</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            num: "01",
            title: "Facile à suivre",
            desc: "Pas besoin de compétences particulières. Installez-vous confortablement, et laissez-vous guider.",
          },
          {
            num: "02",
            title: "À votre rythme",
            desc: "Pas de calendrier imposé. Vous avancez quand vous êtes prête, sans pression.",
          },
          {
            num: "03",
            title: "Compatible avec votre vie",
            desc: "15 à 20 minutes suffisent. Le programme s'intègre dans un quotidien actif.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
            variants={fadeUp}
            className="text-left"
          >
            <span className="text-display text-4xl font-light text-primary/25 block mb-3">
              {item.num}
            </span>
            <h3 className="text-display text-lg font-medium mb-2">
              {item.title}
            </h3>
            <p className="text-body text-sm text-muted-foreground">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
