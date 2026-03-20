import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const faqs = [
  {
     q: "Est-ce que l'hypnose est sans danger ?",
     a: "Absolument. L'hypnose repose sur un état naturel de concentration. Vous restez consciente et en contrôle à tout moment. Ce n'est ni du sommeil, ni une perte de contrôle.",
   },
   {
     q: "Comment fonctionne l'hypnose ?",
     a: "Elle combine des techniques avancées pour identifier et modifier les schémas automatiques — les associations entre émotions, pensées et comportements. Elle agit en profondeur sur les mécanismes intérieurs.",
  },
  {
    q: "Est-ce que je dois suivre un régime en parallèle ?",
    a: "Non. Le programme ne repose sur aucune restriction alimentaire. L'objectif est de vous libérer de cette logique de contrôle pour retrouver une alimentation intuitive et naturelle.",
  },
  {
    q: "Combien de temps faut-il pour ressentir des effets ?",
    a: "Certaines personnes ressentent un apaisement dès les premières séances. Les changements profonds s'installent progressivement, généralement en quelques semaines de pratique régulière.",
  },
  {
    q: "Est-ce que cela fonctionne si j'ai déjà essayé beaucoup de choses ?",
    a: "Oui. Ce programme agit différemment des approches classiques. Il ne travaille pas sur le contrôle mais sur les mécanismes intérieurs. C'est souvent ce qui fait la différence pour les personnes qui ont déjà tout essayé.",
  },
];

const FaqSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="section-medium">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <h2 className="text-display text-3xl md:text-4xl font-light">
          Questions <span className="italic text-primary">fréquentes</span>
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl px-6 md:px-8 border-none transition-shadow duration-300 hover:shadow-sm"
            >
              <AccordionTrigger className="text-display text-base md:text-lg font-medium hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-body text-sm md:text-base text-muted-foreground pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
