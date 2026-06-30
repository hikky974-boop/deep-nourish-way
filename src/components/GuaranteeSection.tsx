import { motion } from "framer-motion";
import { Moon } from "lucide-react";

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
        className="text-display text-3xl md:text-4xl font-bold mb-4"
        style={{ color: "#2d4a2a" }}
      >
        Accès à vie au programme Lunaé
      </h2>

      <p className="text-body text-base text-muted-foreground leading-relaxed">
        Tes audios et ton contenu, pour toujours. Tu peux refaire ton parcours autant de fois
        que tu en ressens le besoin, à ton rythme, toute ta vie.
      </p>

      {/* Séparateur */}
      <div className="w-full border-t my-8" style={{ borderColor: "rgba(107,143,102,0.35)" }} />

      {/* Sous-bloc accompagnement */}
      <h3
        className="text-display text-xl md:text-2xl font-semibold mb-3"
        style={{ color: "#2d4a2a" }}
      >
        Un accompagnement qui te guide jour après jour
      </h3>
      <p className="text-body text-base text-muted-foreground leading-relaxed">
        Pendant tes 33 jours, ton accompagnement personnalisé t'épaule au quotidien : il
        t'écoute, s'ajuste à toi, et t'aide à tenir jusqu'au bout — pour que ce que tu vis
        devienne durable.
      </p>
    </motion.div>
  </section>
);

export default GuaranteeSection;
