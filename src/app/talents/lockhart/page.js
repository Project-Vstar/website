"use client";
import React, { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function TalentPage() {
    const [selectedOutfit, setSelectedOutfit] = useState(0);
    const [activePersona, setActivePersona] = useState("lockhart");


    const lockhartColor = "#F5F0E1";

    const otherColor = "#1B4D3E";

    const signatureColor = activePersona === "lockhart" ? lockhartColor : otherColor;

    const themeColors = {
        lockhart: {
            schedule: "#4A4A3A",
            recommended: "#5C5C4A",
            recent: "#6E6E5A",
            accent: "#F5F0E1",
            background: "#1a1a1a",
        },
        other: {
            schedule: "#1A3A2A",
            recommended: "#204030",
            recent: "#2A4A3A",
            accent: "#1B4D3E",
            background: "#050a08",
        }
    };

    const currentTheme = themeColors[activePersona];

    const lockhartData = {
        name: "Dr. Lockhart",
        nameJapanese: "ロクハート先生",
        tagline: "There you are, Patient. Right on time. Now tell me your affliction.",
        biography: `Dr. Sean Lockhart is one of The Order's most skilled doctors, known for saving the hamlet of Black Hollow that was doomed to be cremated. His success allowed him to take part in The Rite of Binding earning him the Mask of the White Raven, a sacred omen not seen since the founding days of The Order.

A mask that carries admiration from the people but has the power to shake the hierarchy of The Order itself. Accompanied by his loyal companion Poe, Lockhart wanders this plague stricken land to heal and protect his beloved patients from the horrors that remain unseen, and to uphold the ideals of an Order that has lost its way and grows more corrupt by the day…

…though those that have spent time around the doctor swear that his reflection does not always match the man who casts it.`,
        backgroundImage: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_BG.png",
        outfits: [
            { id: 0, image: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Base.png", name: "Default" },
            { id: 1, image: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Mask.png", name: "Mask" },
        ],
        links: [
            { platform: "/Lockhart_VT", url: "https://twitch.tv/lockhart_vt", icon: "/brands/Twitch.png" },
            { platform: "/Lockhart_VT", url: "https://youtube.com/@Lockhart_VT", icon: "/brands/YouTube.png" },
            { platform: "@Lockhart_VT", url: "https://tiktok.com/@Lockhart_VT", icon: "/brands/TikTok.png" },
            { platform: "@Lockhart_VT", url: "https://x.com/Lockhart_VT", icon: "/brands/X.png" },
        ],
        featuredVideo: "https://www.youtube.com/embed/cjlUxgYMhfM",
        schedule: [
            { day: "Tuesday", time: "TBA", activity: "Tilted Tuesdays" },
            { day: "Varies", time: "TBA", activity: "日本語の勉強" },
            { day: "Varies", time: "TBA", activity: "DnD Sessions" },
        ],
        recommendedVideos: [
            { id: 1, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", views: "—", date: "TBA" },
            { id: 2, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", views: "—", date: "TBA" },
            { id: 3, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", views: "—", date: "TBA" },
        ],
        videos: [
            { id: 1, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
            { id: 2, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
            { id: 3, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
            { id: 4, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
        ],
        data: {
            birthday: "October 3rd",
            debutStream: "June 21st, 2025",
            height: "5'11\"",
            unit: "Vinfernia Gen 0",
            illustrator: { name: "Piorinn", url: "#" },
            dream: "Provide a safe place for all my patients",
            fanName: "Patients",
            hashtags: {
                stream: "#LockhartLive",
                fanArt: "#LockArted",
                clips: "#DosesofLockhart"
            },
            catchphrases: [
                "Good Evening Patient",
                "Get that apple away from me",
                "What are your symptoms?"
            ],
            regularStreams: "Tilted Tuesdays, 日本語の勉強, DnD",
            hobbies: "Journaling, Collecting Feathers, Brewing Herbal Remedies, Stargazing, Collecting Small Oddities",
            likes: "Fresh Tea, Orderly Workspaces, Old Music Boxes, Herbal Scents, Poe",
            specialSkills: "Plague Diagnostics, Silent Movement, High Emotional Regulation"
        }
    };

    const otherData = {
        name: "The Other",
        nameJapanese: "ザー・アザー",
        tagline: "Don't be shy, Patient. Come closer, let me get a closer look.",
        biography: `The Other came into existence the night Lockhart's serum fractured his mind, a second self that indulges in everything the Doctor denies himself.

The Other protects their precious patients with a passion that borders obsession, stopping at nothing to keep their hearts beating. Slipping in and out of control over Lockhart's body whenever the doctor's spirit weakens, through exhaustion, emotion, or on the rare occasion, permission.

Whispers have begun to circulate within The Order that the White Raven does not work alone.`,
        backgroundImage: "/VINFERNIA/VINFERNIA/Lockhart/Other_BG.png",
        outfits: [
            { id: 0, image: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Other_Base.png", name: "Other Default" },
            { id: 1, image: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Other_Mask.png", name: "Other Mask" },
        ],
        links: [
            { platform: "Twitch", url: "https://twitch.tv/lockhart_vt", icon: "/Brands/Twitch.png" },
            { platform: "YouTube", url: "https://youtube.com/@Lockhart_VT", icon: "/Brands/Youtube.png" },
            { platform: "TikTok", url: "https://tiktok.com/@Lockhart_VT", icon: "/Brands/Twitch.png" },
            { platform: "X", url: "https://x.com/Lockhart_VT", icon: "/Brands/Youtube.png" },
        ],
        featuredVideo: "https://www.youtube.com/embed/cjlUxgYMhfM",
        schedule: [
            { day: "Tuesday", time: "TBA", activity: "Tilted Tuesdays" },
            { day: "Varies", time: "TBA", activity: "日本語の勉強" },
            { day: "Varies", time: "TBA", activity: "DnD Sessions" },
        ],
        recommendedVideos: [
            { id: 1, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", views: "—", date: "TBA" },
            { id: 2, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", views: "—", date: "TBA" },
            { id: 3, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", views: "—", date: "TBA" },
        ],
        videos: [
            { id: 1, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
            { id: 2, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
            { id: 3, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
            { id: 4, title: "Coming Soon", thumbnail: "/placeholder.jpg", url: "#", date: "TBA" },
        ],
        data: {
            birthday: "June 21st",
            debutStream: "June 21st, 2025",
            height: "5'11\"",
            unit: "Vinfernia Gen 0",
            illustrator: { name: "Piorinn", url: "#" },
            dream: "To keep every patient alive, no matter the cost.",
            fanName: "Patients",
            hashtags: {
                stream: "#LockhartLive",
                fanArt: "#LockArted",
                clips: "#DosesofLockhart"
            },
            catchphrases: [
                "My, aren't you a lovely disaster",
                "Don't flinch, this is my favourite part",
                "Try not to die on me, it would ruin my night"
            ],
            regularStreams: "Tilted Tuesdays, 日本語の勉強, DnD",
            hobbies: "Annotating Lockhart's Journals, Mixing Potent Concoctions, Studying Poe, Admiring their Reflection, Night Walks in Plague Filled Towns",
            likes: "Strong Tea with Too Much Honey, Chaotic Workspaces, The Smell of Alcohol and Iron, Their Own Voice, Poe",
            specialSkills: "Unrestrained Adaptability, Rapid Reflexes, Pain Tolerance"
        }
    };

    const talentData = activePersona === "lockhart" ? lockhartData : otherData;

    const handlePersonaSwitch = () => {
        setActivePersona(prev => prev === "lockhart" ? "other" : "lockhart");
        setSelectedOutfit(0);
    };

    return (
        <div 
            className="flex flex-col min-h-screen transition-colors duration-700"
            style={{ backgroundColor: currentTheme.background }}
        >
            <Header />

            <button
                onClick={handlePersonaSwitch}
                className="fixed bottom-8 left-8 z-50 w-24 h-24 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                title={`Switch to ${activePersona === "lockhart" ? "The Other" : "Dr. Lockhart"}`}
            >
                <img
                    src={activePersona === "lockhart" 
                        ? "/VINFERNIA/VINFERNIA/Lockhart/PoeLockhart.png"
                        : "/VINFERNIA/VINFERNIA/Lockhart/PoeOther.png"
                    }
                    alt={activePersona === "lockhart" ? "Switch to The Other" : "Switch to Dr. Lockhart"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
                />
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                />
            </button>

            <main className="flex-grow pt-0">
                <div 
                    className="relative transition-all duration-700"
                    style={{ backgroundColor: currentTheme.background }}
                >
                    <div
                        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700"
                        style={{
                            backgroundImage: `url('${talentData.backgroundImage}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                    <div 
                        className="absolute inset-0 z-0 pointer-events-none transition-all duration-700"
                        style={{
                            background: activePersona === "lockhart"
                                ? `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(26,26,26,0.9) 100%)`
                                : `linear-gradient(to bottom, rgba(0,15,10,0.8) 0%, rgba(5,10,8,0.95) 100%)`,
                        }}
                    />
                    <div 
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(ellipse at center, transparent 40%, ${currentTheme.background} 100%)`,
                        }}
                    />

                    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
                        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center">
                            <div className="relative flex items-center justify-center h-[700px]">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                                    {talentData.outfits.map((outfit) => (
                                        <button
                                            key={outfit.id}
                                            onClick={() => setSelectedOutfit(outfit.id)}
                                            className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                                                selectedOutfit === outfit.id
                                                    ? "scale-110"
                                                    : "border-gray-600 opacity-60 hover:opacity-100"
                                            }`}
                                            style={{
                                                borderColor: selectedOutfit === outfit.id ? signatureColor : undefined,
                                                boxShadow: selectedOutfit === outfit.id ? `0 0 20px ${signatureColor}80` : undefined,
                                            }}
                                        >
                                            <img
                                                src={outfit.image}
                                                alt={outfit.name}
                                                className="w-full h-full object-cover"
                                                style={{
                                                    objectPosition: "center -34%",
                                                    transform: 'scale(4)'
                                                }}
                                            />
                                        </button>
                                    ))}
                                </div>

                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src={talentData.outfits[selectedOutfit]?.image}
                                        alt={talentData.name}
                                        className="max-h-full w-auto object-contain drop-shadow-2xl transition-all duration-500"
                                        style={{
                                            height: '650px',
                                            filter: activePersona === "other" 
                                                ? `drop-shadow(0 0 30px ${otherColor}40)` 
                                                : `drop-shadow(0 0 20px ${lockhartColor}20)`,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h1 
                                        className="text-5xl lg:text-6xl font-bold text-white mb-2 border-b-4 pb-2 transition-all duration-500"
                                        style={{ 
                                            borderColor: signatureColor,
                                            textShadow: activePersona === "other" ? `0 0 20px ${otherColor}60` : 'none',
                                        }}
                                    >
                                        <div className="drop-shadow-lg">
                                            {talentData.name}
                                        </div>
                                    </h1>
                                    <p 
                                        className="text-2xl mb-4 transition-colors duration-500" 
                                        style={{ color: signatureColor }}
                                    >
                                        {talentData.nameJapanese}
                                    </p>
                                    <p className="text-xl text-gray-300 italic">"{talentData.tagline}"</p>
                                </div>

                                <div 
                                    className="backdrop-blur-sm rounded-lg p-6 border transition-all duration-500"
                                    style={{
                                        backgroundColor: `${signatureColor}10`,
                                        borderColor: `${signatureColor}30`,
                                    }}
                                >
                                    <h2 
                                        className="text-2xl font-semibold mb-4 transition-colors duration-500" 
                                        style={{ color: signatureColor }}
                                    >
                                        About
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                        {talentData.biography}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {talentData.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:brightness-110"
                                            style={{
                                                background: `linear-gradient(to right, ${signatureColor}, ${signatureColor}dd)`,
                                                color: activePersona === "lockhart" ? "#1a1a1a" : "#ffffff",
                                            }}
                                        >
                                            <img 
                                                src={link.icon} 
                                                alt={link.platform} 
                                                className="w-5 h-5 object-contain"
                                                style={{
                                                    filter: activePersona === "lockhart" ? "none" : "brightness(0) invert(1)",
                                                }}
                                            />
                                            {link.platform}
                                        </a>
                                    ))}
                                </div>

                                <div 
                                    className="backdrop-blur-sm rounded-lg p-6 border transition-all duration-500"
                                    style={{
                                        backgroundColor: `${signatureColor}10`,
                                        borderColor: `${signatureColor}30`,
                                    }}
                                >
                                    <h2 
                                        className="text-2xl font-semibold mb-4 transition-colors duration-500" 
                                        style={{ color: signatureColor }}
                                    >
                                        Featured Video
                                    </h2>
                                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                                        <iframe
                                            className="w-full h-full"
                                            src={talentData.featuredVideo}
                                            title="Featured Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section
                    className="py-20 px-4 relative transition-all duration-700"
                    style={{
                        background: `linear-gradient(135deg, ${currentTheme.recent}20 0%, ${currentTheme.recent}10 100%)`
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">
                            Recent Videos
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {talentData.videos.map((video) => (
                                <a
                                    key={video.id}
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border transition-all hover:scale-105"
                                    style={{
                                        borderColor: 'rgba(255, 255, 255, 0.1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = `${signatureColor}80`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <div className="aspect-video bg-gray-800 overflow-hidden">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2">
                                            {video.title}
                                        </h3>
                                        <p className="text-xs text-gray-400">{video.date}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <a
                                href="https://youtube.com/@Lockhart_VT"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:brightness-110"
                                style={{
                                    background: `linear-gradient(to right, ${signatureColor}, ${signatureColor}dd)`,
                                    color: activePersona === "lockhart" ? "#1a1a1a" : "#ffffff",
                                }}
                            >
                                View All Videos
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 transition-all duration-700">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">DATA</h2>
                        <div
                            className="backdrop-blur-sm rounded-lg p-8 border transition-all duration-500"
                            style={{
                                background: `linear-gradient(135deg, ${signatureColor}20, ${signatureColor}10)`,
                                borderColor: `${signatureColor}30`
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
                                            <a
                                                href={talentData.data.illustrator.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:brightness-110 underline transition-all"
                                                style={{ color: signatureColor }}
                                            >
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
                                        <h3 className="font-semibold mb-2 transition-colors duration-500" style={{ color: signatureColor }}>
                                            Hashtags
                                        </h3>
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
                                        <h3 className="font-semibold mb-2 transition-colors duration-500" style={{ color: signatureColor }}>
                                            Catchphrases
                                        </h3>
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

                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <a
                            href="/talents"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-500 hover:from-slate-700 hover:to-slate-400 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-lg"
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

function DataItem({ label, value, color }) {
    return (
        <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
            <h3 className="font-semibold mb-1 transition-colors duration-500" style={{ color }}>
                {label}
            </h3>
            <p className="text-white">{value}</p>
        </div>
    );
}