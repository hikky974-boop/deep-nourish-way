import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camille",
    initial: "C",
    text: "Lunéa m'a permis de comprendre pourquoi je mangeais, sans me blâmer. Les audios m'aident beaucoup au quotidien, je me sens plus légère et plus alignée avec moi-même.",
  },
  {
    name: "Sophie",
    initial: "S",
    text: "Une approche douce et profonde. J'ai enfin trouvé un programme qui ne me punit pas et qui travaille vraiment sur mon ressenti et ma confiance. Un vrai changement !",
  },
  {
    name: "Élodie",
    initial: "É",
    text: "Les outils sont concrets et puissants. Je sens vraiment changer ma relation à la nourriture. Lunéa m'accompagne chaque jour sur le bon chemin.",
  },
];

const ProofSection = () => (
  <section id="temoignages" className="px-6 py-16 md:py-24 bg-section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-display text-3xl md:text-4xl font-light text-center mb-12"
      >
        Elles en <span className="italic text-primary">parlent</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="bg-card rounded-2xl p-7 border border-border/50 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-display text-3xl text-primary/40 leading-none">"</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <p className="text-body text-sm text-foreground/75 leading-relaxed mb-6 italic">
              {t.text}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-accent/70 flex items-center justify-center text-display text-primary font-medium">
                {t.initial}
              </div>
              <span className="text-body text-sm text-foreground/80">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
