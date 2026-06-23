import { formatDate, formatTime } from "@/lib/hub-utils";

export default function HubScheduleRow({ segment, talent, rowClassName, accentColor, accentDim, dotFallback }) {
  return (
    <div className={`${rowClassName} flex items-center gap-4 px-4 py-3`}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="shrink-0 w-20 text-center">
        <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: accentColor }}>{formatDate(segment.start_time)}</p>
        <p className="text-xs text-slate-400">{formatTime(segment.start_time)}{segment.end_time ? ` – ${formatTime(segment.end_time)}` : ""}</p>
      </div>
      <div className="shrink-0 w-2 h-2 rounded-full" style={{ background: talent?.themeColor ?? dotFallback }} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white font-medium truncate">{segment.title ?? "Stream"}</p>
        <p className="text-[11px] text-slate-500">{talent?.name ?? ""}{segment.category?.name ? ` · ${segment.category.name}` : ""}</p>
      </div>
      {talent && (
        <a href={`https://twitch.tv/${talent.twitchLogin}`} target="_blank" rel="noopener noreferrer"
          className="shrink-0 text-[10px] uppercase tracking-widest font-bold hover:opacity-80"
          style={{ color: accentDim }}>
          Twitch →
        </a>
      )}
    </div>
  );
}
