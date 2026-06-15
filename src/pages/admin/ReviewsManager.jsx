import { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { getAll, addItem, updateItem, deleteItem } from "../../utils/db";
import { Plus, Pencil, Trash2, Star } from "lucide-react";

export default function ReviewsManager() {
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const data = getAll("reviews");
    if (data) setItems(data);
  }, []);

  const refresh = () => {
    const data = getAll("reviews");
    if (data) setItems(data);
    setShowForm(false);
    setEdit(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    data.rating = parseInt(form.get("rating")) || 5;
    data.date = data.date || new Date().toLocaleDateString("ru-RU");
    if (edit) {
      updateItem("reviews", edit.id, data);
    } else {
      addItem("reviews", data);
    }
    refresh();
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Отзывы</h1>
        <button onClick={() => { setEdit(null); setShowForm(!showForm); }} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all">
          <Plus size={16} /> Добавить
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Имя клиента</label>
              <input name="name" defaultValue={edit?.name} required className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Рейтинг (1-5)</label>
              <input name="rating" type="number" min="1" max="5" defaultValue={edit?.rating || 5} className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Дата</label>
              <input name="date" defaultValue={edit?.date} className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" placeholder="10.06.2026 (авто)" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Текст отзыва</label>
              <textarea name="text" defaultValue={edit?.text} required rows={3} className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" />
            </div>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="px-5 py-2.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all">{edit ? "Сохранить" : "Добавить"}</button>
            <button type="button" onClick={() => { setShowForm(false); setEdit(null); }} className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm hover:bg-gray-50 transition-all">Отмена</button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="p-4 font-medium text-gray-500">Клиент</th>
              <th className="p-4 font-medium text-gray-500">Рейтинг</th>
              <th className="p-4 font-medium text-gray-500">Отзыв</th>
              <th className="p-4 font-medium text-gray-500 text-right">Действия</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4"><div className="flex gap-0.5">{Array.from({ length: item.rating }).map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}</div></td>
                <td className="p-4 text-gray-500 max-w-xs truncate">{item.text}</td>
                <td className="p-4 text-right">
                  <div className="flex gap-1 justify-end">
                    <button onClick={() => { setEdit(item); setShowForm(true); }} className="p-2 text-gray-400 hover:text-accent transition-colors"><Pencil size={16} /></button>
                    <button onClick={() => { deleteItem("reviews", item.id); refresh(); }} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {items.length === 0 && <tr><td colSpan={4} className="p-8 text-center text-gray-400">Нет отзывов. Добавьте первый.</td></tr>}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
