export default function HubSectionLabel({ children, accentColor }) {
  return <p className="text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: accentColor }}>{children}</p>;
}
