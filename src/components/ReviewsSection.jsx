import { motion } from "framer-motion";
import { Star } from "lucide-react";

const defaultReviews = [
  {
    id: "1",
    name: "Анна Петрова",
    text: "Отличный сервис! Приехали на следующий день после звонка, быстро нашли проблему, почистили кондиционер. Всё работает отлично.",
    rating: 5,
    date: "12.05.2026",
  },
  {
    id: "2",
    name: "Сергей Иванов",
    text: "Обращался по поводу ремонта сплит-системы. Мастер приехал вовремя, диагностика показала утечку фреона. Заправили, теперь холод отличный. Рекомендую!",
    rating: 5,
    date: "28.04.2026",
  },
  {
    id: "3",
    name: "Елена Смирнова",
    text: "Хороший сервисный центр. Вежливые мастера, адекватные цены. Чистили кондиционер после зимы — теперь работает как новый.",
    rating: 4,
    date: "15.04.2026",
  },
];

export default function ReviewsSection({ reviews }) {
  const items = reviews && reviews.length > 0 ? reviews : defaultReviews;

  return (
    <section className="py-20 sm:py-28 bg-light text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Что говорят клиенты
          </h2>
          <p className="text-dark/50 mt-3 max-w-lg mx-auto">
            Реальные отзывы людей, которые уже воспользовались нашими услугами
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.length === 0 ? (
            <div className="col-span-full text-center text-dark/30 py-12">Пока нет отзывов</div>
          ) : items.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={
                      j < review.rating
                        ? "fill-accent text-accent"
                        : "text-gray-200"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-dark/70 leading-relaxed mb-4">
                {review.text}
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-dark">{review.name}</span>
                <span className="text-dark/40">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
