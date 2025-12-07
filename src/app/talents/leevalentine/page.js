"use client";
import React, { useState, useMemo, useCallback, memo } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

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

const VideoCard = memo(function VideoCard({ video, signatureColor }) {
    return (
        <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border transition-colors duration-200 hover:scale-105"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${signatureColor}80`; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; }}
        >
            <div className="aspect-video bg-gray-800 overflow-hidden">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                />
            </div>
            <div className="p-4">
                <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-xs text-gray-400">{video.date}</p>
            </div>
        </a>
    );
});

const RecommendedVideoCard = memo(function RecommendedVideoCard({ video, signatureColor }) {
    return (
        <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border transition-all duration-200 hover:scale-105"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${signatureColor}80`; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; }}
        >
            <div className="aspect-video bg-gray-800 overflow-hidden">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                />
            </div>
            <div className="p-4">
                <h3 className="text-base font-semibold text-white mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-xs text-gray-400">{video.date}</p>
            </div>
        </a>
    );
});

const OutfitButton = memo(function OutfitButton({ outfit, isSelected, signatureColor, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-transform duration-200 ${
                isSelected ? "scale-110" : "border-gray-600 opacity-60 hover:opacity-100"
            }`}
            style={{
                borderColor: isSelected ? signatureColor : undefined,
                boxShadow: isSelected ? `0 0 20px ${signatureColor}80` : undefined,
            }}
        >
            <img
                src={outfit.image}
                alt={outfit.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%", transform: 'scale(1.5)' }}
            />
        </button>
    );
});

const SocialLink = memo(function SocialLink({ link, signatureColor }) {
    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-2 rounded-full font-semibold transition-transform duration-200 hover:scale-105 shadow-lg hover:brightness-110"
            style={{
                background: `linear-gradient(to right, ${signatureColor}, ${signatureColor}dd)`,
                color: "#ffffff",
            }}
        >
            <img 
                src={link.icon} 
                alt={link.platform} 
                className="w-5 h-5 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
            />
            {link.platform}
        </a>
    );
});

const YouTubeFacade = memo(function YouTubeFacade({ videoId, signatureColor }) {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = useCallback(() => {
        setIsLoaded(true);
    }, []);

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
        <button
            onClick={handleClick}
            className="relative w-full h-full group cursor-pointer bg-gray-900"
            aria-label="Play video"
        >
            <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-200">
                <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: signatureColor }}
                >
                    <svg 
                        className="w-6 h-6 ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ color: '#ffffff' }}
                    >
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
        </button>
    );
});

const leeValentineData = {
    name: "Lee Valentine",
    tagline: "Your friendly neighborhood demon VTuber",
    biography: `Lee Valentine is a demon VTuber who streams a variety of content with a focus on horror games and Identity V. Known for their love of all things spooky and their passion for cosplay, Lee creates a welcoming space for their community of IMPs.

With a dream of one day being noticed by Mafumafu and a deep appreciation for horror, yaoi, Omori, and Pokémon, Lee brings an energetic and passionate presence to every stream.`,
    backgroundImage: "/VINFERNIA/VINFERNIA/Lee/Lee_bg.png",
    outfits: [
        { id: 0, image: "/VINFERNIA/VINFERNIA/Lee/Leevt.png", name: "Default Outfit" },
    ],
    links: [
        { platform: "Linktree", url: "https://linktr.ee/leevalentinevt", icon: "/Brands/linktree.webp" },
        { platform: "/LeeValentine_VT", url: "https://www.twitch.tv/leevalentine_vt", icon: "/Brands/Twitch.png" },
        { platform: "/LeeValentine_VT", url: "https://www.youtube.com/@LeeValentine_VT", icon: "/Brands/Youtube.png" },
        { platform: "@LeeValentine_VT", url: "https://x.com/leevalentine_vt", icon: "/Brands/x_white.png" },
        { platform: "@LeeValentineVT", url: "https://www.tiktok.com/@leevalentinevt", icon: "/Brands/tiktok.png" },
    ],
    featuredVideoId: "dQw4w9WgXcQ",
    recommendedVideos: [
        { id: 1, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
        { id: 2, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
        { id: 3, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
    ],
    videos: [
        { id: 1, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
        { id: 2, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
        { id: 3, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
        { id: 4, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
    ],
    data: {
        birthday: "July 7th",
        debutStream: "TBA",
        height: "5'3\" (1.63m)",
        unit: "Vinfernia Gen 0",
        artist: { name: "ShrimpyMaki", url: "https://x.com/ShrimpyMaki" },
        modelArtist: { name: "Piorinn", url: "https://x.com/piyoriinchan" },
        rigger: { name: "M00nyboy", url: "https://x.com/m00nyboy" },
        dream: "One day I'll be noticed by Mafumafu, trust?",
        fanName: "IMPS",
        hashtags: { 
            fanArt: "#ArtistLeec",
            stream: "TBA",
            clips: "TBA"
        },
        regularStreams: "IdentityV, Horror Games",
        hobbies: "Cosplay, Playing Games",
        likes: "Horror Things, Yaoi, Omori, Pokémon",
    }
};

const themeColors = {
    accent: "#B57EE8",
    secondary: "#E8B5D8",
    background: "#0a0510",
    recommended: "#8B5FBF",
    recent: "#6B4A8F",
};

export default function LeeValentinePage() {
    const [selectedOutfit, setSelectedOutfit] = useState(0);
    const signatureColor = themeColors.accent;

    const handleOutfitClick = useCallback((id) => {
        setSelectedOutfit(id);
    }, []);

    const currentOutfitImage = useMemo(() => 
        leeValentineData.outfits[selectedOutfit]?.image,
        [selectedOutfit]
    );

    return (
        <div 
            className="flex flex-col min-h-screen transition-colors duration-400"
            style={{ backgroundColor: themeColors.background }}
        >
            <Header />

            <main className="flex-grow pt-0">
                <div 
                    className="relative transition-colors duration-400"
                    style={{ backgroundColor: themeColors.background }}
                >
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: `url('${leeValentineData.backgroundImage}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.3,
                        }}
                    />
                    
                    <div 
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            background: `linear-gradient(to bottom, rgba(10,5,16,0.7) 0%, rgba(10,5,16,0.9) 100%)`,
                        }}
                    />
                    
                    <div 
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(ellipse at center, transparent 40%, ${themeColors.background} 100%)`,
                        }}
                    />

                    <div 
                        className="absolute bottom-0 left-0 right-0 h-40 z-[1] pointer-events-none"
                        style={{
                            background: `linear-gradient(to bottom, transparent 0%, ${themeColors.background}90 60%, ${themeColors.background} 100%)`,
                        }}
                    />

                    <section className="relative z-10 min-h-screen flex items-start justify-center px-4 pt-32 pb-20">
                        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-start">
                            
                            <div className="relative flex items-center justify-center h-[700px] overflow-visible">
                                {leeValentineData.outfits.length > 1 && (
                                    <div className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-col gap-3 z-10">
                                        {leeValentineData.outfits.map((outfit) => (
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
                                        alt={leeValentineData.name}
                                        className="w-auto object-contain transition-opacity duration-250"
                                        style={{
                                            height: '720px',
                                            maxHeight: 'none',
                                            filter: `drop-shadow(0 0 30px ${themeColors.accent}40)`,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h1 
                                        className="text-5xl lg:text-6xl font-bold text-white mb-2 border-b-4 pb-2 transition-colors duration-300"
                                        style={{ 
                                            borderColor: signatureColor,
                                            textShadow: `0 0 20px ${themeColors.accent}60`,
                                        }}
                                    >
                                        <div className="drop-shadow-lg">{leeValentineData.name}</div>
                                    </h1>
                                    <p className="text-xl text-gray-300 italic mt-4">"{leeValentineData.tagline}"</p>
                                </div>

                                <div 
                                    className="backdrop-blur-sm rounded-lg p-6 border transition-colors duration-300"
                                    style={{
                                        backgroundColor: `${signatureColor}10`,
                                        borderColor: `${signatureColor}30`,
                                    }}
                                >
                                    <h2 
                                        className="text-2xl font-semibold mb-4 transition-colors duration-300" 
                                        style={{ color: signatureColor }}
                                    >
                                        About
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {leeValentineData.biography}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {leeValentineData.links.map((link, index) => (
                                        <SocialLink
                                            key={index}
                                            link={link}
                                            signatureColor={signatureColor}
                                        />
                                    ))}
                                </div>

                                <div 
                                    className="backdrop-blur-sm rounded-lg p-6 border transition-colors duration-300"
                                    style={{
                                        backgroundColor: `${signatureColor}10`,
                                        borderColor: `${signatureColor}30`,
                                    }}
                                >
                                    <h2 
                                        className="text-2xl font-semibold mb-4 transition-colors duration-300" 
                                        style={{ color: signatureColor }}
                                    >
                                        Featured Video
                                    </h2>
                                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                                        <YouTubeFacade 
                                            videoId={leeValentineData.featuredVideoId} 
                                            signatureColor={signatureColor}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section
                    className="py-20 px-4 relative"
                    style={{
                        background: `linear-gradient(135deg, ${themeColors.recommended}20 0%, ${themeColors.recommended}10 100%)`
                    }}
                >
                    <div 
                        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
                        style={{
                            background: `linear-gradient(to top, transparent 0%, ${themeColors.background}80 70%, ${themeColors.background} 100%)`,
                        }}
                    />

                    <div className="max-w-6xl mx-auto relative z-0">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">
                            Recommended Videos
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {leeValentineData.recommendedVideos.map((video) => (
                                <RecommendedVideoCard
                                    key={video.id}
                                    video={video}
                                    signatureColor={signatureColor}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    className="py-20 px-4 relative"
                    style={{
                        background: `linear-gradient(135deg, ${themeColors.recent}20 0%, ${themeColors.recent}10 100%)`
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">
                            Recent Videos
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {leeValentineData.videos.map((video) => (
                                <VideoCard 
                                    key={video.id} 
                                    video={video} 
                                    signatureColor={signatureColor}
                                />
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <a
                                href="https://www.youtube.com/@LeeValentine_VT"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-105 shadow-lg hover:brightness-110"
                                style={{
                                    background: `linear-gradient(to right, ${signatureColor}, ${signatureColor}dd)`,
                                    color: "#ffffff",
                                }}
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
                                borderColor: `${signatureColor}30`
                            }}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <DataItem label="Birthday" value={leeValentineData.data.birthday} color={signatureColor} />
                                <DataItem label="Debut Stream" value={leeValentineData.data.debutStream} color={signatureColor} />
                                <DataItem label="Height" value={leeValentineData.data.height} color={signatureColor} />
                                <DataItem label="Unit" value={leeValentineData.data.unit} color={signatureColor} />

                                <div className="md:col-span-2">
                                    <div className="pb-4 border-b border-white/10 mb-4">
                                        <h3 className="font-semibold mb-2 transition-colors duration-300" style={{ color: signatureColor }}>
                                            Credits
                                        </h3>
                                        <div className="space-y-1">
                                            <p className="text-gray-300">
                                                Artist: <a
                                                    href={leeValentineData.data.artist.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:brightness-110 underline transition-opacity duration-200"
                                                >
                                                    {leeValentineData.data.artist.name}
                                                </a>
                                            </p>
                                            <p className="text-gray-300">
                                                Model Artist: <a
                                                    href={leeValentineData.data.modelArtist.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:brightness-110 underline transition-opacity duration-200"
                                                >
                                                    {leeValentineData.data.modelArtist.name}
                                                </a>
                                            </p>
                                            <p className="text-gray-300">
                                                Rigger: <a
                                                    href={leeValentineData.data.rigger.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:brightness-110 underline transition-opacity duration-200"
                                                >
                                                    {leeValentineData.data.rigger.name}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <DataItem label="Dream" value={leeValentineData.data.dream} color={signatureColor} />
                                </div>

                                <DataItem label="Fan Name" value={leeValentineData.data.fanName} color={signatureColor} />

                                <div className="md:col-span-2">
                                    <div className="pb-4 border-b border-white/10 mb-4">
                                        <h3 className="font-semibold mb-2 transition-colors duration-300" style={{ color: signatureColor }}>
                                            Hashtags
                                        </h3>
                                        <div className="space-y-1">
                                            <p className="text-gray-300">Fan Art: <span className="text-white">{leeValentineData.data.hashtags.fanArt}</span></p>
                                            {leeValentineData.data.hashtags.stream && (
                                                <p className="text-gray-300">Stream Tag: <span className="text-white">{leeValentineData.data.hashtags.stream}</span></p>
                                            )}
                                            {leeValentineData.data.hashtags.clips && (
                                                <p className="text-gray-300">Clips: <span className="text-white">{leeValentineData.data.hashtags.clips}</span></p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <DataItem label="Regular/Specialty Streams" value={leeValentineData.data.regularStreams} color={signatureColor} />
                                </div>

                                <div className="md:col-span-2">
                                    <DataItem label="Hobbies" value={leeValentineData.data.hobbies} color={signatureColor} />
                                </div>
                                
                                <div className="md:col-span-2">
                                    <DataItem label="Likes" value={leeValentineData.data.likes} color={signatureColor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <a
                            href="/talents"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-800 to-purple-500 hover:from-purple-700 hover:to-purple-400 rounded-full text-white font-semibold text-lg transition-transform duration-200 hover:scale-105 shadow-lg"
                        >
                            <span>←</span>
                            Back to Vinfernia Talents
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}