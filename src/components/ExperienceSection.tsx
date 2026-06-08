import { motion } from "framer-motion";
import {
  Headphones,
  ListChecks,
  Video,
  Shield,
  MessageCircle,
  Monitor,
} from "lucide-react";
import devicesMockup from "@/assets/devices-mockup.jpg";

const features = [
  {
    icon: Video,
    title: "Vidéos courtes et claires",
    desc: "Des contenus simples et efficaces pour avancer pas à pas.",
  },
  {
    icon: Headphones,
    title: "Audios de reprogrammation",
    desc: "Pour apaiser, reprogrammer et retrouver ton équilibre.",
  },
  {
    icon: ListChecks,
    title: "Exercices de recentrage",
    desc: "Des pratiques concrètes pour revenir à toi au quotidien.",
  },
  {
    icon: Shield,
    title: "Outils contre les envies automatiques",
    desc: "Des stratégies puissantes pour désamorcer les compulsions.",
  },
  {
    icon: MessageCircle,
    title: "Suivi personnel",
    desc: "Un accompagnement bienveillant pour ne jamais rester seule.",
  },
  {
    icon: Monitor,
    title: "Accès mobile, tablette et ordinateur",
    desc: "Accède à ton espace où et quand tu veux.",
  },
];

const modules = [
  { num: "01", title: "Observer ses automatismes" },
  { num: "02", title: "Apaiser les compulsions émotionnelles" },
  { num: "03", title: "Installer de nouveaux repères" },
];

const ExperienceSection = () => (
  <section id="experience" className="px-6 py-10 md:py-16 bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-display text-3xl md:text-4xl font-light mb-10 md:mb-14"
      >
        Ce que tu trouves dans le programme
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left: features grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 bg-card rounded-3xl p-6 md:p-8 border border-border/50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary/60 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-display text-base font-semibold text-foreground mb-1 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-body text-xs text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Center: parcours card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-3 bg-card rounded-3xl p-6 md:p-7 border border-border/50"
        >
          <h3 className="text-display text-lg font-medium mb-5">
            Votre parcours pas à pas
          </h3>
          <div className="space-y-3">
            {modules.map((m) => (
              <div
                key={m.num}
                className="flex items-center gap-3 bg-background rounded-2xl px-3 py-3 border border-border/40"
              >
                <div className="shrink-0 w-9 h-9 rounded-full border-2 border-primary/70 flex items-center justify-center">
                  <span className="text-body text-xs font-semibold text-primary">
                    {m.num}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-body text-xs text-muted-foreground leading-tight">
                    Module {parseInt(m.num)}
                  </p>
                  <p className="text-display text-sm font-medium text-foreground leading-snug">
                    {m.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-body text-xs text-muted-foreground mt-5 leading-relaxed">
            Et bien d'autres modules pour t'accompagner vers ta transformation.
          </p>
        </motion.div>

        {/* Right: mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-4"
        >
          <img
            src={devicesMockup}
            alt="Aperçu de l'application Lunéa sur mobile et ordinateur"
            loading="lazy"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
