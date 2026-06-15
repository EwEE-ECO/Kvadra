import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/prices", label: "Цены" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" },
  { href: "/blog", label: "Блог" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-dark font-bold text-sm">
              К
            </div>
            <span className="font-semibold text-lg tracking-tight hidden sm:block">
              Квадра<span className="text-accent">Сервис</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="px-3 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+79181638377"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              <Phone size={16} />
              +7 (918) 163-83-77
            </a>
            <button
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              className="lg:hidden p-2 text-white/70 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-dark/98 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+79181638377"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-accent"
            >
              <Phone size={16} />
              +7 (918) 163-83-77
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
