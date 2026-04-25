import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vehicle Branding in Meerut | Fleet & Car Wraps | Mobile Advertising | World Media NCR',
  description: 'Professional vehicle branding services in Meerut. Transform your fleet into moving billboards. High-quality vinyl wraps for cars, trucks, buses, and commercial vehicles. Mobile advertising with thousands of daily impressions across NCR.',
  keywords: 'vehicle branding meerut, car branding meerut, truck branding meerut, fleet branding meerut, vehicle wrap meerut, mobile advertising meerut, commercial vehicle branding, bus branding meerut, vehicle graphics meerut, car wrap meerut, fleet branding muzaffarnagar',
  alternates: {
    canonical: 'https://worldmediancr.com/services/vehicle-branding-meerut',
  },
  openGraph: {
    title: 'Vehicle Branding in Meerut | Fleet & Car Wraps | World Media NCR',
    description: 'Professional vehicle branding services in Meerut. Transform your fleet into moving billboards with high-quality vinyl wraps.',
    url: 'https://worldmediancr.com/services/vehicle-branding-meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/services/toWEBP/vb2.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

// Vehicle branding types with icons
const vehicleTypes = [
  { 
    type: "Car Branding", 
    icon: "🚗",
    desc: "Full or partial wraps for sedans, SUVs, and hatchbacks", 
    features: ["Sedan, SUV, Hatchback", "Full or partial coverage", "Premium cast vinyl"]
  },
  { 
    type: "Truck Branding", 
    icon: "🚛",
    desc: "Complete wraps for delivery trucks, lorries, and transport vehicles", 
    features: ["14ft, 17ft, 20ft+ trucks", "Full fleet consistency", "Weather-resistant materials"]
  },
  { 
    type: "Bus Branding", 
    icon: "🚌",
    desc: "School buses, city buses, and private coaches", 
    features: ["Full bus wraps", "Partial placements", "Maximum surface impact"]
  },
  { 
    type: "Commercial Fleet", 
    icon: "🚐",
    desc: "Tempo, pickup vans, auto rickshaws, and delivery vehicles", 
    features: ["Small commercial vehicles", "Cost-effective solutions", "Consistent fleet branding"]
  },
];

// Industries that benefit from vehicle branding
const industries = [
  "Logistics Companies", "Real Estate Agents", "Food & Beverage", "E-commerce Delivery",
  "Construction Companies", "Education Institutes", "Healthcare Services", "Retail Chains",
  "Event Management", "Fitness Centers", "Beauty & Salons", "Electrical Services",
  "Plumbing Services", "Moving Companies", "Catering Services", "Political Campaigns"
];

export default function VehicleBrandingPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/services/toWEBP/vb2.webp"
            alt="Vehicle branding background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-amber-300 mb-4">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <span className="text-amber-300">Vehicle Branding</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Vehicle Branding <span className="text-amber-400">in Meerut</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your fleet into moving billboards. Professional vinyl wraps for cars, trucks, buses, and commercial vehicles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                Get a Quote
              </Link>
              <a 
                href="#types" 
                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition"
              >
                Explore Options
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "1000+", label: "Vehicles Branded", icon: "🚛" },
            { number: "3-5", label: "Years Longevity", icon: "⏱️" },
            { number: "50K+", label: "Daily Impressions", icon: "👁️" },
            { number: "100%", label: "Paint Protection", icon: "🛡️" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-amber-600">{stat.number}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* What is Vehicle Branding */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
              Professional Vehicle Branding Services in Meerut
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              <strong className="text-gray-900">World Media NCR</strong> offers premium <strong className="text-gray-900">vehicle branding in Meerut</strong> – one of the most effective mobile advertising solutions. Transform your fleet into moving billboards that travel across the city.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Unlike static advertising, vehicle branding moves through high-traffic areas, residential neighborhoods, commercial districts, and highways, reaching thousands of potential customers every day. From cars to trucks to buses, we wrap them all with professional-grade vinyl.
            </p>
            <div className="space-y-3">
              {[
                "Premium cast vinyl with UV protection",
                "Weather-resistant and durable (3-5 years)",
                "Professional design and installation",
                "Protects original paint underneath",
                "Easy removal without damage"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
            <Image
              src="/images/services/toWEBP/vb2.webp"
              alt="Hoarding advertising at prime location in Meerut"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Types of Vehicle Branding */}
        <div id="types" className="mb-20">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Types of Vehicle Branding We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Custom wraps for every vehicle type, budget, and branding requirement
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {vehicleTypes.map((item, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <ul className="space-y-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="text-amber-500">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Why Choose Vehicle Branding?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mobile advertising delivers unmatched reach and cost-effectiveness
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Mobile Advertising", 
                icon: "🚚",
                desc: "Your ad travels across Meerut, Muzaffarnagar, Shamli, and beyond—reaching diverse audiences daily." 
              },
              { 
                title: "Massive Impressions", 
                icon: "📊",
                desc: "A single branded vehicle can generate 30,000-70,000 daily impressions depending on routes traveled." 
              },
              { 
                title: "Paint Protection", 
                icon: "🛡️",
                desc: "Vinyl wraps protect original paint from UV rays, scratches, and minor abrasions." 
              },
              { 
                title: "Professional Image", 
                icon: "💼",
                desc: "Branded vehicles look professional and build trust. They make your business appear established." 
              },
              { 
                title: "Easy Removal", 
                icon: "🔧",
                desc: "Wraps can be removed without damaging the original paint when you want to sell the vehicle." 
              },
              { 
                title: "Consistent Branding", 
                icon: "🎯",
                desc: "Maintain brand consistency across your entire fleet for maximum recognition." 
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Our Vehicle Branding Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional workflow ensuring perfect results every time
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Discuss goals, vehicle type, and design preferences" },
              { step: "02", title: "Design", desc: "Our team creates custom mockups for approval" },
              { step: "03", title: "Printing", desc: "High-resolution printing on premium cast vinyl" },
              { step: "04", title: "Installation", desc: "Professional application by trained installers" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Who Uses Vehicle Branding?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across multiple sectors for mobile advertising
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-amber-100 hover:text-amber-700 transition cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Installation Timeline */}
        <div className="mb-20 bg-amber-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Installation Timeline
            </h2>
            <p className="text-gray-600 mt-2">
              Professional installation with minimal vehicle downtime
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { vehicle: "Cars", time: "1-2 days", icon: "🚗" },
              { vehicle: "Trucks", time: "2-3 days", icon: "🚛" },
              { vehicle: "Buses", time: "3-4 days", icon: "🚌" },
              { vehicle: "Fleet", time: "Custom schedule", icon: "🚐" }
            ].map((item, i) => (
              <div key={i} className="text-center bg-white rounded-xl p-5 shadow-sm">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900">{item.vehicle}</h3>
                <p className="text-amber-600 font-semibold mt-1">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-0">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about vehicle branding in Meerut
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How long does vehicle branding last?",
                a: "Professional vinyl wraps typically last 3-5 years with proper care. Our wraps come with a warranty against fading, peeling, and bubbling."
              },
              {
                q: "Will the wrap damage my vehicle's paint?",
                a: "No, when professionally installed and removed, vinyl wraps actually protect the original paint from UV rays, minor scratches, and stone chips."
              },
              {
                q: "How many people will see my branded vehicle?",
                a: "A branded vehicle in Meerut can generate 30,000-70,000 daily impressions depending on routes traveled—extremely cost-effective compared to static billboards."
              },
              {
                q: "What's the difference between partial and full wrap?",
                a: "A partial wrap covers specific areas (30-50% of vehicle). A full wrap covers the entire vehicle exterior. Partial wraps are more budget-friendly."
              },
              {
                q: "How long does installation take?",
                a: "Cars take 1-2 days, trucks 2-3 days, and buses 3-4 days. We'll provide a specific timeline based on your vehicle type and wrap complexity."
              },
              {
                q: "Do you provide design services?",
                a: "Yes, our in-house design team creates professional vehicle wrap designs. We provide mockups for approval before printing and installation."
              },
              {
                q: "Do you offer vehicle branding in other cities?",
                a: "Yes, we serve clients across Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, and Delhi NCR."
              },
              {
                q: "Can I brand a personal vehicle?",
                a: "Absolutely. Many professionals (real estate agents, consultants, service providers) brand their personal vehicles to turn daily commute into marketing."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}