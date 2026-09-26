import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import MobileQuickBar from "@/components/MobileQuickBar";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://worldmediancr.com"),
  title: {
    default: "Best Advertising Agency in Meerut | Top Hoarding & Billboard Company | World Media NCR",
    template: "%s | Best Advertising Agency in Meerut | World Media NCR",
  },
  description: "Looking for the best advertising agency in Meerut? World Media NCR is the #1 outdoor advertising and hoarding company since 2013. Specializing in prime highway billboards, Delhi-Meerut Expressway unipoles, digital wall painting, vehicle branding, and transit ads. Call +91-9456497636 for best rates.",
  keywords: [
    "best advertising agency in meerut",
    "top advertising agency in meerut",
    "advertising agency in meerut",
    "best hoarding advertising meerut",
    "top billboard company meerut",
    "best outdoor advertising company meerut",
    "hoarding advertising meerut",
    "billboard advertising meerut",
    "digital wall painting meerut",
    "outdoor advertising meerut",
    "advertising agency delhi ncr",
    "top advertising agency delhi ncr",
    "best advertising agency near me",
    "hoarding rates in meerut",
    "delhi meerut expressway hoarding",
    "unipole advertising meerut expressway",
    "vehicle branding meerut",
    "flex printing meerut",
    "led display advertising meerut",
    "hoarding board in meerut",
    "best outdoor media company western up",
    "ooh advertising agency meerut"
  ],
  authors: [{ name: "World Media NCR" }],
  creator: "World Media NCR",
  publisher: "World Media NCR",
  icons: {
    icon: "/images/website/logo2.png",
    apple: "/images/website/logo2.png",
  },
  openGraph: {
    title: "Best Advertising Agency in Meerut | Top Hoarding & Billboard Company | World Media NCR",
    description: "World Media NCR is Meerut's premier outdoor advertising agency since 2013. Prime highway hoardings, unipoles, digital wall painting, and transit media across Meerut & Delhi NCR.",
    url: "https://worldmediancr.com",
    siteName: "World Media NCR",
    images: [
      {
        url: "/images/website/herobg2.jpg",
        width: 1200,
        height: 630,
        alt: "World Media NCR - Best Outdoor Advertising Agency in Meerut",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Advertising Agency in Meerut | World Media NCR",
    description: "Premier outdoor advertising, hoardings, unipoles and digital wall painting in Meerut & Delhi NCR.",
    images: ["/images/website/herobg2.jpg"],
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
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Meerut",
    "geo.position": "28.988531;77.706077",
    "ICBM": "28.988531, 77.706077",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-slate-900 pb-16 md:pb-0`}>
        <Navbar />
        <main className="flex-1 w-full pt-16">{children}</main>
        <CtaSection />
        <SiteFooter />
        <MobileQuickBar />
        <Analytics />
        <JsonLd />
        <SpeedInsights />
      </body>
    </html>
  );
}
