"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { EmblaCarousel } from "../components/carousel_vinfernia";

export default function VStarPage() {
  const talents = [
    { name: "Dee", image: "VINFERNIA/VINFERNIA/Genmate Banner/DeeBG.png", char: "VINFERNIA/VINFERNIA/Genmate Banner/DeeChar.png", href: "/talents/dee" },
    { name: "DreamyDiino", image: "VINFERNIA/VINFERNIA/Genmate Banner/DiinoBG.png", char: "VINFERNIA/VINFERNIA/Genmate Banner/DiinoChar.png", href: "/talents/DreamyDiino" },
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

        <div className="flex flex-col-reverse md:flex-row min-h-screen text-black bg-gradient-to-br from-red-950 via-slate-900 to-slate-950 px-8 py-16 items-center gap-12">
          <div className="w-full md:w-1/4 flex items-center justify-center bg-gray-800">
            <img src="/VSTAR/mfsdd_inverted_designsheet_standingonly_2.png" alt="Dee Ronny syn Łužycy in a suit, standing." className="object-cover h-full w-full" />
          </div>

          <div className="flex flex-col justify-center text-white">
            <div className="inline-block mb-4">
              <span className="bg-red-900 text-red-300  px-4 py-2 rounded-full text-sm font-semibold tracking-wider">VINFERNIA</span>
            </div>
            <h2 className="text-5xl font-bold mb-8 tracking-wide">THE LORE OF VINFERNIA</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                This is the beginning of the Lore of VINFERNIA - it will change over time and contribution of every gen.
              </p>
              <p>
                Being saved by the soldiers showed Dee and his family the nightmare that the bombed-out city became. That is the day the little boy swore to himself to do everything he can to bring peace and happiness to the world.
              </p>
              <p>
                After a successful career in Espionage, he gets transferred to the State Security as a Spyhunter in 1960. In 1965, he is given supervision over the "Kurjawje" Project.
              </p>
              <p>
                With the device in hand, he set out to found his own organization to conquer the world and fulfill his dream:
              </p>
              <p className="text-red-400 font-semibold">
                Bringing happiness and peace all over the world.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 py-20 px-8 min-h-[80vh]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wider">VINFERNIA MANGA</h2>
            <EmblaCarousel />
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
