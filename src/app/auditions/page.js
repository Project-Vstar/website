"use client";
import React, { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";

const AUDITION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeV0m4pxQxpG7IaGCRBYmUxgU2zaNKMdCfOgVw5h6DeFYPMuQ/viewform?usp=header";

// ─── Utility components ───────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#3b82f6",
        margin: "0 0 12px",
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background: "rgba(255,255,255,0.07)",
      }}
    />
  );
}

function SupportBadge({ children }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        color: "#94a3b8",
        fontSize: "0.9rem",
        lineHeight: 1.55,
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        style={{ flexShrink: 0, marginTop: 2 }}
      >
        <path
          d="M3 8.5l3.5 3.5 6.5-7"
          stroke="#3b82f6"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </li>
  );
}

// ─── Round accordion ─────────────────────────────────────────────────────────

function RoundCard({ number, title, steps, note }) {
  const [open, setOpen] = useState(number === 1);

  return (
    <div
      style={{
        borderRadius: "6px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#111827",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "18px 24px",
          background: "none",
          border: "none",
          borderBottom: open ? "1px solid rgba(255,255,255,0.07)" : "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Round label */}
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: open ? "#3b82f6" : "#475569",
            flexShrink: 0,
            transition: "color 0.2s",
            minWidth: 60,
          }}
        >
          Round {number}
        </span>

        {/* Separator */}
        <div
          style={{
            width: "1px",
            height: "18px",
            background: "rgba(255,255,255,0.1)",
            flexShrink: 0,
          }}
        />

        {/* Title */}
        <p
          style={{
            margin: 0,
            flex: 1,
            fontSize: "0.95rem",
            fontWeight: 500,
            color: open ? "#e2e8f0" : "#64748b",
            transition: "color 0.2s",
          }}
        >
          {title}
        </p>

        {/* Chevron */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            color: "#475569",
          }}
        >
          <path
            d="M3.5 6L8 10.5L12.5 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div style={{ padding: "22px 24px" }}>
          <ol
            style={{
              margin: 0,
              paddingLeft: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {steps.map((step, i) =>
              typeof step === "string" ? (
                <li
                  key={i}
                  style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7 }}
                >
                  {step}
                </li>
              ) : (
                <li
                  key={i}
                  style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7 }}
                >
                  {step.main}
                  {step.sub && (
                    <ol
                      type="a"
                      style={{
                        marginTop: "10px",
                        paddingLeft: "1.25rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {step.sub.map((s, j) => (
                        <li
                          key={j}
                          style={{
                            color: "#64748b",
                            fontSize: "0.875rem",
                            lineHeight: 1.65,
                          }}
                        >
                          {s}
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              )
            )}
          </ol>

          {note && (
            <div
              style={{
                marginTop: "20px",
                padding: "13px 16px",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.02)",
                borderLeft: "3px solid #1d4ed8",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  fontSize: "0.84rem",
                  lineHeight: 1.65,
                }}
              >
                <strong style={{ color: "#3b82f6", fontWeight: 600, marginRight: 6 }}>
                  Note:
                </strong>
                {note}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AuditionsPage() {
  const rounds = [
    {
      number: 1,
      title: "Initial Submission & Review",
      steps: [
        "Submit your audition via our application form.",
        "Our committee reviews your submitted audition materials.",
        "Within the next 2 months an e-mail will be sent to your provided address confirming your rejection or acceptance.",
      ],
      note: "The committee only reviews your audition requirements. Any personal data — such as age, country of residence, or name — are not shared and are treated as strictly confidential.",
    },
    {
      number: 2,
      title: "NDA, Interview & Contract",
      steps: [
        "Your acceptance e-mail will contain a Non-Disclosure Agreement covering the audition process and its participants. Please read, sign, and return the document.",
        "After receipt and validation of your signed NDA, you will be invited to the staff Discord server. There you will be briefed on applicant conduct guidelines and schedule an interview with the Round 2 review committee.",
        {
          main: "On the appointed date your interview with the Round 2 committee takes place.",
          sub: [
            "This interview primarily serves to get a sense of you as a person and to determine who would work best alongside you — because what happens behind the scenes matters.",
            "VINFERNIA and VSTAR are brands built on personality. We need to find people who can collaborate effectively as a team.",
          ],
        },
        {
          main: "Within 2 weeks of the interview you will receive one of the following:",
          sub: [
            "An invitation to Round 3.",
            "A Stay of Audition — due to current company circumstances or existing group compositions, you may be accepted but your entry date delayed until the next generation can be built around you, or an intermediate generation can be formed.",
            "A rejection.",
          ],
        },
        "Upon acceptance you will receive a contract to sign. Once signed, you advance to Round 3.",
      ],
    },
    {
      number: 3,
      title: "Onboarding & Meet-and-Greet",
      steps: [
        "This round is primarily a formality and an opportunity to connect with the people you will work with.",
        {
          main: "It consists of three key meetings:",
          sub: [
            "A one-on-one with the CEO — to get to know each other and for you to share your goals and expectations for your time in VINFERNIA / VSTAR.",
            "A one-on-one with your personal manager — to get acquainted, set shared goals, and agree on working conditions.",
            "Group meetings with your future gen-mates and colleagues so you know who to turn to when you need support.",
          ],
        },
        "Based on your individual needs, various support programs will be offered — including health insurance, tax advisory, PMS support, mental health programs, regular check-ups, and work health & safety reviews.",
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        .apply-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: #2563eb;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          border-radius: 6px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.15s;
        }
        .apply-btn:hover {
          background: #1d4ed8;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "#0f172a",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <Header />

        <Hero
          title="Auditions"
          description="Join VINFERNIA and VSTAR — and let your passion as an entertainer shine brightly."
          dotPattern={{ size: 2, spacing: 25, color: "255, 255, 255", opacity: 0.1 }}
        />

        <main style={{ flex: 1 }}>

          {/* ── About ── */}
          <section style={{ maxWidth: 800, margin: "0 auto", padding: "64px 24px 56px" }}>
            <SectionLabel>About the Project</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(1.35rem,2.6vw,1.8rem)",
                fontWeight: 600,
                color: "#f1f5f9",
                margin: "0 0 16px",
                lineHeight: 1.35,
              }}
            >
              What are VINFERNIA and VSTAR?
            </h2>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.93rem",
                lineHeight: 1.8,
                margin: "0 0 32px",
              }}
            >
              VINFERNIA and VSTAR host auditions for new and exciting talents across a wide
              array of criteria and characteristics. Talents who pass the audition process
              are provided with a structured curriculum to support their debut, alongside
              comprehensive ongoing support.
            </p>

            {/* Support grid */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "6px",
                padding: "20px 24px",
              }}
            >
              <p
                style={{
                  margin: "0 0 14px",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#475569",
                }}
              >
                Included support
              </p>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "10px 32px",
                }}
              >
                {[
                  "Personal insurance & tax support",
                  "Mental health support (medically)",
                  "Physical health support programs",
                  "Gender-specific health support",
                  "Advertising & promotion",
                  "Project planning & execution",
                ].map((item) => (
                  <SupportBadge key={item}>{item}</SupportBadge>
                ))}
              </ul>
            </div>

            {/* Mission statement */}
            <blockquote
              style={{
                margin: "32px 0 0",
                padding: "16px 20px",
                borderLeft: "3px solid #1d4ed8",
                background: "rgba(255,255,255,0.02)",
                borderRadius: "0 4px 4px 0",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                Our goal is to create a worldwide community with a culture beloved the world
                over — and we are looking for those who want to join us in fulfilling that
                goal. We look forward to your application!
              </p>
              <footer
                style={{
                  marginTop: "8px",
                  fontSize: "0.76rem",
                  color: "#475569",
                  fontStyle: "normal",
                }}
              >
                — VINFERNIA &amp; VSTAR
              </footer>
            </blockquote>
          </section>

          <Divider />

          {/* ── Process ── */}
          <section style={{ maxWidth: 800, margin: "0 auto", padding: "56px 24px 72px" }}>
            <SectionLabel>The Process</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(1.35rem,2.6vw,1.8rem)",
                fontWeight: 600,
                color: "#f1f5f9",
                margin: "0 0 8px",
                lineHeight: 1.35,
              }}
            >
              What does the audition process look like?
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: "0.88rem",
                margin: "0 0 28px",
                lineHeight: 1.6,
              }}
            >
              Three rounds, each designed to ensure you and the team are the right fit for
              one another.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {rounds.map((r) => (
                <RoundCard key={r.number} {...r} />
              ))}
            </div>
          </section>

          <Divider />

          {/* ── CTA ── */}
          <section
            style={{
              maxWidth: 800,
              margin: "0 auto",
              padding: "64px 24px 88px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.35rem,2.8vw,1.9rem)",
                fontWeight: 600,
                color: "#f1f5f9",
                margin: "0 0 14px",
                lineHeight: 1.3,
              }}
            >
              May your determination and passion
              <br />
              as an entertainer shine brightly.
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                margin: "0 0 28px",
                maxWidth: 400,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Applications are reviewed on a rolling basis. Fill in the form and our
              committee will be in touch within 2 months.
            </p>
            <a
              href={AUDITION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="apply-btn"
            >
              Apply Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2 7h10M7.5 2.5l4.5 4.5-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}