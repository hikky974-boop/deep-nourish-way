import { motion } from "framer-motion";
import { Heart, Brain, Leaf, Sun, Sparkles, Hand } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

const benefits = [
  {
    icon: Heart,
    title: "Relation plus apaisée",
    desc: "La nourriture redevient un plaisir simple, sans culpabilité ni obsession.",
  },
  {
    icon: Sparkles,
    title: "Moins de compulsions",
    desc: "Les automatismes s'apaisent. Vous retrouvez le choix.",
  },
  {
    icon: Brain,
    title: "Plus de clarté mentale",
    desc: "L'espace mental libéré du combat permanent contre les envies.",
  },
  {
    icon: Sun,
    title: "Plus de stabilité émotionnelle",
    desc: "Moins de fatigue émotionnelle, plus de sérénité au quotidien.",
  },
  {
    icon: Leaf,
    title: "Perte de poids plus naturelle",
    desc: "Votre corps retrouve son équilibre, sans restriction ni frustration.",
  },
  {
    icon: Hand,
    title: "Reprendre la main",
    desc: "Sensation de reprendre le contrôle — sans violence, sans lutte.",
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
        className="text-display text-3xl md:text-4xl font-light mb-14"
      >
        Ce qui change <span className="italic text-primary">concrètement</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
            variants={fadeUp}
            className="bg-card rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-full bg-accent/60 flex items-center justify-center mb-5 transition-colors group-hover:bg-accent">
              <b.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-display text-lg font-medium mb-2">
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
