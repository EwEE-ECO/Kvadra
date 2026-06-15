import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";

const services = {
  cleaning: {
    title: "Чистка кондиционеров",
    desc: "Глубокая очистка внутренних и наружных блоков. Удаление пыли, грязи, плесени и неприятных запахов.",
    fullDesc: "Со временем любой кондиционер загрязняется. Пыль, грязь, пыльца и микроорганизмы накапливаются на фильтрах и теплообменнике, что приводит к снижению эффективности работы, неприятному запаху и может быть вредно для здоровья. Наши специалисты проведут полную очистку всех элементов системы.",
    price: "от 1 500 ₽",
    features: [
      "Чистка внутреннего блока — разборка, промывка фильтров, теплообменника, вентилятора",
      "Чистка наружного блока — удаление пыли и грязи с радиатора и корпуса",
      "Антибактериальная обработка — уничтожение плесени, грибка и бактерий",
      "Проверка дренажа — очистка дренажной системы от засоров",
      "Дезинфекция — обработка специальными составами",
    ],
  },
  repair: {
    title: "Ремонт кондиционеров",
    desc: "Быстрый и качественный ремонт сплит-систем всех брендов.",
    fullDesc: "Если ваш кондиционер перестал охлаждать, издаёт посторонние звуки или не включается — наши мастера готовы выехать в день обращения. Мы ремонтируем оборудование всех брендов: Daikin, Mitsubishi, LG, Samsung, Toshiba, Panasonic и других.",
    price: "от 2 000 ₽",
    features: [
      "Замена компрессора — при выходе из строя основного узла",
      "Ремонт платы управления — диагностика и восстановление электроники",
      "Замена вентилятора — при износе или поломке лопастей",
      "Устранение утечек хладагента — поиск и герметизация",
      "Замена конденсатора и испарителя — при коррозии или повреждении",
    ],
  },
  diagnostics: {
    title: "Диагностика кондиционеров",
    desc: "Полная диагностика системы кондиционирования с помощью профессионального оборудования.",
    fullDesc: "Регулярная диагностика позволяет выявить неисправности на ранней стадии и предотвратить дорогостоящий ремонт. Наши мастера проведут полную проверку всех систем вашего кондиционера с использованием профессионального оборудования.",
    price: "от 500 ₽",
    features: [
      "Проверка давления фреона — измерение рабочего давления",
      "Тест всех режимов — охлаждение, обогрев, вентиляция",
      "Диагностика электроники — проверка плат управления и датчиков",
      "Проверка дренажной системы — тест отвода конденсата",
      "Визуальный осмотр — оценка состояния всех узлов и компонентов",
    ],
  },
  refill: {
    title: "Заправка фреоном",
    desc: "Проверка давления, поиск утечек, дозаправка или полная заправка кондиционера.",
    fullDesc: "Недостаток фреона — одна из самых частых причин плохой работы кондиционера. Со временем хладагент может утекать через микротрещины или соединения. Наши мастера найдут утечку, устранят её и заправят систему до нужного уровня.",
    price: "от 2 500 ₽",
    features: [
      "Поиск утечек — с помощью электронного течеискателя и ультрафиолета",
      "Дозаправка фреоном — до необходимого уровня",
      "Полная заправка — при замене хладагента или после ремонта",
      "Проверка работы — тест системы после заправки",
      "Консультация — рекомендации по дальнейшей эксплуатации",
    ],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services[slug];

  if (!service) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Услуга не найдена</h1>
          <Link to="/services" className="text-accent hover:underline">← Вернуться к услугам</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-accent mb-8 transition-colors">
            <ArrowLeft size={16} /> Вернуться к услугам
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg text-white/50 mb-8">{service.fullDesc}</p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-xl font-semibold mb-4">Что входит в услугу</h2>
            <ul className="space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-white/40">Стоимость от</div>
              <div className="text-3xl font-bold text-accent">{service.price}</div>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all"
            >
              Заказать услугу
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
