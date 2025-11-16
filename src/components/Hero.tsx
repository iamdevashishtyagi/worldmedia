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
      {/* Static Image Background with Next.js Image Optimization */}
      <div className="absolute z-0 w-full h-full">
        <Image
          src="/images/hero-bg.jpg" // You'll need to add this image
          alt="World Media Advertising Solutions"
          fill
          priority
          className="object-cover"
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay with better contrast */}
      <div className="absolute z-1 inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>

      {/* Animated background elements as fallback */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-conic from-transparent via-blue-500/20 to-transparent animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-conic from-transparent via-purple-500/20 to-transparent animate-spin-slow animation-delay-1000"></div>
      </div>

      {/* Content */}
      <div className="z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
          World Media
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8">
          Premier Advertising Solutions in {" "}
          <span className="text-yellow-400 font-bold">Delhi NCR</span>
        </p>
        <div className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          <span className="text-yellow-400 font-bold text-2xl md:text-3xl animate-pulse">
            {heroTexts[textIndex]}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Free Quote
          </Link>
          <Link 
            href="/services" 
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Our Services
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>500+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Across Delhi NCR</span>
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