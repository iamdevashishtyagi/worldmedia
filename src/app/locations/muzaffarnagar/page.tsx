import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/SeoJsonLd';

const muzaffarnagarFaqs = [
  {
    q: "Which is the best advertising agency in Muzaffarnagar?",
    a: "World Media NCR is a leading advertising agency serving Muzaffarnagar with 10+ years of experience, premium hoarding locations on all major roads, and a strong track record of successful campaigns for local businesses and political clients."
  },
  {
    q: "How much does hoarding advertising cost in Muzaffarnagar?",
    a: "Hoarding costs in Muzaffarnagar range from ₹8,000 to ₹35,000 per month depending on location and size. Premium locations on Meerut Road and Roorkee Road range from ₹20,000-35,000/month, while other areas start from ₹8,000/month."
  },
  {
    q: "What are the best hoarding locations in Muzaffarnagar?",
    a: "The best hoarding locations in Muzaffarnagar include Meerut Road, Roorkee Road, Shamli Road, Delhi Road, New Mandi Chowk, Civil Lines, and Railway Road. These areas have the highest traffic and visibility."
  },
  {
    q: "Do you provide wall painting services in rural Muzaffarnagar areas?",
    a: "Yes, we provide wall painting services across all rural areas of Muzaffarnagar district including Budhana, Khatauli, Shahpur, Purkazi, Jansath, and all villages. Rural wall painting is highly effective for political and FMCG campaigns."
  },
  {
    q: "Do you cover all assembly constituencies in Muzaffarnagar?",
    a: "Yes, we provide complete coverage across all assembly constituencies including Muzaffarnagar, Budhana, Charthawal, Khatauli, and Meerapur. We also serve Shamli, Kairana, and Thana Bhawan constituencies."
  },
  {
    q: "How do I book advertising space in Muzaffarnagar?",
    a: "Simply call us at +91 94564 97636, email us at worldmediancr@gmail.com, or visit our contact page. We'll discuss your requirements, show you available locations, provide a quote, and handle everything from permits to installation."
  }
];

export const metadata: Metadata = {
  title: 'Advertising Agency in Muzaffarnagar | Hoarding & Outdoor Ads | World Media NCR',
  description: 'Premier advertising agency in Muzaffarnagar offering hoarding advertising, digital wall painting, billboard, and outdoor media services. 10+ years serving Muzaffarnagar businesses. Get the best rates for advertising in Muzaffarnagar.',
  keywords: 'advertising agency muzaffarnagar, advertising companies muzaffarnagar, outdoor advertising muzaffarnagar, hoarding advertising muzaffarnagar, digital wall painting muzaffarnagar, billboard muzaffarnagar, advertising in muzaffarnagar',
  alternates: {
    canonical: 'https://worldmediancr.com/locations/muzaffarnagar',
  },
  openGraph: {
    title: 'Advertising Agency in Muzaffarnagar | World Media NCR',
    description: 'Premier advertising agency in Muzaffarnagar offering hoarding, wall painting, billboard, and outdoor media services.',
    url: 'https://worldmediancr.com/locations/muzaffarnagar',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Muzaffarnagar Meerut Road.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MuzaffarnagarLocationPage() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://worldmediancr.com' },
          { name: 'Locations', url: 'https://worldmediancr.com/locations' },
          { name: 'Muzaffarnagar', url: 'https://worldmediancr.com/locations/muzaffarnagar' },
        ]}
      />
      <FaqJsonLd
        faqs={muzaffarnagarFaqs.map((f) => ({
          question: f.q,
          answer: f.a,
        }))}
      />

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
              <span className="text-gray-500">Muzaffarnagar</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <span className="inline-block px-3.5 py-1 bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            Western UP Network
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A173E] tracking-tight">
            Advertising Agency in Muzaffarnagar – World Media NCR
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong className="text-[#0A173E]">World Media NCR</strong> is your trusted <strong className="text-[#0A173E]">outdoor advertising agency in Muzaffarnagar</strong>, providing comprehensive outdoor advertising solutions across the district. We help local and national brands achieve maximum reach through strategic hoarding, highway billboard, and digital wall painting placements.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            From high-visibility <strong className="text-[#0A173E]">hoardings on Meerut Road & Roorkee Road</strong> to <strong className="text-[#0A173E]">wall painting in New Mandi and rural tehsils</strong>, our network delivers superior local visibility and ROI.
          </p>
          <div className="bg-[#F0F8FF] border border-[#D8EAFD] p-6 rounded-2xl mt-4">
            <h2 className="text-xl font-bold mb-3 text-[#0A173E]">Why Muzaffarnagar Businesses Choose Us?</h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">10+ years</strong> dominating the outdoor advertising space across Muzaffarnagar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">Prime monopoly sites</strong> on Meerut Road, Roorkee Road, and Shamli bypass</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">100+ campaigns</strong> successfully launched across commercial & FMCG sectors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A173E] font-bold">✓</span>
                <span><strong className="text-[#0A173E]">End-to-end delivery</strong> – permissions, design printing, high-strength mounting</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#D8EAFD] bg-gray-100 flex items-center justify-center">
          <Image 
            src="/images/portfolio/Muzaffarnagar Meerut Road.webp" 
            alt="Advertising agency in Muzaffarnagar - World Media NCR hoarding on Meerut Road"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Services in Muzaffarnagar */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Our Advertising Services in Muzaffarnagar</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/hoarding-advertising-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Hoarding Advertising Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3 text-sm">Premium hoarding placements at Meerut Road, Roorkee Road, Shamli Road, and major chowks. Sizes from 10x10 to 40x20 ft.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/digital-wall-painting-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Digital Wall Painting Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3 text-sm">Cost-effective wall advertisements at high-traffic walls across Muzaffarnagar city and rural areas. 3-5 year durability.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/billboard-advertising-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Billboard Advertising Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3 text-sm">Large-format billboards on highways and main roads for maximum visibility. Multiple size options available.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/vehicle-branding-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Vehicle Branding Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3 text-sm">Turn your fleet into moving billboards. Full and partial wraps for cars, trucks, buses, and commercial vehicles.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/flex-printing-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Flex Printing Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3 text-sm">High-quality flex printing for banners, hoardings, posters, and event materials. Fast turnaround, competitive rates.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
          
          <Link href="/services/political-advertising-meerut" className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-6 shadow-sm hover:border-[#0A173E] hover:shadow-lg transition block">
            <h3 className="text-xl font-bold mb-2 text-[#0A173E]">Political Advertising Muzaffarnagar</h3>
            <p className="text-gray-600 mb-3 text-sm">Complete campaign solutions for elections – hoardings, wall paintings, banners, flags, and more.</p>
            <span className="text-[#0A173E] font-bold text-sm">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Prime Advertising Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Prime Advertising Locations in Muzaffarnagar</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Meerut Road", traffic: "70,000+ daily commuters", desc: "Main highway connecting to Meerut. Premium hoarding locations." },
            { name: "Roorkee Road", traffic: "60,000+ daily commuters", desc: "Connecting to Roorkee and Haridwar. Heavy traffic flow." },
            { name: "Shamli Road", traffic: "50,000+ daily commuters", desc: "Route connecting to Shamli and beyond." },
            { name: "Delhi Road", traffic: "55,000+ daily", desc: "Main road connecting to Delhi via NH-58." },
            { name: "New Mandi", traffic: "High footfall", desc: "Commercial hub with shops, banks, and businesses." },
            { name: "Civil Lines", traffic: "40,000+ daily", desc: "Premium area with offices and commercial establishments." },
            { name: "Railway Road", traffic: "45,000+ daily", desc: "Near railway station, heavy commuter traffic." },
            { name: "Budhana Road", traffic: "35,000+ daily", desc: "Connecting to Budhana and rural areas." },
            { name: "Khatauli Road", traffic: "30,000+ daily", desc: "Route to Khatauli and surrounding areas." },
            { name: "Court Road", traffic: "30,000+ daily", desc: "Near district court, legal professionals traffic." },
            { name: "Bus Stand Area", traffic: "High footfall", desc: "Major transit point with daily commuters." },
            { name: "University Road", traffic: "25,000+ daily", desc: "Near educational institutions." },
          ].map((location, i) => (
            <div key={i} className="border border-[#D8EAFD] rounded-xl p-5 shadow-sm bg-white hover:border-[#0A173E] transition-colors">
              <h3 className="text-lg font-bold mb-1 text-[#0A173E]">{location.name}</h3>
              <p className="text-[#0A173E] font-semibold text-sm mb-2">{location.traffic}</p>
              <p className="text-gray-600 text-sm">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Muzaffarnagar Market */}
      <section className="mb-16 bg-[#F0F8FF] border border-[#D8EAFD] p-8 rounded-2xl">
        <h2 className="text-3xl font-extrabold mb-6 text-[#0A173E]">About Advertising in Muzaffarnagar</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Muzaffarnagar is a major commercial center in western Uttar Pradesh with significant agricultural, industrial, and trading importance. Its strategic location on the Delhi-Dehradun corridor makes it a high-return market for outdoor media.
          </p>
          <p className="text-gray-700 mb-4">
            <strong className="text-[#0A173E]">Key facts about Muzaffarnagar for advertisers:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Population:</strong> 500,000+ (city) with district population over 4 million</li>
            <li><strong>Commercial hub:</strong> New Mandi is one of the largest agricultural trading markets in Asia</li>
            <li><strong>Industrial areas:</strong> Paper mills, steel rolling, sugar manufacturing complexes</li>
            <li><strong>Educational institutions:</strong> Key medical, engineering, and arts colleges</li>
            <li><strong>Connectivity:</strong> NH-58 connects to Delhi, Meerut, Haridwar, and Dehradun</li>
            <li><strong>Rural reach:</strong> Surrounded by hundreds of prosperous agrarian villages</li>
          </ul>
          <p className="text-gray-700">
            Outdoor advertising in Muzaffarnagar reaches a diverse audience – from industrial owners and traders to students and high-purchasing rural consumers.
          </p>
        </div>
      </section>

      {/* Assembly Constituencies */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Muzaffarnagar Assembly Constituencies We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Muzaffarnagar", "Budhana", "Charthawal", "Khatauli", "Meerapur",
            "Shamli", "Kairana", "Thana Bhawan", "Nakur", "Gangoh"
          ].map((constituency, i) => (
            <div key={i} className="bg-[#F0F8FF] p-3 rounded-xl text-center font-bold text-[#0A173E] border border-[#D8EAFD]">
              {constituency}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">Complete coverage across all assembly constituencies in Muzaffarnagar district and surrounding areas.</p>
      </section>

      {/* Gallery */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Our Work in Muzaffarnagar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Muzaffarnagar Meerut Road", file: "Muzaffarnagar Meerut Road.webp" },
            { name: "Muzaffarnagar Roorkee Road", file: "Muzaffarnagar Rorkee Road.webp" },
            { name: "Muzaffarnagar Shamli Road", file: "Muzaffarnagar Shamli Road.webp" },
            { name: "Budhana Khatuli Road", file: "Budhana Khatuli Road.webp" },
            { name: "Shamli Kairana Road", file: "SHAMLI KAIRANA ROAD.webp" },
            { name: "Shamli Mandi Samiti", file: "Shamli Mandi Samiti T Point.webp" },
            { name: "Chutmalpur", file: "Chutmalpur Facing Rorkee (Delhi Rorkee Dehradun Highway).webp" },
            { name: "Mirapur Bypass", file: "Mirapur Bypass.webp" },
          ].map((project, i) => (
            <div key={i} className="relative h-40 rounded-xl overflow-hidden group border border-[#D8EAFD]">
              <Image 
                src={`/images/portfolio/${project.file}`}
                alt={`Advertising project at ${project.name} in Muzaffarnagar by World Media NCR`}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-[#0A173E]/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <p className="text-white font-bold p-3 text-xs">{project.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/gallery" className="text-[#0A173E] font-bold hover:underline">
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">What Muzaffarnagar Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D8EAFD]">
            <p className="text-gray-700 italic mb-4">&quot;World Media NCR has been our advertising partner for multiple campaigns in Muzaffarnagar. Their hoarding locations on Meerut Road gave us massive brand visibility.&quot;</p>
            <p className="font-bold text-[#0A173E]">– Prominent Retail Enterprise, Muzaffarnagar</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D8EAFD]">
            <p className="text-gray-700 italic mb-4">&quot;We needed wall painting across rural Muzaffarnagar for our distributor launch. They covered 50+ tehsils efficiently with flawless quality.&quot;</p>
            <p className="font-bold text-[#0A173E]">– Regional Agro-Chemicals Distributor, Muzaffarnagar</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-[#0A173E]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {muzaffarnagarFaqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-[#0A173E]">{faq.q}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="mb-16 bg-[#F0F8FF] border border-[#D8EAFD] p-8 rounded-2xl">
        <h2 className="text-2xl font-extrabold mb-6 text-[#0A173E]">Our Nearby Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/meerut" className="text-[#0A173E] font-semibold hover:underline">Meerut</Link>
          <Link href="/locations/shamli" className="text-[#0A173E] font-semibold hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-[#0A173E] font-semibold hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-[#0A173E] font-semibold hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-ncr" className="text-[#0A173E] font-semibold hover:underline">Delhi NCR</Link>
          <Link href="/locations/hapur" className="text-[#0A173E] font-semibold hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-[#0A173E] font-semibold hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}