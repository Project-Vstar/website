/* eslint-disable react/prop-types */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import talentData from "./data.json";

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.7s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }
  .fade-2 { animation-delay: 0.25s; }

  @keyframes cardEnter {
    from { opacity: 0; transform: translateY(12px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
`;

// ─── Darken a hex colour for the watermark shade ────────────────────────────
function darkenHex(hex, amount = 40) {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (n >> 16) - amount);
  const g = Math.max(0, ((n >> 8) & 0xff) - amount);
  const b = Math.max(0, (n & 0xff) - amount);
  return `rgb(${r},${g},${b})`;
}

// ─── Group pill styles ───────────────────────────────────────────────────────
const groupStyles = {
  blue: {
    pillActive: "bg-blue-500/20 border-blue-400 text-blue-300",
    pillInactive: "border-slate-700 text-slate-400 hover:border-blue-500/50 hover:text-blue-400",
    glow: "0 0 14px rgba(96,165,250,0.7)",
  },
  red: {
    pillActive: "bg-red-500/20 border-red-400 text-red-300",
    pillInactive: "border-slate-700 text-slate-400 hover:border-red-500/50 hover:text-red-400",
    glow: "0 0 14px rgba(248,113,113,0.7)",
  },
  "static-white": {
    pillActive: "bg-white/10 border-white text-white",
    pillInactive: "border-slate-700 text-slate-400 hover:border-white/50 hover:text-white",
    glow: "0 0 14px rgba(255,255,255,0.65)",
  },
  slate: {
    pillActive: "bg-slate-500/20 border-slate-300 text-slate-200",
    pillInactive: "border-slate-700 text-slate-500 hover:border-slate-400 hover:text-slate-300",
    glow: "0 0 14px rgba(148,163,184,0.5)",
  },
};

function getGroupStyle(glowStyle) {
  return groupStyles[glowStyle] || groupStyles["static-white"];
}

// ─── Single talent card ──────────────────────────────────────────────────────
function TalentCard({ talent, primaryGroupLogo }) {
  const [hovered, setHovered] = useState(false);
  const theme = talent.themeColor || "#334155";
  const dark = darkenHex(theme, 50);
  const glow = `0 0 28px ${theme}99, 0 0 8px ${theme}55`;

  return (
    <Link
      href={talent.href}
      className="group flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          width: "180px",
          height: "180px",
          backgroundColor: theme,
          boxShadow: hovered ? glow : "0 4px 24px rgba(0,0,0,0.4)",
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
        }}
      >
        {primaryGroupLogo && (
          <img
            src={primaryGroupLogo}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none"
            style={{
              width: "130%", height: "130%",
              top: "-15%", left: "-15%",
              objectFit: "contain",
              opacity: 0.12,
              filter: "brightness(0) invert(0)",
              mixBlendMode: "multiply",
            }}
          />
        )}
        {primaryGroupLogo && (
          <img
            src={primaryGroupLogo}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none"
            style={{
              width: "130%", height: "130%",
              top: "-15%", left: "-15%",
              objectFit: "contain",
              opacity: 0.18,
              filter: "brightness(0)",
            }}
          />
        )}

        <img
          src={talent.char}
          alt={talent.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: talent.objectPosition || "50% 20%",
            transform: `scale(${hovered ? (talent.imageScale || 1) * 1.08 + 0.08 : (talent.imageScale || 1) * 1.08})`,
            transition: "transform 0.4s ease",
          }}
        />

        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at center, transparent 40%, ${dark}88 100%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>

      <p
        className="mt-3 text-sm font-semibold text-center tracking-wide text-slate-200 transition-all duration-300"
        style={{ textShadow: hovered ? `0 0 8px ${theme}, 0 0 20px ${theme}88` : "none" }}
      >
        {talent.name}
      </p>
    </Link>
  );
}

// ─── Animated card wrapper ───────────────────────────────────────────────────
function AnimatedCard({ children, index }) {
  return (
    <div style={{ animation: "cardEnter 0.4s cubic-bezier(0.34,1.56,0.64,1) both", animationDelay: `${index * 35}ms` }}>
      {children}
    </div>
  );
}

// ─── Talent grid ─────────────────────────────────────────────────────────────
function TalentGrid({ filteredTalents, getPrimaryLogoForTalent }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {filteredTalents.map((talent, i) => (
        <AnimatedCard key={talent.name} index={i}>
          <TalentCard talent={talent} primaryGroupLogo={getPrimaryLogoForTalent(talent)} />
        </AnimatedCard>
      ))}
    </div>
  );
}

// ─── Filter pill ─────────────────────────────────────────────────────────────
function FilterPill({ label, glowStyle, isActive, onClick }) {
  const style = getGroupStyle(glowStyle);
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wider border transition-all duration-200 cursor-pointer ${isActive ? style.pillActive : style.pillInactive}`}
      style={isActive ? { boxShadow: style.glow } : {}}
    >
      {label}
    </button>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function TalentsPage() {
  const [activeGen, setActiveGen] = useState("all");
  const [activeSub, setActiveSub] = useState(null);
  const [gridKey, setGridKey] = useState("all");
  const [gridVisible, setGridVisible] = useState(true);

  const { generations, talents } = talentData;

  const activeGenObj = generations.find((g) => g.id === activeGen);
  const subgroups = activeGenObj?.subgroups || null;

  function switchGrid(newGen, newSub) {
    setGridVisible(false);
    setTimeout(() => {
      setActiveGen(newGen);
      setActiveSub(newSub);
      setGridKey(`${newGen}-${newSub}`);
      setGridVisible(true);
    }, 200);
  }

  function handleGenClick(genId) {
    switchGrid(genId, null);
  }

  const filteredTalents = talents.filter((t) => {
    if (activeGen === "all") return true;
    const talentGroups = t.groups || [];
    if (activeSub) return talentGroups.includes(activeSub);
    return talentGroups.includes(activeGen);
  });

  function getPrimaryLogoForTalent(talent) {
    const talentGroups = talent.groups || [];
    for (const gen of generations) {
      if (gen.logo && talentGroups.includes(gen.id)) return gen.logo;
    }
    return null;
  }

  const heroGroups = generations.filter((g) => ["vstar", "vinfernia"].includes(g.id));

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{styles}</style>
      <Header />

      <main className="flex-grow flex flex-col items-center">

        {/* ── Hero banner ───────────────────────────────────────────────── */}
        <section className="w-full flex items-center justify-center pt-28 pb-6 px-10 sm:px-16 bg-gradient-to-b from-slate-950 to-slate-900 border-b border-white/5">

          {/* Left logo */}
            <img
              src={heroGroups[0].logo}
              alt={heroGroups[0].logoAlt}
              className="fade-up fade-1 w-10 h-10 sm:w-14 sm:h-14 object-contain shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
              style={{ filter: "drop-shadow(0 0 8px rgba(96,165,250,0.55))" }}
            />
          {/* Centre */}
          <div className="fade-up fade-1 flex flex-col items-center text-center px-6">
            <h1
              className="fade-up fade-1 font-oswald font-bold uppercase tracking-tight leading-none text-white pl-10 pr-10"
              style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
            >
              Our Talents
            </h1>
          </div>

          {/* Right logo */}
            <img
              src={heroGroups[1].logo}
              alt={heroGroups[1].logoAlt}
              className="fade-up fade-1 w-10 h-10 sm:w-14 sm:h-14 object-contain shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
              style={{ filter: "drop-shadow(0 0 8px rgba(248,113,113,0.55))" }}
            />

        </section>

        {/* ── Filter bar ────────────────────────────────────────────────── */}
        <section className="w-full flex flex-col items-center px-6 py-5 bg-slate-900/90 sticky top-0 z-10 border-b border-white/5 backdrop-blur-sm gap-3">

          {/* Tier 1: Generations */}
          <div className="flex flex-wrap gap-3 justify-center">
            {generations.map((gen) => (
              <FilterPill
                key={gen.id}
                label={gen.label}
                glowStyle={gen.glowStyle}
                isActive={activeGen === gen.id}
                onClick={() => handleGenClick(gen.id)}
              />
            ))}
          </div>

          {/* Tier 2: Subgroups */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: subgroups ? "1fr" : "0fr",
              opacity: subgroups ? 1 : 0,
              transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
              width: "100%",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <div className="flex flex-wrap gap-2 justify-center pt-3 pb-1">
                <div className="w-full flex items-center gap-3 justify-center mb-2">
                  <span className="h-px w-16 bg-slate-700/60" />
                  <span className="text-[10px] text-slate-600 tracking-[0.15em] uppercase">Filter by group</span>
                  <span className="h-px w-16 bg-slate-700/60" />
                </div>
                {subgroups?.map((sub) => (
                  <FilterPill
                    key={sub.id ?? "sub-all"}
                    label={sub.label}
                    glowStyle={sub.glowStyle}
                    isActive={activeSub === sub.id}
                    onClick={() => switchGrid(activeGen, sub.id)}
                  />
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* ── Talent grid ───────────────────────────────────────────────── */}
        <section className="w-full max-w-6xl px-6 py-20 mx-auto min-h-[60vh]">
          {filteredTalents.length === 0 ? (
            <p className="text-center text-slate-500 text-base mt-12">No talents in this group yet.</p>
          ) : (
            <div style={{ opacity: gridVisible ? 1 : 0, transition: "opacity 0.2s ease" }}>
              <TalentGrid
                key={gridKey}
                filteredTalents={filteredTalents}
                getPrimaryLogoForTalent={getPrimaryLogoForTalent}
              />
            </div>
          )}
        </section>

      </main>

      <Footer />
    </div>
  );
}