"use client";
import React, { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.9s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }
  .fade-2 { animation-delay: 0.3s; }
  .fade-3 { animation-delay: 0.5s; }

  .faq-card {
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.02);
    overflow: hidden;
    transition: border-color 0.25s ease;
    margin-bottom: 10px;
  }
  .faq-card.is-open {
    border-color: rgba(96,165,250,0.25);
  }
  .faq-btn {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 24px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
  }
  .faq-btn:focus-visible { outline: 2px solid #60a5fa; outline-offset: -2px; }
`;

const faqItems = [
  {
    question: "Can I send fan letters and presents to VINFERNIA / VSTAR talents?",
    answer: [
      { type: "text", content: "We are not accepting presents at the moment. For fan letters please send them to the following address." },
      { type: "address", content: "VINFERNIA UG (haftungsbeschränkt) & Co.KG\nPresent for: (talent name)\nBlaswitzer Straße 41\n01307 Dresden, Saxony\nGermany" },
      { type: "text", content: "Please make sure to include the name of the talent you're sending your letter to." },
      { type: "note", content: "* We cannot accept fan letters addressed to talents who have graduated or left the company." },
      {
        type: "section", heading: "Important Notes",
        items: [
          "Fan letters will be reviewed, and management reserves the right to withhold delivery if the content is deemed inappropriate.",
          "Letters containing personal information (address, phone number, email, etc.) cannot be delivered.",
          "Only the letter itself will be given to the talent. Envelopes will not be passed on. Please include only your real name, handle, or account name in the letter.",
          "We do not accept gifts. If any items are included, both the gift and the letter will be discarded.",
          "Any letters that violate these rules will be discarded at management's discretion.",
        ],
      },
      {
        type: "section", heading: "Frequently Asked Questions",
        items: [
          "Can I send gifts other than fan letters? — At this time, we only accept gifts after prior consultation. Items such as doujinshi, group messages, and albums can only be sent after prior consultation.",
          "Can I send or attach photographs? — Sorry, for privacy protection reasons, we cannot accept photographs.",
          "Are there limits on the length or number of pages? — No specific limits are set.",
          "Can I send letters from overseas? — International mail is accepted. However, we cannot guarantee shipping fees or delivery times.",
          "Can I send fan letters via email or digitally? — At this time, we only accept physical letters. Please use event digital message boards for electronic messages.",
          "Can I send letters for multiple talents in one package? — Yes, but please make sure to separate letters for each talent.",
          "Will I receive a reply? — Replies are not provided.",
          "Can I send fan letters via postcards or greeting cards? — Only letters placed in a mailing envelope are accepted. Please avoid including personal information directly on postcards or greeting cards.",
          "How are fan letters given to the talent? — Envelopes are removed, and only the letter itself is delivered to the talent.",
          "Can I have my letter delivered on a talent's birthday or for an event? — Delivery date requests cannot be accommodated, as all letters must first go through a review process.",
          "Can I include a social media URL? — Social media IDs or URLs may be included only if they do not contain personal information. Addresses and phone numbers are not allowed.",
        ],
      },
      {
        type: "section", heading: "Items Requiring Prior Inquiry",
        intro: "Please contact us before sending any of the following. If no inquiry is made beforehand, the items may be discarded.",
        items: [
          "Doujinshi (self-published and already distributed)",
          "10 or more autograph boards (shikishi)",
          "Drawings or illustrations",
          "Fan books",
        ],
      },
    ],
  },
  {
    question: "Where do I inquire about promotional sponsorships or media appearance offerings for VSTAR talents?",
    answer: [
      { type: "text", content: "For business inquiries regarding VINFERNIA / VSTAR and its affiliated VTubers, please get in touch via the link below." },
      { type: "link", label: "www.vstarproject.eu/partners", href: "https://www.vstarproject.eu/partners" },
    ],
  },
  {
    question: "Are there any guidelines to follow when creating derivative works with VINFERNIA / VSTAR's content?",
    answer: [
      { type: "text", content: "We're happy to support our fans in their creative activities. For derivative works based on VINFERNIA and VSTAR content, please read and follow our Derivative Works Guidelines." },
      { type: "link", label: "Derivative Works Guidelines →", href: "/derivative-works-guidelines" },
    ],
  },
  {
    question: "Are there any guidelines to follow when creating clips of VSTAR talents?",
    answer: [
      { type: "text", content: "The same guidelines apply to clips of VSTAR talents. Please read and follow our Derivative Works Guidelines." },
      { type: "link", label: "Derivative Works Guidelines →", href: "/derivative-works-guidelines" },
    ],
  },
  {
    question: "Are there any guidelines to follow for fan support advertisements?",
    answer: [
      { type: "text", content: "The same guidelines apply to fan-based advertisements. Please read and follow our Derivative Works Guidelines." },
      { type: "link", label: "Derivative Works Guidelines →", href: "/derivative-works-guidelines" },
    ],
  },
  {
    question: "Do you have any plans for concerts or events?",
    answer: [
      { type: "text", content: "Information about upcoming concerts and events will be posted to our official website's news section, press releases, and VINFERNIA / VSTAR official social media accounts." },
    ],
  },
  {
    question: "Merchandise Inquiries",
    answer: [
      { type: "text", content: "For merchandise inquiries, please contact us via the link below." },
      { type: "link", label: "VINFERNIA / VSTAR Official Shop — Inquiries", href: "#" },
    ],
  },
];

function AnswerBlock({ blocks }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "text":
            return <p key={i} style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{block.content}</p>;
          case "note":
            return <p key={i} style={{ color: "#64748b", fontSize: "0.8rem", fontStyle: "italic", lineHeight: 1.65, margin: 0 }}>{block.content}</p>;
          case "address":
            return (
              <pre key={i} style={{
                color: "#94a3b8", fontSize: "0.875rem", fontFamily: "inherit",
                lineHeight: 1.75, margin: 0, whiteSpace: "pre-wrap",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10, padding: "14px 18px",
              }}>
                {block.content}
              </pre>
            );
          case "link":
            return (
              <a key={i} href={block.href}
                style={{ display: "inline-block", color: "#60a5fa", fontSize: "0.88rem", textDecoration: "underline", textUnderlineOffset: 4, transition: "color 0.15s" }}
                onMouseEnter={e => e.target.style.color = "#93c5fd"}
                onMouseLeave={e => e.target.style.color = "#60a5fa"}
              >
                {block.label}
              </a>
            );
          case "section":
            return (
              <div key={i} style={{ marginTop: 8, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <p style={{
                  margin: "0 0 12px", fontSize: "0.7rem", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569",
                }}>
                  {block.heading}
                </p>
                {block.intro && (
                  <div style={{ marginBottom: 12 }}>
                    {block.intro.split("\n").map((line, li) => (
                      <p key={li} style={{ color: "#64748b", fontSize: "0.84rem", lineHeight: 1.65, margin: 0 }}>{line}</p>
                    ))}
                  </div>
                )}
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {block.items.map((item, ii) => (
                    <li key={ii} style={{ display: "flex", gap: 10, color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7 }}>
                      <span style={{ color: "#334155", flexShrink: 0, marginTop: 2 }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

function FaqCard({ item, index, isOpen, onToggle }) {
  return (
    <div className={`faq-card${isOpen ? " is-open" : ""}`}>
      <button className="faq-btn" onClick={onToggle}>
        {/* Number dot */}
        <span style={{
          width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: isOpen ? "rgba(96,165,250,0.1)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${isOpen ? "rgba(96,165,250,0.3)" : "rgba(255,255,255,0.1)"}`,
          fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em",
          color: isOpen ? "#60a5fa" : "#475569",
          transition: "all 0.2s",
          fontFamily: "'Oswald', sans-serif",
          marginTop: 1,
        }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <p style={{
          margin: 0, flex: 1,
          fontSize: "0.95rem", fontWeight: 600,
          color: isOpen ? "#e2e8f0" : "#94a3b8",
          lineHeight: 1.45,
          transition: "color 0.2s",
        }}>
          {item.question}
        </p>

        {/* +/× toggle */}
        <span style={{
          flexShrink: 0, marginTop: 2,
          fontSize: "1.2rem", lineHeight: 1,
          color: "#475569",
          transform: isOpen ? "rotate(45deg)" : "none",
          transition: "transform 0.2s",
          display: "inline-block",
        }}>+</span>
      </button>

      <div style={{
        overflow: "hidden",
        maxHeight: isOpen ? "2000px" : "0",
        opacity: isOpen ? 1 : 0,
        transition: "max-height 0.35s ease, opacity 0.25s ease",
      }}>
        <div style={{ padding: "4px 24px 24px 76px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ paddingTop: 16 }}>
            <AnswerBlock blocks={item.answer} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

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
          <span style={{ color: "#ffffff" }}>FAQ</span>
        </h1>
        <p className="fade-up fade-2 text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          Frequently asked questions about VINFERNIA, VSTAR, and how to get in touch.
        </p>
      </section>

      {/* ── FAQ List ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 pt-20 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqCard
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}