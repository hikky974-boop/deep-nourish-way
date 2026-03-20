import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section id="cta-final" className="section-padding bg-background">
    <div className="section-narrow text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-section-alt rounded-3xl p-10 md:p-16"
      >
        <p className="text-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Prêt·e à commencer ?
        </p>

        <h2 className="text-display text-3xl md:text-4xl font-light text-foreground mb-6">
          Le changement commence par
          <br />
          <span className="italic text-primary">une décision douce.</span>
        </h2>

        <p className="text-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Vous n'avez pas besoin de plus de volonté.
          <br />
          Vous avez besoin d'un chemin différent.
        </p>

        <Button variant="hero" size="xl">
          Commencer le programme
        </Button>

        <p className="text-body text-xs text-muted-foreground mt-6">
          Accès immédiat · À votre rythme · Sans engagement de durée
        </p>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
