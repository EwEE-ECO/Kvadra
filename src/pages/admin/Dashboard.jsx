import { useEffect, useState } from "react";
import { getAll } from "../../utils/db";
import AdminLayout from "../../components/admin/AdminLayout";
import { Wrench, FileText, Star, Image, Inbox, DollarSign } from "lucide-react";

const sections = [
  { key: "services", label: "Услуги", icon: Wrench, color: "bg-blue-500" },
  { key: "blog", label: "Статьи", icon: FileText, color: "bg-emerald-500" },
  { key: "reviews", label: "Отзывы", icon: Star, color: "bg-yellow-500" },
  { key: "portfolio", label: "Работы", icon: Image, color: "bg-purple-500" },
  { key: "leads", label: "Заявки", icon: Inbox, color: "bg-rose-500" },
  { key: "prices", label: "Цены", icon: DollarSign, color: "bg-cyan-500" },
];

export default function Dashboard() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const data = {};
    sections.forEach((s) => {
      const items = getAll(s.key);
      data[s.key] = items ? items.length : 0;
    });
    setCounts(data);
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Дашборд</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.key} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{counts[s.key] ?? "—"}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AdminLayout>
  );
}
