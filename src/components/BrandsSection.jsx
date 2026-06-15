import { motion } from "framer-motion";

const brands = [
  { name: "Daikin", desc: "Япония" },
  { name: "Mitsubishi", desc: "Япония" },
  { name: "LG", desc: "Корея" },
  { name: "Samsung", desc: "Корея" },
  { name: "Toshiba", desc: "Япония" },
  { name: "Panasonic", desc: "Япония" },
  { name: "Haier", desc: "Китай" },
  { name: "Lessar", desc: "Европа" },
  { name: "Gree", desc: "Китай" },
  { name: "Midea", desc: "Китай" },
];

export default function BrandsSection() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Бренды
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Работаем с любыми брендами
          </h2>
          <p className="text-white/50 mt-3 max-w-lg mx-auto">
            Оригинальные запчасти и сертифицированные компоненты для всех марок
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-5 text-center border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all"
            >
              <div className="text-base sm:text-lg font-bold text-white/80 group-hover:text-accent transition-colors">
                {brand.name}
              </div>
              <div className="text-xs text-white/30 mt-1">{brand.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
