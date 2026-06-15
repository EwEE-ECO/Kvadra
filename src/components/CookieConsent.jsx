import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ks_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("ks_cookie_consent", "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto bg-dark/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
            <div className="flex items-start gap-3 flex-1">
              <Cookie size={24} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Этот сайт использует cookie-файлы для обеспечения работоспособности и сбора аналитики. Продолжая использовать сайт, вы соглашаетесь с{" "}
                  <a href="/#/about" className="text-accent hover:underline">обработкой персональных данных</a> в соответствии с Федеральным законом №&nbsp;152‑ФЗ.
                </p>
              </div>
            </div>
            <button
              onClick={accept}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all"
            >
              Принять
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
