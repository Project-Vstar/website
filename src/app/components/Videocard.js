"use client";
import { memo } from "react";

const VideoCard = memo(function VideoCard({ video, signatureColor, variant = "default" }) {
    return (
        <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border transition-all duration-200 hover:scale-105"
            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${signatureColor}80`; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"; }}
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
                <h3 className={`font-semibold text-white mb-2 line-clamp-2 ${variant === "recommended" ? "text-lg" : "text-sm"}`}>
                    {video.title}
                </h3>
                {variant === "recommended" ? (
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>{video.views} views</span>
                        <span>{video.date}</span>
                    </div>
                ) : (
                    <p className="text-xs text-gray-400">{video.date}</p>
                )}
            </div>
        </a>
    );
});

export default VideoCard;