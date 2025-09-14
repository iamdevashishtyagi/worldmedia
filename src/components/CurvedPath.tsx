// src/components/DashedPath.tsx
"use client";

import React from "react";

interface DashedPathProps {
  width?: number;        // SVG width
  height?: number;       // SVG height
  curve?: number;        // how much curve (higher = more bend)
  orientation?: "vertical" | "horizontal";
  colorStart?: string;   // start color
  colorEnd?: string;     // end color
  dashLength?: number;   // length of dash
  gapLength?: number;    // gap between dashes
  strokeWidth?: number;  // line thickness
}

export default function DashedPath({
  width = 200,
  height = 400,
  curve = 100,
  orientation = "vertical",
  colorStart = "red",
  colorEnd = "blue",
  dashLength = 12,
  gapLength = 8,
  strokeWidth = 4,
}: DashedPathProps) {
  // Path depends on orientation
  const path =
    orientation === "vertical"
      ? `M ${width / 4} 0 C ${width - 50} ${curve}, ${width / 4} ${height - curve}, ${
          width - 50
        } ${height}`
      : `M 0 ${height / 4} C ${curve} ${height - 50}, ${width - curve} ${
          height / 4
        }, ${width} ${height - 50}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="dashGradient"
          x1="0"
          y1="0"
          x2={orientation === "vertical" ? "0" : "1"}
          y2={orientation === "vertical" ? "1" : "0"}
        >
          <stop offset="0%" stopColor={colorStart} />
          <stop offset="100%" stopColor={colorEnd} />
        </linearGradient>
      </defs>

      <path
        d={path}
        stroke="url(#dashGradient)"
        strokeWidth={strokeWidth}
        strokeDasharray={`${dashLength} ${gapLength}`}
        fill="transparent"
      />
    </svg>
  );
}
