import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/auth";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(user, pass)) {
      navigate("/admin");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-5"
      >
        <div className="text-center">
          <div className="text-2xl font-bold mb-1">
            Квадра<span className="text-accent">Сервис</span>
          </div>
          <div className="text-sm text-white/40">Вход в админ-панель</div>
        </div>

        {error && (
          <div className="text-sm text-red-400 text-center bg-red-400/10 rounded-lg px-3 py-2">
            Неверный логин или пароль
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">Логин</label>
          <input
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors text-base"
            placeholder="admin"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-1.5">Пароль</label>
          <input
            required
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors text-base"
            placeholder="••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all"
        >
          Войти
        </button>
      </form>
    </div>
  );
}
