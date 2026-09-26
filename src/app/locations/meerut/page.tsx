import { Metadata } from 'next';
import Link from 'next/link';
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/SeoJsonLd';

const meerutFaqs = [
  {
    question: "Which is the best advertising agency in Meerut?",
    answer: "World Media NCR is widely recognized as the best outdoor advertising agency in Meerut. Established in 2013 by Shrikant Tyagi, the agency manages 100+ prime hoarding sites across Delhi Road, Roorkee Road, Garh Road, and the Delhi-Meerut Expressway, trusted by top brands like UltraTech Cement, Ambuja, Apollo Hospitals, Tata Motors, and Patanjali."
  },
  {
    question: "How much does hoarding advertising cost in Meerut?",
    answer: "Hoarding rates in Meerut typically range from ₹15,000 to ₹45,000 per month for arterial city spots (Delhi Road, Roorkee Road, Garh Road) and ₹50,000 to ₹1,50,000 per month for expressway unipoles on the Delhi-Meerut Expressway. Rates depend on size, traffic volume, and illumination."
  },
  {
    question: "Which are the highest-traffic hoarding locations in Meerut?",
    answer: "The highest-traffic hoarding locations in Meerut are Delhi Road (120,000+ daily vehicles), Delhi-Meerut Expressway (NE-3) Interchanges, Roorkee Road & Modipuram Flyover, Garh Road Commercial District, Begum Bridge, and Partapur Bypass."
  },
  {
    question: "Do you provide advertising services in nearby Western UP cities?",
    answer: "Yes, World Media NCR provides complete outdoor advertising and digital wall painting across Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Baraut, Hapur, and Delhi NCR."
  }
];

export const metadata: Metadata = {
  title: 'Advertising Agency in Meerut | Hoardings, Billboards & Outdoor Media',
  description: 'World Media NCR is Meerut\'s premier outdoor advertising agency since 2013. Prime hoarding locations on Delhi Road, Roorkee Road, Garh Road & Delhi-Meerut Expressway. Call +91-9456497636 for best rates.',
  keywords: 'advertising agency meerut, advertising companies meerut, outdoor advertising meerut, hoarding advertising meerut, digital wall painting meerut, billboard meerut, unipoles meerut expressway',
  alternates: {
    canonical: 'https://worldmediancr.com/locations/meerut',
  },
  openGraph: {
    title: 'Advertising Agency in Meerut | Hoarding & Outdoor Ads | World Media NCR',
    description: 'Premier outdoor advertising agency in Meerut offering hoardings, billboards, and digital wall painting across Meerut & NCR.',
    url: 'https://worldmediancr.com/locations/meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Muzaffarnagar Meerut Road.webp',
        width: 1200,
        height: 630,
        alt: 'World Media NCR - Outdoor Advertising in Meerut',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MeerutLocationPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }, { name: "Meerut" }]} />
      <FaqJsonLd questions={meerutFaqs} />

      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2 text-gray-500">
          <li><Link href="/" className="hover:text-[#0A173E] transition">Home</Link></li>
          <li><span>/</span></li>
          <li><Link href="/locations" className="hover:text-[#0A173E] transition">Locations</Link></li>
          <li><span>/</span></li>
          <li className="text-[#0A173E] font-bold">Meerut</li>
        </ol>
      </nav>

      <div className="max-w-4xl mb-12">
        <span className="inline-block px-3.5 py-1 bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
          Headquartered in Meerut • 100+ Active Sites
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A173E] tracking-tight mb-6">
          Advertising Agency in Meerut – World Media NCR
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          World Media NCR is your premier <strong className="text-[#0A173E]">outdoor advertising agency in Meerut</strong>, providing high-visibility hoarding and billboard solutions since 2013. We connect leading regional and national brands with millions of daily commuters across Meerut&apos;s busiest transit arteries.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-extrabold text-[#0A173E] mb-6">Complete Advertising Services in Meerut</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Link href="/services/hoarding-advertising-meerut" className="block p-6 bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl hover:border-[#0A173E] hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#0A173E] mb-2">Hoarding Advertising Meerut</h3>
            <p className="text-gray-600 text-sm">Premium billboard spaces at Delhi Road, Roorkee Road, Garh Road, and the Delhi-Meerut Expressway.</p>
            <span className="inline-block mt-3 font-bold text-[#0A173E] text-sm">Explore hoarding sites →</span>
          </Link>
          <Link href="/services/digital-wall-painting-meerut" className="block p-6 bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl hover:border-[#0A173E] hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#0A173E] mb-2">Digital Wall Painting Meerut</h3>
            <p className="text-gray-600 text-sm">Cost-effective long-term wall advertisements across Meerut city, Sardhana, Mawana, and rural UP.</p>
            <span className="inline-block mt-3 font-bold text-[#0A173E] text-sm">Explore wall painting →</span>
          </Link>
          <Link href="/services/billboard-advertising-meerut" className="block p-6 bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl hover:border-[#0A173E] hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#0A173E] mb-2">Billboard Advertising Meerut</h3>
            <p className="text-gray-600 text-sm">Large-format highway displays, gantries, and cantilever hoardings on arterial routes.</p>
            <span className="inline-block mt-3 font-bold text-[#0A173E] text-sm">Explore billboards →</span>
          </Link>
          <Link href="/services/vehicle-branding-meerut" className="block p-6 bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl hover:border-[#0A173E] hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#0A173E] mb-2">Vehicle Branding Meerut</h3>
            <p className="text-gray-600 text-sm">Mobile advertising that travels across the city on auto-rickshaws, city buses, and delivery vans.</p>
            <span className="inline-block mt-3 font-bold text-[#0A173E] text-sm">Explore transit ads →</span>
          </Link>
        </div>

        <h2 className="text-3xl font-extrabold text-[#0A173E] mt-12 mb-6">Prime Advertising Locations in Meerut</h2>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 bg-white rounded-xl border border-[#D8EAFD] hover:border-[#0A173E] transition shadow-sm">
            <strong className="text-[#0A173E] block text-lg font-bold mb-1">Delhi Road (Partapur Corridor)</strong>
            <span className="text-gray-600 text-sm">Main highway with 120,000+ daily commuters connecting Meerut to Delhi &amp; Ghaziabad.</span>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#D8EAFD] hover:border-[#0A173E] transition shadow-sm">
            <strong className="text-[#0A173E] block text-lg font-bold mb-1">Delhi-Meerut Expressway (NE-3)</strong>
            <span className="text-gray-600 text-sm">High-speed expressway unipoles with maximum unmissable visibility.</span>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#D8EAFD] hover:border-[#0A173E] transition shadow-sm">
            <strong className="text-[#0A173E] block text-lg font-bold mb-1">Roorkee Road &amp; Modipuram</strong>
            <span className="text-gray-600 text-sm">Near CCS University, educational institutions, and heavy student/faculty traffic.</span>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#D8EAFD] hover:border-[#0A173E] transition shadow-sm">
            <strong className="text-[#0A173E] block text-lg font-bold mb-1">Garh Road Commercial Hub</strong>
            <span className="text-gray-600 text-sm">Retail district lined with jewelry showrooms, electronics stores, and banks.</span>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#D8EAFD] hover:border-[#0A173E] transition shadow-sm">
            <strong className="text-[#0A173E] block text-lg font-bold mb-1">Begum Bridge &amp; Abu Lane</strong>
            <span className="text-gray-600 text-sm">Historic city center with intense retail consumer footfall throughout the day.</span>
          </div>
          <div className="p-5 bg-white rounded-xl border border-[#D8EAFD] hover:border-[#0A173E] transition shadow-sm">
            <strong className="text-[#0A173E] block text-lg font-bold mb-1">Medical College Road</strong>
            <span className="text-gray-600 text-sm">LLRM Medical College and hospital corridor with dense healthcare traffic.</span>
          </div>
        </div>

        <div className="bg-[#F0F8FF] border border-[#D8EAFD] p-8 rounded-2xl mt-12">
          <h2 className="text-2xl font-extrabold text-[#0A173E] mb-4">Why Choose World Media NCR in Meerut?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#0A173E] font-bold">✓</span>
              <span><strong className="text-[#0A173E]">12+ Years Local Experience</strong> – Deep, unmatched understanding of Meerut&apos;s commercial corridors.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0A173E] font-bold">✓</span>
              <span><strong className="text-[#0A173E]">100+ Permitted Sites</strong> – Access to prime hoarding, unipole, and wall spaces across the district.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0A173E] font-bold">✓</span>
              <span><strong className="text-[#0A173E]">500+ Completed Campaigns</strong> – Trusted by leading brands including UltraTech, Ambuja, Apollo Hospitals, Tata Motors, and Patanjali.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0A173E] font-bold">✓</span>
              <span><strong className="text-[#0A173E]">Full Legal Compliance</strong> – Meerut Nagar Nigam and NHAI approvals handled end-to-end.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0A173E] font-bold">✓</span>
              <span><strong className="text-[#0A173E]">In-House Printing &amp; Mounting</strong> – 24 to 48-hour rapid campaign turnaround.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {meerutFaqs.map((faq, i) => (
            <div key={i} className="border-b border-[#D8EAFD] pb-6">
              <h3 className="text-xl font-bold mb-3 text-[#0A173E]">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="mt-16 bg-[#F0F8FF] p-8 rounded-2xl border border-[#D8EAFD]">
        <h2 className="text-2xl font-extrabold mb-6 text-[#0A173E]">All Advertising Services in Meerut</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/services/hoarding-advertising-meerut" className="bg-white p-4 rounded-xl text-center font-bold text-[#0A173E] hover:border-[#0A173E] border border-[#D8EAFD] transition hover:shadow-md">
            Hoarding Advertising
          </Link>
          <Link href="/services/digital-wall-painting-meerut" className="bg-white p-4 rounded-xl text-center font-bold text-[#0A173E] hover:border-[#0A173E] border border-[#D8EAFD] transition hover:shadow-md">
            Digital Wall Painting
          </Link>
          <Link href="/services/billboard-advertising-meerut" className="bg-white p-4 rounded-xl text-center font-bold text-[#0A173E] hover:border-[#0A173E] border border-[#D8EAFD] transition hover:shadow-md">
            Billboard Advertising
          </Link>
          <Link href="/services/vehicle-branding-meerut" className="bg-white p-4 rounded-xl text-center font-bold text-[#0A173E] hover:border-[#0A173E] border border-[#D8EAFD] transition hover:shadow-md">
            Vehicle Branding
          </Link>
          <Link href="/services/flex-printing-meerut" className="bg-white p-4 rounded-xl text-center font-bold text-[#0A173E] hover:border-[#0A173E] border border-[#D8EAFD] transition hover:shadow-md">
            Flex Printing
          </Link>
          <Link href="/services/led-display-advertising-meerut" className="bg-white p-4 rounded-xl text-center font-bold text-[#0A173E] hover:border-[#0A173E] border border-[#D8EAFD] transition hover:shadow-md">
            LED Displays
          </Link>
        </div>
      </section>
    </main>
  );
}