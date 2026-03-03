"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";
import FactionChooser from "./components/faction-chooser";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />
      <FactionChooser />

      <main className="flex-grow flex flex-col items-center text-white">

        <section className="w-full flex flex-col items-center justify-center pt-48 pb-24 px-6 text-center bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="flex items-center justify-center gap-12 mb-10">
            <img
              src="VINFERNIA\VINFERNIA\Vinfernia_White.png"
              alt="VINFERNIA Logo"
              className="w-32 h-32 scale-125 object-contain drop-shadow-[0_0_24px_rgba(255,80,80,0.5)]"
            />
            <span className="text-slate-600 text-4xl font-thin">×</span>
            <img
              src="/VSTAR/VSTAR.png"
              alt="VSTAR Logo"
              className="w-32 h-32 scale-120 object-contain drop-shadow-[0_0_24px_rgba(100,160,255,0.5)]"
            />
          </div>
          <h1 className="text-5xl font-bold tracking-wide mb-4">The Company</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            VINFERNIA and VSTAR are brands under the VTuber Company{" "}
            <span className="text-white font-semibold">VINFERNIA UG (Haftungsbeschränkt) & Co.KG</span>.
          </p>
        </section>

        <section className="w-full max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-10 tracking-wider">Organisation</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <img
              src="/company/org-chart.png"
              alt="VINFERNIA UG Organisation Chart"
              className="w-full object-contain"
            />
          </div>
        </section>

        <section className="w-full bg-slate-800/40 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-14 tracking-wider">Staff</h2>
            <div className="flex flex-wrap justify-center gap-16">
              <div className="flex flex-col items-center gap-4 w-44">
                <div className="w-40 h-44 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/company/staff-dee.png"
                    alt="Dee Ronny syn Łužycy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">
                    CEO &amp; Management Lead
                  </p>
                  <p className="text-lg font-bold">Dee Ronny syn Łužycy</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 w-44">
                <div className="w-40 h-44 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/company/staff-diino.png"
                    alt="DreamyDiino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-1">
                    Art Director
                  </p>
                  <p className="text-lg font-bold">DreamyDiino</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-wider">Our Talents</h2>
          <p className="text-slate-400 mb-8 text-lg">Meet the talents behind VINFERNIA and VSTAR.</p>
          <Link
            href="/vinfernia"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            View All Talents →
          </Link>
        </section>

        <section className="w-full bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 tracking-wider">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 flex flex-col gap-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-red-400 text-xl">▶</span>
                </div>
                <h3 className="text-xl font-bold">Live Streaming</h3>
                <ul className="text-slate-300 text-sm leading-relaxed space-y-3">
                  <li>
                    <span className="text-white font-semibold">2D &amp; 3D Streams</span> on YouTube, Twitch, X and TikTok — gaming, singing, chatting, and collab streams.
                  </li>
                  <li>
                    <span className="text-white font-semibold">3D Live Concerts</span> — high-quality 3D characters in online live concerts and themed streams.
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 flex flex-col gap-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">⬡</span>
                </div>
                <h3 className="text-xl font-bold">Entertainment Technology</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  With close partners in the technology and communications industries, we bring cutting-edge entertainment technology to events and conventions.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 flex flex-col gap-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-purple-400 text-xl">✦</span>
                </div>
                <h3 className="text-xl font-bold">Other Media</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Stories and manga featuring VINFERNIA and VSTAR talents, secret announcements, and upcoming releases — including video games and an animated series.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 tracking-wider">Official Channels</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://x.com/VInferniaVT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-400 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @VInferniaVT
            </a>

            <a
              href="https://x.com/VSVirtualStar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-400 text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @VSVirtualStar
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