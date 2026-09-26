// src/components/PortfolioGallery.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  { 
    id: 1, 
    category: "Hoardings", 
    title: "Baghra Bus Stand", 
    location: "Baghra", 
    description: "Strategic bus stand advertising in prime location",
    image: "/images/portfolio/Baghra Bus Stand.webp"
  },
  { 
    id: 2, 
    category: "Hoardings", 
    title: "Bhasuma Main Road", 
    location: "Bhasuma", 
    description: "High-visibility roadside hoarding",
    image: "/images/portfolio/Bhasuma Main Road.webp"
  },
  { 
    id: 3, 
    category: "Signage", 
    title: "Bijnor Vayanjan Vatika", 
    location: "Bijnor", 
    description: "Restaurant entry point signage and branding",
    image: "/images/portfolio/Bijnor Vayanjan Vatika Entry Point.webp"
  },
  { 
    id: 4, 
    category: "Hoardings", 
    title: "Budhana Khatuli Road", 
    location: "Budhana", 
    description: "Strategic highway advertising placement",
    image: "/images/portfolio/Budhana Khatuli Road.webp"
  },
  { 
    id: 5, 
    category: "Hoardings", 
    title: "Chutmalpur", 
    location: "Delhi Rorkee Dehradun Highway", 
    description: "Premium highway hoarding facing Rorkee",
    image: "/images/portfolio/Chutmalpur Facing Rorkee (Delhi Rorkee Dehradun Highway).webp"
  },
  { 
    id: 6, 
    category: "Hoardings", 
    title: "Meerut Sardhana", 
    location: "Meerut", 
    description: "High-traffic area advertising",
    image: "/images/portfolio/Meerut Sardhana.webp"
  },
  { 
    id: 7, 
    category: "Hoardings", 
    title: "Mirapur Bypass", 
    location: "Mirapur", 
    description: "Strategic bypass road hoarding",
    image: "/images/portfolio/Mirapur Bypass.webp"
  },
  { 
    id: 8, 
    category: "Hoardings", 
    title: "Muradpura Bus Stand", 
    location: "Muradpura", 
    description: "Bus stand advertising in prime location",
    image: "/images/portfolio/Muradpura Bus Stand.webp"
  },
  { 
    id: 9, 
    category: "Hoardings", 
    title: "Muzaffarnagar Meerut Road", 
    location: "Muzaffarnagar", 
    description: "Highway advertising on Meerut Road",
    image: "/images/portfolio/Muzaffarnagar Meerut Road.webp"
  },
  { 
    id: 10, 
    category: "Hoardings", 
    title: "Muzaffarnagar Rorkee Road", 
    location: "Muzaffarnagar", 
    description: "Strategic placement on Rorkee Road",
    image: "/images/portfolio/Muzaffarnagar Rorkee Road.webp"
  },
  { 
    id: 11, 
    category: "Hoardings", 
    title: "Muzaffarnagar Shamli Road", 
    location: "Muzaffarnagar", 
    description: "High-visibility hoarding on Shamli Road",
    image: "/images/portfolio/Muzaffarnagar Shamli Road.webp"
  },
  { 
    id: 12, 
    category: "Hoardings", 
    title: "Najibabad FC Delhi", 
    location: "Delhi Meerut Landsdown Highway", 
    description: "Premium highway advertising",
    image: "/images/portfolio/NAJIBABAD FC DELHI (Delhi Meerut Landsdown Highway).webp"
  },
  { 
    id: 13, 
    category: "Hoardings", 
    title: "Najibabad FC Kotdwar", 
    location: "Delhi Meerut Landsdown Highway", 
    description: "Strategic highway placement near Kotdwar",
    image: "/images/portfolio/NAJIBABAD FC KOTDWAR (Delhi Meerut Landsdown Highway).webp"
  },
  { 
    id: 14, 
    category: "Hoardings", 
    title: "Saharanpur Chhutmalpur", 
    location: "Saharanpur", 
    description: "High-traffic area advertising",
    image: "/images/portfolio/Saharanpur Chhutmalpur.webp"
  },
  { 
    id: 15, 
    category: "Hoardings", 
    title: "Shahpur Main Road", 
    location: "Shahpur", 
    description: "Prime location on main road",
    image: "/images/portfolio/SHAHPUR MAIN ROAD.webp"
  },
  { 
    id: 16, 
    category: "Hoardings", 
    title: "Shamli Alum Fc Saharanpur", 
    location: "Shamli", 
    description: "20x10 feet advertising display",
    image: "/images/portfolio/Shamli Alum Fc Saharanpur 20x10.webp"
  },
  { 
    id: 17, 
    category: "Hoardings", 
    title: "Shamli Kairana Road", 
    location: "Shamli", 
    description: "Strategic placement on Kairana Road",
    image: "/images/portfolio/SHAMLI KAIRANA ROAD.webp"
  },
  { 
    id: 18, 
    category: "Hoardings", 
    title: "Shamli Madheit Road", 
    location: "Shamli", 
    description: "20x10 feet advertising on Madheit Road",
    image: "/images/portfolio/Shamli Madheit Road 20x10.webp"
  },
  { 
    id: 19, 
    category: "Hoardings", 
    title: "Shamli Mandi Samiti", 
    location: "Shamli", 
    description: "T-point advertising at Mandi Samiti",
    image: "/images/portfolio/Shamli Mandi Samiti T Point.webp"
  },
  { 
    id: 20, 
    category: "Hoardings", 
    title: "Shamli Muzaffarnagar Road", 
    location: "Shamli", 
    description: "20x10 feet highway advertising",
    image: "/images/portfolio/Shamli Muzaffarnagar Road 20x10.webp"
  },
  { 
    id: 21, 
    category: "Hoardings", 
    title: "Shamli Sahapur Road", 
    location: "Shamli", 
    description: "Strategic placement on Sahapur Road",
    image: "/images/portfolio/SHAMLI SAHAPUR ROAD.webp"
  },
  { 
    id: 22, 
    category: "Hoardings", 
    title: "Shamli Sai Mandir Fc Loni", 
    location: "Shamli", 
    description: "20x10 feet advertising near Sai Mandir",
    image: "/images/portfolio/Shamli Sai Mandir Fc Loni 20x10.webp"
  },
  { 
    id: 23, 
    category: "Hoardings", 
    title: "Shamli Sai Mandir Fc Saharanpur", 
    location: "Shamli", 
    description: "20x10 feet advertising display",
    image: "/images/portfolio/Shamli Sai Mandir Fc Saharanpur 20x10.webp"
  },
  { 
    id: 24, 
    category: "Hoardings", 
    title: "Sharanpur Shakumbri Devi", 
    location: "Sharanpur", 
    description: "Premium advertising location",
    image: "/images/portfolio/Sharanpur Shakumbri Devi.webp"
  }
];

const categories = ["All", "Hoardings"];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="w-full py-16 bg-white border-t border-[#D8EAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1 bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            Real Sites &amp; Live Campaigns
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0F172A] tracking-tight">Our Site Portfolio</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">Explore our verified network of highway unipoles, arterial hoardings, and digital wall paintings across Uttar Pradesh &amp; Delhi NCR.</p>
        </div>
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button 
              key={category} 
              onClick={() => setActiveCategory(category)} 
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${ activeCategory === category ? 'bg-[#0A173E] text-white shadow-md' : 'bg-[#F0F8FF] border border-[#D8EAFD] text-slate-700 hover:border-[var(--yellow)] hover:text-[#0A173E]' }`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-2xs hover:shadow-xl transition-all duration-300 border border-[#D8EAFD] hover:border-[var(--yellow)] bg-white">
              <div className="w-full h-72 relative bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 bg-white">
                <span className="text-xs font-bold text-[#0A173E] uppercase tracking-wider bg-[#F0F8FF] border border-[#D8EAFD] px-2.5 py-1 rounded-md">{item.category}</span>
                <h3 className="text-xl font-bold text-[#0A173E] mt-3 mb-2 group-hover:text-[#CA8A04] transition-colors leading-snug">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                <p className="text-slate-500 text-xs font-medium">📍 {item.location}</p>
              </div>
              <div className="absolute inset-0 bg-[#0A173E]/95 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 p-6 backdrop-blur-2xs">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-extrabold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm mb-3 text-blue-100">{item.description}</p>
                  <p className="text-xs mb-5 text-[var(--yellow)] font-semibold">📍 {item.location}</p>
                  <Link href="/contact" className="inline-block bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] font-extrabold px-6 py-2.5 rounded-full text-sm shadow-md transition-all">
                    Inquire Site Space →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}