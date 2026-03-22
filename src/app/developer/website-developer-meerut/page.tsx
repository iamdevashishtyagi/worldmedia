import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Website Developer in Meerut | Web Designer',
  description: 'Professional website developer in Meerut - Devashish Tyagi from Sardhana. Expert in responsive web design, custom website development, and SEO optimization. Get a professional website for your business.',
  keywords: 'website developer meerut, website designer meerut, web developer sardhana, best website developer meerut, website developer near me, custom website development meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/website-developer-meerut',
  },
  openGraph: {
    title: 'Devashish Tyagi | Website Developer in Meerut',
    description: 'Professional website developer based in Meerut. Expert in custom website development and SEO.',
    url: 'https://worldmediancr.com/developer/website-developer-meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/developer/Devashish-Tyagi.webp',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_IN',
    type: 'profile',
  },
};

export default function WebsiteDeveloperPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/developer" className="text-gray-700 hover:text-blue-600">Developer</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Website Developer Meerut</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto mb-4">
          <Image
            src="/images/developer/devashishtyagi.webp"
            alt="Devashish Tyagi - Website Developer from Meerut"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi</h1>
        <p className="text-xl text-gray-600">Professional Website Developer in Meerut</p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a professional <strong>website developer based in Meerut</strong>, specializing in creating custom, responsive, and SEO-optimized websites for businesses of all sizes. Based in Sardhana, Meerut, he helps businesses establish a strong online presence with modern, fast-loading websites.</p>

        <h2 className="text-gray-900">Website Development Services</h2>
        <ul>
          <li><strong>Custom Business Websites:</strong> Tailored websites that reflect your brand</li>
          <li><strong>Responsive Web Design:</strong> Mobile-friendly websites that work on all devices</li>
          <li><strong>E-commerce Websites:</strong> Online stores with secure payment integration</li>
          <li><strong>Portfolio Websites:</strong> Showcase your work professionally</li>
          <li><strong>Landing Pages:</strong> High-converting pages for campaigns</li>
          <li><strong>Website Redesign:</strong> Modernize existing websites</li>
          <li><strong>SEO Optimization:</strong> Get found on Google</li>
          <li><strong>Website Maintenance:</strong> Ongoing support and updates</li>
        </ul>

        <h2 className="text-gray-900">Why Choose Devashish Tyagi?</h2>
        <ul>
          <li><strong>Local Developer:</strong> Based in Sardhana, Meerut – easy to communicate</li>
          <li><strong>SEO Focus:</strong> Builds websites that rank on Google</li>
          <li><strong>Fast Performance:</strong> Optimized for Core Web Vitals</li>
          <li><strong>Responsive Design:</strong> Perfect on mobile, tablet, and desktop</li>
          <li><strong>Modern Technology:</strong> Uses Next.js, React, Tailwind CSS</li>
          <li><strong>Affordable Pricing:</strong> Quality websites at competitive rates</li>
          <li><strong>After-Sales Support:</strong> Ongoing assistance after launch</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Recent Project: World Media NCR</h3>
          <p>Devashish Tyagi developed the complete World Media NCR website – a comprehensive advertising agency website featuring:</p>
          <ul className="mt-2">
            <li>50+ SEO-optimized pages</li>
            <li>Service pages for 7 different advertising services</li>
            <li>Location pages for 8+ cities</li>
            <li>Blog section with 5+ articles</li>
            <li>Portfolio gallery with project images</li>
            <li>Contact form and call-to-action sections</li>
          </ul>
          <p className="mt-3">The website is fully responsive, loads in under 2 seconds, and ranks for multiple competitive keywords.</p>
        </div>

        <h2 className="text-gray-900">Website Development Process</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4 text-center">
            <span className="text-2xl font-bold text-blue-600">1</span>
            <h4 className="font-bold mt-2">Discovery</h4>
            <p className="text-sm text-gray-600">Understand your business, goals, and requirements</p>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center">
            <span className="text-2xl font-bold text-blue-600">2</span>
            <h4 className="font-bold mt-2">Design</h4>
            <p className="text-sm text-gray-600">Create mockups and design concepts</p>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center">
            <span className="text-2xl font-bold text-blue-600">3</span>
            <h4 className="font-bold mt-2">Development</h4>
            <p className="text-sm text-gray-600">Build the website with modern technologies</p>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center">
            <span className="text-2xl font-bold text-blue-600">4</span>
            <h4 className="font-bold mt-2">Launch</h4>
            <p className="text-sm text-gray-600">Deploy and optimize for performance</p>
          </div>
        </div>

        <h2 className="text-gray-900">Types of Websites I Build</h2>
        <ul>
          <li><strong>Business Websites:</strong> Corporate sites for companies and agencies</li>
          <li><strong>E-commerce Stores:</strong> Online shops with product catalogs</li>
          <li><strong>Portfolio Sites:</strong> For photographers, designers, and artists</li>
          <li><strong>Educational Websites:</strong> Schools, colleges, coaching centers</li>
          <li><strong>Healthcare Websites:</strong> Hospitals, clinics, doctors</li>
          <li><strong>Real Estate Websites:</strong> Property listings and builder sites</li>
          <li><strong>Restaurant Websites:</strong> Menus, reservations, and locations</li>
          <li><strong>Personal Websites:</strong> Professional profiles and resumes</li>
        </ul>

        <h2 className="text-gray-900">Service Area</h2>
        <p>Devashish Tyagi serves clients across:</p>
        <ul>
          <li><strong>Meerut:</strong> City and surrounding areas including Sardhana, Mawana, Kithore</li>
          <li><strong>Muzaffarnagar</strong></li>
          <li><strong>Shamli</strong></li>
          <li><strong>Saharanpur</strong></li>
          <li><strong>Baghpat</strong></li>
          <li><strong>Delhi NCR</strong></li>
          <li><strong>Remote clients</strong> across India and internationally</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Ready for a New Website?</h3>
          <p className="mb-4">Contact Devashish Tyagi, the trusted website developer in Meerut, for your next project.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Get a Quote</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>
      </div>
    </main>
  );
}