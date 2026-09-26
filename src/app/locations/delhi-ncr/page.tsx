import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/SeoJsonLd';

const delhiNcrFaqs = [
  {
    question: "Which are the best locations for hoardings in Delhi NCR?",
    answer: "The best hoarding locations in Delhi NCR include Delhi-Meerut Expressway, Noida Expressway, Dwarka Expressway, NH-48, Eastern and Western Peripheral Highways. For city-specific visibility, MG Road (Gurgaon), Sector 18 (Noida), Raj Nagar (Ghaziabad), and Nehru Place (Delhi) are excellent."
  },
  {
    question: "How much does hoarding advertising cost in Delhi NCR?",
    answer: "Costs vary widely based on location. Expressway hoardings range from ₹50,000 to ₹1,50,000 per month. City locations range from ₹25,000 to ₹60,000 per month. Premium spots at airports and major intersections can cost more. Contact us for specific quotes."
  },
  {
    question: "Do you provide advertising in all NCR cities?",
    answer: "Yes, we provide advertising services across all NCR cities including Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, Faridabad, and all connecting highways and expressways."
  },
  {
    question: "What permits are required for hoardings in NCR?",
    answer: "Different NCR cities have different authorities (NDMC, MCD, GMDA, Noida Authority, etc.). We handle all necessary permits and ensure your hoarding is legally approved and compliant."
  },
  {
    question: "Do you offer illuminated hoardings?",
    answer: "Yes, we offer backlit and LED-illuminated hoardings for 24/7 visibility. Illuminated hoardings are particularly effective on expressways and highways."
  },
  {
    question: "How do I book advertising space in Delhi NCR?",
    answer: "Call us at +91 94564 97636, email worldmediancr@gmail.com, or visit our contact page. We'll discuss your requirements, show available locations, provide a quote, and handle all installation and permits."
  }
];

export const metadata: Metadata = {
  title: 'Advertising Agency in Delhi NCR | Hoarding & Outdoor Ads | World Media NCR',
  description: 'Premier advertising agency in Delhi NCR offering hoarding advertising, digital wall painting, billboard, and outdoor media services. 10+ years serving NCR businesses. Get the best rates for advertising in Delhi NCR.',
  keywords: 'advertising agency delhi ncr, advertising companies delhi ncr, outdoor advertising delhi ncr, hoarding advertising delhi ncr, digital wall painting delhi ncr, billboard delhi ncr, advertising in delhi ncr, noida advertising, ghaziabad advertising, gurgaon advertising',
  alternates: {
    canonical: 'https://worldmediancr.com/locations/delhi-ncr',
  },
  openGraph: {
    title: 'Advertising Agency in Delhi NCR | World Media NCR',
    description: 'Premier advertising agency in Delhi NCR offering hoarding, wall painting, billboard, and outdoor media services.',
    url: 'https://worldmediancr.com/locations/delhi-ncr',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Muzaffarnagar Shamli Road.webp',
        width: 1200,
        height: 630,
        alt: 'World Media NCR - Outdoor Advertising in Delhi NCR',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DelhiNcrLocationPage() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }, { name: "Delhi NCR" }]} />
      <FaqJsonLd questions={delhiNcrFaqs} />
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
              <span className="text-gray-500">Delhi NCR</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <span className="inline-block px-3.5 py-1 bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            NCR Outdoor Network
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A173E] tracking-tight">
            Advertising Agency in Delhi NCR – World Media NCR
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong className="text-[#0A173E]">World Media NCR</strong> is your trusted <strong className="text-[#0A173E]">outdoor advertising partner in Delhi NCR</strong>, providing comprehensive hoarding, digital billboard, and transit advertising solutions across the National Capital Region.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            From high-impact <strong className="text-[#0A173E]">hoarding advertising on Delhi-Meerut Expressway</strong> to <strong className="text-[#0A173E]">billboards in Noida, Ghaziabad, and Gurgaon</strong>, we secure high-ROI outdoor inventory with full compliance.
          </p>
          <div className="bg-[#F0F8FF] border border-[#D8EAFD] p-6 rounded-2xl mt-4">
            <h2 className="text-xl font-bold mb-3 text-[#0A173E]">Why Choose Us for Delhi NCR Advertising?</h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">10+ years</strong> serving leading Delhi NCR corporate & retail brands</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">Prime expressway sites</strong> on DME, Noida Expressway, and Peripheral Expressways</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">Pan-NCR reach</strong> – Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, Faridabad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">Turnkey delivery</strong> – Municipal permits, structural design, printing & mounting</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#D8EAFD] bg-gray-100 flex items-center justify-center">
          <Image src="/images/portfolio/Muzaffarnagar Shamli Road.webp" alt="Outdoor advertising campaign in Delhi NCR by World Media NCR" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>
      </div>

      {/* NCR Coverage Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Our Coverage in Delhi NCR</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              city: "Delhi", 
              areas: "North Delhi, South Delhi, East Delhi, West Delhi, Central Delhi",
              highways: "Ring Road, Outer Ring Road, NH-44, NH-48",
              key: "Premium locations across all Delhi zones"
            },
            { 
              city: "Gurgaon", 
              areas: "MG Road, Golf Course Road, Sohna Road, Cyber City, Dwarka Expressway",
              highways: "NH-48, Delhi-Jaipur Highway, Dwarka Expressway",
              key: "High corporate and commercial visibility"
            },
            { 
              city: "Noida", 
              areas: "Sector 18, Film City, Greater Noida Expressway, Noida-Greater Noida Road",
              highways: "Noida-Greater Noida Expressway, DND Flyway",
              key: "IT and corporate hub advertising"
            },
            { 
              city: "Ghaziabad", 
              areas: "Raj Nagar, Indirapuram, Vaishali, Kaushambi, Crossings Republik",
              highways: "NH-34, Delhi-Meerut Road, NH-9",
              key: "Residential and commercial mix"
            },
            { 
              city: "Faridabad", 
              areas: "Sector 21, Neharpar, Ballabhgarh, NH-44 Corridor",
              highways: "NH-44, Delhi-Mathura Highway",
              key: "Industrial and residential coverage"
            },
            { 
              city: "Delhi-Meerut Expressway", 
              areas: "From Nizamuddin Bridge to Meerut via Ghaziabad",
              highways: "India's widest expressway",
              key: "Premium highway hoarding locations"
            },
            { 
              city: "Eastern Peripheral Highway", 
              areas: "Kundli to Palwal via Ghaziabad, Faridabad",
              highways: "135 km expressway",
              key: "High-speed traffic exposure"
            },
            { 
              city: "Western Peripheral Highway", 
              areas: "Kundli to Palwal via Gurgaon, Manesar",
              highways: "135 km expressway",
              key: "Connecting all NCR cities"
            },
          ].map((area, i) => (
            <div key={i} className="border border-[#D8EAFD] rounded-xl p-5 shadow-sm bg-white hover:border-[#0A173E] transition-colors">
              <h3 className="text-xl font-bold mb-2 text-[#0A173E]">{area.city}</h3>
              <p className="text-[#0A173E] font-semibold text-sm mb-2">{area.key}</p>
              <p className="text-gray-600 text-sm mb-1"><span className="font-semibold text-gray-800">Areas:</span> {area.areas}</p>
              <p className="text-gray-600 text-sm"><span className="font-semibold text-gray-800">Highways:</span> {area.highways}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services in NCR */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Our Advertising Services in Delhi NCR</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/hoarding-advertising-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Hoarding Advertising NCR</h3>
            <p className="text-gray-600 mb-3 text-sm">Premium hoarding placements on all NCR highways, expressways, and city locations. Sizes from 10x10 to 40x20 ft.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/billboard-advertising-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Billboard Advertising NCR</h3>
            <p className="text-gray-600 mb-3 text-sm">Large-format billboards on Delhi-Meerut Expressway, Noida Expressway, and other major NCR highways.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/digital-wall-painting-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Wall Painting NCR</h3>
            <p className="text-gray-600 mb-3 text-sm">Cost-effective wall advertisements at high-visibility walls across NCR cities and industrial areas.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/led-display-advertising-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">LED Display NCR</h3>
            <p className="text-gray-600 mb-3 text-sm">Dynamic digital billboards with videos and rotating content at premium NCR locations.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/vehicle-branding-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Vehicle Branding NCR</h3>
            <p className="text-gray-600 mb-3 text-sm">Mobile advertising across NCR with full fleet branding for maximum reach.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/flex-printing-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Flex Printing NCR</h3>
            <p className="text-gray-600 mb-3 text-sm">High-quality flex printing for hoardings, banners, and event materials. Fast delivery across NCR.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Prime Highway Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Prime Highway Advertising Locations in NCR</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              highway: "Delhi-Meerut Expressway",
              traffic: "200,000+ vehicles daily",
              locations: "Nizamuddin Bridge, Ghaziabad, Dasna, Hapur Road Interchange, Meerut",
              highlights: "India's widest expressway, premium hoarding locations"
            },
            {
              highway: "Noida-Greater Noida Expressway",
              traffic: "150,000+ vehicles daily",
              locations: "Sector 18, Film City, Pari Chowk, Greater Noida",
              highlights: "Connects to IT hub, corporate offices"
            },
            {
              highway: "Dwarka Expressway",
              traffic: "120,000+ vehicles daily",
              locations: "Dwarka Sector 21, Gurgaon sectors, Kherki Daula",
              highlights: "Rapidly developing commercial corridor"
            },
            {
              highway: "NH-48 (Delhi-Jaipur Highway)",
              traffic: "180,000+ vehicles daily",
              locations: "Rajokri, IGI Airport, Manesar, KMP Interchange",
              highlights: "High corporate and airport traffic"
            },
            {
              highway: "Eastern Peripheral Highway",
              traffic: "100,000+ vehicles daily",
              locations: "Kundli, Ghaziabad, Faridabad, Palwal",
              highlights: "Connects all NCR cities, bypasses Delhi"
            },
            {
              highway: "Western Peripheral Highway",
              traffic: "100,000+ vehicles daily",
              locations: "Kundli, Manesar, Palwal",
              highlights: "High-speed traffic, minimal stoppages"
            },
            {
              highway: "NH-9 (Delhi-Meerut Road)",
              traffic: "150,000+ vehicles daily",
              locations: "Bhajanpura, Ghaziabad, Hapur Road, Dasna",
              highlights: "Traditional Delhi-Meerut route"
            },
            {
              highway: "DND Flyway",
              traffic: "90,000+ vehicles daily",
              locations: "Ashram, Noida Toll Plaza",
              highlights: "Connects Delhi to Noida, premium visibility"
            },
          ].map((highway, i) => (
            <div key={i} className="border border-[#D8EAFD] rounded-xl p-6 shadow-sm bg-white hover:border-[#0A173E] transition-colors">
              <h3 className="text-xl font-bold mb-2 text-[#0A173E]">{highway.highway}</h3>
              <p className="text-[#0A173E] font-semibold mb-2">{highway.traffic}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Key locations:</span> {highway.locations}</p>
              <p className="text-gray-600 text-sm">{highway.highlights}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-6 text-[#0A173E]">Delhi NCR Advertising Rates (Indicative)</h2>
        <div className="bg-white border border-[#D8EAFD] rounded-2xl p-8 shadow-sm">
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-[#D8EAFD] rounded-lg">
              <thead className="bg-[#0A173E] text-white">
                <tr>
                  <th className="py-3.5 px-4 text-left font-bold text-sm">Location Type</th>
                  <th className="py-3.5 px-4 text-left font-bold text-sm">Size</th>
                  <th className="py-3.5 px-4 text-left font-bold text-sm">Monthly Rate Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#D8EAFD]">
                  <td className="py-3 px-4 font-bold text-[#0A173E]">Delhi-Meerut Expressway (Premium)</td>
                  <td className="py-3 px-4 text-gray-700">20x10 ft</td>
                  <td className="py-3 px-4 font-bold text-[#0A173E]">₹75,000 - ₹1,50,000</td>
                </tr>
                <tr className="border-t border-[#D8EAFD] bg-[#F0F8FF]/50">
                  <td className="py-3 px-4 font-bold text-[#0A173E]">Noida Expressway</td>
                  <td className="py-3 px-4 text-gray-700">20x10 ft</td>
                  <td className="py-3 px-4 font-bold text-[#0A173E]">₹60,000 - ₹1,20,000</td>
                </tr>
                <tr className="border-t border-[#D8EAFD]">
                  <td className="py-3 px-4 font-bold text-[#0A173E]">Dwarka Expressway</td>
                  <td className="py-3 px-4 text-gray-700">20x10 ft</td>
                  <td className="py-3 px-4 font-bold text-[#0A173E]">₹50,000 - ₹1,00,000</td>
                </tr>
                <tr className="border-t border-[#D8EAFD] bg-[#F0F8FF]/50">
                  <td className="py-3 px-4 font-bold text-[#0A173E]">NH-48 (Delhi-Jaipur Highway)</td>
                  <td className="py-3 px-4 text-gray-700">20x10 ft</td>
                  <td className="py-3 px-4 font-bold text-[#0A173E]">₹60,000 - ₹1,20,000</td>
                </tr>
                <tr className="border-t border-[#D8EAFD]">
                  <td className="py-3 px-4 font-bold text-[#0A173E]">Ghaziabad City Locations</td>
                  <td className="py-3 px-4 text-gray-700">15x10 ft</td>
                  <td className="py-3 px-4 font-bold text-[#0A173E]">₹25,000 - ₹50,000</td>
                </tr>
                <tr className="border-t border-[#D8EAFD] bg-[#F0F8FF]/50">
                  <td className="py-3 px-4 font-bold text-[#0A173E]">Noida/Gurgaon City Locations</td>
                  <td className="py-3 px-4 text-gray-700">15x10 ft</td>
                  <td className="py-3 px-4 font-bold text-[#0A173E]">₹30,000 - ₹60,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-6">*Rates are indicative and subject to location availability, duration, and season. Contact us for exact site quotes.</p>
          
          <div className="bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27] text-white p-8 rounded-2xl border border-[#182859] text-center">
            <span className="inline-block px-3.5 py-1 bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
              Direct Site Booking
            </span>
            <p className="text-2xl font-extrabold mb-2">Need NCR Outdoor Advertising?</p>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">Call us now for inventory availability, high-visibility sites, and customized pan-NCR campaign packages.</p>
            <a href="tel:+919456497636" className="inline-flex items-center gap-2 bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-8 py-3.5 rounded-xl font-extrabold shadow-lg transition-all hover:scale-105">
              Call +91 94564 97636
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {delhiNcrFaqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-[#0A173E]">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
          <Link href="/locations/hapur" className="text-[#0A173E] font-semibold hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-[#0A173E] font-semibold hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}
