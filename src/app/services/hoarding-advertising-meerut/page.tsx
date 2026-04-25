import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hoarding Advertising in Meerut | Premium Billboard Outdoor Ads | World Media NCR',
  description: 'Premium hoarding advertising in Meerut & NCR. Strategic billboard placements on Delhi Road, Roorkee Road, Garh Road & major highways. 10+ years experience. Trusted by 500+ brands for outdoor advertising solutions.',
  keywords: 'hoarding advertising meerut, billboard advertising meerut, outdoor hoardings meerut, hoarding near meerut, advertising hoardings meerut, hoarding contractors meerut, hoarding on delhi road meerut, hoarding locations meerut, hoarding advertising muzaffarnagar, outdoor advertising shamli',
  alternates: {
    canonical: 'https://worldmediancr.com/services/hoarding-advertising-meerut',
  },
  openGraph: {
    title: 'Hoarding Advertising in Meerut | Premium Billboard Outdoor Ads | World Media NCR',
    description: 'Premium hoarding advertising services at prime locations across Meerut & NCR. Strategic placements on highways, markets, and commercial areas.',
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

// Gallery images from your portfolio
const hoardingGallery = [
  { name: "Baghra Bus Stand", file: "Baghra Bus Stand.webp", location: "Baghra, Meerut" },
  { name: "Bhasuma Main Road", file: "Bhasuma Main Road.webp", location: "Bhasuma, Meerut" },
  { name: "Muzaffarnagar Meerut Road", file: "Muzaffarnagar Meerut Road.webp", location: "Muzaffarnagar Highway" },
  { name: "Shamli Kairana Road", file: "SHAMLI KAIRANA ROAD.webp", location: "Shamli, Uttar Pradesh" },
  { name: "Saharanpur Chhutmalpur", file: "Saharanpur Chhutmalpur.webp", location: "Saharanpur Highway" },
  { name: "Meerut Sardhana", file: "Meerut Sardhana.webp", location: "Sardhana Road, Meerut" },
  { name: "Muzaffarnagar Rorkee Road", file: "Muzaffarnagar Rorkee Road.webp", location: "Roorkee Road, Muzaffarnagar" },
  { name: "Shamli Mandi Samiti", file: "Shamli Mandi Samiti T Point.webp", location: "Mandi Samiti, Shamli" },
];

export default function HoardingAdvertisingPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/portfolio/Baghra Bus Stand.webp"
            alt="Hoarding advertising background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <span className="text-blue-300">Hoarding Advertising</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hoarding Advertising <span className="text-blue-400">in Meerut</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Premium billboard placements at strategic locations across Meerut, Muzaffarnagar, Shamli & Saharanpur. Maximum visibility for your brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                Book a Hoarding
              </Link>
              <a 
                href="#locations" 
                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition"
              >
                View Locations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "500+", label: "Hoardings Installed", icon: "📺" },
            { number: "50+", label: "Prime Locations", icon: "📍" },
            { number: "10+", label: "Years Experience", icon: "⭐" },
            { number: "100%", label: "Permits Handled", icon: "✅" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* What is Hoarding Advertising */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
              Premium Hoarding Advertising Services in Meerut
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              <strong className="text-gray-900">World Media NCR</strong> is the leading provider of <strong className="text-gray-900">hoarding advertising in Meerut</strong> and across Western Uttar Pradesh. Since 2013, we have helped national brands, local businesses, and political campaigns achieve unparalleled visibility through strategic outdoor placements.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              From the bustling Delhi Road to the educational hub of Roorkee Road, from commercial Garh Road to interstate highways—our network of premium hoarding locations ensures your message reaches the right audience at the right time.
            </p>
            <div className="space-y-3">
              {[
                "Strategic locations with 30,000+ daily impressions",
                "Government-approved sites with all permits included",
                "High-quality flex printing with UV-resistant materials",
                "Illuminated options for 24/7 visibility",
                "End-to-end service from selection to installation"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
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
              src="/images/portfolio/Meerut Sardhana.webp"
              alt="Hoarding advertising at prime location in Meerut"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Prime Locations Section */}
        <div id="locations" className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Prime Hoarding Locations in Meerut & NCR
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategically selected high-traffic locations for maximum brand visibility
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: "Delhi Road, Meerut", 
                traffic: "100,000+ daily commuters", 
                desc: "Main highway connecting Meerut to Delhi. Premium advertising spot with maximum visibility.",
                icon: "🛣️"
              },
              { 
                name: "Roorkee Road, Meerut", 
                traffic: "80,000+ daily commuters", 
                desc: "Educational hub near universities and colleges. Perfect for student-focused brands.",
                icon: "🎓"
              },
              { 
                name: "Garh Road, Meerut", 
                traffic: "70,000+ daily commuters", 
                desc: "Commercial district with shops, businesses, and heavy footfall.",
                icon: "🏪"
              },
              { 
                name: "Muzaffarnagar Highway", 
                traffic: "60,000+ daily commuters", 
                desc: "Interstate route connecting major cities. Ideal for regional campaigns.",
                icon: "🛣️"
              },
              { 
                name: "Shamli Road, Meerut", 
                traffic: "40,000+ daily commuters", 
                desc: "Industrial area with B2B advertising opportunities.",
                icon: "🏭"
              },
              { 
                name: "Saharanpur Highway", 
                traffic: "50,000+ daily commuters", 
                desc: "Major commuter route to Saharanpur. High-speed traffic visibility.",
                icon: "🚗"
              },
              { 
                name: "University Road, Meerut", 
                traffic: "45,000+ daily commuters", 
                desc: "Adjacent to Chaudhary Charan Singh University.",
                icon: "📚"
              },
              { 
                name: "Baghpat Road, Meerut", 
                traffic: "30,000+ daily commuters", 
                desc: "Connecting rural and urban markets. Mixed audience reach.",
                icon: "🌾"
              },
              { 
                name: "Delhi NCR Highways", 
                traffic: "Varies by location", 
                desc: "Strategic hoarding spots across the National Capital Region.",
                icon: "🏙️"
              }
            ].map((location, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{location.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{location.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{location.traffic}</p>
                <p className="text-gray-600 text-sm">{location.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Hoardings Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Hoarding Types</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Types of Hoarding Advertising
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from various formats based on your budget and visibility requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                type: "Billboard Hoardings", 
                icon: "📺",
                desc: "Large format advertising on main roads", 
                features: ["10x10 to 40x20 feet", "Highway visibility", "Day & night options"]
              },
              { 
                type: "Unipole Hoardings", 
                icon: "📍",
                desc: "Single-pole mounted for maximum impact", 
                features: ["20x10, 20x15 feet", "360° visibility", "Perfect for intersections"]
              },
              { 
                type: "Gantry Hoardings", 
                icon: "🌉",
                desc: "Overhead structures on highways", 
                features: ["30x10, 40x10 feet", "Multi-lane coverage", "High-speed traffic"]
              },
              { 
                type: "Building Wrap", 
                icon: "🏢",
                desc: "Complete building coverage", 
                features: ["Custom sizes", "Dominant presence", "Commercial areas"]
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <ul className="space-y-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="text-blue-500">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Our Hoarding Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Successful hoarding advertising campaigns across Meerut and neighboring cities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hoardingGallery.map((project, i) => (
              <div key={i} className="group relative h-48 rounded-xl overflow-hidden shadow-md cursor-pointer">
                <Image 
                  src={`/images/portfolio/${project.file}`}
                  alt={`Hoarding advertising at ${project.name} by World Media NCR`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-semibold text-sm">{project.name}</p>
                    <p className="text-gray-300 text-xs">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition">
              View Full Portfolio <span>→</span>
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Why Choose Hoarding Advertising?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Outdoor advertising delivers unmatched reach and brand recall
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "24/7 Visibility", 
                icon: "🌞🌙",
                desc: "Your brand message works round the clock, every day. No ad blockers, no skip buttons—just continuous exposure." 
              },
              { 
                title: "Massive Reach", 
                icon: "👥",
                desc: "Single hoarding can generate 30,000-100,000+ daily impressions. Reach thousands of potential customers every day." 
              },
              { 
                title: "Local Targeting", 
                icon: "🎯",
                desc: "Perfect for targeting specific neighborhoods, markets, and demographics in Meerut and NCR." 
              },
              { 
                title: "Brand Authority", 
                icon: "🏆",
                desc: "Prime hoarding locations build credibility and establish your brand as a market leader." 
              },
              { 
                title: "High Recall", 
                icon: "🧠",
                desc: "Outdoor ads have 85%+ recall rate among commuters. Repetitive exposure builds strong brand memory." 
              },
              { 
                title: "Complements Digital", 
                icon: "📱",
                desc: "Add QR codes and social handles to drive online traffic. Perfect for multi-channel campaigns." 
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

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Our Hoarding Advertising Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and hassle-free process from start to finish
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Location Selection", desc: "Choose from our database of prime hoarding locations with traffic data" },
              { step: "02", title: "Design & Approval", desc: "Our team creates eye-catching designs for your approval" },
              { step: "03", title: "Permits & Printing", desc: "We handle all government permits and high-quality printing" },
              { step: "04", title: "Installation & Maintenance", desc: "Professional installation with ongoing maintenance support" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about hoarding advertising in Meerut
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What are the best hoarding locations in Meerut?",
                a: "The most effective hoarding locations in Meerut include Delhi Road (100,000+ daily commuters), Roorkee Road (educational hub), Garh Road (commercial district), and Muzaffarnagar Highway (interstate route). Each location offers unique advantages depending on your target audience."
              },
              {
                q: "Do you handle permits for hoarding installation?",
                a: "Yes, we manage all necessary permissions from municipal authorities and property owners. We ensure every hoarding is legally compliant and approved, so you can advertise without any concerns."
              },
              {
                q: "What is the minimum duration for hoarding advertising?",
                a: "We offer flexible durations starting from 1 month. However, longer campaigns (6-12 months) secure the best locations and provide better brand recall. We recommend minimum 3 months for effective campaigns."
              },
              {
                q: "Do you have hoardings in Muzaffarnagar, Shamli, and Saharanpur?",
                a: "Absolutely! We have an extensive hoarding network across Muzaffarnagar (Meerut Road, Roorkee Road), Shamli (Kairana Road, Mandi Samiti), Saharanpur (Chhutmalpur, Shakumbri Devi), Baghpat, and other NCR cities."
              },
              {
                q: "What sizes of hoardings do you offer?",
                a: "We offer various sizes from 10x10 ft to 40x20 ft hoardings. Common sizes include 20x10 ft, 30x10 ft, and 20x15 ft. Custom sizes are also available based on location and requirements."
              },
              {
                q: "Do you provide illuminated hoardings for night visibility?",
                a: "Yes, we offer front-lit, back-lit, and LED-lit hoardings for 24/7 visibility. Illuminated hoardings are particularly effective on highways and high-traffic areas."
              },
              {
                q: "Can I book multiple hoardings across different locations?",
                a: "Yes, we specialize in multi-location campaigns. Whether you need 3 hoardings in different areas of Meerut or a campaign spanning multiple cities, we can manage it all."
              },
              {
                q: "Do you provide design services for hoarding creatives?",
                a: "Yes, our in-house design team creates compelling hoarding designs optimized for outdoor visibility. We ensure your message is bold, clear, and readable from a distance."
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