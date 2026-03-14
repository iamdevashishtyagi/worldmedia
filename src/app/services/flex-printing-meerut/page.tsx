import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Flex Printing in Meerut | Banner & Hoarding Printing | World Media NCR',
  description: 'High-quality flex printing services in Meerut for hoardings, banners, posters, and outdoor displays. UV-resistant, weather-proof prints. Fast turnaround for events, promotions, and campaigns. Competitive rates.',
  keywords: 'flex printing meerut, banner printing meerut, hoarding printing meerut, flex printer near me, outdoor banner printing meerut, digital flex printing, vinyl printing meerut, flex print shop meerut, flex banner price',
  alternates: {
    canonical: 'https://worldmediancr.com/services/flex-printing-meerut',
  },
  openGraph: {
    title: 'Flex Printing in Meerut | World Media NCR',
    description: 'Professional flex printing services in Meerut for hoardings, banners, and outdoor displays. High-quality, weather-resistant prints.',
    url: 'https://worldmediancr.com/services/flex-printing-meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/flex-printing-sample.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function FlexPrintingPage() {
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
              <span className="text-gray-500">Flex Printing Meerut</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Professional Flex Printing Services in Meerut
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>World Media NCR</strong> offers high-quality <strong>flex printing in Meerut</strong> for all your outdoor advertising needs. From large-format hoardings to event banners, promotional displays, and retail signage – we deliver crisp, vibrant, and durable prints.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Using state-of-the-art digital printing technology and premium materials, our flex prints are UV-resistant, weather-proof, and designed to withstand Meerut's diverse climate conditions. Whether you need a single banner or bulk printing for a campaign, we ensure fast turnaround without compromising on quality.
          </p>
          <div className="bg-red-50 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Choose Our Flex Printing?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>High-resolution</strong> 1440 DPI printing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>UV-resistant & waterproof</strong> materials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Multiple size options</strong> – from small banners to large hoardings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Fast turnaround</strong> – 24-48 hour delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Competitive rates</strong> with bulk discounts</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
          <div className="text-center p-8">
            <span className="text-6xl mb-4 block">🖨️</span>
            <p className="text-gray-500">Flex Printing Image</p>
            <p className="text-sm text-gray-400">(Add your flex printing photos here)</p>
          </div>
        </div>
      </div>

      {/* Types of Flex Printing */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Types of Flex Printing We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              type: "Hoarding Flex", 
              icon: "📺",
              desc: "Large-format printing for outdoor hoardings and billboards", 
              material: "Frontlit, backlit, or vinyl",
              use: "Perfect for highway hoardings and building wraps"
            },
            { 
              type: "Banner Printing", 
              icon: "🏴",
              desc: "Standard banners for events, promotions, and displays", 
              material: "Reinforced vinyl with grommets",
              use: "Ideal for store promotions, events, and exhibitions"
            },
            { 
              type: "Roll-up Standees", 
              icon: "📋",
              desc: "Portable retractable banners for indoor use", 
              material: "Satin or matte finish with stand",
              use: "Perfect for trade shows, receptions, and offices"
            },
            { 
              type: "Poster Printing", 
              icon: "🖼️",
              desc: "High-quality posters for indoor and outdoor display", 
              material: "Glossy, matte, or photo paper",
              use: "Ideal for movie promotions, events, and retail"
            },
            { 
              type: "Vinyl Stickers", 
              icon: "🏷️",
              desc: "Custom cut stickers and decals for branding", 
              material: "Vinyl with adhesive backing",
              use: "Perfect for vehicle branding, windows, and products"
            },
            { 
              type: "Flex Boards", 
              icon: "📌",
              desc: "Rigid boards for permanent installations", 
              material: "Sunboard, PVC, or acrylic with flex",
              use: "Ideal for shop signage and direction boards"
            },
            { 
              type: "Mesh Banners", 
              icon: "🕸️",
              desc: "Wind-permeable banners for outdoor use", 
              material: "Perforated mesh vinyl",
              use: "Perfect for windy locations and balcony wraps"
            },
            { 
              type: "Canvas Printing", 
              icon: "🎨",
              desc: "Artistic prints on canvas material", 
              material: "Textured canvas with frame",
              use: "Ideal for office decor and art reproductions"
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.type}</h3>
              <p className="text-gray-600 mb-2">{item.desc}</p>
              <p className="text-sm text-gray-500 mb-1"><span className="font-semibold">Material:</span> {item.material}</p>
              <p className="text-sm text-gray-500"><span className="font-semibold">Use:</span> {item.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Flex Printing Price List</h2>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Print Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Material</th>
                  <th className="py-3 px-4 text-left font-semibold">Size Range</th>
                  <th className="py-3 px-4 text-left font-semibold">Price (per sq ft)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Frontlit Flex</td>
                  <td className="py-3 px-4">Standard 260 GSM</td>
                  <td className="py-3 px-4">Any size</td>
                  <td className="py-3 px-4">₹18 - ₹25</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">Backlit Flex</td>
                  <td className="py-3 px-4">Translucent 280 GSM</td>
                  <td className="py-3 px-4">Any size</td>
                  <td className="py-3 px-4">₹25 - ₹35</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Vinyl Banner</td>
                  <td className="py-3 px-4">Reinforced 320 GSM</td>
                  <td className="py-3 px-4">Any size</td>
                  <td className="py-3 px-4">₹30 - ₹40</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">Mesh Banner</td>
                  <td className="py-3 px-4">Perforated mesh</td>
                  <td className="py-3 px-4">Any size</td>
                  <td className="py-3 px-4">₹40 - ₹50</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">One-way Vision</td>
                  <td className="py-3 px-4">Perforated vinyl</td>
                  <td className="py-3 px-4">Any size</td>
                  <td className="py-3 px-4">₹60 - ₹80</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">PVC Banner</td>
                  <td className="py-3 px-4">Flexible PVC</td>
                  <td className="py-3 px-4">Any size</td>
                  <td className="py-3 px-4">₹45 - ₹60</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Additional Services & Costs:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✓</span>
                  <span><strong>Design & artwork:</strong> ₹500 - ₹2,000 (free for bulk orders)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✓</span>
                  <span><strong>Grommets/eyelets:</strong> ₹10-20 per piece</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✓</span>
                  <span><strong>Pole pockets:</strong> ₹50-100 per banner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✓</span>
                  <span><strong>Lamination:</strong> ₹5-10 per sq ft</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✓</span>
                  <span><strong>Installation:</strong> ₹500 - ₹5,000 depending on location</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Bulk Order Discounts</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✓</span>
                  <span><strong>100-500 sq ft:</strong> 5% discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✓</span>
                  <span><strong>501-1000 sq ft:</strong> 10% discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✓</span>
                  <span><strong>1000+ sq ft:</strong> 15% discount</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Free delivery within Meerut city for orders above ₹5,000</p>
            </div>
          </div>

          <div className="bg-red-600 text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">Need a Quote for Bulk Printing?</p>
            <p className="text-lg mb-4">Call us for the best rates on large format printing</p>
            <a href="tel:+919456497636" className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call +91 94564 97636
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Choose Professional Flex Printing?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Vibrant Colors", desc: "High-resolution printing with fade-resistant inks ensures your designs look vibrant and professional." },
            { title: "Weather Resistant", desc: "Our flex materials are UV-treated and waterproof, perfect for Meerut's summer heat and monsoon rains." },
            { title: "Cost-Effective", desc: "Flex printing offers the best value for large-format advertising compared to other mediums." },
            { title: "Quick Turnaround", desc: "Most orders are ready within 24-48 hours, helping you meet tight campaign deadlines." },
            { title: "Custom Sizes", desc: "We print any size – from small A3 posters to massive 40x20 ft hoardings." },
            { title: "Easy Installation", desc: "Our team can install your flex at any location across Meerut and NCR." },
          ].map((benefit, i) => (
            <div key={i} className="border-l-4 border-red-600 pl-4 py-2 bg-white p-5 rounded-r-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Uses */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Common Uses of Flex Printing</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Hoarding & Billboards", "Event Banners", "Shop Signage", "Exhibition Displays",
            "Political Campaigns", "Festival Promotions", "Product Launches", "Real Estate Ads",
            "Trade Show Booths", "Retail Store Displays", "Corporate Events", "Wedding Banners",
            "Educational Events", "Religious Festivals", "Sports Events", "Government Campaigns"
          ].map((use, i) => (
            <div key={i} className="bg-gray-100 p-3 rounded-lg text-center font-medium text-gray-800 hover:bg-red-100 transition">
              {use}
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Flex Printing Process</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: "1. Consultation", desc: "Discuss your requirements, size, quantity, and deadline" },
            { step: "2. Design", desc: "Create or refine your artwork for print optimization" },
            { step: "3. Proofing", desc: "Digital proof sent for your approval" },
            { step: "4. Printing", desc: "High-resolution printing on selected material" },
            { step: "5. Finishing", desc: "Cutting, hemming, grommets, and quality check" },
            { step: "6. Packaging", desc: "Carefully rolled and packed for transport" },
            { step: "7. Delivery", desc: "Free delivery within Meerut (conditions apply)" },
            { step: "8. Installation", desc: "Professional installation at your location" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-5 rounded-lg text-center border border-gray-100">
              <div className="text-2xl font-bold text-red-600 mb-2">{item.step}</div>
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
              q: "What is the turnaround time for flex printing?",
              a: "Standard orders are delivered within 24-48 hours. For large hoardings (above 500 sq ft), we may need 2-3 days. Urgent orders can be completed in 12-24 hours at an additional cost."
            },
            {
              q: "What file formats do you accept for printing?",
              a: "We accept all standard formats: JPEG, PNG, PDF, AI, PSD, CDR, and EPS. For best results, we recommend high-resolution files (150-300 DPI) and vector formats for logos and text."
            },
            {
              q: "Do you provide design services if I don't have a design?",
              a: "Yes, our in-house design team can create professional designs for your flex prints. Charges start from ₹500 for basic designs and are free for bulk orders above ₹5,000."
            },
            {
              q: "What is the difference between frontlit and backlit flex?",
              a: "Frontlit flex is designed for standard hoardings with front lighting or daytime viewing. Backlit flex is translucent and designed to be lit from behind, creating a glowing effect ideal for light boxes and illuminated signs."
            },
            {
              q: "How long do outdoor flex prints last?",
              a: "Our outdoor flex prints typically last 6 months to 1 year depending on weather conditions. UV-treated materials resist fading, and proper installation ensures they withstand wind and rain."
            },
            {
              q: "Do you offer installation services?",
              a: "Yes, we provide professional installation services across Meerut and NCR. Our team can install hoardings, banners, and signage at ground level or heights. Installation charges vary by location and complexity."
            },
            {
              q: "What is the minimum order quantity?",
              a: "There is no minimum order quantity. We accept orders of all sizes, from single banners to bulk printing for large campaigns."
            },
            {
              q: "Do you deliver outside Meerut?",
              a: "Yes, we ship flex prints to Muzaffarnagar, Shamli, Saharanpur, Baghpat, Delhi NCR, and other cities. Courier charges apply based on distance and order size."
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
            <p className="text-gray-600 text-sm">Premium billboard placements across the city</p>
          </Link>
          <Link href="/services/digital-wall-painting-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Digital Wall Painting Meerut</h3>
            <p className="text-gray-600 text-sm">Long-term wall advertisements</p>
          </Link>
          <Link href="/services/vehicle-branding-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Vehicle Branding Meerut</h3>
            <p className="text-gray-600 text-sm">Mobile advertising on wheels</p>
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Our Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/meerut" className="text-red-600 hover:underline">Meerut</Link>
          <Link href="/locations/muzaffarnagar" className="text-red-600 hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-red-600 hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-red-600 hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-red-600 hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-ncr" className="text-red-600 hover:underline">Delhi NCR</Link>
          <Link href="/locations/hapur" className="text-red-600 hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-red-600 hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}