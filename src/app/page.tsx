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
  title: "Best Advertising Agency in Meerut | Top Hoardings, Billboards & Outdoor Media | World Media NCR",
  description: "World Media NCR is the best advertising agency in Meerut & top outdoor media company since 2013. Prime highway hoardings on Delhi-Meerut Expressway, Roorkee Road, Garh Road, digital wall painting, and billboard solutions across Meerut & NCR. Call +91-9456497636 for best rates.",
  keywords: [
    "best advertising agency in meerut",
    "top advertising agency in meerut",
    "advertising agency in meerut",
    "best hoarding advertising meerut",
    "top billboard company meerut",
    "advertising company in meerut",
    "hoarding advertising in meerut",
    "billboard advertising meerut",
    "hoarding rates in meerut",
    "delhi meerut expressway hoarding",
    "digital wall painting meerut",
    "outdoor advertising meerut",
    "best outdoor advertising company meerut",
    "advertising agency delhi ncr",
    "unipole advertising meerut",
    "best hoarding board in meerut"
  ],
  alternates: {
    canonical: "https://worldmediancr.com",
  },
  openGraph: {
    title: "Best Advertising Agency in Meerut | Top Hoardings & Outdoor Advertising | World Media NCR",
    description: "Premier outdoor advertising agency in Meerut offering highway hoardings, unipoles, digital wall painting, and transit media across Meerut & Delhi NCR.",
    url: "https://worldmediancr.com",
    siteName: "World Media NCR",
    images: [
      {
        url: "/images/website/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "World Media NCR - Best Advertising Agency in Meerut & Delhi NCR",
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