import { useState, useRef } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { getAll, addItem, updateItem, deleteItem } from "../../utils/db";
import { Plus, Pencil, Trash2, Upload, X } from "lucide-react";

export default function PortfolioManager() {
  const [items, setItems] = useState(() => getAll("portfolio") || []);
  const [edit, setEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [preview, setPreview] = useState("");
  const fileRef = useRef(null);

  const refresh = () => {
    const data = getAll("portfolio");
    if (data) setItems(data);
    setShowForm(false);
    setEdit(null);
    setPreview("");
  };

  const openForm = (item) => {
    setEdit(item);
    setPreview(item?.image || "");
    setShowForm(true);
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { alert("Файл больше 5 МБ"); return; }
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    if (preview && preview.startsWith("data:")) data.image = preview;
    if (edit) {
      updateItem("portfolio", edit.id, data);
    } else {
      addItem("portfolio", data);
    }
    refresh();
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Портфолио</h1>
        <button onClick={() => { openForm(null); }} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all">
          <Plus size={16} /> Добавить
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Название работы</label>
              <input name="title" defaultValue={edit?.title} required className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Описание</label>
              <textarea name="desc" defaultValue={edit?.desc} rows={2} className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Категория</label>
              <input name="category" defaultValue={edit?.category} className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">URL или загрузите фото</label>
              <input name="image" defaultValue={edit?.image && !edit?.image?.startsWith("data:") ? edit.image : ""} placeholder="https://example.com/photo.jpg" className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-accent mb-2" />
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => fileRef.current?.click()} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                  <Upload size={14} /> Выбрать файл
                </button>
                <span className="text-xs text-gray-400">до 5 МБ</span>
              </div>
              <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
              {preview && (
                <div className="relative mt-2 inline-block">
                  <img src={preview} alt="" className="h-20 rounded-lg border border-gray-200 object-cover" />
                  <button type="button" onClick={() => { setPreview(""); fileRef.current.value = ""; }} className="absolute -top-1.5 -right-1.5 bg-white rounded-full p-0.5 shadow border">
                    <X size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="px-5 py-2.5 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-accent-hover transition-all">{edit ? "Сохранить" : "Добавить"}</button>
            <button type="button" onClick={() => { refresh(); }} className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm hover:bg-gray-50 transition-all">Отмена</button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="p-4 font-medium text-gray-500">Название</th>
              <th className="p-4 font-medium text-gray-500">Категория</th>
              <th className="p-4 font-medium text-gray-500 text-right">Действия</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="p-4 font-medium">{item.title}</td>
                <td className="p-4"><span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">{item.category}</span></td>
                <td className="p-4 text-right">
                  <div className="flex gap-1 justify-end">
                    <button onClick={() => { openForm(item); }} className="p-2 text-gray-400 hover:text-accent transition-colors"><Pencil size={16} /></button>
                    <button onClick={() => { deleteItem("portfolio", item.id); refresh(); }} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {items.length === 0 && <tr><td colSpan={3} className="p-8 text-center text-gray-400">Нет работ. Добавьте первую.</td></tr>}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
