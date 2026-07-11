import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mélanie D.",
    initial: "M",
    age: 38,
    text: "Avant Lunaé, je finissais chaque soirée à grignoter devant Netflix sans vraiment avoir faim — surtout après les journées de boulot difficiles, c'était automatique. J'avais essayé les applis calories, deux régimes, rien ne tenait plus de 15 jours. Ce qui m'a surprise, c'est l'audio du soir. La troisième semaine, j'ai réalisé que je n'avais pas craqué depuis 5 jours. Pas parce que je me retenais — l'envie était juste moins forte. J'ai encore des soirs compliqués, mais maintenant je sais quoi faire quand ça arrive.",
  },
  {
    name: "Aurélie B.",
    initial: "A",
    age: 43,
    text: "Je mangeais en cachette. Dans ma voiture, dans les placards après que mon mari soit couché. J'avais honte mais je n'arrivais pas à m'arrêter. J'étais vraiment sceptique sur cette approche. Mais après 4 semaines, j'ai compris que je mangeais pour gérer mon anxiété, pas la faim. C'est pas magique — il y a encore des mauvais jours — mais je ne me cache plus. Et ça, c'est énorme pour moi.",
  },
  {
    name: "Justine R.",
    initial: "J",
    age: 29,
    text: "Je grignote depuis le lycée dès que je stresse. Les exercices m'ont aidée à identifier les déclencheurs sur le moment, vraiment. Trois semaines après le début, j'ai traversé une semaine de stress intense au boulot sans compulsion — enfin, une seule le mardi soir. Mais j'ai utilisé le bouton urgence et j'ai tenu. Avant, je n'aurais pas su quoi faire de cette envie.",
  },
];

const ProofSection = () => (
  <section id="temoignages" className="px-6 py-10 md:py-16 bg-section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-display text-3xl md:text-4xl font-light text-center mb-12"
      >
        Ils en <span className="italic text-primary">parlent</span>
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
              <div>
                <span className="text-body text-sm text-foreground/80 block">{t.name}</span>
                <span className="text-body text-xs text-muted-foreground">{t.age} ans</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
