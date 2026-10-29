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
        <p className="text-body text-sm text-muted-foreground">Version 3.0 — En vigueur à compter du 29 octobre 2026</p>
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
          personne physique achetant un accès à Lunaé depuis le site lunae-app.fr ou ses pages
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
          <strong>Clientes ayant acheté avant l'entrée en vigueur de la présente version.</strong> Les personnes ayant acquis Lunaé avant l'entrée en vigueur de la présente version restent régies par les CGV acceptées lors de leur achat et conservent les droits d'accès prévus par celles-ci, notamment l'accès à vie lorsqu'il leur a été accordé.
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
          Lunaé est vendu sous la forme d'un accès numérique de douze (12) mois, payé en une seule fois. Cet accès commence dès la confirmation du paiement et comprend le protocole de trente-trois (33) jours ainsi que l'ensemble des fonctionnalités et contenus décrits aux présentes CGV.
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

      <Section num="3" title="Achat et durée de l'accès">
        <p className="font-medium text-foreground">Le test en ligne</p>
        <p>
          Avant tout achat, le Client peut répondre gratuitement et sans engagement à un test en ligne qui crée son plan personnalisé et lui présente un aperçu de son parcours. Le test n'engage le Client à aucun achat.
        </p>
        <p className="font-medium text-foreground">L'achat de l'accès Lunaé</p>
        <p>
          L'achat est réalisé en un paiement unique. Après confirmation du paiement, le Client bénéficie immédiatement d'un accès complet à Lunaé pendant douze (12) mois. Ce paiement ne crée aucun engagement au-delà de cette période. L'accès prend fin automatiquement à son terme, sans nouvelle facturation ni démarche du Client.
        </p>
        <p className="font-medium text-foreground">Durée de l'accès</p>
        <p>
          La période de douze (12) mois commence à la date de confirmation du paiement. Pour bénéficier d'une nouvelle période d'accès après son expiration, le Client doit effectuer une nouvelle commande et accepter les CGV alors en vigueur.
        </p>
      </Section>

      <Section num="4" title="Étendue de l'accès">
        <p className="font-medium text-foreground">Accès complet pendant douze mois</p>
        <p>
          Pendant douze (12) mois à compter du paiement, le Client dispose d'un accès complet à l'application Lunaé, comprenant notamment le protocole de trente-trois (33) jours, les audios, les exercices, le bouton urgence, le coach IA et les bonus disponibles.
        </p>
        <p className="font-medium text-foreground">Déblocage progressif du protocole</p>
        <p>
          Le protocole de trente-trois (33) jours suit une logique pédagogique progressive : certains contenus se débloquent au fur et à mesure de l'avancement du Client. Cette organisation constitue un choix pédagogique inhérent au programme et ne réduit pas la durée totale de l'accès.
        </p>
        <p className="font-medium text-foreground">Accès après les trente-trois jours</p>
        <p>
          Après avoir terminé le protocole, le Client conserve jusqu'au terme des douze (12) mois l'accès aux contenus et fonctionnalités de Lunaé, notamment aux audios, aux exercices, au bouton urgence, au coach IA et aux bonus. Il peut reprendre les contenus déjà débloqués et refaire le protocole.
        </p>
        <p className="font-medium text-foreground">Fin de l'accès</p>
        <p>
          Au terme des douze (12) mois, l'accès à Lunaé prend fin automatiquement. Le compte et la progression du Client sont conservés dans les conditions prévues par la politique de confidentialité, afin qu'il puisse reprendre son parcours s'il achète une nouvelle période d'accès.
        </p>
      </Section>

      <Section num="5" title="Prix">
        <p>Les prix sont indiqués en euros, toutes taxes comprises :</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Prix standard : 67,90 € TTC, en paiement unique ;</li>
          <li>Offre de bienvenue : 49,90 € TTC, en paiement unique, lorsqu'elle est affichée et encore valable au moment de la commande.</li>
        </ul>
        <p>
          L'offre de bienvenue est limitée dans le temps. Sa durée de validité est indiquée sur la page de l'offre. Le prix applicable est celui qui est clairement affiché et accepté par le Client avant la validation de la commande. Quel que soit le prix payé, l'accès fourni est identique et dure douze (12) mois.
        </p>
        <p className="text-foreground/60 italic text-xs">TVA non applicable, art. 293 B du CGI.</p>
      </Section>

      <Section num="6" title="Commande et accès">
        <p>La commande est finalisée lorsque le Client :</p>
        <ol className="list-decimal list-inside space-y-1 pl-2">
          <li>Renseigne son adresse email et son moyen de paiement sur la page de paiement sécurisée ;</li>
          <li>Accepte les présentes CGV et demande l'accès immédiat au contenu numérique ;</li>
          <li>Valide le paiement unique du prix affiché.</li>
        </ol>
        <p>
          Un email de confirmation récapitulant l'offre, le prix payé, la durée de l'accès et les informations de connexion est adressé au Client. L'accès au programme est ouvert dès la confirmation du paiement et dure douze (12) mois.
        </p>
      </Section>

      <Section num="7" title="Fin de l'accès">
        <p>
          Le paiement est unique et ne crée aucun engagement au-delà des douze (12) mois d'accès. Aucune nouvelle somme n'est prélevée automatiquement. L'accès prend fin à l'échéance sans démarche du Client. Pour continuer à utiliser Lunaé après cette date, le Client doit effectuer une nouvelle commande.
        </p>
      </Section>

      <Section num="8" title="Droit de rétractation — Renonciation expresse">
        <p>
          Lunaé est un contenu et un service numériques fournis sur support immatériel, auxquels le Client accède immédiatement après la confirmation de son paiement. Conformément à l'article L221-28 13° du Code de la consommation, le droit de rétractation de quatorze (14) jours ne peut être exercé lorsque l'exécution a commencé avec l'accord préalable exprès du Client et que celui-ci a reconnu perdre son droit de rétractation.
        </p>
        <p>
          En cochant la case « J’accepte les conditions générales de vente » avant de valider sa commande, le Client demande expressément l'accès immédiat à Lunaé avant l'expiration du délai légal de rétractation et reconnaît perdre son droit de rétractation dès le commencement de la fourniture du contenu et du service numériques.
        </p>
        <p>
          La garantie commerciale « Fin du Yo-Yo » prévue à l'Article 9 est distincte du droit légal de rétractation. Elle s'ajoute à ce régime et s'applique uniquement dans les conditions définies à l'Article 9.
        </p>
      </Section>

      <Section num="9" title="Garantie « Fin du Yo-Yo »">
        <p>
          Lunaé bénéficie d'une garantie commerciale de remboursement intégral appelée « Fin du Yo-Yo ». Le Client peut en bénéficier uniquement si les conditions cumulatives suivantes sont remplies :
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>La Cliente a suivi le protocole de trente-trois (33) jours sans obtenir de résultat ;</li>
          <li>La demande est envoyée par email à <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">contact@lunae-app.fr</a> au plus tôt le trente-troisième (33e) jour et au plus tard le soixante-troisième (63e) jour suivant la date de son paiement.</li>
        </ul>
        <p>
          Lorsque ces conditions sont remplies, le Vendeur rembourse intégralement le montant effectivement payé par le Client, soit 67,90 € ou 49,90 € selon le prix de sa commande. Le remboursement est effectué sur le moyen de paiement utilisé lors de l'achat. Le remboursement met immédiatement fin à l'accès à Lunaé.
        </p>
        <p>
          Une seule garantie « Fin du Yo-Yo » peut être accordée par cliente, quel que soit le nombre d'achats effectués.
        </p>
        <p>
          Cette garantie commerciale s'ajoute aux droits légaux impératifs dont bénéficie le Client.
        </p>
      </Section>

      <Section num="10" title="Modalités et incident de paiement">
        <p>
          Le paiement unique s'effectue par carte bancaire ou par tout autre moyen proposé sur la page de paiement, via le prestataire de paiement sécurisé Stripe. Les données bancaires du Client sont traitées directement par ce prestataire et ne sont jamais stockées par le Vendeur.
        </p>
        <p>
          Si le paiement est refusé ou échoue, la commande n'est pas finalisée et l'accès n'est pas ouvert. Le Client peut effectuer une nouvelle tentative avec un moyen de paiement valide.
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
          définitivement, sans préavis.
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
          Toute modification des CGV s'applique uniquement aux nouvelles commandes. Un achat déjà conclu reste régi par la version des CGV acceptée par le Client au moment de son paiement.
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
        <p className="mt-1">Version 3.0 — En vigueur à compter du 29 octobre 2026</p>
      </div>
    </main>
  </div>
);

export default CGV;
