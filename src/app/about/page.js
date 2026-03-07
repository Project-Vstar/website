"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import WipSection from "../components/wippage";
import OrgChart from "@/app/components/orgchart";

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.9s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }
  .fade-2 { animation-delay: 0.3s; }
`;

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{styles}</style>
      <Header />

      {/* ── Page Header ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 border-b border-white/5 pt-32 pb-20 px-6 text-center">
        <h1 className=" font-oswald text-5xl md:text-7xl font-bold uppercase leading-tight">About</h1>
      </section>

      {/* ── Organisation ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-3">Structure</p>
        <h2 className="font-oswald text-3xl font-bold uppercase mb-4">Organisation</h2>
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] pointer-events-none" />
          <div className="p-4 md:p-8 rounded-3xl backdrop-blur-sm overflow-x-auto">
            <OrgChart />
          </div>
        </div>
      </section>

      <WipSection />

      <Footer />
    </div>
  );
}