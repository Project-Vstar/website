"use client";
import React, { useState, useMemo, useCallback, memo } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SocialLinks } from "@/app/components/SocialLinks";
import VideoCard from "@/app/components/Videocard";
import { BackToTalentsButton } from "@/app/components/backtotalentsbutton";
import data from "./data.json";

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
            <img src="/VINFERNIA/VINFERNIA/Lockhart/featured-placeholder.png" alt="Video thumbnail" className="w-full h-full object-cover" />
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

export default function LockhartPage() {
    const [selectedOutfit, setSelectedOutfit] = useState(0);
    const [activePersona, setActivePersona] = useState("lockhart");
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [hasLoadedOther, setHasLoadedOther] = useState(false);

    const isLockhart = activePersona === "lockhart";
    const currentTheme = data.theme[activePersona];
    const signatureColor = currentTheme.accent;
    const talentData = isLockhart ? data.lockhart : data.other;

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
                className={`fixed bottom-8 z-50 w-24 h-24 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 group ${isLockhart ? "left-8" : "left-8 lg:right-8 lg:left-auto"
                    }`}
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
                        style={{ background: `linear-gradient(to bottom, transparent 0%, ${currentTheme.background}90 60%, ${currentTheme.background} 100%)` }}
                    />

                    <section className="relative z-10 min-h-screen flex items-start justify-center px-4 pt-32 pb-20">
                        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-start">

                            <div className={`relative flex items-center justify-center h-[700px] overflow-visible transition-opacity duration-250 ${isTransitioning ? "opacity-0" : "opacity-100"} ${!isLockhart ? "lg:order-2" : "lg:order-1"}`}>
                                <div className={`absolute top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10 ${isLockhart ? "left-0" : "left-0 lg:right-0 lg:left-auto"}`}>
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
                                <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                                    <img
                                        src={currentOutfitImage}
                                        alt={talentData.name}
                                        className="w-auto object-contain transition-opacity duration-250"
                                        style={{
                                            height: "720px",
                                            maxHeight: "none",
                                            filter: !isLockhart
                                                ? `drop-shadow(0 0 30px ${data.theme.other.accent}40)`
                                                : `drop-shadow(0 0 20px ${data.theme.lockhart.accent}20)`,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className={`space-y-8 transition-opacity duration-250 ${isTransitioning ? "opacity-0" : "opacity-100"} ${!isLockhart ? "lg:order-1" : "lg:order-2"}`}>
                                <div>
                                    <h1
                                        className="text-5xl lg:text-6xl font-bold text-white mb-2 border-b-4 pb-2 transition-colors duration-300"
                                        style={{
                                            borderColor: signatureColor,
                                            textShadow: !isLockhart ? `0 0 20px ${data.theme.other.accent}60` : "none",
                                        }}
                                    >
                                        <div className="drop-shadow-lg">{talentData.name}</div>
                                    </h1>
                                    <p className="text-2xl mb-4 transition-colors duration-300" style={{ color: signatureColor }}>
                                        {talentData.nameJapanese}
                                    </p>
                                    <p className="text-xl text-gray-300 italic">"{talentData.tagline}"</p>
                                </div>

                                <div
                                    className="backdrop-blur-sm rounded-lg p-6 border transition-colors duration-300"
                                    style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                                >
                                    <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300" style={{ color: signatureColor }}>About</h2>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">{talentData.biography}</p>
                                </div>

                                <SocialLinks links={talentData.links} signatureColor={signatureColor} hoverTextColor={isLockhart ? "#1a1a1a" : "#ffffff"} />

                                <div
                                    className="backdrop-blur-sm rounded-lg p-6 border transition-colors duration-300"
                                    style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                                >
                                    <h2 className="text-2xl font-semibold mb-4 transition-colors duration-300" style={{ color: signatureColor }}>Featured Video</h2>
                                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                                        <YouTubeFacade videoId={talentData.featuredVideoId} signatureColor={signatureColor} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

                <section
                    className="py-20 px-4 relative transition-colors duration-400"
                    style={{ background: `linear-gradient(135deg, ${currentTheme.recent}20 0%, ${currentTheme.recent}10 100%)` }}
                >
                    <div
                        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                        style={{ background: `linear-gradient(to top, transparent 0%, ${currentTheme.background}80 70%, ${currentTheme.background} 100%)` }}
                    />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Recent Videos</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {talentData.videos.map((video) => (
                                <VideoCard key={video.id} video={video} signatureColor={signatureColor} />
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <a
                                href="https://youtube.com/@Lockhart_VT"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-105 shadow-lg hover:brightness-110"
                                style={{ background: `linear-gradient(to right, ${signatureColor}, ${signatureColor}dd)`, color: isLockhart ? "#1a1a1a" : "#ffffff" }}
                            >
                                View All Videos
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 transition-colors duration-400">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">DATA</h2>
                        <div
                            className="backdrop-blur-sm rounded-lg p-8 border transition-colors duration-300"
                            style={{
                                background: `linear-gradient(135deg, ${signatureColor}20, ${signatureColor}10)`,
                                borderColor: `${signatureColor}30`,
                            }}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <DataItem label="Birthday" value={talentData.data.birthday} color={signatureColor} />
                                <DataItem label="Debut Stream" value={talentData.data.debutStream} color={signatureColor} />
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
                                                <li key={index} className="text-white italic">"{phrase}"</li>
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
                </section>

                <BackToTalentsButton signatureColor={signatureColor} hoverTextColor={isLockhart ? "#1a1a1a" : "#ffffff"} />

            </main>

            <Footer />
        </div>
    );
}