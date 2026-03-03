import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-8 py-8 flex flex-wrap justify-center gap-x-12 gap-y-6">
                <div className="flex flex-wrap gap-x-12 gap-y-4 items-start">
                    <div className="flex-shrink-0 flex items-start">
                        <Image
                            src="/vstar.png"
                            alt="Logo"
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/vstar" className="hover:underline">VSTAR</Link>
                        <Link href="/vinfernia" className="hover:underline">VINFERNIA</Link>
                    </div>

                    <div className="flex flex-col space-y-1.5 text-sm">
                        <Link href="/Articles" className="hover:underline">Articles</Link>
                        <Link href="/cookies" className="hover:underline">Cookies</Link>
                    </div>

                    <div className="flex flex-col space-y-1.5 text-sm">
                        <Link href="/member-area" className="hover:underline">Member Area</Link>
                        <Link href="/businesspartner-area" className="hover:underline">Businesspartner Area</Link>
                        <a href="https://shop.vstarproject.eu" target="_blank" rel="noopener noreferrer"  className="hover:underline">Online Shop</a>
                    </div>

                    <div className="flex flex-col space-y-1.5 text-sm">
                        <Link href="/auditions" className="hover:underline">Auditions</Link>
                        <Link href="/press" className="hover:underline">Press</Link>
                        <Link href="/supporter-guideline" className="hover:underline">Supporter Guideline</Link>
                        <Link href="/faq" className="hover:underline">FAQ</Link>
                    </div>
                </div>
            </div>


            <div className="w-full bg-black text-gray-400 text-sm py-6">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 md:gap-y-0">
                    <p>© 2025 VINFERNIA UG&Co.KG | All Rights Reserved</p>

                    <div className="flex flex-col md:flex-row md:items-center gap-y-2 md:gap-y-0 md:gap-x-6">
                        <div className="flex gap-x-4">
                            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                            <Link href="/terms" className="hover:underline">Terms of Service</Link>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                            <Link href="/impressum" className="hover:underline">Impressum</Link>
                            <Link href="/data-protection-policy" className="hover:underline">Data Protection Policy</Link>
                            <Link href="/derivative-works-guideline" className="hover:underline">Derivative Works Guideline</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
