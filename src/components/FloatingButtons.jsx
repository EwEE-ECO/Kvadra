import { FaWhatsapp } from "react-icons/fa";

function MaxIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
      <text x="12" y="16" textAnchor="middle" fill="black" fontSize="11" fontWeight="800" fontFamily="system-ui">MAX</text>
    </svg>
  );
}

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col gap-2 sm:gap-3">
      <a
        href="https://max.ru/"
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
