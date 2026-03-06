/* eslint-disable react/prop-types */
"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

// ─────────────────────────────────────────────────────────────────────────────
// THEME
// ─────────────────────────────────────────────────────────────────────────────
const THEME = {
  accent:     "#ef4444",
  accentText: "#f87171",
  label:      "VINFERNIA",
  tagline:    "Where darkness meets destiny.",
  logo:       "/VINFERNIA/VINFERNIA/Vinfernia_White.png",
  logoGlow:   "rgba(239,68,68,0.45)",
};

// ─────────────────────────────────────────────────────────────────────────────
// TALENTS — all data hardcoded, nothing imported at runtime
// twitchId sourced from Twitch API response 06/03/2026
// youtubeChannelId: fill in UC... IDs when available
// ─────────────────────────────────────────────────────────────────────────────
const TALENTS = [
  {
    name:             "Dee",
    slug:             "dee",
    twitchLogin:      "deeronnysynluzycy",
    twitchId:         "280221390",
    youtubeChannelId: "",
    themeColor:       "#4a5568",
    image:            "/VINFERNIA/VINFERNIA/Genmate Banner/DeeChar.png",
    bgImage:          "/VINFERNIA/VINFERNIA/Genmate Banner/DeeBG.png",
    role:             "CEO & Management Lead",
    href:             "/talents/dee",
  },
  {
    name:             "DreamyDiino",
    slug:             "dreamydiino",
    twitchLogin:      "dreamydiino",
    twitchId:         "544407180",
    youtubeChannelId: "",
    themeColor:       "#2d6e4e",
    image:            "/VINFERNIA/VINFERNIA/Genmate Banner/DiinoChar.png",
    bgImage:          "/VINFERNIA/VINFERNIA/Genmate Banner/DiinoBG.png",
    role:             "Art Director",
    href:             "/talents/dreamydiino",
  },
  {
    name:             "Gomifuyu",
    slug:             "gomifuyu",
    twitchLogin:      "gomifuyu",
    twitchId:         "480260091",
    youtubeChannelId: "",
    themeColor:       "#8b3a3a",
    image:            "/VINFERNIA/VINFERNIA/Genmate Banner/GomiChar.png",
    bgImage:          "/VINFERNIA/VINFERNIA/Genmate Banner/GomiBG.png",
    role:             "KAIROS",
    href:             "/talents/gomifuyu",
  },
  {
    name:             "Lee Valentine",
    slug:             "leevalentine",
    twitchLogin:      "leevalentine",
    twitchId:         "55757929",
    youtubeChannelId: "",
    themeColor:       "#6b3fa0",
    image:            "/VINFERNIA/VINFERNIA/Genmate Banner/LeeChar.png",
    bgImage:          "/VINFERNIA/VINFERNIA/Genmate Banner/LeeBG.png",
    role:             "KAIROS",
    href:             "/talents/leevalentine",
  },
  {
    name:             "Lockhart",
    slug:             "lockhart",
    twitchLogin:      "lockhart",
    twitchId:         "6296507",
    youtubeChannelId: "",
    themeColor:       "#4a6741",
    image:            "/VINFERNIA/VINFERNIA/Genmate Banner/LockChar.png",
    bgImage:          "/VINFERNIA/VINFERNIA/Genmate Banner/LockBG.png",
    role:             "KAIROS",
    href:             "/talents/lockhart",
  },
  {
    name:             "HieuManh",
    slug:             "hieumanh",
    twitchLogin:      "hieumanhfightervt",
    twitchId:         "865961710",
    youtubeChannelId: "",
    themeColor:       "#3DAA6A",
    image:            "/VINFERNIA/VINFERNIA/HieuManh/Hieumanh_default.png",
    bgImage:          "/VINFERNIA/VINFERNIA/HieuManh/background.png",
    role:             "KAIROS",
    href:             "/talents/Hieumanh",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// API HELPERS — matches your existing route signatures
// ─────────────────────────────────────────────────────────────────────────────

// GET /api/twitch-clips?channel=LOGIN&limit=N  → { clips: [...] }
async function fetchClips(twitchLogin, limit = 2) {
  if (!twitchLogin) return [];
  try {
    const res = await fetch(`/api/twitch-clips?channel=${twitchLogin}&limit=${limit}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.clips ?? [];
  } catch { return []; }
}

// GET /api/youtube/videos?channelId=UC...&limit=N  → { videos: [...] }
async function fetchYouTubeVideos(channelId, limit = 2) {
  if (!channelId) return [];
  try {
    const res = await fetch(`/api/youtube/videos?channelId=${channelId}&limit=${limit}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.videos ?? [];
  } catch { return []; }
}

// GET /api/twitch/streams?user_login=A&user_login=B  → { data: [...] }
// Adjust path to match your actual streams route if different
async function fetchLiveStreams(logins) {
  if (!logins.length) return [];
  const params = logins.map((l) => `user_login=${l}`).join("&");
  try {
    const res = await fetch(`/api/twitch/streams?${params}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.data ?? [];
  } catch { return []; }
}

// GET /api/twitch/schedule?broadcaster_id=ID  → { data: { segments: [...] } }
async function fetchSchedule(broadcasterId) {
  if (!broadcasterId) return [];
  try {
    const res = await fetch(`/api/twitch/schedule?broadcaster_id=${broadcasterId}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.data?.segments ?? [];
  } catch { return []; }
}

// ─────────────────────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────────────────────
function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    weekday: "short", day: "numeric", month: "short",
  });
}
function formatTime(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit", minute: "2-digit",
  });
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
    to   { opacity: 1; transform: translateY(0);    }
  }

  .live-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #ef4444;
    animation: livePulse 1.8s ease-in-out infinite;
  }
  @keyframes livePulse {
    0%   { box-shadow: 0 0 0 0   rgba(239,68,68,0.6); }
    70%  { box-shadow: 0 0 0 8px rgba(239,68,68,0);   }
    100% { box-shadow: 0 0 0 0   rgba(239,68,68,0);   }
  }

  .talent-card { transition: transform 0.3s ease; }
  .talent-card:hover { transform: translateY(-4px); }

  .clip-card { transition: transform 0.25s ease; }
  .clip-card:hover { transform: translateY(-3px); }
  .clip-card:hover .clip-overlay { opacity: 1; }
  .clip-overlay {
    opacity: 0; transition: opacity 0.2s ease;
    background: rgba(239,68,68,0.25);
  }

  .schedule-row { transition: background 0.2s ease; }
  .schedule-row:hover { background: rgba(239,68,68,0.06); }

  .vhub-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(239,68,68,0.3), transparent);
  }
  .vhub-scroll::-webkit-scrollbar { height: 4px; }
  .vhub-scroll::-webkit-scrollbar-thumb { background: rgba(239,68,68,0.3); border-radius: 2px; }
`;

// ─────────────────────────────────────────────────────────────────────────────
// SMALL COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.2em] mb-3"
      style={{ color: "rgba(239,68,68,0.7)" }}>
      {children}
    </p>
  );
}
function SectionHeading({ children }) {
  return (
    <h2 className="font-oswald text-3xl sm:text-4xl font-bold uppercase mb-2 text-white">
      {children}
    </h2>
  );
}
function Spinner({ color = "#ef4444" }) {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-8 h-8 rounded-full border-2 animate-spin"
        style={{ borderColor: `${color}30`, borderTopColor: color }} />
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
      style={{ background: "rgba(239,68,68,0.08)", borderBottom: "1px solid rgba(239,68,68,0.2)" }}>
      <div className="flex items-center gap-2 shrink-0">
        <div className="live-dot" />
        <span className="text-[11px] font-bold uppercase tracking-widest"
          style={{ color: "#ef4444" }}>Live Now</span>
      </div>
      <div className="flex gap-3 overflow-x-auto vhub-scroll">
        {streams.map((s) => {
          const talent = TALENTS.find(
            (t) => t.twitchLogin.toLowerCase() === s.user_login.toLowerCase()
          );
          return (
            <a key={s.id}
              href={`https://twitch.tv/${s.user_login}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 shrink-0 px-3 py-1 rounded-full border text-xs font-medium transition-all hover:scale-105"
              style={{
                borderColor: talent?.themeColor ?? "rgba(239,68,68,0.4)",
                color:       talent?.themeColor ?? "#f87171",
                background:  "rgba(0,0,0,0.3)",
              }}>
              <span>{talent?.name ?? s.user_name}</span>
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
// TALENT CARD
// ─────────────────────────────────────────────────────────────────────────────
function TalentCard({ talent, isLive }) {
  return (
    <Link href={talent.href}
      className="talent-card group relative block rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="relative w-full aspect-[3/4] overflow-hidden"
        style={{ background: "#0f172a" }}>
        <img src={talent.bgImage} alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105" />
        <img src={talent.image} alt={talent.name}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          style={{ filter: `drop-shadow(0 0 20px ${talent.themeColor}40)` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        {isLive && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full"
            style={{ background: "rgba(239,68,68,0.9)" }}>
            <div className="live-dot" style={{ width: 6, height: 6 }} />
            <span className="text-white text-[10px] font-bold uppercase tracking-wider">Live</span>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[10px] uppercase tracking-widest mb-0.5 font-bold"
          style={{ color: talent.themeColor }}>{talent.role}</p>
        <p className="font-oswald text-lg font-bold text-white tracking-wide">{talent.name}</p>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CLIP CARD  (matches your API response shape: title, url, thumbnail, views, duration)
// ─────────────────────────────────────────────────────────────────────────────
function ClipCard({ clip, talentName, talentColor }) {
  return (
    <a href={clip.url} target="_blank" rel="noopener noreferrer"
      className="clip-card block rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="relative aspect-video overflow-hidden" style={{ background: "#1e293b" }}>
        {clip.thumbnail && (
          <img src={clip.thumbnail} alt={clip.title} className="w-full h-full object-cover" />
        )}
        <div className="clip-overlay absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "rgba(239,68,68,0.9)" }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {clip.duration && (
          <span className="absolute bottom-2 right-2 text-[10px] bg-black/70 text-white px-1.5 py-0.5 rounded">
            {clip.duration}
          </span>
        )}
      </div>
      <div className="p-3" style={{ background: "rgba(15,23,42,0.9)" }}>
        <p className="text-[10px] uppercase tracking-widest mb-1 font-bold"
          style={{ color: talentColor ?? "#ef4444" }}>{talentName}</p>
        <p className="text-sm text-white font-medium leading-snug line-clamp-2">{clip.title}</p>
        {clip.views && <p className="text-xs text-slate-500 mt-1">{clip.views} views</p>}
      </div>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// YOUTUBE CARD  (matches your API response shape: id, title, thumbnail, url, date)
// ─────────────────────────────────────────────────────────────────────────────
function YouTubeCard({ video, talentName, talentColor }) {
  return (
    <a href={video.url} target="_blank" rel="noopener noreferrer"
      className="clip-card block rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="relative aspect-video overflow-hidden" style={{ background: "#1e293b" }}>
        {video.thumbnail && (
          <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
        )}
        <div className="clip-overlay absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,0,0,0.85)" }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <span className="absolute top-2 left-2 text-[9px] bg-red-600/90 text-white px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">
          YouTube
        </span>
      </div>
      <div className="p-3" style={{ background: "rgba(15,23,42,0.9)" }}>
        <p className="text-[10px] uppercase tracking-widest mb-1 font-bold"
          style={{ color: talentColor ?? "#ef4444" }}>{talentName}</p>
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
      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="shrink-0 w-20 text-center">
        <p className="text-[11px] font-bold uppercase tracking-wider"
          style={{ color: THEME.accentText }}>{formatDate(segment.start_time)}</p>
        <p className="text-xs text-slate-400">
          {formatTime(segment.start_time)}
          {segment.end_time ? ` – ${formatTime(segment.end_time)}` : ""}
        </p>
      </div>
      <div className="shrink-0 w-2 h-2 rounded-full"
        style={{ background: talent?.themeColor ?? "#ef4444" }} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white font-medium truncate">{segment.title ?? "Stream"}</p>
        <p className="text-[11px] text-slate-500">
          {talent?.name ?? ""}
          {segment.category?.name ? ` · ${segment.category.name}` : ""}
        </p>
      </div>
      {talent && (
        <a href={`https://twitch.tv/${talent.twitchLogin}`}
          target="_blank" rel="noopener noreferrer"
          className="shrink-0 text-[10px] uppercase tracking-widest font-bold hover:opacity-80"
          style={{ color: "rgba(239,68,68,0.6)" }}>
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
  const [loading,    setLoading]    = useState({ live: true, schedule: true, clips: true });
  const intervalRef = useRef(null);

  // ── Live — poll every 60s ─────────────────────────────────────────────────
  const refreshLive = useCallback(async () => {
    const logins = TALENTS.map((t) => t.twitchLogin).filter(Boolean);
    const streams = await fetchLiveStreams(logins);
    setLiveStreams(streams);
    setLoading((p) => ({ ...p, live: false }));
  }, []);

  // ── Schedule ──────────────────────────────────────────────────────────────
  const refreshSchedule = useCallback(async () => {
    const all = [];
    for (const talent of TALENTS) {
      if (!talent.twitchId) continue;
      const segs = await fetchSchedule(talent.twitchId);
      const now = new Date();
      segs
        .filter((s) => new Date(s.start_time) > now)
        .slice(0, 3)
        .forEach((seg) => all.push({ segment: seg, talent }));
    }
    all.sort((a, b) => new Date(a.segment.start_time) - new Date(b.segment.start_time));
    setSchedule(all.slice(0, 10));
    setLoading((p) => ({ ...p, schedule: false }));
  }, []);

  // ── Clips + YouTube ───────────────────────────────────────────────────────
  const refreshContent = useCallback(async () => {
    // Twitch clips
    const allClips = [];
    for (const talent of TALENTS) {
      if (!talent.twitchLogin) continue;
      const c = await fetchClips(talent.twitchLogin, 2);
      c.forEach((clip) => allClips.push({ clip, talent }));
    }
    setClips(allClips.slice(0, 8));

    // YouTube
    const allYt = [];
    for (const talent of TALENTS) {
      if (!talent.youtubeChannelId) continue;
      const vids = await fetchYouTubeVideos(talent.youtubeChannelId, 2);
      vids.forEach((v) => allYt.push({ video: v, talent }));
    }
    allYt.sort(
      (a, b) => new Date(b.video.date ?? 0) - new Date(a.video.date ?? 0)
    );
    setYtVideos(allYt.slice(0, 4));
    setLoading((p) => ({ ...p, clips: false }));
  }, []);

  useEffect(() => {
    refreshLive();
    refreshSchedule();
    refreshContent();
    intervalRef.current = setInterval(refreshLive, 60000);
    return () => clearInterval(intervalRef.current);
  }, [refreshLive, refreshSchedule, refreshContent]);

  const liveLogins = new Set(liveStreams.map((s) => s.user_login.toLowerCase()));

  // Interleave clips + YT
  const allVideos = [];
  const maxLen = Math.max(clips.length, ytVideos.length);
  for (let i = 0; i < maxLen; i++) {
    if (clips[i])    allVideos.push({ type: "clip", ...clips[i] });
    if (ytVideos[i]) allVideos.push({ type: "yt",   ...ytVideos[i] });
  }

  return (
    <div className="flex flex-col min-h-screen text-white" style={{ background: "#0f172a" }}>
      <style>{globalStyles}</style>
      <Header />

      {!loading.live && <LiveNowBanner streams={liveStreams} />}

      <main className="flex-grow">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="vhub-gradient relative min-h-[60vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden py-24">
          <div className="vhub-grid absolute inset-0 pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%)" }} />

          <div className="vhub-fade vhub-fade-1 relative z-10 mb-8">
            <Image src={THEME.logo} alt="VINFERNIA" width={80} height={80} priority
              className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto"
              style={{ filter: `drop-shadow(0 0 28px ${THEME.logoGlow})` }} />
          </div>

          <h1 className="vhub-fade vhub-fade-2 relative z-10 font-oswald font-bold uppercase tracking-tight leading-none mb-3"
            style={{ fontSize: "clamp(3rem,10vw,7rem)", color: "#f87171" }}>
            VINFERNIA
          </h1>

          <p className="vhub-fade vhub-fade-3 relative z-10 text-slate-400 text-sm md:text-base tracking-[0.25em] uppercase mb-6 font-light">
            {THEME.tagline}
          </p>

          {liveStreams.length > 0 && (
            <div className="vhub-fade vhub-fade-4 relative z-10 flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
              <div className="live-dot" />
              <span className="text-sm font-semibold" style={{ color: "#f87171" }}>
                {liveStreams.length} talent{liveStreams.length !== 1 ? "s" : ""} live now
              </span>
            </div>
          )}
        </section>

        {/* ── Roster ────────────────────────────────────────────────────── */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <SectionLabel>Roster</SectionLabel>
              <SectionHeading>Talents</SectionHeading>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {TALENTS.map((talent) => (
                <TalentCard key={talent.slug} talent={talent}
                  isLive={liveLogins.has(talent.twitchLogin.toLowerCase())} />
              ))}
            </div>
          </div>
        </section>

        <div className="vhub-divider mx-6" />

        {/* ── Schedule ──────────────────────────────────────────────────── */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <SectionLabel>Upcoming</SectionLabel>
              <SectionHeading>Schedule</SectionHeading>
            </div>

            {loading.schedule ? (
              <Spinner />
            ) : schedule.length === 0 ? (
              <EmptyState icon="📅" label="No upcoming schedule found"
                sub="Talents may not have set Twitch schedules yet." />
            ) : (
              <div className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(239,68,68,0.15)" }}>
                {schedule.map((item, i) => (
                  <ScheduleRow key={i} segment={item.segment} talent={item.talent} />
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {TALENTS.map((t) => (
                <a key={t.slug}
                  href={`https://twitch.tv/${t.twitchLogin}/schedule`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full transition-all hover:opacity-80"
                  style={{
                    border:     `1px solid ${t.themeColor}40`,
                    color:      t.themeColor,
                    background: `${t.themeColor}0d`,
                  }}>
                  {t.name} →
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="vhub-divider mx-6" />

        {/* ── Videos & Clips ────────────────────────────────────────────── */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <SectionLabel>Content</SectionLabel>
              <SectionHeading>Latest Videos & Clips</SectionHeading>
            </div>

            {loading.clips ? (
              <Spinner />
            ) : allVideos.length === 0 ? (
              <EmptyState icon="🎬" label="No videos found"
                sub="Add YouTube channel IDs to the TALENTS config to show YouTube uploads." />
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {allVideos.map((item, i) =>
                  item.type === "clip" ? (
                    <ClipCard key={`c-${i}`} clip={item.clip}
                      talentName={item.talent.name} talentColor={item.talent.themeColor} />
                  ) : (
                    <YouTubeCard key={`y-${i}`} video={item.video}
                      talentName={item.talent.name} talentColor={item.talent.themeColor} />
                  )
                )}
              </div>
            )}
          </div>
        </section>

        {/* ── Footer CTA ────────────────────────────────────────────────── */}
        <section className="px-6 py-16 text-center"
          style={{ background: "linear-gradient(to bottom, #0f172a, rgba(239,68,68,0.06), #0f172a)" }}>
          <div className="max-w-xl mx-auto">
            <SectionLabel>Explore More</SectionLabel>
            <h2 className="font-oswald text-3xl font-bold uppercase mb-6 text-white">See All Talents</h2>
            <Link href="/talents"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105"
              style={{
                background: "rgba(239,68,68,0.15)",
                border:     "1px solid rgba(239,68,68,0.4)",
                color:      "#f87171",
              }}>
              All Talents →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}