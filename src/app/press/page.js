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
          <p className="p-4">Press kit</p>
          <p className="p-4">Content...</p>
        </div>
      </div>

    <Footer />
    </div>
  );
}