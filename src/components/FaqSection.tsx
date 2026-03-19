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
    q: "Est-ce que ça fonctionne vraiment pour moi ?",
    a: "L'hypnose agit sur des mécanismes universels du subconscient. Si vous êtes ouvert·e au processus et prêt·e à vous accorder ce temps, les résultats suivent naturellement. Chaque personne avance à son rythme.",
  },
  {
    q: "Combien de temps faut-il pour voir des résultats ?",
    a: "Certaines personnes ressentent un apaisement dès les premières séances. Les changements profonds s'installent progressivement, généralement en quelques semaines de pratique régulière.",
  },
  {
    q: "Est-ce que je dois suivre un régime en parallèle ?",
    a: "Non. Le programme ne repose sur aucune restriction alimentaire. L'objectif est justement de vous libérer de cette logique de contrôle pour retrouver une alimentation intuitive et naturelle.",
  },
  {
    q: "Est-ce que c'est difficile ?",
    a: "Pas du tout. Il vous suffit de vous installer confortablement, de mettre vos écouteurs, et de vous laisser guider. Aucune compétence particulière n'est requise.",
  },
  {
    q: "Est-ce que l'hypnose est sans danger ?",
    a: "Absolument. L'hypnose est un état naturel. Vous restez conscient·e et en contrôle à tout moment. Ce n'est ni du sommeil, ni une perte de contrôle.",
  },
];

const FaqSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="section-narrow">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <h2 className="text-display text-3xl md:text-4xl font-light text-foreground">
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
              className="bg-background rounded-xl px-6 border-none shadow-sm"
            >
              <AccordionTrigger className="text-display text-base md:text-lg font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-body text-sm md:text-base text-muted-foreground pb-5">
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
