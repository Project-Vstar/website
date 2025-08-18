"use client";

import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getFlexClass = (side) => {
    if (hovered === side) return "flex-[2]";
    if (hovered === null) return "flex-[1]";
    return "flex-[1]";
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <header className="absolute top-0 left-0 w-full z-10">
        <nav className="flex items-center justify-between p-4 bg-transparent">
          <div>
            <img src="/vstar.png" alt="Logo" className="h-8" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-white hover:underline">Home</a>
            <a href="/vstar" className="text-white hover:underline">VSTAR</a>
            <a href="/vinfernia" className="text-white hover:underline">VINFERNIA</a>
          </div>
          <div className="md:hidden">
            <button
              className="text-white text-3xl focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </nav>
<div
  className={`absolute top-0 left-0 w-full h-screen 
    bg-black bg-opacity-70 backdrop-blur-md 
    flex flex-col items-center justify-center space-y-4 md:hidden
    transition-opacity duration-300
    ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
>
  <a href="/" className="text-white text-2xl" onClick={() => setMobileMenuOpen(false)}>Home</a>
  <a href="/vstar" className="text-white text-2xl" onClick={() => setMobileMenuOpen(false)}>VSTAR</a>
  <a href="/vinfernia" className="text-white text-2xl" onClick={() => setMobileMenuOpen(false)}>VINFERNIA</a>
  <button
    className="text-white text-3xl absolute top-4 right-4"
    onClick={() => setMobileMenuOpen(false)}
  >
    ✕
  </button>
</div>
      </header>

      <div
        className={`transition-all duration-300 ease-in-out
          bg-[linear-gradient(to_bottom,theme(colors.blue.900),var(--foreground))]
          md:bg-[linear-gradient(to_right,theme(colors.blue.900),var(--foreground))]
          ${getFlexClass("left")}
          hover:scale-105
          flex items-center justify-center cursor-pointer
          overflow-hidden`}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => window.location.href = "/vstar"}
      >
        <div className="text-white text-3xl md:text-5xl font-bold transition">
          VSTAR
        </div>
      </div>

      <div
        className="flex-[1] hover:cursor-default bg-[var(--foreground)] relative hidden md:block"
        onMouseEnter={() => setHovered(null)}
      >
      </div>

      <div
        className={`transition-all duration-300 ease-in-out
          bg-[linear-gradient(to_top,theme(colors.red.900),var(--foreground))]
          md:bg-[linear-gradient(to_left,theme(colors.red.900),var(--foreground))]
          ${getFlexClass("right")}
          hover:scale-105
          flex items-center justify-center cursor-pointer
          overflow-hidden`}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => window.location.href = "/vinfernia"}
      >
        <div className="text-white text-3xl md:text-5xl font-bold transition">
          VINFERNIA
        </div>
      </div>
    </div>
  );
}
