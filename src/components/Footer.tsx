import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t py-8 px-4">
    <div className="container mx-auto text-center">
      <p className="font-serif text-lg font-semibold text-foreground mb-2">
        Au Cœur du Quotidien
      </p>
      <p className="font-body text-sm text-muted-foreground flex items-center justify-center gap-1">
        Fait avec <Heart className="h-4 w-4 text-heart inline" fill="hsl(0, 65%, 52%)" /> par Isabelle Wemmert
      </p>
      <p className="font-body text-xs text-muted-foreground mt-2">
        © {new Date().getFullYear()} Au Cœur du Quotidien — Tous droits réservés
      </p>
    </div>
  </footer>
);

export default Footer;
