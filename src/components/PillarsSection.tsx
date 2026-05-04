import { motion } from "framer-motion";
import pillarIcon from "@/assets/pillar-icon.png";
import leafDecoration from "@/assets/leaf-decoration.png";

const pillars = [
  {
    title: "Sans brutalité",
    desc: "Une approche douce et respectueuse pour transformer votre relation à l'alimentation durablement.",
  },
  {
    title: "Approche intérieure",
    desc: "Nous travaillons sur vos émotions, vos croyances et vos déclencheurs pour un changement en profondeur.",
  },
  {
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
        className="hidden md:block absolute -left-2 lg:-left-8 top-1/2 -translate-y-1/2 h-[120px] w-auto opacity-90 pointer-events-none select-none"
      />
      <img
        src={leafDecoration}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -right-2 lg:-right-8 top-1/2 -translate-y-1/2 h-[120px] w-auto opacity-90 pointer-events-none select-none scale-x-[-1]"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-14 px-0 md:px-20 lg:px-32">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={pillarIcon}
              alt=""
              aria-hidden="true"
              className="w-[70px] h-[70px] mb-5 select-none"
            />
            <h3 className="text-display text-xl md:text-2xl font-semibold text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;
