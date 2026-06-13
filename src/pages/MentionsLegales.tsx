import { Link } from "react-router-dom";
import { Moon, ArrowLeft } from "lucide-react";

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-display text-lg md:text-xl font-semibold mb-3 text-heading">{title}</h2>
    <div className="space-y-2 text-body text-sm text-foreground/80 leading-relaxed">{children}</div>
  </div>
);

const MentionsLegales = () => (
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
        <h1 className="text-display text-3xl md:text-4xl font-light mb-3">Mentions légales</h1>
        <p className="text-body text-sm text-muted-foreground">
          Conformément à l'article 6-III de la loi n° 2004-575 du 21 juin 2004 pour la confiance
          dans l'économie numérique (LCEN).
        </p>
      </div>

      {/* 1. Éditeur */}
      <Block title="1. Éditeur du site">
        <p>
          Le site lunea.fr est édité par la société{" "}
          <strong>RIVIERE Research & Consulting SAS</strong>, société par actions simplifiée au
          capital de <strong>1 050,00 €</strong> — société par actions simplifiée à associé unique.
        </p>
        <p>
          <strong>Immatriculation :</strong> RCS Paris 881 598 981
        </p>
        <p>
          <strong>Siège social :</strong> 6 rue d'Armaillé, 75017 Paris
        </p>
        <p>
          <strong>Contact :</strong>{" "}
          <a href="mailto:contact@lunea.fr" className="text-primary hover:underline">
            contact@lunea.fr
          </a>
        </p>
      </Block>

      {/* 2. Directeur de publication */}
      <Block title="2. Directeur de la publication">
        <p>
          Le directeur de la publication est <strong>Virginie Rivière</strong>, représentante
          légale de RIVIERE Research & Consulting SAS.
        </p>
        <p>
          <strong>Contact :</strong>{" "}
          <a href="mailto:contact@lunea.fr" className="text-primary hover:underline">
            contact@lunea.fr
          </a>
        </p>
      </Block>

      {/* 3. Hébergeur */}
      <Block title="3. Hébergement">
        <p className="font-medium text-foreground">Site lunea.fr (landing page)</p>
        <p>
          Hébergé par <strong>Lovable Labs AB</strong>
          <br />
          Regeringsgatan 25, 111 53 Stockholm, Suède
          <br />
          <strong>Contact DPO :</strong>{" "}
          <a href="mailto:dpo@lovable.dev" className="text-primary hover:underline">
            dpo@lovable.dev
          </a>
        </p>

        <p className="font-medium text-foreground mt-4">
          Application Lunéa (espace membre, données utilisateurs, coach IA)
        </p>
        <p>
          Hébergée par <strong>Base44</strong>
          <br />
          <strong>Site web :</strong>{" "}
          <a
            href="https://base44.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            base44.com
          </a>
          <br />
          <span className="text-foreground/50 text-xs italic">
            (Adresse physique à compléter — à confirmer directement auprès de Base44)
          </span>
        </p>
      </Block>

      {/* 4. Propriété intellectuelle */}
      <Block title="4. Propriété intellectuelle">
        <p>
          L'ensemble du contenu publié sur le site lunea.fr — textes, images, audios, vidéos,
          graphismes, logo, structure et programme — est la propriété exclusive de RIVIERE
          Research & Consulting SAS et est protégé par le droit d'auteur et le droit des marques
          (Code de la propriété intellectuelle).
        </p>
        <p>
          Toute reproduction, représentation, modification, diffusion ou exploitation, partielle
          ou totale, sans autorisation écrite préalable de RIVIERE Research & Consulting SAS est
          strictement interdite et constitue une contrefaçon sanctionnée par les articles L335-2
          et suivants du Code de la propriété intellectuelle.
        </p>
      </Block>

      {/* 5. Données personnelles */}
      <Block title="5. Données personnelles">
        <p>
          Le site lunea.fr est susceptible de collecter des données personnelles (adresse email,
          données de connexion) dans le cadre de la gestion des commandes et de l'accès au
          programme. Ces données sont traitées conformément au Règlement Général sur la Protection
          des Données (RGPD, règlement UE 2016/679) et à la loi Informatique et Libertés.
        </p>
        <p>
          Le responsable du traitement est RIVIERE Research & Consulting SAS. Les données ne sont
          jamais revendues ni cédées à des tiers à des fins commerciales.
        </p>
        <p>
          Conformément aux articles 15 à 22 du RGPD, vous disposez d'un droit d'accès, de
          rectification, de suppression, de limitation, de portabilité et d'opposition concernant
          vos données personnelles. Ces droits s'exercent par email à{" "}
          <a href="mailto:contact@lunea.fr" className="text-primary hover:underline">
            contact@lunea.fr
          </a>
          .
        </p>
        <p>
          En cas de réclamation, vous pouvez saisir la Commission Nationale de l'Informatique et
          des Libertés (CNIL) — <span className="text-foreground/60">www.cnil.fr</span>.
        </p>
      </Block>

      {/* 6. Cookies */}
      <Block title="6. Cookies">
        <p>
          Le site lunea.fr est susceptible d'utiliser des cookies techniques nécessaires à son
          fonctionnement. Aucun cookie publicitaire ou de traçage tiers n'est déposé sans
          consentement préalable.
        </p>
        <p>
          Vous pouvez paramétrer ou désactiver les cookies à tout moment via les réglages de
          votre navigateur. La désactivation des cookies techniques peut altérer le fonctionnement
          du site.
        </p>
      </Block>

      {/* 7. Liens hypertextes */}
      <Block title="7. Liens hypertextes">
        <p>
          Le site lunea.fr peut contenir des liens vers des sites tiers. RIVIERE Research &
          Consulting SAS n'exerce aucun contrôle sur ces sites et décline toute responsabilité
          quant à leur contenu ou leur politique de confidentialité.
        </p>
      </Block>

      {/* 8. Limitation de responsabilité */}
      <Block title="8. Limitation de responsabilité">
        <p>
          RIVIERE Research & Consulting SAS s'efforce d'assurer l'exactitude et la mise à jour
          des informations publiées sur le site, sans pouvoir toutefois garantir leur exhaustivité
          ou leur absence d'erreur.
        </p>
        <p>
          La société ne saurait être tenue responsable des dommages directs ou indirects résultant
          de l'utilisation du site, d'une interruption d'accès ou de la présence de logiciels
          malveillants sur le réseau.
        </p>
      </Block>

      {/* 9. Droit applicable */}
      <Block title="9. Droit applicable">
        <p>
          Les présentes mentions légales sont régies par le droit français. Tout litige relatif à
          l'utilisation du site lunea.fr relève de la compétence exclusive des juridictions de
          Paris, sauf disposition légale impérative contraire.
        </p>
      </Block>

      <div className="mt-12 pt-8 border-t border-border/40 text-body text-xs text-muted-foreground/70">
        <p>RIVIERE Research & Consulting SAS — RCS Paris 881 598 981</p>
        <p className="mt-1">Dernière mise à jour : 8 juin 2026</p>
      </div>
    </main>
  </div>
);

export default MentionsLegales;
