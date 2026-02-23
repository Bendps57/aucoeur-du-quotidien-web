import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Erreur", description: "Veuillez remplir tous les champs.", variant: "destructive" });
      return;
    }
    toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
          Contact & Devis
        </h2>
        <p className="text-center text-muted-foreground font-body max-w-xl mx-auto mb-14">
          N'hésitez pas à nous contacter pour toute demande de renseignement ou de devis gratuit.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-8">
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border space-y-5">
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Nom</label>
              <input
                type="text"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                rows={4}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Décrivez votre besoin..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Send className="h-4 w-4" />
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
