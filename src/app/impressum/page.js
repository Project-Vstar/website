"use client";
import React, { useState } from "react";
import { marked } from "marked";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

marked.setOptions({ breaks: true });

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.9s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }

  .lang-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.03);
    color: #94a3b8;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, color 0.2s;
    text-align: left;
  }
  .lang-btn:hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.15);
    color: #e2e8f0;
  }
  .lang-btn.active {
    background: rgba(96,165,250,0.1);
    border-color: rgba(96,165,250,0.3);
    color: #60a5fa;
  }

  .lang-popup {
    position: absolute;
    left: calc(100% + 12px);
    top: 50%;
    transform: translateY(-50%);
    background: #0f172a;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    padding: 10px;
    min-width: 160px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 60;
  }
  .lang-popup::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 7px solid transparent;
    border-right-color: rgba(255,255,255,0.08);
  }
  .lang-popup::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 7px solid transparent;
    border-right-color: #0f172a;
  }

  .impressum-content h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #e2e8f0;
    margin: 2.5rem 0 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .impressum-content h3:first-child { margin-top: 0; }
  .impressum-content h4 {
    font-size: 0.75rem;
    font-weight: 700;
    color: #475569;
    margin: 1.5rem 0 0.4rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .impressum-content p {
    color: #94a3b8;
    font-size: 0.9rem;
    line-height: 1.8;
    margin: 0 0 0.25rem;
  }
  .impressum-content strong {
    color: #cbd5e1;
    font-weight: 600;
  }
  .impressum-content a {
    color: #60a5fa;
    text-underline-offset: 3px;
  }
  .impressum-content a:hover { color: #93c5fd; }
`;

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

const translations = {
  en: {
    content: `
### Imprint

VINFERNIA UG (haftungsbeschränkt) & Co.KG
Blasewitzer Straße 41
01307 Dresden
Germany

#### Contact details
Email address: VINFERNIA(at)gmail.com

#### Authorized representatives
Sandro Pausin

#### Audiovisual media services as of § 5 Abs. 1 Nr. 8 DDG
Located in: Germany

#### Competent regulatory or supervisory authority
Sächsische Landesmedienanstalt https://www.slm-online.de/

#### Company information
VAT identification number (VAT ID): DE456458163

#### Register and registration number
Handelsregister: Amtsgericht Dresden
Handelsregisternummer: HRA 12303

#### Disclaimer and property rights information
**Links to external websites:** The content of external websites to which we directly or indirectly refer, including those of our artists ("Talents"), is outside our area of responsibility and is not assumed by us. We accept no responsibility for any content or disadvantages arising from the use of the information provided on the linked websites.

**Notifications of legal violations:** If you become aware of any legal violations on our website, please notify us. We will remove any illegal content and links immediately upon becoming aware of them.
`,
  },
  de: {
    content: `
### Impressum

VINFERNIA UG (haftungsbeschränkt) & Co.KG
Blasewitzer Straße 41
01307 Dresden
Germany

#### Kontakt
Email: VINFERNIA(at)gmail.com

#### Berechtigte Vertreter
Sandro Pausin

#### Audiovisuelle Mediendienste gem. § 5 Abs. 1 Nr. 8 DDG
Sitzland: Deutschland

#### Zuständige Regulierungs-, bzw. Aufsichtsbehörde
Sächsische Landesmedienanstalt https://www.slm-online.de/

#### Angaben zum Unternehmen
Umsatzsteueridentifikationsnummer (Ust-ID): DE456458163

#### Register und Registernummer
Handelsregister: Amtsgericht Dresden
Handelsregisternummer: HRA 12303

#### Haftungsausschluss und Schutzrechtshinweise
**Verlinkungen zu externen Webseiten:** Die Inhalte externer Webseiten, auf die wir direkt oder indirekt verweisen, v.a. die unserer Künstlerinnen und Künstler ("Talents"), liegen außerhalb unseres Verantwortungsbereiches und werden von uns nicht übernommen. Wir übernehmen keine Verantwortung für jegliche Inhalte oder Nachteile, die aus der Nutzung der auf den verlinkten Webseiten bereitgestellten Informationen entstehen.

**Hinweise auf Rechtsverstöße:** Sollten Sie auf Rechtsverstöße innerhalb unseres Internetauftritts aufmerksam werden, bitten wir Sie, uns dies mitzuteilen. Wir werden rechtswidrige Inhalte und Links nach Bekanntwerden umgehend entfernen.
`,
  },
};

export default function ImpressumPage() {
  const [language, setLanguage] = useState("en");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const currentTranslation = translations[language];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{styles}</style>
      <Header />

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 border-b border-white/5 pt-32 pb-20 px-6 text-center">
        <h1
          className="fade-up fade-1 font-oswald font-bold uppercase leading-none"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", color: "#ffffff" }}
        >
          Impressum
        </h1>
      </section>

      {/* ── Language toggle ───────────────────────────────────────────────── */}
      <div style={{ position: "fixed", left: 16, top: "50%", transform: "translateY(-50%)", zIndex: 50 }}>
        <button
          onClick={() => setIsPopupOpen(v => !v)}
          aria-label="Toggle language"
          style={{
            width: 40, height: 40, borderRadius: "50%",
            background: isPopupOpen ? "rgba(96,165,250,0.1)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${isPopupOpen ? "rgba(96,165,250,0.3)" : "rgba(255,255,255,0.1)"}`,
            color: isPopupOpen ? "#60a5fa" : "#64748b",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "all 0.2s",
          }}
          onMouseEnter={e => { if (!isPopupOpen) { e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)"; e.currentTarget.style.color = "#60a5fa"; }}}
          onMouseLeave={e => { if (!isPopupOpen) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#64748b"; }}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        </button>

        {isPopupOpen && (
          <div className="lang-popup">
            {languages.map(lang => (
              <button
                key={lang.code}
                className={`lang-btn${language === lang.code ? " active" : ""}`}
                onClick={() => { setLanguage(lang.code); setIsPopupOpen(false); }}
              >
                <span style={{ fontSize: "1rem" }}>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {isPopupOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 40 }} onClick={() => setIsPopupOpen(false)} />
      )}

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 pt-20 pb-32 px-6">
        <div
          className="max-w-3xl mx-auto impressum-content"
          dangerouslySetInnerHTML={{ __html: marked(currentTranslation.content) }}
        />
      </section>

      <Footer />
    </div>
  );
}