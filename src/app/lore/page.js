"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { EmblaCarousel } from "@/app/components/carousel_vinfernia";

export default function LorePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />

      <main className="flex-grow flex flex-col text-white pt-40 pb-40">

        {/* ── LORE SECTION ─────────────────────────────────────────────── */}
        <div className="flex flex-col-reverse md:flex-row min-h-screen text-black bg-gradient-to-br from-red-950 via-slate-900 to-slate-950 px-8 py-16 items-center gap-12">

          {/* Character image */}
          <div className="w-full md:w-1/4 flex items-center justify-center bg-gray-800">
            <img
              src="/VSTAR/mfsdd_inverted_designsheet_standingonly_2.png"
              alt="Dee Ronny syn Łužycy in a suit, standing."
              className="object-cover h-full w-full"
            />
          </div>

          {/* Lore text */}
          <div className="flex flex-col justify-center text-white">
            <div className="inline-block mb-4">
              <span className="bg-red-900 text-red-300 px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
                VINFERNIA
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-8 tracking-wide">THE LORE OF VINFERNIA</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                This is the beginning of the Lore of VINFERNIA - it will change over time and
                contribution of every gen.
              </p>
              <p>
                Being saved by the soldiers showed Dee and his family the nightmare that the
                bombed-out city became. That is the day the little boy swore to himself to do
                everything he can to bring peace and happiness to the world.
              </p>
              <p>
                After a successful career in Espionage, he gets transferred to the State Security
                as a Spyhunter in 1960. In 1965, he is given supervision over the
                &quot;Kurjawje&quot; Project.
              </p>
              <p>
                With the device in hand, he set out to found his own organization to conquer the
                world and fulfill his dream:
              </p>
              <p className="text-red-400 font-semibold">
                Bringing happiness and peace all over the world.
              </p>
            </div>
          </div>
        </div>

              <div className="flex flex-col-reverse md:flex-row min-h-screen text-black bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 px-8 py-16 items-center gap-12">
        <div className="w-full md:w-1/4 flex items-center justify-center bg-gray-800">
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

        <div className="bg-slate-900 py-20 px-8 min-h-[80vh]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wider">VSTAR MANGA</h2>
            <EmblaCarousel />
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}