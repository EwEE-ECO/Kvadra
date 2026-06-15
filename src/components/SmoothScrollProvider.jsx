import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Перехватывает клики по хэш-ссылкам (/#contact, #section)
 * и делает плавный скролл к элементу без перезагрузки страницы.
 * Также скроллит к хэшу при монтировании / смене роута.
 */
export default function SmoothScrollProvider({ children }) {
  const { pathname, hash } = useLocation();

  // Скролл к элементу при загрузке страницы с хэшем
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  // Перехват кликов по хэш-ссылкам
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Проверяем, что это хэш-ссылка: #section или /#section
      const match = href.match(/^\/?#(.+)$/) || href.match(/^#(.+)$/);
      if (!match) return;

      e.preventDefault();
      const id = match[1];
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Обновляем URL без навигации
        window.history.pushState(null, "", `/#${id}`);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return children;
}
