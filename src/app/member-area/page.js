"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import WipSection from "../components/wippage";

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.9s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }
`;

export default function MembersArea() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{styles}</style>
      <Header />

      {/* ── Page Header ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 border-b border-white/5 pt-32 pb-20 px-6 text-center">
        <h1
          className="fade-up fade-1 font-oswald font-bold uppercase leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)", color: "#ffffff" }}
        >
          Members&apos; Area
        </h1>
      </section>

      <WipSection />
      <Footer />
    </div>
  );
}