import { Metadata } from 'next';
import ClientsSection from "@/components/ClientsSection";
import { BreadcrumbJsonLd } from "@/components/SeoJsonLd";

export const metadata: Metadata = {
  title: 'Our Clients | Trusted Advertising Partners in Meerut | World Media NCR',
  description: 'Leading brands and businesses that trust World Media NCR for their outdoor advertising needs in Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat & NCR.',
  keywords: 'advertising clients meerut, hoarding clients, wall painting customers, outdoor advertising partners, brands in meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/clients',
  },
  openGraph: {
    title: 'Our Clients & Partners | World Media NCR',
    description: 'Trusted by Tata Motors, Patanjali, UltraTech, Ambuja, Apollo, Medanta, and 500+ top brands across Meerut and NCR.',
    url: 'https://worldmediancr.com/clients',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Baghra Bus Stand.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ClientsPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://worldmediancr.com' },
          { name: 'Clients', url: 'https://worldmediancr.com/clients' },
        ]}
      />
      <ClientsSection />
    </main>
  );
}