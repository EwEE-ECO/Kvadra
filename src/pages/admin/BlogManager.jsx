import { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { getAll, addItem, updateItem, deleteItem } from "../../utils/db";
import { Plus, Pencil, Trash2 } from "lucide-react";

const emptyItem = { title: "", excerpt: "", content: "", date: "", slug: "", category: "" };

export default function BlogManager() {
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const data = getAll("blog");
    if (data) setItems(data);
  }, []);

  const refresh = () => {
    const data = getAll("blog");
    if (data) setItems(data);
    setShowForm(false);
    setEdit(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    if (edit) {
      updateItem("blog", edit.id, data);
    } else {
      addItem("blog", data);
    }
    refresh();
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Блог</h1>
        <button onClick={() => { setEdit(null); setShowForm(!showForm); }} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all">
          <Plus size={16} /> Добавить
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Заголовок</label>
              <input name="title" defaultValue={edit?.title} required className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Slug</label>
              <input name="slug" defaultValue={edit?.slug} required className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Категория</label>
              <input name="category" defaultValue={edit?.category} className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Дата</label>
              <input name="date" defaultValue={edit?.date} className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" placeholder="10.06.2026" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Краткое описание</label>
              <textarea name="excerpt" defaultValue={edit?.excerpt} rows={2} className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Текст статьи</label>
              <textarea name="content" defaultValue={edit?.content} rows={8} className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent font-mono text-xs" />
            </div>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="px-5 py-2.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all">
              {edit ? "Сохранить" : "Добавить"}
            </button>
            <button type="button" onClick={() => { setShowForm(false); setEdit(null); }} className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm hover:bg-gray-50 transition-all">Отмена</button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="p-4 font-medium text-gray-500">Заголовок</th>
              <th className="p-4 font-medium text-gray-500">Категория</th>
              <th className="p-4 font-medium text-gray-500">Дата</th>
              <th className="p-4 font-medium text-gray-500 text-right">Действия</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="p-4 font-medium">{item.title}</td>
                <td className="p-4"><span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">{item.category}</span></td>
                <td className="p-4 text-gray-500">{item.date}</td>
                <td className="p-4 text-right">
                  <div className="flex gap-1 justify-end">
                    <button onClick={() => { setEdit(item); setShowForm(true); }} className="p-2 text-gray-400 hover:text-accent transition-colors"><Pencil size={16} /></button>
                    <button onClick={() => { deleteItem("blog", item.id); refresh(); }} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {items.length === 0 && <tr><td colSpan={4} className="p-8 text-center text-gray-400">Нет статей. Добавьте первую.</td></tr>}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
