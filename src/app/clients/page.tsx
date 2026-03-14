// src/app/clients/page.tsx
import { Metadata } from 'next';
import ClientsSection from "@/components/ClientsSection";

export const metadata: Metadata = {
  title: 'Our Clients | Trusted Advertising Partners in Meerut | World Media NCR',
  description: 'Leading brands and businesses that trust World Media NCR for their outdoor advertising needs in Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat & NCR.',
  keywords: 'advertising clients meerut, hoarding clients, wall painting customers, outdoor advertising partners, brands in meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/clients',
  },
};

export default function ClientsPage() {
  return (
    <main>
      <ClientsSection />
    </main>
  );
}