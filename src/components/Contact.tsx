import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
          Contact & Devis
        </h2>
        <p className="text-center text-muted-foreground font-body max-w-xl mx-auto mb-14">
          N'hésitez pas à nous contacter pour toute demande de renseignement ou de devis gratuit.
        </p>

        <div className="space-y-6">
          <div className="bg-card rounded-2xl p-8 border space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Téléphone</p>
                <a href="tel:0743278794" className="font-semibold font-body text-foreground hover:text-gold transition-colors">
                  07 43 27 87 94
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Email</p>
                <a href="mailto:isabellewemmert@gmail.com" className="font-semibold font-body text-foreground hover:text-gold transition-colors">
                  isabellewemmert@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-6 border text-center">
            <p className="font-serif text-lg font-semibold text-foreground mb-1">Devis sur demande</p>
            <p className="font-body text-sm text-muted-foreground">
              Contactez-nous pour un devis personnalisé et gratuit, adapté à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
