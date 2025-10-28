"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";

export default function VStarPage() {
  // Temporary mock data — replace with your real talent info
  const talents = [
    { name: "Dee", image: "VINFERNIA/VINFERNIA/Genmate Banner/DeeBG.png", char: "VINFERNIA/VINFERNIA/Genmate Banner/DeeChar.png", href: "/talents/dee" },
    { name: "DreamyDiino", image: "VINFERNIA/VINFERNIA/Genmate Banner/DiinoBG.png", char: "VINFERNIA/VINFERNIA/Genmate Banner/DiinoChar.png", href: "/talents/dreamydiino" },
    { name: "Gomifuyu", image: "VINFERNIA/VINFERNIA/Genmate Banner/GomiBG.png", char: "VINFERNIA/VINFERNIA/Genmate Banner/GomiChar.png", href: "/talents/gomifuyu" },
    { name: "Lee Valentine", image: "VINFERNIA/VINFERNIA/Genmate Banner/LeeBG.png", char: "VINFERNIA/VINFERNIA/Genmate Banner/LeeChar.png", href: "/talents/leevalentine" },
    { name: "Lockhart", image: "VINFERNIA/VINFERNIA/Genmate Banner/LockBG.png", char: "VINFERNIA/VINFERNIA/Genmate Banner/LockChar.png", href: "/talents/lockhart" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />

      <main className="flex-grow flex flex-col items-center text-white pt-40 pb-40">
        <div className="text-4xl font-bold mt-16 mb-8 text-center">
          <div className="w-64 h-64 mx-auto mb-6">
            <img
              src="/VINFERNIA/VINFERNIA/Vinfernia_black.png"
              alt="VSTAR Logo"
              className="drop-shadow-[0_0_28px_red]"
            />          </div>
          <p>VINFERNIA</p>
          <p className="text-lg font-normal text-slate-300 mt-2">
            Discover our virtual VINFERNIA talents!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16 px-4 max-w-6xl">
          {talents.map((talent) => (
            <Link
              key={talent.name}
              href={talent.href}
              className="group relative flex flex-col items-center w-40 sm:w-48 transition-transform hover:scale-105"
            >
              <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="object-cover w-full h-full"
                />
                <img
                  src={talent.char}
                  alt={`${talent.name} Character`}
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="mt-3 text-lg font-semibold group-hover:text-blue-400 transition-colors">
                {talent.name}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
