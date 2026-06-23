export default function HubClipCard({ clip, talentName, talentColor, cardClassName, overlayClassName, accentColor, fallbackColor }) {
  return (
    <a href={clip.url} target="_blank" rel="noopener noreferrer"
      className={`${cardClassName} block rounded-xl overflow-hidden`} style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="relative aspect-video overflow-hidden" style={{ background: "#1e293b" }}>
        {clip.thumbnail && <img src={clip.thumbnail} alt={clip.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />}
        <div className={`${overlayClassName} absolute inset-0 flex items-center justify-center`}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: accentColor }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>npm run lint
          npm run build
        {clip.duration && <span className="absolute bottom-2 right-2 text-[10px] bg-black/70 text-white px-1.5 py-0.5 rounded">{clip.duration}</span>}
      </div>
      <div className="p-3" style={{ background: "rgba(15,23,42,0.9)" }}>
        <p className="text-[10px] uppercase tracking-widest mb-1 font-bold" style={{ color: talentColor ?? fallbackColor }}>{talentName}</p>
        <p className="text-sm text-white font-medium leading-snug line-clamp-2">{clip.title}</p>
        {clip.views && <p className="text-xs text-slate-500 mt-1">{clip.views} views</p>}
      </div>
    </a>
  );
}
