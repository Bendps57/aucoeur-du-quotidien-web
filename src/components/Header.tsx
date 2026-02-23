import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-original.png";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#accueil" className="flex items-center gap-3">
          <img src={logo} alt="Au Cœur du Quotidien" className="h-12 w-auto mix-blend-multiply" />
          <span className="font-serif text-lg font-semibold text-foreground hidden sm:inline">
            Au Cœur du Quotidien
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0743278794"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            07 43 27 87 94
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-card border-t px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-body text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0743278794"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            <Phone className="h-4 w-4" />
            07 43 27 87 94
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
