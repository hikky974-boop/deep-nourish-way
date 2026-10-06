import { motion } from "framer-motion";
import {
  Headphones,
  ListChecks,
  Bell,
  MessageCircle,
  Heart,
  Check,
} from "lucide-react";

const items = [
  {
    icon: Headphones,
    title: "Un parcours de 33 jours, avec des audios guidés",
    desc: "Chaque jour, 15 minutes. Des audios de reprogrammation neuro-émotionnelle et de PNL enregistrés par une experte certifiée. Tu t'installes, tu te laisses guider, et ton cerveau change ses schémas en profondeur.",
  },
  {
    icon: ListChecks,
    title: "15 exercices guidés",
    list: [
      "Repérer tes déclencheurs émotionnels",
      "Traverser une envie sans craquer",
      "Transformer tes croyances limitantes",
      "Arrêter de te juger après avoir mangé",
    ],
  },
  {
    icon: Bell,
    title: "Un bouton urgence",
    desc: "L'envie monte maintenant ? Tu appuies, et en 60 secondes tu traverses le moment au lieu de le subir. Disponible jour et nuit.",
  },
  {
    icon: MessageCircle,
    title: "Un coach IA personnel",
    desc: "Disponible 24h/24, il connaît ton profil et s'adapte à ce que tu vis. Tu n'es jamais seul face à une envie.",
  },
  {
    icon: Heart,
    title: "Un suivi qui te garde sur le chemin",
    desc: "Ta progression jour après jour, des micro-victoires à célébrer, et un rappel bienveillant si tu décroches. Sans jugement.",
  },
];

const ProgramSection = () => (
  <section id="programme" className="px-6 py-10 md:py-16 bg-section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-display text-3xl md:text-4xl font-light text-center mb-12"
      >
        Ce que contient{" "}
        <span className="italic text-primary">Lunaé</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="bg-card rounded-2xl p-6 border border-border/50"
          >
            <div className="w-10 h-10 rounded-full bg-accent/60 flex items-center justify-center mb-4">
              <item.icon className="w-4 h-4 text-primary" strokeWidth={1.6} />
            </div>
            <h3 className="text-display text-lg font-medium mb-3 leading-snug">
              <span className="text-primary mr-1">{i + 1}.</span> {item.title}
            </h3>
            {item.desc && (
              <p className="text-body text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            )}
            {item.list && (
              <ul className="space-y-2 mt-1">
                {item.list.map((li) => (
                  <li
                    key={li}
                    className="flex items-start gap-2 text-body text-sm text-muted-foreground"
                  >
                    <Check className="w-3.5 h-3.5 text-primary mt-1 shrink-0" strokeWidth={2} />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramSection;
