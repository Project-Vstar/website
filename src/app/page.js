"use client";

import React, { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FactionChooser from "@/app/components/faction-chooser";

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const getFlexClass = (side) => {
    if (hovered === side) return "flex-[2]";
    if (hovered === null) return "flex-[1]";
    return "flex-[1]";
  };

  return (
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
          <h2 className="text-4xl font-bold text-white mb-4 tracking-wider pb-5">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-center bg-gray-700 rounded-lg h-32"
                >
                  <span className="text-gray-400">Brand {index + 1}</span>
                </a>
              ))}
          </div>
        </div>
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
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-800 rounded-lg h-96 border-2 border-slate-700 hover:border-blue-500 transition-all duration-300 flex items-center justify-center">
                <span className="text-slate-600 text-lg">Page {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-h-screen text-black bg-gradient-to-br from-red-950 via-slate-900 to-slate-950 px-8 py-16 items-center gap-12">
        <div className="w-1/4 flex items-center justify-center bg-gray-800">
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

      <div className="bg-slate-900 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-wider">VINFERNIA MANGA</h2>
          <p className="text-slate-400 text-xl mb-12">Coming Soon</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-800 rounded-lg h-96 border-2 border-slate-700 hover:border-red-500 transition-all duration-300 flex items-center justify-center">
                <span className="text-slate-600 text-lg">Page {i}</span>
              </div>
            ))}
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
  );
}
