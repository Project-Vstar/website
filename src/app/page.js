"use client";

import React, { useState, useEffect } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FactionChooser from "@/app/components/faction-chooser";

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHomepage');
    
    if (!hasVisited) {
      setShowLoading(true);
      sessionStorage.setItem('hasVisitedHomepage', 'true');
      
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setShowLoading(false), 1000);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const getFlexClass = (side) => {
    if (hovered === side) return "flex-[2]";
    if (hovered === null) return "flex-[1]";
    return "flex-[1]";
  };

  return (
    <>
      {showLoading && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-40 animate-pulse" />
          
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          <div className="relative z-10 flex flex-col items-center">
            <img src="/VSTAR.png" alt="VSTAR Logo" className="w-48 h-48 mb-6" />
            <h1 className="text-4xl font-bold text-white tracking-widest">VSTAR PROJECT</h1>
          </div>
        </div>
      )}

      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />

        <FactionChooser
          hovered={hovered}
          setHovered={setHovered}
          getFlexClass={getFlexClass}
        />

        <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <img src="/VSTAR.png" alt="VSTAR Logo" className="w-48 h-48 mb-6" />
              <h1 className="text-6xl font-bold mb-4 tracking-wider">VSTAR</h1>
              <p className="text-2xl text-slate-400 tracking-wide">Virtual Star Entertainment</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">The Company</h3>
                <p className="text-slate-300 leading-relaxed">Content about the company goes here...</p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">Motto and message from our CEO...</p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">History</h3>
                <p className="text-slate-300 leading-relaxed">Our journey and milestones...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 py-20 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wider pb-5">Physical Appearances</h2>
            <p className="text-slate-400 text-xl mb-8">Come visit us at these upcoming events!</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Event 1</h3>
                <p className="text-slate-300 leading-relaxed">Details about Event, photo? bg?</p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Event 2</h3>
                <p className="text-slate-300 leading-relaxed">Details about Event, photo? bg?</p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Event 3</h3>
                <p className="text-slate-300 leading-relaxed">Details about Event, photo? bg?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 py-20 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wider pb-5">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
              <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
                <img src="/partners/Ferdinand.jpg" alt="Partner 1" className="object-contain h-24" />
              </a>
              <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32">
                <img src="/partners/BeLaser.png" alt="Partner 2" className="object-contain h-16 p-1" />
              </a>
              <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
                <img src="/partners/Odoo.png" alt="Partner 3" className="object-contain h-16 p-1" />
              </a>
              <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
                <img src="/partners/PremierInn.svg" alt="Partner 4" className="object-contain h-16 p-1" />
              </a>
              <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
                <img src="/partners/Vodafone.png" alt="Partner 5" className="object-contain h-16 p-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block mb-4">
              <span className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wider">KAIROS</span>
            </div>
            <h2 className="text-5xl font-bold mb-8 tracking-wider">KAIROS</h2>
            <img src="VINFERNIA\VINFERNIA\Kairos_White.png" alt="Kairos logo" className="object-cover max-h-100 mb-6 mt-10 content-center mx-auto" />
            <p className="text-slate-400 text-xl">Coming Soon</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}