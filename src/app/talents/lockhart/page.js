/* eslint-disable react/prop-types */
"use client";
import React, { useState, useMemo, useCallback, memo, useEffect } from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SocialLinks } from "@/app/components/SocialLinks";
import { BackToTalentsButton } from "@/app/components/backtotalentsbutton";
import data from "./data.json";
import talentsData from "@/app/talents/data.json";

const TWITCH_CHANNEL = "lockhart_vt";

function darkenHex(hex, amount = 40) {
    const n = parseInt(hex.replace("#", ""), 16);
    const r = Math.max(0, (n >> 16) - amount);
    const g = Math.max(0, ((n >> 8) & 0xff) - amount);
    const b = Math.max(0, (n & 0xff) - amount);
    return `rgb(${r},${g},${b})`;
}

const swoopBtnStyles = (signatureColor) => `
    .swoop-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 18px;
        border-radius: 8px;
        border: 1px solid color-mix(in srgb, ${signatureColor} 30%, transparent);
        color: #ffffff;
        font-weight: 600;
        font-size: 0.95rem;
        text-decoration: none;
        overflow: hidden;
        background: color-mix(in srgb, ${signatureColor} 10%, transparent);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        cursor: pointer;
        min-width: 140px;
    }
    .swoop-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: ${signatureColor};
        transform: translateX(-101%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 0;
    }
    .swoop-btn:hover::before {
        transform: translateX(0);
    }
    .swoop-btn .swoop-chevron {
        margin-left: auto;
        font-size: 1.2rem;
        opacity: 0.5;
        transition: transform 0.2s ease, opacity 0.2s ease;
        position: relative;
        z-index: 1;
        line-height: 1;
    }
    .swoop-btn:hover .swoop-chevron {
        opacity: 1;
    }
    .swoop-btn.swoop-down:hover .swoop-chevron {
        transform: translateY(3px);
    }
    .swoop-btn.swoop-right:hover .swoop-chevron {
        transform: translateX(3px);
    }
`;

function ScrollToLoreButton({ signatureColor }) {
    const handleClick = useCallback(() => {
        const el = document.getElementById("lore-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <>
            <style>{swoopBtnStyles(signatureColor)}</style>
            <button onClick={handleClick} className="swoop-btn swoop-down">
                <span style={{ position: "relative", zIndex: 1, flex: 1, textAlign: "center" }}>
                    View Data
                </span>
                <span className="swoop-chevron" style={{ transform: "rotate(90deg)" }}>›</span>
            </button>
        </>
    );
}

function ViewAllClipsButton({ signatureColor, href }) {
    return (
        <>
            <style>{swoopBtnStyles(signatureColor)}</style>
            <a href={href} target="_blank" rel="noopener noreferrer" className="swoop-btn swoop-right">
                <span style={{ position: "relative", zIndex: 1, flex: 1, textAlign: "center" }}>
                    View All Clips
                </span>
                <span className="swoop-chevron">›</span>
            </a>
        </>
    );
}

const DataItem = memo(function DataItem({ label, value, color }) {
    return (
        <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
            <h3 className="font-semibold mb-1 transition-colors duration-300" style={{ color }}>
                {label}
            </h3>
            <p className="text-white">{value}</p>
        </div>
    );
});

const TwitchEmbed = memo(function TwitchEmbed({ channel, signatureColor }) {
    const [hostname, setHostname] = useState("");

    useEffect(() => {
        setHostname(window.location.hostname);
    }, []);

    if (!hostname) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: signatureColor }} />
            </div>
        );
    }

    return (
        <iframe
            className="w-full h-full"
            src={`https://player.twitch.tv/?channel=${channel}&parent=${hostname}&autoplay=false`}
            title={`${channel} Twitch Stream`}
            allowFullScreen
        />
    );
});

const ClipCard = memo(function ClipCard({ clip, signatureColor, variant }) {
    const isRecommended = variant === "recommended";
    return (
        <a
            href={clip.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg overflow-hidden border transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
            style={{ borderColor: `${signatureColor}30`, backgroundColor: `${signatureColor}08` }}
        >
            <div className={`relative overflow-hidden ${isRecommended ? "aspect-video" : "aspect-video"} bg-gray-900`}>
                <img
                    src={clip.thumbnail}
                    alt={clip.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {clip.duration && (
                    <span className="absolute bottom-2 right-2 text-xs font-mono bg-black/80 text-white px-1.5 py-0.5 rounded">
                        {clip.duration}
                    </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: signatureColor }}
                    >
                        <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#1a1a1a" }}>
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <p className="text-white text-sm font-medium line-clamp-2 group-hover:text-opacity-90">{clip.title}</p>
                {clip.views && (
                    <p className="text-gray-400 text-xs mt-1">{clip.views} views · {clip.date}</p>
                )}
                {!clip.views && clip.date && (
                    <p className="text-gray-400 text-xs mt-1">{clip.date}</p>
                )}
            </div>
        </a>
    );
});

function RecentClips({ signatureColor, fallbackVideos }) {
    const [clips, setClips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`/api/twitch-clips?channel=${TWITCH_CHANNEL}&limit=4`)
            .then((r) => r.json())
            .then((d) => {
                if (d.clips && d.clips.length > 0) {
                    setClips(d.clips);
                } else {
                    setError(true);
                }
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: signatureColor }} />
            </div>
        );
    }

    if (error || clips.length === 0) {
        return (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fallbackVideos.map((v) => (
                    <ClipCard key={v.id} clip={{ ...v, url: v.url || "#" }} signatureColor={signatureColor} />
                ))}
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clips.map((clip) => (
                <ClipCard key={clip.id} clip={clip} signatureColor={signatureColor} />
            ))}
        </div>
    );
}

const OutfitButton = memo(function OutfitButton({ outfit, isSelected, signatureColor, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-transform duration-200 ${isSelected ? "scale-110" : "border-gray-600 opacity-60 hover:opacity-100"}`}
            style={{
                borderColor: isSelected ? signatureColor : undefined,
                boxShadow: isSelected ? `0 0 20px ${signatureColor}80` : undefined,
            }}
        >
            <img
                src={outfit.image}
                alt={outfit.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center -34%", transform: "scale(4)" }}
            />
        </button>
    );
});

// ── GenmateTalentCard: fluid w-full aspect-square ──
const GenmateTalentCard = memo(function GenmateTalentCard({ talent, groupConfig }) {
    const [hovered, setHovered] = useState(false);
    const theme = talent.themeColor || "#334155";
    const dark = darkenHex(theme, 50);
    const glow = `0 0 28px ${theme}99, 0 0 8px ${theme}55`;

    return (
        <Link
            href={talent.href}
            className="group flex flex-col items-center w-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className="relative overflow-hidden rounded-2xl w-full aspect-square"
                style={{
                    backgroundColor: theme,
                    boxShadow: hovered ? glow : "0 4px 24px rgba(0,0,0,0.4)",
                    transform: hovered ? "scale(1.07)" : "scale(1)",
                    transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
                }}
            >
                {groupConfig?.logo && (
                    <img
                        src={groupConfig.logo}
                        alt=""
                        aria-hidden="true"
                        className="absolute pointer-events-none select-none"
                        style={{
                            width: "130%", height: "130%", top: "-15%", left: "-15%",
                            objectFit: "contain", opacity: 0.12,
                            filter: "brightness(0) invert(0)", mixBlendMode: "multiply",
                        }}
                    />
                )}
                {groupConfig?.logo && (
                    <img
                        src={groupConfig.logo}
                        alt=""
                        aria-hidden="true"
                        className="absolute pointer-events-none select-none"
                        style={{
                            width: "130%", height: "130%", top: "-15%", left: "-15%",
                            objectFit: "contain", opacity: 0.18, filter: "brightness(0)",
                        }}
                    />
                )}
                <img
                    src={talent.char}
                    alt={talent.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        objectPosition: talent.objectPosition || "50% 20%",
                        transform: `scale(${hovered
                            ? (talent.imageScale || 1) * 1.08 + 0.08
                            : (talent.imageScale || 1) * 1.08
                            })`,
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
});

export default function LockhartPage() {
    const [selectedOutfit, setSelectedOutfit] = useState(0);
    const [activePersona, setActivePersona] = useState("lockhart");
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [hasLoadedOther, setHasLoadedOther] = useState(false);

    const isLockhart = activePersona === "lockhart";
    const currentTheme = data.theme[activePersona];
    const signatureColor = currentTheme.accent;
    const talentData = isLockhart ? data.lockhart : data.other;

    const genmates = talentsData.talents.filter(
        (t) =>
            Array.isArray(t.groups)
                ? t.groups.includes("vinfernia") && t.name !== talentData.name
                : t.group === "vinfernia" && t.name !== talentData.name
    );

    const vinferniaGroupConfig = talentsData.generations.find((g) => g.id === "vinfernia");

    const handlePersonaSwitch = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActivePersona(prev => {
                const next = prev === "lockhart" ? "other" : "lockhart";
                if (next === "other") setHasLoadedOther(true);
                return next;
            });
            setSelectedOutfit(0);
            setIsTransitioning(false);
        }, 250);
    }, []);

    const handleOutfitClick = useCallback((id) => { setSelectedOutfit(id); }, []);

    const currentOutfitImage = useMemo(
        () => talentData.outfits[selectedOutfit]?.image,
        [talentData.outfits, selectedOutfit]
    );

    return (
        <div
            className="flex flex-col min-h-screen transition-colors duration-400"
            style={{ backgroundColor: currentTheme.background }}
        >
            <Header />

            <button
                onClick={handlePersonaSwitch}
                className={`fixed bottom-8 z-50 w-24 h-24 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 group ${isLockhart ? "left-8" : "left-8 lg:right-8 lg:left-auto"}`}
                title={`Switch to ${isLockhart ? "The Other" : "Dr. Lockhart"}`}
            >
                <img
                    src={isLockhart
                        ? "/VINFERNIA/VINFERNIA/Lockhart/PoeLockhart.png"
                        : "/VINFERNIA/VINFERNIA/Lockhart/PoeOther.png"
                    }
                    alt={isLockhart ? "Switch to The Other" : "Switch to Dr. Lockhart"}
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-125"
                />
            </button>

            <main className="flex-grow pt-0">

                {/* ── Hero ── */}
                <div className="relative transition-colors duration-400" style={{ backgroundColor: currentTheme.background }}>
                    <div
                        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-400"
                        style={{
                            backgroundImage: `url('${data.lockhart.backgroundImage}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            opacity: isLockhart ? 1 : 0,
                        }}
                    />
                    {hasLoadedOther && (
                        <div
                            className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-400"
                            style={{
                                backgroundImage: `url('${data.other.backgroundImage}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                opacity: isLockhart ? 0 : 1,
                            }}
                        />
                    )}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-400"
                        style={{
                            background: isLockhart
                                ? `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(26,26,26,0.9) 100%)`
                                : `linear-gradient(to bottom, rgba(0,15,10,0.8) 0%, rgba(5,10,8,0.95) 100%)`,
                        }}
                    />
                    <div
                        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-400"
                        style={{ background: `radial-gradient(ellipse at center, transparent 40%, ${currentTheme.background} 100%)` }}
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 h-40 z-[1] pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, transparent 0%, ${currentTheme.featured}90 60%, ${currentTheme.featured} 100%)` }}
                    />

                    <section className="relative z-10 min-h-screen flex items-start justify-center px-4 pt-32 pb-20">
                        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-start">

                            {/* ── Character image ── */}
                            <div className={`relative flex items-start justify-center h-[580px] sm:h-[680px] lg:h-[780px] overflow-visible transition-opacity duration-250 ${isTransitioning ? "opacity-0" : "opacity-100"} ${!isLockhart ? "lg:order-2" : "lg:order-1"}`}>
                                <img
                                    src={currentOutfitImage}
                                    alt={talentData.name}
                                    className="relative w-full h-auto object-contain transition-opacity duration-250"
                                    style={{
                                        maxHeight: "780px",
                                        filter: !isLockhart
                                            ? `drop-shadow(0 0 30px ${data.theme.other.accent}40)`
                                            : `drop-shadow(0 0 20px ${data.theme.lockhart.accent}20)`,
                                    }}
                                />
                            </div>

                            {/* ── Info panel ── */}
                            <div className={`space-y-8 transition-opacity duration-250 ${isTransitioning ? "opacity-0" : "opacity-100"} ${!isLockhart ? "lg:order-1" : "lg:order-2"}`}>
                                <div>
                                    {talentData.genLogo && (
                                        <a href="/talents" className="inline-block mb-1 opacity-70 hover:opacity-100 transition-opacity duration-200">
                                            <img
                                                src={talentData.genLogo}
                                                alt="Gen Logo"
                                                className="h-10 w-auto"
                                                style={{ filter: `drop-shadow(0 0 8px ${signatureColor}90)` }}
                                            />
                                        </a>
                                    )}
                                    <h1
                                        className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 border-b-4 pb-2 transition-colors duration-300"
                                        style={{
                                            borderColor: signatureColor,
                                            textShadow: !isLockhart ? `0 0 20px ${data.theme.other.accent}60` : "none",
                                        }}
                                    >
                                        <div className="drop-shadow-lg">{talentData.name}</div>
                                    </h1>
                                    <p className="text-2xl mb-4 transition-colors duration-300" style={{ color: signatureColor }}>
                                        {talentData.title}
                                    </p>
                                    <p className="text-xl text-gray-300 italic">&quot;{talentData.tagline}&quot;</p>
                                </div>

                                <div
                                    className="backdrop-blur-sm rounded-lg p-6 border transition-colors duration-300"
                                    style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                                >
                                    <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300" style={{ color: signatureColor }}>About</h2>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {talentData.biography.split(/(<em>[\s\S]*?<\/em>)/g).map((part, i) => {
                                            const match = part.match(/^<em>([\s\S]*)<\/em>$/);
                                            return match ? <em key={i}>{match[1]}</em> : part;
                                        })}
                                    </p>
                                </div>

                                <SocialLinks links={talentData.links} signatureColor={signatureColor} hoverTextColor={isLockhart ? "#1a1a1a" : "#ffffff"} />

                                <div className="flex">
                                    <ScrollToLoreButton signatureColor={signatureColor} />
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

                {/* ── Live on Twitch ── */}
                <section
                    className="py-16 px-4 relative transition-colors duration-400"
                    style={{ backgroundColor: currentTheme.featured }}
                >
                    <div
                        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${currentTheme.featured}00 0%, ${currentTheme.recommended} 100%)` }}
                    />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-3xl font-bold text-white text-center mb-2 transition-colors duration-300" style={{ color: signatureColor }}>
                            Live on Twitch
                        </h2>
                        <p className="text-gray-400 text-center text-sm mb-8">
                            {TWITCH_CHANNEL} · <a href={`https://twitch.tv/${TWITCH_CHANNEL}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors" style={{ color: signatureColor }}>Open in Twitch ↗</a>
                        </p>
                        <div
                            className="backdrop-blur-sm rounded-lg border overflow-hidden transition-colors duration-300"
                            style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                        >
                            <div className="aspect-video bg-gray-800">
                                <TwitchEmbed channel={TWITCH_CHANNEL} signatureColor={signatureColor} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Featured Clips ── */}
                <section className="py-20 px-4 relative transition-colors duration-400" style={{ backgroundColor: currentTheme.recommended }}>
                    <div className="max-w-6xl mx-auto relative z-0">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Clips</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {talentData.recommendedVideos.map((video) => (
                                <ClipCard key={video.id} clip={{ ...video, url: video.url || "#" }} signatureColor={signatureColor} variant="recommended" />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Recent Clips ── */}
                <section className="py-20 px-4 relative transition-colors duration-400" style={{ backgroundColor: currentTheme.recent }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${currentTheme.recommended} 0%, ${currentTheme.recent} 100%)` }}
                    />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Recent Clips</h2>
                        <RecentClips signatureColor={signatureColor} fallbackVideos={talentData.videos} />
                        <div className="flex justify-center mt-8">
                            <ViewAllClipsButton
                                signatureColor={signatureColor}
                                href={`https://twitch.tv/${TWITCH_CHANNEL}/clips`}
                            />
                        </div>
                    </div>
                </section>

                {/* ── Lore ── */}
                <section id="lore-section" className="py-20 px-4 relative transition-colors duration-400" style={{ backgroundColor: currentTheme.background }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${currentTheme.recent} 0%, ${currentTheme.background} 100%)` }}
                    />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div
                            className="backdrop-blur-sm rounded-lg p-6 border transition-colors duration-300"
                            style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                        >
                            <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300" style={{ color: signatureColor }}>Lore</h2>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {talentData.lore.split(/(<em>[\s\S]*?<\/em>)/g).map((part, i) => {
                                    const match = part.match(/^<em>([\s\S]*)<\/em>$/);
                                    return match ? <em key={i}>{match[1]}</em> : part;
                                })}
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Model + Data ── */}
                <section id="data-section" className="py-20 px-4 relative transition-colors duration-400" style={{ backgroundColor: currentTheme.background }}>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">

                            {/* Model viewer */}
                            <div className={`transition-opacity duration-250 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                                <h2 className="text-4xl font-bold text-white text-center mb-6">Model</h2>
                                <div className="relative flex items-center justify-center h-auto min-h-[500px] sm:h-[620px] lg:h-[700px] overflow-visible">
                                    {talentData.outfits.length > 1 && (
                                        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 flex-col gap-3 z-10">
                                            {talentData.outfits.map((outfit) => (
                                                <OutfitButton
                                                    key={outfit.id}
                                                    outfit={outfit}
                                                    isSelected={selectedOutfit === outfit.id}
                                                    signatureColor={signatureColor}
                                                    onClick={() => handleOutfitClick(outfit.id)}
                                                />
                                            ))}
                                        </div>
                                    )}
                                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden lg:overflow-visible">
                                        <img
                                            src={currentOutfitImage}
                                            alt={talentData.name}
                                            className="w-full h-auto object-contain transition-opacity duration-250"
                                            style={{
                                                maxHeight: "700px",
                                                filter: !isLockhart
                                                    ? `drop-shadow(0 0 30px ${data.theme.other.accent}40)`
                                                    : `drop-shadow(0 0 20px ${data.theme.lockhart.accent}20)`,
                                            }}
                                        />
                                    </div>
                                </div>
                                {talentData.outfits.length > 1 && (
                                    <div className="flex lg:hidden gap-3 justify-center mt-4">
                                        {talentData.outfits.map((outfit) => (
                                            <OutfitButton
                                                key={outfit.id}
                                                outfit={outfit}
                                                isSelected={selectedOutfit === outfit.id}
                                                signatureColor={signatureColor}
                                                onClick={() => handleOutfitClick(outfit.id)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Data panel */}
                            <div className={`transition-opacity duration-250 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                                <h2 className="text-4xl font-bold text-white text-center mb-6">Data</h2>
                                <div
                                    className="backdrop-blur-sm rounded-lg p-4 md:p-8 border w-full transition-colors duration-300"
                                    style={{
                                        background: `linear-gradient(135deg, ${signatureColor}20, ${signatureColor}10)`,
                                        borderColor: `${signatureColor}30`,
                                    }}
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <DataItem label="Birthday" value={talentData.data.birthday} color={signatureColor} />
                                        <DataItem label="Debut Stream" value={talentData.data.debutStream} color={signatureColor} />
                                        <DataItem label="Oshi Mark" value={talentData.oshiMark} color={signatureColor} />
                                        <DataItem label="Height" value={talentData.data.height} color={signatureColor} />
                                        <DataItem label="Unit" value={talentData.data.unit} color={signatureColor} />

                                        <div className="md:col-span-2">
                                            <DataItem
                                                label="Illustrator"
                                                value={
                                                    <a href={talentData.data.illustrator.url} target="_blank" rel="noopener noreferrer"
                                                        className="hover:brightness-110 underline transition-opacity duration-200"
                                                        style={{ color: signatureColor }}>
                                                        {talentData.data.illustrator.name}
                                                    </a>
                                                }
                                                color={signatureColor}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Dream" value={talentData.data.dream} color={signatureColor} />
                                        </div>

                                        <DataItem label="Fan Name" value={talentData.data.fanName} color={signatureColor} />

                                        <div className="md:col-span-2">
                                            <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
                                                <h3 className="font-semibold mb-2 transition-colors duration-300" style={{ color: signatureColor }}>Hashtags</h3>
                                                <div className="space-y-1">
                                                    <p className="text-gray-300">Stream Tag: <span className="text-white">{talentData.data.hashtags.stream}</span></p>
                                                    <p className="text-gray-300">Fan Art: <span className="text-white">{talentData.data.hashtags.fanArt}</span></p>
                                                    {talentData.data.hashtags.clips && (
                                                        <p className="text-gray-300">Clips: <span className="text-white">{talentData.data.hashtags.clips}</span></p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
                                                <h3 className="font-semibold mb-2 transition-colors duration-300" style={{ color: signatureColor }}>Catchphrases</h3>
                                                <ul className="space-y-1">
                                                    {talentData.data.catchphrases.map((phrase, index) => (
                                                        <li key={index} className="text-white italic">&quot;{phrase}&quot;</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <DataItem label="Regular/Specialty Streams" value={talentData.data.regularStreams} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Hobbies" value={talentData.data.hobbies} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Likes" value={talentData.data.likes} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Special Skills" value={talentData.data.specialSkills} color={signatureColor} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── Meet the Others ── */}
                <section className="py-12 px-4 relative transition-colors duration-400" style={{ backgroundColor: currentTheme.background }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                        style={{ backgroundColor: `${signatureColor}20` }}
                    />
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-gray-500 text-sm uppercase tracking-widest mb-10">Meet the Others</p>
                        {/* Grid layout — responsive fluid cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto w-full">
                            {genmates.map((talent) => (
                                <GenmateTalentCard
                                    key={talent.name}
                                    talent={talent}
                                    groupConfig={vinferniaGroupConfig}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <BackToTalentsButton signatureColor={signatureColor} hoverTextColor={isLockhart ? "#1a1a1a" : "#ffffff"} />

            </main>

            <Footer />
        </div>
    );
}