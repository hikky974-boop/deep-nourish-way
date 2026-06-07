import { motion } from "framer-motion";
import { Infinity } from "lucide-react";

const GuaranteeSection = () => (
  <section className="px-6 py-12 md:py-16 bg-background">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-lg mx-auto bg-card rounded-3xl border border-border/50 px-8 py-10 text-center"
    >
      <div className="w-14 h-14 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-5">
        <Infinity className="w-6 h-6 text-primary" strokeWidth={1.5} />
      </div>
      <h2 className="text-display text-xl md:text-2xl font-semibold mb-3">
        Accès à vie garanti
      </h2>
      <p className="text-body text-sm text-muted-foreground leading-relaxed">
        Tu accèdes à Lunéa pour toujours. Pas d'abonnement, pas d'expiration.
        Tu avances à ton rythme.
      </p>
    </motion.div>
  </section>
);

export default GuaranteeSection;
