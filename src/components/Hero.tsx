// src/components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const heroTexts = ["Hoardings", "Billboards", "Vehicle Branding", "LED Displays", "Digital Marketing"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute z-0 w-full h-full">
        <Image
          src="/images/website/herobg.jpg"
          alt="World Media Advertising Solutions"
          fill
          priority
          className="object-cover md:object-cover object-center"
          quality={85}
          sizes="100vw"
        />
      </div>
      {/* Lighter Gradient Overlay for better visibility */}
      <div className="absolute z-1 inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Content positioned higher */}
      <div className="z-10 max-w-4xl mx-auto px-4 -mt-32">
        {/* World Media heading lifted higher */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 -mt-8">
          World Media
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8">
          Premier Advertising Solutions in {" "}
          <span className="text-red-700 font-bold drop-shadow-lg">Delhi NCR</span>
        </p>
        <div className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          <span className="text-yellow-400 font-bold text-2xl md:text-3xl">
            {heroTexts[textIndex]}
          </span>
        </div>
        
        {/* Buttons in one line for mobile with smaller size */}
        <div className="flex flex-row gap-2 justify-center">
          <Link 
            href="/contact" 
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 md:py-3 md:px-10 rounded-full text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap min-w-[140px]"
          >
            Get Free Quote
          </Link>
          <Link 
            href="/services" 
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-2 px-6 md:py-3 md:px-10 rounded-full text-sm md:text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap min-w-[140px]"
          >
            Our Services
          </Link>
        </div>
        
        {/* Premium Trust indicators */}
        <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm font-bold">
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 rounded-full border border-yellow-400/30 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white">10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 rounded-full border border-yellow-400/30 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white">500+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 rounded-full border border-yellow-400/30 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white">Across Delhi NCR</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}