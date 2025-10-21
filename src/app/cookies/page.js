"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function VStarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="text-white text-4xl font-bold flex-grow flex items-center justify-center min-h-[90vh]">
        <div className="flex flex-col justify-center items-center">
          <p className="p-4">VSTAR</p>
          <p className="p-4">This is where content specific to cookie information will go.</p>
        </div>
      </div>

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