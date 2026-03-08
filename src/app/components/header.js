/* eslint-disable react/prop-types */
"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import "./header.css";

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

const HamburgerIcon = ({ open }) => (
    <span className={`hamburger-icon${open ? " open" : ""}`}>
        <span />
        <span />
        <span />
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
    "/vinfernia": "VINFERNIA Hub",
    "/vstar": "VSTAR Hub",
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

// baseUrl: pass "https://vstarproject.eu" when rendering on a subdomain page
// so that nav links point to the main domain instead of staying on the subdomain.
const Header = ({ baseUrl = "" }) => {
    const toUrl = (href) => href.startsWith("http") ? href : baseUrl + href;
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => { setMounted(true); }, []);
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
                    {/* Logo */}
                    <Link href={toUrl("/")} className="flex items-center">
                        <div className="flex gap-2 items-center">
                            <Image src="/vstar.png" alt="Logo" width={32} height={32} />
                            <p className="font-oswald text-white font-bold text-xl ml-1 hidden sm:block">VSTAR PROJECT</p>
                        </div>
                    </Link>

                    {/* Scrolled page label */}
                    <div className={`active-indicator${scrolled && pageLabel ? " visible" : ""}`}>
                        <span className="active-indicator-label">{pageLabel}</span>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href={toUrl("/")} className={`nav-link-btn${pathname === "/" ? " active" : ""}`}>Home</Link>
                        <Link href={toUrl("/talents")} className={`nav-link-btn${pathname === "/talents" ? " active" : ""}`}>Talents</Link>
                        <Link href={toUrl("/vinfernia")} className="nav-link-btn" style={{ color: pathname === "/vinfernia" ? "#f87171" : undefined }}>VINFERNIA</Link>
                        <Link href={toUrl("/vstar")} className="nav-link-btn" style={{ color: pathname === "/vstar" ? "#93c5fd" : undefined }}>VSTAR</Link>

                        <div className="relative z-50">
                            <button className="hamburger-btn" onClick={(e) => { e.stopPropagation(); setDesktopMenuOpen(!desktopMenuOpen); }}>
                                <Chevrons open={desktopMenuOpen} />
                            </button>
                            {mounted && createPortal(
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
                                            <Link key={href} href={toUrl(href)} className={`dropdown-link-btn${pathname === href ? " active" : ""}`} onClick={() => setDesktopMenuOpen(false)}>
                                                {label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>,
                                document.body
                            )}
                        </div>
                    </div>

                    {/* Mobile hamburger — animates to X when open */}
                    <div className="md:hidden">
                        <button
                            className="hamburger-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <HamburgerIcon open={mobileMenuOpen} />
                        </button>
                    </div>
                </nav>

                {/* ── MOBILE OVERLAY ── */}
                <div
                    className={`fixed inset-0 w-full h-screen z-[100] flex flex-col md:hidden transition-all duration-500 ${mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
                    style={{ background: "rgba(8,10,9,0.98)", backdropFilter: "blur(24px)" }}
                >
                    {/* Sticky top bar with X — never scrolls away */}
                    <div className="flex-shrink-0 flex justify-between items-center px-8 pt-8 pb-6">
                        <div className="flex gap-2 items-center">
                            <Image src="/vstar.png" alt="Logo" width={28} height={28} />
                            <span className="font-oswald text-white/40 font-bold text-sm tracking-widest uppercase">Navigation</span>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="hamburger-btn"
                            aria-label="Close menu"
                        >
                            <HamburgerIcon open={true} />
                        </button>
                    </div>

                    {/* Scrollable content */}
                    <div className="flex-1 overflow-y-auto px-8 pb-8 flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <p className="mobile-menu-section-label">Main</p>
                            <Link href={toUrl("/")} onClick={() => setMobileMenuOpen(false)} className={`nav-link-btn w-full !py-5 !text-xl ${pathname === "/" ? "active" : ""}`}>Home</Link>
                            <Link href={toUrl("/talents")} onClick={() => setMobileMenuOpen(false)} className={`nav-link-btn w-full !py-5 !text-xl ${pathname === "/talents" ? "active" : ""}`}>Talents</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="mobile-menu-section-label">Hubs</p>
                            <Link href={toUrl("/vinfernia")} onClick={() => setMobileMenuOpen(false)} className="nav-link-btn w-full !py-5 !text-xl" style={{ color: "#f87171" }}>VINFERNIA</Link>
                            <Link href={toUrl("/vstar")} onClick={() => setMobileMenuOpen(false)} className="nav-link-btn w-full !py-5 !text-xl" style={{ color: "#93c5fd" }}>VSTAR</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="mobile-menu-section-label">Database</p>
                            <div className="grid grid-cols-2 gap-3">
                                {navItems.map(({ href, label }) => (
                                    <Link key={href} href={toUrl(href)} onClick={() => setMobileMenuOpen(false)} className={`dropdown-link-btn !py-5 ${pathname === href ? "active" : ""}`}>
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-white/5 pt-6 flex justify-between items-center">
                            <p className="font-oswald text-[9px] text-white/15 tracking-[0.4em] uppercase"> // VStar Project</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
