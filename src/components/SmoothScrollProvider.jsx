import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SmoothScrollProvider({ children }) {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      const timer = setTimeout(() => {
        const el = document.getElementById(state.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return children;
}
