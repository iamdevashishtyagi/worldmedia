import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Choose World Media NCR for Advertising in Meerut & NCR',
  description: 'Discover why businesses trust World Media NCR for outdoor advertising. 10+ years experience, 500+ projects, premium locations, and end-to-end service. Your trusted advertising partner.',
  keywords: 'why choose world media ncr, advertising agency meerut, trusted advertising partner, best advertising agency, world media ncr reviews',
  alternates: {
    canonical: 'https://worldmediancr.com/blog/why-choose-world-media-ncr-for-advertising',
  },
  openGraph: {
    title: 'Why Choose World Media NCR for Advertising | World Media NCR',
    description: 'Discover why businesses trust World Media NCR for outdoor advertising in Meerut and NCR.',
    url: 'https://worldmediancr.com/blog/why-choose-world-media-ncr-for-advertising',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Muzaffarnagar Shamli Road.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
};

export default function WhyChooseUsBlog() {
  return (
    <article className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Why Choose World Media NCR</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Choose World Media NCR for Your Advertising Needs?</h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <span>Published: February 25, 2024</span>
          <span className="mx-2">•</span>
          <span>7 min read</span>
          <span className="mx-2">•</span>
          <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Company</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/images/portfolio/Muzaffarnagar Shamli Road.webp"
          alt="World Media NCR advertising on Muzaffarnagar Shamli Road"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="lead text-gray-800">With numerous advertising agencies operating in Meerut and NCR, what makes World Media NCR the preferred choice for businesses? Here's why over 500 clients have trusted us with their outdoor advertising campaigns since 2013.</p>

        <h2 className="text-gray-900">1. 10+ Years of Industry Experience</h2>
        
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/Baghra Bus Stand.webp"
              alt="World Media NCR hoarding at Baghra Bus Stand"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/Muzaffarnagar Meerut Road.webp"
              alt="World Media NCR hoarding on Muzaffarnagar Meerut Road"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p>Since 2013, we've been helping businesses in Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, and Delhi NCR achieve their advertising goals. A decade of experience means we understand:</p>
        <ul className="text-gray-700">
          <li>Which locations work best for different business types</li>
          <li>How to navigate local regulations and permits</li>
          <li>What designs capture attention in this region</li>
          <li>How to maximize ROI for every advertising budget</li>
        </ul>
        <p>This experience translates into better results for our clients.</p>

        <h2 className="text-gray-900">2. Premium Locations Across the Region</h2>
        
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/Shamli Kairana Road.webp"
              alt="Premium hoarding location on Shamli Kairana Road"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/Saharanpur Chhutmalpur.webp"
              alt="Premium hoarding location at Saharanpur Chhutmalpur"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p>We have the largest network of premium advertising locations across:</p>
        <ul className="text-gray-700">
          <li><strong>Meerut:</strong> Delhi Road, Roorkee Road, Garh Road, Gokalpuri, Shiv Chowk</li>
          <li><strong>Muzaffarnagar:</strong> Meerut Road, Roorkee Road, Shamli Road, New Mandi</li>
          <li><strong>Shamli:</strong> Kairana Road, Panipat Road, Mandi Samiti</li>
          <li><strong>Saharanpur:</strong> Delhi Road, Ambala Road, Deoband Road, Chhutmalpur</li>
          <li><strong>Baghpat:</strong> Meerut Road, Delhi Road, Baraut Road</li>
          <li><strong>Delhi NCR:</strong> Key locations across the region</li>
        </ul>
        <p>Our relationships with property owners and authorities give our clients first access to the best spots.</p>

        <h2 className="text-gray-900">3. 500+ Successful Projects</h2>
        
        <div className="relative w-full h-48 my-6 rounded-lg overflow-hidden">
          <Image
            src="/images/portfolio/NAJIBABAD FC DELHI (Delhi Meerut Landsdown Highway).webp"
            alt="Successful project on Delhi Meerut Highway"
            fill
            className="object-cover"
          />
        </div>

        <p>With over 500 completed projects, we've worked with:</p>
        <ul className="text-gray-700">
          <li>National brands like Ambuja Cement, Ultratech, Apollo Pipes</li>
          <li>Hospitals including Apollo, Metro, Medanta, Yashoda</li>
          <li>Educational institutions and universities</li>
          <li>Real estate developers and builders</li>
          <li>Political campaigns across multiple constituencies</li>
          <li>Local businesses of all sizes</li>
        </ul>
        <p>This diverse experience means we understand the unique requirements of different industries.</p>

        <h2 className="text-gray-900">4. End-to-End Service Under One Roof</h2>
        
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/services/Hoarding1.webp"
              alt="Professional design services"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/services/Hoarding2.webp"
              alt="High-quality printing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p>Unlike agencies that only broker spaces, we provide complete solutions:</p>
        <ul className="text-gray-700">
          <li><strong>Consultation:</strong> Understanding your goals and recommending the right approach</li>
          <li><strong>Location selection:</strong> Showing you available options with traffic data</li>
          <li><strong>Design:</strong> Professional creatives tailored to outdoor advertising</li>
          <li><strong>Printing:</strong> High-quality flex printing in our own facility</li>
          <li><strong>Installation:</strong> Professional installation by experienced teams</li>
          <li><strong>Maintenance:</strong> Regular checks and upkeep during your campaign</li>
          <li><strong>Reporting:</strong> Photo proof and performance updates</li>
        </ul>
        <p>One point of contact, complete accountability, and hassle-free execution.</p>

        <h2 className="text-gray-900">5. Transparent Pricing & No Hidden Costs</h2>
        
        <div className="relative w-full h-48 my-6 rounded-lg overflow-hidden">
          <Image
            src="/images/portfolio/Budhana Khatuli Road.webp"
            alt="Transparent pricing for advertising"
            fill
            className="object-cover"
          />
        </div>

        <p>We believe in complete transparency:</p>
        <ul className="text-gray-700">
          <li>Clear pricing with no hidden charges</li>
          <li>Detailed quotations breaking down all costs</li>
          <li>Flexible payment terms</li>
          <li>Competitive rates – we match or beat any genuine quote</li>
          <li>Discounts for bulk bookings and long-term commitments</li>
        </ul>

        <h2 className="text-gray-900">6. Government-Approved Locations</h2>
        <p>All our hoarding locations are legally approved with proper permits from:</p>
        <ul className="text-gray-700">
          <li>Municipal corporations and local authorities</li>
          <li>Traffic police departments</li>
          <li>Highway authorities (for expressway locations)</li>
          <li>Property owners with valid agreements</li>
        </ul>
        <p>You can advertise with confidence, knowing your campaign won't face legal issues.</p>

        <h2 className="text-gray-900">7. Fast Turnaround</h2>
        
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/Chutmalpur Facing Rorkee (Delhi Rorkee Dehradun Highway).webp"
              alt="Quick installation at Chutmalpur"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/Meerut Sardhana.webp"
              alt="Fast advertising setup"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p>Time-sensitive campaigns need quick execution. We deliver:</p>
        <ul className="text-gray-700">
          <li>Design within 24-48 hours</li>
          <li>Printing within 24-72 hours (depending on size)</li>
          <li>Installation within 2-4 days of approval</li>
          <li>Emergency 24-hour turnaround for urgent requirements</li>
        </ul>

        <h2 className="text-gray-900">8. Client-Centric Approach</h2>
        <p>Our business runs on referrals and repeat clients. We prioritize:</p>
        <ul className="text-gray-700">
          <li>Understanding your specific goals and budget</li>
          <li>Recommending what's best for you, not what's most profitable for us</li>
          <li>Being available whenever you need us</li>
          <li>Addressing issues promptly</li>
          <li>Building long-term relationships, not one-time transactions</li>
        </ul>

        <h2 className="text-gray-900">What Our Clients Say</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <p className="italic text-gray-700 mb-4">&quot;World Media NCR has been our advertising partner for over 5 years. Their locations are premium, their team is professional, and they always deliver on time.&quot;</p>
          <p className="font-semibold text-gray-900">– Bhutani Infra, Meerut</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <p className="italic text-gray-700 mb-4">&quot;We needed wall painting across rural Muzaffarnagar for a political campaign. They covered 50+ villages efficiently. Highly recommended.&quot;</p>
          <p className="font-semibold text-gray-900">– Political Campaign Team, Muzaffarnagar</p>
        </div>

        <h2 className="text-gray-900">Conclusion</h2>
        <p>Choosing the right advertising partner makes all the difference. With World Media NCR, you get experience, premium locations, end-to-end service, transparent pricing, and a team that genuinely cares about your success.</p>
        <p>Whether you're a national brand, a local business, or a political candidate, we have the expertise and resources to make your campaign successful.</p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Ready to Work with the Best?</h3>
          <p className="mb-4 text-gray-700">Contact us today for a free consultation. Let's discuss how we can help you achieve your advertising goals.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Get Free Consultation</Link>
            <Link href="/about" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">Learn More About Us</Link>
          </div>
        </div>

        <h3 className="text-gray-900">Frequently Asked Questions</h3>
        
        <h4 className="text-gray-900">How long has World Media NCR been in business?</h4>
        <p className="text-gray-700">We've been serving clients since 2013 – over 10 years of experience in outdoor advertising.</p>

        <h4 className="text-gray-900">Do you serve areas outside Meerut?</h4>
        <p className="text-gray-700">Yes, we serve Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, Delhi NCR, and other areas. See our locations page for complete coverage.</p>

        <h4 className="text-gray-900">What types of advertising do you offer?</h4>
        <p className="text-gray-700">We offer hoarding advertising, digital wall painting, billboards, vehicle branding, flex printing, LED displays, and political advertising.</p>

        <h4 className="text-gray-900">How can I get a quote?</h4>
        <p className="text-gray-700">Call us at +91 94564 97636, email info@worldmediancr.com, or visit our contact page. We'll respond promptly with a detailed quote.</p>
      </div>

      {/* Related Blogs */}
      <section className="mt-12 pt-8 border-t">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/benefits-of-hoarding-advertising" className="block bg-gray-50 p-4 rounded-lg hover:shadow-md transition">
            <h4 className="font-semibold text-lg mb-2 text-gray-900">Top 10 Benefits of Hoarding Advertising</h4>
            <p className="text-gray-600 text-sm">Why hoardings are essential for your business</p>
          </Link>
          <Link href="/blog/outdoor-advertising-cost-guide-2024" className="block bg-gray-50 p-4 rounded-lg hover:shadow-md transition">
            <h4 className="font-semibold text-lg mb-2 text-gray-900">Outdoor Advertising Cost Guide 2024</h4>
            <p className="text-gray-600 text-sm">Complete pricing breakdown for all media</p>
          </Link>
        </div>
      </section>
    </article>
  );
}