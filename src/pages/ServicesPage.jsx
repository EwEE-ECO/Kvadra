import { motion } from "framer-motion";
import { Wind, Wrench, Search, Droplets, ArrowRight, Check, Star } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Чистка кондиционеров",
    desc: "Глубокая очистка внутренних и наружных блоков. Удаление пыли, грязи, плесени и неприятных запахов. Восстановление эффективности работы.",
    price: "от 1 500 ₽",
    slug: "cleaning",
    popular: true,
    features: ["Чистка внутреннего блока", "Чистка наружного блока", "Антибактериальная обработка", "Проверка дренажа"],
  },
  {
    icon: Wrench,
    title: "Ремонт кондиционеров",
    desc: "Быстрый и качественный ремонт сплит-систем всех брендов. Замена компрессоров, вентиляторов, плат управления и других компонентов.",
    price: "от 2 000 ₽",
    slug: "repair",
    popular: false,
    features: ["Замена компрессора", "Ремонт платы управления", "Замена вентилятора", "Устранение утечек"],
  },
  {
    icon: Search,
    title: "Диагностика",
    desc: "Полная диагностика системы кондиционирования с помощью профессионального оборудования. Выявление любых неисправностей на ранней стадии.",
    price: "от 500 ₽",
    slug: "diagnostics",
    popular: false,
    features: ["Проверка давления фреона", "Тест всех режимов", "Диагностика электроники", "Проверка дренажной системы"],
  },
  {
    icon: Droplets,
    title: "Заправка фреоном",
    desc: "Проверка давления, поиск утечек, дозаправка или полная заправка кондиционера фреоном. Используем только сертифицированные хладагенты.",
    price: "от 2 500 ₽",
    slug: "refill",
    popular: true,
    features: ["Поиск утечек", "Дозаправка фреоном", "Полная заправка", "Проверка работы"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mt-2">Наши услуги</h1>
            <p className="text-white/50 mt-3 max-w-lg mx-auto">
              Профессиональный сервис климатической техники в Краснодаре
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-accent/30 transition-all"
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
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-white/50 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                        <Check size={16} className="text-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="text-xl font-bold text-accent">{service.price}</span>
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all"
                    >
                      Заказать <ArrowRight size={15} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
