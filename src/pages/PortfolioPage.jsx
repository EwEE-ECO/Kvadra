import { useMemo } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { getAll } from "../utils/db";

export default function PortfolioPage() {
  const projects = useMemo(() => getAll("portfolio") || [], []);

  return (
    <section className="py-20 sm:py-28 bg-dark">
      <Seo title="Портфолио" description="Реальные проекты по ремонту, монтажу и обслуживанию кондиционеров в Краснодаре." />
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
              key={project.id || i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent/20 transition-all flex flex-col overflow-hidden"
            >
              {project.image && (
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-white/30">{project.category || project.client || ""}</span>
                </div>
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-4 flex-1">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
