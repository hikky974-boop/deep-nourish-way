import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-background">
    <div className="section-medium text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-display text-3xl md:text-4xl font-light mb-4">
          Rejoindre <span className="italic text-primary">Lunéa</span> aujourd'hui
        </h2>
        <p className="text-body text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed">
          Pour le lancement, Lunéa est exceptionnellement proposé à un tarif préférentiel réservé aux premières personnes qui rejoignent le programme.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="max-w-xl mx-auto"
      >
        <div className="bg-card rounded-3xl border border-border/60 shadow-sm p-10 md:p-14 relative overflow-hidden">
          {/* Subtle organic bg */}
          <div className="absolute inset-0 organic-bg pointer-events-none" />

          <div className="relative z-10">
            <Badge
              variant="secondary"
              className="mb-6 text-[10px] tracking-[0.2em] uppercase font-body bg-accent/60 text-accent-foreground border-none px-4 py-1.5"
            >
              Offre de lancement
            </Badge>

            <p className="text-display text-2xl md:text-3xl font-light mb-8 tracking-tight">
              Lunéa
            </p>

            {/* Price block */}
            <div className="mb-6">
              <p className="text-body text-lg text-muted-foreground line-through decoration-muted-foreground/50 mb-1">
                97&nbsp;€ TTC
              </p>
              <p className="text-display text-5xl md:text-6xl font-light tracking-tight text-primary leading-none">
                47,90&nbsp;€
                <span className="text-lg md:text-xl font-body font-normal text-muted-foreground ml-1.5">TTC</span>
              </p>
            </div>

            <p className="text-body text-xs tracking-wide text-primary/80 uppercase mb-8">
              Prix de lancement réservé aux premières personnes
            </p>

            <div className="divider-leaf" />

            <p className="text-body text-sm text-muted-foreground max-w-sm mx-auto mb-8 leading-relaxed">
              Un tarif de lancement exceptionnel pour rejoindre Lunéa dès maintenant, avec un accès complet&nbsp;: hypnose guidée, outils de PNL, audios, exercices et parcours structuré.
            </p>

            <Button variant="hero" size="xl" className="mb-4 w-full sm:w-auto">
              Commencer Lunéa
            </Button>

            <p className="text-body text-[11px] text-muted-foreground/60 tracking-wide mb-8">
              Création de votre accès puis redirection vers le paiement sécurisé
            </p>

            <div className="border-t border-border/40 pt-6">
              <p className="text-body text-xs text-muted-foreground/70 leading-relaxed">
                Vous profitez ici du tarif d'ouverture.<br />
                Le tarif normal du programme est de 97&nbsp;€ TTC.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
