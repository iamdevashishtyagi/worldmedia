// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://worldmediancr.com"),
  title: {
    default: "Digital Wall Painting & Advertising in Meerut | World Media NCR",
    template: "%s | World Media NCR",
  },
  description:
    "Leading advertising company in Meerut offering digital wall painting, hoardings, billboards, and outdoor advertising solutions.",
  alternates: {
    canonical: "https://worldmediancr.com",
  },
  icons: {
    icon: "/images/website/logo2.png",
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
        {/* Added pt-16 so content doesn’t hide under fixed navbar */}
        <main className="flex-1 w-full pt-16">{children}</main>
        <CtaSection />
        <Analytics />
      </body>
    </html>
  );
}
