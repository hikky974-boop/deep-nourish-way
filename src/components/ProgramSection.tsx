import { motion } from "framer-motion";
import { Headphones, Route, BookOpen, Laptop } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const items = [
  {
    icon: Headphones,
    title: "Audios d'hypnose guidée",
    desc: "Des séances enregistrées par un professionnel, à écouter dans le calme de votre quotidien.",
  },
  {
    icon: Route,
    title: "Parcours structuré",
    desc: "Un cheminement progressif, étape par étape, qui respecte votre rythme.",
  },
  {
    icon: BookOpen,
    title: "Exercices d'intégration",
    desc: "De courts exercices pour ancrer les changements dans votre vie de tous les jours.",
  },
  {
    icon: Laptop,
    title: "Accès 100% en ligne",
    desc: "Disponible sur tous vos appareils, à tout moment. Votre programme vous suit partout.",
  },
];

const ProgramSection = () => (
  <section className="section-padding bg-background">
    <div className="section-narrow">
      <div className="text-center mb-14">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4"
        >
          Le programme
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="text-display text-3xl md:text-4xl font-light text-foreground"
        >
          Ce qui vous attend <span className="italic text-primary">à l'intérieur</span>
        </motion.h2>
      </div>

      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
            variants={fadeUp}
            className="flex items-start gap-6 bg-section-alt rounded-2xl p-6 md:p-8"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-display text-lg font-medium text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-body text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramSection;
