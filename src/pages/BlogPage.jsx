import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Seo from "../components/Seo";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";
import { getAll } from "../utils/db";

export default function BlogPage() {
  const posts = useMemo(() => getAll("blog") || [], []);

  return (
    <section className="py-20 sm:py-28 bg-dark">
      <Seo title="Блог" description="Полезные статьи о ремонте, чистке и обслуживании кондиционеров. Советы по эксплуатации климатической техники." />
      <BreadcrumbJsonLd items={[
        { name: "Главная", url: "https://ewee-eco.github.io/Kvadra/" },
        { name: "Блог", url: "https://ewee-eco.github.io/Kvadra/#/blog" },
      ]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Блог</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">Полезные статьи</h1>
          <p className="text-white/50 mt-3 max-w-lg mx-auto">
            Советы по эксплуатации и обслуживанию климатической техники
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug || post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent/20 transition-all overflow-hidden"
            >
              {post.image && (
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
              )}
              <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">{post.category}</span>
                <span className="text-xs text-white/30 flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
              </div>
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-white/40 leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Читать далее <ArrowRight size={14} />
              </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
