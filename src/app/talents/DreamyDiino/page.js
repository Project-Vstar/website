/* eslint-disable react/prop-types */
"use client";
import React, { useState, useMemo, useCallback, memo } from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SocialLinks } from "@/app/components/SocialLinks";
import VideoCard from "@/app/components/Videocard";
import { BackToTalentsButton } from "@/app/components/backtotalentsbutton";
import dreamyDiinoData from "./data.json";
import talentsData from "@/app/talents/data.json";
import ScrollToDataButton from "@/app/components/ScrollToDataButton";

const themeColors = dreamyDiinoData.theme;

// ---------------------------------------------------------------------------
// Darken hex helper (same as talents page)
// ---------------------------------------------------------------------------
function darkenHex(hex, amount = 40) {
    const n = parseInt(hex.replace("#", ""), 16);
    const r = Math.max(0, (n >> 16) - amount);
    const g = Math.max(0, ((n >> 8) & 0xff) - amount);
    const b = Math.max(0, (n & 0xff) - amount);
    return `rgb(${r},${g},${b})`;
}

// ---------------------------------------------------------------------------
// DataItem
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// YouTubeFacade
// ---------------------------------------------------------------------------
const YouTubeFacade = memo(function YouTubeFacade({ videoId, signatureColor }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const handleClick = useCallback(() => { setIsLoaded(true); }, []);

    if (!videoId) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <p className="text-gray-400 text-lg">Channel section coming soon!</p>
            </div>
        );
    }
    if (isLoaded) {
        return (
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Channel Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        );
    }
    return (
        <button onClick={handleClick} className="relative w-full h-full group cursor-pointer bg-gray-900" aria-label="Play video">
            <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="Video thumbnail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-200">
                <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: signatureColor }}
                >
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#0C0E0D" }}>
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </button>
    );
});

// ---------------------------------------------------------------------------
// OutfitButton
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// GenmateTalentCard — mirrors TalentCard from the talents page
// ---------------------------------------------------------------------------
const GenmateTalentCard = memo(function GenmateTalentCard({ talent, groupConfig }) {
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
            {/* Square card */}
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
                {/* Group logo watermark — layer 1 */}
                {groupConfig?.logo && (
                    <img
                        src={groupConfig.logo}
                        alt=""
                        aria-hidden="true"
                        className="absolute pointer-events-none select-none"
                        style={{
                            width: "130%",
                            height: "130%",
                            top: "-15%",
                            left: "-15%",
                            objectFit: "contain",
                            opacity: 0.12,
                            filter: "brightness(0) invert(0)",
                            mixBlendMode: "multiply",
                        }}
                    />
                )}

                {/* Group logo watermark — layer 2 (darker tint) */}
                {groupConfig?.logo && (
                    <img
                        src={groupConfig.logo}
                        alt=""
                        aria-hidden="true"
                        className="absolute pointer-events-none select-none"
                        style={{
                            width: "130%",
                            height: "130%",
                            top: "-15%",
                            left: "-15%",
                            objectFit: "contain",
                            opacity: 0.18,
                            filter: "brightness(0)",
                        }}
                    />
                )}

                {/* Character art */}
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

                {/* Hover vignette */}
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: `radial-gradient(ellipse at center, transparent 40%, ${dark}88 100%)`,
                        opacity: hovered ? 1 : 0,
                        transition: "opacity 0.3s ease",
                    }}
                />
            </div>

            {/* Name */}
            <p
                className="mt-3 text-sm font-semibold text-center tracking-wide text-slate-200 transition-all duration-300"
                style={{
                    textShadow: hovered
                        ? `0 0 8px ${theme}, 0 0 20px ${theme}88`
                        : "none",
                }}
            >
                {talent.name}
            </p>
        </Link>
    );
});

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function DreamyDiinoPage() {
    const [selectedOutfit, setSelectedOutfit] = useState(0);
    const signatureColor = themeColors.accent;

    // Genmates: same group, excluding self and staff
    const genmates = talentsData.talents.filter(
        (t) => t.group === "vinfernia" && t.name !== dreamyDiinoData.name
    );
    const vinferniaGroupConfig = talentsData.groups.find((g) => g.id === "vinfernia");

    const handleOutfitClick = useCallback((id) => { setSelectedOutfit(id); }, []);

    const currentOutfitImage = useMemo(
        () => dreamyDiinoData.outfits[selectedOutfit]?.image,
        [selectedOutfit]
    );

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: themeColors.background }}>

            <Header />

            <main className="flex-grow pt-0">

                {/* ── HERO ─────────────────────────────────────────────────── */}
                <div className="relative" style={{ backgroundColor: themeColors.background }}>
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: `url('${dreamyDiinoData.backgroundImage}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                    <div
                        className="absolute inset-0 z-0 pointer-events-none opacity-30"
                        style={{ background: `linear-gradient(to bottom, rgba(12,14,13,0.7) 50%, rgba(12,14,13,0.9) 100%)` }}
                    />
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at center, transparent 40%, ${themeColors.background} 100%)` }}
                    />
                    {/* Hero → Channel fade */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-40 z-[1] pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, transparent 0%, ${themeColors.featured}90 60%, ${themeColors.featured} 100%)` }}
                    />

                    <section className="relative z-10 min-h-screen flex items-start justify-center px-4 pt-32 pb-20">
                        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-start">

                            {/* Model image */}
                            <div className="relative flex items-center justify-center h-[700px] overflow-visible">
                                <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                                    <img
                                        src="/VINFERNIA/VINFERNIA/DreamyDiino/DreamyDiinoPNG.png"
                                        alt={dreamyDiinoData.name}
                                        className="w-full h-auto object-contain transition-opacity duration-250"
                                        style={{
                                            maxHeight: "720px",
                                            filter: `drop-shadow(0 0 25px ${themeColors.accent}40) drop-shadow(0 0 15px ${themeColors.accentAlt}30)`,
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="space-y-8">

                                {/* Gen logo + name block */}
                                <div>
                                    {dreamyDiinoData.genLogo && (
                                        <a href="/talents" className="inline-block mb-3 opacity-70 hover:opacity-100 transition-opacity duration-200">
                                            <img src={dreamyDiinoData.genLogo} alt="Gen Logo" className="h-10 w-auto" />
                                        </a>
                                    )}

                                    <h1
                                        className="text-5xl lg:text-6xl font-bold text-white mb-2 border-b-4 pb-2"
                                        style={{ borderColor: signatureColor, textShadow: `0 0 15px ${themeColors.accent}50` }}
                                    >
                                        <div className="drop-shadow-lg">{dreamyDiinoData.name}</div>
                                    </h1>

                                    <p className="text-2xl mb-4" style={{ color: signatureColor }}>
                                        {dreamyDiinoData.title}
                                    </p>

                                    <p className="text-xl text-gray-300 italic">&quot;{dreamyDiinoData.tagline}&quot;</p>
                                </div>

                                {/* About */}
                                <div
                                    className="backdrop-blur-sm rounded-lg p-6 border"
                                    style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                                >
                                    <h2 className="text-2xl font-semibold mb-4" style={{ color: signatureColor }}>About</h2>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {dreamyDiinoData.biography}
                                    </p>
                                </div>

                                <ScrollToDataButton signatureColor={signatureColor} />

                                <SocialLinks links={dreamyDiinoData.links} signatureColor={signatureColor} />

                            </div>
                        </div>
                    </section>
                </div>

                {/* ── CHANNEL ──────────────────────────────────────────────── */}
                <section
                    className="py-16 px-4 relative"
                    style={{ backgroundColor: themeColors.featured }}
                >
                    <div
                        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${themeColors.featured}00 0%, ${themeColors.recommended} 100%)` }}
                    />
                    <div className="max-w-3xl mx-auto relative z-10">
                        <h2 className="text-3xl font-bold text-white text-center mb-8" style={{ color: signatureColor }}>Channel</h2>
                        <div
                            className="backdrop-blur-sm rounded-lg border overflow-hidden"
                            style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                        >
                            <div className="aspect-video bg-gray-800">
                                <YouTubeFacade videoId={dreamyDiinoData.featuredVideoId} signatureColor={signatureColor} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── RECOMMENDED VIDEOS ───────────────────────────────────── */}
                <section className="py-20 px-4 relative" style={{ backgroundColor: themeColors.recommended }}>
                    <div className="max-w-6xl mx-auto relative z-0">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Recommended Videos</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {dreamyDiinoData.recommendedVideos.map((video) => (
                                <VideoCard key={video.id} video={video} signatureColor={signatureColor} variant="recommended" />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── RECENT VIDEOS ────────────────────────────────────────── */}
                <section className="py-20 px-4 relative" style={{ backgroundColor: themeColors.recent }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${themeColors.recommended} 0%, ${themeColors.recent} 100%)` }}
                    />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Recent Videos</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {dreamyDiinoData.videos.map((video) => (
                                <VideoCard key={video.id} video={video} signatureColor={signatureColor} />
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <a
                                href="https://youtube.com/@DreamyDiino"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-105 shadow-lg hover:brightness-110"
                                style={{ background: `linear-gradient(to right, ${signatureColor}, ${signatureColor}dd)`, color: "#0C0E0D" }}
                            >
                                View All Videos
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── LORE ─────────────────────────────────────────────────── */}
                <section className="py-20 px-4 relative" style={{ backgroundColor: themeColors.background }}>
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
                                {dreamyDiinoData.lore}
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── MODEL + DATA ─────────────────────────────────────────── */}
                <section id="data-section" className="py-20 px-4 relative" style={{ backgroundColor: themeColors.background }}>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">

                            {/* Model viewer */}
                            <div>
                                <h2 className="text-4xl font-bold text-white text-center mb-6">Model</h2>
                                <div className="relative flex items-center justify-center h-[700px] overflow-visible">

                                    {/* Outfit picker — only shown when there are multiple outfits */}
                                    {dreamyDiinoData.outfits.length > 1 && (
                                        <div className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-col gap-3 z-10">
                                            {dreamyDiinoData.outfits.map((outfit) => (
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

                                    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                                        <img
                                            src={currentOutfitImage}
                                            alt={dreamyDiinoData.name}
                                            className="w-full h-auto object-contain transition-opacity duration-250"
                                            style={{
                                                maxHeight: "720px",
                                                filter: `drop-shadow(0 0 25px ${themeColors.accent}40)`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Data */}
                            <div>
                                <h2 className="text-4xl font-bold text-white text-center mb-6">Data</h2>
                                <div
                                    className="backdrop-blur-sm rounded-lg p-8 border w-full"
                                    style={{
                                        background: `linear-gradient(135deg, ${signatureColor}20, ${signatureColor}10)`,
                                        borderColor: `${signatureColor}30`,
                                    }}
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <DataItem label="Birthday" value={dreamyDiinoData.data.birthday} color={signatureColor} />
                                        <DataItem label="Oshi Mark" value={dreamyDiinoData.oshiMark} color={signatureColor} />
                                        <DataItem label="Height" value={dreamyDiinoData.data.height} color={signatureColor} />
                                        <DataItem label="Unit" value={dreamyDiinoData.data.unit} color={signatureColor} />

                                        <div className="md:col-span-2">
                                            <DataItem
                                                label="Designer"
                                                value={
                                                    <a href={dreamyDiinoData.data.designer.url} target="_blank" rel="noopener noreferrer"
                                                        className="hover:brightness-110 underline transition-opacity duration-200"
                                                        style={{ color: signatureColor }}>
                                                        {dreamyDiinoData.data.designer.name}
                                                    </a>
                                                }
                                                color={signatureColor}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem
                                                label="Model Artist"
                                                value={
                                                    <a href={dreamyDiinoData.data.modelArtist.url} target="_blank" rel="noopener noreferrer"
                                                        className="hover:brightness-110 underline transition-opacity duration-200"
                                                        style={{ color: signatureColor }}>
                                                        {dreamyDiinoData.data.modelArtist.name}
                                                    </a>
                                                }
                                                color={signatureColor}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Dream" value={dreamyDiinoData.data.dream} color={signatureColor} />
                                        </div>

                                        <DataItem label="Fan Name" value={dreamyDiinoData.data.fanName} color={signatureColor} />
                                        <DataItem label="Mascot" value={dreamyDiinoData.data.mascot} color={signatureColor} />

                                        <div className="md:col-span-2">
                                            <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
                                                <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>Hashtags</h3>
                                                <div className="space-y-1">
                                                    <p className="text-gray-300">Stream Tag: <span className="text-white">{dreamyDiinoData.data.hashtags.stream}</span></p>
                                                    <p className="text-gray-300">Fan Art: <span className="text-white">{dreamyDiinoData.data.hashtags.fanArt}</span></p>
                                                    <p className="text-gray-300">Clips: <span className="text-white">{dreamyDiinoData.data.hashtags.clips}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
                                                <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>Catchphrases</h3>
                                                <ul className="space-y-1">
                                                    {dreamyDiinoData.data.catchphrases.map((phrase, index) => (
                                                        <li key={index} className="text-white italic">&quot;{phrase}&quot;</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Regular/Specialty Streams" value={dreamyDiinoData.data.regularStreams} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Hobbies" value={dreamyDiinoData.data.hobbies} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Likes" value={dreamyDiinoData.data.likes} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Special Skills" value={dreamyDiinoData.data.specialSkills} color={signatureColor} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── MEMBER NAVIGATION ────────────────────────────────────── */}
                <section className="py-12 px-4 relative" style={{ backgroundColor: themeColors.background }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                        style={{ backgroundColor: `${signatureColor}20` }}
                    />
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-gray-500 text-sm uppercase tracking-widest mb-10">Meet the Others</p>
                        <div className="flex flex-wrap gap-8 justify-center">
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