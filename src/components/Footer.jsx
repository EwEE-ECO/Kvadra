import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-dark font-bold text-sm">
                К
              </div>
              <span className="font-semibold text-lg">
                Квадро<span className="text-accent">Сервис</span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Сервисный центр климатической техники в Краснодаре. Ремонт, чистка
              и обслуживание кондиционеров.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Услуги</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/services/cleaning", label: "Чистка" },
                { href: "/services/repair", label: "Ремонт" },
                { href: "/services/diagnostics", label: "Диагностика" },
                { href: "/services/refill", label: "Заправка" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">
              Информация
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "О компании" },
                { href: "/prices", label: "Цены" },
                { href: "/blog", label: "Блог" },
                { href: "/contacts", label: "Контакты" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">
              Контакты
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>г. Краснодар, ул. Ростовское шоссе, д. 30/7, к. 2</li>
              <li>
                <a
                  href="tel:+79951990922"
                  className="hover:text-accent transition-colors"
                >
                  +7 (995) 199-09-22
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kvadraservice.ru"
                  className="hover:text-accent transition-colors"
                >
                  info@kvadraservice.ru
                </a>
              </li>
              <li className="text-white/30 text-xs">
                Пн-Пт: 9:00–19:00
                <br />
                Сб-Вс: 10:00–17:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5">
          <div className="text-xs text-white/30 space-y-0.5 mb-3 text-center sm:text-left">
            <p>ИП Попов В.Н. | ИНН 235300220152</p>
            <p className="text-white/20">
              р/с 40802810530160000611 | БИК 040349602 | к/с 30101810100000000602
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <p>© {new Date().getFullYear()} КвадроСервис. Все права защищены.</p>
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
