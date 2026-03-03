"use client";
import React, { useState, useMemo, useCallback, memo } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { SocialLinks } from "@/app/components/SocialLinks";
import VideoCard from "@/app/components/Videocard";
import gomifuyuData from "./data.json";
import { BackToTalentsButton } from "@/app/components/backtotalentsbutton";

const themeColors = gomifuyuData.theme;

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
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24" style={{ color: "#f5f5f5" }}>
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </button>
    );
});

export default function GomifuyuPage() {
    const [selectedOutfit, setSelectedOutfit] = useState(0);
    const signatureColor = themeColors.accent;

    const currentOutfitImage = useMemo(
        () => gomifuyuData.outfits[selectedOutfit]?.image,
        [selectedOutfit]
    );

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: themeColors.background }}>

            <Header />

            <main className="flex-grow pt-0">

                <div className="relative" style={{ backgroundColor: themeColors.background }}>
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: `url('${gomifuyuData.backgroundImage}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />

                    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center" style={{ opacity: 0.18 }}>
                        <img
                            src={gomifuyuData.logoImage}
                            alt="Gomifuyu logo watermark"
                            className="object-contain select-none"
                            style={{ width: "85vw", maxWidth: "1100px" }}
                        />
                    </div>

                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{ background: "linear-gradient(to bottom, rgba(19,5,5,0.55) 30%, rgba(19,5,5,0.90) 100%)" }}
                    />
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at center, transparent 30%, ${themeColors.background} 100%)` }}
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 h-40 z-[1] pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, transparent 0%, ${themeColors.featured}cc 70%, ${themeColors.featured} 100%)` }}
                    />

                    <section className="relative z-10 min-h-screen flex items-start justify-center px-4 pt-32 pb-20">
                        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-start">

                            <div className="relative flex items-center justify-center h-[700px] overflow-visible">
                                <img
                                    src="/VINFERNIA/VINFERNIA/Gomifuyu/Gomifuyu_Model.png"
                                    alt={gomifuyuData.name}
                                    className="w-full h-auto object-contain"
                                    style={{
                                        maxHeight: "720px",
                                        filter: `drop-shadow(0 0 30px ${themeColors.accent}50)`,
                                    }}
                                />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h1
                                        className="text-5xl lg:text-6xl font-bold text-white mb-2 border-b-4 pb-2"
                                        style={{ borderColor: signatureColor, textShadow: `0 0 15px ${themeColors.accent}50` }}
                                    >
                                        <div className="drop-shadow-lg">{gomifuyuData.name}</div>
                                    </h1>
                                    <p className="text-2xl mb-4" style={{ color: signatureColor }}>
                                        {gomifuyuData.nameJapanese}
                                    </p>
                                    <p className="text-xl text-gray-300 italic">"{gomifuyuData.tagline}"</p>
                                </div>

                                <div
                                    className="backdrop-blur-sm rounded-lg p-6 border"
                                    style={{ backgroundColor: `${signatureColor}10`, borderColor: `${signatureColor}30` }}
                                >
                                    <h2 className="text-2xl font-semibold mb-4" style={{ color: signatureColor }}>About</h2>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {gomifuyuData.biography}
                                    </p>
                                </div>

                                <SocialLinks links={gomifuyuData.links} signatureColor={signatureColor} />
                            </div>

                        </div>
                    </section>
                </div>

                <section className="py-20 px-4 relative" style={{ backgroundColor: themeColors.featured }}>
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at center, ${signatureColor}1a 0%, transparent 70%)` }}
                    />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-4xl font-bold text-white text-center mb-10">Featured Video</h2>
                        <div
                            className="rounded-xl p-3 border"
                            style={{
                                backgroundColor: `${signatureColor}12`,
                                borderColor: `${signatureColor}30`,
                                boxShadow: `0 0 50px ${signatureColor}25`,
                            }}
                        >
                            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                                <YouTubeFacade videoId={gomifuyuData.featuredVideoId} signatureColor={signatureColor} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 relative" style={{ backgroundColor: themeColors.recommended }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${themeColors.featured} 0%, ${themeColors.recommended} 100%)` }}
                    />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Recommended Videos</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {gomifuyuData.recommendedVideos.map((video) => (
                                <VideoCard key={video.id} video={video} signatureColor={signatureColor} variant="recommended" />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 relative" style={{ backgroundColor: themeColors.recent }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${themeColors.recommended} 0%, ${themeColors.recent} 100%)` }}
                    />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Recent Videos</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {gomifuyuData.videos.map((video) => (
                                <VideoCard key={video.id} video={video} signatureColor={signatureColor} />
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <a
                                href="https://youtube.com/@Gomifuyu"
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

                <section className="py-20 px-4 relative" style={{ backgroundColor: themeColors.background }}>
                    <div
                        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${themeColors.recent} 0%, ${themeColors.background} 100%)` }}
                    />
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">

                            <div>
                                <h2 className="text-4xl font-bold text-white text-center mb-6">Model</h2>
                                <div className="relative flex items-center justify-center h-[700px] overflow-visible">
                                    <img
                                        src={currentOutfitImage}
                                        alt={gomifuyuData.name}
                                        className="w-full h-auto object-contain"
                                        style={{ maxHeight: "720px", filter: `drop-shadow(0 0 25px ${themeColors.accent}40)` }}
                                    />
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
                                        <DataItem label="Birthday" value={gomifuyuData.data.birthday} color={signatureColor} />
                                        <DataItem label="Debut Stream" value={gomifuyuData.data.debutStream} color={signatureColor} />
                                        <DataItem label="Height" value={gomifuyuData.data.height} color={signatureColor} />
                                        <DataItem label="Unit" value={gomifuyuData.data.unit} color={signatureColor} />

                                        <div className="md:col-span-2">
                                            <DataItem
                                                label="Designer"
                                                value={
                                                    <a href={gomifuyuData.data.designer.url} target="_blank" rel="noopener noreferrer"
                                                        className="hover:brightness-110 underline" style={{ color: signatureColor }}>
                                                        {gomifuyuData.data.designer.name}
                                                    </a>
                                                }
                                                color={signatureColor}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem
                                                label="Model Artist"
                                                value={
                                                    <a href={gomifuyuData.data.modelArtist.url} target="_blank" rel="noopener noreferrer"
                                                        className="hover:brightness-110 underline" style={{ color: signatureColor }}>
                                                        {gomifuyuData.data.modelArtist.name}
                                                    </a>
                                                }
                                                color={signatureColor}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Dream" value={gomifuyuData.data.dream} color={signatureColor} />
                                        </div>

                                        <DataItem label="Fan Name" value={gomifuyuData.data.fanName} color={signatureColor} />
                                        <DataItem label="Mascot" value={gomifuyuData.data.mascot} color={signatureColor} />

                                        <div className="md:col-span-2">
                                            <div className="pb-4 border-b border-white/10 mb-4">
                                                <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>Hashtags</h3>
                                                <div className="space-y-1">
                                                    <p className="text-gray-300">Stream Tag: <span className="text-white">{gomifuyuData.data.hashtags.stream}</span></p>
                                                    <p className="text-gray-300">Fan Art: <span className="text-white">{gomifuyuData.data.hashtags.fanArt}</span></p>
                                                    <p className="text-gray-300">Clips: <span className="text-white">{gomifuyuData.data.hashtags.clips}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <div className="pb-4 border-b border-white/10 mb-4">
                                                <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>Catchphrases</h3>
                                                <ul className="space-y-1">
                                                    {gomifuyuData.data.catchphrases.map((phrase, index) => (
                                                        <li key={index} className="text-white italic">"{phrase}"</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Regular/Specialty Streams" value={gomifuyuData.data.regularStreams} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Hobbies" value={gomifuyuData.data.hobbies} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Likes" value={gomifuyuData.data.likes} color={signatureColor} />
                                        </div>
                                        <div className="md:col-span-2">
                                            <DataItem label="Special Skills" value={gomifuyuData.data.specialSkills} color={signatureColor} />
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