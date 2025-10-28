"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function VStarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />

      <div className="text-white text-4xl font-bold flex-grow flex items-center justify-center min-h-[90vh]">
        <div className="flex flex-col justify-center items-center">
                    <img src="/VSTAR.png" alt="VSTAR Logo" className="w-48 h-48 mb-6" />
          <p className="p-4">VSTAR</p>
          <p className="p-4">This is where content specific to VSTAR will go.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}