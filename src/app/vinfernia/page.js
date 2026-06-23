"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import talentsData from "@/app/talents/data.json";
import HubTalentCard from "@/components/hub/HubTalentCard";
import { fetchLiveStreams, fetchSchedule, fetchClips, fetchYouTubeVideos } from "@/lib/hub-fetch";
import HubSectionLabel from "@/components/hub/HubSectionLabel";
import HubSectionHeading from "@/components/hub/HubSectionHeading";
import HubSpinner from "@/components/hub/HubSpinner";
import HubClipCard from "@/components/hub/HubClipCard";
import HubYouTubeCard from "@/components/hub/HubYouTubeCard";
import HubScheduleRow from "@/components/hub/HubScheduleRow";
import HubLiveNowBanner from "@/components/hub/HubLiveNowBanner";
import { VINFERNIA_BRAND as THEME } from "@/data/brand-hubs";

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
    name: "Lee Valentine", 
    slug: "leevalentine", 
    twitchLogin: "leevalentinevt",
    twitchId: "880392467",
    youtubeChannelId: "UCe_9u_L3L7I-LIdI1BqX00A", 
    href: "/talents/leevalentinevt" 
  },
  { 
    name: "Lockhart", 
    slug: "lockhart", 
    twitchLogin: "lockhart_vt",
    twitchId: "887239220", 
    youtubeChannelId: "UC1V7WzK7lR_8_vU5lS7f4jg",
    href: "/talents/lockhart_vt" 
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
// STYLES
// ─────────────────────────────────────────────────────────────────────────────
const globalStyles = `
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
  .live-dot {
    width: 8px; height: 8px; border-radius: 50%; background: #ef4444;
    animation: livePulse 1.8s ease-in-out infinite;
  }
  @keyframes livePulse {
    0%   { box-shadow: 0 0 0 0   rgba(239,68,68,0.6); }
    70%  { box-shadow: 0 0 0 8px rgba(239,68,68,0);   }
    100% { box-shadow: 0 0 0 0   rgba(239,68,68,0);   }
  }
  .hub-clip-overlay { background: rgba(239,68,68,0.25); }
  .hub-schedule-row:hover { background: rgba(239,68,68,0.06); }
  .vhub-divider { height:1px; background: linear-gradient(90deg,transparent,rgba(239,68,68,0.3),transparent); }
  .vhub-scroll::-webkit-scrollbar { height: 4px; }
  .vhub-scroll::-webkit-scrollbar-thumb { background: rgba(239,68,68,0.3); border-radius: 2px; }
`;

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
    setSchedule(all);
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
      <Header />
      {!loading.live && <HubLiveNowBanner streams={liveStreams} talents={TALENTS} scrollClassName="vhub-scroll" dotClassName="live-dot" accentRgb="239,68,68" accentColor="#ef4444" accentText="#f87171" />}

      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="vhub-gradient relative min-h-[60vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden py-24">
          <div className="vhub-grid absolute inset-0 pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%)" }} />
          <div className="hub-fade hub-fade-1 relative z-10 mb-8">
            <Image src={THEME.logo} alt="VINFERNIA" width={80} height={80} priority
              className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto"
              style={{ filter:`drop-shadow(0 0 28px ${THEME.logoGlow})` }} />
          </div>
          <h1 className="hub-fade hub-fade-2 relative z-10 font-oswald font-bold uppercase tracking-tight leading-none mb-3"
            style={{ fontSize:"clamp(3rem,10vw,7rem)", color:"#f87171" }}>
            VINFERNIA
          </h1>
          <p className="hub-fade hub-fade-3 relative z-10 text-slate-400 text-sm md:text-base tracking-[0.25em] uppercase mb-6 font-light">
            {THEME.tagline}
          </p>
          {liveStreams.length > 0 && (
            <div className="hub-fade hub-fade-4 relative z-10 flex items-center gap-2 px-4 py-2 rounded-full"
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
              <HubSectionLabel accentColor="rgba(239,68,68,0.7)">Roster</HubSectionLabel>
              <HubSectionHeading>Talents</HubSectionHeading>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto w-full">
              {rosterTalents.map((talent) => {
                const meta = TALENTS.find((t) => t.name === talent.name);
                return (
                  <HubTalentCard
                    key={talent.name}
                    talent={talent}
                    groupConfig={vinferniaGroupConfig}
                    liveBadge={liveLogins.has(meta?.twitchLogin?.toLowerCase() ?? "")}
                    liveBadgeColor="rgba(239,68,68,0.92)"
                    liveDotClassName="live-dot"
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
              <HubSectionLabel accentColor="rgba(239,68,68,0.7)">Upcoming</HubSectionLabel>
              <HubSectionHeading>Schedule</HubSectionHeading>
            </div>
            {loading.schedule ? <HubSpinner color="#ef4444" /> : schedule.length === 0 ? (
              <div className="rounded-2xl py-20 text-center text-slate-700"
                style={{ border:"1px dashed rgba(59,130,246,0.15)" }}>
                <p className="text-4xl mb-4">✦</p>
                <p className="text-sm uppercase tracking-widest">VINFERNIA schedule coming soon</p>
              </div>            ) : (
              <div className="rounded-2xl overflow-hidden" style={{ border:"1px solid rgba(239,68,68,0.15)" }}>
                {schedule.map((item,i) => <HubScheduleRow key={i} segment={item.segment} talent={item.talent} rowClassName="hub-schedule-row" accentColor="#f87171" accentDim="rgba(239,68,68,0.6)" dotFallback="#ef4444" />)}
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
              <HubSectionLabel accentColor="rgba(239,68,68,0.7)">Content</HubSectionLabel>
              <HubSectionHeading>Latest Videos & Clips</HubSectionHeading>
            </div>
            {loading.clips ? <HubSpinner color="#ef4444" /> : allVideos.length === 0 ? (
              <div className="rounded-2xl py-20 text-center text-slate-700"
                style={{ border:"1px dashed rgba(59,130,246,0.15)" }}>
                <p className="text-4xl mb-4">✦</p>
                <p className="text-sm uppercase tracking-widest">VINFERNIA content coming soon</p>
              </div>            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {allVideos.map((item,i) => {
                  const color = talentsData.talents.find((t) => t.name === item.talent.name)?.themeColor;
                  return item.type === "clip"
                    ? <HubClipCard    key={`c-${i}`} clip={item.clip}   talentName={item.talent.name} talentColor={color} cardClassName="hub-clip-card" overlayClassName="hub-clip-overlay" accentColor="rgba(239,68,68,0.9)" fallbackColor="#ef4444" />
                    : <HubYouTubeCard key={`y-${i}`} video={item.video} talentName={item.talent.name} talentColor={color} cardClassName="hub-clip-card" overlayClassName="hub-clip-overlay" fallbackColor="#ef4444" />;
                })}
              </div>
            )}
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section className="px-6 py-16 text-center"
          style={{ background:"linear-gradient(to bottom, #0f172a, rgba(239,68,68,0.06), #0f172a)" }}>
          <div className="max-w-xl mx-auto">
            <HubSectionLabel accentColor="rgba(239,68,68,0.7)">Explore More</HubSectionLabel>
            <h2 className="font-oswald text-3xl font-bold uppercase mb-6 text-white">See All Talents</h2>
            <a href="/talents"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105"
              style={{ background:"rgba(239,68,68,0.15)", border:"1px solid rgba(239,68,68,0.4)", color:"#f87171" }}>
              All Talents →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}