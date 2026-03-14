import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LED Display Advertising in Meerut | Digital Billboards | World Media NCR',
  description: 'Dynamic LED display advertising in Meerut. Digital billboards with rotating content, videos, and animations. High-impact visibility at prime locations. Modern outdoor advertising for maximum engagement.',
  keywords: 'led display advertising meerut, digital billboard meerut, led screen advertising, outdoor led display meerut, digital hoarding meerut, led video wall meerut, digital signage meerut, led board on rent meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/services/led-display-advertising-meerut',
  },
  openGraph: {
    title: 'LED Display Advertising in Meerut | World Media NCR',
    description: 'Dynamic LED display advertising in Meerut. Digital billboards with rotating content, videos, and animations.',
    url: 'https://worldmediancr.com/services/led-display-advertising-meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/led-display-sample.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function LEDDisplayPage() {
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
              <span className="text-gray-500">LED Display Advertising Meerut</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Professional LED Display Advertising in Meerut
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <strong>World Media NCR</strong> offers cutting-edge <strong>LED display advertising in Meerut</strong> – the future of outdoor advertising. Our digital billboards and LED screens deliver dynamic content with videos, animations, and rotating messages that capture attention like never before.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Unlike static hoardings, LED displays allow you to showcase multiple ads, update content instantly, and engage audiences with motion graphics. Perfect for brands that want to stand out in high-traffic locations across Meerut and NCR.
          </p>
          <div className="bg-blue-800 bg-opacity-10 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-3">Why Choose LED Display Advertising?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-800 font-bold">✓</span>
                <span><strong>Dynamic content</strong> – videos, animations, rotating ads</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-800 font-bold">✓</span>
                <span><strong>Instant updates</strong> – change your ad anytime remotely</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-800 font-bold">✓</span>
                <span><strong>High visibility</strong> – bright displays visible day and night</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-800 font-bold">✓</span>
                <span><strong>Multiple advertisers</strong> – cost-sharing options available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-800 font-bold">✓</span>
                <span><strong>Higher recall</strong> – moving images capture more attention</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
          <div className="text-center p-8">
            <span className="text-6xl mb-4 block">📺</span>
            <p className="text-gray-500">LED Display Image</p>
            <p className="text-sm text-gray-400">(Add your LED display photos here)</p>
          </div>
        </div>
      </div>

      {/* Types of LED Displays */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Types of LED Displays We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              type: "Outdoor LED Billboards", 
              icon: "🖥️",
              desc: "Large-format digital billboards for highways and main roads", 
              brightness: "5000-7000 nits",
              use: "Perfect for high-traffic outdoor locations"
            },
            { 
              type: "Indoor LED Screens", 
              icon: "📺",
              desc: "High-resolution screens for malls, lobbies, and events", 
              brightness: "1500-2500 nits",
              use: "Ideal for indoor advertising and displays"
            },
            { 
              type: "LED Video Walls", 
              icon: "🖼️",
              desc: "Multi-panel video walls for impactful presentations", 
              brightness: "Varies by model",
              use: "Perfect for exhibitions, corporate lobbies, and events"
            },
            { 
              type: "Mobile LED Vans", 
              icon: "🚚",
              desc: "LED screens on vehicles for mobile advertising", 
              brightness: "5000+ nits",
              use: "Ideal for roadshows, events, and political campaigns"
            },
            { 
              type: "Digital Kiosks", 
              icon: "📱",
              desc: "Interactive touch-screen displays for retail and public spaces", 
              brightness: "2000-3000 nits",
              use: "Perfect for malls, airports, and information points"
            },
            { 
              type: "LED Column Displays", 
              icon: "📡",
              desc: "Wrap-around LED displays on pillars and columns", 
              brightness: "5000+ nits",
              use: "Ideal for malls and commercial complexes"
            },
            { 
              type: "LED Traffic Signs", 
              icon: "🚦",
              desc: "Digital signage for traffic management and advertising", 
              brightness: "6000+ nits",
              use: "Perfect for roadside and intersection placements"
            },
            { 
              type: "LED Display on Rent", 
              icon: "💰",
              desc: "Short-term LED displays for events and campaigns", 
              brightness: "Varies by model",
              use: "Ideal for temporary advertising needs"
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.type}</h3>
              <p className="text-gray-600 mb-2">{item.desc}</p>
              <p className="text-sm text-gray-500 mb-1"><span className="font-semibold">Brightness:</span> {item.brightness}</p>
              <p className="text-sm text-gray-500"><span className="font-semibold">Use:</span> {item.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LED Display Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Premium LED Display Locations in Meerut & NCR</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Delhi Road, Meerut", traffic: "100,000+ daily", desc: "Premium digital billboard location on main highway" },
            { name: "Muzaffarnagar Highway", traffic: "80,000+ daily", desc: "High-visibility digital display on interstate route" },
            { name: "Roorkee Road, Meerut", traffic: "70,000+ daily", desc: "Near educational institutions, student traffic" },
            { name: "PVS Mall, Meerut", traffic: "High footfall", desc: "Indoor digital screens inside popular mall" },
            { name: "Garh Road Shopping District", traffic: "65,000+ daily", desc: "Commercial area with retail shoppers" },
            { name: "Shamli Road Industrial Area", traffic: "40,000+ daily", desc: "B2B advertising opportunity" },
            { name: "Delhi NCR Locations", traffic: "Varies", desc: "Digital displays across NCR region" },
            { name: "Saharanpur Highway", traffic: "50,000+ daily", desc: "Strategic location on major highway" },
            { name: "Baghpat Road", traffic: "30,000+ daily", desc: "Connecting rural and urban markets" },
          ].map((location, i) => (
            <div key={i} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{location.name}</h3>
              <p className="text-blue-800 font-medium mb-2">{location.traffic}</p>
              <p className="text-gray-600">{location.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">LED Display Advertising Rates</h2>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">LED Display Type</th>
                  <th className="py-3 px-4 text-left font-semibold">Size</th>
                  <th className="py-3 px-4 text-left font-semibold">Slot Duration</th>
                  <th className="py-3 px-4 text-left font-semibold">Monthly Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Outdoor Digital Billboard</td>
                  <td className="py-3 px-4">10x20 ft</td>
                  <td className="py-3 px-4">10 sec per slot</td>
                  <td className="py-3 px-4">₹40,000 - ₹60,000</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">Outdoor Digital Billboard</td>
                  <td className="py-3 px-4">20x10 ft</td>
                  <td className="py-3 px-4">10 sec per slot</td>
                  <td className="py-3 px-4">₹35,000 - ₹50,000</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Mall Digital Screen</td>
                  <td className="py-3 px-4">Various sizes</td>
                  <td className="py-3 px-4">15 sec per slot</td>
                  <td className="py-3 px-4">₹25,000 - ₹40,000</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="py-3 px-4 font-medium">Mobile LED Van</td>
                  <td className="py-3 px-4">10x10 ft screen</td>
                  <td className="py-3 px-4">4 hours per day</td>
                  <td className="py-3 px-4">₹60,000 - ₹80,000</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Indoor Video Wall</td>
                  <td className="py-3 px-4">8x4 ft</td>
                  <td className="py-3 px-4">15 sec per slot</td>
                  <td className="py-3 px-4">₹20,000 - ₹30,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">What&apos;s Included:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-bold">✓</span>
                  <span>Premium location access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-bold">✓</span>
                  <span>10-15 second slot with multiple rotations daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-bold">✓</span>
                  <span>Content creation support (2 revisions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-bold">✓</span>
                  <span>Remote content updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-bold">✓</span>
                  <span>24/7 technical support</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-800 bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Long-Term Discounts</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-bold">✓</span>
                  <span><strong>3 months:</strong> 5% discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-bold">✓</span>
                  <span><strong>6 months:</strong> 10% discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-bold">✓</span>
                  <span><strong>12 months:</strong> 15% discount + free content updates</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Multiple screens across locations available at special package rates</p>
            </div>
          </div>

          <div className="bg-blue-800 text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">Need Custom LED Display Solutions?</p>
            <p className="text-lg mb-4">Call us for availability and customized packages</p>
            <a href="tel:+919456497636" className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call +91 94564 97636
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Advantages of LED Display Advertising</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Dynamic Content", desc: "Show videos, animations, and multiple ads in rotation. Keep your messaging fresh and engaging." },
            { title: "Instant Updates", desc: "Change your ad content remotely at any time – no reprinting costs or installation delays." },
            { title: "High Attention", desc: "Moving images and bright displays capture 5x more attention than static hoardings." },
            { title: "Cost-Effective", desc: "Share screen time with multiple advertisers or run multiple ads cost-effectively." },
            { title: "Day & Night Visibility", desc: "High-brightness LED screens are clearly visible even in direct sunlight and at night." },
            { title: "Targeted Scheduling", desc: "Run specific ads at specific times – morning rush hour, evening, weekends – to reach your audience." },
          ].map((benefit, i) => (
            <div key={i} className="border-l-4 border-blue-800 pl-4 py-2 bg-white p-5 rounded-r-lg shadow-sm">
              <h3 className="font-bold text-xl mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Specifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Content Specifications for LED Displays</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Video/Audio Specifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-semibold">Format:</span>
                <span>MP4, AVI, MOV, GIF</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Resolution:</span>
                <span>1920x1080 (Full HD) recommended</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Duration:</span>
                <span>10-30 seconds per slot</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Audio:</span>
                <span>Optional (available at select locations)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">File size:</span>
                <span>Max 100MB per file</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Image Specifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-semibold">Format:</span>
                <span>JPG, PNG, PSD, AI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Resolution:</span>
                <span>Minimum 150 DPI at actual size</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Color mode:</span>
                <span>RGB (for digital displays)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Duration:</span>
                <span>8-15 seconds per static image</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-600 mt-4 text-sm">Our team can help create or optimize your content for LED displays at nominal charges.</p>
      </section>

      {/* Best Use Cases */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Best Use Cases for LED Advertising</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Product Launches", "Festival Promotions", "Retail Sales", "Movie Promotions",
            "Political Campaigns", "Corporate Branding", "Event Announcements", "Real Estate Ads",
            "Automobile Launches", "FMCG Campaigns", "Educational Institutes", "Healthcare Services",
            "Entertainment Events", "Sports Sponsorships", "Charity Campaigns", "Government Ads"
          ].map((use, i) => (
            <div key={i} className="bg-gray-100 p-3 rounded-lg text-center font-medium text-gray-800 hover:bg-blue-100 transition">
              {use}
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
              q: "What is the minimum duration for LED display advertising?",
              a: "The minimum duration is typically 1 month for outdoor digital billboards. For special events, we offer weekly and daily packages on mobile LED vans and indoor screens. Contact us for short-term requirements."
            },
            {
              q: "How many times will my ad be shown daily?",
              a: "On a 10-second slot, your ad typically rotates every 2-3 minutes, resulting in 400-500 displays per day, depending on total advertisers. Total daily impressions can range from 50,000 to 100,000+ on high-traffic locations."
            },
            {
              q: "Can I change my ad content during the campaign?",
              a: "Yes, you can update your content remotely at any time. Most packages include 2-4 free content changes per month. Additional changes may incur nominal charges."
            },
            {
              q: "What is the difference between indoor and outdoor LED displays?",
              a: "Outdoor displays have higher brightness (5000-7000 nits) to combat sunlight, are weatherproof, and have higher power consumption. Indoor displays have finer pixel pitch for closer viewing and lower brightness (1500-2500 nits)."
            },
            {
              q: "Do LED displays work in direct sunlight?",
              a: "Yes, our outdoor LED displays are specifically designed with high-brightness LEDs (5000+ nits) and auto-brightness adjustment to remain clearly visible even in direct sunlight."
            },
            {
              q: "Can multiple advertisers share the same display?",
              a: "Yes, most digital billboards rotate ads from multiple advertisers. You pay for a specific time slot (e.g., 10 seconds) that repeats throughout the day. Exclusive displays are also available at premium rates."
            },
            {
              q: "Do you provide content creation services?",
              a: "Yes, our creative team can design static ads, animations, and videos for your LED campaigns. Charges start from ₹2,000 per creative, depending on complexity."
            },
            {
              q: "Are there LED displays available in Muzaffarnagar and other cities?",
              a: "Yes, we have LED displays across Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, and Delhi NCR. Contact us for location-specific availability."
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
            <p className="text-gray-600 text-sm">Premium static hoarding placements</p>
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
          <Link href="/locations/meerut" className="text-blue-800 hover:underline">Meerut</Link>
          <Link href="/locations/muzaffarnagar" className="text-blue-800 hover:underline">Muzaffarnagar</Link>
          <Link href="/locations/shamli" className="text-blue-800 hover:underline">Shamli</Link>
          <Link href="/locations/saharanpur" className="text-blue-800 hover:underline">Saharanpur</Link>
          <Link href="/locations/baghpat" className="text-blue-800 hover:underline">Baghpat</Link>
          <Link href="/locations/delhi-ncr" className="text-blue-800 hover:underline">Delhi NCR</Link>
          <Link href="/locations/hapur" className="text-blue-800 hover:underline">Hapur</Link>
          <Link href="/locations/delhi" className="text-blue-800 hover:underline">Delhi</Link>
        </div>
      </section>
    </main>
  );
}