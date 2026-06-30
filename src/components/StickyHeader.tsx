import { Button } from "@/components/ui/button";
import logoLunea from "@/assets/logo-lunea-new.png.asset.json";

const navItems = [
  { label: "Le programme", href: "#programme" },
  { label: "Contenu", href: "#experience" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
];

const StickyHeader = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCta = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/40"
      style={{ backgroundColor: "hsl(var(--background) / 0.92)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <img
            src={logoLunea.url}
            alt="Lunaé"
            className="h-8 md:h-9 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="text-body text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="hero" size="sm" onClick={() => { window.location.href = "https://equilibre-interieur-0795f791.base44.app/Paywall"; }} className="text-sm px-5 h-9">
          Me lancer
        </Button>
      </div>
    </header>
  );
};

export default StickyHeader;
