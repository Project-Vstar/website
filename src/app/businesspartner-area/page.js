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
        title="Business Partner Area"
        description="Exclusive resources and information for our business partners."
        dotPattern={{
          size: 2,
          spacing: 25,
          color: "255, 255, 255",
          opacity: 0.1
        }}
      />

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