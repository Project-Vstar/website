"use client";
import React, { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function TalentPage() {
    const [selectedOutfit, setSelectedOutfit] = useState(0);

    const signatureColor = "#FBE575";

    const themeColors = {
        schedule: "#FBE575",
        recommended: "#FBE575",
        recent: "#FBE575",
    };

    const talentData = {
        name: "Lockhart",
        nameJapanese: "Japanese name here? holollive inspo",
        tagline: "Tagline if applicable",
        biography: `Lockhart biography here. meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow.`,

        outfits: [
            { id: 0, image: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Base.png", thumbnail: "/path/to/thumb1.png", name: "Default" },
            { id: 1, image: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Mask.png", thumbnail: "/path/to/thumb2.png", name: "Mask" },
            { id: 2, image: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Other_Base.png", thumbnail: "/path/to/thumb3.png", name: "Other" },
            { id: 3, image: "/VINFERNIA/VINFERNIA/Lockhart/Lockhart_Other_Mask.png", thumbnail: "/path/to/thumb3.png", name: "Other Mask" },
        ],

        links: [
            { platform: "YouTube", url: "https://youtube.com/@", icon: "▶" },
            { platform: "Twitter/X", url: "https://twitter.com/", icon: "𝕏" },
            { platform: "Lockhart.com", url: "https://lockhart.com", icon: "🌐" },
        ],

        schedule: [
            { day: "Monday", time: "20:00 JST", activity: "Gaming Stream" },
            { day: "Wednesday", time: "21:00 JST", activity: "Karaoke" },
            { day: "Friday", time: "19:00 JST", activity: "Chatting Stream" },
        ],

        recommendedVideos: [
            {
                id: 1,
                title: "placeholder",
                thumbnail: "/path/to/video1-thumb.jpg",
                url: "placeholder",
                views: "placeholder",
                date: "placeholder"
            },
            {
                id: 2,
                title: "placeholder",
                thumbnail: "/path/to/video2-thumb.jpg",
                url: "placeholder",
                views: "placeholder",
                date: "placeholder"
            },
            {
                id: 3,
                title: "placeholder",
                thumbnail: "placeholder",
                url: "placeholder",
                views: "placeholder",
                date: "placeholder"
            },
        ],

        videos: [
            {
                id: 1,
                title: "placeholder",
                thumbnail: "placeholder",
                url: "placeholder",
                date: "placeholder"
            },
            {
                id: 2,
                title: "placeholder",
                thumbnail: "placeholder",
                url: "placeholder",
                date: "placeholder"
            },
            {
                id: 3,
                title: "placeholder",
                thumbnail: "placeholder",
                url: "placeholder",
                date: "placeholder"
            },
            {
                id: 4,
                title: "placeholder",
                thumbnail: "placeholder",
                url: "placeholder",
                date: "placeholder"
            },
        ],

        data: {
            birthday: "placeholder",
            debutStream: "placeholder",
            height: "placeholder",
            unit: "Generation X",
            illustrator: { name: "placeholder", url: "placeholder" },
            dream: "placeholder",
            fanName: "placeholder",
            hashtags: {
                stream: "placeholder",
                fanArt: "placeholder",
                clips: "placeholder"
            },
            catchphrases: [
                "placeholder",
                "placeholder",
                "placeholder"
            ],
            regularStreams: "placeholder",
            hobbies: "placeholder",
            likes: "placeholder",
            specialSkills: "placeholder"
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-yellow-900 via-white-900 to-black">
            <Header />

            <main className="flex-grow">
                <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center">

                        <div className="relative flex items-center justify-center">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                                {talentData.outfits.map((outfit) => (
                                    <button
                                        key={outfit.id}
                                        onClick={() => setSelectedOutfit(outfit.id)}
                                        className={`w-16 h-16 rounded-4xl overflow-hidden border-2 transition-all ${selectedOutfit === outfit.id
                                                ? "scale-110"
                                                : "border-gray-600 opacity-60 hover:opacity-100"
                                            }`}
                                        style={{
                                            borderColor: selectedOutfit === outfit.id ? signatureColor : undefined,
                                            boxShadow: selectedOutfit === outfit.id ? `0 0 20px ${signatureColor}80` : undefined,
                                        }}
                                    >
                                        <img
                                            src={outfit.thumbnail}
                                            alt={outfit.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>

                            <div className="relative w-full max-w-md aspect-[3/4]">
                                <img
                                    src={talentData.outfits[selectedOutfit].image}
                                    alt={talentData.name}
                                    className="w-full h-full object-contain drop-shadow-2xl transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-2">
                                    {talentData.name}
                                </h1>
                                <p className="text-2xl mb-4" style={{ color: signatureColor }}>
                                    {talentData.nameJapanese}
                                </p>
                                <p className="text-xl text-gray-300 italic">"{talentData.tagline}"</p>
                            </div>

                            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-semibold mb-4" style={{ color: signatureColor }}>
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
                                        className="flex items-center gap-2 px-6 py-3 rounded-full text-black font-semibold transition-all hover:scale-105 shadow-lg hover:brightness-110"
                                        style={{
                                            background: `linear-gradient(to right, ${signatureColor}, ${signatureColor}dd)`
                                        }}
                                    >
                                        <span className="text-xl">{link.icon}</span>
                                        {link.platform}
                                    </a>
                                ))}
                            </div>

                            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                                <h2 className="text-2xl font-semibold mb-4" style={{ color: signatureColor }}>
                                    Featured Video
                                </h2>
                                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                        title="Featured Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="py-20 px-4 relative"
                    style={{
                        background: `linear-gradient(135deg, ${themeColors.schedule}20 0%, ${themeColors.schedule}10 100%)`
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">
                            Stream Schedule
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {talentData.schedule.map((item, index) => (
                                <div
                                    key={index}
                                    className="backdrop-blur-sm rounded-lg p-6 border transition-all hover:scale-105"
                                    style={{
                                        background: `linear-gradient(135deg, ${themeColors.schedule}50, ${themeColors.schedule}30)`,
                                        borderColor: `${themeColors.schedule}50`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = `${themeColors.schedule}`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = `${themeColors.schedule}50`;
                                    }}
                                >
                                    <h3 className="text-2xl font-bold mb-2" style={{ color: themeColors.schedule }}>
                                        {item.day}
                                    </h3>
                                    <p className="text-lg text-white mb-2">{item.time}</p>
                                    <p className="text-gray-300">{item.activity}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    className="py-20 px-4 relative"
                    style={{
                        background: `linear-gradient(135deg, ${themeColors.recommended}20 0%, ${themeColors.recommended}10 100%)`
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">
                            Recommended Videos
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {talentData.recommendedVideos.map((video) => (
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
                                        e.currentTarget.style.borderColor = `${themeColors.recommended}80`;
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
                                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                                            {video.title}
                                        </h3>
                                        <div className="flex justify-between text-sm text-gray-400">
                                            <span>{video.views} views</span>
                                            <span>{video.date}</span>
                                        </div>
                                    </div>
                                </a>
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
                                        e.currentTarget.style.borderColor = `${themeColors.recent}80`;
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
                                href="#"
                                className="inline-block px-8 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 shadow-lg hover:brightness-110"
                                style={{
                                    background: `linear-gradient(to right, ${themeColors.recent}, ${themeColors.recent}dd)`
                                }}
                            >
                                View All Videos
                            </a>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">DATA</h2>
                        <div
                            className="backdrop-blur-sm rounded-lg p-8 border"
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
                                        <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>
                                            Hashtags
                                        </h3>
                                        <div className="space-y-1">
                                            <p className="text-gray-300">Stream Tags: <span className="text-white">{talentData.data.hashtags.stream}</span></p>
                                            <p className="text-gray-300">Fan Art: <span className="text-white">{talentData.data.hashtags.fanArt}</span></p>
                                            {talentData.data.hashtags.clips && (
                                                <p className="text-gray-300">Clips: <span className="text-white">{talentData.data.hashtags.clips}</span></p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
                                        <h3 className="font-semibold mb-2" style={{ color: signatureColor }}>
                                            Catchphrases
                                        </h3>
                                        <ul className="space-y-1">
                                            {talentData.data.catchphrases.map((phrase, index) => (
                                                <li key={index} className="text-white">{phrase}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <DataItem label="Regular/Specialty Streams" value={talentData.data.regularStreams} color={signatureColor} />
                                </div>

                                <DataItem label="Hobbies" value={talentData.data.hobbies} color={signatureColor} />
                                <DataItem label="Likes" value={talentData.data.likes} color={signatureColor} />

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
                            Back to VSTAR Talents
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
            <h3 className="font-semibold mb-1" style={{ color }}>
                {label}
            </h3>
            <p className="text-white">{value}</p>
        </div>
    );
}