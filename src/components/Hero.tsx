// src/components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const heroTexts = [
    "Highway Hoardings",
    "Digital Wall Painting",
    "Unipole Billboards",
    "Vehicle Branding",
    "LED Digital Displays",
    "Political Campaigns",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center text-left text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute z-0 w-full h-full">
        <Image
          src="/images/website/herobg.jpg"
          alt="World Media NCR - Premier Outdoor Hoarding and Billboard Advertising Agency in Meerut & Delhi NCR"
          fill
          priority
          className="object-cover object-center"
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay: darker on left for ultra-sharp readability, translucent on right */}
      <div className="absolute z-1 inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40 lg:to-black/30"></div>
      <div className="absolute z-1 inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/60"></div>

      {/* Content Container - Aligned to Left */}
      <div className="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6 backdrop-blur-md">
            <span>📍</span>
            <span>Meerut • Delhi-Meerut Expressway • Delhi NCR • Western UP</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight text-left">
            Advertising Agency in Meerut <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
              &amp; Delhi NCR
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-slate-200 font-medium mb-6 max-w-2xl text-left leading-relaxed">
            High-Impact Highway Hoardings, Unipoles, Billboards &amp; Digital Wall Painting Across Western UP.
          </p>

          {/* Specializing In Dynamic Ticker */}
          <div className="text-base sm:text-lg md:text-xl mb-8 flex items-center justify-start gap-2 text-left">
            <span className="text-slate-300">Specializing in:</span>
            <span className="text-yellow-400 font-bold text-lg sm:text-xl md:text-2xl underline decoration-yellow-400/50 underline-offset-4">
              {heroTexts[textIndex]}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-start items-center">
            <a
              href="tel:+919456497636"
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold py-3 px-7 sm:px-8 rounded-full text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-500/20"
            >
              Call: +91 94564 97636
            </a>
            <a
              href="https://wa.me/919456497636?text=Hi%20World%20Media%20NCR%2C%20I%20want%20to%20inquire%20about%20hoardings%20and%20advertising%20locations."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-7 sm:px-8 rounded-full text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444"/>
              </svg> WhatsApp Quote
            </a>
            <Link
              href="/services"
              className="border-2 border-white/80 hover:bg-white hover:text-slate-950 text-white font-bold py-3 px-7 sm:px-8 rounded-full text-sm md:text-base transition-all duration-300 backdrop-blur-sm"
            >
              View Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 md:mt-12 flex flex-wrap justify-start gap-3 md:gap-4 text-xs md:text-sm font-bold">
            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30 shadow-lg">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-white">12+ Years (Since 2013)</span>
            </div>
            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30 shadow-lg">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-white">500+ Prime Sites</span>
            </div>
            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30 shadow-lg">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-white">Verified Clients &amp; Permits</span>
            </div>
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