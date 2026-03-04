/* eslint-disable react/prop-types */
"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MANGA_FACTIONS, MANGA_SLIDES } from "./manga-data";

// ─── Reuse the same usePrevNextButtons hook logic inline ────────────────────
function usePrevNextButtons(emblaApi) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNextButtonClick = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick };
}

// ─── Filter pill - mirrors the talents page style ────────────────────────────
function FilterPill({ label, glowColor, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 rounded-full text-sm font-semibold tracking-wider border transition-all duration-200 cursor-pointer"
      style={{
        backgroundColor: isActive ? `${glowColor.replace("0.7", "0.12").replace("0.6", "0.12")}` : "transparent",
        borderColor: isActive ? glowColor.replace(/[\d.]+\)$/, "0.8)") : "rgba(255,255,255,0.15)",
        color: isActive ? "#ffffff" : "rgba(255,255,255,0.4)",
        boxShadow: isActive ? `0 0 14px ${glowColor}` : "none",
      }}
    >
      {label}
    </button>
  );
}

// ─── Page counter pill ───────────────────────────────────────────────────────
function PageCounter({ current, total, accentColor }) {
  return (
    <span
      className="text-xs font-mono tracking-widest px-3 py-1 rounded-full border"
      style={{
        color: accentColor,
        borderColor: `${accentColor}40`,
        backgroundColor: `${accentColor}10`,
      }}
    >
      {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
  );
}

// ─── Arrow button ────────────────────────────────────────────────────────────
function ArrowButton({ direction, onClick, disabled, accentColor }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200"
      style={{
        borderColor: disabled ? "rgba(255,255,255,0.08)" : `${accentColor}50`,
        backgroundColor: disabled ? "rgba(255,255,255,0.03)" : `${accentColor}10`,
        color: disabled ? "rgba(255,255,255,0.2)" : "#ffffff",
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: disabled ? "none" : `0 0 12px ${accentColor}30`,
      }}
      aria-label={direction === "prev" ? "Previous page" : "Next page"}
    >
      <svg width="16" height="16" viewBox="0 0 532 532" fill="currentColor">
        {direction === "prev" ? (
          <path d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z" />
        ) : (
          <path d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z" />
        )}
      </svg>
    </button>
  );
}

// ─── Main carousel ───────────────────────────────────────────────────────────
export function EmblaCarousel() {
  const [activeFaction, setActiveFaction] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredSlides = useMemo(
    () => activeFaction === "all" ? MANGA_SLIDES : MANGA_SLIDES.filter((s) => s.faction === activeFaction),
    [activeFaction]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  // Track current slide index
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  // Scroll back to start when filter changes
  useEffect(() => {
    emblaApi?.scrollTo(0, true);
    setSelectedIndex(0);
  }, [activeFaction, emblaApi]);

  const activeFactionData = MANGA_FACTIONS.find((f) => f.id === activeFaction);
  const accentColor = activeFactionData?.glowColor ?? "rgba(255,255,255,0.6)";
  // Convert rgba glow to a solid-ish hex-adjacent for subtle uses
  const accentSolid = accentColor.replace(/rgba\((.+),[\d. ]+\)/, "rgba($1, 1)");

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">

      {/* ── Filter pills ── */}
      <div className="flex flex-wrap gap-2 justify-center">
        {MANGA_FACTIONS.map((faction) => (
          <FilterPill
            key={faction.id}
            label={faction.label}
            glowColor={faction.glowColor}
            isActive={activeFaction === faction.id}
            onClick={() => setActiveFaction(faction.id)}
          />
        ))}
      </div>

      {/* ── Viewer frame ── */}
      <div
        className="rounded-2xl border overflow-hidden backdrop-blur-sm"
        style={{
          borderColor: accentColor.replace(/[\d.]+\)$/, "0.2)"),
          backgroundColor: "rgba(0,0,0,0.4)",
          boxShadow: `0 0 40px ${accentColor.replace(/[\d.]+\)$/, "0.08)")}`,
        }}
      >
        {filteredSlides.length === 0 ? (
          <div className="flex items-center justify-center h-96 text-slate-500 text-sm tracking-widest uppercase">
            No pages yet.
          </div>
        ) : (
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {filteredSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-none w-full flex items-center justify-center bg-black"
                  style={{ minWidth: 0 }}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-auto object-contain max-h-[75vh]"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Controls row ── */}
      {filteredSlides.length > 0 && (
        <div className="flex items-center justify-between px-1">
          <ArrowButton
            direction="prev"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            accentColor={accentSolid}
          />
          <PageCounter
            current={selectedIndex + 1}
            total={filteredSlides.length}
            accentColor={accentSolid}
          />
          <ArrowButton
            direction="next"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            accentColor={accentSolid}
          />
        </div>
      )}
    </div>
  );
}