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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {video.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-400">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                </div>
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
                style={{ objectPosition: "center -34%", transform: 'scale(4)' }}
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
                color: "#1a1a1a",
            }}
        >
            <img 
                src={link.icon} 
                alt={link.platform} 
                className="w-5 h-5 object-contain"
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
                        style={{ color: '#1a1a1a' }}
                    >
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
        </button>
    );
});

const dreamyDiinoData = {
    name: "DreamyDiino",
    nameJapanese: "Goddess of Dreams",
    tagline: "Easy now, just rest your eyes. Whatever happens next, I've got you.",
    biography: `Lana has existed for eons, dutifully weaving dreams and balancing realms across the cosmos. But eternity can become monotonous, even for a goddess. One day, tired of her divine routine, she created an astral clone of herself to handle her celestial responsibilities… and wandered off.

Traversing the dreams of those she weaves them for to learn more about the world, she was particularly drawn to planet Earth. Interested by the small planet, she chose to learn all about it, playing with time to study each and every creature. She even took a dinosaur egg and magically altered it, creating a tiny immortal Dinosaur to keep her company, named Nuggie.

Watching the growth of the human race, and seeing complex emotions grow as the humans change, she decided that she too wishes to experience life on earth, and decided to keep on her human form as she mingles with the world of the living- curing the eternal loneliness. Yet, at times, she still takes on her job, giving the astral clone time to recharge. Not that it is a living creature anyways…

It is so that she learns about the fragility of humans, the complexity of them and all other creatures around on planet earth, discovering that she too is capable of forming complex relationships.`,
    backgroundImage: "/VINFERNIA/VINFERNIA/DreamyDiino/Ds_bg.png",
    outfits: [
        { id: 0, image: "/VINFERNIA/VINFERNIA/DreamyDiino/LanaVtuberPNG.png", name: "Default" },
    ],
    links: [
        { platform: "/DreamyDiino", url: "https://twitch.tv/DreamyDiino", icon: "/brands/Twitch.png" },
        { platform: "/DreamyDiino", url: "https://youtube.com/@DreamyDiino", icon: "/brands/YouTube.png" },
        { platform: "@DreamyDiino", url: "https://tiktok.com/@DreamyDiino", icon: "/brands/TikTok.png" },
        { platform: "@DreamyDiino", url: "https://x.com/DreamyDiino", icon: "/brands/X.png" },
    ],
    featuredVideoId: null,
    recommendedVideos: [
        { id: 1, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA", views: "0" },
        { id: 2, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA", views: "0" },
        { id: 3, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA", views: "0" },
    ],
    videos: [
        { id: 1, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
        { id: 2, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
        { id: 3, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
        { id: 4, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
    ],
    data: {
        birthday: "March 31st",
        debutStream: "January 27th, 2025",
        height: "6'1\"",
        unit: "Vinfernia Gen 0",
        designer: { name: "Miss_Pudra", url: "#" },
        modelArtist: { name: "Piyoriin", url: "#" },
        dream: "To experience human life and form connections to others",
        fanName: "Dreamers",
        mascot: "Nuggie",
        hashtags: { stream: "#DiinosDream", fanArt: "#DiinoArt", clips: "#DreamyClips" },
        catchphrases: [
            "My my, you have quite the interesting dreams",
            "You want me to shapeshift? Maybe if you ask nicely.",
            "No, you may not pet Nuggie. He bites."
        ],
        regularStreams: "Modded Minecraft Monday, Variety",
        hobbies: "Drawing, Observing people, Stargazing, Traversing dreams",
        likes: "Nuggie, Boba tea, Sleeping, Learning about creatures, Singing",
        specialSkills: "Weaving dreams, Shapeshifting, Interdimensional traveling"
    }
};

const themeColors = {
    accent: "#D4AF37",
    recent: "#5A5A5A",
    recommended: "#4A4A4A",
    background: "#2A2A2A",
};

export default function DreamyDiinoPage() {
    const [selectedOutfit, setSelectedOutfit] = useState(0);
    const signatureColor = themeColors.accent;

    const handleOutfitClick = useCallback((id) => {
        setSelectedOutfit(id);
    }, []);

    const currentOutfitImage = useMemo(() => 
        dreamyDiinoData.outfits[selectedOutfit]?.image,
        [selectedOutfit]
    );

    return (
        <div 
            className="flex flex-col min-h-screen"
            style={{ backgroundColor: themeColors.background }}
        >
            <Header />

            <main className="flex-grow pt-0">
                <div 
                    className="relative"
                    style={{ backgroundColor: themeColors.background }}
                >
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: `url('${dreamyDiinoData.backgroundImage}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 1,
                        }}
                    />
                    
                    <div 
                        className="absolute inset-0 z-0 pointer-events-none opacity-30"
                        style={{
                            background: `linear-gradient(to bottom, rgba(42,42,42,0.7) 50%, rgba(42,42,42,0.9) 100%)`,
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
                                <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                                    <img
                                        src="/VINFERNIA/VINFERNIA/DreamyDiino/DreamyDiinoPNG.png"
                                        alt={dreamyDiinoData.name}
                                        className="w-full h-auto object-contain transition-opacity duration-250"
                                        style={{
                                            maxHeight: '720px',
                                            filter: `drop-shadow(0 0 25px ${themeColors.accent}40)`,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h1 
                                        className="text-5xl lg:text-6xl font-bold text-white mb-2 border-b-4 pb-2"
                                        style={{ 
                                            borderColor: signatureColor,
                                            textShadow: `0 0 15px ${themeColors.accent}40`,
                                        }}
                                    >
                                        <div className="drop-shadow-lg">{dreamyDiinoData.name}</div>
                                    </h1>
                                    <p 
                                        className="text-2xl mb-4" 
                                        style={{ color: signatureColor }}
                                    >
                                        {dreamyDiinoData.nameJapanese}
                                    </p>
                                    <p className="text-xl text-gray-300 italic">"{dreamyDiinoData.tagline}"</p>
                                </div>

                                <div 
                                    className="backdrop-blur-sm rounded-lg p-6 border"
                                    style={{
                                        backgroundColor: `${signatureColor}10`,
                                        borderColor: `${signatureColor}30`,
                                    }}
                                >
                                    <h2 
                                        className="text-2xl font-semibold mb-4" 
                                        style={{ color: signatureColor }}
                                    >
                                        About
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {dreamyDiinoData.biography}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {dreamyDiinoData.links.map((link, index) => (
                                        <SocialLink
                                            key={index}
                                            link={link}
                                            signatureColor={signatureColor}
                                        />
                                    ))}
                                </div>

                                <div 
                                    className="backdrop-blur-sm rounded-lg p-6 border"
                                    style={{
                                        backgroundColor: `${signatureColor}10`,
                                        borderColor: `${signatureColor}30`,
                                    }}
                                >
                                    <h2 
                                        className="text-2xl font-semibold mb-4" 
                                        style={{ color: signatureColor }}
                                    >
                                        Featured Video
                                    </h2>
                                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                                        <YouTubeFacade 
                                            videoId={dreamyDiinoData.featuredVideoId} 
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
                            {dreamyDiinoData.recommendedVideos.map((video) => (
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
                            {dreamyDiinoData.videos.map((video) => (
                                <VideoCard 
                                    key={video.id} 
                                    video={video} 
                                    signatureColor={signatureColor}
                                />
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <a
                                href="https://youtube.com/@DreamyDiino"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-105 shadow-lg hover:brightness-110"
                                style={{
                                    background: `linear-gradient(to right, ${signatureColor}, ${signatureColor}dd)`,
                                    color: "#1a1a1a",
                                }}
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
                                <div className="relative flex items-center justify-center h-[700px] overflow-visible">
                                    {/* <div className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-col gap-3 z-10">
                                        {dreamyDiinoData.outfits.map((outfit) => (
                                            <OutfitButton
                                                key={outfit.id}
                                                outfit={outfit}
                                                isSelected={selectedOutfit === outfit.id}
                                                signatureColor={signatureColor}
                                                onClick={() => handleOutfitClick(outfit.id)}
                                            />
                                        ))}
                                    </div> */}

                                    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                                        <img
                                            src={currentOutfitImage}
                                            alt={dreamyDiinoData.name}
                                            className="w-full h-auto object-contain transition-opacity duration-250"
                                            style={{
                                                maxHeight: '720px',
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
                                        borderColor: `${signatureColor}30`
                                    }}
                                >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <DataItem label="Birthday" value={dreamyDiinoData.data.birthday} color={signatureColor} />
                                    <DataItem label="Debut Stream" value={dreamyDiinoData.data.debutStream} color={signatureColor} />
                                    <DataItem label="Height" value={dreamyDiinoData.data.height} color={signatureColor} />
                                    <DataItem label="Unit" value={dreamyDiinoData.data.unit} color={signatureColor} />

                                    <div className="md:col-span-2">
                                        <DataItem
                                            label="Designer"
                                            value={
                                                <a
                                                    href={dreamyDiinoData.data.designer.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:brightness-110 underline transition-opacity duration-200"
                                                    style={{ color: signatureColor }}
                                                >
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
                                                <a
                                                    href={dreamyDiinoData.data.modelArtist.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:brightness-110 underline transition-opacity duration-200"
                                                    style={{ color: signatureColor }}
                                                >
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
                                            <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>
                                                Hashtags
                                            </h3>
                                            <div className="space-y-1">
                                                <p className="text-gray-300">Stream Tag: <span className="text-white">{dreamyDiinoData.data.hashtags.stream}</span></p>
                                                <p className="text-gray-300">Fan Art: <span className="text-white">{dreamyDiinoData.data.hashtags.fanArt}</span></p>
                                                <p className="text-gray-300">Clips: <span className="text-white">{dreamyDiinoData.data.hashtags.clips}</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
                                            <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>
                                                Catchphrases
                                            </h3>
                                            <ul className="space-y-1">
                                                {dreamyDiinoData.data.catchphrases.map((phrase, index) => (
                                                    <li key={index} className="text-white italic">"{phrase}"</li>
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

                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <a
                            href="/talents"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-500 hover:from-slate-700 hover:to-slate-400 rounded-full text-white font-semibold text-lg transition-transform duration-200 hover:scale-105 shadow-lg"
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