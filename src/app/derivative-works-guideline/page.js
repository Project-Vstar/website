"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.9s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }

  .guidelines-content h3 {
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
  .guidelines-content h3:first-child { margin-top: 0; }
  .guidelines-content h4 {
    font-size: 0.75rem;
    font-weight: 700;
    color: #475569;
    margin: 1.5rem 0 0.4rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .guidelines-content p {
    color: #94a3b8;
    font-size: 0.9rem;
    line-height: 1.8;
    margin: 0 0 0.5rem;
  }
  .guidelines-content ul, .guidelines-content ol {
    margin: 0 0 0.75rem;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .guidelines-content li {
    color: #94a3b8;
    font-size: 0.9rem;
    line-height: 1.75;
  }
`;

const content = `
### Derivative Works Guidelines

#### Introduction

VINFERNIA UG (haftungsbeschränkt) & Co.KG (hereinafter to be referred to as "We", "Us", or "Our" as the case may be) has established these guidelines (hereinafter to be referred to as "overall guidelines") for the creation and use of derivative works so that fans may have the peace of mind to be able to enjoy our content in as many different forms as possible.

When creating derivative works that comply with these overall guidelines, there is no need to contact us for permission.

For derivative works that do not fall under any specified categories, please refer to the overall guidelines. For works based on our music content and/or clips, please also refer to the separate category guidelines.

#### Definition of Derivative Works

We consider derivative works to be creations born of fans' ideas and creativity, based on content created by us.
We will not exercise our rights in regards to works that we deem to be derivative works, as long as they comply with these overall guidelines.

Please note that we may use any derivative works you create as stream thumbnails, on social media, etc.

* We do not consider the use of our content as is, or with modifications lacking creative input, to be classified as derivative works. Such use does not fall within the scope of these guidelines.

#### Our Requests

Please comply with the following guidelines regarding derivative works.

- Please be mindful of our talents, and refrain from creating derivative works that they may find unpleasant.
- Please limit your creation of derivative works to a fan or hobby level. Do not use our content for business purposes (including, but not limited to, cases where a business bears the production costs, etc., even if it is under the name of an individual), or for purposes that can be deemed as for-profit.
- Please comply with all applicable laws and regulations, including the terms and rules of any relevant platforms.
- Please refrain from creating derivative works that fall under the following categories:
    - Content that is falsely represented as official, or can be misinterpreted or mistaken as official
    - Content that is contradictory to public order and morality, or exceeds what is socially acceptable
    - Content that includes matters pertaining to any particular ideology, belief, religion, or politics
    - Content that damages our image, or that of our talents or our content
    - Content that damages a third party's image, or violates their rights
    - Other content that we deem unsuitable

#### Additional Notes

We do not relinquish our copyright or related rights through these overall guidelines. We maintain these rights.

We make no guarantees in regards to the use of our content or related derivative works, including any actions that may violate a third party's rights.

We shall not be responsible if the use, performance, or submission of our content, or a related derivative work, results in a dispute with a third party.

These overall guidelines are subject to change without notice. Please ensure that you follow the latest version of these guidelines at all times.
`;

export default function DerivativeWorksGuidelinesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{styles}</style>
      <Header />

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 border-b border-white/5 pt-32 pb-20 px-6 text-center">
        <h1
          className="fade-up fade-1 font-oswald font-bold uppercase leading-none"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)", color: "#ffffff" }}
        >
          Derivative Works Guidelines
        </h1>
      </section>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 pt-20 pb-32 px-6">
        <div className="max-w-3xl mx-auto guidelines-content">
          {content.split("\n").map((line, i) => {
            if (line.startsWith("### "))  return <h3 key={i}>{line.replace("### ", "")}</h3>;
            if (line.startsWith("#### ")) return <h4 key={i}>{line.replace("#### ", "")}</h4>;
            if (line.trim() === "")       return <br key={i} />;
            return <p key={i}>{line}</p>;
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}