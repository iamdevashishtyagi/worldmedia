// src/components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const heroTexts = ["Hoardings", "Billboards", "Vehicle Branding", "LED Displays", "Digital Marketing"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video Background - Use hosted URL or local file */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute z-1 inset-0 bg-gradient-to-r from-blue-900/70 via-purple-900/70 to-blue-900/70"></div>

      {/* Content */}
      <div className="z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          World Media
        </h1>
        <p className="text-xl md:text-3xl font-semibold mb-8">
          Premier Advertising Solutions for {" "}
          <span className="text-yellow-400">{heroTexts[textIndex]}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Get Free Quote
          </Link>
          <Link 
            href="/services" 
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}