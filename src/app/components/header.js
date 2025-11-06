"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-10 bg-linear-to-t from-white/0 via-black/0 via-30% via-black/5 via-60% via-black/10 via-75% to-black/15">
            <nav className="flex items-center justify-between p-4 bg-transparent bg-linear-to-t from-white/0 via-black/0 via-30% via-black/5 via-60% via-red/10 via-75% to-black/15">
                <Link href="/" className="hidden md:flex items-center pl-50">
                    <div className="p-50 bg-white/30 backdrop-blur-md border-1 border-white rounded-4xl px-5 py-1 flex gap-2">
                        <Image src="/vstar.png" alt="Logo" width={32} height={32} />
                        <p className="font-oswald text-white font-bold text-xl ml-2">VSTAR PROJECT</p>
                    </div>
                </Link>
                <div className="md:hidden flex-1"></div>

                {/* Desktop Navigation - Right Side */}
                <div className="hidden md:flex items-center gap-3 pr-50">
                    <div className="bg-white/30 backdrop-blur-md border-1 border-white rounded-4xl px-5 py-1 flex gap-2">
                        <Link href="/" className="font-bold font-oswald text-white hover:text-gray-300 px-4 py-2 rounded-xl transition-all">
                            Home
                        </Link>
                        <Link href="/vstar" className="font-bold font-oswald text-white hover:text-gray-300 px-4 py-2 rounded-lg transition-all">
                            VSTAR
                        </Link>
                        <Link href="/vinfernia" className="font-bold font-oswald text-white hover:text-gray-300 px-4 py-2 rounded-lg transition-all">
                            VINFERNIA
                        </Link>
                    </div>

                    {/* Desktop Hamburger with Dropdown */}
                    <div className="relative z-50">
                        <div className="bg-white/30 backdrop-blur-md border-1 border-white rounded-4xl px-5 py-1 hover:bg-white/40 transition-all">
                            <button
                                className="text-white text-3xl focus:outline-none hover:text-gray-300 transition-all"
                                onClick={(e) => 
                                    e.stopPropagation() ||
                                    setDesktopMenuOpen(!desktopMenuOpen)}
                            >
                                ☰
                            </button>
                        </div>

                        {/* Dropdown Menu */}
                        <div className={`absolute top-full right-0 mt-2 bg-white/20 backdrop-blur-lg border-1 border-white rounded-2xl p-4 min-w-[400px] transition-all duration-300 ${desktopMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                            <div className="grid grid-cols-3 gap-3">
                                <Link href="/lore" className="font-bold font-oswald text-white bg-white/30 hover:bg-white/40 px-4 py-3 rounded-full text-center transition-all border border-white/50">
                                    Lore
                                </Link>
                                <Link href="/about" className="font-bold font-oswald text-white bg-white/30 hover:bg-white/40 px-4 py-3 rounded-full text-center transition-all border border-white/50">
                                    About
                                </Link>
                                <Link href="/page3" className="font-bold font-oswald text-white bg-white/30 hover:bg-white/40 px-4 py-3 rounded-full text-center transition-all border border-white/50">
                                    Page 3
                                </Link>
                                <Link href="/page4" className="font-bold font-oswald text-white bg-white/30 hover:bg-white/40 px-4 py-3 rounded-full text-center transition-all border border-white/50">
                                    Page 4
                                </Link>
                                <Link href="/page5" className="font-bold font-oswald text-white bg-white/30 hover:bg-white/40 px-4 py-3 rounded-full text-center transition-all border border-white/50">
                                    Page 5
                                </Link>
                                <Link href="/page6" className="font-bold font-oswald text-white bg-white/30 hover:bg-white/40 px-4 py-3 rounded-full text-center transition-all border border-white/50">
                                    Page 6
                                </Link>
                                <Link href="/partners" className="font-bold font-oswald text-white bg-white/30 hover:bg-white/40 px-4 py-3 rounded-full text-center transition-all border border-white/50">
                                    Partners
                                </Link>
                                <Link href="/page8" className="font-bold font-oswald text-white bg-white/30 hover:bg-white/40 px-4 py-3 rounded-full text-center transition-all border border-white/50">
                                    Page 8
                                </Link>
                                <Link href="/page9" className="font-bold font-oswald text-white bg-white/30 hover:bg-white/40 px-4 py-3 rounded-full text-center transition-all border border-white/50">
                                    Page 9
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        className="text-white text-3xl focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`absolute top-0 left-0 w-full h-screen 
                    bg-black/30 backdrop-blur-lg 
                    flex flex-col items-center justify-center space-y-4 md:hidden
                    transition-opacity duration-300
                    ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl">
                    Home
                </Link>
                <Link href="/vstar" onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl">
                    VSTAR
                </Link>
                <Link href="/vinfernia" onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl">
                    VINFERNIA
                </Link>
                <button
                    className="text-white text-3xl absolute top-4 right-4"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    ✕
                </button>
            </div>
        </header>
    );
};

export default Header;