"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";

export default function BusinessPartnerArea() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />

      <Hero
        title="Members' Area"
        description="Exclusive content for our members."
        dotPattern={{
          size: 2,
          spacing: 25,
          color: "255, 255, 255",
          opacity: 0.1
        }}
      />

      <div className="text-white text-2xl font-bold flex-grow flex items-center justify-center min-h-[90vh]">
        <div className="flex flex-col justify-center items-center">
          <p className="p-4">WIP</p>
        </div>
      </div>


      <Footer />
    </div>
  );
}