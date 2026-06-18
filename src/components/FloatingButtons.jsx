import { FaWhatsapp } from "react-icons/fa";
import MaxIcon from "./MaxIcon";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col gap-2 sm:gap-3">
      <a
        href="https://app.max.ru/chat?phone=79951990922"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#007AFF] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform shadow-blue-500/30"
        aria-label="Написать в MAX"
      >
        <MaxIcon size={22} />
      </a>
      <a
        href="https://wa.me/79951990922"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform shadow-green-500/30"
        aria-label="Написать в WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}
