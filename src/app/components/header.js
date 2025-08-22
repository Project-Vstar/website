import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="absolute top-0 left-0 w-full z-10">
            <nav className="flex items-center justify-between p-4 bg-transparent">
                <div>
                    <Image src="/vstar.png" alt="Logo" width={32} height={32} />
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="text-white hover:underline">Home</Link>
                    <Link href="/vstar" className="text-white hover:underline">VSTAR</Link>
                    <Link href="/vinfernia" className="text-white hover:underline">VINFERNIA</Link>
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