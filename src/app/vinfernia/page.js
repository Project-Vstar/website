/* eslint-disable react/prop-types */
"use client";
import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import talentsData from "@/app/talents/data.json";

// ─────────────────────────────────────────────────────────────────────────────
// THEME
// ─────────────────────────────────────────────────────────────────────────────
const THEME = {
  accentText: "#f87171",
  tagline:    "Where darkness meets destiny.",
  logo:       "/VINFERNIA/VINFERNIA/Vinfernia_White.png",
  logoGlow:   "rgba(239,68,68,0.45)",
};

// ─────────────────────────────────────────────────────────────────────────────
// TALENTS — twitchId sourced from Twitch API 06/03/2026
// ─────────────────────────────────────────────────────────────────────────────
const TALENTS = [
  { 
    name: "Dee", 
    slug: "dee", 
    twitchLogin: "deeronnysynluzycy", 
    twitchId: "280221390", 
    youtubeChannelId: "UC_Yj0H5X-iKqyf2H-9v_p8g", 
    href: "/talents/dee" 
  },
  { 
    name: "DreamyDiino", 
    slug: "dreamydiino", 
    twitchLogin: "dreamydiino", 
    twitchId: "544407180", 
    youtubeChannelId: "UC-f_vUjCqfN7K7wV9lq-Iug", 
    href: "/talents/dreamydiino" 
  },
  { 
    name: "Gomifuyu", 
    slug: "gomifuyu", 
    twitchLogin: "gomifuyu", 
    twitchId: "480260091", 
    youtubeChannelId: "UCWP9UFPR9Fx1VA092gLN4Sg", 
    href: "/talents/gomifuyu" 
  },
  { 
    name: "Lee Valentine", 
    slug: "leevalentine", 
    twitchLogin: "leevalentine", 
    twitchId: "55757929", 
    youtubeChannelId: "UCe_9u_L3L7I-LIdI1BqX00A", 
    href: "/talents/leevalentine" 
  },
  { 
    name: "Lockhart", 
    slug: "lockhart", 
    twitchLogin: "lockhart", 
    twitchId: "6296507", 
    youtubeChannelId: "UC1V7WzK7lR_8_vU5lS7f4jg",
    href: "/talents/lockhart" 
  },
  { 
    name: "HieuManh", 
    slug: "hieumanh", 
    twitchLogin: "hieumanhfightervt", 
    twitchId: "865961710", 
    youtubeChannelId: "UCzP_8-r2D1e_Yn9M-qY8xSg", 
    href: "/talents/Hieumanh" 
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// API HELPERS
// ─────────────────────────────────────────────────────────────────────────────
async function fetchLiveStreams(logins) {
  if (!logins.length) return [];
  const params = logins.map((l) => `user_login=${l}`).join("&");
  try {
    const res = await fetch(`/api/twitch/streams?${params}`);
    if (!res.ok) return [];
    return (await res.json()).data ?? [];
  } catch { return []; }
}
async function fetchSchedule(broadcasterId) {
  if (!broadcasterId) return [];
  try {
    const res = await fetch(`/api/twitch/schedule?broadcaster_id=${broadcasterId}`);
    if (!res.ok) return [];
    return (await res.json()).data?.segments ?? [];
  } catch { return []; }
}
async function fetchClips(twitchLogin, limit = 2) {
  if (!twitchLogin) return [];
  try {
    const res = await fetch(`/api/twitch-clips?channel=${twitchLogin}&limit=${limit}`);
    if (!res.ok) return [];
    return (await res.json()).clips ?? [];
  } catch { return []; }
}
async function fetchYouTubeVideos(channelId, limit = 2) {
  if (!channelId) return [];
  try {
    const res = await fetch(`/api/youtube/videos?channelId=${channelId}&limit=${limit}`);
    const data = await res.json();

    // ERROR CHECK: If Google returns an error, it won't have .items
    if (data.error) {
        console.error("YouTube API Error:", data.error.message);
        return [];
    }

    return (data.items || []).map((item) => ({
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      date: new Date(item.snippet.publishedAt).toLocaleDateString("en-GB", { 
        day: 'numeric', 
        month: 'short' 
      }),
    }));
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────────────────────────────────────
function darkenHex(hex, amount = 40) {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (n >> 16) - amount);
  const g = Math.max(0, ((n >> 8) & 0xff) - amount);
  const b = Math.max(0, (n & 0xff) - amount);
  return `rgb(${r},${g},${b})`;
}
function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}
function formatTime(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');

  .vhub-gradient {
    background:
      radial-gradient(ellipse 80% 60% at 20% 0%,  rgba(239,68,68,0.12) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 80% 100%, rgba(185,28,28,0.08) 0%, transparent 60%),
      #0f172a;
  }
  .vhub-grid {
    background-image:
      linear-gradient(rgba(239,68,68,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(239,68,68,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .vhub-fade { opacity: 0; animation: vhubFadeUp 0.7s ease forwards; }
  .vhub-fade-1 { animation-delay: 0.10s; }
  .vhub-fade-2 { animation-delay: 0.25s; }
  .vhub-fade-3 { animation-delay: 0.40s; }
  .vhub-fade-4 { animation-delay: 0.55s; }
  @keyframes vhubFadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .live-dot {
    width: 8px; height: 8px; border-radius: 50%; background: #ef4444;
    animation: livePulse 1.8s ease-in-out infinite;
  }
  @keyframes livePulse {
    0%   { box-shadow: 0 0 0 0   rgba(239,68,68,0.6); }
    70%  { box-shadow: 0 0 0 8px rgba(239,68,68,0);   }
    100% { box-shadow: 0 0 0 0   rgba(239,68,68,0);   }
  }
  .clip-card { transition: transform 0.25s ease; }
  .clip-card:hover { transform: translateY(-3px); }
  .clip-card:hover .clip-overlay { opacity: 1; }
  .clip-overlay { opacity: 0; transition: opacity 0.2s ease; background: rgba(239,68,68,0.25); }
  .schedule-row { transition: background 0.2s ease; }
  .schedule-row:hover { background: rgba(239,68,68,0.06); }
  .vhub-divider { height:1px; background: linear-gradient(90deg,transparent,rgba(239,68,68,0.3),transparent); }
  .vhub-scroll::-webkit-scrollbar { height: 4px; }
  .vhub-scroll::-webkit-scrollbar-thumb { background: rgba(239,68,68,0.3); border-radius: 2px; }
`;

// ─────────────────────────────────────────────────────────────────────────────
// GENMATE TALENT CARD — exact copy from talent pages
// ─────────────────────────────────────────────────────────────────────────────
const GenmateTalentCard = memo(function GenmateTalentCard({ talent, groupConfig, liveBadge }) {
  const [hovered, setHovered] = useState(false);
  const theme = talent.themeColor || "#334155";
  const dark  = darkenHex(theme, 50);
  const glow  = `0 0 28px ${theme}99, 0 0 8px ${theme}55`;

  return (
    <a href={`https://vstarproject.eu${talent.href}`} className="group flex flex-col items-center w-full"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="relative overflow-hidden rounded-2xl w-full aspect-square"
        style={{
          backgroundColor: theme,
          boxShadow:  hovered ? glow : "0 4px 24px rgba(0,0,0,0.4)",
          transform:  hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
        }}>
        {groupConfig?.logo && (<>
          <img src={groupConfig.logo} alt="" aria-hidden="true" className="absolute pointer-events-none select-none"
            style={{ width:"130%",height:"130%",top:"-15%",left:"-15%",objectFit:"contain",opacity:0.12,filter:"brightness(0) invert(0)",mixBlendMode:"multiply" }} />
          <img src={groupConfig.logo} alt="" aria-hidden="true" className="absolute pointer-events-none select-none"
            style={{ width:"130%",height:"130%",top:"-15%",left:"-15%",objectFit:"contain",opacity:0.18,filter:"brightness(0)" }} />
        </>)}
        <img src={talent.char} alt={talent.name} className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: talent.objectPosition || "50% 20%",
            transform: `scale(${hovered ? (talent.imageScale||1)*1.08+0.08 : (talent.imageScale||1)*1.08})`,
            transition: "transform 0.4s ease",
          }} />
        <div className="absolute inset-0 rounded-2xl"
          style={{ background:`radial-gradient(ellipse at center, transparent 40%, ${dark}88 100%)`, opacity: hovered?1:0, transition:"opacity 0.3s ease" }} />
        {liveBadge && (
          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full"
            style={{ background: "rgba(239,68,68,0.92)" }}>
            <div className="live-dot" style={{ width:6, height:6 }} />
            <span className="text-white text-[9px] font-bold uppercase tracking-wider">Live</span>
          </div>
        )}
      </div>
      <p className="mt-3 text-sm font-semibold text-center tracking-wide text-slate-200 transition-all duration-300"
        style={{ textShadow: hovered ? `0 0 8px ${theme}, 0 0 20px ${theme}88` : "none" }}>
        {talent.name}
      </p>
    </a>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// SMALL COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return <p className="text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color:"rgba(239,68,68,0.7)" }}>{children}</p>;
}
function SectionHeading({ children }) {
  return <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase mb-2 text-white">{children}</h2>;
}
function Spinner({ color = "#ef4444" }) {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-8 h-8 rounded-full border-2 animate-spin"
        style={{ borderColor:`${color}30`, borderTopColor:color }} />
    </div>
  );
}
function EmptyState({ icon, label, sub }) {
  return (
    <div className="text-center py-16 text-slate-600">
      <p className="text-4xl mb-4">{icon}</p>
      <p className="text-sm uppercase tracking-widest">{label}</p>
      {sub && <p className="text-xs text-slate-700 mt-2">{sub}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LIVE BANNER
// ─────────────────────────────────────────────────────────────────────────────
function LiveNowBanner({ streams }) {
  if (!streams.length) return null;
  return (
    <div className="w-full py-3 px-4 flex items-center gap-3 overflow-x-auto vhub-scroll"
      style={{ background:"rgba(239,68,68,0.08)", borderBottom:"1px solid rgba(239,68,68,0.2)" }}>
      <div className="flex items-center gap-2 shrink-0">
        <div className="live-dot" />
        <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color:"#ef4444" }}>Live Now</span>
      </div>
      <div className="flex gap-3 overflow-x-auto vhub-scroll">
        {streams.map((s) => {
          const t = TALENTS.find((t) => t.twitchLogin.toLowerCase() === s.user_login.toLowerCase());
          return (
            <a key={s.id} href={`https://twitch.tv/${s.user_login}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 shrink-0 px-3 py-1 rounded-full border text-xs font-medium transition-all hover:scale-105"
              style={{ borderColor:"rgba(239,68,68,0.4)", color:"#f87171", background:"rgba(0,0,0,0.3)" }}>
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

// ─────────────────────────────────────────────────────────────────────────────
// CLIP / YOUTUBE CARDS
// ─────────────────────────────────────────────────────────────────────────────
function ClipCard({ clip, talentName, talentColor }) {
  return (
    <a href={clip.url} target="_blank" rel="noopener noreferrer"
      className="clip-card block rounded-xl overflow-hidden" style={{ border:"1px solid rgba(255,255,255,0.07)" }}>
      <div className="relative aspect-video overflow-hidden" style={{ background:"#1e293b" }}>
        {clip.thumbnail && <img src={clip.thumbnail} alt={clip.title} className="w-full h-full object-cover" />}
        <div className="clip-overlay absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background:"rgba(239,68,68,0.9)" }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        {clip.duration && <span className="absolute bottom-2 right-2 text-[10px] bg-black/70 text-white px-1.5 py-0.5 rounded">{clip.duration}</span>}
      </div>
      <div className="p-3" style={{ background:"rgba(15,23,42,0.9)" }}>
        <p className="text-[10px] uppercase tracking-widest mb-1 font-bold" style={{ color:talentColor??"#ef4444" }}>{talentName}</p>
        <p className="text-sm text-white font-medium leading-snug line-clamp-2">{clip.title}</p>
        {clip.views && <p className="text-xs text-slate-500 mt-1">{clip.views} views</p>}
      </div>
    </a>
  );
}
function YouTubeCard({ video, talentName, talentColor }) {
  return (
    <a href={video.url} target="_blank" rel="noopener noreferrer"
      className="clip-card block rounded-xl overflow-hidden" style={{ border:"1px solid rgba(255,255,255,0.07)" }}>
      <div className="relative aspect-video overflow-hidden" style={{ background:"#1e293b" }}>
        {video.thumbnail && <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />}
        <div className="clip-overlay absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background:"rgba(255,0,0,0.85)" }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <span className="absolute top-2 left-2 text-[9px] bg-red-600/90 text-white px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">YouTube</span>
      </div>
      <div className="p-3" style={{ background:"rgba(15,23,42,0.9)" }}>
        <p className="text-[10px] uppercase tracking-widest mb-1 font-bold" style={{ color:talentColor??"#ef4444" }}>{talentName}</p>
        <p className="text-sm text-white font-medium leading-snug line-clamp-2">{video.title}</p>
        {video.date && <p className="text-xs text-slate-500 mt-1">{video.date}</p>}
      </div>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCHEDULE ROW
// ─────────────────────────────────────────────────────────────────────────────
function ScheduleRow({ segment, talent }) {
  return (
    <div className="schedule-row flex items-center gap-4 px-4 py-3"
      style={{ borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
      <div className="shrink-0 w-20 text-center">
        <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color:"#f87171" }}>{formatDate(segment.start_time)}</p>
        <p className="text-xs text-slate-400">{formatTime(segment.start_time)}{segment.end_time?` – ${formatTime(segment.end_time)}`:""}</p>
      </div>
      <div className="shrink-0 w-2 h-2 rounded-full" style={{ background:talent?.themeColor??"#ef4444" }} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white font-medium truncate">{segment.title??"Stream"}</p>
        <p className="text-[11px] text-slate-500">{talent?.name??""}{segment.category?.name?` · ${segment.category.name}`:""}</p>
      </div>
      {talent && (
        <a href={`https://twitch.tv/${talent.twitchLogin}`} target="_blank" rel="noopener noreferrer"
          className="shrink-0 text-[10px] uppercase tracking-widest font-bold hover:opacity-80"
          style={{ color:"rgba(239,68,68,0.6)" }}>
          Twitch →
        </a>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function VinferniaHubPage() {
  const [liveStreams, setLiveStreams] = useState([]);
  const [schedule,   setSchedule]   = useState([]);
  const [clips,      setClips]      = useState([]);
  const [ytVideos,   setYtVideos]   = useState([]);
  const [loading,    setLoading]    = useState({ live:true, schedule:true, clips:true });
  const intervalRef = useRef(null);

  const vinferniaGroupConfig = talentsData.generations.find((g) => g.id === "vinfernia");
  const rosterTalents = talentsData.talents.filter((t) => t.groups.includes("vinfernia"));

  const refreshLive = useCallback(async () => {
    const streams = await fetchLiveStreams(TALENTS.map((t) => t.twitchLogin));
    setLiveStreams(streams);
    setLoading((p) => ({ ...p, live:false }));
  }, []);

  const refreshSchedule = useCallback(async () => {
    const all = [];
    for (const talent of TALENTS) {
      if (!talent.twitchId) continue;
      const segs = await fetchSchedule(talent.twitchId);
      const now = new Date();
      segs.filter((s) => new Date(s.start_time) > now).slice(0, 3)
        .forEach((seg) => all.push({ segment:seg, talent }));
    }
    all.sort((a,b) => new Date(a.segment.start_time) - new Date(b.segment.start_time));
    setSchedule(all.slice(0, 10));
    setLoading((p) => ({ ...p, schedule:false }));
  }, []);

  const refreshContent = useCallback(async () => {
    const allClips = [];
    for (const talent of TALENTS) {
      const c = await fetchClips(talent.twitchLogin, 2);
      c.forEach((clip) => allClips.push({ clip, talent }));
    }
    setClips(allClips.slice(0, 8));
    const allYt = [];
    for (const talent of TALENTS) {
      if (!talent.youtubeChannelId) continue;
      const vids = await fetchYouTubeVideos(talent.youtubeChannelId, 2);
      vids.forEach((v) => allYt.push({ video:v, talent }));
    }
    setYtVideos(allYt.slice(0, 4));
    setLoading((p) => ({ ...p, clips:false }));
  }, []);

  useEffect(() => {
    refreshLive(); refreshSchedule(); refreshContent();
    intervalRef.current = setInterval(refreshLive, 60000);
    return () => clearInterval(intervalRef.current);
  }, [refreshLive, refreshSchedule, refreshContent]);

  const liveLogins = new Set(liveStreams.map((s) => s.user_login.toLowerCase()));

  const allVideos = [];
  const maxLen = Math.max(clips.length, ytVideos.length);
  for (let i = 0; i < maxLen; i++) {
    if (clips[i])    allVideos.push({ type:"clip", ...clips[i] });
    if (ytVideos[i]) allVideos.push({ type:"yt",   ...ytVideos[i] });
  }
  return (
    <div className="flex flex-col min-h-screen text-white" style={{ background:"#0f172a" }}>
      <style>{globalStyles}</style>
      <Header baseUrl="https://vstarproject.eu" />
      {!loading.live && <LiveNowBanner streams={liveStreams} />}

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="vhub-gradient relative min-h-[60vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden py-24">
          <div className="vhub-grid absolute inset-0 pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%)" }} />
          <div className="vhub-fade vhub-fade-1 relative z-10 mb-8">
            <Image src={THEME.logo} alt="VINFERNIA" width={80} height={80} priority
              className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto"
              style={{ filter:`drop-shadow(0 0 28px ${THEME.logoGlow})` }} />
          </div>
          <h1 className="vhub-fade vhub-fade-2 relative z-10 font-oswald font-bold uppercase tracking-tight leading-none mb-3"
            style={{ fontSize:"clamp(3rem,10vw,7rem)", color:"#f87171" }}>
            VINFERNIA
          </h1>
          <p className="vhub-fade vhub-fade-3 relative z-10 text-slate-400 text-sm md:text-base tracking-[0.25em] uppercase mb-6 font-light">
            {THEME.tagline}
          </p>
          {liveStreams.length > 0 && (
            <div className="vhub-fade vhub-fade-4 relative z-10 flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.3)" }}>
              <div className="live-dot" />
              <span className="text-sm font-semibold" style={{ color:"#f87171" }}>
                {liveStreams.length} talent{liveStreams.length !== 1 ? "s" : ""} live now
              </span>
            </div>
          )}
        </section>

        {/* ── Roster ── */}
        <section className="px-6 py-20" style={{ background:"#0f172a" }}>
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <SectionLabel>Roster</SectionLabel>
              <SectionHeading>Talents</SectionHeading>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto w-full">
              {rosterTalents.map((talent) => {
                const meta = TALENTS.find((t) => t.name === talent.name);
                return (
                  <GenmateTalentCard
                    key={talent.name}
                    talent={talent}
                    groupConfig={vinferniaGroupConfig}
                    liveBadge={liveLogins.has(meta?.twitchLogin?.toLowerCase() ?? "")}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <div className="vhub-divider mx-6" />

        {/* ── Schedule ── */}
        <section className="px-6 py-20" style={{ background:"#0f172a" }}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <SectionLabel>Upcoming</SectionLabel>
              <SectionHeading>Schedule</SectionHeading>
            </div>
            {loading.schedule ? <Spinner /> : schedule.length === 0 ? (
              <div className="rounded-2xl py-20 text-center text-slate-700"
                style={{ border:"1px dashed rgba(59,130,246,0.15)" }}>
                <p className="text-4xl mb-4">✦</p>
                <p className="text-sm uppercase tracking-widest">VINFERNIA schedule coming soon</p>
              </div>            ) : (
              <div className="rounded-2xl overflow-hidden" style={{ border:"1px solid rgba(239,68,68,0.15)" }}>
                {schedule.map((item,i) => <ScheduleRow key={i} segment={item.segment} talent={item.talent} />)}
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {TALENTS.map((t) => (
                <a key={t.slug} href={`https://twitch.tv/${t.twitchLogin}/schedule`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full transition-all hover:opacity-80"
                  style={{ border:"1px solid rgba(239,68,68,0.25)", color:"#f87171", background:"rgba(239,68,68,0.05)" }}>
                  {t.name} →
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="vhub-divider mx-6" />

        {/* ── Videos & Clips ── */}
        <section className="px-6 py-20" style={{ background:"#0f172a" }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <SectionLabel>Content</SectionLabel>
              <SectionHeading>Latest Videos & Clips</SectionHeading>
            </div>
            {loading.clips ? <Spinner /> : allVideos.length === 0 ? (
              <div className="rounded-2xl py-20 text-center text-slate-700"
                style={{ border:"1px dashed rgba(59,130,246,0.15)" }}>
                <p className="text-4xl mb-4">✦</p>
                <p className="text-sm uppercase tracking-widest">VINFERNIA content coming soon</p>
              </div>            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {allVideos.map((item,i) => {
                  const color = talentsData.talents.find((t) => t.name === item.talent.name)?.themeColor;
                  return item.type === "clip"
                    ? <ClipCard   key={`c-${i}`} clip={item.clip}    talentName={item.talent.name} talentColor={color} />
                    : <YouTubeCard key={`y-${i}`} video={item.video}  talentName={item.talent.name} talentColor={color} />;
                })}
              </div>
            )}
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section className="px-6 py-16 text-center"
          style={{ background:"linear-gradient(to bottom, #0f172a, rgba(239,68,68,0.06), #0f172a)" }}>
          <div className="max-w-xl mx-auto">
            <SectionLabel>Explore More</SectionLabel>
            <h2 className="font-oswald text-3xl font-bold uppercase mb-6 text-white">See All Talents</h2>
            <a href="https://vstarproject.eu/talents"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105"
              style={{ background:"rgba(239,68,68,0.15)", border:"1px solid rgba(239,68,68,0.4)", color:"#f87171" }}>
              All Talents →
            </a>
          </div>
        </section>

      </main>
      <Footer baseUrl="https://vstarproject.eu" />
    </div>
  );
}