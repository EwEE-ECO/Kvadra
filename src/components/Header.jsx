import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function MaxIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
      <text x="12" y="16" textAnchor="middle" fill="black" fontSize="11" fontWeight="800" fontFamily="system-ui">MAX</text>
    </svg>
  );
}

const serviceSubmenu = [
  {
    label: "Техническое обслуживание",
    children: [
      { href: "/services/industrial", label: "Промышленные системы" },
      { href: "/services/semi-industrial", label: "Полупромышленные системы" },
      { href: "/services/repair", label: "Бытовые сплит-системы" },
    ],
  },
  { href: "/services/cleaning", label: "Чистка кондиционеров" },
  { href: "/services/maintenance", label: "Обслуживание сплит-систем" },
];

const links = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги", dropdown: serviceSubmenu },
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
            {links.map((l) =>
              l.dropdown ? (
                <div key={l.href} className="relative group">
                  <Link
                    to={l.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {l.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </Link>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-dark/98 backdrop-blur-xl border border-white/10 rounded-xl p-2 min-w-[220px] shadow-2xl">
                      {l.dropdown.map((item) =>
                        item.children ? (
                          <div key={item.label} className="px-3 py-2">
                            <div className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="block px-3 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  to={l.href}
                  className="px-3 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+79951990922"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              <MaxIcon size={16} />
              +7 (995) 199-09-22
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
            {links.map((l) =>
              l.dropdown ? (
                <div key={l.href}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {l.label}
                  </Link>
                  <div className="ml-4 space-y-0.5 border-l border-white/10 pl-3">
                    {l.dropdown.map((item) =>
                      item.children ? (
                        <div key={item.label} className="py-1">
                          <div className="px-3 py-1 text-xs text-white/40 font-semibold uppercase tracking-wider">{item.label}</div>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setOpen(false)}
                              className="block px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {l.label}
                </Link>
              )
            )}
            <a
              href="tel:+79951990922"
              className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-accent"
            >
              <MaxIcon size={16} />
              +7 (995) 199-09-22
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
