import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { getAll } from "../utils/db";

export default function PricesPage() {
  const items = useMemo(() => getAll("prices") || [], []);
  const groups = useMemo(() => {
    const map = {};
    items.forEach((item) => {
      const cat = item.category || "Прочее";
      if (!map[cat]) map[cat] = [];
      map[cat].push(item);
    });
    return Object.entries(map);
  }, [items]);

  return (
    <section className="py-20 sm:py-28 bg-dark">
      <Seo title="Цены" description="Прозрачные цены на ремонт, чистку, диагностику и заправку кондиционеров в Краснодаре." />
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
          {groups.map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h2 className="text-lg font-bold mb-4 pb-3 border-b border-white/10">
                {category}
              </h2>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{item.service}</span>
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
          <Link
            to="/"
            state={{ scrollTo: "contact" }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all"
          >
            Получить точный расчёт
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
