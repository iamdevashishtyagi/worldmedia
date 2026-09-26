import { Metadata } from 'next';
import ContactSection from "@/components/ContactSection";
import { BreadcrumbJsonLd } from '@/components/SeoJsonLd';

export const metadata: Metadata = {
  title: 'Contact Best Advertising Agency in Meerut | World Media NCR',
  description: 'Contact World Media NCR, the best advertising agency in Meerut. Get free quotes, site availability, and rate cards for highway hoardings, billboards, and digital wall painting in Meerut & NCR. Call +91-9456497636.',
  keywords: 'contact advertising agency meerut, best advertising agency in meerut, top advertising company meerut contact, hoarding advertising inquiry, wall painting services contact, outdoor advertising meerut rates',
  alternates: {
    canonical: 'https://worldmediancr.com/contact',
  },
  openGraph: {
    title: 'Contact Best Advertising Agency in Meerut | World Media NCR',
    description: 'Get free quotes and prime location availability for hoarding advertising, digital wall painting, and billboards in Meerut and NCR.',
    url: 'https://worldmediancr.com/contact',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/website/herobg2.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact World Media NCR - Best Advertising Agency in Meerut',
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