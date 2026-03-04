"use client";
import React from "react";
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import Footer from "@/app/components/footer";

export default function VStarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />

      <Hero 
        title="Our Trusted Partners"
        description="We collaborate with industry leaders to bring you the best services."
        dotPattern={{
          size: 2,
          spacing: 25,
          color: "255, 255, 255",
          opacity: 0.1
        }}
      />

      <div className="bg-slate-900 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-wider pb-5">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
            <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
              <img src="/Partners/Ferdinand.jpg" alt="Partner 1" className="object-contain h-24" />
            </a>
            <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32">
              <img src="/Partners/BeLaser.png" alt="Partner 2" className="object-contain h-16 p-1" />
            </a>
            <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
              <img src="/Partners/Odoo.png" alt="Partner 3" className="object-contain h-16 p-1" />
            </a>
            <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
              <img src="Ppartners/PremierInn.svg" alt="Partner 4" className="object-contain h-16 p-1" />
            </a>
            <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
              <img src="/Partners/Vodafone.png" alt="Partner 5" className="object-contain h-16 p-1" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}