// src/app/services/page.tsx
import { Metadata } from 'next';
import ServicesSection from "@/components/ServicesSection";

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
    </main>
  );
}