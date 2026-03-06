/* eslint-disable react/prop-types */
"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

import talentsData from "@/app/talents/data.json";
import dreamydiino from "@/app/talents/dreamydiino/data.json";
import gomifuyu from "@/app/talents/gomifuyu/data.json";
import leevalentine from "@/app/talents/leevalentine/data.json";
import lockhart from "@/app/talents/lockhart/data.json";
import hieumanh from "@/app/talents/hieumanh/data.json";
import dee from "@/app/talents/dee/data.json";

// ─────────────────────────────────────────────────────────────────────────────
// THEME
// ─────────────────────────────────────────────────────────────────────────────
const THEME = {
  accent: "#3b82f6",
  accentDim: "rgba(59,130,246,0.15)",
  accentBorder: "rgba(59,130,246,0.25)",
  accentGlow: "rgba(59,130,246,0.35)",
  accentText: "#93c5fd",
  label: "VSTAR",
  tagline: "Rise to your star.",
  logo: "/VSTAR/VSTAR.png",
  logoGlow: "rgba(59,130,246,0.45)",
};

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG — fill in VSTAR talents below
// ─────────────────────────────────────────────────────────────────────────────
const TALENTS = [
  // Example structure — replace with real VSTAR talent data:
  // {
  //   name: "Talent Name",
  //   slug: "talentslug",
  //   twitchLogin: "twitchloginname",
  //   twitchId: "123456789",        // numeric broadcaster ID from Twitch
  //   youtubeChannelId: "UCxxxxxx", // optional
  //   themeColor: "#hexcolor",
  //   image: "/VSTAR/TalentName/char.png",
  //   bgImage: "/VSTAR/TalentName/bg.png",
  //   role: "Their Title",
  // },
];

// ─────────────────────────────────────────────────────────────────────────────
// TWITCH API HELPERS — same proxy routes as VINFERNIA hub
// ─────────────────────────────────────────────────────────────────────────────
async function fetchLiveStreams(logins) {
  if (!logins.length) return [];
  const params = logins.map((l) => `user_login=${l}`).join("&");
  try {
    const res = await fetch(`/api/twitch/streams?${params}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.data ?? [];
  } catch {
    return [];
  }
}

async function fetchSchedule(broadcasterId) {
  if (!broadcasterId) return [];
  try {
    const res = await fetch(`/api/twitch/schedule?broadcaster_id=${broadcasterId}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.data?.segments ?? [];
  } catch {
    return [];
  }
}

async function fetchClips(broadcasterId, limit = 4) {
  if (!broadcasterId) return [];
  try {
    const res = await fetch(`/api/twitch/clips?broadcaster_id=${broadcasterId}&first=${limit}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.data ?? [];
  } catch {
    return [];
  }
}

async function fetchYouTubeVideos(channelId, limit = 4) {
  if (!channelId) return [];
  try {
    const res = await fetch(`/api/youtube/videos?channelId=${channelId}&maxResults=${limit}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.items ?? [];
  } catch {
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────────────────────
function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}

function formatTime(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function formatViews(n) {
  if (!n) return "0";
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return String(n);
}

// ─────────────────────────────────────────────────────────────────────────────
// GLOBAL STYLES — blue palette variant
// ─────────────────────────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');

  .vshub-gradient {
    background: radial-gradient(ellipse 80% 60% at 80% 0%, rgba(59,130,246,0.12) 0%, transparent 60%),
                radial-gradient(ellipse 60% 80% at 20% 100%, rgba(30,64,175,0.08) 0%, transparent 60%),
                #0f172a;
  }

  .vshub-grid {
    background-image:
      linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  .vshub-fade { opacity: 0; animation: vshubFadeUp 0.7s ease forwards; }
  .vshub-fade-1 { animation-delay: 0.1s; }
  .vshub-fade-2 { animation-delay: 0.25s; }
  .vshub-fade-3 { animation-delay: 0.4s; }
  .vshub-fade-4 { animation-delay: 0.55s; }
  @keyframes vshubFadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .vs-live-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #3b82f6;
    box-shadow: 0 0 0 0 rgba(59,130,246,0.6);
    animation: vsLivePulse 1.8s ease-in-out infinite;
  }
  @keyframes vsLivePulse {
    0%   { box-shadow: 0 0 0 0 rgba(59,130,246,0.6); }
    70%  { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
    100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
  }

  .vs-talent-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .vs-talent-card:hover { transform: translateY(-4px); }

  .vs-clip-card { transition: transform 0.25s ease, opacity 0.25s ease; }
  .vs-clip-card:hover { transform: translateY(-3px); }
  .vs-clip-card:hover .vs-clip-overlay { opacity: 1; }
  .vs-clip-overlay {
    opacity: 0;
    transition: opacity 0.2s ease;
    background: rgba(59,130,246,0.25);
  }

  .vs-schedule-row { transition: background 0.2s ease; }
  .vs-schedule-row:hover { background: rgba(59,130,246,0.06); }

  .vshub-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);
  }

  .vshub-scroll::-webkit-scrollbar { height: 4px; }
  .vshub-scroll::-webkit-scrollbar-track { background: transparent; }
  .vshub-scroll::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.3); border-radius: 2px; }
`;

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(59,130,246,0.7)" }}>
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

// ── Live Now Banner ────────────────────────────────────────────────────────
function LiveNowBanner({ streams }) {
  if (!streams.length) return null;
  return (
    <div
      className="w-full py-3 px-4 flex items-center gap-3 overflow-x-auto vshub-scroll"
      style={{ background: "rgba(59,130,246,0.08)", borderBottom: "1px solid rgba(59,130,246,0.2)" }}
    >
      <div className="flex items-center gap-2 shrink-0">
        <div className="vs-live-dot" />
        <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#3b82f6" }}>
          Live Now
        </span>
      </div>
      <div className="flex gap-3 overflow-x-auto vshub-scroll">
        {streams.map((s) => {
          const talent = TALENTS.find((t) => t.twitchLogin.toLowerCase() === s.user_login.toLowerCase());
          return (
            <a
              key={s.id}
              href={`https://twitch.tv/${s.user_login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 shrink-0 px-3 py-1 rounded-full border text-xs font-medium transition-all hover:scale-105"
              style={{
                borderColor: talent?.themeColor ?? "rgba(59,130,246,0.4)",
                color: talent?.themeColor ?? "#93c5fd",
                background: "rgba(0,0,0,0.3)",
              }}
            >
              <span>{talent?.name ?? s.user_name}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400 truncate max-w-[160px]">{s.game_name}</span>
              <span className="text-slate-500">·</span>
              <span>{formatViews(s.viewer_count)} viewers</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

// ── Talent Roster Card ─────────────────────────────────────────────────────
function TalentCard({ talent, isLive }) {
  return (
    <Link href={`/talents/${talent.slug}`} className="vs-talent-card group relative block rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="relative w-full aspect-[3/4] overflow-hidden" style={{ background: "#0f172a" }}>
        <img
          src={talent.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
        />
        <img
          src={talent.image}
          alt={talent.name}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          style={{ filter: `drop-shadow(0 0 20px ${talent.themeColor}40)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        {isLive && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full"
            style={{ background: "rgba(59,130,246,0.9)" }}>
            <div className="vs-live-dot" style={{ width: 6, height: 6 }} />
            <span className="text-white text-[10px] font-bold uppercase tracking-wider">Live</span>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[10px] uppercase tracking-widest mb-0.5 font-bold" style={{ color: talent.themeColor }}>
          {talent.role}
        </p>
        <p className="font-oswald text-lg font-bold text-white tracking-wide">{talent.name}</p>
      </div>
    </Link>
  );
}

// ── Clip Card ──────────────────────────────────────────────────────────────
function ClipCard({ clip, talentName, talentColor }) {
  const thumb = clip.thumbnail_url?.replace("%{width}", "480").replace("%{height}", "270") ?? "";
  return (
    <a
      href={clip.url}
      target="_blank"
      rel="noopener noreferrer"
      className="vs-clip-card block rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="relative aspect-video overflow-hidden" style={{ background: "#1e293b" }}>
        {thumb && <img src={thumb} alt={clip.title} className="w-full h-full object-cover" />}
        <div className="vs-clip-overlay absolute inset-0 flex items-center justify-center rounded-xl">
          <div className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "rgba(59,130,246,0.9)" }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {clip.duration != null && (
          <span className="absolute bottom-2 right-2 text-[10px] bg-black/70 text-white px-1.5 py-0.5 rounded">
            {Math.floor(clip.duration / 60)}:{String(clip.duration % 60).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="p-3" style={{ background: "rgba(15,23,42,0.9)" }}>
        <p className="text-[10px] uppercase tracking-widest mb-1 font-bold" style={{ color: talentColor ?? "#3b82f6" }}>
          {talentName}
        </p>
        <p className="text-sm text-white font-medium leading-snug line-clamp-2">{clip.title}</p>
        <p className="text-xs text-slate-500 mt-1">{formatViews(clip.view_count)} views</p>
      </div>
    </a>
  );
}

// ── YouTube Video Card ─────────────────────────────────────────────────────
function YouTubeCard({ video, talentName, talentColor }) {
  const videoId = video.id?.videoId ?? video.id;
  const thumb = video.snippet?.thumbnails?.medium?.url ?? "";
  const title = video.snippet?.title ?? "";
  const published = video.snippet?.publishedAt ?? "";
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="vs-clip-card block rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="relative aspect-video overflow-hidden" style={{ background: "#1e293b" }}>
        {thumb && <img src={thumb} alt={title} className="w-full h-full object-cover" />}
        <div className="vs-clip-overlay absolute inset-0 flex items-center justify-center rounded-xl">
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
        <p className="text-[10px] uppercase tracking-widest mb-1 font-bold" style={{ color: talentColor ?? "#3b82f6" }}>
          {talentName}
        </p>
        <p className="text-sm text-white font-medium leading-snug line-clamp-2">{title}</p>
        <p className="text-xs text-slate-500 mt-1">{published ? formatDate(published) : ""}</p>
      </div>
    </a>
  );
}

// ── Schedule Row ───────────────────────────────────────────────────────────
function ScheduleRow({ segment, talent }) {
  const start = segment.start_time;
  const end = segment.end_time;
  return (
    <div className="vs-schedule-row flex items-center gap-4 px-4 py-3 rounded-xl"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="shrink-0 w-20 text-center">
        <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: THEME.accentText }}>
          {formatDate(start)}
        </p>
        <p className="text-xs text-slate-400">{formatTime(start)}{end ? ` – ${formatTime(end)}` : ""}</p>
      </div>
      <div className="shrink-0 w-2 h-2 rounded-full" style={{ background: talent?.themeColor ?? "#3b82f6" }} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white font-medium truncate">{segment.title ?? "Stream"}</p>
        <p className="text-[11px] text-slate-500">{talent?.name ?? ""}{segment.category?.name ? ` · ${segment.category.name}` : ""}</p>
      </div>
      {talent && (
        <a
          href={`https://twitch.tv/${talent.twitchLogin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[10px] uppercase tracking-widest font-bold transition-colors"
          style={{ color: "rgba(59,130,246,0.6)" }}
        >
          Twitch →
        </a>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function VStarHubPage() {
  const [liveStreams, setLiveStreams] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [clips, setClips] = useState([]);
  const [ytVideos, setYtVideos] = useState([]);
  const [loading, setLoading] = useState({ live: true, schedule: true, clips: true });
  const intervalRef = useRef(null);

  const refreshLive = useCallback(async () => {
    const logins = TALENTS.map((t) => t.twitchLogin).filter(Boolean);
    const streams = await fetchLiveStreams(logins);
    setLiveStreams(streams);
    setLoading((p) => ({ ...p, live: false }));
  }, []);

  const refreshSchedule = useCallback(async () => {
    const all = [];
    for (const talent of TALENTS) {
      if (!talent.twitchId) continue;
      const segs = await fetchSchedule(talent.twitchId);
      const now = new Date();
      const upcoming = segs.filter((s) => new Date(s.start_time) > now).slice(0, 3);
      upcoming.forEach((seg) => all.push({ segment: seg, talent }));
    }
    all.sort((a, b) => new Date(a.segment.start_time) - new Date(b.segment.start_time));
    setSchedule(all.slice(0, 10));
    setLoading((p) => ({ ...p, schedule: false }));
  }, []);

  const refreshClips = useCallback(async () => {
    const all = [];
    for (const talent of TALENTS) {
      if (!talent.twitchId) continue;
      const c = await fetchClips(talent.twitchId, 2);
      c.forEach((clip) => all.push({ clip, talent }));
    }
    all.sort((a, b) => (b.clip.view_count ?? 0) - (a.clip.view_count ?? 0));
    setClips(all.slice(0, 8));
    const yt = [];
    for (const talent of TALENTS) {
      if (!talent.youtubeChannelId) continue;
      const vids = await fetchYouTubeVideos(talent.youtubeChannelId, 2);
      vids.forEach((v) => yt.push({ video: v, talent }));
    }
    yt.sort((a, b) => new Date(b.video.snippet?.publishedAt ?? 0) - new Date(a.video.snippet?.publishedAt ?? 0));
    setYtVideos(yt.slice(0, 4));
    setLoading((p) => ({ ...p, clips: false }));
  }, []);

  useEffect(() => {
    refreshLive();
    refreshSchedule();
    refreshClips();
    intervalRef.current = setInterval(refreshLive, 60000);
    return () => clearInterval(intervalRef.current);
  }, [refreshLive, refreshSchedule, refreshClips]);

  const liveLogins = new Set(liveStreams.map((s) => s.user_login.toLowerCase()));

  const allVideos = [];
  const maxLen = Math.max(clips.length, ytVideos.length);
  for (let i = 0; i < maxLen; i++) {
    if (clips[i]) allVideos.push({ type: "clip", ...clips[i] });
    if (ytVideos[i]) allVideos.push({ type: "yt", ...ytVideos[i] });
  }

  return (
    <div className="flex flex-col min-h-screen text-white" style={{ background: "#0f172a" }}>
      <style>{globalStyles}</style>
      <Header />

      {!loading.live && <LiveNowBanner streams={liveStreams} />}

      <main className="flex-grow">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="vshub-gradient relative min-h-[60vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden py-24">
          <div className="vshub-grid absolute inset-0 pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }} />
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(30,64,175,0.08) 0%, transparent 70%)" }} />

          <div className="vshub-fade vshub-fade-1 relative z-10 mb-8">
            <Image
              src={THEME.logo}
              alt="VSTAR"
              width={80}
              height={80}
              priority
              className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto"
              style={{ filter: `drop-shadow(0 0 28px ${THEME.logoGlow})` }}
            />
          </div>

          <h1 className="vshub-fade vshub-fade-2 relative z-10 font-oswald font-bold uppercase tracking-tight leading-none mb-3"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)", color: "#93c5fd" }}>
            VSTAR
          </h1>

          <p className="vshub-fade vshub-fade-3 relative z-10 text-slate-400 text-sm md:text-base tracking-[0.25em] uppercase mb-6 font-light">
            {THEME.tagline}
          </p>

          {liveStreams.length > 0 && (
            <div className="vshub-fade vshub-fade-4 relative z-10 flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}>
              <div className="vs-live-dot" />
              <span className="text-sm font-semibold" style={{ color: "#93c5fd" }}>
                {liveStreams.length} talent{liveStreams.length !== 1 ? "s" : ""} live now
              </span>
            </div>
          )}
        </section>

        {/* ── Talent Roster ─────────────────────────────────────────────── */}
        <section className="px-6 py-20" style={{ background: "#0f172a" }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <SectionLabel>Roster</SectionLabel>
              <SectionHeading>Talents</SectionHeading>
              {TALENTS.length === 0 && (
                <p className="text-slate-600 text-sm mt-2">
                  Add VSTAR talent entries to the <code className="text-slate-500">TALENTS</code> config array at the top of this file.
                </p>
              )}
            </div>
            {TALENTS.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {TALENTS.map((talent) => (
                  <TalentCard
                    key={talent.slug}
                    talent={talent}
                    isLive={liveLogins.has(talent.twitchLogin.toLowerCase())}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl py-16 text-center text-slate-700"
                style={{ border: "1px dashed rgba(59,130,246,0.15)" }}>
                <p className="text-4xl mb-4">✦</p>
                <p className="text-sm uppercase tracking-widest">VSTAR talents coming soon</p>
              </div>
            )}
          </div>
        </section>

        <div className="vshub-divider mx-6" />

        {/* ── Schedule ──────────────────────────────────────────────────── */}
        <section className="px-6 py-20" style={{ background: "#0f172a" }}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <SectionLabel>Upcoming</SectionLabel>
              <SectionHeading>Schedule</SectionHeading>
            </div>

            {loading.schedule ? (
              <div className="flex items-center justify-center py-16">
                <div className="w-8 h-8 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin" />
              </div>
            ) : schedule.length === 0 ? (
              <div className="text-center py-16 text-slate-600">
                <p className="text-4xl mb-4">📅</p>
                <p className="text-sm uppercase tracking-widest">No upcoming schedule found</p>
                <p className="text-xs text-slate-700 mt-2">Add broadcaster IDs and ensure talents have Twitch schedules set.</p>
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(59,130,246,0.15)" }}>
                {schedule.map((item, i) => (
                  <ScheduleRow key={i} segment={item.segment} talent={item.talent} />
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {TALENTS.filter((t) => t.twitchId).map((t) => (
                <a
                  key={t.slug}
                  href={`https://twitch.tv/${t.twitchLogin}/schedule`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full transition-all hover:opacity-80"
                  style={{
                    border: `1px solid ${t.themeColor}40`,
                    color: t.themeColor,
                    background: `${t.themeColor}0d`,
                  }}
                >
                  {t.name} Schedule →
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="vshub-divider mx-6" />

        {/* ── Videos & Clips ────────────────────────────────────────────── */}
        <section className="px-6 py-20" style={{ background: "#0f172a" }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <SectionLabel>Content</SectionLabel>
              <SectionHeading>Latest Videos & Clips</SectionHeading>
            </div>

            {loading.clips ? (
              <div className="flex items-center justify-center py-16">
                <div className="w-8 h-8 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin" />
              </div>
            ) : allVideos.length === 0 ? (
              <div className="text-center py-16 text-slate-600">
                <p className="text-4xl mb-4">🎬</p>
                <p className="text-sm uppercase tracking-widest">No videos found</p>
                <p className="text-xs text-slate-700 mt-2">Add broadcaster IDs and YouTube channel IDs to the config.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {allVideos.map((item, i) =>
                  item.type === "clip" ? (
                    <ClipCard
                      key={`clip-${i}`}
                      clip={item.clip}
                      talentName={item.talent.name}
                      talentColor={item.talent.themeColor}
                    />
                  ) : (
                    <YouTubeCard
                      key={`yt-${i}`}
                      video={item.video}
                      talentName={item.talent.name}
                      talentColor={item.talent.themeColor}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </section>

        {/* ── Footer CTA ────────────────────────────────────────────────── */}
        <section className="px-6 py-16 text-center"
          style={{ background: "linear-gradient(to bottom, #0f172a, rgba(59,130,246,0.06), #0f172a)" }}>
          <div className="max-w-xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(59,130,246,0.6)" }}>
              Explore More
            </p>
            <h2 className="font-oswald text-3xl font-bold uppercase mb-6 text-white">
              See All Talents
            </h2>
            <Link
              href="/talents"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105"
              style={{
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.4)",
                color: "#93c5fd",
              }}
            >
              All Talents →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}