import { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { getAll, deleteItem } from "../../utils/db";
import { playNotificationSound, markLeadsViewed } from "../../utils/notify";
import { Trash2, Phone, User, MessageSquare, Calendar, Bell } from "lucide-react";

export default function LeadsManager() {
  const [items, setItems] = useState(() => {
    const data = getAll("leads");
    markLeadsViewed();
    return data || [];
  });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      const lead = e.detail || {};
      playNotificationSound();
      setToast({ name: lead.name || "Новый клиент", phone: lead.phone || "" });
      setTimeout(() => setToast(null), 4000);
      const data = getAll("leads");
      if (data) setItems(data);
    };
    window.addEventListener("lead-new", handler);
    return () => window.removeEventListener("lead-new", handler);
  }, []);

  const refresh = () => {
    const data = getAll("leads");
    if (data) setItems(data);
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Заявки</h1>
      </div>

      {toast && (
        <div className="fixed top-4 right-4 z-[60] animate-slide-up max-w-sm bg-dark text-white rounded-2xl p-4 shadow-2xl border border-white/10 flex items-start gap-3">
          <Bell size={20} className="text-accent shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Новая заявка!</p>
            <p className="text-xs text-white/50 mt-0.5">{toast.name} — {toast.phone}</p>
          </div>
          <button onClick={() => setToast(null)} className="text-white/30 hover:text-white ml-auto shrink-0">✕</button>
        </div>
      )}

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
          <div className="text-gray-300 mb-2"><Phone size={40} className="mx-auto" /></div>
          <p className="text-gray-500">Пока нет заявок. Они появятся здесь после отправки с сайта.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1.5 text-sm font-medium"><User size={14} className="text-gray-400" /> {item.name}</span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-500"><Phone size={14} /> {item.phone}</span>
                    {item.date && <span className="flex items-center gap-1.5 text-xs text-gray-400"><Calendar size={12} /> {item.date}</span>}
                  </div>
                  {item.message && (
                    <p className="text-sm text-gray-500 flex items-start gap-1.5">
                      <MessageSquare size={14} className="text-gray-300 mt-0.5 shrink-0" />
                      {item.message}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => { deleteItem("leads", item.id); refresh(); }}
                  className="p-2 text-gray-300 hover:text-red-500 transition-colors shrink-0"
                  title="Удалить"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
