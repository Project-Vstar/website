"use client";
  import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";
import FactionChooser from "./components/faction-chooser";

// ─── Talent nav button — same slide animation as SocialLinks.js ──────────────
const talentNavStyles = `
  .talent-nav-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px;
    border-radius: 8px;
    border: 1px solid color-mix(in srgb, var(--hover-color) 30%, transparent);
    color: #ffffff;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    overflow: hidden;
    background: color-mix(in srgb, var(--hover-color) 10%, transparent);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    cursor: pointer;
    min-width: 200px;
  }
  .talent-nav-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--hover-color);
    transform: translateX(-101%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }
  .talent-nav-btn:hover::before {
    transform: translateX(0);
  }
  .talent-nav-btn .btn-label {
    position: relative;
    z-index: 1;
    flex: 1;
    text-align: center;
  }
  .talent-nav-btn .chevron {
    margin-left: auto;
    font-size: 1.2rem;
    opacity: 0.5;
    transition: transform 0.2s ease, opacity 0.2s ease;
    position: relative;
    z-index: 1;
  }
  .talent-nav-btn:hover .chevron {
    transform: translateX(3px);
    opacity: 1;
  }
`;

function TalentNavButton({ href, label, hoverColor }) {
  return (
    <Link
      href={href}
      className="talent-nav-btn"
      style={{ "--hover-color": hoverColor }}
    >
      <span className="btn-label">{label}</span>
      <span className="chevron">›</span>
    </Link>
  );
}

// ─── Glass card (mirrors About card on talent pages) ─────────────────────────
function GlassCard({ accentColor, borderColor, children, className = "" }) {
  return (
    <div
      className={`backdrop-blur-sm rounded-2xl border ${className}`}
      style={{
        backgroundColor: accentColor,
        borderColor: borderColor,
      }}
    >
      {children}
    </div>
  );
}

// ─── InfoItem (mirrors DataItem from talent pages) ───────────────────────────
function InfoItem({ label, children, accentColor }) {
  return (
    <div className="pb-4 border-b border-white/10 mb-4 last:border-0 last:mb-0 last:pb-0">
      <h3 className="font-semibold mb-1" style={{ color: accentColor }}>
        {label}
      </h3>
      <div className="text-slate-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

// ─── X / Twitter icon ────────────────────────────────────────────────────────
const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ─── What We Do data ─────────────────────────────────────────────────────────
const services = [
  {
    icon: "▶",
    iconBg: "rgba(239,68,68,0.15)",
    iconColor: "#f87171",
    accentBg: "rgba(239,68,68,0.07)",
    accentBorder: "rgba(239,68,68,0.25)",
    title: "Live Streaming",
    items: [
      {
        label: "2D & 3D Streams",
        body: "On YouTube, Twitch, X and TikTok — gaming, singing, chatting, and collab streams.",
      },
      {
        label: "3D Live Concerts",
        body: "High-quality 3D characters in online live concerts and themed streams.",
      },
    ],
  },
  {
    icon: "⬡",
    iconBg: "rgba(34,211,238,0.15)",
    iconColor: "#22d3ee",
    accentBg: "rgba(34,211,238,0.07)",
    accentBorder: "rgba(34,211,238,0.25)",
    title: "Entertainment Technology",
    items: [
      {
        label: "Events & Conventions",
        body: "With close partners in the technology and communications industries, we bring cutting-edge entertainment technology to events and conventions.",
      },
    ],
  },
  {
    icon: "✦",
    iconBg: "rgba(168,85,247,0.15)",
    iconColor: "#c084fc",
    accentBg: "rgba(168,85,247,0.07)",
    accentBorder: "rgba(168,85,247,0.25)",
    title: "Other Media",
    items: [
      {
        label: "Stories & Manga",
        body: "Featuring VINFERNIA and VSTAR talents, secret announcements, and upcoming releases.",
      },
      {
        label: "Coming Soon",
        body: "Video games and an animated series are currently in development.",
      },
    ],
  },
];

// ─── Staff data ───────────────────────────────────────────────────────────────
const staff = [
  {
    img: "/company/dee-staff.png",
    alt: "Dee Ronny syn Łužycy",
    role: "CEO & Management Lead",
    name: "Dee Ronny syn Łužycy",
    accentColor: "#60a5fa",
  },
  {
    img: "/company/diino-staff.png",
    alt: "DreamyDiino",
    role: "Art Director",
    name: "DreamyDiino",
    accentColor: "#c084fc",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <style>{talentNavStyles}</style>
      <Header />
      <FactionChooser />

      <main className="flex-grow flex flex-col items-center text-white">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="w-full flex flex-col items-center justify-center pt-48 pb-24 px-6 text-center bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="flex items-center justify-center gap-12 mb-10">
            <img
              src="/VINFERNIA/VINFERNIA/Vinfernia_White.png"
              alt="VINFERNIA Logo"
              className="w-32 h-32 scale-125 object-contain drop-shadow-[0_0_24px_rgba(255,80,80,0.5)]"
            />
            <span className="text-slate-600 text-4xl font-thin">×</span>
            <img
              src="/VSTAR/VSTAR.png"
              alt="VSTAR Logo"
              className="w-32 h-32 object-contain drop-shadow-[0_0_24px_rgba(100,160,255,0.5)]"
            />
          </div>
          <h1 className="text-5xl font-bold tracking-wide mb-4">The Company</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            VINFERNIA and VSTAR are brands under the VTuber Company{" "}
            <span className="text-white font-semibold">VINFERNIA UG (Haftungsbeschränkt) & Co.KG</span>.
          </p>
        </section>

        {/* ── Organisation ─────────────────────────────────────────────────── */}
        <section className="w-full max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-10 tracking-wider">Organisation (replace)</h2>
          <img
            src="/Company/org_chart.png"
            alt="VINFERNIA UG Organisation Chart"
            className="w-full object-contain"
          />
        </section>

        {/* ── fade ─────────────────────────────────────────────────────────── */}
        <div className="w-full h-16 bg-gradient-to-b from-slate-900 to-slate-800/40 pointer-events-none" />

        {/* ── Staff ────────────────────────────────────────────────────────── */}
        <section className="w-full bg-slate-800/40 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-14 tracking-wider">Staff</h2>
            <div className="flex flex-wrap justify-center gap-16">
              {staff.map((member) => (
                <div key={member.name} className="flex flex-col items-center gap-4 w-44">
                  <div className="w-40 h-44 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={member.img}
                      alt={member.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: member.accentColor }}
                    >
                      {member.role}
                    </p>
                    <p className="text-lg font-bold">{member.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── fade ─────────────────────────────────────────────────────────── */}
        <div className="w-full h-16 bg-gradient-to-b from-slate-800/40 to-slate-900 pointer-events-none" />

        {/* ── Our Talents ──────────────────────────────────────────────────── */}
        <section className="w-full max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-wider">Our Talents</h2>
          <p className="text-slate-400 mb-10 text-lg">Meet the talents behind VINFERNIA and VSTAR.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <TalentNavButton
              href="/vinfernia"
              label="View VINFERNIA Talents"
              hoverColor="#ef4444"
            />
            <TalentNavButton
              href="/vstar"
              label="View VSTAR Talents"
              hoverColor="#3b82f6"
            />
          </div>
        </section>

        {/* ── fade ─────────────────────────────────────────────────────────── */}
        <div className="w-full h-16 bg-gradient-to-b from-slate-900 to-slate-950/80 pointer-events-none" />

        {/* ── What We Do ───────────────────────────────────────────────────── */}
        <section className="w-full bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-950 py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 tracking-wider">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((svc) => (
                <GlassCard
                  key={svc.title}
                  accentColor={svc.accentBg}
                  borderColor={svc.accentBorder}
                  className="p-8 flex flex-col gap-5"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: svc.iconBg, color: svc.iconColor }}
                  >
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: svc.iconColor }}>
                    {svc.title}
                  </h3>
                  <div className="flex-1">
                    {svc.items.map((item) => (
                      <InfoItem key={item.label} label={item.label} accentColor={svc.iconColor}>
                        {item.body}
                      </InfoItem>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── fade ─────────────────────────────────────────────────────────── */}
        <div className="w-full h-16 bg-gradient-to-b from-slate-950/80 to-slate-900 pointer-events-none" />

        {/* ── Official Channels — unchanged from original ───────────────────── */}
        <section className="w-full py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 tracking-wider">Official Channels</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://x.com/VInferniaVT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-400 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              <XIcon /> @VInferniaVT
            </a>
            <a
              href="https://x.com/VSVirtualStar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-400 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              <XIcon /> @VSVirtualStar
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-12 max-w-xl mx-auto">
            VINFERNIA and VSTAR – Virtual Star Entertainment are trademarks of{" "}
            <span className="text-slate-400">VSTAR- Virtual Star Entertainment Holding UG (haftungsbeschränkt)</span>.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}