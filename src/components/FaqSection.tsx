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
    a: "Le parcours s'étend sur 33 jours, avec des contenus quotidiens courts (15 à 20 minutes). Tu gardes ensuite un accès illimité à l'ensemble des outils et audios.",
  },
  {
    q: "Ai-je besoin d'expérience préalable ?",
    a: "Aucune expérience préalable n'est nécessaire. Les audios de reprogrammation sont guidés étape par étape par une experte certifiée. Il te suffit de t'installer confortablement et de te laisser porter.",
  },
  {
    q: "Est-ce accessible sur téléphone ?",
    a: "Oui, le programme est 100% en ligne et conçu pour fonctionner parfaitement sur smartphone, tablette et ordinateur. Tu peux le suivre où tu veux, quand tu veux.",
  },
  {
    q: "Combien de temps par jour ?",
    a: "Chaque journée demande entre 10 et 20 minutes. Certains contenus — comme les audios de reprogrammation — se font allongée, souvent le soir avant de dormir, donc tu peux les glisser dans ta routine sans réorganiser ta vie. Si tu as une journée vraiment chargée, certains exercices tiennent en 5 minutes. L'idée n'est pas d'ajouter une contrainte de plus, mais d'intégrer quelque chose qui te fait du bien.",
  },
  {
    q: "Est-ce que ça marche vraiment ?",
    a: "Honnêtement : oui, si tu t'y engages vraiment. Lunéa n'est pas une formule magique. C'est un programme qui agit sur les mécanismes profonds derrière les compulsions — pas seulement sur les symptômes. Les résultats varient selon les personnes : certaines ressentent un changement dès la première semaine, d'autres après 3 ou 4 semaines. Ce qui revient le plus souvent dans les retours, c'est moins de culpabilité, moins d'automatismes, et une vraie conscience de ce qui se passe quand l'envie arrive.",
  },
  {
    q: "C'est quoi exactement la reprogrammation neuro-émotionnelle ?",
    a: "C'est une approche qui combine la relaxation guidée et la PNL (Programmation Neuro-Linguistique) pour agir sur les schémas automatiques du cerveau. Quand tu manges sous l'effet d'une émotion, ce n'est pas un manque de volonté — c'est un automatisme que ton cerveau a appris, souvent depuis longtemps. La reprogrammation neuro-émotionnelle vient défaire ces associations doucement, sans que tu aies à te forcer. Les audios guidés créent un état de relaxation profonde dans lequel le cerveau est plus réceptif au changement. Pas besoin de comprendre la technique pour en ressentir les effets — tu te laisses guider, c'est tout.",
  },
  {
    q: "Je peux commencer même si je n'ai jamais fait ce type de programme ?",
    a: "Absolument — et c'est même pour ça que Lunéa a été conçu. Tout est guidé pas à pas, sans jargon, sans prérequis. Que tu aies déjà exploré le développement personnel ou que ce soit ta toute première fois, le programme t'accueille là où tu en es. Le seul vrai prérequis, c'est d'avoir envie de changer quelque chose.",
  },
];

const FaqSection = () => (
  <section id="faq" className="px-6 py-10 md:py-16 bg-section-alt">
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
