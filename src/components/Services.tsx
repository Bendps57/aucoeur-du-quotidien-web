import { FileText, ShoppingCart, Car, Home } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Assistance Administrative",
    description:
      "Gestion de vos courriers, démarches administratives, classement de documents et aide aux formalités du quotidien.",
  },
  {
    icon: ShoppingCart,
    title: "Aide aux Courses",
    description:
      "Accompagnement ou réalisation de vos courses alimentaires et achats courants, selon vos besoins et préférences.",
  },
  {
    icon: Car,
    title: "Accompagnement Déplacements",
    description:
      "Transport et accompagnement pour vos rendez-vous médicaux, visites ou sorties diverses en toute sérénité.",
  },
  {
    icon: Home,
    title: "Organisation du Quotidien",
    description:
      "Aide à l'organisation de votre intérieur, planification des tâches et coordination de votre vie quotidienne.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
          Nos Services
        </h2>
        <p className="text-center text-muted-foreground font-body max-w-xl mx-auto mb-14">
          Des prestations personnalisées pour vous simplifier la vie au quotidien.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-7 border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-7 w-7 text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
