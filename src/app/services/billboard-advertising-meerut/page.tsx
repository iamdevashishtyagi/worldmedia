import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Billboard Advertising in Meerut | Premium Outdoor Billboards | World Media NCR',
  description: 'Premium billboard advertising in Meerut & NCR. Strategic locations on Delhi Road, Muzaffarnagar Highway, Roorkee Road & Garh Road. High-traffic spots with thousands of daily impressions. Trusted by 500+ brands.',
  keywords: 'billboard advertising meerut, outdoor billboards meerut, billboard near meerut, advertising billboards meerut, digital billboards meerut, billboard on rent meerut, billboard contractors meerut, highway billboards meerut, billboard advertising muzaffarnagar, outdoor advertising shamli',
  alternates: {
    canonical: 'https://worldmediancr.com/services/billboard-advertising-meerut',
  },
  openGraph: {
    title: 'Billboard Advertising in Meerut | Premium Outdoor Billboards | World Media NCR',
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

// Billboard gallery images
const billboardGallery = [
  { name: "Muzaffarnagar Meerut Road", file: "Muzaffarnagar Meerut Road.webp", location: "Muzaffarnagar Highway" },
  { name: "Shamli Kairana Road", file: "SHAMLI KAIRANA ROAD.webp", location: "Kairana Road, Shamli" },
  { name: "Baghra Bus Stand", file: "Baghra Bus Stand.webp", location: "Baghra, Meerut" },
  { name: "Muzaffarnagar Rorkee Road", file: "Muzaffarnagar Rorkee Road.webp", location: "Roorkee Road, Muzaffarnagar" },
  { name: "Saharanpur Chhutmalpur", file: "Saharanpur Chhutmalpur.webp", location: "Chhutmalpur, Saharanpur" },
  { name: "Shamli Mandi Samiti", file: "Shamli Mandi Samiti T Point.webp", location: "Mandi Samiti, Shamli" },
  { name: "Meerut Sardhana", file: "Meerut Sardhana.webp", location: "Sardhana Road, Meerut" },
  { name: "Bhasuma Main Road", file: "Bhasuma Main Road.webp", location: "Bhasuma, Meerut" },
];

export default function BillboardAdvertisingPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/portfolio/Muzaffarnagar Meerut Road.webp"
            alt="Billboard advertising background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-purple-300 mb-4">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <span className="text-purple-300">Billboard Advertising</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Billboard Advertising <span className="text-purple-400">in Meerut</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Premium outdoor billboard placements at high-traffic locations across Meerut, Muzaffarnagar, Shamli & Saharanpur. Maximum visibility for your brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                Book a Billboard
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
            { number: "400+", label: "Billboards Installed", icon: "📊" },
            { number: "45+", label: "Prime Locations", icon: "📍" },
            { number: "100K+", label: "Daily Impressions", icon: "👁️" },
            { number: "24/7", label: "Visibility", icon: "🕒" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600">{stat.number}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* What is Billboard Advertising */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
              Premium Billboard Advertising in Meerut
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              <strong className="text-gray-900">World Media NCR</strong> offers premium <strong className="text-gray-900">billboard advertising in Meerut</strong> and across Western Uttar Pradesh. Our strategically placed billboards on highways, main roads, and commercial areas ensure your brand message reaches thousands daily.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              From the bustling Delhi Road to the commercial Garh Road, from interstate highways to city intersections—our network of prime billboard locations delivers unmatched visibility for businesses of all sizes.
            </p>
            <div className="space-y-3">
              {[
                "Strategic locations with 30,000-100,000+ daily views",
                "Multiple size options from 10x10 to 40x20 feet",
                "Illumination options for 24/7 visibility",
                "Professional design & high-quality printing",
                "Complete permit handling & maintenance"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
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
              src="/images/portfolio/Muzaffarnagar Meerut Road.webp"
              alt="Billboard advertising at prime location in Meerut"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Prime Billboard Locations */}
        <div id="locations" className="mb-20">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Premium Billboard Locations in Meerut & NCR
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-traffic locations selected for maximum brand visibility and impact
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: "Delhi Road, Meerut", 
                traffic: "100,000+ vehicles/day", 
                desc: "Main highway connecting Meerut to Delhi. Premium commercial corridor with maximum visibility.",
                icon: "🛣️"
              },
              { 
                name: "Muzaffarnagar Highway", 
                traffic: "80,000+ vehicles/day", 
                desc: "Interstate highway with continuous traffic flow. Perfect for regional brand campaigns.",
                icon: "🛣️"
              },
              { 
                name: "Roorkee Road, Meerut", 
                traffic: "70,000+ vehicles/day", 
                desc: "Educational hub near universities. Ideal for student-focused and educational brands.",
                icon: "🎓"
              },
              { 
                name: "Garh Road, Meerut", 
                traffic: "65,000+ vehicles/day", 
                desc: "Commercial and shopping district with high footfall and vehicle traffic.",
                icon: "🛍️"
              },
              { 
                name: "Saharanpur Highway", 
                traffic: "60,000+ vehicles/day", 
                desc: "Major route connecting to Saharanpur and beyond. High-speed traffic visibility.",
                icon: "🚗"
              },
              { 
                name: "Shamli Road, Meerut", 
                traffic: "45,000+ vehicles/day", 
                desc: "Industrial corridor with B2B advertising opportunities.",
                icon: "🏭"
              },
              { 
                name: "Hapur Road, Meerut", 
                traffic: "40,000+ vehicles/day", 
                desc: "Route connecting to Hapur and Ghaziabad. Mixed commuter audience.",
                icon: "🛣️"
              },
              { 
                name: "Baghpat Road, Meerut", 
                traffic: "35,000+ vehicles/day", 
                desc: "Connecting urban and rural markets. Diverse audience reach.",
                icon: "🌾"
              },
              { 
                name: "Delhi NCR Highways", 
                traffic: "Varies by location", 
                desc: "Strategic billboard spots across the National Capital Region.",
                icon: "🏙️"
              }
            ].map((location, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{location.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{location.name}</h3>
                <p className="text-purple-600 font-semibold text-sm mb-3">{location.traffic}</p>
                <p className="text-gray-600 text-sm">{location.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Billboard Sizes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Sizes</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Billboard Sizes & Specifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from various sizes based on your visibility requirements and location
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { size: "10x10 feet", best: "Secondary roads, market areas", icon: "📏", features: "Perfect for local business advertising" },
              { size: "15x10 feet", best: "Main roads, commercial areas", icon: "📐", features: "Balanced size for good visibility" },
              { size: "20x10 feet", best: "Highways, premium locations", icon: "📏", features: "Standard size for maximum impact" },
              { size: "30x10 feet", best: "Major highways, expressways", icon: "📐", features: "Enhanced visibility at high speeds" },
              { size: "40x10 feet", best: "Prime highway locations", icon: "📏", features: "Dominant presence on highways" },
              { size: "40x20 feet", best: "Iconic landmark locations", icon: "📐", features: "Monumental brand presence" }
            ].map((item, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-2">{item.size}</h3>
                <p className="text-gray-700 mb-2"><span className="font-semibold">Best for:</span> {item.best}</p>
                <p className="text-gray-600 text-sm">{item.features}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Billboard Gallery */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Our Billboard Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Successful billboard advertising campaigns across Meerut and neighboring cities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {billboardGallery.map((project, i) => (
              <div key={i} className="group relative h-48 rounded-xl overflow-hidden shadow-md cursor-pointer">
                <Image 
                  src={`/images/portfolio/${project.file}`}
                  alt={`Billboard advertising at ${project.name} by World Media NCR`}
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
            <Link href="/gallery" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition">
              View Full Portfolio <span>→</span>
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Why Choose Billboard Advertising?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Outdoor billboards deliver unmatched reach, frequency, and brand recall
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Massive Reach", 
                icon: "🌍",
                desc: "Single billboard on Delhi Road reaches over 100,000 people daily—millions of impressions monthly." 
              },
              { 
                title: "24/7 Visibility", 
                icon: "🕒",
                desc: "Your brand works around the clock, every day. No ad blockers, no skip buttons—continuous exposure." 
              },
              { 
                title: "Geographic Targeting", 
                icon: "🎯",
                desc: "Target specific markets, commuter routes, and neighborhoods with precision and efficiency." 
              },
              { 
                title: "High Recall", 
                icon: "🧠",
                desc: "Repeated daily exposure builds strong brand recall and drives consumer action." 
              },
              { 
                title: "Brand Authority", 
                icon: "🏆",
                desc: "Prime billboard locations establish credibility and position your brand as a market leader." 
              },
              { 
                title: "Digital Integration", 
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

        {/* Industries Served */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Billboard advertising works for businesses of all sizes and industries
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Real Estate", "Automobile", "Education", "Healthcare", 
              "Retail", "Banking & Finance", "FMCG", "Hospitality",
              "Entertainment", "Political Campaigns", "Telecom", "Fitness",
              "Jewelry", "Furniture", "Travel & Tourism", "Local Businesses"
            ].map((industry, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-0">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about billboard advertising in Meerut
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What's the difference between a hoarding and a billboard?",
                a: "The terms are often used interchangeably. At World Media NCR, both refer to premium outdoor advertising spaces. We focus on delivering high-impact visual advertising at strategic locations."
              },
              {
                q: "How many people will see my billboard?",
                a: "Traffic varies by location. Delhi Road sees 100,000+ vehicles daily, Roorkee Road 80,000+, and Garh Road 70,000+. With multiple passengers per vehicle, actual viewership is significantly higher."
              },
              {
                q: "How far in advance should I book a billboard?",
                a: "For premium locations, we recommend booking 2-4 weeks in advance. During peak seasons (festivals, election periods), 1-2 months advance booking is advisable."
              },
              {
                q: "Do you offer digital billboards with changing messages?",
                a: "Yes, we offer LED digital billboards at select premium locations where you can display multiple ads in rotation. Contact us for availability."
              },
              {
                q: "Do you have billboards in Muzaffarnagar and other cities?",
                a: "Absolutely! We have extensive billboard networks across Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, and Delhi NCR."
              },
              {
                q: "What is included in the billboard rental?",
                a: "The rental includes: billboard structure, prime location access, all government permits, basic illumination (if opted), and professional installation."
              },
              {
                q: "Can I change my advertisement during the contract?",
                a: "Yes, you can change your creative. Long-term clients get complimentary design change options. Contact us for details."
              },
              {
                q: "Do you provide design services for billboard creatives?",
                a: "Yes, our in-house design team creates compelling billboard designs optimized for outdoor visibility. We ensure your message is bold, clear, and readable."
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