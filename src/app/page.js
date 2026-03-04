"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import OrgChart from "@/app/components/orgchart";
import Link from "next/link";
import FactionChooser from "./components/faction-chooser";
import { SocialLinks } from "./components/SocialLinks";

const internalBtnStyles = `
  .internal-link-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px;
    border-radius: 8px;
    border: 1px solid color-mix(in srgb, rgba(255,255,255,0.6) 30%, transparent);
    color: #ffffff;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    overflow: hidden;
    background: color-mix(in srgb, rgba(255,255,255,0.6) 10%, transparent);
    backdrop-filter: blur(4px);
    min-width: 140px;
  }
  .internal-link-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(255,255,255,0.6);
    transform: translateX(-101%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }
  .internal-link-btn:hover::before { transform: translateX(0); }
  .internal-link-btn .chevron {
    margin-left: auto;
    font-size: 1.2rem;
    opacity: 0.5;
    position: relative;
    z-index: 1;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  .internal-link-btn:hover .chevron { transform: translateX(3px); opacity: 1; }
`;

function GlassCard({ children, accentColor, borderColor }) {
  return (
    <div
      className="backdrop-blur-sm rounded-2xl border p-8 flex flex-col h-full transition-transform hover:scale-[1.01]"
      style={{ backgroundColor: accentColor, borderColor: borderColor }}
    >
      {children}
    </div>
  );
}

const services = [
  {
    title: "Live Streaming",
    color: "#f87171",
    bg: "rgba(239, 68, 68, 0.05)",
    border: "rgba(239, 68, 68, 0.2)",
    items: [
      {
        label: "2D & 3D Streams",
        body: "Gaming, singing, chatting, collabs — catch our talents live on YouTube, Twitch, X, and TikTok."
      },
      {
        label: "3D Live Events",
        body: "Full online concerts and themed live shows powered by high-quality 3D characters."
      }
    ]
  },
  {
    title: "Entertainment Technology",
    color: "#22d3ee",
    bg: "rgba(34, 211, 238, 0.05)",
    border: "rgba(34, 211, 238, 0.2)",
    items: [
      {
        label: "Events & Conventions",
        body: "We team up with partners in tech and communications to bring cutting-edge entertainment experiences to anime and gaming conventions worldwide."
      }
    ]
  },
  {
    title: "Other Media",
    color: "#c084fc",
    bg: "rgba(168, 85, 247, 0.05)",
    border: "rgba(168, 85, 247, 0.2)",
    items: [
      {
        label: "Stories & Manga",
        body: "Original stories and manga featuring VINFERNIA and VSTAR talents — plus the occasional secret announcement you won't want to miss."
      },
      {
        label: "What's Coming",
        body: "We're working on a lot more — from video games to an animated series set in the world of VINFERNIA and VSTAR."
      }
    ]
  }
];

const staff = [
  { img: "/company/dee-staff.png", role: "CEO & Management Lead", name: "Dee Ronny", color: "#60a5fa" },
  { img: "/company/diino-staff.png", role: "Art Director", name: "DreamyDiino", color: "#c084fc" }
];

const officialChannelLinks = [
  { platform: "VINFERNIA on X", url: "https://x.com/VInferniaVT" },
  { platform: "VSTAR on X",     url: "https://x.com/VSVirtualStar" }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{internalBtnStyles}</style>
      <FactionChooser />
      <Header />

      <main className="flex-grow">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-48 pb-24 px-6 text-center bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="flex items-center justify-center gap-8 md:gap-12 mb-10">
            <img src="/VINFERNIA/VINFERNIA/Vinfernia_White.png" alt="VINFERNIA Logo" className="w-28 h-28 object-contain drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]" />
            <span className="text-slate-700 text-4xl font-thin">×</span>
            <img src="/VSTAR/VSTAR.png" alt="VSTAR Logo" className="w-28 h-28 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
          </div>
          <h1 className="font-oswald text-5xl font-bold tracking-tight mb-4 uppercase">The Company</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            VINFERNIA and VSTAR are brands under
            <span className="text-white font-semibold"> VINFERNIA UG (Haftungsbeschränkt) & Co.KG</span>.
          </p>
        </section>

        {/* ── What We Do ────────────────────────────────────────────────── */}
        <section className="bg-slate-900 border-t border-white/5 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-oswald text-3xl font-bold text-center mb-16 uppercase">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((svc) => (
                <GlassCard key={svc.title} accentColor={svc.bg} borderColor={svc.border}>
                  <h3 className="font-oswald text-xl font-bold mb-6" style={{ color: svc.color }}>{svc.title}</h3>
                  <div className="space-y-6">
                    {svc.items.map(item => (
                      <div key={item.label} className="border-b border-white/5 pb-4 last:border-0">
                        <h4 className="font-bold text-sm mb-1" style={{ color: svc.color }}>{item.label}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-24 bg-gradient-to-b from-slate-900 to-slate-900/60" />

        {/* ── Staff ─────────────────────────────────────────────────────── */}
        <section className="bg-blue-950/30 border-t border-blue-900/20 py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-oswald text-3xl font-bold text-center mb-16 tracking-wide uppercase">Staff</h2>
            <div className="flex flex-wrap justify-center gap-16 md:gap-24">
              {staff.map((member) => (
                <div key={member.name} className="flex flex-col items-center group">
                  <div className="w-44 h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/40 mb-6 transition-transform group-hover:-translate-y-2">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-oswald text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: member.color }}>{member.role}</p>
                  <p className="text-xl font-bold">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-24 bg-gradient-to-b from-blue-950/30 to-slate-900" />

        {/* ── Official Channels ─────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="font-oswald text-3xl font-bold mb-3 uppercase">Official Channels</h2>
          <p className="text-slate-400 mb-10 text-sm">Follow us for announcements, streams, and updates.</p>
          <div className="flex justify-center">
            <SocialLinks links={officialChannelLinks} signatureColor="rgba(255,255,255,0.6)" />
          </div>
        </section>

        {/* ── Talents ───────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="font-oswald text-3xl font-bold mb-4 uppercase">Our Talents</h2>
          <p className="text-slate-400 mb-12">Meet the personalities behind our flagship divisions.</p>
          <div className="flex justify-center">
            <Link href="/vinfernia" className="internal-link-btn">
              <span style={{ position: "relative", zIndex: 1, flex: 1, textAlign: "center" }}>Go to Talents</span>
              <span className="chevron">›</span>
            </Link>
          </div>
        </section>

        {/* ── Organisation ──────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-oswald text-2xl text-center mb-12 opacity-50 tracking-[0.2em] uppercase">Organisation</h2>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] pointer-events-none" />
            <div className="bg-blue-950/20 border border-blue-900/20 p-8 rounded-3xl backdrop-blur-sm">
              <OrgChart />
            </div>
            <p className="md:hidden text-center text-[10px] text-slate-500 mt-4 uppercase tracking-widest">
              ↔ Swipe to explore structure
            </p>
          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}