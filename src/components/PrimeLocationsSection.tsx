"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Navigation, Eye, CheckCircle2 } from "lucide-react";

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
    <section className="w-full py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-yellow-100 text-yellow-900 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-yellow-700" />
            Prime Outdoor Advertising Corridors
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
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
              className="bg-slate-50 border border-slate-200 hover:border-yellow-500/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-slate-950 leading-snug">
                    {item.corridor}
                  </h3>
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md w-fit mb-4">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{item.traffic}</span>
                </div>
                <div className="space-y-2.5 text-sm text-slate-700 mb-6">
                  <p>
                    <span className="font-semibold text-slate-900">Key Sites:</span> {item.sites}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Formats:</span> {item.sizes}
                  </p>
                  <p className="text-xs text-slate-600 italic">
                    {item.visibility}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-slate-700">Ideal For:</span> {item.bestFor}
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-white hover:bg-yellow-500 hover:text-slate-950 text-slate-900 font-bold py-2 px-4 rounded-xl border border-slate-300 transition text-sm shadow-sm"
                >
                  Check Availability &amp; Rates →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Local Area Quick Links for High-Relevance Internal Linking */}
        <div className="bg-slate-900 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-yellow-400" />
            Explore Specific Regional Service Locations:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <Link href="/locations/meerut" className="text-yellow-400 hover:underline">
              Hoardings in Meerut →
            </Link>
            <Link href="/locations/delhi-ncr" className="text-yellow-400 hover:underline">
              Delhi-Meerut Expressway →
            </Link>
            <Link href="/locations/delhi" className="text-yellow-400 hover:underline">
              Hoardings in Delhi →
            </Link>
            <Link href="/locations/muzaffarnagar" className="text-yellow-400 hover:underline">
              Muzaffarnagar Sites →
            </Link>
            <Link href="/locations/shamli" className="text-yellow-400 hover:underline">
              Shamli Highway Ads →
            </Link>
            <Link href="/locations/saharanpur" className="text-yellow-400 hover:underline">
              Saharanpur Hoardings →
            </Link>
            <Link href="/locations/baghpat" className="text-yellow-400 hover:underline">
              Baghpat &amp; Baraut Ads →
            </Link>
            <Link href="/locations/hapur" className="text-yellow-400 hover:underline">
              Hapur Expressway Sites →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
