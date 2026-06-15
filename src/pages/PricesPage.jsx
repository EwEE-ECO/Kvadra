import { motion } from "framer-motion";
import { Check } from "lucide-react";

const priceItems = [
  {
    title: "Чистка кондиционера",
    items: [
      { name: "Чистка внутреннего блока (настенный)", price: "1 500 ₽" },
      { name: "Чистка внутреннего блока (кассетный)", price: "2 500 ₽" },
      { name: "Чистка наружного блока", price: "1 500 ₽" },
      { name: "Комплексная чистка (внутренний + наружный)", price: "2 500 ₽" },
      { name: "Антибактериальная обработка", price: "500 ₽" },
    ],
  },
  {
    title: "Ремонт кондиционеров",
    items: [
      { name: "Выезд и диагностика", price: "500 ₽" },
      { name: "Ремонт платы управления", price: "от 2 000 ₽" },
      { name: "Замена вентилятора", price: "от 1 500 ₽" },
      { name: "Замена компрессора", price: "от 8 000 ₽" },
      { name: "Устранение утечки фреона", price: "от 1 500 ₽" },
    ],
  },
  {
    title: "Заправка фреоном",
    items: [
      { name: "Диагностика утечки", price: "500 ₽" },
      { name: "Дозаправка фреоном (до 200г)", price: "2 500 ₽" },
      { name: "Дозаправка фреоном (200-500г)", price: "3 500 ₽" },
      { name: "Полная заправка (R32/R410A)", price: "4 500 ₽" },
      { name: "Полная заправка (R22)", price: "5 500 ₽" },
    ],
  },
  {
    title: "Дополнительные услуги",
    items: [
      { name: "Монтаж кондиционера (стандартный)", price: "от 6 000 ₽" },
      { name: "Демонтаж кондиционера", price: "от 2 000 ₽" },
      { name: "Установка дренажного насоса", price: "2 000 ₽" },
      { name: "Прокладка трассы (за метр)", price: "800 ₽" },
      { name: "Замена пульта ДУ", price: "от 800 ₽" },
    ],
  },
];

export default function PricesPage() {
  return (
    <section className="py-20 sm:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Цены</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">Стоимость услуг</h1>
          <p className="text-white/50 mt-3 max-w-lg mx-auto">
            Прозрачные цены без скрытых платежей. Точная стоимость после диагностики
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {priceItems.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h2 className="text-lg font-bold mb-4 pb-3 border-b border-white/10">
                {group.title}
              </h2>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{item.name}</span>
                    <span className="font-semibold text-accent ml-4">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-4">Цены указаны ориентировочно. Точная стоимость зависит от сложности работ и модели оборудования.</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all"
          >
            Получить точный расчёт
          </a>
        </motion.div>
      </div>
    </section>
  );
}
