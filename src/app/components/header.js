"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const headerStyles = `
    .nav-link-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 18px;
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.25);
        color: #ffffff;
        font-weight: 600;
        font-size: 0.95rem;
        font-family: var(--font-oswald), sans-serif;
        text-decoration: none;
        overflow: hidden;
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        cursor: pointer;
        transition: background 0.2s ease, border-color 0.2s ease;
        white-space: nowrap;
    }
    .nav-link-btn:hover {
        background: rgba(255,255,255,0.18);
        border-color: rgba(255,255,255,0.45);
    }
    .nav-link-btn.active {
        background: rgba(255,255,255,0.22);
        border-color: rgba(255,255,255,0.6);
    }

    .hamburger-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 18px;
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.25);
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        cursor: pointer;
        transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    }
    .hamburger-btn:hover {
        background: rgba(255,255,255,0.18);
        border-color: rgba(255,255,255,0.45);
        transform: translateY(3px);
    }
    .chevrons {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.3s ease;
        line-height: 0;
    }
    .chevrons.open { transform: rotate(180deg); }
    .chevrons svg { display: block; margin-top: -4px; }
    .chevrons svg:first-child { margin-top: 0; }

    .active-indicator {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 6px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease;
        white-space: nowrap;
    }
    .active-indicator.visible { opacity: 1; pointer-events: auto; }
    .active-indicator-label {
        font-family: var(--font-oswald), sans-serif;
        font-weight: 600; font-size: 0.85rem;
        color: rgba(255,255,255,0.8); letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .dropdown-link-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 18px;
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.25);
        color: #ffffff;
        font-weight: 600;
        font-size: 0.95rem;
        font-family: var(--font-oswald), sans-serif;
        text-decoration: none;
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(4px);
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: center;
    }
    .dropdown-link-btn:hover {
        background: rgba(255,255,255,0.18);
        border-color: rgba(255,255,255,0.45);
    }

    .mobile-menu-section-label {
        font-family: var(--font-oswald), sans-serif;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.3em;
        color: rgba(255,255,255,0.3);
        margin-bottom: 12px;
        width: 100%;
        text-align: left;
    }
`;

const Chevrons = ({ open }) => (
    <span className={`chevrons${open ? " open" : ""}`}>
        <svg width="18" height="12" viewBox="0 0 24 14" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 2l9 9 9-9" />
        </svg>
        <svg width="18" height="12" viewBox="0 0 24 14" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 2l9 9 9-9" />
        </svg>
    </span>
);

const PAGE_LABELS = {
    "/": "Home",
    "/talents": "Talents",
    "/talents/dee": "Dee Ronny",
    "/talents/dreamydiino": "DreamyDiino",
    "/talents/gomifuyu": "Gomifuyu",
    "/talents/leevalentine": "Lee Valentine",
    "/talents/lockhart": "Lockhart",
    "/lore": "Lore",
    "/about": "About",
    "/partners": "Partners",
    "/auditions": "Auditions",
    "/faq": "FAQ",
    "/articles": "Articles",
    "/member-area": "Members' Area",
    "/businesspartner-area": "Partners",
    "/press": "Press Kit",
    "/derivative-works-guideline": "Derivative Works",
    "/impressum": "Impressum",
    "/privacy-policy": "Privacy Policy",
    "/terms": "Terms of Service",
    "/cookies": "Cookies",
};

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const pageLabel = PAGE_LABELS[pathname] ?? null;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!desktopMenuOpen) return;
        const handler = () => setDesktopMenuOpen(false);
        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, [desktopMenuOpen]);

    const navItems = [
        { href: "/lore", label: "Lore" },
        { href: "/about", label: "About" },
        { href: "/partners", label: "Partners" },
        { href: "/auditions", label: "Auditions" },
        { href: "/faq", label: "FAQ" },
        { href: "https://shop.vstarproject.eu", label: "Shop" },
    ];

    return (
        <>
            <style>{headerStyles}</style>
            <header
                className="fixed top-0 left-0 w-full z-40 transition-all duration-400"
                style={{
                    background: scrolled ? "rgba(0, 0, 0, 0.3)" : "transparent",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
                    isolation: "isolate",
                }}
            >
                <nav className="flex items-center justify-between px-6 py-3 relative">
                    <Link href="/" className="flex items-center">
                        <div className="flex gap-2 items-center">
                            <Image src="/vstar.png" alt="Logo" width={32} height={32} />
                            <p className="font-oswald text-white font-bold text-xl ml-1 hidden sm:block">VSTAR PROJECT</p>
                        </div>
                    </Link>

                    <div className={`active-indicator${scrolled && pageLabel ? " visible" : ""}`}>
                        <span className="active-indicator-label">{pageLabel}</span>
                    </div>

                    <div className="md:hidden flex-1" />

                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/" className={`nav-link-btn${pathname === "/" ? " active" : ""}`}>Home</Link>
                        <Link href="/talents" className={`nav-link-btn${pathname === "/talents" ? " active" : ""}`}>Talents</Link>

                        <div className="relative z-50">
                            <button className="hamburger-btn" onClick={(e) => { e.stopPropagation(); setDesktopMenuOpen(!desktopMenuOpen); }}>
                                <Chevrons open={desktopMenuOpen} />
                            </button>
                            {typeof window !== "undefined" && createPortal(
                                <div
                                    className={`fixed top-[73px] right-6 backdrop-blur-xl rounded-2xl p-6 min-w-[420px] transition-all duration-300 ${desktopMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
                                    style={{
                                        zIndex: 9999,
                                        background: "rgba(0, 0, 0, 0.5)",
                                        padding: "20px",
                                        backdropFilter: "blur(24px)",
                                        WebkitBackdropFilter: "blur(24px)",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                                    }}
                                >
                                    <div className="grid grid-cols-3 gap-3">
                                        {navItems.map(({ href, label }) => (
                                            <Link key={href} href={href} className={`dropdown-link-btn${pathname === href ? " active" : ""}`} onClick={() => setDesktopMenuOpen(false)}>
                                                {label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>,
                                document.body
                            )}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)}>
                            <Chevrons open={mobileMenuOpen} />
                        </button>
                    </div>
                </nav>

                {/* MOBILE OVERLAY */}
                <div
                    className={`fixed inset-0 w-full h-screen z-[100] transition-all duration-500 flex flex-col p-8 md:hidden ${mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
                    style={{ background: "rgba(8,10,9,0.98)", backdropFilter: "blur(24px)" }}
                >
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex gap-2 items-center">
                            <Image src="/vstar.png" alt="Logo" width={28} height={28} />
                            <span className="font-oswald text-white/40 font-bold text-sm tracking-widest uppercase">Navigation</span>
                        </div>
                        <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white text-xl">✕</button>
                    </div>

                    <div className="flex flex-col gap-4 mb-10">
                        <p className="mobile-menu-section-label">Main</p>
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`nav-link-btn w-full !py-5 !text-xl ${pathname === "/" ? "active" : ""}`}>Home</Link>
                        <Link href="/talents" onClick={() => setMobileMenuOpen(false)} className={`nav-link-btn w-full !py-5 !text-xl ${pathname === "/talents" ? "active" : ""}`}>Talents</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="mobile-menu-section-label">Database</p>
                        <div className="grid grid-cols-2 gap-3">
                            {navItems.map(({ href, label }) => (
                                <Link key={href} href={href} onClick={() => setMobileMenuOpen(false)} className={`dropdown-link-btn !py-5 ${pathname === href ? "active" : ""}`}>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pb-4 border-t border-white/5 pt-6 flex justify-between items-center">
                        <p className="font-oswald text-[9px] text-white/15 tracking-[0.4em] uppercase">Vinfernia // Protocol 1.0</p>
                        <div className="w-2 h-2 rounded-full bg-green-500/40 animate-pulse" />
                    </div>
                </div>
            </header >
        </>
    );
};

export default Header;