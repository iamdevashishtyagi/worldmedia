// src/components/PortfolioGallery.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const portfolioItems = [
  { id: 1, category: "Hoardings", title: "Metro City Billboard", location: "Downtown", description: "Large format digital billboard in prime location" },
  { id: 2, category: "Vehicle", title: "Delivery Fleet Branding", location: "National", description: "Complete vehicle wrap for logistics company" },
  { id: 3, category: "Signage", title: "Retail Store Signage", location: "Shopping Mall", description: "Illuminated signage for retail brand" },
  { id: 4, category: "LED", title: "Sports Arena Display", location: "Stadium", description: "High-resolution LED scoreboard and advertising" },
  { id: 5, category: "Hoardings", title: "Highway Hoarding", location: "National Highway", description: "Strategic highway advertising placement" },
  { id: 6, category: "Vehicle", title: "Public Transport Branding", location: "City-wide", description: "Bus and metro advertising campaign" },
  { id: 7, category: "LED", title: "Corporate Building Display", location: "Business District", description: "Architectural LED integration" },
  { id: 8, category: "Signage", title: "Directional Signage System", location: "University Campus", description: "Complete wayfinding solution" },
  { id: 9, category: "Hoardings", title: "Airport Advertising", location: "International Airport", description: "Premium advertising in transit areas" },
];

const categories = ["All", "Hoardings", "Vehicle", "Signage", "LED"];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of successful advertising projects and campaigns
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Placeholder */}
              <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-500 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">{item.title}</div>
                  <div className="text-sm opacity-90">{item.category}</div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-white">
                <span className="text-sm text-blue-600 font-semibold">{item.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <p className="text-gray-500 text-xs">Location: {item.location}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm mb-4">{item.description}</p>
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}