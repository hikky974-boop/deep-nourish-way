import { motion } from "framer-motion";
import { Heart, Brain, Leaf, Sun, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const benefits = [
  {
    icon: Heart,
    title: "Relation apaisée",
    desc: "La nourriture redevient un plaisir simple, sans culpabilité ni obsession.",
  },
  {
    icon: Brain,
    title: "Clarté mentale",
    desc: "L'espace mental libéré du combat permanent contre les envies.",
  },
  {
    icon: Leaf,
    title: "Perte de poids naturelle",
    desc: "Votre corps retrouve son équilibre, sans restriction ni frustration.",
  },
  {
    icon: Sun,
    title: "Énergie retrouvée",
    desc: "Moins de fatigue émotionnelle, plus de vitalité au quotidien.",
  },
  {
    icon: Sparkles,
    title: "Moins de compulsions",
    desc: "Les automatismes s'apaisent. Vous retrouvez le choix.",
  },
];

const BenefitsSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="section-wide text-center">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light text-foreground mb-14"
      >
        Ce qui change <span className="italic text-primary">concrètement</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
            variants={fadeUp}
            className="bg-background rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <b.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="text-display text-lg font-medium text-foreground mb-2">
              {b.title}
            </h3>
            <p className="text-body text-sm text-muted-foreground">
              {b.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
