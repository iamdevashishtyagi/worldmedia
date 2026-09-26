// src/app/services/page.tsx
import { Metadata } from 'next';
import ServicesSection from "@/components/ServicesSection";
import { FaqJsonLd } from "@/components/SeoJsonLd";

const faqs = [
  { question: "Which outdoor advertising services does World Media NCR provide?", answer: "World Media NCR provides hoarding and billboard advertising, digital wall painting, vehicle branding, flex printing, LED display advertising and political advertising campaign support across Meerut, Delhi NCR, and Western UP." },
  { question: "How do I get an advertising quote in Meerut?", answer: "Share your campaign objective, preferred area, format and timing with World Media NCR via call or WhatsApp at +91-9456497636. Our team provides transparent rate cards, site photos, and rapid site reservations." },
  { question: "Which areas does World Media NCR serve?", answer: "World Media NCR serves Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, Ghaziabad, Noida, Delhi and Delhi NCR." },
];

export const metadata: Metadata = {
  title: 'Best Advertising Services in Meerut | Top Hoarding, Billboard & Wall Painting Company',
  description: 'Explore the best outdoor advertising services in Meerut by World Media NCR. Premium highway hoarding advertising, digital wall painting, billboard unipoles, vehicle branding, flex printing, and LED video displays. Call +91-9456497636.',
  keywords: [
    'best advertising services meerut',
    'top advertising agency meerut',
    'best hoarding services in meerut',
    'top billboard company meerut',
    'best outdoor advertising company meerut',
    'advertising services meerut',
    'outdoor advertising services',
    'hoarding services meerut',
    'digital wall painting meerut',
    'billboard advertising meerut',
    'vehicle branding meerut',
    'flex printing meerut',
    'led display advertising meerut',
    'hoarding rates in meerut'
  ],
  alternates: {
    canonical: 'https://worldmediancr.com/services',
  },
  openGraph: {
    title: 'Best Advertising Services in Meerut | Top Hoarding & Billboard Agency | World Media NCR',
    description: 'Complete outdoor advertising services in Meerut & NCR. Hoarding, wall painting, billboard, vehicle branding.',
    url: 'https://worldmediancr.com/services',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/website/herobg2.jpg',
        width: 1200,
        height: 630,
        alt: 'World Media NCR - Best Outdoor Advertising Services in Meerut',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <ServicesSection />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <FaqJsonLd questions={faqs} />
        <h2 className="text-3xl font-bold text-[#0A173E]">Advertising Services FAQs</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question} className="p-6 bg-[#F0F8FF] rounded-2xl border border-[#D8EAFD]">
              <h3 className="text-xl font-semibold text-[#0A173E]">{faq.question}</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
