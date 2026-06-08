import { motion } from "framer-motion";
import { Moon, Check } from "lucide-react";

const points = [
  "Sans abonnement, sans date d'expiration",
  "Avance à ton rythme, recommence quand tu veux",
  "Mises à jour incluses, pour toujours",
];

const GuaranteeSection = () => (
  <section className="px-6 py-10 md:py-16 bg-background">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl mx-auto rounded-3xl px-8 py-12 md:px-14 md:py-16 text-center"
      style={{
        backgroundColor: "#faf8f4",
        border: "2px solid #6b8f66",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Icône lune */}
      <div
        className="w-18 h-18 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{ backgroundColor: "rgba(139,38,53,0.08)", border: "2px solid rgba(139,38,53,0.2)", width: "72px", height: "72px" }}
      >
        <Moon className="w-9 h-9" strokeWidth={1.5} style={{ color: "#8b2635" }} />
      </div>

      {/* Badge */}
      <span
        className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] tracking-[0.2em] font-semibold"
        style={{ backgroundColor: "#8b2635", color: "#fff", fontVariant: "small-caps" }}
      >
        Inclus à vie
      </span>

      {/* Titre */}
      <h2
        className="text-display text-3xl md:text-4xl font-bold mb-3"
        style={{ color: "#2d4a2a" }}
      >
        Accès à vie garanti
      </h2>

      <p className="text-body text-base text-muted-foreground mb-8 leading-relaxed">
        Lunéa t'accompagne aussi longtemps que tu en as besoin.
      </p>

      {/* Liste */}
      <ul className="space-y-3 inline-block text-left">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-3">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(139,38,53,0.1)" }}
            >
              <Check className="w-3 h-3" strokeWidth={2.5} style={{ color: "#8b2635" }} />
            </span>
            <span className="text-body text-sm text-foreground/80">{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default GuaranteeSection;
