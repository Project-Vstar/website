"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";

export default function VStarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />

      <Hero 
        title="Press & Media"
        description="Latest news and media resources about our company."
        dotPattern={{
          size: 2,
          spacing: 25,
          color: "255, 255, 255",
          opacity: 0.1
        }}
      />

    <Footer />
    </div>
  );
}