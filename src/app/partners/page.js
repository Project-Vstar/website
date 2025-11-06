"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function VStarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />

      <div className="text-white text-4xl font-bold flex-grow flex items-center justify-center min-h-[50vh]">
        <div className="flex flex-col justify-center items-center">
          <p className="p-4">Partners</p>
          <p className="p-4  text-md">About partners...</p>
        </div>
      </div>

      <div className="bg-slate-900 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-wider pb-5">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
            <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
              <img src="/partners/Ferdinand.jpg" alt="Partner 1" className="object-contain h-24" />
            </a>
            <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32">
              <img src="/partners/BeLaser.png" alt="Partner 2" className="object-contain h-16 p-1" />
            </a>
            <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
              <img src="/partners/Odoo.png" alt="Partner 3" className="object-contain h-16 p-1" />
            </a>
            <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
              <img src="/partners/PremierInn.svg" alt="Partner 4" className="object-contain h-16 p-1" />
            </a>
            <a href="#" className="flex items-center justify-center bg-gray-500 rounded-lg h-32" >
              <img src="/partners/Vodafone.png" alt="Partner 5" className="object-contain h-16 p-1" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}