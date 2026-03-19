import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const ProofSection = () => (
  <section className="section-padding bg-background">
    <div className="section-narrow text-center">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="text-display text-3xl md:text-4xl font-light text-foreground mb-6"
      >
        Pourquoi ça <span className="italic text-primary">fonctionne</span>
      </motion.h2>

      <div className="divider-leaf" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
        className="text-body text-base md:text-lg text-muted-foreground space-y-6 text-left max-w-2xl mx-auto"
      >
        <p>
          L'hypnose n'est pas de la magie. C'est un état naturel de concentration profonde,
          que vous expérimentez déjà chaque jour — quand vous êtes absorbé·e par un film,
          ou quand vous conduisez en « pilote automatique ».
        </p>
        <p>
          Dans cet état, votre esprit conscient se met en retrait, et votre <strong className="font-medium text-foreground">subconscient</strong> devient
          réceptif à de nouvelles suggestions. C'est là que vivent vos habitudes alimentaires.
        </p>
        <p>
          En travaillant directement à ce niveau, on ne force rien. On <em>propose</em> de
          nouveaux schémas. Votre esprit les adopte naturellement, sans effort de volonté.
        </p>
        <p>
          C'est pour cela que les changements sont durables : ils ne viennent pas d'une règle imposée,
          mais d'une <strong className="font-medium text-foreground">transformation intérieure profonde</strong>.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProofSection;
