import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Next.js Developer in Meerut | React Expert',
  description: 'Expert Next.js developer in Meerut - Devashish Tyagi from Sardhana. Specializing in Next.js 14, React, TypeScript, and SEO-optimized web applications. Hire a professional Next.js developer.',
  keywords: 'next.js developer meerut, react developer meerut, devashish tyagi next.js, nextjs expert sardhana, react developer sardhana, web developer meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/nextjs-developer-meerut',
  },
  openGraph: {
    title: 'Devashish Tyagi | Next.js Developer in Meerut',
    description: 'Expert Next.js developer based in Meerut. Specializing in Next.js 14, React, TypeScript.',
    url: 'https://worldmediancr.com/developer/nextjs-developer-meerut',
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

export default function NextjsDeveloperPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/developer" className="text-gray-700 hover:text-blue-600">Developer</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Next.js Developer Meerut</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto mb-4">
          <Image
            src="/images/developer/devashishtyagi.webp"
            alt="Devashish Tyagi - Next.js Developer"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi</h1>
        <p className="text-xl text-gray-600">Professional Next.js Developer in Meerut</p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a professional <strong>Next.js developer based in Meerut</strong> (Sardhana), specializing in building high-performance, SEO-optimized web applications using the latest Next.js 14 framework. With expertise in React, TypeScript, and modern web technologies, he delivers fast, scalable, and user-friendly websites.</p>

        <h2 className="text-gray-900">Why Next.js?</h2>
        <p>Next.js is the leading React framework for production-ready applications. Devashish Tyagi leverages Next.js to deliver:</p>
        <ul>
          <li><strong>Server-Side Rendering (SSR):</strong> Better SEO and faster initial page loads</li>
          <li><strong>Static Site Generation (SSG):</strong> Blazing fast pages with pre-rendered content</li>
          <li><strong>Image Optimization:</strong> Automatic image optimization for better Core Web Vitals</li>
          <li><strong>API Routes:</strong> Full-stack capabilities with built-in API endpoints</li>
          <li><strong>TypeScript Support:</strong> Type-safe code for better maintainability</li>
        </ul>

        <h2 className="text-gray-900">Next.js Services Offered</h2>
        <ul>
          <li>Complete Next.js 14 application development</li>
          <li>Migration from React to Next.js</li>
          <li>SEO optimization for Next.js sites</li>
          <li>Performance optimization and Core Web Vitals improvement</li>
          <li>Server-Side Rendering (SSR) and Static Site Generation (SSG) implementation</li>
          <li>Custom API routes development</li>
          <li>Vercel deployment and hosting setup</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Featured Project: World Media NCR</h3>
          <p>The World Media NCR website, developed by Devashish Tyagi, is a Next.js 14 application featuring:</p>
          <ul className="mt-2">
            <li>Server-side rendering for optimal SEO</li>
            <li>Dynamic routing for service and location pages</li>
            <li>Advanced SEO metadata and schema markup</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Optimized image loading with Next.js Image component</li>
          </ul>
          <p className="mt-3">The site ranks for multiple competitive keywords and loads with excellent Core Web Vitals scores.</p>
        </div>

        <h2 className="text-gray-900">Technical Stack</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Core Technologies</h4>
            <p className="text-sm text-gray-600">Next.js 14, React 18, TypeScript, Tailwind CSS</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">State Management</h4>
            <p className="text-sm text-gray-600">React Context, Redux Toolkit, Zustand</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Backend & Database</h4>
            <p className="text-sm text-gray-600">Node.js, MongoDB, Prisma, NextAuth.js</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Deployment</h4>
            <p className="text-sm text-gray-600">Vercel, GitHub Actions, CI/CD</p>
          </div>
        </div>

        <h2 className="text-gray-900">Why Hire a Next.js Developer from Meerut?</h2>
        <ul>
          <li><strong>Local Availability:</strong> Based in Sardhana, Meerut for easy communication</li>
          <li><strong>Remote Capability:</strong> Works with clients across India and globally</li>
          <li><strong>SEO Expertise:</strong> Builds websites that rank well on search engines</li>
          <li><strong>Performance Focus:</strong> Optimizes for Core Web Vitals and Lighthouse scores</li>
          <li><strong>Affordable Rates:</strong> Quality development at competitive prices</li>
        </ul>

        <h2 className="text-gray-900">Projects Suitable for Next.js</h2>
        <ul>
          <li>Business websites and corporate sites</li>
          <li>E-commerce platforms</li>
          <li>Blogs and content-heavy websites</li>
          <li>Web applications and dashboards</li>
          <li>Portfolio and agency websites</li>
          <li>SEO-critical websites</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Hire a Next.js Developer</h3>
          <p className="mb-4">Looking for a professional Next.js developer in Meerut? Contact Devashish Tyagi for your next project.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Contact Now</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>
      </div>
    </main>
  );
}