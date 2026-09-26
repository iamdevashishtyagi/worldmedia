// src/components/PrimeLocationsSection.tsx
"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Navigation, Eye, CheckCircle2, ArrowRight } from "lucide-react";

const primeCorridors = [
  {
    corridor: "Delhi-Meerut Expressway (NE-3)",
    traffic: "200,000+ Daily Commuters",
    sites: "Dasna, Partapur, Bhoor Baral & Toll Plaza Unipoles",
    sizes: "20x10 ft, 40x20 ft, 60x20 ft Unipoles",
    visibility: "Unobstructed high-speed visibility from 500+ meters",
    bestFor: "National brands, Real Estate, FMCG, Tech & Automobiles",
  },
  {
    corridor: "Delhi Road & Partapur Bypass",
    traffic: "120,000+ Daily Vehicles",
    sites: "Partapur Interchange, Rithani, Mohkampur & Metro Hubs",
    sizes: "20x10 ft, 30x15 ft Billboards",
    visibility: "High commuter dwell time with both slow & express traffic",
    bestFor: "Universities, Hospitals, Showrooms & Retail Brands",
  },
  {
    corridor: "Roorkee Road & Modipuram",
    traffic: "85,000+ Daily Commuters",
    sites: "Modipuram Flyover, CCS University Junction, Pallavpuram",
    sizes: "20x10 ft, 15x10 ft Gantry & Hoardings",
    visibility: "Dense student, institutional and Haridwar/Dehradun traffic",
    bestFor: "Colleges, Coaching Institutes, Healthcare & Consumer Goods",
  },
  {
    corridor: "Garh Road & Commercial Core",
    traffic: "75,000+ Daily Shoppers",
    sites: "Medical College Road, Tejgarhi, Shastri Nagar Hubs",
    sizes: "15x10 ft, 20x10 ft Rooftops & Cantilever Hoardings",
    visibility: "Prime commercial shopping corridor with intense consumer footfall",
    bestFor: "Jewelry, Electronics, Healthcare, Lifestyle & Banking",
  },
  {
    corridor: "Begum Bridge & City Center",
    traffic: "90,000+ Daily Footfall",
    sites: "Begum Bridge Road, Abu Lane Intersections, Clock Tower",
    sizes: "High-impact streetscape hoardings & lit displays",
    visibility: "Historic shopping heart of Meerut with maximum local brand recall",
    bestFor: "Apparel, Retail Chains, Local Services & Electronics",
  },
  {
    corridor: "Western UP Inter-District Highways",
    traffic: "150,000+ Regional Traffic",
    sites: "Muzaffarnagar, Shamli, Saharanpur, Baghpat & Hapur Highways",
    sizes: "Unipoles, Wall Murals & Milestone Branding",
    visibility: "Complete coverage of Western UP economic belt",
    bestFor: "Agro-chemicals, Cement, Pipes, Political & Regional Leaders",
  },
];

export default function PrimeLocationsSection() {
  return (
    <section className="w-full py-20 bg-white border-t border-[#D8EAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-[#854D0E]" />
            Prime Outdoor Advertising Corridors
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A173E] tracking-tight mb-4">
            Strategic Hoarding Sites Across Meerut &amp; NCR
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every site in our network is legally permitted, structurally certified, and positioned at maximum commuter dwell-time choke points for uninterrupted brand recall.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {primeCorridors.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F0F8FF] border border-[#D8EAFD] hover:border-[var(--yellow)] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-[#0A173E] leading-snug group-hover:text-[#CA8A04] transition-colors">
                    {item.corridor}
                  </h3>
                  <MapPin className="w-5 h-5 text-[#0A173E] flex-shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A173E] bg-white border border-[#D8EAFD] px-2.5 py-1 rounded-md w-fit mb-4">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{item.traffic}</span>
                </div>
                <div className="space-y-2.5 text-sm text-slate-700 mb-6">
                  <p>
                    <span className="font-bold text-[#0A173E]">Key Sites:</span> {item.sites}
                  </p>
                  <p>
                    <span className="font-bold text-[#0A173E]">Formats:</span> {item.sizes}
                  </p>
                  <p className="text-xs text-slate-600 italic">
                    {item.visibility}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#D8EAFD]">
                <p className="text-xs text-slate-500 mb-3">
                  <span className="font-bold text-slate-700">Ideal For:</span> {item.bestFor}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 w-full text-center bg-white hover:bg-[var(--yellow)] hover:text-[#0A173E] text-[#0A173E] font-bold py-2.5 px-4 rounded-xl border border-[#D8EAFD] hover:border-[var(--yellow)] transition text-sm shadow-2xs"
                >
                  <span>Check Availability &amp; Rates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Local Area Quick Links Box - Dark Premium Navy Blue Background */}
        <div className="bg-[#0A173E] text-white rounded-2xl p-8 border border-[#182859] shadow-xl">
          <h3 className="text-xl font-extrabold mb-4 flex items-center gap-2 text-white">
            <CheckCircle2 className="w-5 h-5 text-[var(--yellow)]" />
            Explore Specific Regional Service Locations:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <Link href="/locations/meerut" className="text-blue-100 hover:text-[var(--yellow)] font-medium transition flex items-center gap-1">
              <span>→</span> Hoardings in Meerut
            </Link>
            <Link href="/locations/delhi-ncr" className="text-blue-100 hover:text-[var(--yellow)] font-medium transition flex items-center gap-1">
              <span>→</span> Delhi-Meerut Expressway
            </Link>
            <Link href="/locations/delhi" className="text-blue-100 hover:text-[var(--yellow)] font-medium transition flex items-center gap-1">
              <span>→</span> Hoardings in Delhi
            </Link>
            <Link href="/locations/muzaffarnagar" className="text-blue-100 hover:text-[var(--yellow)] font-medium transition flex items-center gap-1">
              <span>→</span> Muzaffarnagar Sites
            </Link>
            <Link href="/locations/shamli" className="text-blue-100 hover:text-[var(--yellow)] font-medium transition flex items-center gap-1">
              <span>→</span> Shamli Highway Ads
            </Link>
            <Link href="/locations/saharanpur" className="text-blue-100 hover:text-[var(--yellow)] font-medium transition flex items-center gap-1">
              <span>→</span> Saharanpur Hoardings
            </Link>
            <Link href="/locations/baghpat" className="text-blue-100 hover:text-[var(--yellow)] font-medium transition flex items-center gap-1">
              <span>→</span> Baghpat &amp; Baraut Ads
            </Link>
            <Link href="/locations/hapur" className="text-blue-100 hover:text-[var(--yellow)] font-medium transition flex items-center gap-1">
              <span>→</span> Hapur Expressway Sites
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
