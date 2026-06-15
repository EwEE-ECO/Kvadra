import { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { getAll, deleteItem } from "../../utils/db";
import { Trash2, Phone, User, MessageSquare, Calendar } from "lucide-react";

export default function LeadsManager() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = getAll("leads");
    if (data) setItems(data);
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
