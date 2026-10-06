import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { quizUrl } from "@/lib/links";

// Rappel du bouton vers le test, entre deux sections.
const CtaBand = ({ source, text }: { source: string; text: string }) => (
  <section className="px-6 py-10 md:py-12 bg-background">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto text-center"
    >
      <p className="text-display text-2xl md:text-3xl font-light mb-6 leading-snug">{text}</p>
      <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
        <a href={quizUrl(source)}>Je fais le test gratuit</a>
      </Button>
      <p className="text-body text-xs text-muted-foreground mt-3">
        3 minutes · gratuit · découvre ton profil
      </p>
    </motion.div>
  </section>
);

export default CtaBand;
