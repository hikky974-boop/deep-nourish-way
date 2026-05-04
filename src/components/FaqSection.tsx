import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "À qui s'adresse Lunéa ?",
    a: "Lunéa s'adresse à toutes les femmes qui souhaitent transformer leur relation à la nourriture en profondeur, sans régime ni privation. Le programme est particulièrement adapté à celles qui mangent sous l'effet des émotions ou des automatismes.",
  },
  {
    q: "Combien de temps dure le programme ?",
    a: "Le parcours s'étend sur 33 jours, avec des contenus quotidiens courts (15 à 20 minutes). Vous gardez ensuite un accès illimité à l'ensemble des outils et audios.",
  },
  {
    q: "Ai-je besoin d'expérience en hypnose ?",
    a: "Aucune expérience préalable n'est nécessaire. Les audios d'hypnose et de PNL sont guidés étape par étape par une experte certifiée. Il vous suffit de vous installer confortablement et de vous laisser porter.",
  },
  {
    q: "Est-ce accessible sur téléphone ?",
    a: "Oui, le programme est 100% en ligne et conçu pour fonctionner parfaitement sur smartphone, tablette et ordinateur. Vous pouvez le suivre où vous voulez, quand vous voulez.",
  },
];

const FaqSection = () => (
  <section id="faq" className="px-6 py-16 md:py-24 bg-section-alt">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-display text-3xl md:text-4xl font-light text-center mb-12"
      >
        Questions <span className="italic text-primary">fréquentes</span>
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-card rounded-2xl border border-border/50 px-6 data-[state=open]:shadow-sm"
          >
            <AccordionTrigger className="text-display text-base md:text-lg font-medium hover:no-underline py-5 text-left">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-body text-sm text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
