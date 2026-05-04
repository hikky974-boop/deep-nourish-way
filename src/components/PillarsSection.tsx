import { motion } from "framer-motion";
import { Leaf, Flower2, Clock } from "lucide-react";
import leafDecoration from "@/assets/leaf-decoration.png";

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
  <section id="approche" className="px-6 py-16 md:py-24 bg-background">
    <div className="relative max-w-6xl mx-auto">
      {/* Botanical decorations */}
      <img
        src={leafDecoration}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-20 lg:w-28 opacity-80 pointer-events-none select-none"
      />
      <img
        src={leafDecoration}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-20 lg:w-28 opacity-80 pointer-events-none select-none scale-x-[-1]"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-14 px-0 md:px-16 lg:px-24">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="shrink-0 w-14 h-14 rounded-full bg-secondary/70 flex items-center justify-center">
              <p.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                {p.title}
              </h3>
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
