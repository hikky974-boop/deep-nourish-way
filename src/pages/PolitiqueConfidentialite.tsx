import { Link } from "react-router-dom";
import { Moon, ArrowLeft } from "lucide-react";

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-display text-lg md:text-xl font-semibold mb-3 text-heading">{title}</h2>
    <div className="space-y-2 text-body text-sm text-foreground/80 leading-relaxed">{children}</div>
  </div>
);

const PolitiqueConfidentialite = () => (
  <div className="min-h-screen bg-background">
    {/* Header */}
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b border-border/40"
      style={{ backgroundColor: "hsl(var(--background) / 0.92)" }}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-display text-2xl font-light tracking-tight">Lunaé</span>
          <Moon className="w-4 h-4 text-primary" strokeWidth={1.4} />
        </Link>
        <Link
          to="/"
          className="flex items-center gap-1.5 text-body text-sm text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>
      </div>
    </header>

    {/* Content */}
    <main className="max-w-4xl mx-auto px-6 py-14 md:py-20">
      <div className="mb-12">
        <h1 className="text-display text-3xl md:text-4xl font-light mb-3">
          Politique de confidentialité
        </h1>
        <p className="text-body text-sm text-muted-foreground">
          Conformément au Règlement Général sur la Protection des Données (RGPD, règlement UE
          2016/679) et à la loi Informatique et Libertés n° 78-17 du 6 janvier 1978 modifiée.
          Version 1.2 — Dernière mise à jour : 12 juillet 2026.
        </p>
      </div>

      {/* 1. Responsable */}
      <Block title="1. Responsable du traitement">
        <p>
          Le responsable du traitement des données personnelles collectées sur le site lunae-app.fr est :
        </p>
        <div className="bg-card rounded-xl border border-border/50 p-4 mt-2 space-y-1">
          <p className="font-medium text-foreground">RIVIERE Research & Consulting SAS</p>
          <p>Société par actions simplifiée à associé unique, au capital de 1 050,00 €</p>
          <p>RCS Paris 881 598 981 — 6 rue d'Armaillé, 75017 Paris</p>
          <p>
            Contact :{" "}
            <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">
              contact@lunae-app.fr
            </a>
          </p>
        </div>
      </Block>

      {/* 2. Données collectées */}
      <Block title="2. Données collectées">
        <p>
          Dans le cadre de la fourniture du programme Lunaé, nous collectons uniquement les
          données strictement nécessaires à l'exécution du service :
        </p>
        <div className="space-y-4 mt-2">
          <div>
            <p className="font-medium text-foreground mb-1">Données liées à la commande et au paiement</p>
            <ul className="list-disc list-inside pl-2 space-y-1 text-foreground/75">
              <li>Adresse email (création du compte et communications)</li>
              <li>Données de transaction : montant, date, référence de paiement</li>
              <li>Adresse IP au moment de la commande (obligation légale de lutte contre la fraude)</li>
            </ul>
            <p className="mt-1 text-foreground/60 text-xs italic">
              Les données bancaires (numéro de carte, cryptogramme) sont traitées exclusivement par
              notre prestataire de paiement certifié PCI-DSS. RIVIERE Research & Consulting SAS n'y
              a à aucun moment accès.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">Données d'utilisation du programme</p>
            <ul className="list-disc list-inside pl-2 space-y-1 text-foreground/75">
              <li>Progression dans le parcours (modules complétés, jours de connexion)</li>
              <li>Interactions avec les outils du programme (exercices réalisés, audios écoutés)</li>
              <li>Données techniques de connexion (navigateur, type d'appareil, logs de session)</li>
            </ul>
          </div>
        </div>
        <p className="mt-3">
          Nous ne collectons <strong>aucune donnée de santé au sens strict</strong>, aucune donnée
          de géolocalisation précise, et aucune donnée issue de réseaux sociaux tiers sans
          consentement exprès.
        </p>
      </Block>

      {/* 3. Finalités et base légale */}
      <Block title="3. Finalités du traitement et base légale">
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse mt-1">
            <thead>
              <tr className="bg-secondary/40">
                <th className="text-left p-3 border border-border/40 font-medium text-foreground">Finalité</th>
                <th className="text-left p-3 border border-border/40 font-medium text-foreground">Base légale (RGPD art. 6)</th>
              </tr>
            </thead>
            <tbody className="text-foreground/75">
              <tr>
                <td className="p-3 border border-border/40">Gestion de la commande et accès au programme</td>
                <td className="p-3 border border-border/40">Exécution du contrat (art. 6.1.b)</td>
              </tr>
              <tr className="bg-secondary/20">
                <td className="p-3 border border-border/40">Envoi de communications liées au programme</td>
                <td className="p-3 border border-border/40">Exécution du contrat (art. 6.1.b)</td>
              </tr>
              <tr>
                <td className="p-3 border border-border/40">Suivi de la progression et personnalisation</td>
                <td className="p-3 border border-border/40">Exécution du contrat (art. 6.1.b)</td>
              </tr>
              <tr className="bg-secondary/20">
                <td className="p-3 border border-border/40">Obligations comptables et fiscales</td>
                <td className="p-3 border border-border/40">Obligation légale (art. 6.1.c)</td>
              </tr>
              <tr>
                <td className="p-3 border border-border/40">Prévention de la fraude</td>
                <td className="p-3 border border-border/40">Intérêt légitime (art. 6.1.f)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Block>

      {/* 4. Destinataires */}
      <Block title="4. Destinataires des données — Absence de revente">
        <p>
          Les données personnelles des utilisateurs ne sont <strong>jamais vendues, louées ni
          cédées à des tiers</strong> à des fins commerciales ou publicitaires.
        </p>
        <p>
          Elles peuvent être transmises, dans la stricte limite de leurs attributions, aux
          sous-traitants techniques suivants :
        </p>
        <ul className="list-disc list-inside pl-2 space-y-1 text-foreground/75 mt-1">
          <li>Stripe (prestataire de paiement)</li>
          <li>Hébergeur de la plateforme (stockage et disponibilité du service)</li>
          <li>Outil d'envoi d'emails transactionnels (confirmation de commande, accès)</li>
        </ul>
        <p>
          <strong>Paiements — Stripe :</strong> Les paiements sont traités sur une page sécurisée fournie par Stripe. Les coordonnées bancaires sont saisies directement auprès de Stripe. Lunaé ne collecte ni ne conserve le numéro complet de la carte, sa date d'expiration ou son cryptogramme. Lunaé reçoit seulement les informations nécessaires au suivi de la transaction, à l'activation de l'accès et au respect de ses obligations comptables.
        </p>
        <p>
          Chacun de ces sous-traitants est lié par un accord de traitement de données conforme
          au RGPD et n'est autorisé à utiliser les données qu'aux fins expressément définies.
        </p>
        <p>
          En dehors de ces cas, les données ne sont communiquées à des tiers qu'en cas
          d'obligation légale (réquisition judiciaire, contrôle fiscal).
        </p>
      </Block>

      {/* Connexion avec Google */}
      <Block title="Connexion avec Google">
        <p>
          Lorsque vous choisissez « Continuer avec Google », l'authentification est gérée par Google et par Base44, la plateforme technique utilisée par Lunaé. Lunaé ne reçoit jamais votre mot de passe Google.
        </p>
        <p>
          L'intégration demande uniquement les autorisations Google openid, email et profile. Elles permettent à Base44 de recevoir l'identifiant unique de votre compte Google, votre adresse e-mail et son statut de vérification, ainsi que les informations de profil de base rendues disponibles par Google, notamment votre nom et, le cas échéant, votre photo de profil et votre langue. Aucune autre donnée Google n'est demandée.
        </p>
        <p>
          Ces données servent exclusivement à créer ou retrouver votre compte Lunaé, vous identifier, sécuriser votre connexion et personnaliser les informations de base de votre espace. Les données nécessaires au compte sont enregistrées dans l'environnement Base44 et conservées selon la même durée que les autres données de compte, soit trois ans après votre dernière activité, sauf demande de suppression antérieure ou obligation légale contraire. Elles ne sont ni vendues ni utilisées à des fins publicitaires. Elles sont partagées uniquement avec Google et Base44 dans la mesure nécessaire au fonctionnement et à la sécurisation de cette connexion.
        </p>
        <p>
          Les autorisations demandées ne donnent aucun accès à Gmail, Google Drive, Google Contacts ou Google Agenda. Lunaé ne peut donc ni lire vos e-mails, ni consulter ou modifier vos fichiers, vos contacts ou votre calendrier.
        </p>
        <p>
          Vous pouvez retirer l'autorisation depuis les paramètres de sécurité de votre compte Google. Ce retrait empêche une future connexion avec Google, mais ne supprime pas automatiquement votre compte Lunaé. Pour demander la suppression de votre compte Lunaé et des données associées, écrivez à <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">contact@lunae-app.fr</a>. Les données qui ne doivent pas être conservées pour une obligation légale seront supprimées ou anonymisées.
        </p>
      </Block>

      {/* 5. Hébergement */}
      <Block title="5. Localisation des données et transferts hors EEE">
        <p>
          Le site lunae-app.fr est hébergé par <strong>Lovable Labs AB</strong> (Stockholm, Suède),
          au sein de l'Espace Économique Européen (EEE).
        </p>
        <p>
          L'application Lunaé (espace membre, données de progression, coach IA) est hébergée par{" "}
          <strong>Base44</strong>, service exploité par <strong>Wix.com Ltd.</strong>, dont le
          siège social est situé en <strong>Israël</strong>. À ce titre, certaines données
          personnelles des utilisateurs — y compris les données saisies dans le programme et
          les échanges avec le coach IA — sont susceptibles d'être transférées et hébergées en
          Israël, hors de l'EEE.
        </p>
        <p>
          Ce transfert est encadré par la{" "}
          <strong>décision d'adéquation de la Commission européenne concernant Israël</strong>{" "}
          (décision 2011/61/UE du 31 janvier 2011), qui reconnaît qu'Israël assure un niveau de
          protection des données personnelles adéquat au regard du RGPD. Aucune garantie
          supplémentaire n'est requise pour ce transfert.
        </p>
        <p>
          Pour tout autre sous-traitant situé hors EEE et non couvert par une décision
          d'adéquation — notamment le fournisseur du coach IA si celui-ci est établi aux
          États-Unis —, les transferts sont encadrés par les{" "}
          <strong>clauses contractuelles types</strong> adoptées par la Commission européenne
          (décision d'exécution 2021/914/UE), conformément à l'article 46 du RGPD.
        </p>
        <p>
          <strong>Intelligence artificielle :</strong> Le coach IA de Lunaé utilise un prestataire spécialisé en intelligence artificielle. Seuls le texte saisi et les éléments de contexte strictement nécessaires à la génération de la réponse lui sont transmis. Cette transmission sert uniquement à produire la réponse demandée. Les autres données du compte ne sont pas transmises lorsqu'elles ne sont pas nécessaires à cette fonctionnalité.
        </p>
      </Block>

      {/* 6. Durée de conservation */}
      <Block title="6. Durée de conservation">
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse mt-1">
            <thead>
              <tr className="bg-secondary/40">
                <th className="text-left p-3 border border-border/40 font-medium text-foreground">Catégorie de données</th>
                <th className="text-left p-3 border border-border/40 font-medium text-foreground">Durée de conservation</th>
              </tr>
            </thead>
            <tbody className="text-foreground/75">
              <tr>
                <td className="p-3 border border-border/40">Données de compte et d'accès au programme</td>
                <td className="p-3 border border-border/40">3 ans à compter du dernier accès actif</td>
              </tr>
              <tr className="bg-secondary/20">
                <td className="p-3 border border-border/40">Données de transaction et pièces comptables</td>
                <td className="p-3 border border-border/40">10 ans (obligation légale comptable)</td>
              </tr>
              <tr>
                <td className="p-3 border border-border/40">Données de progression et d'utilisation</td>
                <td className="p-3 border border-border/40">3 ans à compter du dernier accès actif</td>
              </tr>
              <tr className="bg-secondary/20">
                <td className="p-3 border border-border/40">Logs de connexion techniques</td>
                <td className="p-3 border border-border/40">12 mois (obligation légale LCEN)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          À l'expiration de ces délais, les données sont supprimées de manière sécurisée ou
          anonymisées de façon irréversible.
        </p>
      </Block>

      {/* 7. Droits */}
      <Block title="7. Vos droits">
        <p>
          Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants sur vos
          données personnelles :
        </p>
        <ul className="space-y-2 mt-2">
          {[
            ["Droit d'accès (art. 15)", "Obtenir la confirmation que vos données sont traitées et en recevoir une copie."],
            ["Droit de rectification (art. 16)", "Faire corriger des données inexactes ou incomplètes."],
            ["Droit à l'effacement (art. 17)", "Demander la suppression de vos données, sous réserve des obligations légales de conservation."],
            ["Droit à la limitation (art. 18)", "Suspendre temporairement le traitement de vos données."],
            ["Droit à la portabilité (art. 20)", "Recevoir vos données dans un format structuré et lisible par machine."],
            ["Droit d'opposition (art. 21)", "Vous opposer à un traitement fondé sur l'intérêt légitime."],
          ].map(([right, desc]) => (
            <li key={right} className="flex items-start gap-2">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span>
                <strong className="text-foreground">{right}</strong> — {desc}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Pour exercer l'un de ces droits, adressez votre demande par email à{" "}
          <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">
            contact@lunae-app.fr
          </a>
          , en précisant votre identité. Nous nous engageons à répondre dans un délai d'un mois.
        </p>
        <p>
          En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la{" "}
          <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) —{" "}
          <span className="text-foreground/60">www.cnil.fr</span>.
        </p>
      </Block>

      {/* 8. Cookies */}
      <Block title="8. Cookies et traceurs">
        <p>
          Le site lunae-app.fr utilise uniquement des cookies <strong>strictement nécessaires</strong>{" "}
          au fonctionnement technique du service (gestion de session, préférences d'affichage).
          Ces cookies ne nécessitent pas de consentement préalable.
        </p>
        <p>
          Aucun cookie publicitaire, de profilage ou de traçage tiers n'est déposé sans
          votre consentement explicite.
        </p>
        <p>
          Vous pouvez configurer ou désactiver les cookies à tout moment via les paramètres de
          votre navigateur. La désactivation des cookies techniques peut affecter le
          fonctionnement du service.
        </p>
      </Block>

      {/* Microsoft Clarity */}
      <Block title="Microsoft Clarity et mesure d’audience">
        <p>
          Sous réserve de votre consentement, Lunaé utilise Microsoft Clarity, un service de mesure d’audience fourni par Microsoft.
        </p>
        <p>
          Clarity nous permet de comprendre de manière agrégée comment les visiteurs interagissent avec la page publique Lunaé, notamment les zones cliquées, la profondeur de défilement et le temps passé sur les différentes parties de la page.
        </p>
        <p>
          Microsoft Clarity n’est chargé qu’après votre acceptation explicite de la catégorie “Mesure d’audience”. En cas de refus ou d’absence de choix, aucune collecte Clarity n’est déclenchée.
        </p>
        <p>
          Les contenus identifiés comme sensibles sont masqués avant leur transmission. Lunaé ne transmet volontairement à Clarity aucun nom, adresse e-mail, message personnel, réponse d’onboarding, information de paiement ou donnée provenant du coach.
        </p>
        <p>
          Clarity peut utiliser les cookies _clck et _clsk afin de mesurer les visites et les sessions sur la page publique, uniquement lorsque la mesure d’audience a été acceptée.
        </p>
        <p>
          Vous pouvez retirer ou modifier votre consentement à tout moment depuis le lien “Gérer mes cookies” présent dans le pied de page du site.
        </p>
      </Block>

      {/* Google Analytics, Google Ads et Google Tag Manager */}
      <Block title="Google Analytics, Google Ads et Google Tag Manager">
        <p>
          Le site utilise Google Tag Manager, un gestionnaire de balises qui permet de charger,
          uniquement selon votre choix, les outils de mesure et de publicité décrits ci-dessous.
          Google Tag Manager ne dépose par lui-même aucun cookie de mesure ou de publicité.
        </p>
        <p>
          <strong>Finalités.</strong> Google Analytics 4 mesure de manière agrégée la fréquentation
          et l’usage de la page publique (pages vues, provenance, parcours). Google Ads permet de
          mesurer l’efficacité de nos campagnes publicitaires et d’attribuer une visite à une
          campagne.
        </p>
        <p>
          <strong>Aucune collecte avant consentement.</strong> Par défaut, les signaux de
          consentement Google (mesure d’audience, stockage publicitaire, données utilisateur
          publicitaires et personnalisation publicitaire) sont positionnés sur « refusé ». Aucun
          cookie de mesure ou de publicité n’est déposé et aucune donnée n’est envoyée à Google
          tant que vous n’avez pas accepté explicitement.
        </p>
        <p>
          <strong>Données concernées.</strong> Nous ne transmettons volontairement aucune donnée
          personnelle (nom, adresse e-mail, message, réponse d’onboarding, information de paiement)
          à Google. Des identifiants de campagne (par exemple gclid ou paramètres utm) peuvent être
          repris dans l’URL lors du passage vers l’espace d’achat, afin de rattacher une visite à
          une campagne.
        </p>
        <p>
          <strong>Durées.</strong> Les cookies de mesure Google Analytics sont conservés au maximum
          13 mois ; les identifiants de campagne conservés en propre le sont au maximum 90 jours,
          et uniquement si vous avez accepté.
        </p>
        <p>
          <strong>Retrait du consentement.</strong> Vous pouvez modifier ou retirer votre
          consentement à tout moment via le lien « Gérer mes cookies » présent dans le pied de page.
          Le retrait désactive immédiatement ces mesures pour vos prochaines interactions.
        </p>
      </Block>


      {/* 9. Modifications */}
      <Block title="9. Modifications de la présente politique">
        <p>
          RIVIERE Research & Consulting SAS se réserve le droit de mettre à jour la présente
          politique de confidentialité à tout moment, notamment pour se conformer à de nouvelles
          obligations légales ou réglementaires.
        </p>
        <p>
          La version en vigueur est celle publiée sur cette page, identifiable par sa date de
          mise à jour. En cas de modification substantielle, les utilisateurs enregistrés en
          seront informés par email.
        </p>
      </Block>

      <div className="mt-12 pt-8 border-t border-border/40 text-body text-xs text-muted-foreground/70">
        <p>RIVIERE Research & Consulting SAS — RCS Paris 881 598 981 — 6 rue d'Armaillé, 75017 Paris</p>
        <p className="mt-1">Version 1.2 — Dernière mise à jour : 12 juillet 2026</p>
      </div>
    </main>
  </div>
);

export default PolitiqueConfidentialite;
