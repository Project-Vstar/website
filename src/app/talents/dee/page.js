"use client";
import React, { useState, useMemo, useCallback, memo } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SocialLinks } from "@/app/components/SocialLinks";
import VideoCard from "@/app/components/Videocard";
import deeData from "./data.json";
import { BackToTalentsButton } from "@/app/components/backtotalentsbutton";

const themeColors = deeData.theme;

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

const YouTubeFacade = memo(function YouTubeFacade({ videoId, signatureColor }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const handleClick = useCallback(() => { setIsLoaded(true); }, []);

    if (!videoId) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <p className="text-gray-400 text-lg">Featured video coming soon!</p>
            </div>
        );
    }
    if (isLoaded) {
        return (
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Featured Video"
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
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#1a1a1a" }}>
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </button>
    );
});

const ScheduleDay = memo(function ScheduleDay({ day, time, activity, signatureColor }) {
    return (
        <div className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-white/10 hover:border-opacity-30 transition-colors">
            <div className="flex-shrink-0">
                <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center font-bold"
                    style={{ backgroundColor: `${signatureColor}30`, color: signatureColor }}
                >
                    {day.substring(0, 3)}
                </div>
            </div>
            <div className="flex-1">
                <p className="font-semibold text-white">{activity}</p>
                <p className="text-sm text-gray-400">{time}</p>
            </div>
        </div>
    );
});

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
                style={{ transform: "scale(3) translateY(0%) translateX(2%)", transformOrigin: "center top" }}
            />
        </button>
    );
});

export default function DeePage() {
    const [selectedOutfit, setSelectedOutfit] = useState(0);
    const signatureColor = themeColors.accent;

    const handleOutfitClick = useCallback((id) => { setSelectedOutfit(id); }, []);

    const currentOutfitImage = useMemo(
        () => deeData.outfits[selectedOutfit]?.image,
        [selectedOutfit]
    );

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: themeColors.background }}>

            <Header />

            <main className="flex-grow pt-0">

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
                        style={{ background: `linear-gradient(to bottom, rgba(26,26,26,0.7) 50%, rgba(26,26,26,0.9) 100%)` }}
                    />
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at center, transparent 40%, ${themeColors.background} 100%)` }}
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 h-40 z-[1] pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, transparent 0%, ${themeColors.background}90 60%, ${themeColors.background} 100%)` }}
                    />

                    <section className="relative z-10 min-h-screen flex items-start justify-center px-4 pt-32 pb-20">
                        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-start">

                            <div className="relative flex items-center justify-center h-[900px] overflow-visible">
                                <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                                    <img
                                        src="/VINFERNIA/VINFERNIA/Dee/Full_Model_Default.png"
                                        alt={deeData.name}
                                        className="w-auto object-contain transition-opacity duration-250"
                                        style={{
                                            maxHeight: "900px",
                                            transform: "scale(1.9)",
                                            filter: `drop-shadow(0 0 25px ${themeColors.accent}40) drop-shadow(0 0 15px ${themeColors.accentAlt}40)`,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h1
                                        className="text-5xl lg:text-6xl font-bold text-white mb-2 border-b-4 pb-2"
                                        style={{
                                            borderImage: `linear-gradient(to right, ${signatureColor}, ${themeColors.accentAlt}) 1`,
                                            textShadow: `0 0 15px ${themeColors.accent}40`,
                                        }}
                                    >
                                        <div className="drop-shadow-lg">{deeData.name}</div>
                                    </h1>
                                    <p className="text-2xl mb-4 text-white">
                                        {deeData.nameJapanese}
                                    </p>
                                    <p className="text-xl text-gray-300 italic">"{deeData.tagline}"</p>
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
                            </div>

                        </div>
                    </section>
                </div>

                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                            <div
                                className="backdrop-blur-sm rounded-lg p-6 border"
                                style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                            >
                                <h2 className="text-2xl font-semibold mb-4" style={{ color: signatureColor }}>Featured Video</h2>
                                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                                    <YouTubeFacade videoId={deeData.featuredVideoId} signatureColor={signatureColor} />
                                </div>
                            </div>

                            <div
                                className="backdrop-blur-sm rounded-lg p-6 border"
                                style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                            >
                                <h2 className="text-2xl font-semibold mb-4" style={{ color: signatureColor }}>Stream Schedule</h2>
                                <div className="space-y-3">
                                    {deeData.schedule.map((item, index) => (
                                        <ScheduleDay
                                            key={index}
                                            day={item.day}
                                            time={item.time}
                                            activity={item.activity}
                                            signatureColor={signatureColor}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="py-20 px-4 relative"
                    style={{ background: `linear-gradient(135deg, ${themeColors.recommended}20 0%, ${themeColors.recommended}10 100%)` }}
                >
                    <div
                        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
                        style={{ background: `linear-gradient(to top, transparent 0%, ${themeColors.background}80 70%, ${themeColors.background} 100%)` }}
                    />
                    <div className="max-w-6xl mx-auto relative z-0">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Recommended Videos</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {deeData.recommendedVideos.map((video) => (
                                <VideoCard key={video.id} video={video} signatureColor={signatureColor} variant="recommended" />
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    className="py-20 px-4 relative"
                    style={{ background: `linear-gradient(135deg, ${themeColors.recent}20 0%, ${themeColors.recent}10 100%)` }}
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Recent Videos</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {deeData.videos.map((video) => (
                                <VideoCard key={video.id} video={video} signatureColor={signatureColor} />
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <a
                                href="https://youtube.com/@MfSDD"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-105 shadow-lg hover:brightness-110"
                                style={{ background: `linear-gradient(to right, ${signatureColor}, ${signatureColor}dd)`, color: "#f5f5f5" }}
                            >
                                View All Videos
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">

                            <div>
                                <h2 className="text-4xl font-bold text-white text-center mb-6">Model</h2>
                                <div className="relative flex items-center justify-center h-[1000px] overflow-visible">
                                    <div className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-col gap-3 z-10">
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
                                    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                                        <img
                                            src={currentOutfitImage}
                                            alt={deeData.name}
                                            className="w-auto object-contain transition-opacity duration-250"
                                            style={{
                                                height: "100%",
                                                maxHeight: "none",
                                                transform: "scale(1.9) translateX(1%)",
                                                filter: `drop-shadow(0 0 25px ${themeColors.accent}40)`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

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
                                        <DataItem label="Birthday" value={deeData.data.birthday} color={signatureColor} />

                                        <div className="md:col-span-2">
                                            <DataItem label="Debut Stream" value={deeData.data.debutStream} color={signatureColor} />
                                        </div>

                                        <DataItem label="Height" value={deeData.data.height} color={signatureColor} />
                                        <DataItem label="Unit" value={deeData.data.unit} color={signatureColor} />

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

                                        <div className="md:col-span-2">
                                            <DataItem label="Fan Name" value={deeData.data.fanName} color={signatureColor} />
                                        </div>

                                        <div className="md:col-span-2">
                                            <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
                                                <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>Hashtags</h3>
                                                <div className="space-y-1">
                                                    <p className="text-gray-300">Stream Tag: <span className="text-white">{deeData.data.hashtags.stream}</span></p>
                                                    <p className="text-gray-300">Fan Art: <span className="text-white">{deeData.data.hashtags.fanArt}</span></p>
                                                    <p className="text-gray-300">Clips: <span className="text-white">{deeData.data.hashtags.clips}</span></p>
                                                    <p className="text-gray-300">18+: <span className="text-white">{deeData.data.hashtags.nsfw}</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
                                                <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>Catchphrases</h3>
                                                <ul className="space-y-1">
                                                    {deeData.data.catchphrases.map((phrase, index) => (
                                                        <li key={index} className="text-white italic">"{phrase}"</li>
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

                <BackToTalentsButton signatureColor={signatureColor} />

            </main>

            <Footer />
        </div>
    );
}