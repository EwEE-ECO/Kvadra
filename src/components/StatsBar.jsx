import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Wrench, Users, Building2 } from "lucide-react";

const stats = [
  { value: 10, suffix: "+", label: "лет на рынке", icon: Award },
  { value: 5000, suffix: "+", label: "довольных клиентов", icon: Users },
  { value: 40, suffix: "+", label: "брендов обслуживаем", icon: Building2 },
  { value: 12000, suffix: "+", label: "выполненных работ", icon: Wrench },
];

function AnimatedNumber({ to, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative -mt-20 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark border border-white/10 rounded-2xl backdrop-blur-sm shadow-2xl shadow-accent/5 overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/5 lg:divide-y-0 lg:divide-x">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 p-5 sm:p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      <AnimatedNumber to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-white/40 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
