import { motion } from "framer-motion";
import { Shield, Clock, Headphones } from "lucide-react";

const items = [
  { icon: Shield, text: "Approche douce et respectueuse" },
  { icon: Clock, text: "Accès immédiat et illimité" },
  { icon: Headphones, text: "Écoute à votre rythme, sans pression" },
];

const ReassuranceSection = () => (
  <section className="px-6 py-12 bg-background">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <item.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
          <span className="text-body text-xs tracking-wide text-muted-foreground">
            {item.text}
          </span>
        </div>
      ))}
    </motion.div>
  </section>
);

export default ReassuranceSection;
