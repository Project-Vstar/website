"use client";
import React, { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const AUDITION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeV0m4pxQxpG7IaGCRBYmUxgU2zaNKMdCfOgVw5h6DeFYPMuQ/viewform?usp=header";

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.9s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }
  .fade-2 { animation-delay: 0.3s; }
  .fade-3 { animation-delay: 0.5s; }

  .round-card {
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.02);
    overflow: hidden;
    transition: border-color 0.25s ease;
  }
  .round-card.is-open {
    border-color: rgba(96,165,250,0.25);
  }
  .round-btn {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 20px 24px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  .apply-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 36px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    color: #e2e8f0;
    font-size: 0.88rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-decoration: none;
    text-transform: uppercase;
    transition: border-color 0.2s, transform 0.2s, background 0.2s;
    position: relative;
    overflow: hidden;
  }
  .apply-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(96,165,250,0.1), rgba(192,132,252,0.06));
    opacity: 0;
    transition: opacity 0.2s;
  }
  .apply-btn:hover { border-color: rgba(96,165,250,0.4); transform: translateY(-2px); }
  .apply-btn:hover::before { opacity: 1; }
  .apply-btn span, .apply-btn svg { position: relative; z-index: 1; }

  .support-list {
    margin: 0; padding: 0; list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 10px 28px;
  }
  .support-item {
    display: flex; align-items: flex-start; gap: 10px;
    color: #94a3b8; font-size: 0.88rem; line-height: 1.55;
  }
`;

function SupportBadge({ children }) {
  return (
    <li className="support-item">
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
        <path d="M3 8.5l3.5 3.5 6.5-7" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </li>
  );
}

function RoundCard({ number, title, steps, note }) {
  const [open, setOpen] = useState(number === 1);

  return (
    <div className={`round-card${open ? " is-open" : ""}`}>
      <button className="round-btn" onClick={() => setOpen(v => !v)}>
        <span style={{
          width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: open ? "rgba(96,165,250,0.1)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${open ? "rgba(96,165,250,0.3)" : "rgba(255,255,255,0.1)"}`,
          fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.05em",
          color: open ? "#60a5fa" : "#475569",
          transition: "all 0.2s",
          fontFamily: "'Oswald', sans-serif",
        }}>
          {String(number).padStart(2, "0")}
        </span>

        <p style={{
          margin: 0, flex: 1,
          fontFamily: "'Oswald', sans-serif",
          fontSize: "0.95rem", fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.05em",
          color: open ? "#e2e8f0" : "#64748b",
          transition: "color 0.2s",
        }}>
          {title}
        </p>

        <svg width="15" height="15" viewBox="0 0 16 16" fill="none"
          style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "#475569" }}>
          <path d="M3.5 6L8 10.5L12.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div style={{ padding: "4px 24px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <ol style={{ margin: "16px 0 0", paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: 12 }}>
            {steps.map((step, i) =>
              typeof step === "string" ? (
                <li key={i} style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.75 }}>{step}</li>
              ) : (
                <li key={i} style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.75 }}>
                  {step.main}
                  {step.sub && (
                    <ol type="a" style={{ marginTop: 10, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: 7 }}>
                      {step.sub.map((s, j) => (
                        <li key={j} style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.65 }}>{s}</li>
                      ))}
                    </ol>
                  )}
                </li>
              )
            )}
          </ol>

          {note && (
            <div style={{
              marginTop: 18, padding: "12px 16px",
              borderRadius: 8, background: "rgba(96,165,250,0.04)",
              borderLeft: "3px solid rgba(96,165,250,0.35)",
            }}>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.84rem", lineHeight: 1.65 }}>
                <strong style={{ color: "#60a5fa", fontWeight: 600, marginRight: 6 }}>Note:</strong>
                {note}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const rounds = [
  {
    number: 1,
    title: "Initial Submission & Review",
    steps: [
      "Submit your audition via our form.",
      "Our committee reviews your audition materials.",
      "Within the next 2 months you'll receive an e-mail letting you know whether you've passed.",
    ],
    note: "The committee only reviews your audition materials. Personal data — age, country of residence, name — are never shared and are kept strictly confidential.",
  },
  {
    number: 2,
    title: "NDA, Interview & Contract",
    steps: [
      "Your acceptance e-mail will include a Non-Disclosure Agreement covering the audition process and its participants. Read it, sign it, and send it back.",
      "Once we've received and validated your NDA, you'll be invited to the staff Discord. There you'll be briefed on conduct guidelines for applicants and can schedule your interview with the Round 2 committee.",
      {
        main: "On the scheduled date, your interview with the Round 2 committee takes place.",
        sub: [
          "This is mostly a chance for us to get a sense of you as a person — and figure out who you'd work best alongside. What happens behind the scenes matters just as much as what happens on stream.",
          "VINFERNIA and VSTAR are built on personality. We want people who can genuinely work together.",
        ],
      },
      {
        main: "Within 2 weeks of the interview you'll hear back with one of the following:",
        sub: [
          "An invitation to Round 3.",
          "A Stay of Audition — you're accepted, but your start date is pushed back until the right generation can be built around you, or an intermediate gen can be formed.",
          "A rejection.",
        ],
      },
      "If accepted, you'll receive a contract to sign. Once that's done, you're in Round 3.",
    ],
  },
  {
    number: 3,
    title: "Onboarding & Meet-and-Greet",
    steps: [
      "This round is mostly a formality — it's about putting faces to names and getting comfortable with everyone.",
      {
        main: "It's made up of three parts:",
        sub: [
          "A one-on-one with the CEO to get to know each other, and a chance for you to share your goals and expectations for your time here.",
          "A one-on-one with your manager to set shared goals and agree on how you'll work together.",
          "Group meetings with your future gen-mates and colleagues, so you know who to go to when you need something.",
        ],
      },
      "From there, any support relevant to you — health insurance, tax advisors, PMS support, mental health programmes, regular check-ups, work health & safety reviews — will be arranged.",
    ],
  },
];

const supportItems = [
  "Personal insurance & tax support",
  "Mental health support (medically)",
  "Physical health support programs",
  "Gender-specific health support",
  "Advertising & promotion",
  "Project planning & execution",
];

export default function AuditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{styles}</style>
      <Header />

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 border-b border-white/5 pt-32 pb-20 px-6 text-center">
        <h1
          className="fade-up fade-1 font-oswald font-bold uppercase leading-none mb-5"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          <span style={{ color: "#ffffff" }}>Auditions</span>
        </h1>
        <p className="fade-up fade-2 text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          We're looking for people who want to entertain, create, and build something with us.
        </p>
      </section>

      <main className="flex-grow">

        {/* ── About ────────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-slate-950 to-slate-900 pt-24 pb-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-5">
              What are VINFERNIA and VSTAR?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              VINFERNIA and VSTAR host auditions for new and exciting talents across a wide array of criteria and characteristics.
              Those who pass will be given everything they need to debut and grow — a structured curriculum and ongoing support throughout their time with us.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
              Our goal is to build a worldwide community with a culture people genuinely love. We're looking for those who want to be a part of that.
            </p>

            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16,
              padding: "20px 24px 24px",
            }}>
              <p className="text-[10px] uppercase tracking-[0.12em] text-slate-600 mb-3">Support included</p>
              <ul className="support-list">
                {supportItems.map(item => <SupportBadge key={item}>{item}</SupportBadge>)}
              </ul>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-white/5" />

        {/* ── Process ──────────────────────────────────────────────────────── */}
        <section className="bg-slate-900 pt-24 pb-24 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-3">
              How does it work?
            </h2>
            <p className="text-slate-500 text-sm mb-10 leading-relaxed">
              Three rounds, each there to make sure you and the team are a good fit for each other.
            </p>
            <div className="flex flex-col gap-3">
              {rounds.map(r => <RoundCard key={r.number} {...r} />)}
            </div>
          </div>
        </section>

        {/* ── Sign-off + CTA ───────────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/5 pt-24 pb-28 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              We look forward to your application.
            </p>
            <p className="font-oswald text-2xl md:text-3xl font-bold uppercase text-white mb-10" style={{ letterSpacing: "0.04em" }}>
              May your determination and passion<br />
              <span style={{ color: "#60a5fa" }}>as an entertainer shine brightly.</span>
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-600 mb-8">— VINFERNIA &amp; VSTAR</p>
            <a href={AUDITION_FORM_URL} target="_blank" rel="noopener noreferrer" className="apply-btn">
              <span>Apply Now</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7.5 2.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}