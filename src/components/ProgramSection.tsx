import { motion } from "framer-motion";
import {
  Calendar,
  Headphones,
  ListChecks,
  
  Bell,
  MessageCircle,
  BarChart3,
  Trophy,
  Heart,
  Check,
} from "lucide-react";

const items = [
  {
    icon: Calendar,
    title: "Un parcours de transformation de 33 jours",
    desc: "Pas un régime de plus, mais une méthode qui agit là où tout se joue vraiment : ton cerveau, tes émotions, tes automatismes.",
  },
  {
    icon: Headphones,
    title: "Des audios de reprogrammation neuro-émotionnelle",
    desc: "Enregistrés par une experte certifiée en reprogrammation neuro-émotionnelle et PNL. Tu écoutes, tu te laisses guider, et ton cerveau commence à changer ses schémas en profondeur. Sans effort. Sans volonté forcée.",
  },
  {
    icon: ListChecks,
    title: "15 exercices guidés",
    list: [
      "Identifier tes déclencheurs émotionnels",
      "Traverser une compulsion sans craquer",
      "Transformer tes croyances limitantes",
      "Développer la bienveillance envers toi-même",
      "Célébrer chaque petit progrès sans te juger",
    ],
  },
  {
    icon: Bell,
    title: "Un bouton urgence",
    desc: "La compulsion arrive maintenant ? En 60 secondes, tu traverses le moment sans craquer. Disponible jour et nuit.",
  },
  {
    icon: MessageCircle,
    title: "Un coach IA personnel",
    desc: "Tu ne seras jamais seule. Un accompagnement disponible 24h/24 qui s'adapte à ce que tu vis. Pas de réponses génériques : un vrai accompagnement adapté à toi.",
  },
  {
    icon: BarChart3,
    title: "Un suivi quotidien",
    desc: "Pour mesurer ta progression et rester ancrée dans ta transformation.",
  },
  {
    icon: Trophy,
    title: "Un système de motivation intégré",
    desc: "Achievements, streaks, micro-victoires : chaque jour compte et te garde engagée jusqu'au bout.",
  },
  {
    icon: Heart,
    title: "Si tu décroches",
    desc: "Le programme revient vers toi avec bienveillance. Pas de jugement. Juste un rappel doux que tu mérites de continuer.",
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
        Ce que tu obtiens avec le{" "}
        <span className="italic text-primary">programme Lunaé</span>
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
