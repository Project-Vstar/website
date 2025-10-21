"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function VStarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="text-white text-6xl font-bold flex-grow flex items-center justify-center min-h-[80vh]">
        <div className="flex flex-col justify-center items-center">
          <img src="/VSTAR.png" alt="VSTAR Logo" className="w-48 h-48 mb-6" />
          <p className="p-6">VSTAR</p>
        </div>
      </div>

      <div className="text-white text-6xl font-bold flex-grow flex items-center justify-center min-h-[80vh]">
        <div className="flex flex-col justify-center items-center">
          <p className="p-6">Section 2</p>
          <p className="p-6">Additional content for Section 2.</p>
        </div>
      </div>

      <div className="text-white text-6xl font-bold flex-grow flex items-center justify-center min-h-[80vh]">
        <div className="flex flex-col justify-center items-center">
          <p className="p-6">Section 3</p>
          <p className="p-6">Additional content for Section 3.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}