"use client";
import { memo, useCallback } from "react";

const ScrollToDataButton = memo(function ScrollToDataButton({ signatureColor }) {
    const handleClick = useCallback(() => {
        const el = document.getElementById("data");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 border"
            style={{
                backgroundColor: `${signatureColor}15`,
                borderColor: `${signatureColor}40`,
                color: signatureColor,
            }}
        >
            <span>View Data</span>
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    );
});

export default ScrollToDataButton;
