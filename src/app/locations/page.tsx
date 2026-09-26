import type { Metadata } from "next";
import Link from "next/link";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  LocationListJsonLd,
} from "@/components/SeoJsonLd";
import { locationsData } from "@/data/locations";

const faqs = [
  {
    question: "Which areas does World Media NCR cover?",
    answer:
      "World Media NCR serves Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, Delhi and Delhi NCR with comprehensive outdoor advertising media networks.",
  },
  {
    question:
      "Can I plan an outdoor advertising campaign for more than one city?",
    answer:
      "Yes. World Media NCR specializes in multi-city integrated campaigns across Western Uttar Pradesh and Delhi NCR with consolidated monitoring and rate cards.",
  },
];

export const metadata: Metadata = {
  title: "Advertising Service Areas | Meerut, Delhi NCR & Uttar Pradesh",
  description:
    "Explore World Media NCR outdoor advertising service areas in Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, Delhi and Delhi NCR.",
  alternates: { canonical: "https://worldmediancr.com/locations" },
  openGraph: {
    title: "World Media NCR Advertising Service Areas",
    description:
      "Outdoor advertising services across Meerut, Delhi NCR and western Uttar Pradesh.",
    url: "https://worldmediancr.com/locations",
    siteName: "World Media NCR",
    images: [
      {
        url: "/images/portfolio/Baghra Bus Stand.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Media NCR Advertising Service Areas",
    description:
      "Outdoor advertising services across Meerut, Delhi NCR and western Uttar Pradesh.",
  },
};

export default function LocationsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <BreadcrumbJsonLd
        items={[{ name: "Home", path: "/" }, { name: "Locations" }]}
      />
      <LocationListJsonLd />
      <FaqJsonLd questions={faqs} />
      
      <div className="mb-14 max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0A173E] tracking-tight">
          Advertising Service Areas
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 leading-relaxed">
          World Media NCR plans and delivers premium outdoor advertising campaigns across
          Meerut, Delhi NCR and Western Uttar Pradesh. Choose an area to view
          available billboard inventory, transit sites, and local market coverage.
        </p>
      </div>

      {/* Dynamic Grid automatically mapped from locationsData */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {locationsData.map((loc) => (
          <Link
            key={loc.slug}
            href={`/locations/${loc.slug}`}
            className="group block rounded-3xl border border-[#D8EAFD] bg-[#F0F8FF]/60 p-7 transition-all duration-300 hover:bg-white hover:border-[#0A173E] hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#0A173E] bg-white border border-[#D8EAFD] px-3 py-1 rounded-full shadow-2xs">
                {loc.activeSites || "Active Prime Zone"}
              </span>
              <span className="text-[#0A173E] font-bold group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0A173E] group-hover:text-blue-900 transition">
              {loc.name}
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">
              {loc.metaDescription}
            </p>
            <div className="mt-6 pt-4 border-t border-[#D8EAFD]/60 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                {loc.highwayLinks.split(",")[0] || "High-traffic corridor"}
              </span>
              <span className="font-extrabold text-sm text-[#0A173E] group-hover:underline">
                Explore Sites →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-20 max-w-4xl bg-[#F0F8FF] border border-[#D8EAFD] p-8 md:p-10 rounded-3xl">
        <h2 className="text-3xl font-extrabold text-[#0A173E]">Service Area FAQs</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question} className="border-b border-[#D8EAFD] pb-6 last:border-0 last:pb-0">
              <h3 className="text-lg font-bold text-[#0A173E]">
                {faq.question}
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
