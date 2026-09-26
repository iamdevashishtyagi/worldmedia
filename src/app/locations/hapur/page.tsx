import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/SeoJsonLd';

const hapurFaqs = [
  {
    question: "Which is the best advertising agency in Hapur?",
    answer: "World Media NCR is a leading advertising agency serving Hapur with 10+ years of experience, premium hoarding locations on Delhi-Meerut Expressway and NH-34, and extensive rural coverage for wall painting campaigns across the district."
  },
  {
    question: "How much does hoarding advertising cost in Hapur?",
    answer: "Hoarding costs in Hapur range from ₹7,000 to ₹30,000 per month for city locations. Expressway hoardings range from ₹50,000 to ₹1,00,000 per month depending on exact location and visibility."
  },
  {
    question: "What are the best hoarding locations in Hapur?",
    answer: "The best hoarding locations in Hapur include Delhi-Meerut Expressway (Hapur section), Hapur-Meerut Road, NH-34, Garhmukteshwar Road, and Main Market Chowk. Expressway locations offer maximum visibility to NCR traffic."
  },
  {
    question: "Do you provide wall painting in Garhmukteshwar and Pilkhuwa?",
    answer: "Yes, we provide extensive wall painting services across Garhmukteshwar, Pilkhuwa, Dhaulana, and all villages in Hapur district. Rural wall painting is highly effective for political and brand campaigns."
  },
  {
    question: "Do you cover all villages in Hapur district?",
    answer: "Yes, we have teams that cover every village in Hapur district. We maintain a database of available walls and can execute pan-district campaigns efficiently."
  },
  {
    question: "How do I book advertising space in Hapur?",
    answer: "Call us at +91 94564 97636, email worldmediancr@gmail.com, or visit our contact page. We'll discuss your requirements, show available locations, provide a quote, and handle all installation."
  }
];

export const metadata: Metadata = {
  title: 'Advertising Agency in Hapur | Hoarding & Outdoor Ads | World Media NCR',
  description: 'Premier advertising agency in Hapur offering hoarding advertising, digital wall painting, billboard, and outdoor media services. 10+ years serving Hapur businesses. Get the best rates for advertising in Hapur.',
  keywords: 'advertising agency hapur, advertising companies hapur, outdoor advertising hapur, hoarding advertising hapur, digital wall painting hapur, billboard hapur, advertising in hapur, garhmukteshwar advertising, pilkhuwa advertising',
  alternates: {
    canonical: 'https://worldmediancr.com/locations/hapur',
  },
  openGraph: {
    title: 'Advertising Agency in Hapur | World Media NCR',
    description: 'Premier advertising agency in Hapur offering hoarding, wall painting, billboard, and outdoor media services.',
    url: 'https://worldmediancr.com/locations/hapur',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Meerut Sardhana.webp',
        width: 1200,
        height: 630,
        alt: 'World Media NCR - Outdoor Hoarding in Hapur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HapurLocationPage() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }, { name: "Hapur" }]} />
      <FaqJsonLd questions={hapurFaqs} />
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
              <span className="text-gray-500">Hapur</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Advertising Agency in Hapur – World Media NCR
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>World Media NCR</strong> is your trusted <strong>advertising agency in Hapur</strong>, providing comprehensive outdoor advertising solutions across the district. We help Hapur businesses, brands, and political candidates reach their target audience through strategic hoarding and wall painting placements.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            From <strong>hoarding advertising on Delhi-Meerut Expressway</strong> to <strong>digital wall painting in Garhmukteshwar</strong>, our team knows the Hapur market thoroughly. We have the largest network of premium advertising locations across the district.
          </p>
          <div className="bg-[#F0F8FF] border border-[#D8EAFD] p-6 rounded-2xl mt-4">
            <h2 className="text-xl font-bold mb-3 text-[#0A173E]">Why Hapur Businesses Choose Us?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong>10+ years</strong> serving Hapur and surrounding areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong>Premium locations</strong> on all major roads and expressways</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong>100+ projects</strong> completed for Hapur clients</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong>End-to-end service</strong> – design, printing, installation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
          <Image src="/images/portfolio/Meerut Sardhana.webp" alt="Outdoor advertising hoarding by World Media NCR" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>
      </div>

      {/* Services in Hapur */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#0A173E]">Our Advertising Services in Hapur</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/hoarding-advertising-meerut" className="bg-white border border-[#D8EAFD] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[var(--yellow)] transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Hoarding Advertising Hapur</h3>
            <p className="text-gray-600 mb-3">Premium hoarding placements at Delhi-Meerut Expressway, Hapur-Meerut Road, and major chowks. Sizes from 10x10 to 20x10 ft.</p>
            <span className="text-[#0A173E] font-bold">Learn more →</span>
          </Link>
          
          <Link href="/services/billboard-advertising-meerut" className="bg-white border border-[#D8EAFD] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[var(--yellow)] transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Billboard Advertising Hapur</h3>
            <p className="text-gray-600 mb-3">Large-format billboards on Delhi-Meerut Expressway and NH-34 for maximum visibility to NCR-bound traffic.</p>
            <span className="text-[#0A173E] font-bold">Learn more →</span>
          </Link>
          
          <Link href="/services/digital-wall-painting-meerut" className="bg-white border border-[#D8EAFD] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[var(--yellow)] transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Digital Wall Painting Hapur</h3>
            <p className="text-gray-600 mb-3">Cost-effective wall advertisements at high-traffic walls across Hapur city and all rural areas. 3-5 year durability.</p>
            <span className="text-[#0A173E] font-bold">Learn more →</span>
          </Link>
          
          <Link href="/services/vehicle-branding-meerut" className="bg-white border border-[#D8EAFD] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[var(--yellow)] transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Vehicle Branding Hapur</h3>
            <p className="text-gray-600 mb-3">Turn your fleet into moving billboards. Full and partial wraps for cars, trucks, and commercial vehicles.</p>
            <span className="text-[#0A173E] font-bold">Learn more →</span>
          </Link>
          
          <Link href="/services/flex-printing-meerut" className="bg-white border border-[#D8EAFD] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[var(--yellow)] transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Flex Printing Hapur</h3>
            <p className="text-gray-600 mb-3">High-quality flex printing for banners, hoardings, posters, and event materials. Fast turnaround.</p>
            <span className="text-[#0A173E] font-bold">Learn more →</span>
          </Link>
          
          <Link href="/services/political-advertising-meerut" className="bg-white border border-[#D8EAFD] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[var(--yellow)] transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Political Advertising Hapur</h3>
            <p className="text-gray-600 mb-3">Complete campaign solutions for Hapur, Garhmukteshwar, and Dhaulana constituencies – hoardings, wall paintings, banners.</p>
            <span className="text-[#0A173E] font-bold">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Prime Advertising Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Prime Advertising Locations in Hapur</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Delhi-Meerut Expressway (Hapur Section)", traffic: "150,000+ daily vehicles", desc: "Premium expressway location connecting Delhi to Meerut via Hapur." },
            { name: "Hapur-Meerut Road", traffic: "60,000+ daily commuters", desc: "Main road connecting Hapur to Meerut." },
            { name: "NH-34 (Delhi-Lucknow Highway)", traffic: "70,000+ daily vehicles", desc: "National highway passing through Hapur." },
            { name: "Garhmukteshwar Road", traffic: "40,000+ daily", desc: "Route to Garhmukteshwar and religious sites." },
            { name: "Pilkhuwa Road", traffic: "35,000+ daily", desc: "Connecting to Pilkhuwa industrial area." },
            { name: "Railway Station Road", traffic: "30,000+ daily", desc: "Near railway station, heavy commuter traffic." },
            { name: "Bus Stand Area", traffic: "High footfall", desc: "Major transit point with daily commuters." },
            { name: "Main Market/Chowk", traffic: "High footfall", desc: "City center with shops and commercial establishments." },
            { name: "Babugarh", traffic: "20,000+ daily", desc: "Industrial area on Hapur-Meerut Road." },
            { name: "Simbhuali", traffic: "15,000+ daily", desc: "Town on Hapur-Garhmukteshwar route." },
            { name: "Kharkhoda", traffic: "15,000+ daily", desc: "Town on Hapur-Meerut Road." },
          ].map((location, i) => (
            <div key={i} className="border border-[#D8EAFD] rounded-xl p-5 shadow-sm bg-white hover:border-[#0A173E] transition-colors">
              <h3 className="text-lg font-bold mb-1 text-[#0A173E]">{location.name}</h3>
              <p className="text-[#0A173E] font-semibold text-sm mb-2">{location.traffic}</p>
              <p className="text-gray-600 text-sm">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Hapur Market */}
      <section className="mb-16 bg-[#F0F8FF] border border-[#D8EAFD] p-8 rounded-2xl">
        <h2 className="text-3xl font-extrabold mb-6 text-[#0A173E]">About Advertising in Hapur</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Hapur is an important industrial and agricultural district in western Uttar Pradesh, strategically located on the Delhi-Meerut Expressway and NH-34. Its proximity to Delhi NCR and growing industrial base makes it a valuable market for outdoor advertising.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Key facts about Hapur for advertisers:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Population:</strong> 250,000+ (city) with district population over 1.3 million</li>
            <li><strong>Industrial hub:</strong> Steel rolling, paper, and manufacturing industries in Babugarh, Pilkhuwa</li>
            <li><strong>Agricultural market:</strong> Major grain and sugarcane trading center</li>
            <li><strong>Connectivity:</strong> Delhi-Meerut Expressway, NH-34, and Eastern Peripheral Highway</li>
            <li><strong>Assembly constituencies:</strong> Hapur, Garhmukteshwar, Dhaulana</li>
            <li><strong>Religious tourism:</strong> Garhmukteshwar attracts pilgrims year-round</li>
          </ul>
          <p className="text-gray-700">
            Outdoor advertising in Hapur reaches a diverse audience – from industrial workers and traders to pilgrims and NCR commuters. Expressway hoardings offer high visibility to Delhi-Meerut traffic.
          </p>
        </div>
      </section>

      {/* Assembly Constituencies */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Hapur District Assembly Constituencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Hapur", "Garhmukteshwar", "Dhaulana",
            "Pilkhuwa", "Babugarh", "Simbhuali",
            "Kharkhoda", "Hapur Rural", "Meerut South (part)",
            "Ghaziabad (part)", "Baghpat (part)", "Bulandshahr (part)"
          ].map((constituency, i) => (
            <div key={i} className="bg-[#F0F8FF] p-3 rounded-xl text-center font-bold text-[#0A173E] border border-[#D8EAFD]">
              {constituency}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">Complete coverage across Hapur district and surrounding areas.</p>
      </section>

      {/* Rural Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Rural Coverage in Hapur District</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Garhmukteshwar", "Pilkhuwa", "Dhaulana", "Babugarh",
            "Simbhuali", "Kharkhoda", "Hapur Rural", "Bhoor Baral",
            "Partapur", "Rasulpur", "Kithora", "Machhra",
            "Niwari", "Hafizpur", "Bhojpur", "Simbhaoli"
          ].map((village, i) => (
            <div key={i} className="bg-[#F0F8FF] border border-[#D8EAFD] p-2.5 rounded-lg text-center text-sm font-medium text-gray-800">
              {village}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">We cover all villages in Hapur district for wall painting and rural advertising.</p>
      </section>

      {/* Expressway Advantage */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Delhi-Meerut Expressway Advantage</h2>
        <div className="bg-gradient-to-r from-[#F0F8FF] to-white p-8 rounded-2xl border border-[#D8EAFD]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-extrabold mb-4 text-[#0A173E]">Why Advertise on the Expressway?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A173E] font-bold">✓</span>
                  <span><strong>150,000+ vehicles daily</strong> – Highest traffic in the region</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A173E] font-bold">✓</span>
                  <span><strong>Premium audience</strong> – Commuters, business travelers, families</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A173E] font-bold">✓</span>
                  <span><strong>Modern infrastructure</strong> – High-visibility hoarding structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A173E] font-bold">✓</span>
                  <span><strong>24/7 visibility</strong> – Illuminated hoardings available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A173E] font-bold">✓</span>
                  <span><strong>Connectivity</strong> – Links Delhi, Ghaziabad, Hapur, Meerut</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D8EAFD]">
              <h4 className="font-extrabold text-[#0A173E] text-lg mb-3">Expressway Hoarding Specifications</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Size:</span> <span className="font-semibold text-[#0A173E]">20x10 ft, 30x10 ft</span></li>
                <li className="flex justify-between"><span>Height:</span> <span className="font-semibold text-[#0A173E]">20-30 ft from ground</span></li>
                <li className="flex justify-between"><span>Illumination:</span> <span className="font-semibold text-[#0A173E]">Backlit / LED optional</span></li>
                <li className="flex justify-between"><span>Monthly rate:</span> <span className="font-semibold text-[#0A173E]">₹50,000 - ₹1,00,000</span></li>
                <li className="flex justify-between"><span>Minimum duration:</span> <span className="font-semibold text-[#0A173E]">1 month</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {hapurFaqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-[#0A173E]">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="mb-16 bg-[#F0F8FF] border border-[#D8EAFD] p-8 rounded-2xl">
        <h2 className="text-2xl font-extrabold mb-6 text-[#0A173E]">Our Nearby Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/meerut" className="text-[#0A173E] font-semibold hover:underline">Meerut</Link>
          <Link href="/locations/muzaffarnagar" className="text-[#0A173E] font-semibold hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-[#0A173E] font-semibold hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-[#0A173E] font-semibold hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-[#0A173E] font-semibold hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-ncr" className="text-[#0A173E] font-semibold hover:underline">Delhi NCR</Link>
        </div>
      </section>
    </main>
  );
}
