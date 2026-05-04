import { motion } from "framer-motion";
import {
  Headphones,
  ListChecks,
  Video,
  Bell,
  MessageCircle,
  BarChart3,
  Trophy,
  Heart,
} from "lucide-react";
import devicesMockup from "@/assets/devices-mockup.jpg";

const features = [
  { icon: Headphones, label: "Audios d'hypnose" },
  { icon: ListChecks, label: "Exercices guidés" },
  { icon: Video, label: "Vidéos d'automassage" },
  { icon: Bell, label: "Bouton urgence" },
  { icon: MessageCircle, label: "Coach IA personnel" },
  { icon: BarChart3, label: "Suivi de progression" },
  { icon: Trophy, label: "Système de motivation" },
  { icon: Heart, label: "Rappels bienveillants" },
];

const ExperienceSection = () => (
  <section id="experience" className="px-6 py-16 md:py-24 bg-background">
    <div className="max-w-6xl mx-auto bg-card rounded-3xl border border-border/50 p-8 md:p-14">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-display text-3xl md:text-4xl font-light mb-4">
            Ton expérience <span className="italic text-primary">Lunéa</span>
          </h2>
          <p className="text-body text-base text-muted-foreground mb-8 leading-relaxed">
            Tout ce dont tu as besoin, réuni au même endroit.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-background border border-border/60"
              >
                <f.icon className="w-4 h-4 text-primary shrink-0" strokeWidth={1.6} />
                <span className="text-body text-sm text-foreground/80">{f.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={devicesMockup}
            alt="Aperçu de l'application Lunéa sur mobile et ordinateur"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
