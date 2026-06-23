export default function HubEmptyState({ icon, label, sub }) {
  return (
    <div className="text-center py-16 text-slate-600">
      <p className="text-4xl mb-4">{icon}</p>
      <p className="text-sm uppercase tracking-widest">{label}</p>
      {sub && <p className="text-xs text-slate-700 mt-2">{sub}</p>}
    </div>
  );
}
