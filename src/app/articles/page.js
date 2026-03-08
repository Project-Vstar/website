/* eslint-disable react/prop-types */
"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import talentData from "@/app/talents/data.json";
import articlesData from "./data.json";

const ARTICLES_PER_PAGE = 6;

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.7s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }
  .fade-2 { animation-delay: 0.25s; }
  .fade-3 { animation-delay: 0.4s; }

  @keyframes cardEnter {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .article-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .article-card:hover {
    transform: scale(1.015);
    box-shadow: 0 0 24px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.4);
  }

  .excerpt-fade {
    -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  }

  .sort-btn {
    position: relative;
    overflow: hidden;
    transition: color 0.2s ease, border-color 0.2s ease;
  }
  .sort-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(255,255,255,0.1);
    transform: translateX(-101%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }
  .sort-btn:hover::before { transform: translateX(0); }
  .sort-btn span { position: relative; z-index: 1; }
  .sort-btn.active-sort::before {
    transform: translateX(0);
    background-color: rgba(255,255,255,0.12);
  }
`;

// ─── Group pill styles (verbatim from talents/page.js) ───────────────────────
const groupStyles = {
  blue: {
    pillActive: "bg-blue-500/20 border-blue-400 text-blue-300",
    pillInactive: "border-slate-700 text-slate-400 hover:border-blue-500/50 hover:text-blue-400",
    glow: "0 0 14px rgba(96,165,250,0.7)",
    tagBg: "rgba(96,165,250,0.15)",
    tagColor: "#93c5fd",
  },
  red: {
    pillActive: "bg-red-500/20 border-red-400 text-red-300",
    pillInactive: "border-slate-700 text-slate-400 hover:border-red-500/50 hover:text-red-400",
    glow: "0 0 14px rgba(248,113,113,0.7)",
    tagBg: "rgba(248,113,113,0.15)",
    tagColor: "#fca5a5",
  },
  "static-white": {
    pillActive: "bg-white/10 border-white text-white",
    pillInactive: "border-slate-700 text-slate-400 hover:border-white/50 hover:text-white",
    glow: "0 0 14px rgba(255,255,255,0.65)",
    tagBg: "rgba(255,255,255,0.1)",
    tagColor: "#e2e8f0",
  },
  slate: {
    pillActive: "bg-slate-500/20 border-slate-300 text-slate-200",
    pillInactive: "border-slate-700 text-slate-500 hover:border-slate-400 hover:text-slate-300",
    glow: "0 0 14px rgba(148,163,184,0.5)",
    tagBg: "rgba(148,163,184,0.15)",
    tagColor: "#cbd5e1",
  },
};

function getGroupStyle(glowStyle) {
  return groupStyles[glowStyle] || groupStyles["static-white"];
}

// ─── Filter pill ─────────────────────────────────────────────────────────────
function FilterPill({ label, glowStyle, isActive, onClick }) {
  const style = getGroupStyle(glowStyle);
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm rounded-full font-semibold tracking-wider border transition-all duration-200 cursor-pointer ${isActive ? style.pillActive : style.pillInactive}`}
      style={isActive ? { boxShadow: style.glow } : {}}
    >
      {label}
    </button>
  );
}

// ─── Generation tag (read-only pill shown on article cards) ──────────────────
function GenTag({ generation, subgroup, generations }) {
  const genObj = generations.find((g) => g.id === generation);
  if (!genObj || genObj.id === "all") return null;

  // If article has a subgroup, try to find and display that instead
  if (subgroup && genObj.subgroups) {
    const subObj = genObj.subgroups.find((s) => s.id === subgroup);
    if (subObj) {
      const style = getGroupStyle(subObj.glowStyle);
      return (
        <span
          className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{ background: style.tagBg, color: style.tagColor, border: `1px solid ${style.tagColor}40` }}
        >
          {subObj.label}
        </span>
      );
    }
  }

  const style = getGroupStyle(genObj.glowStyle);
  return (
    <span
      className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full"
      style={{ background: style.tagBg, color: style.tagColor, border: `1px solid ${style.tagColor}40` }}
    >
      {genObj.label}
    </span>
  );
}

// ─── Article card ─────────────────────────────────────────────────────────────
function ArticleCard({ article, generations, index }) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div
      style={{ animation: `cardEnter 0.4s ease both`, animationDelay: `${index * 60}ms` }}
    >
      <Link href={`/articles/${article.slug}`} className="block">
        <div
          className="article-card flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer"
        >
          {/* Thumbnail */}
          <div className="md:w-72 md:shrink-0 w-full">
            <div className="relative w-full aspect-video md:aspect-auto md:h-full overflow-hidden">
              <img
                src={article.thumbnail || "/placeholder.png"}
                alt={article.title}
                className="w-full h-full object-cover"
                style={{ minHeight: "160px" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-5 flex-1 min-w-0">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <GenTag generation={article.generation} subgroup={article.subgroup} generations={generations} />
                <span className="text-slate-600 text-[10px] tracking-widest uppercase">{formattedDate}</span>
              </div>
              <h2 className="font-oswald text-white uppercase tracking-wide leading-tight mb-1" style={{ fontSize: "clamp(1.05rem, 2vw, 1.35rem)" }}>
                {article.title}
              </h2>
              <p className="text-slate-400 text-xs mb-2">by {article.author}</p>
            </div>
            <p className="excerpt-fade text-slate-300 text-sm leading-relaxed line-clamp-3 mt-1">
              {article.excerpt}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1 justify-center mt-12 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full border flex items-center justify-center text-sm transition-all duration-200"
        style={{
          borderColor: currentPage === 1 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.2)",
          color: currentPage === 1 ? "rgba(255,255,255,0.2)" : "#ffffff",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        ‹
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className="w-9 h-9 rounded-full border text-sm font-semibold transition-all duration-200"
          style={{
            borderColor: p === currentPage ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)",
            background: p === currentPage ? "rgba(255,255,255,0.12)" : "transparent",
            color: p === currentPage ? "#ffffff" : "#94a3b8",
            boxShadow: p === currentPage ? "0 0 12px rgba(255,255,255,0.15)" : "none",
          }}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full border flex items-center justify-center text-sm transition-all duration-200"
        style={{
          borderColor: currentPage === totalPages ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.2)",
          color: currentPage === totalPages ? "rgba(255,255,255,0.2)" : "#ffffff",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ArticlesPage() {
  const [activeGen, setActiveGen] = useState("all");
  const [activeSub, setActiveSub] = useState(null);
  const [sort, setSort] = useState("newest");
  const [listKey, setListKey] = useState("all");
  const [listVisible, setListVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const { generations } = talentData;
  const { articles } = articlesData;

  const activeGenObj = generations.find((g) => g.id === activeGen);
  const subgroups = activeGenObj?.subgroups || null;

  function switchFilter(newGen, newSub) {
    setListVisible(false);
    setTimeout(() => {
      setActiveGen(newGen);
      setActiveSub(newSub);
      setListKey(`${newGen}-${newSub}`);
      setCurrentPage(1);
      setListVisible(true);
    }, 200);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const filteredAndSorted = useMemo(() => {
    let result = articles.filter((a) => {
      if (activeGen === "all") return true;
      if (activeSub) return a.subgroup === activeSub;
      return a.generation === activeGen;
    });

    result = [...result].sort((a, b) => {
      const da = new Date(a.date);
      const db = new Date(b.date);
      return sort === "newest" ? db - da : da - db;
    });

    return result;
  }, [articles, activeGen, activeSub, sort]);

  const totalPages = Math.ceil(filteredAndSorted.length / ARTICLES_PER_PAGE);
  const paginatedArticles = filteredAndSorted.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{styles}</style>
      <Header />

      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 border-b border-white/5 pt-32 pb-14 px-6 text-center">
        <h1
          className="fade-up fade-2 font-oswald font-bold uppercase leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          Articles
        </h1>
        <p className="fade-up fade-3 text-slate-500 text-sm tracking-widest uppercase mt-3">
          News, announcements &amp; updates
        </p>
      </section>

      {/* ── Filter + Sort bar ───────────────────────────────────────────── */}
      <section className="w-full flex flex-col items-center px-6 py-5 bg-slate-900/90 border-b border-white/5 backdrop-blur-sm gap-3 sticky top-0 z-10">

        {/* Sort + Generations row */}
        <div className="flex flex-wrap items-center gap-3 justify-center">
          {/* Sort toggle */}
          <button
            onClick={() => { setSort(sort === "newest" ? "oldest" : "newest"); setCurrentPage(1); }}
            className={`sort-btn px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full border border-white/15 text-slate-300 font-semibold tracking-wider ${sort === "newest" ? "active-sort" : ""}`}
          >
            <span>{sort === "newest" ? "Newest ↓" : "Oldest ↑"}</span>
          </button>

          <span className="h-4 w-px bg-white/10 hidden sm:block" />

          {/* Generation filter pills */}
          {generations.map((gen) => (
            <FilterPill
              key={gen.id}
              label={gen.label}
              glowStyle={gen.glowStyle}
              isActive={activeGen === gen.id}
              onClick={() => switchFilter(gen.id, null)}
            />
          ))}
        </div>

        {/* Subgroup row (animated reveal) */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: subgroups ? "1fr" : "0fr",
            opacity: subgroups ? 1 : 0,
            transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
            width: "100%",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <div className="flex flex-wrap gap-2 justify-center pt-3 pb-1">
              <div className="w-full flex items-center gap-3 justify-center mb-2">
                <span className="h-px w-16 bg-slate-700/60" />
                <span className="text-[10px] text-slate-600 tracking-[0.15em] uppercase">Filter by group</span>
                <span className="h-px w-16 bg-slate-700/60" />
              </div>
              {subgroups?.map((sub) => (
                <FilterPill
                  key={sub.id ?? "sub-all"}
                  label={sub.label}
                  glowStyle={sub.glowStyle}
                  isActive={activeSub === sub.id}
                  onClick={() => switchFilter(activeGen, sub.id)}
                />
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ── Article list ────────────────────────────────────────────────── */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div
          key={listKey}
          style={{ opacity: listVisible ? 1 : 0, transition: "opacity 0.2s ease" }}
        >
          {paginatedArticles.length === 0 ? (
            <div className="rounded-2xl py-20 text-center text-slate-700"
              style={{ border: "1px dashed rgba(255,255,255,0.08)" }}>
              <p className="text-4xl mb-4">✦</p>
              <p className="text-sm uppercase tracking-widest">Articles coming soon</p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {paginatedArticles.map((article, i) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  generations={generations}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>

      <Footer />
    </div>
  );
}
