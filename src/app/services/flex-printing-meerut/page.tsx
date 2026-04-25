import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Flex Printing in Meerut | High-Quality Banner & Hoarding Printing | World Media NCR',
  description: 'Professional flex printing services in Meerut for hoardings, banners, posters, and outdoor displays. UV-resistant, weather-proof prints with 1440 DPI resolution. Fast turnaround for events and campaigns. Trusted by 500+ brands.',
  keywords: 'flex printing meerut, banner printing meerut, hoarding printing meerut, flex printer near me, outdoor banner printing meerut, digital flex printing, vinyl printing meerut, flex print shop meerut, large format printing meerut, flex printing muzaffarnagar',
  alternates: {
    canonical: 'https://worldmediancr.com/services/flex-printing-meerut',
  },
  openGraph: {
    title: 'Flex Printing in Meerut | High-Quality Banner & Hoarding Printing | World Media NCR',
    description: 'Professional flex printing services in Meerut for hoardings, banners, and outdoor displays. High-quality, weather-resistant prints.',
    url: 'https://worldmediancr.com/services/flex-printing-meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/services/Hoarding1.webp',
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
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/services/Hoarding1.webp"
            alt="Flex printing background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-red-300 mb-4">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <span className="text-red-300">Flex Printing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Flex Printing <span className="text-red-400">in Meerut</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              High-resolution, weather-resistant flex printing for hoardings, banners, and outdoor displays. 1440 DPI quality with UV-protected inks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
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
            { number: "5000+", label: "Projects Completed", icon: "🖨️" },
            { number: "1000+", label: "Happy Clients", icon: "😊" },
            { number: "24-48", label: "Hour Turnaround", icon: "⚡" },
            { number: "100%", label: "Quality Guarantee", icon: "✅" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-red-600">{stat.number}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* What is Flex Printing */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
              Professional Flex Printing Services in Meerut
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              <strong className="text-gray-900">World Media NCR</strong> offers premium <strong className="text-gray-900">flex printing in Meerut</strong> for all your advertising needs. From massive hoardings to event banners, we deliver exceptional print quality that makes your brand stand out.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Using state-of-the-art large-format printers and premium materials, our flex prints feature vibrant colors, sharp details, and weather-resistant properties. Whether you need a single banner or bulk printing for a city-wide campaign, we ensure consistent quality and fast delivery.
            </p>
            <div className="space-y-3">
              {[
                "1440 DPI high-resolution printing",
                "UV-resistant & waterproof materials",
                "Indoor & outdoor grade options",
                "Same-day & express printing available",
                "Professional design support"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/services/Hoarding1.webp"
              alt="Large format flex printing for hoardings in Meerut"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Types of Flex Printing */}
        <div id="types" className="mb-20">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Types of Flex Printing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive printing solutions for every advertising need
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                type: "Hoarding Flex", 
                icon: "📺",
                desc: "Large-format printing for outdoor billboards", 
                features: ["Frontlit & backlit options", "Weather-resistant", "Any size up to 40x20 ft"]
              },
              { 
                type: "Banner Printing", 
                icon: "🏴",
                desc: "Standard banners for events & promotions", 
                features: ["Reinforced vinyl", "Grommets included", "Custom sizes"]
              },
              { 
                type: "Vinyl Stickers", 
                icon: "🏷️",
                desc: "Custom cut stickers and decals", 
                features: ["Indoor & outdoor grade", "Custom shapes", "Vehicle branding ready"]
              },
              { 
                type: "Poster Printing", 
                icon: "🖼️",
                desc: "High-quality posters for any purpose", 
                features: ["Glossy & matte finish", "A-series & custom sizes", "Bulk printing"]
              },
              { 
                type: "Mesh Banners", 
                icon: "🕸️",
                desc: "Wind-permeable banners for outdoor use", 
                features: ["Wind-resistant", "Perfect for balcony wraps", "Long-lasting"]
              },
              { 
                type: "Roll-up Standees", 
                icon: "📋",
                desc: "Portable retractable banners", 
                features: ["Easy to carry", "Tool-free setup", "Professional look"]
              },
              { 
                type: "Sunboard Printing", 
                icon: "📌",
                desc: "Rigid boards for permanent displays", 
                features: ["Durable material", "Shop signage ready", "Indoor/outdoor"]
              },
              { 
                type: "Canvas Printing", 
                icon: "🎨",
                desc: "Artistic prints on premium canvas", 
                features: ["Gallery-quality", "Stretched frames", "Office decor"]
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <ul className="space-y-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="text-red-500">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Applications</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Common Uses of Flex Printing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Versatile printing solutions for businesses, events, and campaigns
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Hoarding & Billboards", "Event Banners", "Shop Signage", "Exhibition Displays",
              "Political Campaigns", "Festival Promotions", "Product Launches", "Real Estate Ads",
              "Trade Show Booths", "Retail Store Displays", "Corporate Events", "Wedding Banners",
              "Educational Events", "Sports Events", "Vehicle Branding", "Window Graphics"
            ].map((use, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-red-100 hover:text-red-700 transition cursor-default">
                {use}
              </span>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Why World Media NCR for Flex Printing?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine quality, speed, and reliability for all your printing needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Premium Quality", 
                icon: "✨",
                desc: "State-of-the-art printers delivering vibrant, fade-resistant prints with exceptional clarity." 
              },
              { 
                title: "Fast Turnaround", 
                icon: "⚡",
                desc: "Most orders completed within 24-48 hours. Express options available for urgent requirements." 
              },
              { 
                title: "Any Size, Any Quantity", 
                icon: "📏",
                desc: "From small banners to massive hoardings - we handle projects of any scale." 
              },
              { 
                title: "Expert Design Support", 
                icon: "🎨",
                desc: "Professional in-house designers to create or optimize your artwork for print." 
              },
              { 
                title: "Quality Materials", 
                icon: "🛡️",
                desc: "Premium UV-resistant, waterproof flex that withstands outdoor conditions." 
              },
              { 
                title: "Pan-India Delivery", 
                icon: "🚚",
                desc: "We deliver printed materials across Meerut, NCR, and other cities." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Our Flex Printing Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and efficient workflow from concept to delivery
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Share Requirements", desc: "Tell us your size, quantity, and deadline" },
              { step: "02", title: "Design & Proof", desc: "We create or refine artwork for your approval" },
              { step: "03", title: "Print Production", desc: "High-resolution printing on premium materials" },
              { step: "04", title: "Finish & Deliver", desc: "Cutting, finishing, and quality check before dispatch" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-0">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about flex printing in Meerut
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What is the turnaround time for flex printing?",
                a: "Standard orders are completed within 24-48 hours. For large hoardings (500+ sq ft), we may need 2-3 days. Express 12-hour service is available for urgent requirements."
              },
              {
                q: "What file formats do you accept?",
                a: "We accept JPEG, PNG, PDF, AI, PSD, CDR, and EPS. For best results, we recommend high-resolution files (150-300 DPI) and vector formats for logos."
              },
              {
                q: "Do you provide design services?",
                a: "Yes, our in-house design team creates professional designs optimized for print. Design support is complementary with bulk orders."
              },
              {
                q: "What's the difference between frontlit and backlit flex?",
                a: "Frontlit flex is for standard hoardings with front lighting. Backlit flex is translucent, designed for light boxes, creating a glowing effect when illuminated from behind."
              },
              {
                q: "How long do outdoor flex prints last?",
                a: "Our outdoor flex prints typically last 1-2 years depending on weather conditions. UV-treated materials resist fading and weathering."
              },
              {
                q: "Do you offer installation services?",
                a: "Yes, our team provides professional installation for hoardings and banners across Meerut and NCR locations."
              },
              {
                q: "Do you deliver outside Meerut?",
                a: "Yes, we ship flex prints to Muzaffarnagar, Shamli, Saharanpur, Baghpat, Delhi NCR, and other cities across India."
              },
              {
                q: "What is the minimum order quantity?",
                a: "There is no minimum order. We accept orders of all sizes, from single banners to bulk printing for large campaigns."
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