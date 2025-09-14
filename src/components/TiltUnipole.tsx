"use client";

import Image from "next/image";
import React from "react";

interface UnipoleProps {
  image: string;
  tilt?: "left" | "right"; // direction of tilt
  title?: string;
}

export default function TiltUnipole({ image, tilt = "left", title }: UnipoleProps) {
  return (
    <div className="relative w-full max-w-md md:max-w-xl mx-auto aspect-video md:aspect-[12/6]" style={{ perspective: "1000px" }}>
      {/* Billboard */}
      <div className="relative w-full h-full bg-gray-900 rounded-lg shadow-2xl border-4 border-gray-700 overflow-hidden z-20" style={{ transform: `rotateY(${tilt === "left" ? "-15deg" : "15deg"})`, transformStyle: "preserve-3d", transition: "transform 0.5s ease" }}>
        <Image src={image} alt={title || "Hoarding Image"} fill className="object-cover" />

        {/* Lights */}
        <div className="absolute -top-1.5 md:-top-3 left-1/4 w-2 h-2 md:w-4 md:h-4 bg-gray-600 rounded-full shadow-md"></div>
        <div className="absolute -top-1.5 md:-top-3 left-1/2 w-2 h-2 md:w-4 md:h-4 bg-gray-600 rounded-full shadow-md"></div>
        <div className="absolute -top-1.5 md:-top-3 right-1/4 w-2 h-2 md:w-4 md:h-4 bg-gray-600 rounded-full shadow-md"></div>

        {/* Light beams */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Support bars - Responsive positioning */}
      {tilt === "left" ? (
        <>
          <div className="absolute w-[0.7%] left-[74%] -bottom-[57%] h-[92%] bg-black rotate-[78deg] rounded-full z-1"></div>
          <div className="absolute w-[0.7%] left-[28%] -bottom-[50%] h-[87%] bg-black rotate-[-71deg] rounded-full z-1"></div>
          <div className="absolute w-[0.7%] left-[54%] -bottom-[23%] h-[27%] bg-black rotate-[28deg] rounded-full z-1"></div>
          <div className="absolute w-[0.7%] left-[46%] -bottom-[23%] h-[27%] bg-black rotate-[-28deg] rounded-full z-1"></div>
          <div className="absolute w-[0.7%] left-[60%] -bottom-[35%] h-[49%] bg-black rotate-[62deg] rounded-full z-1"></div>
          <div className="absolute w-[0.7%] left-[39%] -bottom-[33%] h-[50%] bg-black rotate-[-59deg] rounded-full z-1"></div>
        </>
      ) : (
        <>
          <div className="absolute w-[0.7%] left-[70%] -bottom-[49%] h-[82%] bg-black rotate-[72deg] rounded-full z-1"></div>
          <div className="absolute w-[0.7%] left-[27%] -bottom-[54%] h-[88%] bg-black rotate-[-78deg] rounded-full z-1"></div>
          <div className="absolute w-[0.7%] left-[54%] -bottom-[23%] h-[30%] bg-black rotate-[28deg] rounded-full z-1"></div>
          <div className="absolute w-[0.7%] left-[46%] -bottom-[23%] h-[27%] bg-black rotate-[-28deg] rounded-full z-1"></div>
          <div className="absolute w-[0.7%] left-[61%] -bottom-[34%] h-[51%] bg-black rotate-[62deg] rounded-full z-1"></div>
          <div className="absolute w-[0.7%] left-[39%] -bottom-[33%] h-[51%] bg-black rotate-[-60deg] rounded-full z-1"></div>
        </>
      )}
      {/* Pole */}
      <div className="absolute -bottom-[60%] left-1/2 -translate-x-1/2 w-4 md:w-6 h-[60%] md:h-[63%] bg-gray-900 z-2"></div>
      <div className="absolute -bottom-[66%] left-1/2 -translate-x-1/2 w-6 md:w-8 h-[18%] md:h-[16%] bg-gray-900 rounded-t-full z-20" style={{ transform: `rotateY(${tilt === "left" ? "-15deg" : "15deg"})`, transformStyle: "preserve-3d", transition: "transform 0.5s ease" }}>
      </div>
    </div>
  );
}