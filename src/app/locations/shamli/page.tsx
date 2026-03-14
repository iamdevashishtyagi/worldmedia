import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advertising Agency in Shamli | Hoarding & Outdoor Ads | World Media NCR',
  description: 'Premier advertising agency in Shamli offering hoarding advertising, digital wall painting, billboard, and outdoor media services. 10+ years serving Shamli businesses. Get the best rates for advertising in Shamli.',
  keywords: 'advertising agency shamli, advertising companies shamli, outdoor advertising shamli, hoarding advertising shamli, digital wall painting shamli, billboard shamli, advertising in shamli, kairana advertising, thana bhawan advertising',
  alternates: {
    canonical: 'https://worldmediancr.com/locations/shamli',
  },
  openGraph: {
    title: 'Advertising Agency in Shamli | World Media NCR',
    description: 'Premier advertising agency in Shamli offering hoarding, wall painting, billboard, and outdoor media services.',
    url: 'https://worldmediancr.com/locations/shamli',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/SHAMLI KAIRANA ROAD.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ShamliLocationPage() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/locations" className="text-gray-700 hover:text-blue-600">Locations</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Shamli</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Advertising Agency in Shamli – World Media NCR
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>World Media NCR</strong> is your trusted <strong>advertising agency in Shamli</strong>, providing comprehensive outdoor advertising solutions across the district. We help Shamli businesses, political candidates, and brands reach their target audience through strategic hoarding and wall painting placements.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            From <strong>hoarding advertising on Kairana Road</strong> to <strong>digital wall painting in Thana Bhawan</strong>, our team knows the Shamli market thoroughly. We have the largest network of premium advertising locations across the city and all rural areas.
          </p>
          <div className="bg-purple-50 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Shamli Businesses Choose Us?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>10+ years</strong> serving Shamli and surrounding areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>Premium locations</strong> on all major roads and chowks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>100+ projects</strong> completed for Shamli clients</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>End-to-end service</strong> – design, printing, installation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/images/portfolio/SHAMLI KAIRANA ROAD.webp" 
            alt="Advertising agency in Shamli - World Media NCR hoarding on Kairana Road"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Services in Shamli */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Advertising Services in Shamli</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/hoarding-advertising-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Hoarding Advertising Shamli</h3>
            <p className="text-gray-600 mb-3">Premium hoarding placements at Kairana Road, Panipat Road, Muzaffarnagar Road, and major chowks. Sizes from 10x10 to 20x10 ft.</p>
            <span className="text-purple-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/digital-wall-painting-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Digital Wall Painting Shamli</h3>
            <p className="text-gray-600 mb-3">Cost-effective wall advertisements at high-traffic walls across Shamli city and all rural areas. 3-5 year durability.</p>
            <span className="text-purple-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/billboard-advertising-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Billboard Advertising Shamli</h3>
            <p className="text-gray-600 mb-3">Large-format billboards on highways and main roads for maximum visibility. Multiple size options available.</p>
            <span className="text-purple-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/vehicle-branding-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Vehicle Branding Shamli</h3>
            <p className="text-gray-600 mb-3">Turn your fleet into moving billboards. Full and partial wraps for cars, trucks, and commercial vehicles.</p>
            <span className="text-purple-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/flex-printing-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Flex Printing Shamli</h3>
            <p className="text-gray-600 mb-3">High-quality flex printing for banners, hoardings, posters, and event materials. Fast turnaround.</p>
            <span className="text-purple-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/political-advertising-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Political Advertising Shamli</h3>
            <p className="text-gray-600 mb-3">Complete campaign solutions for Kairana, Shamli, and Thana Bhawan constituencies – hoardings, wall paintings, banners, flags.</p>
            <span className="text-purple-600 font-medium">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Prime Advertising Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Prime Advertising Locations in Shamli</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Kairana Road", traffic: "50,000+ daily commuters", desc: "Main highway connecting to Kairana. Premium hoarding locations." },
            { name: "Panipat Road", traffic: "45,000+ daily commuters", desc: "Connecting to Panipat and Haryana. Heavy traffic flow." },
            { name: "Muzaffarnagar Road", traffic: "40,000+ daily commuters", desc: "Route connecting to Muzaffarnagar." },
            { name: "Delhi Road", traffic: "35,000+ daily", desc: "Main road connecting to Delhi via NH-709B." },
            { name: "Thana Bhawan Road", traffic: "30,000+ daily", desc: "Connecting to Thana Bhawan and surrounding areas." },
            { name: "Main Market Chowk", traffic: "High footfall", desc: "City center with shops and commercial establishments." },
            { name: "Bus Stand Area", traffic: "High footfall", desc: "Major transit point with daily commuters." },
            { name: "Mandi Samiti", traffic: "25,000+ daily", desc: "Agricultural market with high B2B traffic." },
            { name: "Saharanpur Road", traffic: "25,000+ daily", desc: "Connecting to Saharanpur via Shamli." },
            { name: "Loni Road", traffic: "20,000+ daily", desc: "Route connecting to Loni and rural areas." },
            { name: "Jhinjhana Road", traffic: "20,000+ daily", desc: "Connecting to Jhinjhana and surrounding villages." },
            { name: "Unn Road", traffic: "15,000+ daily", desc: "Connecting to Unn and rural areas." },
          ].map((location, i) => (
            <div key={i} className="border rounded-lg p-5 shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-1 text-gray-900">{location.name}</h3>
              <p className="text-purple-600 font-medium text-sm mb-2">{location.traffic}</p>
              <p className="text-gray-600 text-sm">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Shamli Market */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">About Advertising in Shamli</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Shamli is an important district in western Uttar Pradesh, known for its agricultural markets and political significance (Kairana constituency). The district has a mix of urban and rural populations, making it ideal for integrated outdoor advertising campaigns.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Key facts about Shamli for advertisers:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Population:</strong> 150,000+ (city) with district population over 1.2 million</li>
            <li><strong>Political importance:</strong> Kairana constituency is nationally watched</li>
            <li><strong>Agricultural hub:</strong> Major mandi for sugarcane and grain trading</li>
            <li><strong>Connectivity:</strong> NH-709B connects to Delhi, Panipat, and Muzaffarnagar</li>
            <li><strong>Assembly constituencies:</strong> Shamli, Kairana, and Thana Bhawan</li>
            <li><strong>Rural reach:</strong> Hundreds of villages with significant voter population</li>
          </ul>
          <p className="text-gray-700">
            Outdoor advertising in Shamli is particularly effective for political campaigns, real estate, educational institutions, and FMCG brands targeting both urban and rural consumers.
          </p>
        </div>
      </section>

      {/* Assembly Constituencies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Shamli District Assembly Constituencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Shamli", "Kairana", "Thana Bhawan",
            "Jhinjhana", "Unn", "Gangoh (part)",
            "Nakur (part)", "Budhana (part)", "Shahpur (part)"
          ].map((constituency, i) => (
            <div key={i} className="bg-purple-50 p-3 rounded-lg text-center font-medium text-gray-800 border border-purple-200">
              {constituency}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">Complete coverage across Shamli district and surrounding areas.</p>
      </section>

      {/* Gallery */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Work in Shamli</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Shamli Kairana Road", file: "SHAMLI KAIRANA ROAD.webp" },
            { name: "Shamli Mandi Samiti", file: "Shamli Mandi Samiti T Point.webp" },
            { name: "Shamli Muzaffarnagar Road", file: "Shamli Muzaffarnagar Road 20x10.webp" },
            { name: "Shamli Sahapur Road", file: "SHAMLI SAHAPUR ROAD.webp" },
            { name: "Shamli Madheit Road", file: "Shamli Madheit Road 20x10.webp" },
            { name: "Shamli Alum Saharanpur", file: "Shamli Alum Fc Saharanpur 20x10.webp" },
            { name: "Shamli Sai Mandir Loni", file: "Shamli Sai Mandir Fc Loni 20x10.webp" },
            { name: "Shamli Sai Mandir Saharanpur", file: "Shamli Sai Mandir Fc Saharanpur 20x10.webp" },
          ].map((project, i) => (
            <div key={i} className="relative h-40 rounded-lg overflow-hidden group">
              <Image 
                src={`/images/portfolio/${project.file}`}
                alt={`Advertising project at ${project.name} in Shamli by World Media NCR`}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-end">
                <p className="text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition">{project.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/gallery" className="text-purple-600 font-semibold hover:underline">
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">What Shamli Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-gray-700 italic mb-4">"We worked with World Media NCR for the Kairana by-election campaign. Their wall painting coverage in rural areas was exceptional – they reached every village."</p>
            <p className="font-semibold text-gray-900">– Political Campaign Manager, Kairana</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-gray-700 italic mb-4">"Our educational institute needed hoardings across Shamli. They provided excellent locations and professional installation. Great experience."</p>
            <p className="font-semibold text-gray-900">– Director, Coaching Institute, Shamli</p>
          </div>
        </div>
      </section>

      {/* Rural Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Rural Coverage in Shamli District</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Kairana", "Thana Bhawan", "Jhinjhana", "Unn",
            "Banat", "Babar", "Gangoh", "Nakur",
            "Loni", "Titawi", "Dungar", "Barsana",
            "Kandhla", "Phulana", "Alawalpur", "Bhavanpur"
          ].map((village, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded-lg text-center text-sm">
              {village}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">We cover all villages in Shamli district for wall painting and rural advertising.</p>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which is the best advertising agency in Shamli?",
              a: "World Media NCR is a leading advertising agency serving Shamli with 10+ years of experience, premium hoarding locations on Kairana Road and Panipat Road, and extensive rural coverage for wall painting campaigns."
            },
            {
              q: "How much does hoarding advertising cost in Shamli?",
              a: "Hoarding costs in Shamli range from ₹6,000 to ₹25,000 per month depending on location and size. Premium locations on Kairana Road range from ₹15,000-25,000/month, while other areas start from ₹6,000/month."
            },
            {
              q: "What are the best hoarding locations in Shamli?",
              a: "The best hoarding locations in Shamli include Kairana Road, Panipat Road, Muzaffarnagar Road, Main Market Chowk, and Mandi Samiti. These areas have the highest traffic and visibility."
            },
            {
              q: "Do you provide wall painting in Kairana and Thana Bhawan?",
              a: "Yes, we provide extensive wall painting services across Kairana, Thana Bhawan, Jhinjhana, Unn, and all villages in Shamli district. Rural wall painting is one of our specialties."
            },
            {
              q: "Do you cover all villages in Shamli district?",
              a: "Yes, we have teams that cover every village in Shamli district. We maintain a database of available walls and can execute pan-district campaigns efficiently."
            },
            {
              q: "How do I book advertising space in Shamli?",
              a: "Call us at +91 94564 97636, email info@worldmediancr.com, or visit our contact page. We'll discuss your requirements, show available locations, provide a quote, and handle all installation."
            }
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Nearby Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/meerut" className="text-purple-600 hover:underline">Meerut</Link>
          <Link href="/locations/muzaffarnagar" className="text-purple-600 hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/saharanpur" className="text-purple-600 hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-purple-600 hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-ncr" className="text-purple-600 hover:underline">Delhi NCR</Link>
          <Link href="/locations/hapur" className="text-purple-600 hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-purple-600 hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}