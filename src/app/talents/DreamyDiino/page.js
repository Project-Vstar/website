import Header from '@/app/components/header';
import React from 'react';

export default function VTuberPageLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-300 p-8">
            <Header />
      {/* Talents Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">DreamyDiino</h1>
        
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Vinfernia */}
          <div className="flex flex-col items-center space-y-6">
            {/* V Star Logo Placeholder */}
            <div className="w-32 h-32 rounded-3xl flex items-center justify-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center">
                <img src="/VSTAR.png" alt="VSTAR Logo" className="object-cover w-27 h-27" />
              </div>
            </div>
            
            {/* First ??? Box */}
            <div className="w-40 h-40 bg-white/60 rounded-3xl flex items-center justify-center">
              <span className="text-2xl text-gray-700">???</span>
            </div>
            
            {/* Second ??? Box */}
            <div className="w-40 h-40 bg-white/60 rounded-3xl flex items-center justify-center">
              <span className="text-2xl text-gray-700">???</span>
            </div>
          </div>
          
          {/* Center Column - Description */}
          <div className="flex flex-col items-center justify-start">
            <div className="bg-white/70 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-800 mb-4">
                scrolling pictures/character art of talents
              </p>
              <p className="text-sm text-gray-800">
                Vinfernia more right leaning, VSTAR more left leaning
              </p>
            </div>
          </div>
          
          {/* Right Column - VSTAR */}
          <div className="flex flex-col items-center space-y-6">
            {/* Clock/Rainbow Logo Placeholder */}
            <div className="w-32 h-32 bg-white/40 rounded-3xl flex items-center justify-center">
              <div className="text-5xl">⏱️</div>
            </div>
            
            {/* KAIROS Logo Placeholder */}
            <div className="w-40 h-40 bg-white/60 rounded-3xl flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">KAIROS</span>
            </div>
            
            {/* Third ??? Box */}
            <div className="w-40 h-40 bg-white/60 rounded-3xl flex items-center justify-center border-2 border-black">
              <span className="text-2xl text-gray-700">???</span>
            </div>
          </div>
        </div>
        
        {/* Color Split Description */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-900">
            color is supposed to be split, left and right,
          </p>
          <p className="text-lg">
            Right <span className="font-bold text-purple-900">VINFERNIA</span> symbolizing Evil, 
            left <span className="font-bold text-blue-900">VSTAR</span> Symbolizing Heroes
          </p>
        </div>
      </div>

      {/* VSTAR/VINFERNIA Section */}
      <div className="max-w-6xl mx-auto mb-12 bg-white/80 rounded-3xl p-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          VSTAR (or VINFERNIA)
        </h2>
        <p className="text-center text-gray-700 mb-8">
          (color VINFERNIA or VSTAR Theme, but generally the pages gonna be similar)
        </p>
        
        <div className="grid grid-cols-2 gap-8 items-start">
          {/* Left Side - Logos */}
          <div className="space-y-6">
            {/* Brand Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-blue-200 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⏱️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Brand logo</h3>
                <p className="text-sm text-gray-700">
                  pressing the Gen logo will expand the list of Influencers
                </p>
              </div>
            </div>
            
            {/* Gen Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-32 h-32 bg-blue-200 rounded-2xl flex items-center justify-center">
                <span className="text-lg font-bold text-gray-800">KAIROS</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Gen Logo</h3>
            </div>
            
            {/* Five squares for influencers */}
            <div className="flex space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-16 h-16 bg-white/70 rounded-xl"></div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Gen Logo Options */}
          <div className="space-y-6">
            <div className="flex justify-around">
              <div className="w-40 h-40 bg-blue-100 rounded-2xl flex items-center justify-center">
                <span className="text-sm text-gray-700">other Gen Logo</span>
              </div>
              <div className="w-40 h-40 bg-white border-2 border-black rounded-2xl flex items-center justify-center">
                <span className="text-sm text-gray-700">Other Gen Logo</span>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <h3 className="text-2xl font-bold text-gray-900">
                VTuber Headshot with<br />name below
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Influencer/Streamer Page */}
      <div className="max-w-6xl mx-auto bg-white/80 rounded-3xl p-8">
        <h3 className="text-center text-lg text-gray-700 mb-2">
          Influencer/Streamer Page
        </h3>
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-900">Name</h2>
        
        <div className="grid grid-cols-3 gap-8">
          {/* Left - Outfit Selection */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-900 mb-4 text-center">
              different outfits/Versions to click and show
            </p>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 bg-pink-400 rounded-full"></div>
              ))}
            </div>
          </div>
          
          {/* Center - VTuber Picture */}
          <div className="flex items-center justify-center">
            <div className="w-full h-80 bg-blue-200 rounded-3xl flex items-center justify-center">
              <span className="text-gray-700">VTUBER Picture/ Showcase</span>
            </div>
          </div>
          
          {/* Right - Lore and Info */}
          <div className="flex flex-col justify-between">
            <div className="h-64 bg-blue-200 rounded-3xl flex items-center justify-center">
              <span className="text-xl text-gray-900">Lore and Info</span>
            </div>
            
            <div className="mt-4 bg-pink-400 rounded-2xl p-4 text-center">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Link Section to all socials
              </p>
              <p className="text-xs text-gray-800">
                below: personal partnered brand / branded merch showcase (linking to store or brand page)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}