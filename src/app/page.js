/* eslint-disable react/prop-types */
"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import OrgChart from "@/app/components/orgchart";
import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./components/SocialLinks";

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
      className="backdrop-blur-sm rounded-2xl border p-5 md:p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundColor: accentColor, borderColor: borderColor }}
    >
      {children}
    </div>
  );
}

// ── Staff card ────────────────────────────────────────────────────────────
function StaffCard({ member }) {
  return (
    <Link
      href={member.href}
      className="staff-card group flex flex-col items-center transition-transform duration-300 hover:-translate-y-1"
      style={{ "--glow": member.color }}
    >
      <div className="staff-card__frame w-36 h-40 md:w-44 md:h-48 rounded-2xl overflow-hidden mb-6 border border-white/20 transition-all duration-300">
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
  { img: "/Company/diino-staff.png", role: "Art Director", name: "DreamyDiino", color: "#C9A84C", href: "/talents/dreamydiino" }
];

const officialChannelLinks = [
  { platform: "VINFERNIA on X", url: "https://x.com/VInferniaVT" },
  { platform: "VSTAR on X", url: "https://x.com/VSVirtualStar" }
];

// ── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Header />

      <main className="flex-grow">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
          <HeroBackground />

          {/* Logo lockup */}
          <div className="hero-fade hero-fade-1 relative z-10 flex items-center justify-center gap-6 md:gap-10 mb-10">
            <Image
              src="/VINFERNIA/VINFERNIA/Vinfernia_White.png"
              alt="VINFERNIA"
              width={80}
              height={80}
              priority            // ← preloads as high-priority resource
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_24px_rgba(239,68,68,0.45)]"
            />
            <span className="text-slate-600 mx-3 md:mx-5 font-thin">X</span>
            <Image
              src="/VSTAR/VSTAR.png"
              alt="VSTAR"
              width={80}
              height={80}
              priority            // ← both above-fold logos get priority
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.45)]"
            />
          </div>

          {/* Wordmark */}
          <h1 className="hero-fade hero-fade-2 relative z-10 font-oswald font-bold uppercase tracking-tight leading-none mb-2"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}>
            <span style={{ color: "#60a5fa" }}>VSTAR</span>
            <span className="text-gray-300 mx-3 md:mx-5 font-thin">PROJECT</span>
          </h1>

          {/* Tagline */}
          <p className="hero-fade hero-fade-3 relative z-10 text-slate-400 text-base md:text-lg tracking-widest uppercase mb-10 font-light">
            Virtual Entertainment Agency
          </p>

          {/* CTAs */}
          <div className="hero-fade hero-fade-4 relative z-10 flex flex-wrap gap-4 justify-center">
            <AgencyButton href="/talents">Meet the Talents</AgencyButton>
            <AgencyButton href="#what-we-do">What We Do</AgencyButton>
          </div>

        </section>

        {/* ── What We Do ────────────────────────────────────────────────── */}
        <section id="what-we-do" className="bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5 pt-20 md:pt-32 pb-24 px-6">
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
          <AgencyButton href="/talents">Go to Talents</AgencyButton>
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
            <div className="flex flex-wrap justify-center gap-10 md:gap-24">
              {staff.map((member) => (
                <StaffCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Bridge */}
        <div className="w-full h-24 bg-gradient-to-b from-blue-950/30 to-slate-900" />

        {/* ── Official Channels ─────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center pb-40">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-3">Follow</p>
          <h2 className="font-oswald text-3xl font-bold uppercase mb-3">Official Channels</h2>
          <p className="text-slate-400 mb-10 text-sm">Follow us for announcements, streams, and updates.</p>
          <div className="flex justify-center">
            <SocialLinks links={officialChannelLinks} signatureColor="rgba(255,255,255,0.6)" />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}