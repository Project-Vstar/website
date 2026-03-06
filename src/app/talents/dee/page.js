/* eslint-disable react/prop-types */
"use client";
import React, { useState, useMemo, useCallback, memo, useEffect } from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SocialLinks } from "@/app/components/SocialLinks";
import VideoCard from "@/app/components/Videocard";
import { BackToTalentsButton } from "@/app/components/backtotalentsbutton";
import deeData from "./data.json";
import talentsData from "@/app/talents/data.json";

const themeColors = deeData.theme;

const TWITCH_CHANNEL = "deeronnysynluzycy";

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
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="swoop-btn swoop-right"
            >
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

    const src = `https://player.twitch.tv/?channel=${channel}&parent=${hostname}&autoplay=false`;

    return (
        <iframe
            className="w-full h-full"
            src={src}
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
                        <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#0A0C10" }}>
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

function RecentClips({ signatureColor }) {
    const [clips, setClips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`/api/twitch-clips?channel=${TWITCH_CHANNEL}&limit=4`)
            .then((r) => r.json())
            .then((data) => {
                if (data.clips && data.clips.length > 0) {
                    setClips(data.clips);
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
                {deeData.videos.map((v) => (
                    <VideoCard key={v.id} video={v} signatureColor={signatureColor} />
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

// ── OutfitButton: matches Gomifuyu's objectPosition + scale(4) approach ──
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
                style={{ objectPosition: "center -29%", transform: "scale(2.5)" }}
            />
        </button>
    );
});

// ── GenmateTalentCard: fluid w-full aspect-square like Gomifuyu ──
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

export default function DeePage() {
    const [selectedOutfit, setSelectedOutfit] = useState(0);
    const signatureColor = themeColors.accent;

    const genmates = talentsData.talents.filter(
        (t) =>
            Array.isArray(t.groups)
                ? t.groups.includes("vinfernia") && t.name !== deeData.name
                : t.group === "vinfernia" && t.name !== deeData.name
    );

    const vinferniaGroupConfig = talentsData.generations.find((g) => g.id === "vinfernia");

    const handleOutfitClick = useCallback((id) => { setSelectedOutfit(id); }, []);

    const currentOutfitImage = useMemo(
        () => deeData.outfits[selectedOutfit]?.image,
        [selectedOutfit]
    );

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: themeColors.background }}>
            <Header />

            <main className="flex-grow pt-0">

                {/* ── Hero ── */}
                <div className="relative" style={{ backgroundColor: themeColors.background }}>
                    <div
                        className="absolute inset-0 z-0 pointer-events-none brightness-55"
                        style={{
                            backgroundImage: `url('${deeData.backgroundImage}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                    <div
                        className="absolute inset-0 z-0 pointer-events-none opacity-40"
                        style={{ background: `linear-gradient(to bottom, rgba(10,12,16,0.7) 50%, rgba(10,12,16,0.9) 100%)` }}
                    />
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at center, transparent 40%, ${themeColors.background} 100%)` }}
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 h-40 z-[1] pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, transparent 0%, ${themeColors.featured}90 60%, ${themeColors.featured} 100%)` }}
                    />

                    <section className="relative z-10 min-h-screen flex items-start justify-center px-4 pt-32 pb-20">
                        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-start">

                            {/* ── Character image ── */}
                            <div className="relative flex items-start justify-center h-[580px] sm:h-[680px] lg:h-[780px] overflow-visible">
                                <img
                                    src="/VINFERNIA/VINFERNIA/Dee/Full_Model_Default.png"
                                    alt={deeData.name}
                                    className="relative w-full h-auto object-contain transition-opacity duration-250"
                                    style={{
                                        filter: `drop-shadow(0 0 25px ${themeColors.accent}40) drop-shadow(0 0 15px ${themeColors.accentAlt}30)`,
                                    }}
                                />
                            </div>

                            {/* ── Info panel ── */}
                            <div className="space-y-8">
                                <div>
                                    {deeData.genLogo && (
                                        <a href="/talents" className="inline-block mb-1 opacity-70 hover:opacity-100 transition-opacity duration-200">
                                            <img
                                                src={deeData.genLogo}
                                                alt="Gen Logo"
                                                className="h-10 w-auto"
                                                style={{ filter: `drop-shadow(0 0 8px ${signatureColor}90)` }}
                                            />
                                        </a>
                                    )}
                                    <h1
                                        className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 border-b-4 pb-2"
                                        style={{ borderColor: signatureColor, textShadow: `0 0 15px ${themeColors.accent}50` }}
                                    >
                                        <div className="drop-shadow-lg">{deeData.name}</div>
                                    </h1>
                                    {deeData.nameJapanese && (
                                        <p className="text-xl mb-2 text-white/50 font-light tracking-wide">{deeData.nameJapanese}</p>
                                    )}
                                    <p className="text-xl text-gray-300 italic">&quot;{deeData.tagline}&quot;</p>
                                </div>

                                <div
                                    className="backdrop-blur-sm rounded-lg p-6 border"
                                    style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                                >
                                    <h2 className="text-2xl font-semibold mb-4" style={{ color: signatureColor }}>About</h2>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {deeData.biography}
                                    </p>
                                </div>

                                <SocialLinks links={deeData.links} signatureColor={signatureColor} />

                                <div className="flex">
                                    <ScrollToLoreButton signatureColor={signatureColor} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* ── Live on Twitch ── */}
                <section
                    className="py-16 px-4 relative"
                    style={{ backgroundColor: themeColors.featured }}
                >
                    <div
                        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${themeColors.featured}00 0%, ${themeColors.recommended} 100%)` }}
                    />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-3xl font-bold text-white text-center mb-2" style={{ color: signatureColor }}>
                            Live on Twitch
                        </h2>
                        <p className="text-gray-400 text-center text-sm mb-8">
                            {TWITCH_CHANNEL} · <a href={`https://twitch.tv/${TWITCH_CHANNEL}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors" style={{ color: signatureColor }}>Open in Twitch ↗</a>
                        </p>
                        <div
                            className="backdrop-blur-sm rounded-lg border overflow-hidden"
                            style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                        >
                            <div className="aspect-video bg-gray-800">
                                <TwitchEmbed channel={TWITCH_CHANNEL} signatureColor={signatureColor} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Featured Clips ── */}
                <section className="py-20 px-4 relative" style={{ backgroundColor: themeColors.recommended }}>
                    <div className="max-w-6xl mx-auto relative z-0">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Clips</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {deeData.recommendedVideos.map((video) => (
                                <ClipCard key={video.id} clip={{ ...video, url: video.url || "#" }} signatureColor={signatureColor} variant="recommended" />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Recent Clips ── */}
                <section className="py-20 px-4 relative" style={{ backgroundColor: themeColors.recent }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${themeColors.recommended} 0%, ${themeColors.recent} 100%)` }}
                    />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Recent Clips</h2>
                        <RecentClips signatureColor={signatureColor} />
                        <div className="flex justify-center mt-8">
                            <ViewAllClipsButton
                                signatureColor={signatureColor}
                                href={`https://twitch.tv/${TWITCH_CHANNEL}/clips`}
                            />
                        </div>
                    </div>
                </section>

                {/* ── Lore ── */}
                <section id="lore-section" className="py-20 px-4 relative" style={{ backgroundColor: themeColors.background }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${themeColors.recent} 0%, ${themeColors.background} 100%)` }}
                    />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div
                            className="backdrop-blur-sm rounded-lg p-6 border"
                            style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                        >
                            <h2 className="text-2xl font-semibold mb-4" style={{ color: signatureColor }}>Lore</h2>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {deeData.lore}
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Model + Data ── */}
                <section id="data-section" className="py-20 px-4 relative" style={{ backgroundColor: themeColors.background }}>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">

                            {/* Model viewer */}
                            <div>
                                <h2 className="text-4xl font-bold text-white text-center mb-6">Model</h2>
                                <div className="relative flex items-center justify-center h-auto min-h-[500px] sm:h-[620px] lg:h-[700px] overflow-visible">
                                    {deeData.outfits.length > 1 && (
                                        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 flex-col gap-3 z-10">
                                            {deeData.outfits.map((outfit) => (
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
                                            alt={deeData.name}
                                            className="w-full h-auto object-contain transition-opacity duration-250"
                                            style={{
                                                maxHeight: "700px",
                                                filter: `drop-shadow(0 0 25px ${themeColors.accent}40)`,
                                            }}
                                        />
                                    </div>
                                </div>
                                {deeData.outfits.length > 1 && (
                                    <div className="flex lg:hidden gap-3 justify-center mt-4">
                                        {deeData.outfits.map((outfit) => (
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
                            <div>
                                <h2 className="text-4xl font-bold text-white text-center mb-6">Data</h2>
                                <div
                                    className="backdrop-blur-sm rounded-lg p-4 md:p-8 border w-full"
                                    style={{
                                        background: `linear-gradient(135deg, ${signatureColor}20, ${signatureColor}10)`,
                                        borderColor: `${signatureColor}30`,
                                    }}
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <DataItem label="Birthday" value={deeData.data.birthday} color={signatureColor} />
                                        <DataItem label="Oshi Mark" value={deeData.oshiMark} color={signatureColor} />
                                        <DataItem label="Height" value={deeData.data.height} color={signatureColor} />
                                        <DataItem label="Unit" value={deeData.data.unit} color={signatureColor} />

                                        <div className="md:col-span-2">
                                            <DataItem label="Debut Stream" value={deeData.data.debutStream} color={signatureColor} />
                                        </div>

                                        <div className="md:col-span-2">
                                            <DataItem
                                                label="Designer"
                                                value={
                                                    <a href={deeData.data.designer.url} target="_blank" rel="noopener noreferrer"
                                                        className="hover:brightness-110 underline transition-opacity duration-200"
                                                        style={{ color: signatureColor }}>
                                                        {deeData.data.designer.name}
                                                    </a>
                                                }
                                                color={signatureColor}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem
                                                label="Rigger"
                                                value={
                                                    <a href={deeData.data.modelArtist.url} target="_blank" rel="noopener noreferrer"
                                                        className="hover:brightness-110 underline transition-opacity duration-200"
                                                        style={{ color: signatureColor }}>
                                                        {deeData.data.modelArtist.name}
                                                    </a>
                                                }
                                                color={signatureColor}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Dream" value={deeData.data.dream} color={signatureColor} />
                                        </div>

                                        <DataItem label="Fan Name" value={deeData.data.fanName} color={signatureColor} />
                                        <DataItem label="Mascot" value={deeData.data.mascot} color={signatureColor} />

                                        <div className="md:col-span-2">
                                            <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
                                                <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>Hashtags</h3>
                                                <div className="space-y-1">
                                                    <p className="text-gray-300">Stream Tag: <span className="text-white">{deeData.data.hashtags.stream}</span></p>
                                                    <p className="text-gray-300">Fan Art: <span className="text-white">{deeData.data.hashtags.fanArt}</span></p>
                                                    <p className="text-gray-300">Clips: <span className="text-white">{deeData.data.hashtags.clips}</span></p>
                                                    {deeData.data.hashtags.nsfw && (
                                                        <p className="text-gray-300">18+: <span className="text-white">{deeData.data.hashtags.nsfw}</span></p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
                                                <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>Catchphrases</h3>
                                                <ul className="space-y-1">
                                                    {deeData.data.catchphrases.map((phrase, index) => (
                                                        <li key={index} className="text-white italic">&quot;{phrase}&quot;</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Regular/Specialty Streams" value={deeData.data.regularStreams} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Hobbies" value={deeData.data.hobbies} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Likes" value={deeData.data.likes} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Special Skills" value={deeData.data.specialSkills} color={signatureColor} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Meet the Others ── */}
                <section className="py-12 px-4 relative" style={{ backgroundColor: themeColors.background }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                        style={{ backgroundColor: `${signatureColor}20` }}
                    />
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-gray-500 text-sm uppercase tracking-widest mb-10">Meet the Others</p>
                        {/* Grid layout matching Gomifuyu — responsive, fluid cards */}
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

                <BackToTalentsButton signatureColor={signatureColor} />

            </main>

            <Footer />
        </div>
    );
}