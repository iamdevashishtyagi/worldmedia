import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/SeoJsonLd';

const delhiFaqs = [
  {
    question: "Which is the best advertising agency in Delhi?",
    answer: "World Media NCR is a trusted advertising agency serving Delhi with 10+ years of experience, premium hoarding locations across all zones, and expertise in navigating Delhi's municipal permitting process."
  },
  {
    question: "How much does hoarding advertising cost in Delhi?",
    answer: "Hoarding costs in Delhi vary significantly based on location. Premium locations like Connaught Place, ITO, and Ring Road can range from ₹75,000 to ₹2,00,000+ per month. Other areas range from ₹30,000 to ₹75,000. Contact us for specific quotes."
  },
  {
    question: "What are the best hoarding locations in Delhi?",
    answer: "The best hoarding locations in Delhi include Ring Road (multiple points), ITO, Connaught Place, Delhi-Gurgaon Border, DND Flyway approach, and major markets like Rajouri Garden, Lajpat Nagar, and Karol Bagh."
  },
  {
    question: "Do you handle permits for Delhi hoardings?",
    answer: "Yes, we handle all necessary permits from MCD, NDMC, traffic police, and other authorities. Delhi has strict regulations, and we ensure your hoarding is 100% compliant and legally approved."
  },
  {
    question: "What sizes are available for Delhi hoardings?",
    answer: "We offer various sizes including 10x10 ft, 15x10 ft, 20x10 ft, 30x10 ft, and 40x10 ft. Size availability depends on location and local regulations."
  },
  {
    question: "How do I book advertising space in Delhi?",
    answer: "Call us at +91 94564 97636, email worldmediancr@gmail.com, or visit our contact page. We'll discuss your requirements, show available locations, provide a quote, and handle all permits and installation."
  }
];

export const metadata: Metadata = {
  title: 'Advertising Agency in Delhi | Hoarding & Outdoor Ads | World Media NCR',
  description: 'Premier advertising agency in Delhi offering hoarding advertising, billboard, and outdoor media services across all zones. 10+ years serving Delhi businesses. Get the best rates for advertising in Delhi.',
  keywords: 'advertising agency delhi, advertising companies delhi, outdoor advertising delhi, hoarding advertising delhi, billboard delhi, advertising in delhi, delhi hoardings, outdoor media delhi',
  alternates: {
    canonical: 'https://worldmediancr.com/locations/delhi',
  },
  openGraph: {
    title: 'Advertising Agency in Delhi | World Media NCR',
    description: 'Premier advertising agency in Delhi offering hoarding, billboard, and outdoor media services across all zones.',
    url: 'https://worldmediancr.com/locations/delhi',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Muzaffarnagar Meerut Road.webp',
        width: 1200,
        height: 630,
        alt: 'World Media NCR - Outdoor Hoarding Media in Delhi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DelhiLocationPage() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }, { name: "Delhi" }]} />
      <FaqJsonLd questions={delhiFaqs} />
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">

        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-700 hover:text-[#0A173E]">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/locations" className="text-gray-700 hover:text-[#0A173E]">Locations</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Delhi</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <span className="inline-block px-3.5 py-1 bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            National Capital Territory
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A173E] tracking-tight">
            Advertising Agency in Delhi – World Media NCR
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong className="text-[#0A173E]">World Media NCR</strong> is your trusted <strong className="text-[#0A173E]">outdoor advertising agency in Delhi</strong>, providing comprehensive hoarding, transit, and billboard advertising solutions across the capital. We connect leading brands with high-spending urban audiences through strategic media placements.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            From high-impact <strong className="text-[#0A173E]">hoarding advertising on Ring Road & Outer Ring Road</strong> to <strong className="text-[#0A173E]">prime sites in Connaught Place, South Delhi, and arterial corridors</strong>, we cover all MCD and NDMC zones with full regulatory compliance.
          </p>
          <div className="bg-[#F0F8FF] border border-[#D8EAFD] p-6 rounded-2xl mt-4">
            <h2 className="text-xl font-bold mb-3 text-[#0A173E]">Why Choose Us for Delhi Advertising?</h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">10+ years</strong> executing outdoor campaigns for top national & regional brands</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">Prime inventory</strong> across South Delhi, Ring Road, ITO, and arterial bypasses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">100% compliant</strong> – all permissions handled with MCD, NDMC, and Traffic Police</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">Turnkey delivery</strong> – structural fabrication, flex printing, 24/7 illumination</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#D8EAFD] bg-gray-100 flex items-center justify-center">
          <Image src="/images/portfolio/Muzaffarnagar Meerut Road.webp" alt="Outdoor advertising hoarding in Delhi by World Media NCR" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>
      </div>

      {/* Delhi Zones Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Our Coverage Across Delhi Zones</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              zone: "North Delhi", 
              areas: "Civil Lines, Kamla Nagar, Model Town, Azadpur, Shalimar Bagh",
              roads: "GT Karnal Road, Ring Road, Outer Ring Road",
              key: "Educational hubs, commercial markets"
            },
            { 
              zone: "South Delhi", 
              areas: "Connaught Place, Khan Market, Saket, Malviya Nagar, Vasant Vihar",
              roads: "Aurobindo Marg, Ring Road, Mehrauli Road",
              key: "Premium commercial, diplomatic areas"
            },
            { 
              zone: "East Delhi", 
              areas: "Laxmi Nagar, Patparganj, Mayur Vihar, Preet Vihar",
              roads: "Vikas Marg, NH-9, Ring Road",
              key: "Residential hubs, commercial centers"
            },
            { 
              zone: "West Delhi", 
              areas: "Rajouri Garden, Punjabi Bagh, Tilak Nagar, Janakpuri",
              roads: "Outer Ring Road, Najafgarh Road",
              key: "Shopping districts, residential areas"
            },
            { 
              zone: "Central Delhi", 
              areas: "Daryaganj, Chandni Chowk, Karol Bagh, Paharganj",
              roads: "Minto Road, Mahatma Gandhi Marg",
              key: "Old Delhi markets, tourist areas"
            },
            { 
              zone: "New Delhi", 
              areas: "India Gate, Connaught Place, Chanakyapuri",
              roads: "Rajpath, Janpath, Sardar Patel Marg",
              key: "Government areas, diplomatic enclave"
            },
          ].map((zone, i) => (
            <div key={i} className="border border-[#D8EAFD] rounded-xl p-5 shadow-sm bg-white hover:border-[#0A173E] transition-colors">
              <h3 className="text-xl font-bold mb-2 text-[#0A173E]">{zone.zone}</h3>
              <p className="text-gray-700 text-sm mb-2"><span className="font-semibold text-gray-900">Areas:</span> {zone.areas}</p>
              <p className="text-gray-700 text-sm mb-2"><span className="font-semibold text-gray-900">Key roads:</span> {zone.roads}</p>
              <p className="text-[#0A173E] font-semibold text-sm">{zone.key}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prime Advertising Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Prime Hoarding Locations in Delhi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Connaught Place", area: "Central Delhi", traffic: "Ultra-high footfall", desc: "Delhi's premier commercial center" },
            { name: "Ring Road (Multiple Points)", area: "All Delhi", traffic: "200,000+ vehicles", desc: "Arterial road connecting all Delhi" },
            { name: "Outer Ring Road", area: "Delhi", traffic: "180,000+ vehicles", desc: "Major thoroughfare" },
            { name: "ITO", area: "Central Delhi", traffic: "150,000+ vehicles", desc: "Government offices, media houses" },
            { name: "Delhi-Gurgaon Border", area: "South Delhi", traffic: "200,000+ vehicles", desc: "Gateway to Gurgaon" },
            { name: "Delhi-Noida Direct Flyway", area: "East Delhi", traffic: "150,000+ vehicles", desc: "DND Flyway approach" },
            { name: "Akshardham Setu", area: "East Delhi", traffic: "100,000+ vehicles", desc: "Modern bridge connecting to Noida" },
            { name: "Rajouri Garden", area: "West Delhi", traffic: "High footfall", desc: "Shopping hub" },
            { name: "Lajpat Nagar", area: "South Delhi", traffic: "High footfall", desc: "Popular market" },
            { name: "Karol Bagh", area: "Central Delhi", traffic: "High footfall", desc: "Shopping district" },
            { name: "Chandni Chowk", area: "Old Delhi", traffic: "Ultra-high footfall", desc: "Historic market" },
            { name: "India Gate", area: "New Delhi", traffic: "Tourist-heavy", desc: "Iconic landmark" },
          ].map((location, i) => (
            <div key={i} className="border border-[#D8EAFD] rounded-xl p-5 shadow-sm bg-white hover:border-[#0A173E] transition-colors">
              <h3 className="text-lg font-bold mb-1 text-[#0A173E]">{location.name}</h3>
              <p className="text-[#0A173E] font-semibold text-sm mb-1">{location.area}</p>
              <p className="text-gray-700 text-sm mb-2">{location.traffic}</p>
              <p className="text-gray-600 text-sm">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services in Delhi */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Our Advertising Services in Delhi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/hoarding-advertising-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Hoarding Advertising Delhi</h3>
            <p className="text-gray-600 mb-3 text-sm">Premium hoarding placements across all Delhi zones – Ring Road, Outer Ring Road, commercial districts, and markets.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/billboard-advertising-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Billboard Advertising Delhi</h3>
            <p className="text-gray-600 mb-3 text-sm">Large-format billboards at high-traffic locations including ITO, Connaught Place, and Delhi borders.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/led-display-advertising-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">LED Display Advertising Delhi</h3>
            <p className="text-gray-600 mb-3 text-sm">Dynamic digital billboards with videos and rotating content at premium Delhi locations.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/vehicle-branding-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Vehicle Branding Delhi</h3>
            <p className="text-gray-600 mb-3 text-sm">Mobile advertising across Delhi with full fleet branding for maximum reach.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/flex-printing-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Flex Printing Delhi</h3>
            <p className="text-gray-600 mb-3 text-sm">High-quality flex printing for hoardings, banners, and event materials. Fast delivery across Delhi.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/political-advertising-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Political Advertising Delhi</h3>
            <p className="text-gray-600 mb-3 text-sm">Complete campaign solutions for Delhi elections – hoardings, banners, and promotional materials.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* About Delhi Market */}
      <section className="mb-16 bg-[#F0F8FF] border border-[#D8EAFD] p-8 rounded-2xl">
        <h2 className="text-3xl font-extrabold mb-6 text-[#0A173E]">About Advertising in Delhi</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Delhi, the capital of India, is one of the most important advertising markets in the country. With its massive population, high vehicle density, and concentration of businesses, government institutions, and tourists, Delhi offers unparalleled opportunities for outdoor advertising.
          </p>
          <p className="text-gray-700 mb-4">
            <strong className="text-[#0A173E]">Key facts about Delhi for advertisers:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Population:</strong> 20+ million (city) – 2nd largest city in India</li>
            <li><strong>Vehicle population:</strong> 10+ million vehicles – highest in India</li>
            <li><strong>Tourist traffic:</strong> Millions of domestic and international tourists annually</li>
            <li><strong>Commercial hubs:</strong> Connaught Place, Karol Bagh, Rajouri Garden, Lajpat Nagar</li>
            <li><strong>Government presence:</strong> Central and state government offices</li>
            <li><strong>Media capital:</strong> Headquarters of major media houses</li>
          </ul>
          <p className="text-gray-700">
            Outdoor advertising in Delhi reaches India&apos;s most influential and affluent audience. From policymakers and business leaders to tourists and the general public, your message gets seen by the right people.
          </p>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Advertising Regulations in Delhi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-[#D8EAFD] shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-[#0A173E]">Key Authorities</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">•</span>
                <span><strong>MCD</strong> – Municipal Corporation of Delhi (most areas)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">•</span>
                <span><strong>NDMC</strong> – New Delhi Municipal Council (Lutyens&apos; Delhi)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">•</span>
                <span><strong>Delhi Traffic Police</strong> – For locations affecting traffic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">•</span>
                <span><strong>PWD</strong> – For hoardings on PWD roads</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#D8EAFD] shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-[#0A173E]">Our Compliance Guarantee</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span>Complete permit handling for all authorities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span>Compliance with all Delhi hoarding bylaws</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span>Regular renewal of permissions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span>Hassle-free advertising experience</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which is the best advertising agency in Delhi?",
              a: "World Media NCR is a trusted advertising agency serving Delhi with 10+ years of experience, premium hoarding locations across all zones, and expertise in navigating Delhi's complex permitting process."
            },
            {
              q: "How much does hoarding advertising cost in Delhi?",
              a: "Hoarding costs in Delhi vary significantly based on location. Premium locations like Connaught Place, ITO, and Ring Road can range from ₹75,000 to ₹2,00,000+ per month. Other areas range from ₹30,000 to ₹75,000. Contact us for specific quotes."
            },
            {
              q: "What are the best hoarding locations in Delhi?",
              a: "The best hoarding locations in Delhi include Ring Road (multiple points), ITO, Connaught Place, Delhi-Gurgaon Border, DND Flyway approach, and major markets like Rajouri Garden, Lajpat Nagar, and Karol Bagh."
            },
            {
              q: "Do you handle permits for Delhi hoardings?",
              a: "Yes, we handle all necessary permits from MCD, NDMC, traffic police, and other authorities. Delhi has strict regulations, and we ensure your hoarding is 100% compliant and legally approved."
            },
            {
              q: "What sizes are available for Delhi hoardings?",
              a: "We offer various sizes including 10x10 ft, 15x10 ft, 20x10 ft, 30x10 ft, and 40x10 ft. Size availability depends on location and local regulations."
            },
            {
              q: "How do I book advertising space in Delhi?",
              a: "Call us at +91 94564 97636, email worldmediancr@gmail.com, or visit our contact page. We'll discuss your requirements, show available locations, provide a quote, and handle all permits and installation."
            }
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-[#0A173E]">{faq.q}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="mb-16 bg-[#F0F8FF] border border-[#D8EAFD] p-8 rounded-2xl">
        <h2 className="text-2xl font-extrabold mb-6 text-[#0A173E]">Our Other Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/meerut" className="text-[#0A173E] font-semibold hover:underline">Meerut</Link>
          <Link href="/locations/muzaffarnagar" className="text-[#0A173E] font-semibold hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-[#0A173E] font-semibold hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-[#0A173E] font-semibold hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-[#0A173E] font-semibold hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-ncr" className="text-[#0A173E] font-semibold hover:underline">Delhi NCR</Link>
          <Link href="/locations/hapur" className="text-[#0A173E] font-semibold hover:underline">Hapur</Link>
        </div>
      </section>
    </main>
  );
}
