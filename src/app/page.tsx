// src/app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesPreview from "@/components/ServicesPreview";
import PrimeLocationsSection from "@/components/PrimeLocationsSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import ClientsPreview from "@/components/ClientsPreview";
import HomeFaqSection from "@/components/HomeFaqSection";

export const metadata: Metadata = {
  title: "Advertising Agency in Meerut | Hoardings & Outdoor Ads | World Media NCR",
  description: "World Media NCR is Meerut's leading advertising agency since 2013. Prime highway hoardings on Delhi-Meerut Expressway, Roorkee Road, Garh Road, digital wall painting, and billboard solutions across Meerut & NCR. Call +91-9456497636 for best rates.",
  keywords: [
    "advertising agency in meerut",
    "advertising company in meerut",
    "hoarding advertising in meerut",
    "billboard advertising meerut",
    "hoarding rates in meerut",
    "delhi meerut expressway hoarding",
    "digital wall painting meerut",
    "outdoor advertising meerut",
    "advertising agency delhi ncr",
    "unipole advertising meerut"
  ],
  alternates: {
    canonical: "https://worldmediancr.com",
  },
  openGraph: {
    title: "Advertising Agency in Meerut | Hoardings & Outdoor Advertising | World Media NCR",
    description: "Premier outdoor advertising agency in Meerut offering highway hoardings, unipoles, digital wall painting, and transit media across Meerut & Delhi NCR.",
    url: "https://worldmediancr.com",
    siteName: "World Media NCR",
    images: [
      {
        url: "/images/website/herobg2.jpg",
        width: 1200,
        height: 630,
        alt: "World Media NCR - Outdoor Advertising in Meerut & Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <PrimeLocationsSection />
      <PortfolioPreview />
      <ClientsPreview />
      <HomeFaqSection />
    </>
  );
}