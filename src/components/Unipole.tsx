// src/components/Unipole.tsx
import Image from 'next/image';
import { ReactNode } from 'react';

interface UnipoleProps {
  imageUrl?: string;
  children?: ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

export default function Unipole({ 
  imageUrl, 
  children, 
  className = "", 
  width = 300, 
  height = 200 
}: UnipoleProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Hoarding Board */}
      <div className="relative bg-gray-800 border-4 border-gray-700 rounded-lg overflow-hidden shadow-2xl"
           style={{ width: `${width}px`, height: `${height}px` }}>
        
        {/* Content Area - either image or children */}
        {imageUrl ? (
          <div className="w-full h-full relative">
            <Image
              src={imageUrl}
              alt="Advertising hoarding"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
            {children}
          </div>
        )}
        
        {/* Hoarding Frame Details */}
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></div>
        <div className="absolute left-0 top-0 h-full w-2 bg-yellow-400"></div>
        <div className="absolute right-0 top-0 h-full w-2 bg-yellow-400"></div>
        
        {/* Bolts/Nails for realistic effect */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-gray-600 rounded-full"></div>
        <div className="absolute top-2 right-2 w-3 h-3 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>

      {/* Pole */}
      <div className="w-6 h-40 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 relative">
        {/* Pole details */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-700 rounded-t-lg"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-800 rounded-b-lg"></div>
        
        {/* Pole stripes */}
        <div className="absolute top-10 left-0 w-full h-1 bg-yellow-500"></div>
        <div className="absolute top-20 left-0 w-full h-1 bg-yellow-500"></div>
        <div className="absolute top-30 left-0 w-full h-1 bg-yellow-500"></div>
      </div>

      {/* Base */}
      <div className="w-20 h-6 bg-gray-900 rounded-b-lg"></div>
    </div>
  );
}