import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Freelance Web Developer in Meerut',
  description: 'Hire a freelance web developer in Meerut - Devashish Tyagi from Sardhana. Expert in Next.js, React, custom websites, and SEO. Affordable freelance web development services.',
  keywords: 'freelance web developer meerut, freelance developer sardhana, hire web developer meerut, freelance website designer, freelance next.js developer, devashish tyagi freelance',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/freelance-web-developer-meerut',
  },
  openGraph: {
    title: 'Devashish Tyagi | Freelance Web Developer in Meerut',
    description: 'Hire a freelance web developer in Meerut for affordable, high-quality websites.',
    url: 'https://worldmediancr.com/developer/freelance-web-developer-meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/developer/Devashish Tyagi.webp',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_IN',
    type: 'profile',
  },
};

export default function FreelanceWebDeveloperPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/developer" className="text-gray-700 hover:text-blue-600">Developer</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Freelance Web Developer Meerut</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto md:mx-0">
          <Image
            src="/images/developer/Devashish-Tyagi.webp"
            alt="Devashish Tyagi - Freelance Web Developer"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi</h1>
          <p className="text-xl text-gray-600">Freelance Web Developer in Meerut</p>
          <p className="text-gray-500 mt-2">Based in Sardhana, Meerut | Available for Projects</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a <strong>freelance web developer based in Meerut</strong> (Sardhana), offering affordable, high-quality web development services to businesses and individuals. With expertise in modern technologies like Next.js, React, and SEO optimization, he helps clients build professional websites without the overhead of an agency.</p>

        <h2 className="text-gray-900">Freelance Services Offered</h2>
        <ul>
          <li><strong>Custom Website Development:</strong> Tailored solutions for your specific needs</li>
          <li><strong>Next.js & React Development:</strong> Modern, fast web applications</li>
          <li><strong>Website Redesign:</strong> Give your existing website a fresh look</li>
          <li><strong>SEO Optimization:</strong> Improve your Google rankings</li>
          <li><strong>Website Speed Optimization:</strong> Faster loading times</li>
          <li><strong>Responsive Design:</strong> Mobile-friendly websites</li>
          <li><strong>Technical Consulting:</strong> Expert advice for your web projects</li>
        </ul>

        <h2 className="text-gray-900">Why Hire a Freelance Web Developer?</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Cost-Effective</h4>
            <p className="text-sm text-gray-600">Lower rates than agencies, direct communication</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Personalized Service</h4>
            <p className="text-sm text-gray-600">One-on-one attention to your project</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Flexible Hours</h4>
            <p className="text-sm text-gray-600">Work around your schedule</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Direct Communication</h4>
            <p className="text-sm text-gray-600">No middlemen, clear communication</p>
          </div>
        </div>

        <h2 className="text-gray-900">Recent Freelance Projects</h2>
        <ul>
          <li><strong>World Media NCR:</strong> Complete advertising agency website with 50+ pages, SEO optimized</li>
          <li><strong>Additional Projects:</strong> Custom websites for local businesses, portfolio sites, and landing pages</li>
        </ul>

        <h2 className="text-gray-900">Pricing & Packages</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold text-lg">Basic Website</h4>
            <p className="text-gray-600">5-10 pages, responsive design, basic SEO</p>
            <p className="text-blue-600 font-bold mt-2">From ₹25,000</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold text-lg">Business Website</h4>
            <p className="text-gray-600">15-25 pages, advanced SEO, contact forms</p>
            <p className="text-blue-600 font-bold mt-2">From ₹40,000</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold text-lg">E-commerce Website</h4>
            <p className="text-gray-600">Product catalog, payment integration</p>
            <p className="text-blue-600 font-bold mt-2">From ₹60,000</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold text-lg">Custom Project</h4>
            <p className="text-gray-600">Tailored to your specific requirements</p>
            <p className="text-blue-600 font-bold mt-2">Custom Quote</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Why Hire Me?</h3>
          <ul>
            <li><strong>Local Developer:</strong> Based in Sardhana, Meerut – easy to meet and communicate</li>
            <li><strong>SEO Expertise:</strong> Websites that rank on Google</li>
            <li><strong>Modern Technology:</strong> Next.js, React, TypeScript</li>
            <li><strong>Fast Delivery:</strong> Timely project completion</li>
            <li><strong>After-Sales Support:</strong> Ongoing maintenance and updates</li>
            <li><strong>Transparent Pricing:</strong> No hidden costs</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Hire a Freelance Web Developer in Meerut</h3>
          <p className="mb-4">Looking for an affordable, skilled freelance web developer? Contact Devashish Tyagi today.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Hire Me</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>
      </div>
    </main>
  );
}