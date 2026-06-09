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
          <span className="text-display text-2xl font-light tracking-tight">Lunéa</span>
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
          Dernière mise à jour : 8 juin 2026.
        </p>
      </div>

      {/* 1. Responsable */}
      <Block title="1. Responsable du traitement">
        <p>
          Le responsable du traitement des données personnelles collectées sur le site lunea.fr est :
        </p>
        <div className="bg-card rounded-xl border border-border/50 p-4 mt-2 space-y-1">
          <p className="font-medium text-foreground">RIVIERE Research & Consulting SAS</p>
          <p>Société par actions simplifiée au capital de 1 000 €</p>
          <p>RCS Paris 881 598 981 — Paris, France</p>
          <p>
            Contact :{" "}
            <a href="mailto:contact@lunea.fr" className="text-primary hover:underline">
              contact@lunea.fr
            </a>
          </p>
        </div>
      </Block>

      {/* 2. Données collectées */}
      <Block title="2. Données collectées">
        <p>
          Dans le cadre de la fourniture du programme Lunéa, nous collectons uniquement les
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
          <li>Prestataire de paiement (traitement sécurisé des transactions)</li>
          <li>Hébergeur de la plateforme (stockage et disponibilité du service)</li>
          <li>Outil d'envoi d'emails transactionnels (confirmation de commande, accès)</li>
        </ul>
        <p>
          Chacun de ces sous-traitants est lié par un accord de traitement de données conforme
          au RGPD et n'est autorisé à utiliser les données qu'aux fins expressément définies.
        </p>
        <p>
          En dehors de ces cas, les données ne sont communiquées à des tiers qu'en cas
          d'obligation légale (réquisition judiciaire, contrôle fiscal).
        </p>
      </Block>

      {/* 5. Hébergement */}
      <Block title="5. Localisation des données — Hébergement en Europe">
        <p>
          Les données personnelles des utilisateurs sont hébergées sur des serveurs situés au
          sein de l'<strong>Union européenne</strong>, conformément aux exigences du RGPD.
        </p>
        <p>
          Aucun transfert de données vers un pays tiers hors UE n'est effectué sans garanties
          appropriées (clauses contractuelles types de la Commission européenne ou décision
          d'adéquation).
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
          <a href="mailto:contact@lunea.fr" className="text-primary hover:underline">
            contact@lunea.fr
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
          Le site lunea.fr utilise uniquement des cookies <strong>strictement nécessaires</strong>{" "}
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
        <p>RIVIERE Research & Consulting SAS — RCS Paris 881 598 981 — Paris, France</p>
        <p className="mt-1">Politique de confidentialité v1.0 — Dernière mise à jour : 8 juin 2026</p>
      </div>
    </main>
  </div>
);

export default PolitiqueConfidentialite;
