import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <section className="py-20 sm:py-28 bg-dark min-h-[60vh] flex items-center">
      <Seo title="Страница не найдена" noIndex />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-8xl sm:text-9xl font-bold text-accent/20 mb-4">404</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-white/50 max-w-md mx-auto mb-8">
            Страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all"
          >
            На главную
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
