"use client";
import React, { useEffect, useRef } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import OrgChart from "@/app/components/orgchart";
import Link from "next/link";
import { SocialLinks, socialLinkStyles } from "./components/SocialLinks";

// ── Hero background: animated slow gradient + faint grid ──────────────────
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Slow shifting gradient mesh */}
      <div className="hero-gradient absolute inset-0" />
      {/* Faint grid overlay */}
      <div className="hero-grid absolute inset-0 opacity-[0.04]" />
      {/* Red glow — VINFERNIA side */}
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-red-600/10 blur-[120px]" />
      {/* Blue glow — VSTAR side */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
    </div>
  );
}

// ── Internal link button — matches SocialLinks swoop style ───────────────
function AgencyButton({ href, children, swoopColor = "rgba(255,255,255,0.6)", textHoverColor = "#ffffff" }) {
  return (
    <Link
      href={href}
      className="social-link-btn"
      style={{ "--hover-color": swoopColor, "--text-hover-color": textHoverColor }}
    >
      <span style={{ position: "relative", zIndex: 1, flex: 1, textAlign: "center" }}>{children}</span>
      <span className="chevron" style={{ position: "relative", zIndex: 1 }}>›</span>
    </Link>
  );
}

// ── Glass service card ────────────────────────────────────────────────────
function GlassCard({ children, accentColor, borderColor }) {
  return (
    <div
      className="backdrop-blur-sm rounded-2xl border p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundColor: accentColor, borderColor: borderColor }}
    >
      {children}
    </div>
  );
}

// ── Staff card ────────────────────────────────────────────────────────────
function StaffCard({ member }) {
  return (
    <Link href={member.href} className="staff-card group flex flex-col items-center" style={{ "--glow": member.color }}>
      <div className="staff-card__frame w-44 h-48 rounded-2xl overflow-hidden mb-6 border border-white/20 transition-all duration-300 group-hover:-translate-y-3">
        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <p className="font-oswald text-[10px] font-bold uppercase tracking-widest mb-1 transition-colors duration-200" style={{ color: member.color }}>{member.role}</p>
      <p className="text-lg font-bold tracking-wide">{member.name}</p>
    </Link>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────
const services = [
  {
    title: "Live Streaming",
    color: "#f87171",
    bg: "rgba(239, 68, 68, 0.05)",
    border: "rgba(239, 68, 68, 0.2)",
    items: [
      { label: "2D & 3D Streams", body: "Gaming, singing, chatting, collabs — catch our talents live on YouTube, Twitch, X, and TikTok." },
      { label: "3D Live Events", body: "Full online concerts and themed live shows powered by high-quality 3D characters." }
    ]
  },
  {
    title: "Entertainment Technology",
    color: "#22d3ee",
    bg: "rgba(34, 211, 238, 0.05)",
    border: "rgba(34, 211, 238, 0.2)",
    items: [
      { label: "Events & Conventions", body: "We team up with partners in tech and communications to bring cutting-edge entertainment experiences to anime and gaming conventions worldwide." }
    ]
  },
  {
    title: "Other Media",
    color: "#c084fc",
    bg: "rgba(168, 85, 247, 0.05)",
    border: "rgba(168, 85, 247, 0.2)",
    items: [
      { label: "Stories & Manga", body: "Original stories and manga featuring VINFERNIA and VSTAR talents — plus the occasional secret announcement you won't want to miss." },
      { label: "What's Coming", body: "We're working on a lot more — from video games to an animated series set in the world of VINFERNIA and VSTAR." }
    ]
  }
];

const staff = [
  { img: "/Company/dee-staff.png", role: "CEO & Management Lead", name: "Dee Ronny", color: "#60a5fa", href: "/talents/dee" },
  { img: "/Company/diino-staff.png", role: "Art Director", name: "DreamyDiino", color: "#c084fc", href: "/talents/dreamydiino" }
];

const officialChannelLinks = [
  { platform: "VINFERNIA on X", url: "https://x.com/VInferniaVT" },
  { platform: "VSTAR on X", url: "https://x.com/VSVirtualStar" }
];

// ── Styles ────────────────────────────────────────────────────────────────
const globalStyles = `
  /* Hero background */
  @keyframes gradientDrift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .hero-gradient {
    background: linear-gradient(
      135deg,
      #0a0e1a 0%,
      #0d1525 25%,
      #120a14 50%,
      #0a0e1a 75%,
      #0d1525 100%
    );
    background-size: 400% 400%;
    animation: gradientDrift 18s ease infinite;
  }
  .hero-grid {
    background-image:
      linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* Divider line with glow */
  .hero-divider {
    width: 1px;
    height: 56px;
    background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent);
  }

  /* Staff card glow */
  .staff-card__frame {
    box-shadow: 0 0 0px transparent;
    transition: box-shadow 0.35s ease, transform 0.3s ease;
  }
  .staff-card:hover .staff-card__frame {
    box-shadow: 0 8px 40px color-mix(in srgb, var(--glow) 35%, transparent),
                0 0 0 1px color-mix(in srgb, var(--glow) 25%, transparent);
  }

  /* Hero fade-in */
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-fade { opacity: 0; animation: heroFadeUp 0.9s ease forwards; }
  .hero-fade-1 { animation-delay: 0.1s; }
  .hero-fade-2 { animation-delay: 0.3s; }
  .hero-fade-3 { animation-delay: 0.5s; }
  .hero-fade-4 { animation-delay: 0.7s; }
`;

// ── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{globalStyles}{socialLinkStyles}</style>
      <Header />

      <main className="flex-grow">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
          <HeroBackground />

          {/* Logo lockup */}
          <div className="hero-fade hero-fade-1 relative z-10 flex items-center justify-center gap-6 md:gap-10 mb-10">
            <img
              src="/VINFERNIA/VINFERNIA/Vinfernia_White.png"
              alt="VINFERNIA"
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_24px_rgba(239,68,68,0.45)]"
            />
            <span className="text-slate-600 mx-3 md:mx-5 font-thin">X</span>
            <img
              src="/VSTAR/VSTAR.png"
              alt="VSTAR"
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.45)]"
            />
          </div>

          {/* Wordmark */}
          <h1 className="hero-fade hero-fade-2 relative z-10 font-oswald font-bold uppercase tracking-tight leading-none mb-2"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}>
            <span style={{ color: "#60a5fa" }}>VSTAR</span>
            <span className="text-slate-600 mx-3 md:mx-5 font-thin">PROJECT</span>
          </h1>

          {/* Tagline */}
          <p className="hero-fade hero-fade-3 relative z-10 text-slate-400 text-base md:text-lg tracking-widest uppercase mb-10 font-light">
            Virtual Entertainment Agency
          </p>

          {/* CTAs */}
          <div className="hero-fade hero-fade-4 relative z-10 flex flex-wrap gap-4 justify-center">
            <AgencyButton href="/vinfernia">Meet the Talents</AgencyButton>
            <AgencyButton href="#what-we-do">What We Do</AgencyButton>
          </div>

          {/* Scroll hint */}
          <div className="hero-fade hero-fade-4 absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-30">
          </div>
        </section>

        {/* ── What We Do ────────────────────────────────────────────────── */}
        <section id="what-we-do" className="bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5 pt-32 pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-3">Services</p>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase leading-tight">What We Do</h2>
            </div>
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

        {/* ── Talents ───────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-3">Roster</p>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4">Our Talents</h2>
          <p className="text-slate-400 mb-10 text-sm max-w-md mx-auto">Meet the personalities behind our flagship divisions.</p>
          <AgencyButton href="/vinfernia">Go to Talents</AgencyButton>
        </section>

        {/* ── The Company ───────────────────────────────────────────────── */}
        <section className="py-24 px-6 text-center bg-slate-900">
          <div className="flex items-center justify-center gap-8 md:gap-12 mb-10">
            <img src="/VINFERNIA/VINFERNIA/Vinfernia_White.png" alt="VINFERNIA Logo" className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(239,68,68,0.35)]" />
            <span className="text-slate-700 text-4xl font-thin">×</span>
            <img src="/VSTAR/VSTAR.png" alt="VSTAR Logo" className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]" />
          </div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-3">About</p>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-5">The Company</h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            VINFERNIA and VSTAR are brands under
            <span className="text-white font-semibold"> VINFERNIA UG (Haftungsbeschränkt) & Co.KG</span>.
          </p>
        </section>

        {/* Bridge */}
        <div className="w-full h-24 bg-gradient-to-b from-slate-900 to-blue-950/30" />

        {/* ── Staff ─────────────────────────────────────────────────────── */}
        <section className="bg-blue-950/30 border-t border-blue-900/20 py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-3">Team</p>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Staff</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-16 md:gap-24">
              {staff.map((member) => (
                <StaffCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Bridge */}
        <div className="w-full h-24 bg-gradient-to-b from-blue-950/30 to-slate-900" />

        {/* ── Official Channels ─────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-3">Follow</p>
          <h2 className="font-oswald text-3xl font-bold uppercase mb-3">Official Channels</h2>
          <p className="text-slate-400 mb-10 text-sm">Follow us for announcements, streams, and updates.</p>
          <div className="flex justify-center">
            <SocialLinks links={officialChannelLinks} signatureColor="rgba(255,255,255,0.6)" />
          </div>
        </section>

        {/* ── Organisation ──────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-3">Structure</p>
          <h2 className="font-oswald text-3xl font-bold uppercase mb-4">Organisation</h2>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] pointer-events-none" />
            <div className="p-8 rounded-3xl backdrop-blur-sm">
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