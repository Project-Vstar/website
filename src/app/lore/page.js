/* eslint-disable react/prop-types */
"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { EmblaCarousel } from "@/app/components/carousel_vinfernia";

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.9s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }
  .fade-2 { animation-delay: 0.3s; }
`;

// ─── Lore section data ───────────────────────────────────────────────────────
const LORE_SECTIONS = [
  {
    id: "vinfernia",
    factionColor: "#f87171",
    factionBg: "rgba(127,29,29,0.25)",
    gradientFrom: "rgba(127,29,29,0.3)",
    gradientVia: "rgba(15,23,42,0.95)",
    gradientTo: "rgba(2,6,23,1)",
    image: "/VINFERNIA/VINFERNIA/Dee/Full_Model_Default.png",
    imageAlt: "Dee Ronny syn Łužycy, standing.",
    imageRight: false,
    imageScale: 1.2,
    title: "The Lore of VINFERNIA",
    paragraphs: [
      "This is the beginning of the Lore of VINFERNIA - it will change over time with the contribution of every generation.",
      "Being saved by the soldiers showed Dee and his family the nightmare that the bombed-out city became. That is the day the little boy swore to himself to do everything he can to bring peace and happiness to the world.",
      "After a successful career in Espionage, he gets transferred to the State Security as a Spyhunter in 1960. In 1965, he is given supervision over the \"Kurjawje\" Project.",
      "With the device in hand, he set out to found his own organization to conquer the world and fulfill his dream:",
    ],
    accent: "Bringing happiness and peace all over the world.",
    accentColor: "#f87171",
  },
  {
    id: "vstar",
    factionColor: "#60a5fa",
    factionBg: "rgba(30,58,138,0.25)",
    gradientFrom: "rgba(30,58,138,0.3)",
    gradientVia: "rgba(15,23,42,0.95)",
    gradientTo: "rgba(2,6,23,1)",
    image: "/VSTAR/mfsdd_inverted_designsheet_standingonly_2.png",
    imageAlt: "Dee Ronny syn Łužycy, standing.",
    imageRight: true,
    imageScale: 1.2,
    title: "The Lore of VSTAR",
    paragraphs: [
      "This is the beginning of the lore of VSTAR - it will evolve over time with contributions from every generation.",
      "Dee Ronny syn Łužycy was born to Dejan and Deniza syn Łužycy. He joined the Diplomatic Service (as a spy) in 1956. After a successful career in espionage and becoming the most hunted spy in the West, he was transferred to the State Security as a spy hunter in 1960.",
      "In 1965, he was given supervision over the \"Kurjawje\" Project (Kurjawje = Mist, as in the mists of time).",
      "In 1966, scientists of the Drježdźany Socialist Republic invented a device for time travel under the political supervision of Plukovník (Lt. Colonel) Dee Ronny syn Łužycy of the State Security Agency.",
      "However, something went wrong... An evil that lurks in every person was split away. 60 years later, that evil is found...",
    ],
    accent: "VINFERNIA must be defeated.",
    accentColor: "#60a5fa",
  },
];

// ─── Single lore block ───────────────────────────────────────────────────────
function LoreSection({ section }) {
  const scale = section.imageScale ?? 1.0;

  const textContent = (
    <div className="flex flex-col justify-center py-8 md:py-16 max-w-xl">
      <div className="inline-block mb-5">
      </div>

      <h2 className=" font-oswald text-4xl md:text-5xl font-bold mb-8 tracking-wide text-white leading-tight">
        {section.title}
      </h2>

      <div className="space-y-5 text-base text-slate-300 leading-relaxed">
        {section.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="font-semibold text-lg" style={{ color: section.accentColor }}>
          {section.accent}
        </p>
      </div>
    </div>
  );

  return (
    // overflow-hidden → overflowX hidden only, so transform scale can grow upward freely
    <section className="relative w-full" style={{ overflowX: "hidden" }}>
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${section.gradientFrom} 0%, ${section.gradientVia} 50%, ${section.gradientTo} 100%)`,
        }}
      />
      {/* Subtle top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ backgroundColor: `${section.factionColor}20` }}
      />

      {/* ── Mobile ghost image ── */}
      <div
        className="md:hidden absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${section.image})`,
          backgroundSize: `auto ${90 * scale}%`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: section.imageRight ? "110% bottom" : "-10% bottom",
          opacity: 0.13,
          WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black 25%, black 60%, transparent 100%),
                            linear-gradient(to ${section.imageRight ? "left" : "right"}, transparent 0%, black 40%)`,
          WebkitMaskComposite: "destination-in",
          maskImage: `linear-gradient(to bottom, transparent 0%, black 25%, black 60%, transparent 100%),
                      linear-gradient(to ${section.imageRight ? "left" : "right"}, transparent 0%, black 40%)`,
          maskComposite: "intersect",
        }}
      />
      {/* Faction glow on mobile */}
      <div
        className="md:hidden absolute bottom-0 pointer-events-none w-48 h-64 blur-[80px]"
        style={{
          backgroundColor: `${section.factionColor}15`,
          [section.imageRight ? "right" : "left"]: "-2rem",
        }}
      />

      <div
        className="relative z-10 max-w-6xl mx-auto px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16"
        style={{ flexDirection: section.imageRight ? undefined : "row-reverse" }}
      >
        {/* Desktop image column */}
        <div className="hidden md:flex md:w-2/5 flex-shrink-0 items-end justify-center overflow-visible">
          <div
            className="relative flex items-end justify-center overflow-visible"
            style={{ minHeight: "380px", width: "100%" }}
          >
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 rounded-full blur-[80px] pointer-events-none"
              style={{ backgroundColor: `${section.factionColor}18` }}
            />
            <img
              src={section.image}
              alt={section.imageAlt}
              className="relative z-10 h-auto object-contain"
              style={{
                maxHeight: "480px",
                transform: `scale(${scale})`,
                transformOrigin: "bottom center",
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">{textContent}</div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function LorePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <style>{styles}</style>
      <Header />

      <main className="flex-grow flex flex-col text-white pt-24">

        {/* ── Hero ── */}
        <section className="w-full text-center px-6 pt-16 pb-12 bg-gradient-to-b from-slate-950 to-slate-900">
          <h1 className=" fade-up fade-1 font-oswald text-5xl sm:text-6xl font-bold tracking-wide mb-4 text-white uppercase">
            The Lore
          </h1>
          <p className="fade-up fade-2text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            The story behind VINFERNIA and{" "}
            VSTAR - a world of espionage,
            fractured timelines, and the relentless pursuit of peace.
          </p>
        </section>

        {/* ── Lore sections ── */}
        {LORE_SECTIONS.map((section) => (
          <LoreSection key={section.id} section={section} />
        ))}

        {/* ── Manga viewer ── */}
        <section className="bg-slate-950 py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-oswald text-4xl font-bold text-white uppercase tracking-wide mb-3">
                Manga
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Original stories featuring VINFERNIA, VSTAR, and individual talents!
              </p>
            </div>

            <EmblaCarousel />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}