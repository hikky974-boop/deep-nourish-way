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
          <span className="text-display text-2xl font-light tracking-tight">Lunaé</span>
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
        <p className="text-body text-sm text-muted-foreground">Version 2.0 — En vigueur à compter du 1er octobre 2026</p>
      </div>

      {/* Vendeur */}
      <div className="bg-card rounded-2xl border border-border/50 p-6 mb-10 text-body text-sm text-foreground/80 leading-relaxed space-y-1">
        <p className="font-medium text-foreground">RIVIERE Research & Consulting SAS</p>
        <p>Société par actions simplifiée à associé unique, au capital de 1 050,00 €</p>
        <p>RCS Paris 881 598 981</p>
        <p>Siège social : 6 rue d'Armaillé, 75017 Paris</p>
        <p>Contact : <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">contact@lunae-app.fr</a></p>
      </div>

      <Section num="1" title="Objet et champ d'application">
        <p>
          Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent exclusivement les relations
          contractuelles entre la société RIVIERE Research & Consulting SAS (ci-après « le Vendeur ») et toute
          personne physique souscrivant un abonnement à Lunaé depuis le site lunae-app.fr ou ses pages
          associées, dont le test en ligne (ci-après « le Client »).
        </p>
        <p>
          Tout achat implique l'acceptation pleine, entière et sans réserve des présentes CGV. Le Client déclare
          avoir la capacité juridique de contracter et être âgé d'au moins 18 ans.
        </p>
        <p>
          Lunaé s'adresse à des adultes en bonne santé générale souhaitant améliorer leur rapport à
          l'alimentation et à leurs émotions dans une démarche de bien-être. <strong>Le programme ne
          s'adresse pas aux utilisateurs suivants</strong>, auxquels il est fortement recommandé de
          consulter un professionnel de santé avant toute utilisation :
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Les utilisateurs mineurs (moins de 18 ans) ;</li>
          <li>Les femmes enceintes ;</li>
          <li>Les utilisateurs souffrant de troubles du comportement alimentaire (TCA) diagnostiqués
          cliniquement (anorexie, boulimie, hyperphagie boulimique) ;</li>
          <li>Les utilisateurs sous traitement psychiatrique actif ou suivis pour un trouble mental sévère.</li>
        </ul>
        <p>
          En cas de doute sur votre état de santé, consultez votre médecin traitant ou un professionnel
          de santé qualifié avant de commencer le programme.
        </p>
        <p>
          Les présentes CGV prévalent sur tout autre document. Les CGV applicables à une commande sont celles
          en vigueur au moment de la validation de ladite commande.
        </p>
        <p>
          <strong>Clientes ayant acheté avant la mise en place de l'abonnement.</strong> Les personnes ayant
          acquis Lunaé par paiement unique avant l'entrée en vigueur de la présente version restent régies
          par les CGV acceptées lors de leur achat et conservent l'accès à vie prévu par celles-ci.
        </p>
      </Section>

      <Section num="2" title="Description du produit">
        <p>
          Lunaé est un programme digital de reprogrammation neuro-émotionnelle, accessible via une application
          web. Il comprend notamment : un parcours structuré de 33 jours, des audios de reprogrammation neuro-émotionnelle et de PNL,
          des exercices de recentrage émotionnel, un suivi quotidien, un bouton urgence et un coach IA personnel.
        </p>
        <p>
          Lunaé constitue un <strong>contenu et un service numériques fournis sur support immatériel</strong>, au
          sens du Code de la consommation. Il ne s'agit pas d'un bien physique ni d'un dispositif médical ou
          d'un service de santé.
        </p>
        <p>
          Lunaé est proposé sous forme d'<strong>abonnement annuel</strong>, précédé d'une période d'essai
          gratuite de trois (3) jours, dans les conditions décrites à l'Article 3.
        </p>
        <p>
          Le compte Lunaé est <strong>strictement personnel, individuel et intransmissible</strong>. Le Client
          est seul responsable de la confidentialité de ses identifiants de connexion. RIVIERE Research &
          Consulting SAS se réserve le droit de suspendre ou de clôturer un compte en cas de partage
          d'identifiants avec des tiers, de connexions simultanées suspectes ou de toute activité anormale
          détectée sur le compte, après en avoir informé le Client par email, sauf urgence ou fraude avérée.
        </p>
        <p>
          Le programme Lunaé est conçu selon une logique pédagogique progressive : les contenus se débloquent
          au fur et à mesure de l'avancement du Client dans le parcours. Cette organisation constitue un
          choix pédagogique délibéré, inhérent à la nature et à l'efficacité du programme, et ne saurait
          être interprétée comme une restriction d'accès ou un accès incomplet au contenu.
        </p>
      </Section>

      <Section num="3" title="Essai gratuit et abonnement annuel">
        <p className="font-medium text-foreground">Le test en ligne</p>
        <p>
          Avant toute souscription, le Client peut répondre gratuitement et sans engagement à un test en ligne
          qui lui présente un profil et un aperçu de son parcours. Le test n'engage le Client à aucun achat.
        </p>
        <p className="font-medium text-foreground">L'essai gratuit de 3 jours</p>
        <p>
          La souscription démarre par une période d'essai gratuite de trois (3) jours, au cours de laquelle le
          Client accède au programme. Une carte bancaire valide est demandée pour démarrer l'essai.
          <strong> Aucun montant n'est prélevé pendant l'essai.</strong> La date du premier prélèvement est
          indiquée au Client avant la validation de sa commande et dans l'email de confirmation.
        </p>
        <p>
          Si le Client résilie avant la fin des trois jours d'essai, aucun montant n'est prélevé et
          l'accès prend fin à l'issue de l'essai. Un seul essai gratuit est accordé par personne.
        </p>
        <p className="font-medium text-foreground">L'abonnement annuel</p>
        <p>
          À défaut de résiliation avant la fin de l'essai, l'abonnement annuel démarre automatiquement et le
          prix de la première année est prélevé sur la carte enregistrée. L'abonnement est conclu pour une
          durée d'un (1) an et se renouvelle ensuite par <strong>tacite reconduction</strong>, pour des
          périodes successives d'un (1) an, au prix en vigueur à la date du renouvellement.
        </p>
        <p className="font-medium text-foreground">Information avant chaque renouvellement</p>
        <p>
          Conformément à l'article L215-1 du Code de la consommation, le Vendeur informe le Client par email,
          au plus tôt trois mois et au plus tard un mois avant la date de renouvellement, de la possibilité de
          ne pas reconduire son abonnement. À défaut de cette information, le Client peut mettre fin
          gratuitement à son abonnement à tout moment à compter de la date de reconduction ; il est alors
          remboursé des sommes versées au titre de la période postérieure à la date de résiliation.
        </p>
      </Section>

      <Section num="4" title="Étendue de l'accès et de l'accompagnement">
        <p className="font-medium text-foreground">Accès au contenu pendant l'abonnement</p>
        <p>
          Pendant toute la durée de son abonnement (essai compris), le Client accède au contenu du programme :
          les audios, les ressources associées et la possibilité de suivre le programme de nouveau, en
          autonomie, autant de fois qu'il le souhaite.
        </p>
        <p className="font-medium text-foreground">Accompagnement personnalisé pendant le cycle actif</p>
        <p>
          L'accompagnement personnalisé assisté par intelligence artificielle (suivi quotidien,
          relances, échanges approfondis) est inclus pendant le cycle actif du programme, d'une
          durée de trente-trois (33) jours à compter du démarrage du parcours par le Client.
        </p>
        <p className="font-medium text-foreground">Assistance après le cycle actif</p>
        <p>
          À l'issue du cycle actif et tant que l'abonnement est en cours, le Client conserve l'accès au
          contenu ainsi qu'une assistance allégée assistée par intelligence artificielle, permettant
          notamment de répondre à ses questions et de l'orienter dans le contenu du programme.
        </p>
        <p className="font-medium text-foreground">Fin de l'accès</p>
        <p>
          À la fin de l'abonnement, quelle qu'en soit la cause, l'accès au programme prend fin. Le compte du
          Client et sa progression sont conservés dans les conditions prévues par la politique de
          confidentialité, afin qu'il puisse reprendre son parcours s'il souscrit à nouveau.
        </p>
      </Section>

      <Section num="5" title="Prix">
        <p>Les prix sont indiqués en euros, toutes taxes comprises :</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Essai : <strong>gratuit pendant 3 jours</strong> ;</li>
          <li>Abonnement annuel, tarif de lancement : <strong>67,90 € par an</strong>.</li>
        </ul>
        <p className="text-foreground/60 italic text-xs">TVA non applicable, art. 293 B du CGI.</p>
        <p>
          Le prix applicable à la première année est celui affiché au moment de la validation de la commande.
          En cas d'évolution du prix, le nouveau prix ne s'applique qu'au renouvellement suivant, à condition
          que le Client en ait été informé par email au moins un mois avant la date de renouvellement. Le
          Client qui refuse le nouveau prix peut résilier son abonnement avant cette date, sans frais.
        </p>
      </Section>

      <Section num="6" title="Commande et accès">
        <p>La commande est finalisée lorsque le Client :</p>
        <ol className="list-decimal list-inside space-y-1 pl-2">
          <li>Renseigne son adresse email et sa carte bancaire sur la page de paiement sécurisée ;</li>
          <li>Accepte les présentes CGV ;</li>
          <li>Valide la commande, qui démarre son essai gratuit.</li>
        </ol>
        <p>
          Un email de confirmation récapitulant l'offre (durée de l'essai, date et montant du premier
          prélèvement, modalités de résiliation) est adressé au Client. L'accès au programme est ouvert dès la
          confirmation de la commande ; les informations de connexion sont transmises à l'adresse email
          renseignée lors de la commande.
        </p>
      </Section>

      <Section num="7" title="Résiliation">
        <p>
          Le Client peut résilier son abonnement <strong>à tout moment, en quelques clics</strong>, grâce au
          lien « Résilier mon abonnement » disponible dans la rubrique Profil de l'application et dans les
          emails relatifs à son abonnement, ou par email à{" "}
          <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">contact@lunae-app.fr</a>.
          Une confirmation de résiliation lui est adressée par email.
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>
            <strong>Pendant l'essai</strong> : aucun montant n'est prélevé ; l'accès prend fin à l'issue des
            trois jours.
          </li>
          <li>
            <strong>Après le début de l'abonnement</strong> : la résiliation empêche le renouvellement
            suivant. L'accès reste ouvert jusqu'à la fin de la période annuelle déjà payée, sans remboursement
            de cette période, sous réserve des Articles 3 et 9.
          </li>
        </ul>
      </Section>

      <Section num="8" title="Droit de rétractation — Renonciation expresse">
        <p>
          Lunaé est un contenu numérique fourni sur support immatériel, auquel le Client accède dès le début
          de son essai gratuit. Conformément à l'article <strong>L221-28 13° du Code de la consommation</strong>,
          le droit de rétractation de quatorze (14) jours <strong>ne s'applique pas</strong> lorsque
          l'exécution a commencé avec l'accord préalable exprès du Client, qui a reconnu perdre ainsi son droit
          de rétractation.
        </p>
        <p>
          Avant de valider sa commande, le Client coche obligatoirement, sur la page de paiement sécurisée,
          la case suivante :
        </p>
        <blockquote className="border-l-4 border-primary/40 pl-4 italic text-foreground/70 my-3">
          « J'accepte les conditions générales de vente. Je demande l'accès immédiat à Lunaé dès le début
          de mon essai gratuit et je reconnais renoncer ainsi à mon droit de rétractation de 14 jours. Je
          peux annuler sans frais pendant les 3 jours d'essai, depuis l'application. »
        </blockquote>
        <p>
          Cet accord et cette renonciation sont confirmés au Client dans l'email de confirmation de sa
          commande.
        </p>
        <p>
          <strong>En contrepartie, le Client dispose de l'essai gratuit de trois (3) jours</strong> : pendant
          cette période, il peut annuler son abonnement à tout moment, directement depuis l'application
          (lien « Résilier mon abonnement » dans la rubrique Profil), sans aucun prélèvement ni justification. Passé ce délai,
          l'abonnement annuel démarre et ne peut plus faire l'objet d'une rétractation.
        </p>
      </Section>

      <Section num="9" title="Remboursement">
        <p>
          En dehors du cas prévu à l'Article 3 (absence d'information avant renouvellement), les sommes versées au titre d'une période d'abonnement entamée ne sont pas
          remboursables, sauf dans les cas suivants :
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>
            Défaut avéré d'accès technique imputable exclusivement au Vendeur, non résolu dans un délai de
            7 jours ouvrés après signalement écrit à contact@lunae-app.fr ;
          </li>
          <li>Double facturation ou erreur de paiement documentée.</li>
        </ul>
        <p>
          Toute demande de remboursement doit être adressée par email à contact@lunae-app.fr avec les
          justificatifs correspondants. Le Vendeur s'engage à traiter toute demande dans les meilleurs délais.
        </p>
      </Section>

      <Section num="10" title="Modalités de paiement et défaut de paiement">
        <p>
          Le paiement s'effectue par carte bancaire via un prestataire de paiement sécurisé (Stripe). Les
          données bancaires du Client sont traitées directement par ce prestataire et ne sont jamais stockées
          par le Vendeur. Le Client autorise le prélèvement automatique du prix de l'abonnement à chaque
          échéance annuelle, jusqu'à sa résiliation.
        </p>
        <p>
          En cas d'échec d'un prélèvement, le Client en est informé par email et invité à mettre à jour son
          moyen de paiement. Le prestataire de paiement peut procéder à de nouvelles tentatives. L'accès au
          programme est suspendu jusqu'à régularisation ; le compte et la progression du Client sont
          conservés. À défaut de régularisation après les tentatives prévues, l'abonnement est résilié.
        </p>
        <p>
          Le Vendeur se réserve le droit de suspendre tout accès en cas de paiement frauduleux ou de
          rétrofacturation (chargeback) non justifiée. Les journaux de connexion et données d'utilisation
          conservés par les serveurs de Lunaé peuvent être produits comme éléments de preuve de l'accès
          effectif au service.
        </p>
      </Section>

      <Section num="11" title="Propriété intellectuelle">
        <p>
          L'intégralité du contenu de Lunaé — audios de reprogrammation, textes, visuels, protocoles, méthodes,
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

      <Section num="12" title="Limitation de responsabilité et avertissement médical">
        <div className="bg-secondary/50 border border-border rounded-xl p-4 my-2">
          <p className="font-bold text-foreground text-sm uppercase tracking-wide">
            Avertissement important
          </p>
          <p className="mt-2 font-medium text-foreground">
            LUNAÉ EST UN OUTIL DE BIEN-ÊTRE ET DE DÉVELOPPEMENT PERSONNEL. IL NE REMPLACE EN AUCUN
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
          <strong>Disponibilité du service.</strong> L'accès à Lunaé est fourni en l'état. RIVIERE
          Research & Consulting SAS s'engage à maintenir le service disponible dans la mesure du
          possible mais ne garantit pas une disponibilité sans interruption (principe du « best
          effort »). Les périodes de maintenance planifiée, de mise à jour ou d'incident technique
          ne donnent droit à aucune indemnité ni remboursement, sauf indisponibilité prolongée
          imputable exclusivement au Vendeur dépassant 7 jours ouvrés consécutifs.
        </p>
        <p className="text-foreground/60 italic text-xs">
          Il est conseillé aux utilisateurs souffrant de troubles alimentaires sévères, de troubles
          psychiatriques ou suivant un traitement médical de consulter leur médecin avant de
          commencer le programme.
        </p>
      </Section>

      <Section num="13" title="Données personnelles">
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
          <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline ml-1">contact@lunae-app.fr</a>.
        </p>
        <p>
          Pour tout recours relatif au traitement de ses données, le Client peut saisir la Commission
          Nationale de l'Informatique et des Libertés (CNIL) — www.cnil.fr.
        </p>
      </Section>

      <Section num="14" title="Médiation et règlement des litiges">
        <p>
          En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGV, le Client s'engage
          à contacter préalablement le Vendeur à l'adresse{" "}
          <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">contact@lunae-app.fr</a>{" "}
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

      <Section num="15" title="Droit applicable et juridiction compétente">
        <p>
          Les présentes CGV sont régies exclusivement par le droit français.
        </p>
        <p>
          En cas de litige non résolu par voie amiable ou de médiation, les juridictions compétentes seront
          celles du ressort du siège social du Vendeur, soit les juridictions de Paris, sous réserve des
          dispositions légales impératives applicables aux consommateurs en matière de compétence territoriale.
        </p>
      </Section>

      <Section num="16" title="Modification des CGV">
        <p>
          Le Vendeur se réserve le droit de modifier les présentes CGV à tout moment. Les modifications
          prennent effet dès leur publication sur le site lunae-app.fr pour les nouvelles commandes.
        </p>
        <p>
          Pour les abonnements en cours, toute modification substantielle est notifiée au Client par email
          au moins un (1) mois avant son application. Le Client qui la refuse peut résilier son abonnement
          sans frais avant cette date.
        </p>
        <p>
          Les CGV applicables à une commande sont celles en vigueur au moment de la validation de ladite
          commande. Il est conseillé au Client de consulter les CGV avant chaque achat.
        </p>
      </Section>

      <Section num="17" title="Dispositions diverses">
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
        <p className="mt-1">CGV version 2.0 — Dernière mise à jour : 1er octobre 2026</p>
      </div>
    </main>
  </div>
);

export default CGV;
