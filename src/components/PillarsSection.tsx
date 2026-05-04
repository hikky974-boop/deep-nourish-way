import { motion } from "framer-motion";
import leafDecoration from "@/assets/leaf-decoration.png";

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 11-9 1 0 2 .1 2 .1S17 12 12 17c-2 2-5 3-5 3" />
    <path d="M4 20c4-4 8-7 13-9" />
  </svg>
);

const LotusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
    <path d="M12 4c1.5 2.5 2.5 5 2.5 8 0 1.5-1 3-2.5 3s-2.5-1.5-2.5-3c0-3 1-5.5 2.5-8z" />
    <path d="M5 11c2 0 4 .8 5.5 2.2C11.5 14.2 12 15 12 15s-1.8 1-4 1-4-1.5-5-3.5C2.5 11.5 3.5 11 5 11z" />
    <path d="M19 11c-2 0-4 .8-5.5 2.2C12.5 14.2 12 15 12 15s1.8 1 4 1 4-1.5 5-3.5C21.5 11.5 20.5 11 19 11z" />
    <path d="M5 16c2 2 4.5 3 7 3s5-1 7-3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const pillars = [
  {
    Icon: LeafIcon,
    title: "Sans brutalité",
    desc: "Une approche douce et respectueuse pour transformer votre relation à l'alimentation durablement.",
  },
  {
    Icon: LotusIcon,
    title: "Approche intérieure",
    desc: "Nous travaillons sur vos émotions, vos croyances et vos déclencheurs pour un changement en profondeur.",
  },
  {
    Icon: ClockIcon,
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
        className="hidden md:block absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 h-[150px] w-auto opacity-90 pointer-events-none select-none"
      />
      <img
        src={leafDecoration}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 h-[150px] w-auto opacity-90 pointer-events-none select-none scale-x-[-1]"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10 px-0 md:px-24 lg:px-32">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="shrink-0 w-14 h-14 rounded-full bg-secondary/60 flex items-center justify-center">
              <p.Icon />
            </div>
            <div className="flex-1">
              <h3 className="text-display text-lg md:text-xl font-semibold text-foreground mb-1.5">
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
