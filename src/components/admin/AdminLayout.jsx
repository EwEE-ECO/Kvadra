import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Wrench, Star, Image, DollarSign, Inbox, LogOut } from "lucide-react";
import { logout } from "../../utils/auth";

const navItems = [
  { to: "/admin", label: "Дашборд", icon: LayoutDashboard },
  { to: "/admin/services", label: "Услуги", icon: Wrench },
  { to: "/admin/blog", label: "Блог", icon: FileText },
  { to: "/admin/reviews", label: "Отзывы", icon: Star },
  { to: "/admin/portfolio", label: "Портфолио", icon: Image },
  { to: "/admin/prices", label: "Цены", icon: DollarSign },
  { to: "/admin/leads", label: "Заявки", icon: Inbox },
];

export default function AdminLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-dark text-white shrink-0 hidden lg:flex flex-col">
        <div className="p-5 border-b border-white/10">
          <Link to="/" className="text-lg font-bold">
            Квадра<span className="text-accent">Сервис</span>
          </Link>
          <div className="text-xs text-white/40 mt-1">Админ-панель</div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  active
                    ? "bg-accent text-dark font-semibold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-white/10">
          <button
            onClick={() => { logout(); window.location.hash = "#/admin/login"; }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/40 hover:text-white hover:bg-white/5 transition-colors w-full"
          >
            <LogOut size={18} />
            Выйти
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-dark text-white px-4 py-3 flex items-center justify-between">
        <div className="text-sm font-bold">
          Квадра<span className="text-accent">Сервис</span>
          <span className="text-white/40 ml-1 text-xs">Админка</span>
        </div>
        <div className="flex gap-2">
          <Link to="/" className="text-xs text-white/40 hover:text-white px-2 py-1">На сайт</Link>
          <button onClick={() => { logout(); window.location.hash = "#/admin/login"; }} className="text-xs text-white/40 hover:text-white px-2 py-1">Выйти</button>
        </div>
      </div>

      <div className="flex-1 lg:pl-0 pt-14 lg:pt-0 text-gray-900">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
