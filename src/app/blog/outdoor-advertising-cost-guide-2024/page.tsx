import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Outdoor Advertising Cost Guide 2024 | Hoarding & Wall Painting Rates',
  description: 'Complete guide to outdoor advertising costs in Meerut and NCR. Hoarding prices, wall painting rates, vehicle branding costs, and flex printing charges. Updated for 2024.',
  keywords: 'outdoor advertising cost, hoarding price meerut, wall painting rates, advertising cost guide 2024, billboard rental cost, vehicle branding price',
  alternates: {
    canonical: 'https://worldmediancr.com/blog/outdoor-advertising-cost-guide-2024',
  },
  openGraph: {
    title: 'Outdoor Advertising Cost Guide 2024 | World Media NCR',
    description: 'Complete guide to outdoor advertising costs in Meerut and NCR. Updated for 2024.',
    url: 'https://worldmediancr.com/blog/outdoor-advertising-cost-guide-2024',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Muzaffarnagar Meerut Road.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
};

export default function CostGuideBlog() {
  return (
    <article className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Outdoor Advertising Cost Guide 2024</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Outdoor Advertising Cost Guide 2024: Hoarding, Wall Painting & More</h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <span>Published: March 1, 2024</span>
          <span className="mx-2">•</span>
          <span>12 min read</span>
          <span className="mx-2">•</span>
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pricing Guide</span>
        </div>
      </header>

      {/* Featured Image - Standard rectangle size */}
      <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/images/portfolio/Baghra Bus Stand.webp"
          alt="Outdoor advertising cost guide - hoarding example"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="lead text-gray-800">Planning an outdoor advertising campaign in Meerut or NCR? Understanding costs is crucial for budgeting and maximizing ROI. This comprehensive guide breaks down 2024 prices for hoardings, wall paintings, vehicle branding, and flex printing.</p>

        <h2 className="text-gray-900">Hoarding Advertising Costs in Meerut</h2>
        
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/Muzaffarnagar Rorkee Road.webp"
              alt="Hoarding on Roorkee Road Meerut"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/Shamli Kairana Road.webp"
              alt="Hoarding on Shamli Kairana Road"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h3 className="text-gray-900">By Location (20x10 ft size)</h3>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Location</th>
                <th className="py-2 px-4 text-left">Monthly Range</th>
                <th className="py-2 px-4 text-left">Annual Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="py-2 px-4">Delhi Road (Premium)</td><td>₹30,000 - ₹50,000</td><td>₹3,24,000 - ₹5,40,000</td></tr>
              <tr className="border-t bg-gray-50"><td>Roorkee Road</td><td>₹20,000 - ₹35,000</td><td>₹2,16,000 - ₹3,78,000</td></tr>
              <tr className="border-t"><td>Garh Road</td><td>₹18,000 - ₹30,000</td><td>₹1,94,000 - ₹3,24,000</td></tr>
              <tr className="border-t bg-gray-50"><td>Muzaffarnagar Highway</td><td>₹15,000 - ₹25,000</td><td>₹1,62,000 - ₹2,70,000</td></tr>
              <tr className="border-t"><td>Gokalpuri/Shiv Chowk</td><td>₹12,000 - ₹20,000</td><td>₹1,30,000 - ₹2,16,000</td></tr>
              <tr className="border-t bg-gray-50"><td>Other Areas</td><td>₹8,000 - ₹15,000</td><td>₹86,000 - ₹1,62,000</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-gray-900">By Size (Delhi Road rates)</h3>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr><th className="py-2 px-4 text-left">Size</th><th className="py-2 px-4 text-left">Monthly Range</th></tr>
            </thead>
            <tbody>
              <tr className="border-t"><td>10x10 ft</td><td>₹15,000 - ₹25,000</td></tr>
              <tr className="border-t bg-gray-50"><td>15x10 ft</td><td>₹20,000 - ₹35,000</td></tr>
              <tr className="border-t"><td>20x10 ft</td><td>₹30,000 - ₹50,000</td></tr>
              <tr className="border-t bg-gray-50"><td>30x10 ft</td><td>₹45,000 - ₹70,000</td></tr>
              <tr className="border-t"><td>40x10 ft</td><td>₹60,000 - ₹90,000</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-gray-900">Digital Wall Painting Costs</h2>
        
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/Meerut Sardhana.webp"
              alt="Digital wall painting on Sardhana Road"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/portfolio/Sharanpur Shakumbri Devi.webp"
              alt="Digital wall painting in Saharanpur"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="overflow-x-auto my-4">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr><th className="py-2 px-4 text-left">Location Type</th><th className="py-2 px-4 text-left">3-Year Package</th><th className="py-2 px-4 text-left">Monthly Equivalent</th></tr>
            </thead>
            <tbody>
              <tr className="border-t"><td>Premium (Delhi Road)</td><td>₹1,50,000 - ₹2,50,000</td><td>₹4,100 - ₹6,900</td></tr>
              <tr className="border-t bg-gray-50"><td>High-Traffic (Roorkee/Garh)</td><td>₹1,00,000 - ₹1,80,000</td><td>₹2,700 - ₹5,000</td></tr>
              <tr className="border-t"><td>Commercial Areas</td><td>₹70,000 - ₹1,20,000</td><td>₹1,900 - ₹3,300</td></tr>
              <tr className="border-t bg-gray-50"><td>Rural/Semi-Urban</td><td>₹40,000 - ₹80,000</td><td>₹1,100 - ₹2,200</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-gray-900">Vehicle Branding Costs</h2>
        
        <div className="relative w-full h-48 my-6 rounded-lg overflow-hidden">
          <Image
            src="/images/services/Hoarding3.webp"
            alt="Vehicle branding cost example"
            fill
            className="object-cover"
          />
        </div>

        <div className="overflow-x-auto my-4">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr><th className="py-2 px-4 text-left">Vehicle Type</th><th className="py-2 px-4 text-left">Partial Wrap</th><th className="py-2 px-4 text-left">Full Wrap</th></tr>
            </thead>
            <tbody>
              <tr className="border-t"><td>Hatchback/Sedan</td><td>₹8,000 - ₹15,000</td><td>₹20,000 - ₹35,000</td></tr>
              <tr className="border-t bg-gray-50"><td>SUV/MUV</td><td>₹12,000 - ₹20,000</td><td>₹30,000 - ₹45,000</td></tr>
              <tr className="border-t"><td>Pickup/Tempo</td><td>₹10,000 - ₹18,000</td><td>₹25,000 - ₹40,000</td></tr>
              <tr className="border-t bg-gray-50"><td>Truck (14-17 ft)</td><td>₹15,000 - ₹25,000</td><td>₹40,000 - ₹60,000</td></tr>
              <tr className="border-t"><td>Bus</td><td>₹25,000 - ₹40,000</td><td>₹70,000 - ₹1,20,000</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-gray-900">Flex Printing Rates (per sq ft)</h2>
        
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/services/Hoarding4.webp"
              alt="Flex printing example"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/services/Hoarding5.webp"
              alt="Large format printing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="overflow-x-auto my-4">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr><th className="py-2 px-4 text-left">Print Type</th><th className="py-2 px-4 text-left">Price Range</th></tr>
            </thead>
            <tbody>
              <tr className="border-t"><td>Frontlit Flex (Standard)</td><td>₹18 - ₹25</td></tr>
              <tr className="border-t bg-gray-50"><td>Backlit Flex</td><td>₹25 - ₹35</td></tr>
              <tr className="border-t"><td>Vinyl Banner</td><td>₹30 - ₹40</td></tr>
              <tr className="border-t bg-gray-50"><td>Mesh Banner</td><td>₹40 - ₹50</td></tr>
              <tr className="border-t"><td>One-way Vision</td><td>₹60 - ₹80</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-gray-900">LED Display Advertising Costs</h2>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
              <tr><th className="py-2 px-4 text-left">Location Type</th><th className="py-2 px-4 text-left">Monthly Range</th></tr>
            </thead>
            <tbody>
              <tr className="border-t"><td>Delhi-Meerut Expressway</td><td>₹50,000 - ₹1,00,000</td></tr>
              <tr className="border-t bg-gray-50"><td>Noida Expressway</td><td>₹60,000 - ₹1,20,000</td></tr>
              <tr className="border-t"><td>Delhi NCR City Locations</td><td>₹30,000 - ₹60,000</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-gray-900">Factors Affecting Advertising Costs</h2>
        <ul className="text-gray-700">
          <li><strong>Location:</strong> Premium areas command higher rates</li>
          <li><strong>Duration:</strong> Longer campaigns get better discounts</li>
          <li><strong>Size:</strong> Larger formats cost more but offer better value per sq ft</li>
          <li><strong>Illumination:</strong> Backlit/LED adds 15-25% to cost</li>
          <li><strong>Season:</strong> Election periods and festivals see price surges</li>
          <li><strong>Bulk booking:</strong> Multiple locations get volume discounts</li>
        </ul>

        <h2 className="text-gray-900">Cost-Saving Tips</h2>
        <ul className="text-gray-700">
          <li>Book longer durations (6-12 months) for up to 20% savings</li>
          <li>Combine multiple locations for bulk discounts</li>
          <li>Consider wall painting for long-term campaigns (90% cheaper over 3 years)</li>
          <li>Book during off-peak seasons (post-election, non-festival periods)</li>
          <li>Use standard sizes to avoid custom fabrication charges</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Need a Custom Quote?</h3>
          <p className="mb-4 text-gray-700">Contact us for exact pricing based on your specific requirements. We'll provide a detailed quotation with no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Get Free Quote</Link>
            <Link href="/services" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View All Services</Link>
          </div>
        </div>

        <h3 className="text-gray-900">Frequently Asked Questions</h3>
        
        <h4 className="text-gray-900">What is the minimum duration for hoarding advertising?</h4>
        <p className="text-gray-700">Minimum duration is typically 1 month, though 3+ months is recommended for effective brand recall. Longer durations get better rates.</p>

        <h4 className="text-gray-900">Are these prices negotiable?</h4>
        <p className="text-gray-700">Prices are negotiable based on duration, number of locations, and relationship. Contact us for the best possible rates.</p>

        <h4 className="text-gray-900">Do these prices include GST?</h4>
        <p className="text-gray-700">Prices mentioned are exclusive of GST (18%). Final invoice will include applicable taxes.</p>

        <h4 className="text-gray-900">What's included in hoarding rental?</h4>
        <p className="text-gray-700">Rental includes structure, location access, and permits. Printing and installation are usually extra.</p>
      </div>

      {/* Related Blogs */}
      <section className="mt-12 pt-8 border-t">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/benefits-of-hoarding-advertising" className="block bg-gray-50 p-4 rounded-lg hover:shadow-md transition">
            <h4 className="font-semibold text-lg mb-2 text-gray-900">Top 10 Benefits of Hoarding Advertising</h4>
            <p className="text-gray-600 text-sm">Why hoardings are essential for your business</p>
          </Link>
          <Link href="/blog/best-locations-for-hoarding-in-meerut" className="block bg-gray-50 p-4 rounded-lg hover:shadow-md transition">
            <h4 className="font-semibold text-lg mb-2 text-gray-900">Best Locations for Hoarding in Meerut</h4>
            <p className="text-gray-600 text-sm">Top 20 spots for maximum visibility</p>
          </Link>
        </div>
      </section>
    </article>
  );
}