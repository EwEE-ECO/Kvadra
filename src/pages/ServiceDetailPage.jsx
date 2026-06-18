import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Seo from "../components/Seo";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";
import { getAll } from "../utils/db";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = useMemo(() => {
    const services = getAll("services") || [];
    return services.find((s) => s.slug === slug);
  }, [slug]);

  if (!service) {
    return (
      <section className="py-20">
        <Seo title="Страница не найдена" noIndex />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Услуга не найдена</h1>
          <Link to="/services" className="text-accent hover:underline">← Вернуться к услугам</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28 bg-dark">
      <Seo title={service.title} description={service.shortDesc || service.desc} />
      <BreadcrumbJsonLd items={[
        { name: "Главная", url: "https://ewee-eco.github.io/Kvadra/" },
        { name: "Услуги", url: "https://ewee-eco.github.io/Kvadra/#/services" },
        { name: service.title, url: `https://ewee-eco.github.io/Kvadra/#/services/${service.slug}` },
      ]} />
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
          <p className="text-lg text-white/50 mb-8">{service.desc}</p>

          {service.tariffs ? (
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {service.tariffs.map((t) => (
                <div key={t.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all">
                  <div className="text-lg font-bold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-accent mb-3">{t.price}</div>
                  <p className="text-sm text-white/50">{t.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 mb-8">
              <h2 className="text-xl font-semibold mb-4">Что входит в услугу</h2>
              <ul className="space-y-3">
                {(service.features || []).map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-white/40">Стоимость от</div>
              <div className="text-3xl font-bold text-accent">{service.price}</div>
            </div>
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all"
            >
              Заказать услугу
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
