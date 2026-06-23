"use client";
import { useState, memo } from "react";
import { darkenHex } from "@/lib/hub-utils";

const HubTalentCard = memo(function HubTalentCard({
  talent,
  groupConfig,
  liveBadge,
  liveBadgeColor = "rgba(239,68,68,0.92)",
  liveDotClassName = "live-dot",
}) {
  const [hovered, setHovered] = useState(false);
  const theme = talent.themeColor || "#334155";
  const dark  = darkenHex(theme, 50);
  const glow  = `0 0 28px ${theme}99, 0 0 8px ${theme}55`;

  return (
    <a href={talent.href} className="group flex flex-col items-center w-full"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="relative overflow-hidden rounded-2xl w-full aspect-square"
        style={{
          backgroundColor: theme,
          boxShadow:  hovered ? glow : "0 4px 24px rgba(0,0,0,0.4)",
          transform:  hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
        }}>
        {groupConfig?.logo && (<>
          <img src={groupConfig.logo} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute pointer-events-none select-none"
            style={{ width:"130%",height:"130%",top:"-15%",left:"-15%",objectFit:"contain",opacity:0.12,filter:"brightness(0) invert(0)",mixBlendMode:"multiply" }} />
          <img src={groupConfig.logo} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute pointer-events-none select-none"
            style={{ width:"130%",height:"130%",top:"-15%",left:"-15%",objectFit:"contain",opacity:0.18,filter:"brightness(0)" }} />
        </>)}
        <img src={talent.char} alt={talent.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: talent.objectPosition || "50% 20%",
            transform: `scale(${hovered ? (talent.imageScale||1)*1.08+0.08 : (talent.imageScale||1)*1.08})`,
            transition: "transform 0.4s ease",
          }} />
        <div className="absolute inset-0 rounded-2xl"
          style={{ background:`radial-gradient(ellipse at center, transparent 40%, ${dark}88 100%)`, opacity: hovered?1:0, transition:"opacity 0.3s ease" }} />
        {liveBadge && (
          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full"
            style={{ background: liveBadgeColor }}>
            <div className={liveDotClassName} style={{ width:6, height:6 }} />
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

export default HubTalentCard;
