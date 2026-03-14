import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hoarding Advertising in Meerut | Billboard & Outdoor Hoardings | World Media NCR',
  description: 'Premium hoarding advertising in Meerut & NCR. Strategic billboard placements on highways, markets & prime locations. 10+ years of experience. Get the best rates for hoarding in Meerut, Muzaffarnagar, Shamli & Saharanpur.',
  keywords: 'hoarding advertising meerut, billboard advertising meerut, outdoor hoardings meerut, hoarding near meerut, advertising hoardings meerut, hoarding contractors meerut, hoarding on delhi road meerut, hoarding rates meerut, hoarding locations meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/services/hoarding-advertising-meerut',
  },
  openGraph: {
    title: 'Hoarding Advertising in Meerut | World Media NCR',
    description: 'Premium hoarding advertising services at prime locations across Meerut & NCR. Strategic placements on Delhi Road, Roorkee Road, Garh Road and highways.',
    url: 'https://worldmediancr.com/services/hoarding-advertising-meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Baghra Bus Stand.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HoardingAdvertisingPage() {
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
              <span className="text-gray-500">Hoarding Advertising Meerut</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Professional Hoarding Advertising Services in Meerut
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>World Media NCR</strong> offers premium <strong>hoarding advertising in Meerut</strong> and across NCR. With strategic locations on major highways, busy intersections, and commercial areas, our hoardings ensure your brand gets maximum visibility with thousands of daily impressions.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Since 2013, we have helped local businesses, national brands, and political campaigns achieve their advertising goals through high-impact outdoor hoardings. Our team handles everything from location selection and permits to design, printing, and installation.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Choose World Media NCR for Hoarding?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>10+ years experience</strong> in outdoor advertising</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Premium locations</strong> on Delhi Road, Roorkee Road, Garh Road & highways</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Government-approved</strong> hoarding sites with all permits handled</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>500+ successful projects</strong> for national and local brands</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Competitive rates</strong> starting from ₹8,000/month</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/images/portfolio/Baghra Bus Stand.webp" 
            alt="Hoarding advertising at Baghra Bus Stand, Meerut by World Media NCR - premium outdoor advertising location"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Prime Locations Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Prime Hoarding Locations in Meerut & NCR</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Delhi Road, Meerut", traffic: "100,000+ daily commuters", desc: "Main highway connecting to Delhi, premium advertising spot" },
            { name: "Roorkee Road, Meerut", traffic: "80,000+ daily commuters", desc: "Near educational institutions, heavy student traffic" },
            { name: "Garh Road, Meerut", traffic: "70,000+ daily commuters", desc: "Commercial district with shops and businesses" },
            { name: "Muzaffarnagar Highway", traffic: "60,000+ daily commuters", desc: "Interstate route with high-speed traffic" },
            { name: "Shamli Road", traffic: "40,000+ daily commuters", desc: "Industrial area with B2B opportunities" },
            { name: "Baghpat Road", traffic: "30,000+ daily commuters", desc: "Connecting rural and urban markets" },
            { name: "Saharanpur Highway", traffic: "50,000+ daily", desc: "Major commuter route to Saharanpur" },
            { name: "University Road, Meerut", traffic: "45,000+ daily", desc: "Near Chaudhary Charan Singh University" },
            { name: "Delhi NCR Highways", traffic: "Varies by location", desc: "Strategic spots across NCR" },
          ].map((location, i) => (
            <div key={i} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{location.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{location.traffic}</p>
              <p className="text-gray-600">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Hoardings Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Types of Hoarding Advertising We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { type: "Billboard Hoardings", desc: "Large format advertising on main roads", size: "10x10 to 40x20 feet", use: "Best for highway and main road visibility" },
            { type: "Unipole Hoardings", desc: "Single-pole mounted for maximum visibility", size: "20x10, 20x15 feet", use: "Ideal for high-traffic intersections" },
            { type: "Gantry Hoardings", desc: "Overhead structures on highways", size: "30x10, 40x10 feet", use: "Perfect for multi-lane highways" },
            { type: "Building Wrap Hoardings", desc: "Complete building coverage", size: "Custom sizes", use: "Dominant presence in commercial areas" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.type}</h3>
              <p className="text-gray-700 mb-2">{item.desc}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Size:</span> {item.size}</p>
              <p className="text-sm text-gray-600"><span className="font-semibold">Ideal for:</span> {item.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Information */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Hoarding Advertising Costs in Meerut</h2>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <p className="text-lg mb-6">Our hoarding advertising packages are customized based on your specific requirements. Here&apos;s a general pricing guide:</p>
          
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Location Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Size</th>
                  <th className="py-3 px-4 text-left font-semibold">Monthly Rate (Approx)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4">Premium (Delhi Road, Main Highways)</td>
                  <td className="py-3 px-4">20x10 ft</td>
                  <td className="py-3 px-4">₹25,000 - ₹50,000</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4">High-Traffic (Roorkee Road, Garh Road)</td>
                  <td className="py-3 px-4">15x10 ft</td>
                  <td className="py-3 px-4">₹15,000 - ₹25,000</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4">Secondary Locations</td>
                  <td className="py-3 px-4">10x10 ft</td>
                  <td className="py-3 px-4">₹8,000 - ₹15,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Factors Affecting Cost:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">•</span>
                  <span><strong>Location:</strong> Premium spots with higher traffic command higher rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">•</span>
                  <span><strong>Size:</strong> Larger hoardings cost more but offer greater impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">•</span>
                  <span><strong>Duration:</strong> Longer contracts (6 months/1 year) get better rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-gray-700">•</span>
                  <span><strong>Illumination:</strong> Backlit or LED lighting adds to cost but enables 24/7 visibility</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Bulk Booking Discounts</h3>
              <p className="text-gray-700 mb-3">Book multiple hoardings across different locations and save:</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>2-3 hoardings: 5% discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>4-6 hoardings: 10% discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>7+ hoardings: Custom quote</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">Need a Custom Quote?</p>
            <p className="text-lg mb-4">Call us for exact pricing based on your requirements</p>
            <a href="tel:+919456497636" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call +91 94564 97636
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Benefits of Hoarding Advertising</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "24/7 Visibility", desc: "Your brand message works round the clock, every day of the year. No on/off timings, no ad blockers." },
            { title: "High Impact", desc: "Large format catches attention instantly and creates lasting brand recall among commuters." },
            { title: "Cost-Effective", desc: "Low cost per thousand impressions compared to TV, print, or digital advertising." },
            { title: "Local Targeting", desc: "Reach specific neighborhoods, markets, and demographics in Meerut and NCR." },
            { title: "Brand Prestige", desc: "Prime hoarding locations build credibility and establish brand authority." },
            { title: "Complements Digital", desc: "Add QR codes, website URLs, and social media handles to drive online traffic." },
          ].map((benefit, i) => (
            <div key={i} className="border-l-4 border-blue-600 pl-4 py-2 bg-white p-5 rounded-r-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Hoarding Projects Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Baghra Bus Stand", file: "Baghra Bus Stand.webp" },
            { name: "Bhasuma Main Road", file: "Bhasuma Main Road.webp" },
            { name: "Muzaffarnagar Meerut Road", file: "Muzaffarnagar Meerut Road.webp" },
            { name: "Shamli Kairana Road", file: "SHAMLI KAIRANA ROAD.webp" },
            { name: "Saharanpur Chhutmalpur", file: "Saharanpur Chhutmalpur.webp" },
            { name: "Meerut Sardhana", file: "Meerut Sardhana.webp" },
            { name: "Muzaffarnagar Rorkee Road", file: "Muzaffarnagar Rorkee Road.webp" },
            { name: "Shamli Mandi Samiti", file: "Shamli Mandi Samiti T Point.webp" },
          ].map((project, i) => (
            <div key={i} className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
              <Image 
                src={`/images/portfolio/${project.file}`}
                alt={`Hoarding advertising at ${project.name} by World Media NCR - leading advertising agency in Meerut`}
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
          <Link href="/gallery" className="text-blue-600 font-semibold hover:underline">
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How much does hoarding advertising cost in Meerut?",
              a: "Hoarding costs in Meerut range from ₹8,000 to ₹50,000 per month depending on location, size, and duration. Premium locations on Delhi Road or Muzaffarnagar Highway cost ₹25,000-50,000/month, while secondary locations start from ₹8,000/month. Contact us for exact pricing based on your requirements."
            },
            {
              q: "What are the best locations for hoarding in Meerut?",
              a: "The best hoarding locations in Meerut include Delhi Road (100,000+ daily commuters), Roorkee Road (near educational institutions), Garh Road (commercial district), and Muzaffarnagar Highway (interstate route). We also have prime spots at Gokalpuri, Shiv Chowk, Medical College Road, and major intersections."
            },
            {
              q: "Do you provide hoarding design services?",
              a: "Yes, we provide complete hoarding design services including creative concept development, graphic design, and copywriting. Our in-house design team ensures your advertisement stands out with bold visuals and compelling messaging that resonates with your target audience."
            },
            {
              q: "What is the minimum duration for hoarding advertising?",
              a: "We offer flexible durations starting from 1 month to annual contracts. Monthly rentals are available, but longer durations (6 months or 1 year) get priority for premium locations and better rates. Yearly contracts can save you up to 20% compared to monthly rentals."
            },
            {
              q: "Do you have hoardings in Muzaffarnagar, Shamli, and Saharanpur?",
              a: "Yes, we have extensive hoarding networks across Muzaffarnagar (Meerut Road, Roorkee Road, Shamli Road), Shamli (Kairana Road, Mandi Samiti, Madheit Road), Saharanpur (Chhutmalpur, Shakumbri Devi), Baghpat, and other NCR cities."
            },
            {
              q: "How do I book a hoarding in Meerut?",
              a: "Simply call us at +91 94564 97636, email us at info@worldmediancr.com, or visit our contact page. We'll discuss your requirements, show you available locations with photos and traffic data, provide a customized quote, and handle all permits and installation."
            },
            {
              q: "Are your hoardings illuminated for night visibility?",
              a: "Yes, we offer various illumination options including front-lit, back-lit, and LED-lit hoardings. Illuminated hoardings ensure your message is visible 24/7 and typically cost 15-25% more than non-illuminated ones."
            },
            {
              q: "Do you handle printing and installation?",
              a: "Yes, we provide end-to-end service including design, high-quality flex printing, fabrication, installation, and maintenance. You just need to approve the design, and we handle everything else."
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
          <Link href="/services/digital-wall-painting-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Digital Wall Painting Meerut</h3>
            <p className="text-gray-600 text-sm">Cost-effective long-term wall advertisements</p>
          </Link>
          <Link href="/services/billboard-advertising-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Billboard Advertising Meerut</h3>
            <p className="text-gray-600 text-sm">Large format outdoor displays</p>
          </Link>
          <Link href="/services/vehicle-branding-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Vehicle Branding Meerut</h3>
            <p className="text-gray-600 text-sm">Mobile advertising on wheels</p>
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Our Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/meerut" className="text-blue-600 hover:underline">Meerut</Link>
          <Link href="/locations/muzaffarnagar" className="text-blue-600 hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-blue-600 hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-blue-600 hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-blue-600 hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-ncr" className="text-blue-600 hover:underline">Delhi NCR</Link>
          <Link href="/locations/hapur" className="text-blue-600 hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-blue-600 hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}