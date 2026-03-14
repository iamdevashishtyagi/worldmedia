// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://worldmediancr.com"),
  title: {
    default: "Advertising Agency in Meerut | Hoarding & Outdoor Advertising | World Media NCR",
    template: "%s | World Media NCR - Meerut's Leading Advertising Agency",
  },
  description: "World Media NCR is Meerut's premier advertising agency offering hoarding advertising, digital wall painting, billboard advertising, and outdoor media solutions across Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat & NCR. Get 20+ years of experience.",
  keywords: "advertising agency in meerut, hoarding advertising meerut, digital wall painting meerut, billboard advertising meerut, outdoor advertising meerut, vehicle branding meerut, flex printing meerut, led display advertising meerut",
  alternates: {
    canonical: "https://worldmediancr.com",
  },
  icons: {
    icon: "/images/website/logo2.png",
  },
  openGraph: {
    title: "Advertising Agency in Meerut | Hoarding & Outdoor Advertising",
    description: "Leading advertising agency in Meerut offering hoarding advertising, digital wall painting, and outdoor media solutions across NCR.",
    url: "https://worldmediancr.com",
    siteName: "World Media NCR",
    images: [
      {
        url: "/images/website/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertising Agency in Meerut | World Media NCR",
    description: "Leading advertising agency in Meerut offering hoarding, wall painting, and outdoor advertising.",
    images: ["/images/website/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        <Navbar />
        <main className="flex-1 w-full pt-16">{children}</main>
        <CtaSection />
        <Analytics />
        <JsonLd />
      </body>
    </html>
  );
}