import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section id="cta-final" className="section-padding bg-background">
    <div className="section-medium text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-3xl p-10 md:p-16 organic-bg"
      >
        <p className="text-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-5">
          Prête à commencer ?
        </p>

        <h2 className="text-display text-3xl md:text-4xl font-light mb-6 leading-snug">
          Le changement commence par
          <br />
          <span className="italic text-primary">une décision douce.</span>
        </h2>

        <p className="text-body text-base md:text-lg text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
          Vous n'avez peut-être pas besoin de plus de contrôle.
          <br />
          Vous avez peut-être besoin d'une autre voie.
        </p>

        <Button variant="hero" size="xl">
          Commencer le programme
        </Button>

        <p className="text-body text-xs text-muted-foreground/70 mt-5 tracking-wide">
          Accès immédiat — à votre rythme
        </p>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
