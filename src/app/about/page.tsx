// src/app/about/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Premier Advertising Agency in Meerut | World Media NCR',
  description: 'World Media NCR has been Meerut\'s leading outdoor advertising agency since 2013. Led by Shrikant Tyagi, we manage 100+ premium highway hoardings, digital wall painting, and transit media across Meerut, Delhi NCR & Western UP.',
  keywords: 'about world media ncr, advertising agency meerut about, shrikant tyagi meerut, outdoor advertising company meerut history, hoarding contractors UP',
  alternates: {
    canonical: 'https://worldmediancr.com/about',
  },
  openGraph: {
    title: 'About World Media NCR | Leading Advertising Agency in Meerut',
    description: 'Learn about World Media NCR, Meerut\'s premier outdoor advertising agency since 2013 led by Shrikant Tyagi.',
    url: 'https://worldmediancr.com/about',
    images: [{ url: '/images/website/profilepic.webp', width: 800, height: 800, alt: 'Shrikant Tyagi - Founder World Media NCR' }],
  }
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Schema markup for leadership and organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "AdvertisingAgency",
              "name": "World Media NCR",
              "url": "https://worldmediancr.com",
              "foundingDate": "2013",
              "founder": {
                "@type": "Person",
                "name": "Shrikant Tyagi",
                "jobTitle": "Founder & CEO",
                "image": "https://worldmediancr.com/images/website/profilepic.webp",
                "description": "Visionary entrepreneur with over a decade of leadership in outdoor and highway advertising across Uttar Pradesh."
              },
              "areaServed": ["Meerut", "Delhi NCR", "Muzaffarnagar", "Shamli", "Saharanpur", "Baghpat", "Hapur"]
            }
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2 text-slate-500">
            <li><Link href="/" className="hover:text-[#0A173E] transition">Home</Link></li>
            <li><span>/</span></li>
            <li className="text-slate-800 font-medium">About Us</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A173E] mb-6">
            Meerut&apos;s Leading Outdoor Advertising &amp; Hoarding Agency
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            For over 12 years, World Media NCR has helped regional businesses and top national brands dominate public visibility across Western Uttar Pradesh and the National Capital Region.
          </p>
        </div>

        {/* Founder & Mission Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-20">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <Image
                src="/images/website/profilepic.webp"
                alt="Shrikant Tyagi - Founder & CEO of World Media NCR"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-2xl">Shrikant Tyagi</p>
                  <p className="text-yellow-500 font-semibold text-sm">Founder &amp; CEO, World Media NCR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-slate-700 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-[#0A173E]">
              Transforming Brands Through Strategic Outdoor Placement
            </h2>
            <p>
              World Media NCR was founded in 2013 in Meerut with a singular mission: to provide high-impact, transparent, and legally compliant outdoor media infrastructure that gives brands unmissable daily exposure.
            </p>
            <p>
              From towering unipoles along the <strong>Delhi-Meerut Expressway</strong> to high-density arterial hoardings on <strong>Delhi Road, Roorkee Road, and Garh Road</strong>, our media assets are positioned where key purchase decisions happen.
            </p>
            <p>
              Beyond traditional billboards, we pioneered large-scale <strong>digital wall painting campaigns</strong> spanning hundreds of villages and towns across Western UP, delivering unmatched rural and semi-urban reach for FMCG, educational institutions, real estate, and healthcare leaders.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] font-bold px-8 py-3.5 rounded-xl transition shadow-md hover:scale-105">
                Contact Our Team
              </Link>
              <Link href="/gallery" className="border-2 border-[#0A173E] text-[#0A173E] hover:bg-[#0A173E] hover:text-white font-bold px-8 py-3.5 rounded-xl transition hover:scale-105">
                Explore Hoarding Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Key Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-[#F0F8FF] border border-[#D8EAFD]">
            <div className="text-3xl font-bold text-[#0A173E] mb-3">100+</div>
            <h3 className="text-xl font-bold text-[#0A173E] mb-2">Prime Hoarding Sites</h3>
            <p className="text-slate-600">Strategic positions on national highways, expressway interchanges, and primary city market hubs.</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#F0F8FF] border border-[#D8EAFD]">
            <div className="text-3xl font-bold text-[#0A173E] mb-3">500+</div>
            <h3 className="text-xl font-bold text-[#0A173E] mb-2">Successful Campaigns</h3>
            <p className="text-slate-600">Trusted by blue-chip leaders like UltraTech, Ambuja, Apollo Hospitals, Tata Motors, and Patanjali.</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#F0F8FF] border border-[#D8EAFD]">
            <div className="text-3xl font-bold text-[#0A173E] mb-3">8+ Districts</div>
            <h3 className="text-xl font-bold text-[#0A173E] mb-2">Complete NCR &amp; UP Coverage</h3>
            <p className="text-slate-600">Active media assets in Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, Delhi, and Noida.</p>
          </div>
        </div>

        {/* Services Overview - Dark Premium Navy Blue Background */}
        <div className="bg-[#0A173E] text-white rounded-3xl p-8 md:p-12 mb-16 border border-[#182859] shadow-xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Complete Outdoor Advertising Suite</h2>
            <p className="text-blue-100 text-lg mb-8">
              From creative graphic design and wide-format flex printing to structural mounting and round-the-clock maintenance, we provide end-to-end execution.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Highway Hoardings & Unipoles", href: "/services/hoarding-advertising-meerut" },
                { name: "Digital Wall Painting (Urban & Rural)", href: "/services/digital-wall-painting-meerut" },
                { name: "Billboard Advertising", href: "/services/billboard-advertising-meerut" },
                { name: "Commercial Vehicle Fleet Branding", href: "/services/vehicle-branding-meerut" },
                { name: "High-Resolution Flex Printing", href: "/services/flex-printing-meerut" },
                { name: "Digital OOH & LED Screens", href: "/services/led-display-advertising-meerut" },
              ].map((svc, i) => (
                <Link key={i} href={svc.href} className="flex items-center gap-2 text-white hover:text-[var(--yellow)] font-semibold transition">
                  <span className="text-[var(--yellow)]">→</span>
                  <span>{svc.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
