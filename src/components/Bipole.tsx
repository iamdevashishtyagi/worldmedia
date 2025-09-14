// src/components/Bipole.tsx
import Image from 'next/image';
import { ReactNode } from 'react';

interface BipoleProps {
  imageUrl?: string;
  children?: ReactNode;
  className?: string;
  width?: number;
  height?: number;
  hasLights?: boolean;
  isNightMode?: boolean;
}

export default function Bipole({ 
  imageUrl, 
  children, 
  className = "", 
  width = 400, 
  height = 250,
  hasLights = true,
  isNightMode = true
}: BipoleProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Top Structure with Lights */}
      <div className="relative w-full flex justify-between items-end mb-2" style={{ width: `${width + 40}px` }}>
        {/* Left Light Mount */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-yellow-400 rounded-full mb-1"></div>
          <div className="w-2 h-6 bg-gray-600"></div>
        </div>
        
        {/* Center Top Beam */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full flex justify-center">
          <div className="w-full h-2 bg-gray-700 flex justify-between px-8">
            {/* Downlights */}
            {hasLights && isNightMode && (
              <>
                <div className="relative">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  {/* Light Beam */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-yellow-200/30"></div>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-yellow-200/30"></div>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-yellow-200/30"></div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Light Mount */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-yellow-400 rounded-full mb-1"></div>
          <div className="w-2 h-6 bg-gray-600"></div>
        </div>
      </div>

      {/* Main Hoarding Board */}
      <div className="relative bg-gray-800 border-4 border-gray-700 rounded-lg overflow-hidden shadow-2xl group"
           style={{ width: `${width}px`, height: `${height}px` }}>
        
        {/* Content Area */}
        {imageUrl ? (
          <div className="w-full h-full relative">
            <Image
              src={imageUrl}
              alt="Advertising hoarding"
              fill
              className="object-cover"
            />
            {/* Light overlay effect */}
            {hasLights && isNightMode && (
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-200/10 via-transparent to-transparent"></div>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
            {children}
            {/* Light overlay effect */}
            {hasLights && isNightMode && (
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-200/15 via-transparent to-transparent"></div>
            )}
          </div>
        )}
        
        {/* Hoarding Frame Details */}
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></div>
        <div className="absolute left-0 top-0 h-full w-2 bg-yellow-400"></div>
        <div className="absolute right-0 top-0 h-full w-2 bg-yellow-400"></div>
        
        {/* Bolts/Nails */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-gray-600 rounded-full"></div>
        <div className="absolute top-2 right-2 w-3 h-3 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-gray-600 rounded-full"></div>
        
      </div>

      {/* Two Poles */}
      <div className="flex justify-between w-full" style={{ width: `${width + 80}px` }}>
        {/* Left Pole */}
        <div className="w-6 h-52 bg-gradient-to-b left-18 from-gray-600 via-gray-500 to-gray-400 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-gray-700 rounded-t-lg"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-800 rounded-b-lg"></div>
          <div className="absolute top-16 left-0 w-full h-1 bg-yellow-500"></div>
          <div className="absolute top-32 left-0 w-full h-1 bg-yellow-500"></div>
          <div className="absolute top-48 left-0 w-full h-1 bg-yellow-500"></div>
        </div>

        {/* Right Pole */}
        <div className="w-6 h-52 bg-gradient-to-b right-18 from-gray-600 via-gray-500 to-gray-400 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-gray-700 rounded-t-lg"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-800 rounded-b-lg"></div>
        </div>
      </div>

      {/* Support Cross Beam */}
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-full h-2 bg-gray-600 rounded-full" 
           style={{ width: `${width + 60}px` }}></div>

      {/* Ground Shadow */}
      <div className="w-full h-4 bg-gray-800/30 rounded-full blur-sm mt-2" 
           style={{ width: `${width + 100}px` }}></div>
    </div>
  );
}