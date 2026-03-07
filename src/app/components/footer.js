import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    // Cleaner, more traditional typography
    const sectionLabelStyle = "font-oswald text-xs uppercase tracking-[0.2em] text-white/50 mb-6 block font-medium";
    const linkStyle = "text-gray-400 hover:text-white transition-colors duration-200 text-sm py-1 block";

    return (
        <footer className="w-full bg-[#080a09] text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/vstar.png"
                                alt="Logo"
                                width={48}
                                height={48}
                                className="opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                            Providing a platform for virtual talent and digital entertainment.
                        </p>
                    </div>

                    {/* Simple Columnar Navigation */}
                    <div>
                        <span className={sectionLabelStyle}>Navigation</span>
                        <nav className="space-y-2">
                            <Link href="/" className={linkStyle}>Home</Link>
                            <Link href="/talents" className={linkStyle}>Talents</Link>
                            <Link href="/lore" className={linkStyle}>Lore</Link>
                            <Link href="/articles" className={linkStyle}>Articles</Link>
                        </nav>
                    </div>

                    <div>
                        <span className={sectionLabelStyle}>Resources</span>
                        <nav className="space-y-2">
                            <Link href="/member-area" className={linkStyle}>Member Area</Link>
                            <Link href="/businesspartner-area" className={linkStyle}>Business partners</Link>
                            <Link href="https://shop.vstarproject.eu" target="_blank" className={linkStyle}>Shop</Link>
                            <Link href="/faq" className={linkStyle}>FAQ</Link>
                        </nav>
                    </div>

                    <div>
                        <span className={sectionLabelStyle}>Involvement</span>
                        <nav className="space-y-2">
                            <Link href="/auditions" className={linkStyle}>Auditions</Link>
                            <Link href="/press" className={linkStyle}>Press Kit</Link>
                            <Link href="/derivative-works-guideline" className={linkStyle}>Derivative Works</Link>
                        </nav>
                    </div>

                    <div>
                        <span className={sectionLabelStyle}>Legal</span>
                        <nav className="space-y-2">
                            <Link href="/impressum" className={linkStyle}>Impressum</Link>
                            <Link href="/privacy-policy" className={linkStyle}>Privacy Policy</Link>
                            <Link href="/terms" className={linkStyle}>Terms of Service</Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full py-10 border-t border-white/5 bg-black/40">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 tracking-wider">
                    <p>© 2025 VINFERNIA UG (haftungsbeschränkt) & Co. KG</p>
                    <div className="flex gap-8">
                        {/* <span className="uppercase tracking-[0.3em] opacity-30">VSTAR PROJECT</span> */}
                    </div>
                    <p> Website by Nine Lives Digital</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;