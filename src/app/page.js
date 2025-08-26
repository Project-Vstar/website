"use client";

import React, { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FactionChooser from "@/app/components/faction-chooser";

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const getFlexClass = (side) => {
    if (hovered === side) return "flex-[2]";
    if (hovered === null) return "flex-[1]";
    return "flex-[1]";
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <FactionChooser hovered={hovered} setHovered={setHovered} getFlexClass={getFlexClass} />

      <div className="text-white text-4xl font-bold flex-grow flex items-center justify-center min-h-[90vh]">
        <div className="flex flex-col justify-center items-center">
          <p className="p-4">Section 2</p>
          <p className="p-4">Additional content for Section 2.</p>
        </div>
      </div>

      <div className="text-white text-4xl font-bold flex-grow flex items-center justify-center min-h-[90vh]">
        <div className="flex flex-col justify-center items-center">
          <p className="p-4">Section 3</p>
          <p className="p-4">Additional content for Section 3.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
