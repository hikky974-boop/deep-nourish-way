import { Link } from "react-router-dom";
import { Moon, ArrowLeft } from "lucide-react";

const Section = ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-display text-lg md:text-xl font-semibold mb-4 text-heading">
      Article {num} — {title}
    </h2>
    <div className="space-y-3 text-body text-sm text-foreground/80 leading-relaxed">
      {children}
    </div>
  </div>
);

const CGV = () => (
  <div className="min-h-screen bg-background">
    {/* Header */}
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border/40" style={{ backgroundColor: "hsl(var(--background) / 0.92)" }}>
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-display text-2xl font-light tracking-tight">Lunéa</span>
          <Moon className="w-4 h-4 text-primary" strokeWidth={1.4} />
        </Link>
        <Link to="/" className="flex items-center gap-1.5 text-body text-sm text-foreground/70 hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>
      </div>
    </header>

    {/* Content */}
    <main className="max-w-4xl mx-auto px-6 py-14 md:py-20">
      <div className="mb-12">
        <h1 className="text-display text-3xl md:text-4xl font-light mb-3">Conditions Générales de Vente</h1>
        <p className="text-body text-sm text-muted-foreground">Version 1.0 — En vigueur à compter du 7 juin 2026</p>
      </div>

      {/* Vendeur */}
      <div className="bg-card rounded-2xl border border-border/50 p-6 mb-10 text-body text-sm text-foreground/80 leading-relaxed space-y-1">
        <p className="font-medium text-foreground">RIVIERE Research & Consulting SAS</p>
        <p>Société par actions simplifiée à associé unique, au capital de 1 050,00 €</p>
        <p>RCS Paris 881 598 981</p>
        <p>Siège social : 6 rue d'Armaillé, 75017 Paris</p>
        <p>Contact : <a href="mailto:contact@lunea.fr" className="text-primary hover:underline">contact@lunea.fr</a></p>
      </div>

      <Section num="1" title="Objet et champ d'application">
        <p>
          Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent exclusivement les relations
          contractuelles entre la société RIVIERE Research & Consulting SAS (ci-après « le Vendeur ») et toute
          personne physique effectuant un achat sur le site lunea.fr (ci-après « le Client »).
        </p>
        <p>
          Tout achat implique l'acceptation pleine, entière et sans réserve des présentes CGV. Le Client déclare
          avoir la capacité juridique de contracter et être âgé d'au moins 18 ans.
        </p>
        <p>
          Lunéa s'adresse à des adultes en bonne santé générale souhaitant améliorer leur rapport à
          l'alimentation et à leurs émotions dans une démarche de bien-être. <strong>Le programme ne
          s'adresse pas aux personnes suivantes</strong>, auxquelles il est fortement recommandé de
          consulter un professionnel de santé avant toute utilisation :
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Les personnes mineures (moins de 18 ans) ;</li>
          <li>Les femmes enceintes ;</li>
          <li>Les personnes souffrant de troubles du comportement alimentaire (TCA) diagnostiqués
          cliniquement (anorexie, boulimie, hyperphagie boulimique) ;</li>
          <li>Les personnes sous traitement psychiatrique actif ou suivies pour un trouble mental sévère.</li>
        </ul>
        <p>
          En cas de doute sur votre état de santé, consultez votre médecin traitant ou un professionnel
          de santé qualifié avant de commencer le programme.
        </p>
        <p>
          Les présentes CGV prévalent sur tout autre document. Les CGV applicables à une commande sont celles
          en vigueur au moment de la validation de ladite commande.
        </p>
      </Section>

      <Section num="2" title="Description du produit">
        <p>
          Lunéa est un programme digital de reprogrammation neuro-émotionnelle, accessible via une application
          web. Il comprend notamment : un parcours structuré de 33 jours, des audios de reprogrammation neuro-émotionnelle et de PNL,
          des exercices de recentrage émotionnel, un suivi quotidien, un bouton urgence et un coach IA personnel.
        </p>
        <p>
          Lunéa constitue un <strong>contenu numérique fourni sur support immatériel</strong>, au sens de
          l'article L221-1 du Code de la consommation. Il ne s'agit pas d'un bien physique ni d'un dispositif
          médical ou d'un service de santé.
        </p>
        <p>
          Les accès sont strictement personnels, non cessibles et non transférables. Le Client bénéficie d'un
          accès à vie au programme, sans abonnement ni date d'expiration, sous réserve du maintien de la
          plateforme.
        </p>
        <p>
          Le compte Lunéa est <strong>strictement personnel, individuel et intransmissible</strong>. Le Client
          est seul responsable de la confidentialité de ses identifiants de connexion. RIVIERE Research &
          Consulting SAS se réserve le droit de <strong>suspendre ou supprimer immédiatement tout compte,
          sans préavis ni remboursement</strong>, en cas de connexions simultanées suspectes, de partage
          d'identifiants avec des tiers, ou de toute activité anormale détectée sur le compte.
        </p>
        <p>
          Le programme Lunéa est conçu selon une logique pédagogique progressive : les contenus se débloquent
          au fur et à mesure de l'avancement du Client dans le parcours. L'accès immédiat consécutif au
          paiement porte sur le démarrage du programme ; les modules et contenus suivants deviennent
          accessibles à mesure que le Client progresse dans son parcours. Cette organisation constitue un
          choix pédagogique délibéré, inhérent à la nature et à l'efficacité du programme, et ne saurait
          être interprétée comme une restriction d'accès ou un accès incomplet au contenu acquis.
        </p>
      </Section>

      <Section num="3" title="Prix">
        <p>Les prix sont indiqués en euros :</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Tarif de lancement : <strong>67,90 €</strong></li>
          <li>Tarif régulier : <strong>99 €</strong></li>
        </ul>
        <p className="text-foreground/60 italic text-xs">TVA non applicable, art. 293 B du CGI.</p>
        <p>
          Le Vendeur se réserve le droit de modifier ses tarifs à tout moment. Le prix applicable est celui
          affiché au moment de la validation de la commande.
        </p>
      </Section>

      <Section num="4" title="Commande et accès">
        <p>La commande est finalisée lorsque le Client :</p>
        <ol className="list-decimal list-inside space-y-1 pl-2">
          <li>Remplit le formulaire de commande ;</li>
          <li>Coche la case de renonciation expresse au droit de rétractation (voir Article 5) ;</li>
          <li>Valide le paiement.</li>
        </ol>
        <p>
          L'accès au programme est ouvert immédiatement après confirmation du paiement. Les identifiants de
          connexion sont transmis à l'adresse email renseignée lors de la commande. Le Client est seul
          responsable de la confidentialité de ses identifiants.
        </p>
      </Section>

      <Section num="5" title="Droit de rétractation — Exclusion expresse">
        <p>
          Conformément à l'article <strong>L221-28 13° du Code de la consommation</strong>, le droit de
          rétractation <strong>ne s'applique pas</strong> aux contenus numériques fournis sur support immatériel
          dont l'exécution a commencé avec l'accord préalable exprès du consommateur, lequel a reconnu qu'il
          perdrait ainsi son droit de rétractation.
        </p>
        <p>
          Avant toute validation de commande, le Client est invité à cocher la case suivante, dont la
          validation est obligatoire pour finaliser l'achat :
        </p>
        <blockquote className="border-l-4 border-primary/40 pl-4 italic text-foreground/70 my-3">
          « Je reconnais que Lunéa est un contenu numérique à accès immédiat. En cochant cette case, je
          consens expressément à ce que l'exécution commence immédiatement après mon paiement et je renonce
          expressément à mon droit de rétractation de 14 jours, conformément à l'article L221-28 13° du Code
          de la consommation. »
        </blockquote>
        <p>
          En cochant cette case, le Client reconnaît et accepte irrévocablement la renonciation à son droit
          de rétractation. Il est informé que cette renonciation est la contrepartie directe de l'accès
          immédiat au programme.
        </p>
      </Section>

      <Section num="6" title="Politique de remboursement">
        <p>
          En raison de la nature numérique du produit et de la renonciation expresse du Client à son droit de
          rétractation (Article 5), <strong>toute vente est définitive dès lors que l'accès au programme a
          été ouvert ou que les identifiants de connexion ont été transmis</strong>.
        </p>
        <p>Aucun remboursement ne sera accordé, sauf dans les cas strictement suivants :</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>
            Défaut avéré d'accès technique imputable exclusivement au Vendeur, non résolu dans un délai de
            7 jours ouvrés après signalement écrit à contact@lunea.fr ;
          </li>
          <li>Double facturation ou erreur de paiement documentée.</li>
        </ul>
        <p>
          Toute demande de remboursement doit être adressée par email à contact@lunea.fr avec les justificatifs
          correspondants. Le Vendeur s'engage à traiter tout signalement dans les meilleurs délais.
        </p>
      </Section>

      <Section num="7" title="Modalités de paiement">
        <p>
          Le paiement s'effectue par carte bancaire via un prestataire de paiement sécurisé. Les données
          bancaires du Client sont traitées directement par ce prestataire et ne sont jamais stockées par
          le Vendeur.
        </p>
        <p>
          Le Vendeur se réserve le droit de suspendre tout accès en cas de paiement frauduleux ou de
          rétrofacturation (chargeback) non justifiée.
        </p>
        <p>
          Les journaux de connexion, adresses IP et données d'utilisation conservés par les serveurs de
          Lunéa constituent une <strong>preuve juridique de l'accès effectif au service</strong>. Toute
          demande de rétrofacturation infondée pourra entraîner des frais de recouvrement à la charge du
          Client ainsi qu'un <strong>bannissement définitif de la plateforme</strong>.
        </p>
      </Section>

      <Section num="8" title="Propriété intellectuelle">
        <p>
          L'intégralité du contenu de Lunéa — audios de reprogrammation, textes, visuels, protocoles, méthodes,
          exercices, architecture du programme et éléments de la marque — est la <strong>propriété exclusive
          de RIVIERE Research & Consulting SAS</strong> et est protégée par le droit d'auteur ainsi que par
          les dispositions du Code de la propriété intellectuelle.
        </p>
        <p>
          Sont strictement interdits, sans autorisation écrite préalable du Vendeur :
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Toute reproduction, copie ou duplication du contenu ;</li>
          <li>Tout enregistrement ou téléchargement non autorisé des audios ou vidéos ;</li>
          <li>Toute diffusion, mise à disposition ou partage du contenu avec des tiers ;</li>
          <li>Toute revente, exploitation commerciale ou utilisation à des fins professionnelles ;</li>
          <li>Tout partage d'identifiants permettant à un tiers d'accéder au programme.</li>
        </ul>
        <p>
          Toute violation de ces dispositions constitue une <strong>contrefaçon au sens des articles L335-2
          et suivants du Code de la propriété intellectuelle</strong>, susceptible d'engager la responsabilité
          civile et pénale de son auteur. Tout contrevenant verra son accès supprimé immédiatement et
          définitivement, sans préavis ni remboursement.
        </p>
        <p>
          Le Client bénéficie d'un droit d'usage strictement personnel, non exclusif et non transférable,
          limité à son usage privé.
        </p>
      </Section>

      <Section num="9" title="Limitation de responsabilité et avertissement médical">
        <div className="bg-secondary/50 border border-border rounded-xl p-4 my-2">
          <p className="font-bold text-foreground text-sm uppercase tracking-wide">
            Avertissement important
          </p>
          <p className="mt-2 font-medium text-foreground">
            LUNÉA EST UN OUTIL DE BIEN-ÊTRE ET DE DÉVELOPPEMENT PERSONNEL. IL NE REMPLACE EN AUCUN
            CAS UNE CONSULTATION, UN DIAGNOSTIC OU UN TRAITEMENT MÉDICAL OU PSYCHOLOGIQUE
            PROFESSIONNEL. AUCUNE OBLIGATION DE RÉSULTAT N'EST GARANTIE. RIVIERE RESEARCH &
            CONSULTING S'ENGAGE UNIQUEMENT À FOURNIR L'ACCÈS AUX CONTENUS DU PROGRAMME
            (OBLIGATION DE MOYENS).
          </p>
        </div>
        <p>
          Le Vendeur ne garantit aucun résultat spécifique. Les résultats varient selon les individus et
          dépendent notamment de l'engagement du Client dans le programme.
        </p>
        <p>La responsabilité du Vendeur ne saurait être engagée :</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>En cas d'inefficacité perçue du programme sur les résultats personnels du Client ;</li>
          <li>En cas d'interruption volontaire du programme par le Client ;</li>
          <li>En cas d'incompatibilité avec un état de santé spécifique non signalé préalablement ;</li>
          <li>En cas de force majeure, de panne d'hébergement ou d'indisponibilité temporaire du service.</li>
        </ul>
        <p>
          En cas de manquement prouvé du Vendeur, sa responsabilité est limitée au montant effectivement
          payé par le Client pour l'accès au programme.
        </p>
        <p>
          <strong>Disponibilité du service.</strong> L'accès à Lunéa est fourni en l'état. RIVIERE
          Research & Consulting SAS s'engage à maintenir le service disponible dans la mesure du
          possible mais ne garantit pas une disponibilité sans interruption (principe du « best
          effort »). Les périodes de maintenance planifiée, de mise à jour ou d'incident technique
          ne donnent droit à aucune indemnité ni remboursement, sauf indisponibilité prolongée
          imputable exclusivement au Vendeur dépassant 7 jours ouvrés consécutifs.
        </p>
        <p className="text-foreground/60 italic text-xs">
          Il est conseillé aux personnes souffrant de troubles alimentaires sévères, de troubles
          psychiatriques ou suivant un traitement médical de consulter leur médecin avant de
          commencer le programme.
        </p>
      </Section>

      <Section num="10" title="Données personnelles">
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD, règlement UE 2016/679) et à
          la loi Informatique et Libertés, le Vendeur collecte et traite les données personnelles du Client
          (nom, adresse email, données de connexion et d'utilisation) aux seules fins suivantes :
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Gestion de la commande et de l'accès au programme ;</li>
          <li>Communication relative au programme ;</li>
          <li>Respect des obligations comptables et légales.</li>
        </ul>
        <p>
          Les données personnelles ne sont jamais revendues ni cédées à des tiers à des fins commerciales.
        </p>
        <p>
          Le Client dispose d'un droit d'accès, de rectification, de suppression, de limitation et de
          portabilité de ses données, ainsi que d'un droit d'opposition, exerceable à l'adresse :
          <a href="mailto:contact@lunea.fr" className="text-primary hover:underline ml-1">contact@lunea.fr</a>.
        </p>
        <p>
          Pour tout recours relatif au traitement de ses données, le Client peut saisir la Commission
          Nationale de l'Informatique et des Libertés (CNIL) — www.cnil.fr.
        </p>
      </Section>

      <Section num="11" title="Médiation et règlement des litiges">
        <p>
          En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGV, le Client s'engage
          à contacter préalablement le Vendeur à l'adresse{" "}
          <a href="mailto:contact@lunea.fr" className="text-primary hover:underline">contact@lunea.fr</a>{" "}
          afin de rechercher une solution amiable.
        </p>
        <p>
          En l'absence de résolution amiable dans un délai de <strong>30 jours calendaires</strong> après
          réclamation écrite auprès du Vendeur, le Client peut recourir gratuitement à la médiation de la
          consommation, conformément aux articles L616-1 et R616-1 du Code de la consommation, dans un délai
          d'un an à compter de sa réclamation écrite.
        </p>
        <p>
          Le médiateur désigné est :{" "}
          <strong>CM2C — Centre de Médiation de la Consommation de Conciliateurs de Justice</strong>
          <br />
          49 rue de Ponthieu, 75008 Paris
          <br />
          <a
            href="https://www.cm2c.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            www.cm2c.net
          </a>
        </p>
        <p>
          Le Client peut également utiliser la plateforme européenne de Règlement en Ligne des Litiges (RLL),
          accessible à l'adresse :{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
      </Section>

      <Section num="12" title="Droit applicable et juridiction compétente">
        <p>
          Les présentes CGV sont régies exclusivement par le droit français.
        </p>
        <p>
          En cas de litige non résolu par voie amiable ou de médiation, les juridictions compétentes seront
          celles du ressort du siège social du Vendeur, soit les juridictions de Paris, sous réserve des
          dispositions légales impératives applicables aux consommateurs en matière de compétence territoriale.
        </p>
      </Section>

      <Section num="13" title="Modification des CGV">
        <p>
          Le Vendeur se réserve le droit de modifier les présentes CGV à tout moment. Les modifications
          prennent effet dès leur publication sur le site lunea.fr.
        </p>
        <p>
          Les CGV applicables à une commande sont celles en vigueur au moment de la validation de ladite
          commande. Il est conseillé au Client de consulter les CGV avant chaque achat.
        </p>
      </Section>

      <Section num="14" title="Dispositions diverses">
        <p>
          Si une clause des présentes CGV était déclarée nulle ou inapplicable par une décision judiciaire
          définitive, les autres clauses demeurent pleinement en vigueur.
        </p>
        <p>
          Le fait pour le Vendeur de ne pas se prévaloir à un moment donné d'une clause des présentes CGV
          ne peut être interprété comme une renonciation à s'en prévaloir ultérieurement.
        </p>
      </Section>

      <div className="mt-12 pt-8 border-t border-border/40 text-body text-xs text-muted-foreground/70">
        <p>RIVIERE Research & Consulting SAS — RCS Paris 881 598 981 — 6 rue d'Armaillé, 75017 Paris</p>
        <p className="mt-1">CGV version 1.2 — Dernière mise à jour : 12 juin 2026</p>
      </div>
    </main>
  </div>
);

export default CGV;
