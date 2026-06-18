import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const serviceSubmenu = [
  {
    label: "Техническое обслуживание",
    children: [
      { href: "/services/industrial", label: "Промышленные системы" },
      { href: "/services/semi-industrial", label: "Полупромышленные системы" },
      { href: "/services/repair", label: "Бытовые сплит-системы" },
    ],
  },
  { href: "/services/maintenance", label: "Обслуживание" },
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
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-dark font-bold text-sm">
              К
            </div>
            <span className="font-semibold text-lg tracking-tight hidden sm:block">
              Квадро<span className="text-accent">Сервис</span>
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
              <Phone size={16} />
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

      {/* Категории под навигацией */}
      <div className="border-t border-white/5 bg-dark/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-xs text-white/40 font-medium uppercase tracking-wider mr-1 shrink-0">
              Тип системы:
            </span>
            <Link
              to="/services/industrial"
              className="shrink-0 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all"
            >
              Промышленные
            </Link>
            <Link
              to="/services/semi-industrial"
              className="shrink-0 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all"
            >
              Полупромышленные
            </Link>
            <Link
              to="/services/repair"
              className="shrink-0 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all"
            >
              Бытовые сплит-системы
            </Link>
            <Link
              to="/services/maintenance"
              className="shrink-0 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all"
            >
              Обслуживание
            </Link>
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
              <Phone size={16} />
              +7 (995) 199-09-22
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
