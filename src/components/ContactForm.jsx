import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Send, MapPin, Clock, Check } from "lucide-react";
import MaxIcon from "./MaxIcon";
import { addItem } from "../utils/db";

function formatPhone(value) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (!d) return "";
  let r = d[0] === "8" ? "8" : "+7";
  if (d.length > 1) r += " (" + d.slice(1, 4);
  if (d.length >= 5) r += ") " + d.slice(4, 7);
  if (d.length >= 8) r += "-" + d.slice(7, 9);
  if (d.length >= 10) r += "-" + d.slice(9, 11);
  return r;
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!agreed) {
      setError("Необходимо согласие на обработку персональных данных");
      return;
    }
    setLoading(true);
    setError(false);
    addItem("leads", {
      name: form.name,
      phone: form.phone,
      message: form.message,
      date: new Date().toLocaleDateString("ru-RU"),
    });
    window.dispatchEvent(new CustomEvent("lead-new", { detail: form }));
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setLoading(false);
  };

  return (
    <section className="py-20 sm:py-28 bg-dark" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Контакты
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-white/50 mb-8 max-w-md leading-relaxed">
              Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MaxIcon,
                  label: "Напишите нам в MAX",
                  value: "+7 (995) 199-09-22",
                  href: "https://max.ru/",
                },
                {
                  icon: MapPin,
                  label: "Наш адрес",
                  value: "г. Краснодар, ул. Ростовское шоссе, д. 30/7, к. 2",
                },
                {
                  icon: Clock,
                  label: "Режим работы",
                  value: "Пн-Пт: 9:00–19:00 / Сб-Вс: 10:00–17:00",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {sent ? (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/10">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Check size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-white/50 text-sm">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    Ваше имя
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors text-base"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    Телефон
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: formatPhone(e.target.value) })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors text-base"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">
                    Описание проблемы
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors resize-none text-base"
                    placeholder="Опишите вашу проблему..."
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-400 text-center">{typeof error === "string" ? error : "Ошибка отправки. Попробуйте позже."}</p>
                )}
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 accent-accent shrink-0"
                    required
                  />
                  <span className="text-xs text-white/40 leading-relaxed">
                    Нажимая кнопку, вы даёте{' '}
                    <Link to="/privacy" className="text-accent hover:underline" target="_blank">
                      согласие на обработку персональных данных
                    </Link>
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all disabled:opacity-50"
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                  <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
