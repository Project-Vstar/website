"use client";
import React from "react";
import Header from "@/app/components/header";

export default function VStarPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center">
      <Header />

      <div className="text-white text-4xl font-bold">
        VSTAR
      </div>
    </div>
  );
}