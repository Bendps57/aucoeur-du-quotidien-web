import { Heart } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-20 px-4 bg-warm-cream">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
          À Propos
        </h2>
        <div className="flex justify-center mb-10">
          <Heart className="h-6 w-6 text-heart" fill="hsl(0, 65%, 52%)" />
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border shadow-sm">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">
            Isabelle Wemmert
          </h3>
          <p className="font-serif italic text-gold text-center mb-6 text-lg">
            Responsable — Au Cœur du Quotidien
          </p>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            <p>
              Passionnée par l'accompagnement et l'aide à la personne, Isabelle a créé
              <strong className="text-foreground"> Au Cœur du Quotidien</strong> pour offrir un
              service humain, fiable et bienveillant à ceux qui en ont besoin.
            </p>
            <p>
              Que ce soit pour vous accompagner dans vos démarches administratives, vous aider
              à faire vos courses ou simplement organiser votre quotidien, Isabelle est à votre
              écoute pour vous apporter une aide sur-mesure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
