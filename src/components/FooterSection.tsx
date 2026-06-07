import { Moon } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => (
  <footer className="px-6 pt-16 pb-8 bg-background border-t border-border/40">
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
      <div className="md:col-span-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-display text-2xl font-light">Lunéa</span>
          <Moon className="w-4 h-4 text-primary" strokeWidth={1.4} />
        </div>
        <p className="text-body text-xs text-muted-foreground leading-relaxed">
          Programme en ligne — Perte de poids.
          <br />
          Sans régime. Sans frustration.
          <br />
          En transformation.
        </p>
      </div>

      <div>
        <p className="text-body text-xs tracking-[0.18em] uppercase text-foreground/70 mb-4">
          Navigation
        </p>
        <ul className="space-y-2 text-body text-sm text-muted-foreground">
          <li><a href="#programme" className="hover:text-primary transition-colors">Le programme</a></li>
          <li><a href="#experience" className="hover:text-primary transition-colors">Contenu</a></li>
          <li><a href="#temoignages" className="hover:text-primary transition-colors">Témoignages</a></li>
          <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
        </ul>
      </div>

      <div>
        <p className="text-body text-xs tracking-[0.18em] uppercase text-foreground/70 mb-4">
          Légal
        </p>
        <ul className="space-y-2 text-body text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-primary transition-colors">Mentions légales</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
          <li><Link to="/cgv" className="hover:text-primary transition-colors">CGV</Link></li>
        </ul>
      </div>

      <div>
        <p className="text-body text-xs tracking-[0.18em] uppercase text-foreground/70 mb-4">
          Contact
        </p>
        <p className="text-body text-sm text-muted-foreground leading-relaxed">
          Une question ?
          <br />
          Nous sommes là pour toi.
          <br />
          <a href="mailto:contact@lunea.fr" className="text-primary hover:underline">Contactez-nous</a>
        </p>
      </div>
    </div>

    <div className="max-w-6xl mx-auto pt-6 border-t border-border/40 text-center">
      <p className="text-body text-xs text-muted-foreground/70 tracking-wide">
        © {new Date().getFullYear()} — Lunéa. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default FooterSection;
