import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Монтаж VRV-системы в офисном центре",
    desc: "Проектирование и монтаж мультизональной системы кондиционирования в 3-этажном офисном здании.",
    client: "Бизнес-центр «Платан»",
    year: "2025",
    result: "Установлено 12 внутренних блоков, 2 наружных. Экономия электроэнергии 30%",
  },
  {
    title: "Обслуживание торгового центра",
    desc: "Полное сервисное обслуживание системы кондиционирования в ТЦ площадью 5000 м².",
    client: "ТЦ «Краснодар Сити»",
    year: "2024-2025",
    result: "Ежеквартальное ТО, оперативный ремонт, снижение простоев на 90%",
  },
  {
    title: "Ремонт чиллера в гостинице",
    desc: "Диагностика и ремонт промышленного чиллера мощностью 100 кВт в отеле.",
    client: "Отель «Премьер»",
    year: "2024",
    result: "Замена компрессора, заправка фреоном. Восстановление работы за 48 часов",
  },
  {
    title: "Установка сплит-систем в коттедже",
    desc: "Подбор и установка 5 сплит-систем в частном доме площадью 300 м².",
    client: "Частный дом в VIP-посёлке",
    year: "2025",
    result: "Установлены системы Daikin. Интеграция с умным домом",
  },
  {
    title: "Чистка и дезинфекция сетей",
    desc: "Комплексная очистка системы кондиционирования в детском саду.",
    client: "Детский сад №42",
    year: "2025",
    result: "Полная дезинфекция 15 блоков. Санитарные нормы соблюдены",
  },
  {
    title: "Модернизация системы охлаждения",
    desc: "Замена устаревшего оборудования на современные энергоэффективные модели в ресторане.",
    client: "Ресторан «Терраса»",
    year: "2024",
    result: "Замена 8 кондиционеров. Экономия на электричестве 40%",
  },
];

export default function PortfolioPage() {
  return (
    <section className="py-20 sm:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Портфолио</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">Наши работы</h1>
          <p className="text-white/50 mt-3 max-w-lg mx-auto">
            Реальные проекты, которыми мы гордимся
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/20 transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/30">{project.client}</span>
                <span className="text-xs text-accent">{project.year}</span>
              </div>
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-4 flex-1">{project.desc}</p>
              <div className="text-xs text-white/50 flex items-start gap-2">
                <span className="text-accent shrink-0 mt-0.5">→</span>
                {project.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
