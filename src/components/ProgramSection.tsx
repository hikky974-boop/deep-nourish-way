import { motion } from "framer-motion";
import { Headphones, Route, BookOpen, Laptop, Lightbulb } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const items = [
  {
    icon: Headphones,
    title: "Audios guidés de reprogrammation",
    desc: "Des séances enregistrées par un professionnel, à écouter dans le calme de votre quotidien.",
  },
  {
    icon: Lightbulb,
    title: "Exercices de reprogrammation neuro-émotionnelle",
    desc: "Des outils concrets pour modifier vos conditionnements et réponses automatiques.",
  },
  {
    icon: Route,
    title: "Parcours structuré étape par étape",
    desc: "Un cheminement progressif qui respecte votre rythme et votre évolution.",
  },
  {
    icon: BookOpen,
    title: "Intégration simple dans le quotidien",
    desc: "De courts exercices pour ancrer les changements dans votre vie de tous les jours.",
  },
  {
    icon: Laptop,
    title: "Accès en ligne à tout moment",
    desc: "Disponible sur tous vos appareils, quand vous le souhaitez.",
  },
];

const ProgramSection = () => (
  <section className="section-padding bg-background">
    <div className="section-medium">
      <div className="text-center mb-14">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4"
        >
          Le programme
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="text-display text-3xl md:text-4xl font-light"
        >
          Ce qui vous attend <span className="italic text-primary">à l'intérieur</span>
        </motion.h2>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
            variants={fadeUp}
            className="flex items-start gap-5 bg-card rounded-2xl p-6 md:p-8 transition-shadow duration-300 hover:shadow-md"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/60 flex items-center justify-center">
              <item.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-display text-lg font-medium mb-1">
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
