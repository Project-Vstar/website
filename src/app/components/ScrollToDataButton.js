"use client";
import { memo, useCallback, useEffect, useState } from "react";

const scrollButtonStyles = `
    .scroll-data-btn {
        position: fixed;
        top: 10vh;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        animation: doubleDip 3.5s ease-in-out infinite;

        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 13px 24px;
        border-radius: 8px;
        border: 1px solid color-mix(in srgb, var(--hover-color) 30%, transparent);
        color: #ffffff;
        font-weight: 600;
        font-size: 1.05rem;
        text-decoration: none;
        overflow: hidden;
        background: color-mix(in srgb, var(--hover-color) 10%, transparent);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        cursor: pointer;
        min-width: 160px;
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.4s ease;
    }
    .scroll-data-btn.hidden {
        opacity: 0;
        pointer-events: none;
    }
    .scroll-data-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--hover-color);
        transform: translateY(-101%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 0;
    }
    .scroll-data-btn:hover::before {
        transform: translateY(0%);
    }
    .scroll-data-btn:hover span {
        color: var(--text-hover-color, #ffffff);
    }
    .scroll-data-btn .chevron-down {
        margin-left: auto;
        opacity: 0.5;
        transition: transform 0.2s ease, opacity 0.2s ease;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
    }
    .scroll-data-btn:hover {
        animation-play-state: paused;
    }
    .scroll-data-btn:hover .chevron-down {
        transform: translateY(3px);
        opacity: 1;
    }
    @keyframes doubleDip {
        0%   { transform: translateX(-50%) translateY(0);   }
        6%   { transform: translateX(-50%) translateY(6px); }
        12%  { transform: translateX(-50%) translateY(0);   }
        18%  { transform: translateX(-50%) translateY(6px); }
        24%  { transform: translateX(-50%) translateY(0);   }
        100% { transform: translateX(-50%) translateY(0);   }
    }
`;

const ScrollToDataButton = memo(function ScrollToDataButton({ signatureColor, hoverTextColor }) {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => setIsAtTop(window.scrollY < 80);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = useCallback(() => {
        document.getElementById("data-section")?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <>
            <style>{scrollButtonStyles}</style>
            <button
                onClick={handleClick}
                className={`scroll-data-btn${isAtTop ? "" : " hidden"}`}
                style={{
                    "--hover-color": signatureColor,
                    "--text-hover-color": hoverTextColor ?? "#0C0E0D",
                }}
            >
                <span style={{ position: "relative", zIndex: 1, flex: 1, textAlign: "center" }}>
                    View Data
                </span>
                <span className="chevron-down" style={{ position: "relative", zIndex: 1 }}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </span>
            </button>
        </>
    );
});

export default ScrollToDataButton;