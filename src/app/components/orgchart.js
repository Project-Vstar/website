"use client";
import React from "react";

const DeptColumn = ({ title, subtitle, items }) => (
  <div className="flex flex-col">
    <div className="mb-8">
      <p className="font-oswald text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
        {subtitle}
      </p>
      <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-tight">
        {title}
      </h3>
    </div>
    
    <ul className="space-y-6">
      {items.map((item, i) => (
        <li key={i} className="group">
          <p className="text-sm font-bold text-white mb-1 transition-colors">
            {item}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default function OrgChart() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-24 text-center">
        <p className="font-oswald text-[11px] uppercase tracking-[0.4em] text-white/90 mb-3">Leadership</p>
        <h2 className="font-oswald text-4xl font-bold text-white uppercase tracking-widest">CEO</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <DeptColumn 
          title="Operations" 
          items={["Talents", "Managers", "Admin", "Purchasing & Logistics"]} 
        />
        <DeptColumn 
          title="HR Management" 
          items={[]} 
        />
        <DeptColumn 
          title="Art Director" 
          items={["Art Team"]} 
        />
      </div>
    </div>
  );
}