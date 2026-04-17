import { MessageCircle } from "lucide-react";

const WhatsAppChat = () => {
  const phoneNumber = "33633628812";
  const message =
    "Bonjour, je vous contacte depuis votre site Au Cœur du Quotidien.";
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:hover:pr-6"
    >
      <MessageCircle className="h-6 w-6 flex-shrink-0" />
      <span className="hidden sm:inline-block font-body font-medium text-sm max-w-0 overflow-hidden group-hover:max-w-[160px] transition-all duration-300 whitespace-nowrap">
        Chat en direct
      </span>
    </a>
  );
};

export default WhatsAppChat;
