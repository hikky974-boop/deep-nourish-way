import { motion } from "framer-motion";
import { Leaf, Flower2, Clock } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Sans brutalité",
    desc: "Une approche douce et respectueuse pour transformer votre relation à l'alimentation durablement.",
  },
  {
    icon: Flower2,
    title: "Approche intérieure",
    desc: "Nous travaillons sur vos émotions, vos croyances et vos déclencheurs pour un changement en profondeur.",
  },
  {
    icon: Clock,
    title: "À votre rythme",
    desc: "Un programme 100% en ligne, à suivre quand vous voulez, où que vous soyez.",
  },
];

const PillarsSection = () => (
  <section id="approche" className="px-6 py-12 md:py-16 bg-background">
    <div className="max-w-6xl mx-auto bg-card rounded-3xl border border-border/50 p-8 md:p-12">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center">
              <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-display text-xl font-medium mb-2">{p.title}</h3>
              <p className="text-body text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;
