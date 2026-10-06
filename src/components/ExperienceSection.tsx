import { motion } from "framer-motion";
import devicesMockup from "@/assets/devices-mockup.jpg";

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
        Ton parcours, dans ton téléphone
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Center: parcours card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5 bg-card rounded-3xl p-6 md:p-7 border border-border/50"
        >
          <h3 className="text-display text-lg font-medium mb-5">
            Ton parcours pas à pas
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
          className="lg:col-span-7"
        >
          <img
            src={devicesMockup}
            alt="Aperçu de l'application Lunaé sur mobile et ordinateur"
            loading="lazy"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
