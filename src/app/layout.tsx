import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "World Media - Premier Advertising Solutions",
  description:
    "World Media offers innovative advertising solutions including hoardings, billboards, vehicle branding, LED displays, and digital marketing services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-white`} // added bg-white
      >
        <Navbar />
        {/* Added pt-16 so content doesn’t hide under fixed navbar */}
        <main className="flex-1 w-full pt-16">{children}</main>
        <CtaSection />
        <Analytics />
      </body>
    </html>
  );
}
