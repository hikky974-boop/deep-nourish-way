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

const CGU = () => (
  <div className="min-h-screen bg-background">
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

    <main className="max-w-4xl mx-auto px-6 py-14 md:py-20">
      <div className="mb-12">
        <h1 className="text-display text-3xl md:text-4xl font-light mb-3">Conditions générales d'utilisation</h1>
        <p className="text-body text-sm text-muted-foreground">Version 1.0 — Dernière mise à jour : 12 juillet 2026</p>
      </div>

      <Section num="1" title="Objet et champ d'application">
        <p>
          Les présentes conditions générales d'utilisation (ci-après « CGU ») encadrent l'utilisation
          du service Lunaé, programme en ligne d'accompagnement au bien-être et à la relation à
          l'alimentation, accessible via le site lunae-app.fr et l'application associée (ci-après
          « le Service »).
        </p>
        <p>
          Les CGU s'appliquent à toute personne accédant au Service ou disposant d'un compte
          utilisateur, indépendamment de tout achat, lequel est régi par les{" "}
          <Link to="/cgv" className="text-primary hover:underline">Conditions générales de vente</Link>.
        </p>
        <p>
          L'utilisation du Service implique l'acceptation pleine et entière des présentes CGU.
        </p>
      </Section>

      <Section num="2" title="Accès au service et compte utilisateur">
        <p>
          L'accès au Service nécessite la création d'un compte utilisateur, par e-mail et mot de
          passe ou via un compte Google. L'utilisateur doit être majeur et disposer de la capacité
          juridique pour utiliser le Service.
        </p>
        <p>
          L'accès à certaines fonctionnalités peut être conditionné à la souscription d'une offre
          payante décrite dans les CGV.
        </p>
      </Section>

      <Section num="3" title="Compte personnel, sécurité et confidentialité des identifiants">
        <p>
          Le compte est strictement personnel. L'utilisateur est seul responsable de la
          confidentialité de ses identifiants (adresse e-mail, mot de passe, session Google) et de
          toute activité effectuée depuis son compte.
        </p>
        <p>
          Il s'engage à choisir un mot de passe robuste, à ne pas le communiquer à des tiers et à
          se déconnecter après chaque session sur un appareil partagé.
        </p>
      </Section>

      <Section num="4" title="Informations exactes et signalement d'un accès suspect">
        <p>
          L'utilisateur s'engage à fournir des informations exactes lors de la création et de
          l'utilisation de son compte, et à les tenir à jour.
        </p>
        <p>
          Tout accès non autorisé, perte de contrôle du compte ou activité suspecte doit être
          signalé sans délai à{" "}
          <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">contact@lunae-app.fr</a>{" "}
          afin que les mesures de sécurité nécessaires puissent être prises.
        </p>
      </Section>

      <Section num="5" title="Comportements interdits">
        <p>Il est strictement interdit, dans le cadre de l'utilisation du Service :</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>de partager ses identifiants ou l'accès à son compte avec un tiers ;</li>
          <li>de tenter d'accéder à un compte, à des données ou à des ressources qui ne sont pas destinés à l'utilisateur ;</li>
          <li>de contourner, désactiver ou compromettre les mécanismes de sécurité, d'authentification ou de contrôle d'accès du Service ;</li>
          <li>de procéder à une extraction massive, automatisée ou systématique des contenus (scraping, crawling non autorisé, etc.) ;</li>
          <li>de copier, reproduire, revendre, diffuser, republier ou exploiter tout ou partie des contenus sans autorisation écrite préalable ;</li>
          <li>d'introduire ou de diffuser des logiciels malveillants, virus, chevaux de Troie ou tout code susceptible de nuire au Service ou à ses utilisateurs ;</li>
          <li>d'utiliser le Service à des fins illicites, frauduleuses ou contraires aux bonnes mœurs.</li>
        </ul>
      </Section>

      <Section num="6" title="Propriété intellectuelle">
        <p>
          L'ensemble des contenus du Service (textes, séances audio, vidéos, illustrations, marques,
          logos, interfaces, code, éléments graphiques et sonores) est protégé par le droit de la
          propriété intellectuelle et demeure la propriété exclusive de leurs titulaires.
        </p>
        <p>
          L'utilisateur bénéficie d'un droit d'utilisation strictement personnel, limité, non
          exclusif et non transférable, à des fins non commerciales, pendant la durée de son accès
          au Service. Toute autre utilisation est interdite sans autorisation écrite préalable.
        </p>
      </Section>

      <Section num="7" title="Disponibilité, maintenance et interruptions">
        <p>
          Le Service est proposé en accès continu, sous réserve des opérations de maintenance, des
          mises à jour, des incidents techniques et des cas de force majeure. Des interruptions,
          temporaires ou prolongées, peuvent survenir sans qu'aucune garantie de disponibilité
          permanente ne soit consentie.
        </p>
        <p>
          Lunaé s'efforce de rétablir l'accès dans les meilleurs délais et, lorsque cela est
          possible, d'informer les utilisateurs des interventions planifiées.
        </p>
      </Section>

      <Section num="8" title="Limites de responsabilité">
        <p>
          Lunaé est un programme de bien-être et de développement personnel. Il ne constitue pas un
          dispositif médical, un acte de diagnostic, une psychothérapie, un traitement, ni un
          service d'urgence. En cas de détresse psychologique ou d'urgence, l'utilisateur doit
          contacter les services médicaux compétents.
        </p>
        <p>
          L'utilisateur reste seul responsable de ses décisions et de la manière dont il applique
          les contenus proposés à sa situation personnelle. Il lui appartient, en cas de doute sur
          son état de santé, de consulter un professionnel de santé qualifié.
        </p>
        <p>
          Les présentes limitations s'appliquent dans la limite autorisée par la loi. Les garanties
          légales impératives et les droits d'ordre public reconnus aux consommateurs demeurent
          intégralement préservés.
        </p>
      </Section>

      <Section num="9" title="Suspension ou suppression d'un compte">
        <p>
          Lunaé peut suspendre ou supprimer un compte, sans indemnité, notamment en cas de fraude,
          de menace pour la sécurité du Service ou d'autres utilisateurs, d'obligation légale ou
          judiciaire, ou de violation grave ou répétée des présentes CGU.
        </p>
        <p>
          Lorsque cela est possible et n'est pas contraire à une obligation légale ou de sécurité,
          l'utilisateur est informé de la mesure prise et de ses motifs.
        </p>
      </Section>

      <Section num="10" title="Données personnelles">
        <p>
          Les traitements de données personnelles réalisés dans le cadre du Service sont décrits
          dans la{" "}
          <Link to="/politique-confidentialite" className="text-primary hover:underline">Politique de confidentialité</Link>,
          à laquelle il est renvoyé.
        </p>
      </Section>

      <Section num="11" title="Achats">
        <p>
          Les conditions applicables aux achats, prix, modalités de paiement, droit de rétractation
          et accès au programme sont détaillées dans les{" "}
          <Link to="/cgv" className="text-primary hover:underline">Conditions générales de vente</Link>.
        </p>
      </Section>

      <Section num="12" title="Contact">
        <p>
          Pour toute question relative aux présentes CGU, l'utilisateur peut écrire à{" "}
          <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">contact@lunae-app.fr</a>.
        </p>
      </Section>

      <div className="mt-14 pt-6 border-t border-border/40">
        <p className="text-body text-sm text-muted-foreground">Version 1.0 — Dernière mise à jour : 12 juillet 2026</p>
      </div>
    </main>
  </div>
);

export default CGU;
