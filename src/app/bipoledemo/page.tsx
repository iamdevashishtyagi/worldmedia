// src/app/bipole-demo/page.tsx
"use client";

import { useState } from 'react';
import Bipole from '@/components/Bipole';

export default function BipoleDemo() {
  const [isNightMode, setIsNightMode] = useState(true);
  const [hasLights, setHasLights] = useState(true);

  const advertisingExamples = [
    {
      title: "Summer Collection",
      message: "50% OFF SALE",
      color: "from-orange-400 to-red-500",
      icon: "🔥"
    },
    {
      title: "Grand Opening",
      message: "NEW STORE",
      color: "from-green-400 to-green-600",
      icon: "🎉"
    },
    {
      title: "Fast Food",
      message: "24/7 OPEN",
      color: "from-yellow-400 to-red-500",
      icon: "🍔"
    },
    {
      title: "Luxury Cars",
      message: "TEST DRIVE",
      color: "from-blue-400 to-purple-600",
      icon: "🚗"
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Bipole Component Demo</h1>
        
        {/* Controls */}
        <div className="text-center mb-12 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Customize Your Bipole</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isNightMode}
                onChange={(e) => setIsNightMode(e.target.checked)}
                className="w-4 h-4"
              />
              Night Mode
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={hasLights}
                onChange={(e) => setHasLights(e.target.checked)}
                className="w-4 h-4"
              />
              Show Lights
            </label>
            <button
              onClick={() => {
                setIsNightMode(true);
                setHasLights(true);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Best View
            </button>
          </div>
        </div>

        {/* Main Demo */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-6">Main Bipole Display</h2>
          <div className="flex justify-center">
            <Bipole 
              width={450} 
              height={280}
              hasLights={hasLights}
              isNightMode={isNightMode}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-6">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="font-bold text-2xl mb-2">WORLD MEDIA</h3>
                <p className="text-lg">Premium Advertising Solutions</p>
                <p className="text-sm mt-4 opacity-90">+1 (555) 123-4567</p>
              </div>
            </Bipole>
          </div>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {advertisingExamples.map((example, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold mb-4">Example {index + 1}</h3>
              <div className="flex justify-center">
                <Bipole 
                  width={320} 
                  height={200}
                  hasLights={hasLights}
                  isNightMode={isNightMode}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${example.color} flex flex-col items-center justify-center text-white p-4`}>
                    <div className="text-3xl mb-3">{example.icon}</div>
                    <div className="font-bold text-lg mb-1">{example.title}</div>
                    <div className="text-sm">{example.message}</div>
                  </div>
                </Bipole>
              </div>
            </div>
          ))}
        </div>

        {/* Different Sizes */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-8">Different Sizes</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <h3 className="text-sm mb-2">Small</h3>
              <Bipole width={250} height={150} hasLights={hasLights} isNightMode={isNightMode}>
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-sm">
                  SMALL BIPOLES
                </div>
              </Bipole>
            </div>
            <div className="text-center">
              <h3 className="text-sm mb-2">Medium</h3>
              <Bipole width={350} height={220} hasLights={hasLights} isNightMode={isNightMode}>
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                  MEDIUM SIZE
                </div>
              </Bipole>
            </div>
            <div className="text-center">
              <h3 className="text-sm mb-2">Large</h3>
              <Bipole width={450} height={280} hasLights={hasLights} isNightMode={isNightMode}>
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-lg">
                  LARGE BIPOLES
                </div>
              </Bipole>
            </div>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Usage Tips</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold mb-2">✅ Perfect For:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Highway advertising</li>
                <li>Shopping mall promotions</li>
                <li>Event signage</li>
                <li>Directional advertising</li>
                <li>Brand showcases</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🎨 Customization:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Adjustable width and height</li>
                <li>Night mode with realistic lights</li>
                <li>Custom content or images</li>
                <li>Realistic shadow effects</li>
                <li>Detailed construction elements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}