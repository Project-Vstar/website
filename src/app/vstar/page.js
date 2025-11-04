"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";

export default function VStarPage() {

    const talents = [
    { name: "Lockhart", image: "VINFERNIA/VINFERNIA/Genmate Banner/LockBG.png", char: "VINFERNIA/VINFERNIA/Genmate Banner/LockChar.png", href: "/talents/lockhart" },
  ];


  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />

      <main className="flex-grow flex flex-col items-center text-white pt-40 pb-40">
      <div className="text-4xl font-bold mt-16 mb-8 text-center">
        <div className="w-64 h-64 mx-auto mb-6">
          <img
            src="/VSTAR/VSTAR.png"
            alt="VSTAR Logo"
            className="drop-shadow-[0_0_28px_]"
          />          </div>
        <p>VSTAR</p>
        <p className="text-lg font-normal text-slate-300 mt-2">
          Discover our virtual VSTAR talents!
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

      <div className="flex min-h-screen text-black bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 px-8 py-16 items-center gap-12">
        <div className="w-1/4 flex items-center justify-center bg-gray-800">
          <img src="/VSTAR/mfsdd_inverted_designsheet_standingonly_2.png" alt="Dee Ronny syn Łužycy in a suit, standing." className="object-cover h-full w-full" />
        </div>

        <div className="flex flex-col justify-center text-white">
          <div className="inline-block mb-4">
            <span className="bg-blue-900 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wider">VSTAR</span>
          </div>
          <h2 className="text-5xl font-bold mb-8 tracking-wide">THE LORE OF VSTAR</h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              This is the beginning of the lore of VSTAR - it will evolve over time with contributions from every generation.
            </p>
            <p>
              Dee Ronny syn Łužycy was born to Dejan and Deniza syn Łužycy. He joined the Diplomatic Service (as a spy) in 1956. After a successful career in espionage and becoming the most hunted spy in the West, he was transferred to the State Security as a spy hunter in 1960.
            </p>
            <p>
              In 1965, he was given supervision over the "Kurjawje" Project (Kurjawje = Mist, as in the mists of time).
            </p>
            <p>
              In 1966, scientists of the Drježdźany Socialist Republic invented a device for time travel under the political supervision of Plukovník (Lt. Colonel) Dee Ronny syn Łužycy of the State Security Agency.
            </p>
            <p>
              However, something went wrong... An evil that lurks in every person was split away. 60 years later, that evil is found...</p>
            <p className="text-blue-400 font-semibold">
              VINFERNIA must be defeated.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-wider">VSTAR MANGA</h2>
          <p className="text-slate-400 text-xl mb-12">Coming Soon</p>
              <div className="bg-slate-800 rounded-lg h-96 border-2 border-slate-700 hover:border-blue-500 transition-all duration-300 flex items-center justify-center">
                <span className="text-slate-600 text-lg">Carousel</span>
              </div>
          </div>
      </div>

      </main>

      <Footer />
    </div>
  );
}