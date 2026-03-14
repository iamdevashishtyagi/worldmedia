// src/app/contact/page.tsx
import { Metadata } from 'next';
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: 'Contact Us | Advertising Agency in Meerut | World Media NCR',
  description: 'Contact World Media NCR, the leading advertising agency in Meerut. Get quotes for hoarding advertising, digital wall painting, and outdoor media campaigns across Meerut & NCR.',
  keywords: 'contact advertising agency meerut, advertising company meerut contact, hoarding advertising inquiry, wall painting services contact, outdoor advertising meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}