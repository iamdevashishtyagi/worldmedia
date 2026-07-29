// src/app/services/page.tsx
import { Metadata } from 'next';
import ServicesSection from "@/components/ServicesSection";
import { FaqJsonLd } from "@/components/SeoJsonLd";

const faqs = [
  { question: "Which outdoor advertising services does World Media NCR provide?", answer: "World Media NCR provides hoarding and billboard advertising, digital wall painting, vehicle branding, flex printing, LED display advertising and political advertising campaign support." },
  { question: "How do I get an advertising quote in Meerut?", answer: "Share your campaign objective, preferred area, format and timing with World Media NCR. The team can recommend suitable formats and provide a campaign quotation." },
  { question: "Which areas does World Media NCR serve?", answer: "World Media NCR serves Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, Delhi and Delhi NCR." },
];

export const metadata: Metadata = {
  title: 'Advertising Services in Meerut | Hoarding, Wall Painting & Outdoor Ads',
  description: 'Complete advertising services in Meerut including hoarding advertising, digital wall painting, billboard advertising, vehicle branding, flex printing, and LED display advertising. 20+ years of experience.',
  keywords: 'advertising services meerut, outdoor advertising services, hoarding services meerut, digital wall painting meerut, billboard advertising meerut, vehicle branding meerut, flex printing meerut, led display advertising meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/services',
  },
  openGraph: {
    title: 'Advertising Services in Meerut | World Media NCR',
    description: 'Complete outdoor advertising services in Meerut & NCR. Hoarding, wall painting, billboard, vehicle branding.',
    url: 'https://worldmediancr.com/services',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/website/services-og.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesSection />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <FaqJsonLd questions={faqs} />
        <h2 className="text-3xl font-bold text-slate-900">Advertising services FAQs</h2>
        <div className="mt-6 space-y-6">{faqs.map((faq) => <article key={faq.question}><h3 className="text-xl font-semibold text-slate-900">{faq.question}</h3><p className="mt-2 text-slate-700">{faq.answer}</p></article>)}</div>
      </section>
    </main>
  );
}
