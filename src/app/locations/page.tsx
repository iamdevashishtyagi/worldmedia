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
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "World Media NCR Advertising Service Areas",
    description:
      "Outdoor advertising services across Meerut, Delhi NCR and western Uttar Pradesh.",
    url: "/locations",
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
    <main className="mx-auto max-w-full px-6 py-16 bg-white">
      <BreadcrumbJsonLd
        items={[{ name: "Home", path: "/" }, { name: "Locations" }]}
      />
      <LocationListJsonLd />
      <FaqJsonLd questions={faqs} />
      <h1 className="text-4xl font-bold text-slate-900">
        Advertising service areas
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-700">
        World Media NCR plans and delivers outdoor advertising campaigns across
        Meerut, Delhi NCR and western Uttar Pradesh. Choose an area to see
        available services and local coverage.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map(([name, description, href]) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl border border-slate-200 p-6 transition hover:border-yellow-500 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-slate-900">
              Advertising in {name}
            </h2>
            <p className="mt-2 text-slate-600">{description}</p>
            <span className="mt-4 inline-block font-semibold text-blue-700">
              Explore {name} →
            </span>
          </Link>
        ))}
      </div>
      <section className="mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-900">Service area FAQs</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="text-xl font-semibold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
