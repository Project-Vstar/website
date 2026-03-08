/* eslint-disable react/prop-types */
"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import talentData from "@/app/talents/data.json";
import articlesData from "@/app/articles/data.json";

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.7s ease forwards; }
  .fade-1 { animation-delay: 0.05s; }
  .fade-2 { animation-delay: 0.2s; }
  .fade-3 { animation-delay: 0.35s; }
  .fade-4 { animation-delay: 0.5s; }

  .back-article-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.15);
    color: #ffffff;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    overflow: hidden;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(4px);
    cursor: pointer;
    transition: border-color 0.2s ease;
  }
  .back-article-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(255,255,255,0.1);
    transform: translateX(101%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }
  .back-article-btn:hover::before { transform: translateX(0); }
  .back-article-btn:hover { border-color: rgba(255,255,255,0.3); }
  .back-article-btn .chevron {
    font-size: 1.2rem;
    opacity: 0.5;
    transition: transform 0.2s ease, opacity 0.2s ease;
    position: relative;
    z-index: 1;
  }
  .back-article-btn:hover .chevron { transform: translateX(-3px); opacity: 1; }
  .back-article-btn .btn-label { position: relative; z-index: 1; }

  /* Markdown content styles */
  .article-body h1, .article-body h2, .article-body h3,
  .article-body h4, .article-body h5, .article-body h6 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #ffffff;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    line-height: 1.2;
  }
  .article-body h1 { font-size: 1.75rem; }
  .article-body h2 { font-size: 1.4rem; }
  .article-body h3 { font-size: 1.15rem; }
  .article-body p { margin-bottom: 1rem; }
  .article-body strong { color: #e2e8f0; }
  .article-body em { color: #cbd5e1; font-style: italic; }
  .article-body a { color: #93c5fd; text-decoration: underline; text-underline-offset: 3px; }
  .article-body a:hover { color: #bfdbfe; }
  .article-body ul, .article-body ol { padding-left: 1.5rem; margin-bottom: 1rem; }
  .article-body li { margin-bottom: 0.35rem; }
  .article-body ul li { list-style-type: disc; }
  .article-body ol li { list-style-type: decimal; }
  .article-body blockquote {
    border-left: 3px solid rgba(255,255,255,0.2);
    padding-left: 1rem;
    margin: 1.25rem 0;
    color: #94a3b8;
    font-style: italic;
  }
  .article-body hr {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.1);
    margin: 2rem 0;
  }
  .article-body code {
    background: rgba(255,255,255,0.07);
    padding: 0.15em 0.4em;
    border-radius: 4px;
    font-size: 0.875em;
    color: #e2e8f0;
  }

  /* Comment placeholder shimmer */
  .comment-skeleton {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px;
    padding: 14px 16px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
`;

// ─── Gen tag (read-only) ─────────────────────────────────────────────────────
const groupStyles = {
  blue:   { tagBg: "rgba(96,165,250,0.15)",  tagColor: "#93c5fd" },
  red:    { tagBg: "rgba(248,113,113,0.15)", tagColor: "#fca5a5" },
  "static-white": { tagBg: "rgba(255,255,255,0.1)", tagColor: "#e2e8f0" },
  slate:  { tagBg: "rgba(148,163,184,0.15)", tagColor: "#cbd5e1" },
};

function GenTag({ generation, subgroup, generations }) {
  const genObj = generations.find((g) => g.id === generation);
  if (!genObj || genObj.id === "all") return null;

  if (subgroup && genObj.subgroups) {
    const subObj = genObj.subgroups.find((s) => s.id === subgroup);
    if (subObj) {
      const s = groupStyles[subObj.glowStyle] || groupStyles["static-white"];
      return (
        <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{ background: s.tagBg, color: s.tagColor, border: `1px solid ${s.tagColor}40` }}>
          {subObj.label}
        </span>
      );
    }
  }

  const s = groupStyles[genObj.glowStyle] || groupStyles["static-white"];
  return (
    <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full"
      style={{ background: s.tagBg, color: s.tagColor, border: `1px solid ${s.tagColor}40` }}>
      {genObj.label}
    </span>
  );
}

// ─── Markdown renderer ───────────────────────────────────────────────────────
function ArticleBody({ content }) {
  return (
    <div className="article-body text-slate-300 text-base leading-relaxed">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

// ─── Comment placeholder cards ───────────────────────────────────────────────
function CommentsPlaceholder() {
  return (
    <section className="mt-12 pt-8 border-t border-white/10">
      <p className="font-oswald uppercase tracking-widest text-slate-500 text-xs mb-5">Comments</p>
      <div className="flex flex-col gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="comment-skeleton">
            <img
              src="/placeholder.png"
              alt=""
              aria-hidden="true"
              className="w-8 h-8 rounded-full object-cover shrink-0 opacity-30"
            />
            <div className="flex flex-col gap-2 flex-1 pt-0.5">
              <div className="h-2.5 rounded bg-white/10" style={{ width: "6rem" }} />
              <div className="h-2 rounded bg-white/5" style={{ width: `${60 + i * 12}%` }} />
              <p className="text-slate-700 text-[10px] tracking-widest uppercase mt-0.5">Coming Soon</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Not found ───────────────────────────────────────────────────────────────
function ArticleNotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-oswald uppercase tracking-widest text-slate-500 text-sm mb-6">Article not found</p>
        <Link href="/articles" className="back-article-btn">
          <span className="chevron">‹</span>
          <span className="btn-label">Back to Articles</span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ArticlePage() {
  const { slug } = useParams();
  const { generations } = talentData;
  const { articles } = articlesData;

  const article = articles.find((a) => a.slug === slug);

  if (!article) return <ArticleNotFound />;

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{styles}</style>
      <Header />

      <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">

        {/* Thumbnail */}
        <div className="fade-up fade-1 w-full aspect-video rounded-2xl overflow-hidden mb-8">
          <img
            src={article.thumbnail || "/placeholder.png"}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta row */}
        <div className="fade-up fade-2 flex items-center gap-2 mb-3 flex-wrap">
          <GenTag generation={article.generation} subgroup={article.subgroup} generations={generations} />
          <span className="text-slate-600 text-[10px] tracking-widest uppercase">{formattedDate}</span>
        </div>

        {/* Title */}
        <h1
          className="fade-up fade-2 font-oswald font-bold uppercase tracking-tight text-white leading-tight mb-1"
          style={{ fontSize: "clamp(1.8rem, 5vw, 2.75rem)" }}
        >
          {article.title}
        </h1>
        <p className="fade-up fade-2 text-slate-500 text-sm mb-8">by {article.author}</p>

        <div className="fade-up fade-3 border-t border-white/10 pt-8">

          {/* Main body */}
          <ArticleBody content={article.content.mainText} />

          {/* Secondary image (optional) */}
          {article.content.secondaryImage && (
            <div className="w-full aspect-video rounded-xl overflow-hidden my-8">
              <img
                src={article.content.secondaryImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Secondary text (optional) */}
          {article.content.secondaryText && (
            <div className="mt-2">
              <ArticleBody content={article.content.secondaryText} />
            </div>
          )}

          {/* Comments placeholder */}
          <CommentsPlaceholder />
        </div>

        {/* Back button */}
        <div className="fade-up fade-4 mt-12 pt-8 border-t border-white/10">
          <Link href="/articles" className="back-article-btn">
            <span className="chevron">‹</span>
            <span className="btn-label">Back to Articles</span>
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
