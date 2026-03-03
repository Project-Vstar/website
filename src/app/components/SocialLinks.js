"use client";
import { memo } from "react";

const socialLinkStyles = `
    .social-link-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 18px;
        border-radius: 8px;
        border: 1px solid color-mix(in srgb, var(--hover-color) 30%, transparent);
        color: #ffffff;
        font-weight: 600;
        font-size: 0.95rem;
        text-decoration: none;
        overflow: hidden;
        background: color-mix(in srgb, var(--hover-color) 10%, transparent);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        cursor: pointer;
        min-width: 140px;
    }
    .social-link-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--hover-color);
        transform: translateX(-101%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 0;
    }
    .social-link-btn:hover::before {
        transform: translateX(0);
    }
    .social-link-btn:hover span {
        color: var(--text-hover-color, #ffffff);
    }
    .social-link-btn .chevron {
        margin-left: auto;
        font-size: 1.2rem;
        opacity: 0.5;
        transition: transform 0.2s ease, opacity 0.2s ease;
        position: relative;
        z-index: 1;
    }
    .social-link-btn:hover .chevron {
        transform: translateX(3px);
        opacity: 1;
    }
`;

const SocialLink = memo(function SocialLink({ link, signatureColor, hoverTextColor }) {
    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-btn"
            style={{
                "--hover-color": signatureColor,
                "--text-hover-color": hoverTextColor ?? "#ffffff",
            }}
        >
            <span style={{ position: "relative", zIndex: 1, flex: 1, textAlign: "center" }}>
                {link.platform}
            </span>
            <span className="chevron" style={{ position: "relative", zIndex: 1 }}>›</span>
        </a>
    );
});

export function SocialLinks({ links, signatureColor, hoverTextColor }) {
    return (
        <>
            <style>{socialLinkStyles}</style>
            <div className="flex flex-wrap gap-3">
                {links.map((link, index) => (
                    <SocialLink key={index} link={link} signatureColor={signatureColor} hoverTextColor={hoverTextColor} />
                ))}
            </div>
        </>
    );
}