import type { Metadata } from "next";
import Link from "next/link";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  LocationListJsonLd,
} from "@/components/SeoJsonLd";

const locations = [
  [
    "Meerut",
    "Outdoor advertising, hoardings and wall painting in Meerut.",
    "/locations/meerut",
  ],
  [
    "Muzaffarnagar",
    "High-visibility outdoor media across Muzaffarnagar.",
    "/locations/muzaffarnagar",
  ],
  [
    "Shamli",
    "Hoardings and local advertising placements in Shamli.",
    "/locations/shamli",
  ],
  [
    "Saharanpur",
    "Campaign planning and outdoor media in Saharanpur.",
    "/locations/saharanpur",
  ],
  [
    "Baghpat",
    "Branding solutions and advertising sites near Baghpat.",
    "/locations/baghpat",
  ],
  [
    "Hapur",
    "Outdoor advertising and printed media in Hapur.",
    "/locations/hapur",
  ],
  [
    "Delhi",
    "Campaign support and outdoor advertising in Delhi.",
    "/locations/delhi",
  ],
  [
    "Delhi NCR",
    "Integrated outdoor media campaigns across Delhi NCR.",
    "/locations/delhi-ncr",
  ],
] as const;

const faqs = [
  {
    question: "Which areas does World Media NCR cover?",
    answer:
      "World Media NCR serves Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, Delhi and Delhi NCR.",
  },
  {
    question:
      "Can I plan an outdoor advertising campaign for more than one city?",
    answer:
      "Yes. World Media NCR can help plan campaigns across multiple service areas and advertising formats.",
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
    <main className="mx-auto max-w-7xl px-6 py-16">
      <BreadcrumbJsonLd
        items={[{ name: "Home", path: "/" }, { name: "Locations" }]}
      />
      <LocationListJsonLd />
      <FaqJsonLd questions={faqs} />
      
      <div className="mb-12">
        <span className="inline-block px-3.5 py-1 bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          Regional Coverage
        </span>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0A173E] tracking-tight">
          Advertising Service Areas
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          World Media NCR plans and delivers premium outdoor advertising campaigns across
          Meerut, Delhi NCR and western Uttar Pradesh. Choose an area to see
          available billboard inventory, transit sites, and local market coverage.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map(([name, description, href]) => (
          <Link
            key={href}
            href={href}
            className="group block rounded-2xl border border-[#D8EAFD] bg-[#F0F8FF]/60 p-6 transition-all duration-300 hover:bg-white hover:border-[#0A173E] hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#854D0E] bg-[#FEF9C3] border border-[#FDE047] px-2.5 py-0.5 rounded-full">
                Active Prime Zone
              </span>
              <span className="text-[#0A173E] group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <h2 className="text-xl font-bold text-[#0A173E] group-hover:text-[#0A173E]">
              Advertising in {name}
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
            <span className="mt-4 inline-block font-bold text-sm text-[#0A173E] group-hover:underline">
              Explore {name} Sites →
            </span>
          </Link>
        ))}
      </div>

      <section className="mt-20 max-w-4xl bg-[#F0F8FF] border border-[#D8EAFD] p-8 md:p-10 rounded-2xl">
        <span className="inline-block px-3.5 py-1 bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          FAQ
        </span>
        <h2 className="text-3xl font-extrabold text-[#0A173E]">Service Area FAQs</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question} className="border-b border-[#D8EAFD] pb-6 last:border-0 last:pb-0">
              <h3 className="text-lg font-bold text-[#0A173E]">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
