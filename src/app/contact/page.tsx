import { Metadata } from 'next';
import ContactSection from "@/components/ContactSection";
import { BreadcrumbJsonLd } from '@/components/SeoJsonLd';

export const metadata: Metadata = {
  title: 'Contact Us | Advertising Agency in Meerut | World Media NCR',
  description: 'Contact World Media NCR, the leading advertising agency in Meerut. Get quotes for hoarding advertising, digital wall painting, and outdoor media campaigns across Meerut & NCR.',
  keywords: 'contact advertising agency meerut, advertising company meerut contact, hoarding advertising inquiry, wall painting services contact, outdoor advertising meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/contact',
  },
  openGraph: {
    title: 'Contact World Media NCR | Advertising Agency in Meerut',
    description: 'Get free quotes and prime location availability for hoarding advertising, digital wall painting, and billboards in Meerut and NCR.',
    url: 'https://worldmediancr.com/contact',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/website/herobg2.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://worldmediancr.com' },
          { name: 'Contact', url: 'https://worldmediancr.com/contact' },
        ]}
      />
      <ContactSection />
    </main>
  );
}