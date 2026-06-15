import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import Seo from "../components/Seo";
import { getAll } from "../utils/db";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = useMemo(() => {
    const posts = getAll("blog") || [];
    return posts.find((p) => p.slug === slug);
  }, [slug]);

  if (!post) {
    return (
      <section className="py-20">
        <Seo title="Статья не найдена" noIndex />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Статья не найдена</h1>
          <Link to="/blog" className="text-accent hover:underline">← Вернуться в блог</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28 bg-dark">
      <Seo title={post.title} description={post.excerpt} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-accent mb-8 transition-colors">
            <ArrowLeft size={16} /> Вернуться в блог
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">{post.category}</span>
            <span className="text-xs text-white/30 flex items-center gap-1">
              <Calendar size={12} />
              {post.date}
            </span>
          </div>

          {post.image && (
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>

          <div className="prose prose-invert max-w-none">
            {post.content.split("\n").map((p, i) => {
              if (p.startsWith("•")) {
                return <li key={i} className="text-white/70 ml-4 mb-1">{p.slice(1).trim()}</li>;
              }
              if (p.startsWith("1.") || p.startsWith("2.") || p.startsWith("3.") || p.startsWith("4.")) {
                return <p key={i} className="text-white/70 mb-3">{p}</p>;
              }
              return p.trim() ? <p key={i} className="text-white/70 mb-4 leading-relaxed">{p}</p> : null;
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
