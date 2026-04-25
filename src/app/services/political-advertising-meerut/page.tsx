import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Political Advertising in Meerut | Election Campaign Materials | World Media NCR',
  description: 'Complete political advertising solutions in Meerut & Western UP. Hoardings, wall paintings, banners, flex printing, and campaign materials for elections. 10+ years experience in political campaigns across Meerut, Muzaffarnagar, Shamli, Saharanpur & NCR.',
  keywords: 'political advertising meerut, election campaign meerut, political hoardings meerut, political wall painting, election banners meerut, campaign materials, political flex printing, candidate advertising meerut, party promotion meerut, election campaign muzaffarnagar, political advertising shamli',
  alternates: {
    canonical: 'https://worldmediancr.com/services/political-advertising-meerut',
  },
  openGraph: {
    title: 'Political Advertising in Meerut | Election Campaign Materials | World Media NCR',
    description: 'Complete political advertising solutions for elections. Hoardings, wall paintings, banners, and campaign materials across Western UP.',
    url: 'https://worldmediancr.com/services/political-advertising-meerut',
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

// Political advertising services
const politicalServices = [
  { 
    type: "Political Hoardings", 
    icon: "📺",
    desc: "Large-format hoardings at strategic locations across constituencies", 
    features: ["10x10 to 40x20 ft", "Premium locations", "Maximum visibility"]
  },
  { 
    type: "Wall Paintings", 
    icon: "🎨",
    desc: "Long-lasting wall paintings in villages, towns, and cities", 
    features: ["Weather-resistant", "Years of visibility", "Rural outreach"]
  },
  { 
    type: "Election Banners", 
    icon: "🏴",
    desc: "High-quality banners for rallies, meetings, and polling booths", 
    features: ["Various sizes", "Quick deployment", "Event-specific"]
  },
  { 
    type: "Flex Printing", 
    icon: "🖨️",
    desc: "Bulk flex printing for posters, cutouts, and promotional materials", 
    features: ["Bulk capacity", "Any size", "Fast turnaround"]
  },
  { 
    type: "Party Flags & Buntings", 
    icon: "🚩",
    desc: "Custom printed flags, buntings, and party symbols", 
    features: ["Festive atmosphere", "High visibility", "Custom designs"]
  },
  { 
    type: "Vehicle Branding", 
    icon: "🚗",
    desc: "Branded campaign vehicles for mobile outreach", 
    features: ["Mobile advertising", "Full fleet", "Wide coverage"]
  },
  { 
    type: "Pandal Backdrops", 
    icon: "🏛️",
    desc: "Large backdrops for rallies, press conferences, and events", 
    features: ["Professional setup", "Custom sizes", "Event-ready"]
  },
  { 
    type: "LED Van Campaigns", 
    icon: "🚚",
    desc: "Mobile LED vans for video messaging and announcements", 
    features: ["Audio-visual impact", "Multiple locations", "Attention-grabbing"]
  },
];

// Coverage areas
const coverageAreas = [
  { region: "Meerut District", constituencies: "4 Assembly Seats", areas: "Meerut Cantt, Meerut South, Kithore, Sardhana", villages: "600+ villages" },
  { region: "Muzaffarnagar District", constituencies: "5 Assembly Seats", areas: "Muzaffarnagar, Budhana, Charthawal, Khatauli, Meerapur", villages: "500+ villages" },
  { region: "Shamli District", constituencies: "3 Assembly Seats", areas: "Shamli, Kairana, Thana Bhawan", villages: "300+ villages" },
  { region: "Saharanpur District", constituencies: "5 Assembly Seats", areas: "Saharanpur, Deoband, Rampur, Gangoh, Nakur", villages: "600+ villages" },
  { region: "Baghpat District", constituencies: "3 Assembly Seats", areas: "Baghpat, Chaprauli, Baraut", villages: "250+ villages" },
  { region: "Hapur District", constituencies: "3 Assembly Seats", areas: "Hapur, Dhaulana, Garhmukteshwar", villages: "300+ villages" },
];

// Success factors
const successFactors = [
  { factor: "Visibility", desc: "Strategic placement in high-traffic areas", icon: "👁️" },
  { factor: "Frequency", desc: "Multiple touchpoints across constituency", icon: "🔄" },
  { factor: "Consistency", desc: "Uniform branding across all materials", icon: "✅" },
  { factor: "Timing", desc: "Right message at the right campaign phase", icon: "⏰" },
  { factor: "Coverage", desc: "Urban & rural both equally covered", icon: "🗺️" },
  { factor: "Quality", desc: "Professional printing and installation", icon: "⭐" },
  { factor: "Speed", desc: "Rapid response to competitor activity", icon: "⚡" },
  { factor: "Local Connect", desc: "Messages in local language & context", icon: "🤝" },
];

export default function PoliticalAdvertisingPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/portfolio/Baghra Bus Stand.web"
            alt="Political advertising background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-orange-300 mb-4">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <span className="text-orange-300">Political Advertising</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Political Advertising <span className="text-orange-400">in Meerut</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Complete election campaign solutions. Hoardings, wall paintings, banners, and strategic outreach across Western UP.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                Plan Campaign
              </Link>
              <a 
                href="#coverage" 
                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition"
              >
                View Coverage
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "10+", label: "Years Experience", icon: "📅" },
            { number: "8", label: "Districts Covered", icon: "🗺️" },
            { number: "3000+", label: "Campaigns Executed", icon: "🎯" },
            { number: "24-48", label: "Hour Turnaround", icon: "⚡" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600">{stat.number}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* What is Political Advertising */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900">
              Complete Political Advertising Solutions
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              <strong className="text-gray-900">World Media NCR</strong> offers comprehensive <strong className="text-gray-900">political advertising solutions in Meerut</strong> and across Western Uttar Pradesh. From massive hoardings to wall paintings, banners to LED vans – we help candidates and parties connect with voters effectively.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              With over 10 years of experience in political campaigns, we understand the unique requirements of election advertising: speed, reach, impact, and strategic placement. Our team ensures your message reaches every corner of your constituency.
            </p>
            <div className="space-y-3">
              {[
                "Pan-constituency coverage across 8+ districts",
                "Rapid execution with 24-48 hour turnaround",
                "Strategic location advice for maximum impact",
                "Bulk printing & installation capabilities",
                "24/7 campaign support during elections"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
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
            <div className="text-center p-8">
              <span className="text-6xl mb-4 block">🗳️</span>
              <p className="text-gray-500 font-medium">Political Campaign Gallery</p>
              {/* <p className="text-sm text-gray-400">(Add your campaign images here)</p> */}
            </div>
          </div>
        </div>

        {/* Political Advertising Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Our Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Complete Campaign Toolkit
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for a successful election campaign
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {politicalServices.slice(0, 8).map((item, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <ul className="space-y-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="text-orange-500">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Areas */}
        <div id="coverage" className="mb-20">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Political Advertising Coverage Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Extensive network across Western Uttar Pradesh
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {coverageAreas.map((area, i) => (
              <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{area.region}</h3>
                <p className="text-orange-600 font-semibold text-sm mb-2">{area.constituencies}</p>
                <p className="text-gray-600 text-sm mb-2">{area.areas}</p>
                <p className="text-gray-500 text-xs">{area.villages}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Timeline */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Strategy</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Political Campaign Timeline
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Phased approach for maximum voter impact
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { phase: "Planning (4-8 weeks before)", tasks: "Constituency survey, budget planning, location scouting, design concepts", icon: "📋" },
              { phase: "Pre-Campaign (3-4 weeks before)", tasks: "Major hoardings, wall paintings, vehicle branding, flag installation", icon: "📺" },
              { phase: "Peak Campaign (2-3 weeks before)", tasks: "Banners, posters, cutouts, LED van tours, rally materials", icon: "🚩" },
              { phase: "Final Week (1 week before)", tasks: "Last-minute placements, polling booth materials, emergency supplies", icon: "⚡" },
              { phase: "Election Day", tasks: "Polling booth signage, agent materials, last-minute support", icon: "🗳️" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border-l-4 border-orange-600 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-sm mb-2 text-gray-900">{item.phase}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.tasks}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Locations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Placement</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Strategic Locations for Political Ads
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Where to place your campaign materials for maximum impact
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Urban Areas</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-600"><strong>Major chowks & intersections</strong> – Delhi Road, Garh Road, Roorkee Road chowks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-600"><strong>Marketplaces</strong> – Shastri Nagar, Gandhi Bagh, Begum Bridge Road</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-600"><strong>Bus stands & railway stations</strong> – Major transit hubs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-600"><strong>Educational institutions</strong> – University Road, Medical College Road</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-3">🌾</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Rural Areas</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-600"><strong>Village entry points</strong> – Main roads into villages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-600"><strong>Weekly markets</strong> – Haat bazaar locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-600"><strong>Bus stops</strong> – Rural bus stands and stops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span className="text-gray-600"><strong>Panchayat buildings</strong> – Gram panchayat offices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Factors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Winning Formula</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Key Success Factors for Political Campaigns
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes a political advertising campaign effective
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {successFactors.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md transition">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-orange-600 mb-2">{item.factor}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-0">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about political advertising
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How early should I start my political advertising campaign?",
                a: "For major elections, we recommend starting 2-3 months in advance. This allows time for strategic planning, location booking (premium spots get booked early), and phased execution."
              },
              {
                q: "Do you handle campaigns for both parties and independent candidates?",
                a: "Yes, we work with all political parties and independent candidates. Our services are non-partisan – we provide the same quality and commitment to every client."
              },
              {
                q: "What is the most effective political advertising medium?",
                a: "A combination works best: hoardings for visibility, wall paintings for rural reach, banners for events, and LED vans for audio-visual impact. We recommend an integrated approach."
              },
              {
                q: "Do you provide design services for campaign materials?",
                a: "Yes, our creative team specializes in political campaign design – from candidate photos and party symbols to slogans and messaging."
              },
              {
                q: "How do you handle last-minute campaign emergencies?",
                a: "We maintain 24/7 operations during election season. For urgent requirements, we can print and install within 24-48 hours depending on quantity and location."
              },
              {
                q: "Do you provide coverage in remote villages?",
                a: "Yes, we have teams that cover all villages across Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, and surrounding districts."
              },
              {
                q: "What permits are required for political advertising?",
                a: "We handle all necessary permissions from local authorities, including municipal corporations, panchayats, and election commission guidelines."
              },
              {
                q: "Do you offer complete constituency packages?",
                a: "Yes, we offer end-to-end constituency packages including location survey, strategic planning, all materials, installation, and campaign support."
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