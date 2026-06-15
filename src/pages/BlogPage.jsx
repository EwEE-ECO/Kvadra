import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Как часто нужно чистить кондиционер?",
    excerpt: "Регулярная чистка кондиционера — залог его долгой и эффективной работы. Рассказываем, как часто нужно проводить обслуживание и почему это важно.",
    date: "10.06.2026",
    slug: "how-often-to-clean-ac",
    category: "Обслуживание",
  },
  {
    title: "Признаки утечки фреона в кондиционере",
    excerpt: "Как понять, что в кондиционере упал уровень хладагента? Разбираем основные признаки утечки фреона и что делать в такой ситуации.",
    date: "25.05.2026",
    slug: "freon-leak-signs",
    category: "Ремонт",
  },
  {
    title: "Выбираем кондиционер для квартиры",
    excerpt: "На что обратить внимание при выборе сплит-системы? Поможем разобраться в типах, мощностях и функциях современных кондиционеров.",
    date: "15.05.2026",
    slug: "choose-ac-for-apartment",
    category: "Советы",
  },
  {
    title: "Подготовка кондиционера к летнему сезону",
    excerpt: "Как подготовить сплит-систему к жаркому сезону? Пошаговая инструкция по проверке и обслуживанию кондиционера перед летом.",
    date: "01.05.2026",
    slug: "prepare-ac-for-summer",
    category: "Обслуживание",
  },
];

export default function BlogPage() {
  return (
    <section className="py-20 sm:py-28 bg-dark">
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
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/20 transition-all"
            >
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
