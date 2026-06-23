export default function HubLiveNowBanner({ streams, talents, scrollClassName, dotClassName, accentRgb, accentColor, accentText }) {
  if (!streams.length) return null;
  return (
    <div className={`mt-16 w-full py-3 px-4 flex items-center gap-3 overflow-x-auto ${scrollClassName}`}
      style={{ background: `rgba(${accentRgb},0.08)`, borderBottom: `1px solid rgba(${accentRgb},0.2)` }}>
      <div className="flex items-center gap-2 shrink-0">
        <div className={dotClassName} />
        <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: accentColor }}>Live Now</span>
      </div>
      <div className={`flex gap-3 overflow-x-auto ${scrollClassName}`}>
        {streams.map((s) => {
          const t = talents.find((t) => t.twitchLogin.toLowerCase() === s.user_login.toLowerCase());
          return (
            <a key={s.id} href={`https://twitch.tv/${s.user_login}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 shrink-0 px-3 py-1 rounded-full border text-xs font-medium transition-all hover:scale-105"
              style={{ borderColor: `rgba(${accentRgb},0.4)`, color: accentText, background: "rgba(0,0,0,0.3)" }}>
              <span>{t?.name ?? s.user_name}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400 truncate max-w-[160px]">{s.game_name}</span>
              <span className="text-slate-500">·</span>
              <span>{s.viewer_count?.toLocaleString()} viewers</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
