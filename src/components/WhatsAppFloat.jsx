import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/79951990922"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform animate-pulse"
      aria-label="Написать в WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
