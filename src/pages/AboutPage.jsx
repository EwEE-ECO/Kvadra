import { motion } from "framer-motion";
import { Shield, Heart, Users, Award, Target, Zap } from "lucide-react";
import Seo from "../components/Seo";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";

const stats = [
  { value: "10+", label: "лет на рынке" },
  { value: "5000+", label: "довольных клиентов" },
  { value: "40+", label: "брендов обслуживаем" },
  { value: "100%", label: "гарантия качества" },
];

const values = [
  { icon: Shield, title: "Надёжность", desc: "Работаем официально, предоставляем гарантию на все виды работ." },
  { icon: Heart, title: "Забота о клиентах", desc: "Для нас каждый клиент — это человек, которому нужна помощь." },
  { icon: Users, title: "Команда профи", desc: "Сертифицированные инженеры с опытом работы от 5 лет." },
  { icon: Award, title: "Качество", desc: "Используем профессиональное оборудование и оригинальные запчасти." },
  { icon: Target, title: "Точность", desc: "Приезжаем вовремя. Диагностируем точно. Ремонтируем качественно." },
  { icon: Zap, title: "Скорость", desc: "Выезд в день обращения. Большинство проблем решаем за 1 визит." },
];

export default function AboutPage() {
  return (
    <>
      <Seo title="О нас" description="Более 10 лет ремонтируем и обслуживаем кондиционеры в Краснодаре. Сертифицированные мастера, гарантия до 2 лет." />
      <BreadcrumbJsonLd items={[
        { name: "Главная", url: "https://ewee-eco.github.io/Kvadra/" },
        { name: "О нас", url: "https://ewee-eco.github.io/Kvadra/#/about" },
      ]} />
      <section className="py-20 sm:py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">О компании</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6">КвадроСервис — ваш климат под контролем</h1>
              <p className="text-white/50 leading-relaxed mb-4">
                Мы — сервисный центр по ремонту и обслуживанию климатической техники в Краснодаре. 
                Начиная с 2015 года, мы помогли более 5000 клиентам вернуть комфорт в свои дома и офисы.
              </p>
              <p className="text-white/40 leading-relaxed">
                Наши мастера имеют сертификаты от ведущих производителей климатической техники и 
                регулярно проходят обучение. Мы работаем с оборудованием любой сложности — от 
                бытовых сплит-систем до промышленных чиллеров и VRV-систем.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-accent">{s.value}</div>
                  <div className="text-sm text-white/40 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">Ценности</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Почему стоит выбрать нас</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex gap-4 p-5 rounded-2xl border border-white/10 hover:border-accent/20 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{v.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
