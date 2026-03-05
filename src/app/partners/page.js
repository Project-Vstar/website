"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

// ── Styles ────────────────────────────────────────────────────────────────
const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.9s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }
  .fade-2 { animation-delay: 0.25s; }
  .fade-3 { animation-delay: 0.4s; }

  .partner-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    height: 128px;
    padding: 24px;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
  }
  .partner-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 120%, var(--glow-color, rgba(96,165,250,0.08)), transparent 70%);
    opacity: 0;
    transition: opacity 0.35s ease;
  }
  .partner-card:hover {
    transform: translateY(-4px);
    border-color: var(--glow-border, rgba(96,165,250,0.3));
    box-shadow: 0 8px 40px var(--glow-shadow, rgba(96,165,250,0.12));
  }
  .partner-card:hover::before {
    opacity: 1;
  }
  .partner-card img {
    position: relative;
    z-index: 1;
    filter: grayscale(40%) brightness(0.9);
    transition: filter 0.3s ease;
    max-height: 64px;
    object-fit: contain;
  }
  .partner-card:hover img {
    filter: grayscale(0%) brightness(1.05);
  }

  /* Divider glow line */
  .section-rule {
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #60a5fa, #c084fc);
    border-radius: 2px;
    margin: 0 auto 48px;
  }
`;

// Accent colours cycling per card — mirrors the service card palette
const glowAccents = [
  { color: "rgba(250, 199, 96, 0.1)",  border: "rgba(250, 199, 96, 0.1)",  shadow: "rgba(250, 199, 96, 0.1)"  },
  { color: "rgba(248,113,113,0.1)", border: "rgba(248,113,113,0.3)", shadow: "rgba(248,113,113,0.15)" },
  { color: "rgba(205, 143, 235, 0.1)",  border: "rgba(205, 143, 235, 0.1)",  shadow: "rgba(205, 143, 235, 0.1)"  },
  { color: "rgba(192,132,252,0.1)", border: "rgba(192,132,252,0.3)", shadow: "rgba(192,132,252,0.15)" },
  { color: "rgba(211, 52, 52, 0.1)",  border: "rgba(211, 52, 52, 0.1)",  shadow: "rgba(211, 52, 52, 0.1)"  },
];

const partners = [
  { img: "/Partners/Ferdinand.jpg",    alt: "Ferdinand",   href: "#", imgClass: "h-24" },
  { img: "/Partners/BeLaser.png",      alt: "BeLaser",     href: "#", imgClass: "h-12" },
  { img: "/Partners/Odoo.png",         alt: "Odoo",        href: "#", imgClass: "h-12" },
  { img: "/Partners/PremierInn.svg",   alt: "Premier Inn", href: "#", imgClass: "h-12" },
  { img: "/Partners/Vodafone.png",     alt: "Vodafone",    href: "#", imgClass: "h-12" },
];

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{styles}</style>
      <Header />

      {/* ── Partners grid ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5 pt-32 pb-32 px-6 min-h-[70vh]">
        <div className="max-w-5xl mx-auto">

          {/* Section header — mirrors "What We Do" style */}
          <div className="fade-up fade-1 text-center mb-4">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase leading-tight">Our Partners</h2>
          </div>

          <div className="fade-up fade-2 section-rule" />

          <p className="fade-up fade-2 text-slate-400 text-sm text-center max-w-md mx-auto mb-16 -mt-8">
            The companies and creators we work with.
          </p>

          {/* Cards — centred with auto-fill so 5 cards sit balanced */}
          <div className="fade-up fade-3 flex flex-wrap justify-center gap-6">
            {partners.map((partner, i) => {
              const accent = glowAccents[i % glowAccents.length];
              return (
                <a
                  key={partner.alt}
                  href={partner.href}
                  className="partner-card w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)]"
                  style={{
                    "--glow-color":  accent.color,
                    "--glow-border": accent.border,
                    "--glow-shadow": accent.shadow,
                    minWidth: "160px",
                  }}
                >
                  <img src={partner.img} alt={partner.alt} className={partner.imgClass} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bridge gradient to footer */}
      <div className="w-full h-24 bg-gradient-to-b from-slate-900 to-slate-950" />

      <Footer />
    </div>
  );
}