import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, Search, Droplets, ArrowRight, Star } from "lucide-react";

const iconMap = {
  Wrench: Wrench,
  Search: Search,
  Droplets: Droplets,
};

const defaultServices = [
  { id: "2", icon: "Wrench", title: "Ремонт кондиционеров", shortDesc: "Быстрый и качественный ремонт сплит-систем всех брендов. Замена компрессоров, вентиляторов, плат управления.", price: "от 2 000 ₽", slug: "repair", popular: false },
  { id: "3", icon: "Search", title: "Диагностика", shortDesc: "Полная диагностика системы кондиционирования. Выявление неисправностей с помощью профессионального оборудования.", price: "от 500 ₽", slug: "diagnostics", popular: false },
  { id: "4", icon: "Droplets", title: "Заправка фреоном", shortDesc: "Проверка давления, поиск утечек, дозаправка или полная заправка кондиционера фреоном.", price: "от 2 500 ₽", slug: "refill", popular: true },
];

export default function ServicesSection({ services }) {
  const items = services && services.length > 0 ? services : defaultServices;

  return (
    <section className="py-20 sm:py-28 bg-light text-dark" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Услуги
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Что мы предлагаем
          </h2>
          <p className="text-dark/50 mt-3 max-w-lg mx-auto">
            Профессиональный сервис любой сложности. Работаем со всеми брендами
            и типами климатической техники.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((service, i) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Link key={service.id} to={`/services/${service.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all"
              >
                {/* Бейдж "Популярно" */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-accent text-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Star size={10} className="fill-dark" />
                      Популярно
                    </div>
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-dark/50 mb-3 leading-relaxed">
                  {service.shortDesc}
                </p>
                <div className="text-sm font-semibold text-accent mb-4">
                  {service.price}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-dark/50 group-hover:text-accent transition-colors">
                  Подробнее
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
