import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Check, MapPin, Star, Users, Briefcase, Award } from "lucide-react";

const heroBg = "/hero-bg.jpg";

const statsData = [
  { value: "5000+", label: "довольных клиентов", icon: Users },
  { value: "10 лет", label: "на рынке", icon: Award },
  { value: "40+", label: "брендов", icon: Briefcase },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    try {
      navigator.clipboard.writeText("+79181638377");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Фон */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/90" />
      </div>

      {/* Блики */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent/4 blur-[150px]" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* ═══ ЛЕВАЯ КОЛОНКА: заголовок + описание +++ ═══ */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs text-white/40 font-medium tracking-widest uppercase">
                Сервисный центр
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs text-white/40">Краснодар</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
            >
              <span className="block">Ремонт и</span>
              <span className="block text-accent">обслуживание</span>
              <span className="block">кондиционеров</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg text-white/40 max-w-lg mt-8 leading-relaxed"
            >
              Профессиональный ремонт, чистка и заправка кондиционеров.
              Выезд мастера в день обращения. Гарантия до 2 лет.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-8"
            >
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all shadow-lg shadow-accent/25"
              >
                Оставить заявку
                <ArrowRight size={16} />
              </a>

              <div className="relative">
                <button
                  onClick={copyPhone}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white/5 text-white/70 font-medium text-sm hover:bg-white/10 hover:text-white transition-all border border-white/10 backdrop-blur-sm"
                >
                  <Phone size={15} />
                  +7 (918) 163-83-77
                </button>
                {copied && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-accent text-dark text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <Check size={12} />
                    Скопировано
                  </span>
                )}
              </div>
            </motion.div>
          </div>

          {/* ═══ ПРАВАЯ КОЛОНКА: статистика с иконками ═══ */}
          <div className="lg:col-span-5 lg:pl-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-4"
            >
              {statsData.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group flex items-center gap-5 bg-white/[0.03] backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/5 hover:border-accent/20 hover:bg-white/[0.06] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:scale-105 transition-all">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/40">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 flex items-center gap-3 text-xs text-white/25"
            >
              <Star size={12} className="text-accent" />
              <span>Сертифицированные мастера</span>
              <Star size={12} className="text-accent" />
              <span>Гарантия до 2 лет</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
