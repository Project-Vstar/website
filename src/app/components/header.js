"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="absolute top-0 left-0 w-full z-10">
            <nav className="pl-30 flex items-center justify-between p-4 bg-transparent">
                <div>
                    <Link href="/" className="flex items-center">
                        <Image src="/vstar.png" alt="Logo" width={32} height={32} />
                        <p className="font-oswald text-white font-bold text-xl ml-2">VSTAR</p>
                    </Link>
                </div>
                <div className="hidden md:block pr-30">
                    <div className="bg-white/50 backdrop-blur-md border-2 border-white rounded-4xl px-5 py-1 flex gap-2">
                        <Link href="/" className="font-oswald text-black hover:text-gray-600 px-4 py-2 rounded-xl transition-all">
                            Home
                        </Link>
                        <Link href="/vstar" className="font-oswald text-black hover:text-gray-600 px-4 py-2 rounded-lg transition-all">
                            VSTAR
                        </Link>
                        <Link href="/vinfernia" className="font-oswald text-black hover:text-gray-600 px-4 py-2 rounded-lg transition-all">
                            VINFERNIA
                        </Link>
                    </div>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-white text-3xl focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </nav>
            <div
                className={`absolute top-0 left-0 w-full h-screen 
    bg-black bg-opacity-70 backdrop-blur-md 
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