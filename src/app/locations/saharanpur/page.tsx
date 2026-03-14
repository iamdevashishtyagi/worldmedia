import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advertising Agency in Saharanpur | Hoarding & Outdoor Ads | World Media NCR',
  description: 'Premier advertising agency in Saharanpur offering hoarding advertising, digital wall painting, billboard, and outdoor media services. 10+ years serving Saharanpur businesses. Get the best rates for advertising in Saharanpur.',
  keywords: 'advertising agency saharanpur, advertising companies saharanpur, outdoor advertising saharanpur, hoarding advertising saharanpur, digital wall painting saharanpur, billboard saharanpur, advertising in saharanpur, deoband advertising, gangoh advertising',
  alternates: {
    canonical: 'https://worldmediancr.com/locations/saharanpur',
  },
  openGraph: {
    title: 'Advertising Agency in Saharanpur | World Media NCR',
    description: 'Premier advertising agency in Saharanpur offering hoarding, wall painting, billboard, and outdoor media services.',
    url: 'https://worldmediancr.com/locations/saharanpur',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Saharanpur Chhutmalpur.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SaharanpurLocationPage() {
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
              <Link href="/locations" className="text-gray-700 hover:text-blue-600">Locations</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Saharanpur</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Advertising Agency in Saharanpur – World Media NCR
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>World Media NCR</strong> is your trusted <strong>advertising agency in Saharanpur</strong>, providing comprehensive outdoor advertising solutions across the district. We help Saharanpur businesses, brands, and political candidates reach their target audience through strategic hoarding and wall painting placements.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            From <strong>hoarding advertising on Delhi Road</strong> to <strong>digital wall painting in Deoband</strong>, our team knows the Saharanpur market thoroughly. We have the largest network of premium advertising locations across the city and all rural areas.
          </p>
          <div className="bg-amber-50 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Saharanpur Businesses Choose Us?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>10+ years</strong> serving Saharanpur and surrounding areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>Premium locations</strong> on all major roads and chowks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>100+ projects</strong> completed for Saharanpur clients</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span><strong>End-to-end service</strong> – design, printing, installation</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/images/portfolio/Saharanpur Chhutmalpur.webp" 
            alt="Advertising agency in Saharanpur - World Media NCR hoarding at Chhutmalpur"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Services in Saharanpur */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Advertising Services in Saharanpur</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/hoarding-advertising-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Hoarding Advertising Saharanpur</h3>
            <p className="text-gray-600 mb-3">Premium hoarding placements at Delhi Road, Ambala Road, Deoband Road, and major chowks. Sizes from 10x10 to 40x20 ft.</p>
            <span className="text-amber-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/digital-wall-painting-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Digital Wall Painting Saharanpur</h3>
            <p className="text-gray-600 mb-3">Cost-effective wall advertisements at high-traffic walls across Saharanpur city and all rural areas. 3-5 year durability.</p>
            <span className="text-amber-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/billboard-advertising-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Billboard Advertising Saharanpur</h3>
            <p className="text-gray-600 mb-3">Large-format billboards on highways and main roads for maximum visibility. Multiple size options available.</p>
            <span className="text-amber-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/vehicle-branding-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Vehicle Branding Saharanpur</h3>
            <p className="text-gray-600 mb-3">Turn your fleet into moving billboards. Full and partial wraps for cars, trucks, and commercial vehicles.</p>
            <span className="text-amber-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/flex-printing-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Flex Printing Saharanpur</h3>
            <p className="text-gray-600 mb-3">High-quality flex printing for banners, hoardings, posters, and event materials. Fast turnaround.</p>
            <span className="text-amber-600 font-medium">Learn more →</span>
          </Link>
          
          <Link href="/services/political-advertising-meerut" className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition block">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Political Advertising Saharanpur</h3>
            <p className="text-gray-600 mb-3">Complete campaign solutions for Saharanpur, Deoband, Gangoh, and Nakur constituencies – hoardings, wall paintings, banners.</p>
            <span className="text-amber-600 font-medium">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Prime Advertising Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Prime Advertising Locations in Saharanpur</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Delhi Road", traffic: "80,000+ daily commuters", desc: "Main highway connecting to Delhi. Premium hoarding locations." },
            { name: "Ambala Road", traffic: "70,000+ daily commuters", desc: "NH-344 connecting to Ambala and Chandigarh." },
            { name: "Deoband Road", traffic: "60,000+ daily commuters", desc: "Route connecting to Deoband and Haridwar." },
            { name: "Roorkee Road", traffic: "55,000+ daily", desc: "Connecting to Roorkee and Haridwar." },
            { name: "Railway Road", traffic: "50,000+ daily", desc: "Near railway station, heavy commuter traffic." },
            { name: "Bus Stand Area", traffic: "High footfall", desc: "Major transit point with daily commuters." },
            { name: "Clock Tower", traffic: "High footfall", desc: "City center with shops and commercial establishments." },
            { name: "University Road", traffic: "40,000+ daily", desc: "Near educational institutions." },
            { name: "Gangoh Road", traffic: "35,000+ daily", desc: "Connecting to Gangoh and surrounding areas." },
            { name: "Nakur Road", traffic: "30,000+ daily", desc: "Route connecting to Nakur and villages." },
            { name: "Chhutmalpur", traffic: "25,000+ daily", desc: "Important junction on Delhi-Dehradun highway." },
            { name: "Sarsawa", traffic: "20,000+ daily", desc: "Near industrial area and cantonment." },
          ].map((location, i) => (
            <div key={i} className="border rounded-lg p-5 shadow-sm bg-white">
              <h3 className="text-lg font-semibold mb-1 text-gray-900">{location.name}</h3>
              <p className="text-amber-600 font-medium text-sm mb-2">{location.traffic}</p>
              <p className="text-gray-600 text-sm">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Saharanpur Market */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">About Advertising in Saharanpur</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            Saharanpur is a major city in northern Uttar Pradesh, known for its wood carving industry, agricultural markets, and strategic location on the Delhi-Dehradun highway. It serves as a gateway to Uttarakhand and has significant commercial importance.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Key facts about Saharanpur for advertisers:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Population:</strong> 700,000+ (city) with district population over 3.5 million</li>
            <li><strong>Industrial hub:</strong> Wood carving, paper, sugar, and manufacturing industries</li>
            <li><strong>Commercial importance:</strong> Major agricultural market for the region</li>
            <li><strong>Connectivity:</strong> NH-709B and NH-344 connect to Delhi, Dehradun, Ambala</li>
            <li><strong>Assembly constituencies:</strong> Saharanpur, Deoband, Gangoh, Nakur</li>
            <li><strong>Tourist traffic:</strong> Gateway to Haridwar, Rishikesh, and Dehradun</li>
          </ul>
          <p className="text-gray-700">
            Outdoor advertising in Saharanpur reaches a diverse audience – from business travelers and tourists to local consumers and rural populations. Highway hoardings on Delhi Road and Ambala Road offer exceptional visibility.
          </p>
        </div>
      </section>

      {/* Assembly Constituencies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Saharanpur District Assembly Constituencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Saharanpur", "Deoband", "Gangoh", "Nakur",
            "Rampur", "Behat", "Sarsawa", "Muzaffarabad",
            "Herbertpur", "Jhabrera", "Chhutmalpur", "Bhagwanpur"
          ].map((constituency, i) => (
            <div key={i} className="bg-amber-50 p-3 rounded-lg text-center font-medium text-gray-800 border border-amber-200">
              {constituency}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">Complete coverage across Saharanpur district and surrounding areas.</p>
      </section>

      {/* Gallery */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Work in Saharanpur</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Saharanpur Chhutmalpur", file: "Saharanpur Chhutmalpur.webp" },
            { name: "Sharanpur Shakumbri Devi", file: "Sharanpur Shakumbri Devi.webp" },
            { name: "Najibabad FC Delhi", file: "NAJIBABAD FC DELHI (Delhi Meerut Landsdown Highway).webp" },
            { name: "Najibabad FC Kotdwar", file: "NAJIBABAD FC KOTDWAR (Delhi Meerut Landsdown Highway).webp" },
            { name: "Chutmalpur Facing Rorkee", file: "Chutmalpur Facing Rorkee (Delhi Rorkee Dehradun Highway).webp" },
            { name: "Bijnor Vayanjan Vatika", file: "Bijnor Vayanjan Vatika Entry Point.webp" },
            { name: "Shamli Alum Saharanpur", file: "Shamli Alum Fc Saharanpur 20x10.webp" },
            { name: "Shamli Sai Mandir Saharanpur", file: "Shamli Sai Mandir Fc Saharanpur 20x10.webp" },
          ].map((project, i) => (
            <div key={i} className="relative h-40 rounded-lg overflow-hidden group">
              <Image 
                src={`/images/portfolio/${project.file}`}
                alt={`Advertising project at ${project.name} in Saharanpur by World Media NCR`}
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
          <Link href="/gallery" className="text-amber-600 font-semibold hover:underline">
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">What Saharanpur Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-gray-700 italic mb-4">&quot;We needed hoardings on the Delhi-Dehradun highway for our resort. World Media NCR got us prime locations at Chhutmalpur and Najibabad. Excellent visibility and professional service.&quot;</p>
            <p className="font-semibold text-gray-900">– Resort Owner, Chhutmalpur</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <p className="text-gray-700 italic mb-4">&quot;For our educational campaign across Saharanpur district, they provided excellent wall painting coverage in rural areas. Very satisfied with their work.&quot;</p>
            <p className="font-semibold text-gray-900">– NGO Director, Saharanpur</p>
          </div>
        </div>
      </section>

      {/* Rural Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Rural Coverage in Saharanpur District</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Deoband", "Gangoh", "Nakur", "Behat",
            "Sarsawa", "Rampur", "Chhutmalpur", "Jhabrera",
            "Herbertpur", "Bhagwanpur", "Muzaffarabad", "Badshahibagh",
            "Titron", "Punwarka", "Nanauta", "Balidhar"
          ].map((village, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded-lg text-center text-sm">
              {village}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center">We cover all villages in Saharanpur district for wall painting and rural advertising.</p>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which is the best advertising agency in Saharanpur?",
              a: "World Media NCR is a leading advertising agency serving Saharanpur with 10+ years of experience, premium hoarding locations on Delhi Road and Ambala Road, and extensive rural coverage for wall painting campaigns across the district."
            },
            {
              q: "How much does hoarding advertising cost in Saharanpur?",
              a: "Hoarding costs in Saharanpur range from ₹7,000 to ₹30,000 per month depending on location and size. Premium locations on Delhi Road and Ambala Road range from ₹20,000-30,000/month, while other areas start from ₹7,000/month."
            },
            {
              q: "What are the best hoarding locations in Saharanpur?",
              a: "The best hoarding locations in Saharanpur include Delhi Road, Ambala Road, Deoband Road, Roorkee Road, Clock Tower, and Railway Road. For highway visibility, Chhutmalpur and Najibabad are excellent locations."
            },
            {
              q: "Do you provide wall painting in Deoband, Gangoh, and Nakur?",
              a: "Yes, we provide extensive wall painting services across Deoband, Gangoh, Nakur, and all villages in Saharanpur district. Rural wall painting is one of our specialties for political and brand campaigns."
            },
            {
              q: "Do you cover highway hoardings on Delhi-Dehradun route?",
              a: "Yes, we have premium hoarding locations on the Delhi-Dehradun highway including Chhutmalpur, Najibabad, and other strategic points. These locations get high visibility from tourists and commuters."
            },
            {
              q: "How do I book advertising space in Saharanpur?",
              a: "Call us at +91 94564 97636, email info@worldmediancr.com, or visit our contact page. We'll discuss your requirements, show available locations, provide a quote, and handle all installation."
            }
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Nearby Service Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/locations/meerut" className="text-amber-600 hover:underline">Meerut</Link>
          <Link href="/locations/muzaffarnagar" className="text-amber-600 hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-amber-600 hover:underline">Shamli</Link>
          <Link href="/locations/baghpat" className="text-amber-600 hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-ncr" className="text-amber-600 hover:underline">Delhi NCR</Link>
          <Link href="/locations/hapur" className="text-amber-600 hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-amber-600 hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}