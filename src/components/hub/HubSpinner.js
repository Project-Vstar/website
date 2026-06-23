export default function HubSpinner({ color }) {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-8 h-8 rounded-full border-2 animate-spin"
        style={{ borderColor: `${color}30`, borderTopColor: color }} />
    </div>
  );
}
