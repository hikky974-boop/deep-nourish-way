import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Court témoignage placé juste sous le haut de page.
const QuoteStrip = () => (
  <section className="px-6 py-8 md:py-10 bg-section-alt">
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center"
    >
      <div className="flex justify-center gap-0.5 mb-3" aria-label="5 étoiles">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" strokeWidth={1} />
        ))}
      </div>
      <blockquote className="text-display text-xl md:text-2xl italic font-light leading-snug text-foreground/90">
        « Après 4 semaines, j'ai compris que je mangeais pour gérer mon anxiété, pas la faim.
        Je ne me cache plus. Et ça, c'est énorme pour moi. »
      </blockquote>
      <figcaption className="text-body text-sm text-muted-foreground mt-3">Aurélie B., 43 ans</figcaption>
    </motion.figure>
  </section>
);

export default QuoteStrip;
