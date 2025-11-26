"use client";
import React from "react";

/**
 * Hero Component
 * 
 * @param {string} title - The main hero title
 * @param {string} description - The description text below the title
 * @param {object} dotPattern - Optional configuration for the dot pattern
 * @param {number} dotPattern.size - Size of each dot in pixels (default: 2)
 * @param {number} dotPattern.spacing - Spacing between dots in pixels (default: 20)
 * @param {string} dotPattern.color - Color of the dots (default: "255, 255, 255" - white)
 * @param {number} dotPattern.opacity - Opacity of the dots (default: 0.3)
 */
export default function Hero({ 
  title, 
  description,
  dotPattern = {}
}) {
  const {
    size = 2,
    spacing = 20,
    color = "255, 255, 255", 
    opacity = 0.3
  } = dotPattern;

  const dotPatternSVG = `
    <svg width="${spacing}" height="${spacing}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size}" cy="${size}" r="${size}" fill="rgba(${color}, ${opacity})" />
    </svg>
  `;

  const encodedPattern = encodeURIComponent(dotPatternSVG);

  return (
    <div 
      className="text-white text-4xl font-bold flex items-center justify-center min-h-[50vh] relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodedPattern}")`,
        backgroundRepeat: "repeat",
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgb(15, 23, 42) 100%)"
        }}
      />
      
      <div className="flex flex-col justify-center items-center relative z-10">
        <h1 className="p-4">{title}</h1>
        <p className="p-4 text-md font-normal">{description}</p>
      </div>
    </div>
  );
}