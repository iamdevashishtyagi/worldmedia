import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Billboard Advertising in Meerut | Outdoor Billboards | World Media NCR',
  description: 'Premium billboard advertising in Meerut & NCR. High-traffic locations, competitive rates, and professional design services. Boost your brand visibility with outdoor billboards on Delhi Road, Roorkee Road, Garh Road and highways.',
  keywords: 'billboard advertising meerut, outdoor billboards meerut, billboard near meerut, advertising billboards meerut, digital billboards meerut, billboard on rent meerut, billboard contractors meerut, highway billboards meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/services/billboard-advertising-meerut',
  },
  openGraph: {
    title: 'Billboard Advertising in Meerut | World Media NCR',
    description: 'Premium billboard advertising services at prime locations across Meerut & NCR. High-impact outdoor advertising with thousands of daily impressions.',
    url: 'https://worldmediancr.com/services/billboard-advertising-meerut',
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

export default function BillboardAdvertisingPage() {
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
              <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Billboard Advertising Meerut</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Professional Billboard Advertising Services in Meerut
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>World Media NCR</strong> offers premium <strong>billboard advertising in Meerut</strong> and across NCR. Our strategically placed billboards on highways, main roads, and commercial areas ensure your brand message reaches thousands of potential customers every day.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Billboard advertising remains one of the most effective outdoor media for building brand awareness and driving customer action. With our prime locations and professional execution, we help businesses of all sizes achieve maximum ROI from their outdoor campaigns.
          </p>
          <div className="bg-purple-50 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Choose Our Billboards?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>Strategic locations</strong> with highest traffic counts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>Multiple size options</strong> from 10x10 to 40x20 feet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>Illumination options</strong> for 24/7 visibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>Professional design</strong> and printing services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>All permits handled</strong> by our team</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/images/portfolio/Muzaffarnagar Meerut Road.webp" 
            alt="Billboard advertising on Muzaffarnagar Meerut Road by World Media NCR - premium outdoor advertising location"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Billboard Locations Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Premium Billboard Locations in Meerut & NCR</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Delhi Road, Meerut", traffic: "100,000+ vehicles/day", desc: "Main highway connecting Meerut to Delhi, prime commercial corridor" },
            { name: "Muzaffarnagar Highway", traffic: "80,000+ vehicles/day", desc: "Interstate highway with continuous traffic flow" },
            { name: "Roorkee Road, Meerut", traffic: "70,000+ vehicles/day", desc: "Near universities and educational institutions" },
            { name: "Garh Road, Meerut", traffic: "65,000+ vehicles/day", desc: "Commercial and shopping district" },
            { name: "Saharanpur Highway", traffic: "60,000+ vehicles/day", desc: "Major route connecting to Saharanpur and beyond" },
            { name: "Shamli Road", traffic: "45,000+ vehicles/day", desc: "Industrial corridor with B2B traffic" },
            { name: "Delhi NCR Highways", traffic: "Varies by location", desc: "Strategic spots across NCR region" },
            { name: "Baghpat Road", traffic: "35,000+ vehicles/day", desc: "Connecting to Baghpat and rural areas" },
            { name: "Hapur Road", traffic: "40,000+ vehicles/day", desc: "Route connecting to Hapur and Ghaziabad" },
          ].map((location, i) => (
            <div key={i} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{location.name}</h3>
              <p className="text-purple-600 font-medium mb-2">{location.traffic}</p>
              <p className="text-gray-600">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Billboard Sizes Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Billboard Sizes & Specifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { size: "10x10 feet", best: "Secondary roads, market areas", rate: "₹8,000 - ₹15,000/month" },
            { size: "15x10 feet", best: "Main roads, commercial areas", rate: "₹15,000 - ₹25,000/month" },
            { size: "20x10 feet", best: "Highways, premium locations", rate: "₹25,000 - ₹40,000/month" },
            { size: "30x10 feet", best: "Major highways, expressways", rate: "₹35,000 - ₹60,000/month" },
            { size: "40x10 feet", best: "Prime highway locations", rate: "₹50,000 - ₹80,000/month" },
            { size: "40x20 feet", best: "Iconic landmark locations", rate: "Custom quote" },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-lg p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">{item.size}</h3>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Best for:</span> {item.best}</p>
              <p className="text-gray-700"><span className="font-semibold">Approx. rate:</span> {item.rate}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Billboard Advertising Pricing Guide</h2>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Location Category</th>
                  <th className="py-3 px-4 text-left font-semibold">Size (feet)</th>
                  <th className="py-3 px-4 text-left font-semibold">Monthly Rate</th>
                  <th className="py-3 px-4 text-left font-semibold">Quarterly Rate</th>
                  <th className="py-3 px-4 text-left font-semibold">Yearly Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4">Premium (Delhi Road, Highways)</td>
                  <td className="py-3 px-4">20x10</td>
                  <td className="py-3 px-4">₹35,000</td>
                  <td className="py-3 px-4">₹1,00,000 (5% off)</td>
                  <td className="py-3 px-4">₹3,80,000 (10% off)</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4">High-Traffic (Roorkee Road, Garh Road)</td>
                  <td className="py-3 px-4">15x10</td>
                  <td className="py-3 px-4">₹22,000</td>
                  <td className="py-3 px-4">₹63,000 (5% off)</td>
                  <td className="py-3 px-4">₹2,40,000 (10% off)</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4">Commercial Areas</td>
                  <td className="py-3 px-4">10x10</td>
                  <td className="py-3 px-4">₹12,000</td>
                  <td className="py-3 px-4">₹34,000 (5% off)</td>
                  <td className="py-3 px-4">₹1,30,000 (10% off)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Additional Services:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">•</span>
                  <span><strong>Design & Creative:</strong> ₹2,000 - ₹5,000 per design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">•</span>
                  <span><strong>Flex Printing:</strong> ₹30 - ₹50 per sq ft</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">•</span>
                  <span><strong>LED Illumination:</strong> Additional 15-20% on rental</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">•</span>
                  <span><strong>Installation:</strong> Included in rental</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Why Longer Durations?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span><strong>Save 10-20%</strong> on annual contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span><strong>Priority locations</strong> for long-term clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span><strong>Better brand recall</strong> with sustained presence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span><strong>Free design changes</strong> twice a year</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">Need a Custom Package?</p>
            <p className="text-lg mb-4">We create tailored solutions for your budget and goals</p>
            <a href="tel:+919456497636" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call +91 94564 97636
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Choose Billboard Advertising?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Massive Reach", desc: "One billboard on Delhi Road reaches over 100,000 people daily - that's 3 million+ impressions monthly." },
            { title: "Geographic Targeting", desc: "Target specific markets, commuter routes, and neighborhoods with precision." },
            { title: "High Frequency", desc: "Commuters see your message repeatedly, building strong brand recall over time." },
            { title: "24/7 Presence", desc: "Your brand works around the clock, every day of the year without interruption." },
            { title: "Digital Integration", desc: "Add QR codes, social media handles, and website URLs to drive online engagement." },
            { title: "Prestige & Credibility", desc: "Prime billboard locations signal that your brand is established and trustworthy." },
          ].map((benefit, i) => (
            <div key={i} className="border-l-4 border-purple-600 pl-4 py-2 bg-white p-5 rounded-r-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Industries That Benefit from Billboards</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Real Estate & Builders", "Automobile Dealerships", "Educational Institutions", "Hospitals & Healthcare",
            "Retail Chains & Malls", "Banking & Finance", "FMCG Brands", "Restaurants & Hotels",
            "Entertainment & Events", "Political Campaigns", "Telecom & Technology", "Fitness & Wellness",
            "Jewelry & Luxury", "Furniture & Home", "Travel & Tourism", "Local Businesses"
          ].map((industry, i) => (
            <div key={i} className="bg-gray-100 p-3 rounded-lg text-center font-medium text-gray-800 hover:bg-purple-100 transition">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What is the difference between a hoarding and a billboard?",
              a: "The terms are often used interchangeably. Generally, 'hoarding' refers to any large outdoor advertising structure, while 'billboard' specifically refers to large format printed displays. At World Media NCR, we offer both terms meaning premium outdoor advertising spaces."
            },
            {
              q: "How many people will see my billboard in Meerut?",
              a: "Traffic varies by location. Delhi Road sees 100,000+ vehicles daily, Roorkee Road 80,000+, and Garh Road 70,000+. With multiple passengers per vehicle, actual viewership is much higher. We provide traffic data for each location."
            },
            {
              q: "How far in advance should I book a billboard?",
              a: "For premium locations, we recommend booking 2-4 weeks in advance. During peak seasons (festivals, election periods), 1-2 months advance booking is advisable. We can sometimes accommodate urgent requirements based on availability."
            },
            {
              q: "Do you offer digital billboards with changing messages?",
              a: "Yes, we offer LED digital billboards at select premium locations where you can display multiple ads in rotation. Contact us for availability of digital displays in Meerut and NCR."
            },
            {
              q: "What is included in the rental cost?",
              a: "The rental includes: hoarding structure, prime location access, all government permits, basic illumination (if opted), and installation of your flex. Design, printing, and special lighting are additional."
            },
            {
              q: "Can I change my advertisement during the contract?",
              a: "Yes, you can change your creative. There's a nominal re-printing and installation charge. Long-term clients get one free design change per year."
            },
            {
              q: "Do you have billboards in Muzaffarnagar and other cities?",
              a: "Yes, we have extensive billboard networks across Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, and Delhi NCR. Visit our location pages for more details."
            },
            {
              q: "How do I get started?",
              a: "Simply call us at +91 94564 97636 or visit our contact page. We'll discuss your requirements, show you available locations with photos and traffic data, provide a quote, and handle everything from permits to installation."
            }
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Advertising Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/services/hoarding-advertising-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Hoarding Advertising Meerut</h3>
            <p className="text-gray-600 text-sm">Premium hoarding placements across the city</p>
          </Link>
          <Link href="/services/digital-wall-painting-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Digital Wall Painting Meerut</h3>
            <p className="text-gray-600 text-sm">Cost-effective long-term wall ads</p>
          </Link>
          <Link href="/services/vehicle-branding-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Vehicle Branding Meerut</h3>
            <p className="text-gray-600 text-sm">Mobile advertising on wheels</p>
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Our Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/meerut" className="text-purple-600 hover:underline">Meerut</Link>
          <Link href="/locations/muzaffarnagar" className="text-purple-600 hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-purple-600 hover:underline">Shamli</Link>
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