"use client";

import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const getFlexClass = (side) => {
    if (hovered === side) return "flex-[2]";
    if (hovered === null) return "flex-[1]";
    return "flex-[1]";
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">

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
