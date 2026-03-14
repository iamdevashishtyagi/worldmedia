import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vehicle Branding in Meerut | Fleet & Car Wraps | World Media NCR',
  description: 'Professional vehicle branding services in Meerut. Turn your fleet into moving billboards. High-quality vinyl wraps for cars, trucks, buses, and commercial vehicles. Cost-effective mobile advertising with thousands of daily impressions.',
  keywords: 'vehicle branding meerut, car branding meerut, truck branding meerut, fleet branding meerut, vehicle wrap meerut, mobile advertising meerut, commercial vehicle branding, bus branding meerut, vehicle graphics meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/services/vehicle-branding-meerut',
  },
  openGraph: {
    title: 'Vehicle Branding in Meerut | World Media NCR',
    description: 'Professional vehicle branding services in Meerut. Transform your fleet into moving billboards with high-quality vinyl wraps.',
    url: 'https://worldmediancr.com/services/vehicle-branding-meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/vehicle-branding-sample.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function VehicleBrandingPage() {
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
              <span className="text-gray-500">Vehicle Branding Meerut</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Professional Vehicle Branding Services in Meerut
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>World Media NCR</strong> offers premium <strong>vehicle branding in Meerut</strong> – one of the most cost-effective mobile advertising solutions. Transform your fleet of cars, trucks, buses, or commercial vehicles into moving billboards that travel across the city.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With vehicle branding, your advertisement doesn&apos;t stay in one place – it moves through high-traffic areas, residential neighborhoods, commercial districts, and highways, reaching thousands of potential customers every day.
          </p>
          <div className="bg-amber-50 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Choose Vehicle Branding?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>Mobile advertising</strong> – your ad travels across the city</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>One-time cost</strong> – lasts 3-5 years with proper maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>High visibility</strong> – thousands of daily impressions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>Professional-grade vinyl</strong> – weather-resistant and durable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>Full vehicle or partial wraps</strong> – options for every budget</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
          <div className="text-center p-8">
            <span className="text-6xl mb-4 block">🚛</span>
            <p className="text-gray-500">Vehicle Branding Image</p>
            <p className="text-sm text-gray-400">(Add your vehicle branding photos here)</p>
          </div>
        </div>
      </div>

      {/* Types of Vehicle Branding */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Types of Vehicle Branding We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              type: "Car Branding", 
              icon: "🚗",
              desc: "Full or partial wraps for sedans, SUVs, and hatchbacks", 
              coverage: "Sedan: 40-50 sq ft, SUV: 60-70 sq ft",
              use: "Perfect for sales teams, service vehicles, and personal cars"
            },
            { 
              type: "Truck Branding", 
              icon: "🚛",
              desc: "Complete wraps for delivery trucks, lorries, and transport vehicles", 
              coverage: "Depends on truck size (14 ft, 17 ft, 20 ft)",
              use: "Ideal for logistics companies and goods transport"
            },
            { 
              type: "Bus Branding", 
              icon: "🚌",
              desc: "School buses, city buses, and private coaches", 
              coverage: "Full bus wraps or partial placements",
              use: "Maximum visibility with large surface area"
            },
            { 
              type: "Commercial Fleet", 
              icon: "🚐",
              desc: "Tempo, pickup vans, auto rickshaws, and delivery vehicles", 
              coverage: "Customized based on vehicle type",
              use: "Cost-effective for small business fleets"
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.type}</h3>
              <p className="text-gray-600 mb-2">{item.desc}</p>
              <p className="text-sm text-gray-500 mb-1"><span className="font-semibold">Coverage:</span> {item.coverage}</p>
              <p className="text-sm text-gray-500"><span className="font-semibold">Best for:</span> {item.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Vehicle Branding Pricing Guide</h2>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Vehicle Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Partial Wrap</th>
                  <th className="py-3 px-4 text-left font-semibold">Full Wrap</th>
                  <th className="py-3 px-4 text-left font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Hatchback/Sedan</td>
                  <td className="py-3 px-4">₹8,000 - ₹15,000</td>
                  <td className="py-3 px-4">₹20,000 - ₹35,000</td>
                  <td className="py-3 px-4">3-5 years</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">SUV/MUV</td>
                  <td className="py-3 px-4">₹12,000 - ₹20,000</td>
                  <td className="py-3 px-4">₹30,000 - ₹45,000</td>
                  <td className="py-3 px-4">3-5 years</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Pickup/Tempo</td>
                  <td className="py-3 px-4">₹10,000 - ₹18,000</td>
                  <td className="py-3 px-4">₹25,000 - ₹40,000</td>
                  <td className="py-3 px-4">3-5 years</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">Truck (14-17 ft)</td>
                  <td className="py-3 px-4">₹15,000 - ₹25,000</td>
                  <td className="py-3 px-4">₹40,000 - ₹60,000</td>
                  <td className="py-3 px-4">3-5 years</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Truck (20+ ft)</td>
                  <td className="py-3 px-4">₹20,000 - ₹30,000</td>
                  <td className="py-3 px-4">₹55,000 - ₹80,000</td>
                  <td className="py-3 px-4">3-5 years</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">Bus</td>
                  <td className="py-3 px-4">₹25,000 - ₹40,000</td>
                  <td className="py-3 px-4">₹70,000 - ₹1,20,000</td>
                  <td className="py-3 px-4">3-5 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">What&apos;s Included:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>Professional design and artwork creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>High-quality, UV-resistant vinyl material</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>Professional installation by experienced team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>3-year warranty on material and installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span>Removal assistance at end of campaign</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Fleet Discounts</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span><strong>2-5 vehicles:</strong> 5% discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span><strong>6-10 vehicles:</strong> 10% discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  <span><strong>11+ vehicles:</strong> Custom quote</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Bulk branding maintains consistency across your entire fleet</p>
            </div>
          </div>

          <div className="bg-amber-600 text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">Get a Custom Quote for Your Fleet</p>
            <p className="text-lg mb-4">Call us for exact pricing based on your vehicle type and design</p>
            <a href="tel:+919456497636" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call +91 94564 97636
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Benefits of Vehicle Branding</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Mobile Advertising", desc: "Your ad travels across Meerut, Muzaffarnagar, Shamli, and beyond – reaching diverse audiences daily." },
            { title: "Cost-Effective", desc: "One-time investment provides 3-5 years of advertising. Cost per impression is among the lowest of any medium." },
            { title: "High Impressions", desc: "A single branded vehicle can generate 30,000-70,000 daily impressions depending on routes traveled." },
            { title: "Professional Image", desc: "Branded vehicles look professional and build trust with customers. They make your business appear established." },
            { title: "Protects Vehicle", desc: "Vinyl wraps protect the original paint from scratches, UV rays, and minor abrasions." },
            { title: "Easy Removal", desc: "Wraps can be removed without damaging the original paint when you want to sell the vehicle." },
          ].map((benefit, i) => (
            <div key={i} className="border-l-4 border-amber-600 pl-4 py-2 bg-white p-5 rounded-r-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Vehicle Branding Process</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: "1. Consultation", desc: "We discuss your goals, budget, and design preferences" },
            { step: "2. Design", desc: "Our designers create mockups for your approval" },
            { step: "3. Printing", desc: "High-resolution printing on premium vinyl" },
            { step: "4. Surface Prep", desc: "Thorough cleaning of vehicle surface" },
            { step: "5. Installation", desc: "Professional application by experienced team" },
            { step: "6. Quality Check", desc: "Inspection for bubbles, edges, and alignment" },
            { step: "7. Handover", desc: "Final inspection and vehicle handover" },
            { step: "8. Follow-up", desc: "Maintenance tips and warranty support" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-5 rounded-lg text-center border border-gray-100">
              <div className="text-2xl font-bold text-amber-600 mb-2">{item.step}</div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Who Uses Vehicle Branding?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Logistics Companies", "Real Estate Agents", "Food & Beverage", "E-commerce Delivery",
            "Construction Companies", "Education Institutes", "Healthcare Services", "Retail Chains",
            "Event Management", "Fitness Centers", "Beauty & Salons", "Electrical Services",
            "Plumbing Services", "Moving Companies", "Catering Services", "Political Campaigns"
          ].map((industry, i) => (
            <div key={i} className="bg-gray-100 p-3 rounded-lg text-center font-medium text-gray-800 hover:bg-amber-100 transition">
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
              q: "How long does vehicle branding last?",
              a: "Professional vinyl wraps typically last 3-5 years with proper care. The durability depends on exposure to sun, weather conditions, and maintenance. Our wraps come with a 3-year warranty against fading, peeling, and bubbling."
            },
            {
              q: "Will the wrap damage my vehicle's paint?",
              a: "No, when professionally installed and removed, vinyl wraps actually protect the original paint from UV rays, minor scratches, and stone chips. They can be removed without damaging the paint, preserving your vehicle's resale value."
            },
            {
              q: "How many people will see my branded vehicle?",
              a: "A branded vehicle in a city like Meerut can generate 30,000-70,000 impressions daily depending on routes traveled. Over a year, that's 1-2 crore impressions – extremely cost-effective compared to static billboards."
            },
            {
              q: "Can I brand a vehicle I use for personal purposes too?",
              a: "Absolutely. Many professionals (real estate agents, consultants, service providers) brand their personal vehicles. It turns your daily commute into a marketing opportunity while you still use the vehicle normally."
            },
            {
              q: "What's the difference between partial and full wrap?",
              a: "A partial wrap covers specific areas like doors, bonnet, and boot (30-50% of vehicle). A full wrap covers the entire vehicle exterior. Partial wraps are more budget-friendly while still providing good visibility."
            },
            {
              q: "How long does installation take?",
              a: "Installation time varies by vehicle: Cars take 1-2 days, trucks 2-3 days, and buses 3-4 days. We'll provide a specific timeline based on your vehicle type and wrap complexity."
            },
            {
              q: "Do you provide design services?",
              a: "Yes, our in-house design team creates professional vehicle wrap designs tailored to your brand. We provide mockups for approval before printing and installation."
            },
            {
              q: "Do you offer vehicle branding in other cities?",
              a: "Yes, we serve clients across Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, and Delhi NCR. Our team can travel to your location for installation."
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
          <Link href="/services/flex-printing-meerut" className="bg-white p-4 rounded-lg hover:shadow-md transition block">
            <h3 className="font-semibold text-lg text-gray-900">Flex Printing Meerut</h3>
            <p className="text-gray-600 text-sm">High-quality banner printing</p>
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-6 mt-8 text-gray-900">Our Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/meerut" className="text-amber-600 hover:underline">Meerut</Link>
          <Link href="/locations/muzaffarnagar" className="text-amber-600 hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-amber-600 hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-amber-600 hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-amber-600 hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-ncr" className="text-amber-600 hover:underline">Delhi NCR</Link>
          <Link href="/locations/hapur" className="text-amber-600 hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-amber-600 hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}