interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  color: "indigo" | "emerald" | "amber" | "sky";
}

const colorClasses = {
  indigo: "bg-indigo-50 border-indigo-200",
  emerald: "bg-emerald-50 border-emerald-200",
  amber: "bg-amber-50 border-amber-200",
  sky: "bg-sky-50 border-sky-200",
};

const valueColorClasses = {
  indigo: "text-indigo-700",
  emerald: "text-emerald-700",
  amber: "text-amber-700",
  sky: "text-sky-700",
};

export function StatCard({ title, value, subtitle, color }: StatCardProps) {
  return (
    <div className={`rounded-xl border p-6 ${colorClasses[color]}`}>
      <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
      <p className={`text-3xl font-bold ${valueColorClasses[color]}`}>{value}</p>
      <p className="text-xs text-slate-500 mt-2">{subtitle}</p>
    </div>
  );
}