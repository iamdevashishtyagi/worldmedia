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
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white text-slate-900">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }, { name: "Meerut" }]} />
      <FaqJsonLd questions={meerutFaqs} />

      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2 text-slate-500">
          <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><span>/</span></li>
          <li><Link href="/locations" className="hover:text-blue-600 transition">Locations</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium">Meerut</li>
        </ol>
      </nav>

      <div className="max-w-4xl mb-12">
        <span className="inline-block px-3.5 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
          Headquartered in Meerut • 100+ Active Sites
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
          Advertising Agency in Meerut – World Media NCR
        </h1>
        <p className="text-xl text-slate-700 leading-relaxed">
          World Media NCR is your trusted <strong>advertising agency in Meerut</strong>, providing comprehensive outdoor advertising solutions since 2013. We specialize in helping Meerut-based businesses and national brands reach millions of daily commuters through strategic hoarding and billboard placements.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-slate-800 mb-16">
        <h2 className="text-3xl font-bold text-slate-950 mb-6">Complete Advertising Services in Meerut</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <Link href="/services/hoarding-advertising-meerut" className="block p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-yellow-500 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-slate-950 mb-2">Hoarding Advertising Meerut</h3>
            <p className="text-slate-600">Premium billboard spaces at Delhi Road, Roorkee Road, Garh Road, and the Delhi-Meerut Expressway.</p>
            <span className="inline-block mt-3 font-semibold text-blue-600 text-sm">Explore hoarding sites →</span>
          </Link>
          <Link href="/services/digital-wall-painting-meerut" className="block p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-yellow-500 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-slate-950 mb-2">Digital Wall Painting Meerut</h3>
            <p className="text-slate-600">Cost-effective long-term wall advertisements across Meerut city, Sardhana, Mawana, and rural UP.</p>
            <span className="inline-block mt-3 font-semibold text-blue-600 text-sm">Explore wall painting →</span>
          </Link>
          <Link href="/services/billboard-advertising-meerut" className="block p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-yellow-500 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-slate-950 mb-2">Billboard Advertising Meerut</h3>
            <p className="text-slate-600">Large-format highway displays, gantries, and cantilever hoardings on arterial routes.</p>
            <span className="inline-block mt-3 font-semibold text-blue-600 text-sm">Explore billboards →</span>
          </Link>
          <Link href="/services/vehicle-branding-meerut" className="block p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-yellow-500 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-slate-950 mb-2">Vehicle Branding Meerut</h3>
            <p className="text-slate-600">Mobile advertising that travels across the city on auto-rickshaws, city buses, and delivery vans.</p>
            <span className="inline-block mt-3 font-semibold text-blue-600 text-sm">Explore transit ads →</span>
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-slate-950 mt-12 mb-6">Prime Advertising Locations in Meerut</h2>
        <ul className="grid sm:grid-cols-2 gap-3 list-none pl-0 not-prose my-6">
          <li className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block text-lg">Delhi Road (Partapur Corridor)</strong>
            <span className="text-slate-600 text-sm">Main highway with 120,000+ daily commuters connecting Meerut to Delhi &amp; Ghaziabad.</span>
          </li>
          <li className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block text-lg">Delhi-Meerut Expressway (NE-3)</strong>
            <span className="text-slate-600 text-sm">High-speed expressway unipoles with maximum unmissable visibility.</span>
          </li>
          <li className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block text-lg">Roorkee Road &amp; Modipuram</strong>
            <span className="text-slate-600 text-sm">Near CCS University, educational institutions, and heavy student/faculty traffic.</span>
          </li>
          <li className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block text-lg">Garh Road Commercial Hub</strong>
            <span className="text-slate-600 text-sm">Retail district lined with jewelry showrooms, electronics stores, and banks.</span>
          </li>
          <li className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block text-lg">Begum Bridge &amp; Abu Lane</strong>
            <span className="text-slate-600 text-sm">Historic city center with intense retail consumer footfall throughout the day.</span>
          </li>
          <li className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block text-lg">Medical College Road</strong>
            <span className="text-slate-600 text-sm">LLRM Medical College and hospital corridor with dense healthcare traffic.</span>
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-slate-950 mt-12 mb-6">Why Choose World Media NCR in Meerut?</h2>
        <ul className="space-y-3 pl-6">
          <li><strong>12+ Years Local Experience</strong> – Deep, unmatched understanding of Meerut&apos;s commercial corridors.</li>
          <li><strong>100+ Permitted Sites</strong> – Access to the best hoarding, unipole, and wall spaces across the district.</li>
          <li><strong>500+ Completed Campaigns</strong> – Trusted by leading brands including UltraTech, Ambuja, Apollo Hospitals, Tata Motors, and Patanjali.</li>
          <li><strong>Full Legal Compliance</strong> – Meerut Nagar Nigam and NHAI approvals handled end-to-end.</li>
          <li><strong>In-House Printing &amp; Mounting</strong> – 24 to 48-hour rapid campaign turnaround.</li>
        </ul>
      </div>

      {/* FAQs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-slate-950">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {meerutFaqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-200 pb-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{faq.question}</h3>
              <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-950">All Advertising Services in Meerut</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/services/hoarding-advertising-meerut" className="bg-white p-4 rounded-xl text-center font-semibold text-slate-900 hover:border-yellow-500 border transition hover:shadow-sm">
            Hoarding Advertising
          </Link>
          <Link href="/services/digital-wall-painting-meerut" className="bg-white p-4 rounded-xl text-center font-semibold text-slate-900 hover:border-yellow-500 border transition hover:shadow-sm">
            Digital Wall Painting
          </Link>
          <Link href="/services/billboard-advertising-meerut" className="bg-white p-4 rounded-xl text-center font-semibold text-slate-900 hover:border-yellow-500 border transition hover:shadow-sm">
            Billboard Advertising
          </Link>
          <Link href="/services/vehicle-branding-meerut" className="bg-white p-4 rounded-xl text-center font-semibold text-slate-900 hover:border-yellow-500 border transition hover:shadow-sm">
            Vehicle Branding
          </Link>
          <Link href="/services/flex-printing-meerut" className="bg-white p-4 rounded-xl text-center font-semibold text-slate-900 hover:border-yellow-500 border transition hover:shadow-sm">
            Flex Printing
          </Link>
          <Link href="/services/led-display-advertising-meerut" className="bg-white p-4 rounded-xl text-center font-semibold text-slate-900 hover:border-yellow-500 border transition hover:shadow-sm">
            LED Displays
          </Link>
        </div>
      </section>
    </main>
  );
}