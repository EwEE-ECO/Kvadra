import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="tel:+79181638377"
        className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-dark shadow-lg hover:scale-110 transition-transform shadow-accent/30"
        aria-label="Позвонить"
      >
        <Phone size={22} />
      </a>
      <a
        href="https://wa.me/79181638377"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform shadow-green-500/30"
        aria-label="Написать в WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}
