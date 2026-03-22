import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Web Developer in Meerut | Sardhana',
  description: 'Professional web developer in Meerut - Devashish Tyagi from Sardhana. Expert in Next.js, React, SEO, and custom website development. Get high-performance, SEO-friendly websites.',
  keywords: 'devashish tyagi meerut, web developer meerut, web developer sardhana, devashish tyagi sardhana, website developer meerut, next.js developer meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/web-developer-meerut',
  },
  openGraph: {
    title: 'Devashish Tyagi | Web Developer in Meerut',
    description: 'Professional web developer from Sardhana, Meerut. Expert in Next.js, React, and SEO.',
    url: 'https://worldmediancr.com/developer/web-developer-meerut',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/developer/devashishtyagi.webp',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_IN',
    type: 'profile',
  },
};

export default function WebDeveloperMeerutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/developer" className="text-gray-700 hover:text-blue-600">Developer</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Web Developer Meerut</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto md:mx-0">
          <Image
            src="/images/developer/Devashish Tyagi.webp"
            alt="Devashish Tyagi - Web Developer from Meerut"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi</h1>
          <p className="text-xl text-gray-600">Professional Web Developer from Sardhana, Meerut</p>
          <p className="text-gray-500 mt-2">📍 Based in Sardhana, Meerut, Uttar Pradesh</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a professional <strong>web developer based in Meerut</strong>, specializing in creating high-performance, SEO-optimized websites for businesses across India. With expertise in modern web technologies, he helps businesses establish a strong online presence.</p>

        <h2 className="text-gray-900">Services Offered</h2>
        <ul>
          <li><strong>Next.js Development:</strong> Fast, server-side rendered React applications</li>
          <li><strong>React Applications:</strong> Interactive and responsive user interfaces</li>
          <li><strong>SEO Optimization:</strong> Advanced SEO strategies for better search rankings</li>
          <li><strong>Responsive Design:</strong> Mobile-friendly websites that work on all devices</li>
          <li><strong>Custom Websites:</strong> Tailored solutions for business needs</li>
          <li><strong>Website Optimization:</strong> Speed optimization, Core Web Vitals improvement</li>
        </ul>

        <h2 className="text-gray-900">Why Choose Devashish Tyagi?</h2>
        <ul>
          <li><strong>Local Expertise:</strong> Based in Sardhana, Meerut – understands local business needs</li>
          <li><strong>Modern Technology:</strong> Uses Next.js 14, React, TypeScript, Tailwind CSS</li>
          <li><strong>SEO Focus:</strong> Builds websites that rank well on Google</li>
          <li><strong>Fast Performance:</strong> Optimized for Core Web Vitals</li>
          <li><strong>Responsive Design:</strong> Works perfectly on mobile, tablet, and desktop</li>
          <li><strong>Affordable Pricing:</strong> Competitive rates for quality work</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Featured Work: World Media NCR</h3>
          <p>Devashish Tyagi developed and optimized the World Media NCR website, implementing advanced SEO strategies that helped the site rank for competitive keywords including:</p>
          <ul className="mt-2">
            <li>&quot;advertising agency in Meerut&quot;</li>
            <li>&quot;hoarding advertising Meerut&quot;</li>
            <li>&quot;digital wall painting Meerut&quot;</li>
            <li>&quot;billboard advertising Meerut&quot;</li>
          </ul>
          <p className="mt-3">The website is built with Next.js 14, features complete SEO optimization, local business schema, and fast loading times.</p>
        </div>

        <h2 className="text-gray-900">Technical Expertise</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Frontend</h4>
            <p className="text-sm text-gray-600">Next.js, React, TypeScript, Tailwind CSS, HTML5, CSS3</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Backend</h4>
            <p className="text-sm text-gray-600">Node.js, Express, MongoDB, REST APIs</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">SEO & Analytics</h4>
            <p className="text-sm text-gray-600">Google Search Console, Schema Markup, Core Web Vitals</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Tools</h4>
            <p className="text-sm text-gray-600">Git, Vercel, Figma, VS Code</p>
          </div>
        </div>

        <h2 className="text-gray-900">Location & Service Area</h2>
        <p>Devashish Tyagi operates from <strong>Sardhana, Meerut</strong> and serves clients across:</p>
        <ul>
          <li>Meerut and surrounding areas</li>
          <li>Muzaffarnagar</li>
          <li>Shamli</li>
          <li>Saharanpur</li>
          <li>Delhi NCR</li>
          <li>Remote clients across India</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Looking for a Web Developer?</h3>
          <p className="mb-4">Contact Devashish Tyagi for professional web development services in Meerut and across India.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Contact Now</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>
      </div>
    </main>
  );
}