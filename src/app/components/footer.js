import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-8">
            <div className="flex flex-col items-center space-y-8">
                {/* Logo Row */}
                <div>
                    <Image src="/vstar.png" alt="Logo" width={32} height={32} />
                </div>
                {/* Links Row */}
                <div className="flex space-x-4">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/vstar" className="hover:underline">VSTAR</Link>
                    <Link href="/vinfernia" className="hover:underline">VINFERNIA</Link>
                </div>
                {/* Privacy and Cookies Row */}
                <div className="flex space-x-4 text-sm">
                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                    <Link href="/cookies" className="hover:underline">Cookies</Link>
                    <Link href="/terms" className="hover:underline">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
