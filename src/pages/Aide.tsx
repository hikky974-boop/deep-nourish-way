import { Link } from "react-router-dom";
import { Moon, ArrowLeft } from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-display text-lg md:text-xl font-semibold mb-4 text-heading">
      {title}
    </h2>
    <div className="space-y-3 text-body text-sm text-foreground/80 leading-relaxed">
      {children}
    </div>
  </div>
);

const Aide = () => (
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
        <h1 className="text-display text-3xl md:text-4xl font-light mb-3">Aide et contact</h1>
        <p className="text-body text-base text-foreground/80 leading-relaxed">
          Besoin d'aide avec votre compte ou votre programme ? Notre équipe est là pour vous accompagner.
        </p>
      </div>

      <Section title="Connexion et création de compte">
        <p>
          Si vous ne parvenez pas à vous connecter, vérifiez que vous utilisez la bonne adresse e-mail
          ou le même compte Google que celui utilisé lors de la création de votre compte. Un compte créé
          avec Google ne peut être ouvert qu'en passant par Google.
        </p>
        <p>
          En cas d'oubli de mot de passe, utilisez la fonction « Mot de passe oublié » depuis la page
          de connexion pour recevoir un lien de réinitialisation à votre adresse e-mail.
        </p>
        <p>
          Si un message d'erreur apparaît de manière persistante, contactez-nous en précisant
          l'adresse e-mail associée à votre compte et le message affiché. Pour votre sécurité,
          ne communiquez jamais votre mot de passe, ni à notre équipe, ni à quiconque.
        </p>
      </Section>

      <Section title="Paiement et accès au programme">
        <p>
          En cas de difficulté lors d'un paiement, d'un cadeau ou si votre accès au programme n'a pas
          été activé après achat, écrivez-nous en indiquant l'adresse e-mail utilisée lors de la
          transaction ainsi que la date approximative de celle-ci.
        </p>
        <p>
          Ces informations nous permettent de retrouver votre commande et de rétablir votre accès
          rapidement. Pour votre sécurité, n'envoyez jamais vos coordonnées bancaires par e-mail :
          nous ne vous les demanderons jamais.
        </p>
      </Section>

      <Section title="Suppression du compte ou des données">
        <p>
          Pour demander la suppression de votre compte ou de vos données personnelles, envoyez un
          e-mail depuis l'adresse associée à votre compte à{" "}
          <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">contact@lunae-app.fr</a>{" "}
          avec l'objet « Suppression de mon compte Lunaé ».
        </p>
        <p>
          Une vérification d'identité pourra être demandée avant traitement de la demande. Les
          données soumises à une obligation légale de conservation (comptabilité, facturation, etc.)
          pourront être conservées pendant la durée requise par la réglementation en vigueur.
        </p>
      </Section>

      <Section title="Nous contacter">
        <p>
          Pour toute autre question, écrivez-nous à{" "}
          <a href="mailto:contact@lunae-app.fr" className="text-primary hover:underline">contact@lunae-app.fr</a>.
        </p>
        <p>Nous répondons généralement sous 24 à 48 heures ouvrées.</p>
      </Section>

      <div className="mt-14 pt-8 border-t border-border/40">
        <p className="text-body text-xs tracking-[0.18em] uppercase text-foreground/70 mb-4">
          Pages associées
        </p>
        <ul className="space-y-2 text-body text-sm">
          <li><Link to="/politique-confidentialite" className="text-primary hover:underline">Politique de confidentialité</Link></li>
          <li><Link to="/cgv" className="text-primary hover:underline">Conditions générales de vente</Link></li>
          <li><Link to="/cgu" className="text-primary hover:underline">Conditions générales d'utilisation</Link></li>
        </ul>
      </div>
    </main>
  </div>
);

export default Aide;
