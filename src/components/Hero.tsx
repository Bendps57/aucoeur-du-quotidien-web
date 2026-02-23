import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <img
          src={logo}
          alt="Au Cœur du Quotidien"
          className="h-32 md:h-40 w-auto mx-auto mb-8 drop-shadow-lg"
        />
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
          Au Cœur du Quotidien
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Services d'aide à domicile et d'organisation du quotidien,
          avec bienveillance et professionnalisme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            Demander un devis
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border-2 border-foreground/20 text-foreground px-8 py-4 rounded-full font-body font-semibold text-base hover:bg-card/80 transition-colors"
          >
            Nos services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
