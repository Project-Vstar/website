"use client";

import { useState } from 'react';

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const getFlexClass = (side) => {
    if (hovered === side) return 'flex-[2]';
    if (hovered === null) return 'flex-[1]';
    return 'flex-[1]';
  };

  return (
    <div className="flex h-screen">

      <div
        className={`transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-900 to-foreground
                    ${getFlexClass('left')} 
                    bg-red-500 hover:cursor-pointer`}
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => window.location.href = '/left-page'}
      >
        <div className="flex items-center justify-center h-full text-white text-3xl">
          VSTAR
        </div>
      </div>


      <div
        className="flex-[1] hover:cursor-default"
        onMouseEnter={() => setHovered(null)}
      />


      <div
        className={`transition-all duration-300 ease-in-out bg-gradient-to-l from-red-900 to-foreground
                    ${getFlexClass('right')} 
                    bg-blue-500 hover:cursor-pointer`}
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => window.location.href = '/right-page'}
      >
        <div className="flex items-center justify-center h-full text-white text-3xl">
          VINFERNIA
        </div>
      </div>
      
    </div>
  );
}
