import { motion } from "framer-motion";
import { Shield, Leaf, Heart, Clock, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Оригинальные запчасти",
    desc: "Используем только сертифицированные комплектующие от производителей",
  },
  {
    icon: Leaf,
    title: "Экологичный подход",
    desc: "Безопасные средства очистки, правильная утилизация старых деталей",
  },
  {
    icon: Heart,
    title: "Гарантия до 2 лет",
    desc: "На все виды работ даём гарантию. Уверены в качестве сервиса",
  },
  {
    icon: Clock,
    title: "Выезд за 24 часа",
    desc: "Принимаем заявки ежедневно. Мастер прибудет в удобное для вас время",
  },
  {
    icon: Users,
    title: "Опытные мастера",
    desc: "Сертифицированные инженеры с опытом работы от 5 лет",
  },
  {
    icon: Award,
    title: "Любая сложность",
    desc: "От бытовых сплит-систем до промышленных чиллеров и VRV систем",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-white text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Преимущества
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Почему выбирают нас
          </h2>
          <p className="text-dark/50 mt-3 max-w-lg mx-auto">
            Более 10 лет обеспечиваем комфорт в домах и офисах Краснодара
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-accent/20 hover:bg-accent/[0.02] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-dark/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
