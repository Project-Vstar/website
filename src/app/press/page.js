"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";
import WipSection from "../components/wippage";

export default function BusinessPartnerArea() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />

      <Hero
        title="Press & Media"
        description=""
        dotPattern={{
          size: 2,
          spacing: 25,
          color: "255, 255, 255",
          opacity: 0.1
        }}
      />

      <WipSection />


      <Footer />
    </div>
  );
}