import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Political Advertising in Meerut | Campaign Materials | World Media NCR',
  description: 'Complete political advertising solutions in Meerut. Hoardings, wall paintings, banners, flex printing, and campaign materials for elections. 10+ years experience in political campaigns across Meerut, Muzaffarnagar, Shamli & NCR.',
  keywords: 'political advertising meerut, election campaign meerut, political hoardings meerut, political wall painting, election banners meerut, campaign materials, political flex printing, candidate advertising meerut, party promotion meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/services/political-advertising-meerut',
  },
  openGraph: {
    title: 'Political Advertising in Meerut | World Media NCR',
    description: 'Complete political advertising solutions for elections. Hoardings, wall paintings, banners, and campaign materials.',
    url: 'https://worldmediancr.com/services/political-advertising-meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/political-campaign.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PoliticalAdvertisingPage() {
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
              <span className="text-gray-500">Political Advertising Meerut</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Professional Political Advertising Services in Meerut
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>World Media NCR</strong> offers comprehensive <strong>political advertising solutions in Meerut</strong> and across NCR. From massive hoardings to wall paintings, banners, flex printing, and complete campaign materials – we help candidates and parties connect with voters effectively.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With over 10 years of experience in political campaigns, we understand the unique requirements of election advertising – speed, reach, impact, and strategic placement. Our team ensures your message reaches every corner of your constituency.
          </p>
          <div className="bg-orange-50 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Choose Us for Political Campaigns?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>10+ years</strong> of political campaign experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Pan-Meerut & NCR coverage</strong> – all constituencies served</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Rapid execution</strong> – 24-48 hour turnaround</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Strategic location advice</strong> for maximum impact</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span><strong>Bulk printing & installation</strong> capabilities</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
          <div className="text-center p-8">
            <span className="text-6xl mb-4 block">🗳️</span>
            <p className="text-gray-500">Political Campaign Image</p>
            <p className="text-sm text-gray-400">(Add your political campaign photos here)</p>
          </div>
        </div>
      </div>

      {/* Political Advertising Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Complete Political Advertising Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              type: "Political Hoardings", 
              icon: "📺",
              desc: "Large-format hoardings at strategic locations across constituencies", 
              sizes: "10x10 to 40x20 ft",
              use: "Perfect for candidate visibility and name recall"
            },
            { 
              type: "Wall Paintings", 
              icon: "🎨",
              desc: "Long-lasting wall paintings in villages, towns, and cities", 
              sizes: "Custom sizes per wall",
              use: "Ideal for rural and semi-urban voter outreach"
            },
            { 
              type: "Election Banners", 
              icon: "🏴",
              desc: "High-quality banners for rallies, meetings, and polling booths", 
              sizes: "3x2 ft to 20x10 ft",
              use: "Perfect for event-specific messaging"
            },
            { 
              type: "Flex Printing", 
              icon: "🖨️",
              desc: "Bulk flex printing for posters, cutouts, and promotional materials", 
              sizes: "Any size",
              use: "Cost-effective for large-scale distribution"
            },
            { 
              type: "Party Flags & Buntings", 
              icon: "🚩",
              desc: "Custom printed flags, buntings, and party symbols", 
              sizes: "Various sizes",
              use: "Create festive campaign atmosphere"
            },
            { 
              type: "Vehicle Branding", 
              icon: "🚗",
              desc: "Branded campaign vehicles for mobile outreach", 
              sizes: "Full/partial vehicle wraps",
              use: "Mobile advertising across constituencies"
            },
            { 
              type: "Pandal Backdrops", 
              icon: "🏛️",
              desc: "Large backdrops for rallies, press conferences, and events", 
              sizes: "Custom sizes",
              use: "Professional stage setup for events"
            },
            { 
              type: "LED Van Campaigns", 
              icon: "🚚",
              desc: "Mobile LED vans for video messaging and announcements", 
              sizes: "LED screen on vehicle",
              use: "Audio-visual outreach in multiple locations"
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.type}</h3>
              <p className="text-gray-600 mb-2">{item.desc}</p>
              <p className="text-sm text-gray-500 mb-1"><span className="font-semibold">Sizes:</span> {item.sizes}</p>
              <p className="text-sm text-gray-500"><span className="font-semibold">Use:</span> {item.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Political Advertising Coverage Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              region: "Meerut District", 
              constituencies: "Meerut Cantt, Meerut South, Kithore, Sardhana",
              assembly: "All 4 assembly seats",
              villages: "600+ villages covered"
            },
            { 
              region: "Muzaffarnagar District", 
              constituencies: "Muzaffarnagar, Budhana, Charthawal, Khatauli, Meerapur",
              assembly: "All 5 assembly seats",
              villages: "500+ villages covered"
            },
            { 
              region: "Shamli District", 
              constituencies: "Shamli, Kairana, Thana Bhawan",
              assembly: "All 3 assembly seats",
              villages: "300+ villages covered"
            },
            { 
              region: "Saharanpur District", 
              constituencies: "Saharanpur, Deoband, Rampur, Gangoh, Nakur",
              assembly: "All 5 assembly seats",
              villages: "600+ villages covered"
            },
            { 
              region: "Baghpat District", 
              constituencies: "Baghpat, Chaprauli, Baraut",
              assembly: "All 3 assembly seats",
              villages: "250+ villages covered"
            },
            { 
              region: "Hapur District", 
              constituencies: "Hapur, Dhaulana, Garhmukteshwar",
              assembly: "All 3 assembly seats",
              villages: "300+ villages covered"
            },
            { 
              region: "Ghaziabad District", 
              constituencies: "Ghaziabad, Loni, Muradnagar",
              assembly: "All 3 assembly seats",
              villages: "200+ villages covered"
            },
            { 
              region: "Delhi NCR", 
              constituencies: "Select constituencies",
              assembly: "Custom coverage",
              villages: "Urban & rural areas"
            },
          ].map((area, i) => (
            <div key={i} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{area.region}</h3>
              <p className="text-orange-600 font-medium mb-2">{area.constituencies}</p>
              <p className="text-gray-600 text-sm mb-1"><span className="font-semibold">Assembly seats:</span> {area.assembly}</p>
              <p className="text-gray-600 text-sm"><span className="font-semibold">Coverage:</span> {area.villages}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Political Campaign Material Pricing</h2>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Material Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Size</th>
                  <th className="py-3 px-4 text-left font-semibold">Quantity</th>
                  <th className="py-3 px-4 text-left font-semibold">Price Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Political Hoarding</td>
                  <td className="py-3 px-4">10x10 ft</td>
                  <td className="py-3 px-4">1-10 pieces</td>
                  <td className="py-3 px-4">₹2,500 - ₹4,000 per piece</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">Political Hoarding</td>
                  <td className="py-3 px-4">20x10 ft</td>
                  <td className="py-3 px-4">1-10 pieces</td>
                  <td className="py-3 px-4">₹5,000 - ₹7,500 per piece</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Wall Painting</td>
                  <td className="py-3 px-4">100-200 sq ft</td>
                  <td className="py-3 px-4">Per wall</td>
                  <td className="py-3 px-4">₹3,000 - ₹6,000 per wall</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">Election Banner</td>
                  <td className="py-3 px-4">3x2 ft</td>
                  <td className="py-3 px-4">100-500 pcs</td>
                  <td className="py-3 px-4">₹50 - ₹80 per piece</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Election Banner</td>
                  <td className="py-3 px-4">5x3 ft</td>
                  <td className="py-3 px-4">100-500 pcs</td>
                  <td className="py-3 px-4">₹120 - ₹180 per piece</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">Party Flags</td>
                  <td className="py-3 px-4">2x1.5 ft</td>
                  <td className="py-3 px-4">500-2000 pcs</td>
                  <td className="py-3 px-4">₹15 - ₹25 per piece</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Vehicle Branding</td>
                  <td className="py-3 px-4">Per vehicle</td>
                  <td className="py-3 px-4">1-10 vehicles</td>
                  <td className="py-3 px-4">₹8,000 - ₹20,000 per vehicle</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">LED Van Campaign</td>
                  <td className="py-3 px-4">Per day</td>
                  <td className="py-3 px-4">1-7 days</td>
                  <td className="py-3 px-4">₹15,000 - ₹25,000 per day</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Bulk Campaign Discounts:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span><strong>50-100 hoardings:</strong> 5% discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span><strong>101-200 hoardings:</strong> 10% discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span><strong>200+ hoardings:</strong> 15% discount + free design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span><strong>Complete constituency packages:</strong> Custom quote</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">What We Provide:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>End-to-end campaign management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Strategic location recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Design & creative services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Rapid installation teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>24x7 campaign support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-600 text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">Planning an Election Campaign?</p>
            <p className="text-lg mb-4">Call us for a complete campaign strategy and quote</p>
            <a href="tel:+919456497636" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call +91 94564 97636
            </a>
          </div>
        </div>
      </section>

      {/* Campaign Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Political Campaign Timeline</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { phase: "Planning (4-8 weeks before)", tasks: "Constituency survey, budget planning, location scouting, design concepts" },
            { phase: "Pre-Campaign (3-4 weeks before)", tasks: "Major hoardings, wall paintings, vehicle branding, flag installation" },
            { phase: "Peak Campaign (2-3 weeks before)", tasks: "Banners, posters, cutouts, LED van tours, rally materials" },
            { phase: "Final Week (1 week before)", tasks: "Last-minute placements, polling booth materials, emergency supplies" },
            { phase: "Election Day", tasks: "Polling booth signage, agent materials, last-minute support" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-600">
              <h3 className="font-bold text-lg mb-2 text-gray-900">{item.phase}</h3>
              <p className="text-sm text-gray-600">{item.tasks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Strategic Locations for Political Ads</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Urban Areas</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Major chowks & intersections</strong> – Delhi Road, Garh Road, Roorkee Road chowks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Marketplaces</strong> – Shastri Nagar, Gandhi Bagh, Begum Bridge Road</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Bus stands & railway stations</strong> – Meerut Bus Stand, Railway Station</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Educational institutions</strong> – University Road, Medical College Road</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Commercial complexes</strong> – PVS Mall, Wave Mall area</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Rural & Semi-Urban Areas</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Village entry points</strong> – Main roads into villages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Weekly markets</strong> – Haat bazaar locations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Bus stops</strong> – Rural bus stands and stops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Panchayat buildings</strong> – Gram panchayat offices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Temple/mosque areas</strong> – Religious sites with high footfall</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Success Factors for Political Campaigns</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { factor: "Visibility", desc: "Strategic placement in high-traffic areas" },
            { factor: "Frequency", desc: "Multiple touchpoints across constituency" },
            { factor: "Consistency", desc: "Uniform branding across all materials" },
            { factor: "Timing", desc: "Right message at the right phase" },
            { factor: "Coverage", desc: "Urban & rural both equally covered" },
            { factor: "Quality", desc: "Professional printing and installation" },
            { factor: "Speed", desc: "Rapid response to competition" },
            { factor: "Local Connect", desc: "Messages in local language & context" },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-lg p-4 text-center">
              <h3 className="font-bold text-lg text-orange-600 mb-2">{item.factor}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
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
              q: "How early should I start my political advertising campaign?",
              a: "For major elections, we recommend starting 2-3 months in advance. This allows time for strategic planning, location booking (premium spots get booked early), and phased execution. Last-minute campaigns can be executed but may have limited location options."
            },
            {
              q: "Do you handle campaigns for both parties and independent candidates?",
              a: "Yes, we work with all political parties and independent candidates. Our services are non-partisan – we provide the same quality and commitment to every client."
            },
            {
              q: "What is the most effective political advertising medium?",
              a: "A combination works best: hoardings for visibility, wall paintings for rural reach, banners for events, and LED vans for audio-visual impact. We recommend an integrated approach based on your budget and constituency."
            },
            {
              q: "Do you provide design services for campaign materials?",
              a: "Yes, our creative team specializes in political campaign design – from candidate photos and party symbols to slogans and messaging. We ensure all materials are consistent with your branding."
            },
            {
              q: "How do you handle last-minute campaign emergencies?",
              a: "We maintain 24/7 operations during election season. For urgent requirements, we can print and install within 24-48 hours depending on quantity and location."
            },
            {
              q: "Do you provide coverage in remote villages?",
              a: "Yes, we have teams that cover all villages across Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, and surrounding districts. Rural coverage is our specialty."
            },
            {
              q: "What permits are required for political advertising?",
              a: "We handle all necessary permissions from local authorities, including municipal corporations, panchayats, and election commission guidelines. We ensure your campaign is compliant with all regulations."
            },
            {
              q: "Do you offer complete constituency packages?",
              a: "Yes, we offer end-to-end constituency packages including location survey, strategic planning, all materials (hoardings, wall paintings, banners, flags), installation, and campaign support. Contact us for a customized quote."
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
            <p className="text-gray-600 text-sm">Premium hoarding placements across constituencies</p>
          </Link>
          <Link href="/services/digital-wall-painting-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Digital Wall Painting Meerut</h3>
            <p className="text-gray-600 text-sm">Long-term wall advertisements in rural areas</p>
          </Link>
          <Link href="/services/flex-printing-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Flex Printing Meerut</h3>
            <p className="text-gray-600 text-sm">Bulk printing for campaign materials</p>
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Our Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/meerut" className="text-orange-600 hover:underline">Meerut</Link>
          <Link href="/locations/muzaffarnagar" className="text-orange-600 hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-orange-600 hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-orange-600 hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-orange-600 hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-ncr" className="text-orange-600 hover:underline">Delhi NCR</Link>
          <Link href="/locations/hapur" className="text-orange-600 hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-orange-600 hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}