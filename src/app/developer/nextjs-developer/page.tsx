import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Next.js Developer | React Expert',
  description: 'Expert Next.js developer - Devashish Tyagi. Specializing in Next.js 14, React, TypeScript, and SEO-optimized web applications. Hire a professional Next.js developer.',
  keywords: 'next.js developer, react developer, nextjs expert, next.js portfolio, hire next.js developer, react developer portfolio, best next.js developer',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/nextjs-developer',
  },
  openGraph: {
    title: 'Devashish Tyagi | Next.js Developer',
    description: 'Expert Next.js developer specializing in Next.js 14, React, TypeScript, and SEO-optimized applications.',
    url: 'https://worldmediancr.com/developer/nextjs-developer',
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
          <li className="text-gray-500">Next.js Developer</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto md:mx-0">
          <Image
            src="/images/developer/devashishtyagi.webp"
            alt="Devashish Tyagi - Next.js Developer"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi</h1>
          <p className="text-xl text-gray-600">Next.js & React Developer</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a professional <strong>Next.js developer</strong> specializing in building high-performance, SEO-optimized web applications using the latest Next.js 14 framework. With expertise in React, TypeScript, and modern web technologies, he delivers fast, scalable, and user-friendly websites.</p>

        <h2>Why Next.js?</h2>
        <p>Next.js is the leading React framework for production-ready applications. Devashish Tyagi leverages Next.js to deliver:</p>
        <ul>
          <li><strong>Server-Side Rendering (SSR):</strong> Better SEO and faster initial page loads</li>
          <li><strong>Static Site Generation (SSG):</strong> Blazing fast pages with pre-rendered content</li>
          <li><strong>Image Optimization:</strong> Automatic image optimization for better Core Web Vitals</li>
          <li><strong>API Routes:</strong> Full-stack capabilities with built-in API endpoints</li>
          <li><strong>TypeScript Support:</strong> Type-safe code for better maintainability</li>
          <li><strong>App Router:</strong> Modern routing with React Server Components</li>
        </ul>

        <h2>Next.js Services Offered</h2>
        <ul>
          <li>Complete Next.js 14 application development</li>
          <li>Migration from React to Next.js</li>
          <li>SEO optimization for Next.js sites</li>
          <li>Performance optimization and Core Web Vitals improvement</li>
          <li>Server-Side Rendering (SSR) and Static Site Generation (SSG) implementation</li>
          <li>Custom API routes development</li>
          <li>Vercel deployment and hosting setup</li>
          <li>TypeScript integration for type safety</li>
        </ul>

        <h2>Featured Project: World Media NCR</h2>
        <p>The World Media NCR website, developed by Devashish Tyagi, is a Next.js 14 application featuring:</p>
        <ul>
          <li>Server-side rendering for optimal SEO</li>
          <li>Dynamic routing for 50+ service and location pages</li>
          <li>Advanced SEO metadata and schema markup</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>Optimized image loading with Next.js Image component</li>
          <li>API routes for contact forms</li>
          <li>TypeScript for type safety</li>
        </ul>

        <h2>Technical Expertise</h2>
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
            <h4 className="font-bold">Backend</h4>
            <p className="text-sm text-gray-600">Node.js, Next.js API Routes, MongoDB</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Deployment</h4>
            <p className="text-sm text-gray-600">Vercel, GitHub Actions, CI/CD</p>
          </div>
        </div>

        <h2>Why Choose Devashish Tyagi?</h2>
        <ul>
          <li><strong>Next.js Expert:</strong> Deep understanding of Next.js 14 features</li>
          <li><strong>SEO Focus:</strong> Builds applications that rank on search engines</li>
          <li><strong>Performance Optimization:</strong> Focuses on Core Web Vitals</li>
          <li><strong>Clean Code:</strong> Well-structured, maintainable code</li>
          <li><strong>TypeScript:</strong> Type-safe development</li>
          <li><strong>Responsive Design:</strong> Mobile-first approach</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Looking for a Next.js Developer?</h3>
          <p className="mb-4">Contact Devashish Tyagi for professional Next.js development services. Available for projects worldwide.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Contact Me</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>

        <h3>Frequently Asked Questions</h3>
        
        <h4>What makes Next.js different from React?</h4>
        <p>Next.js adds server-side rendering, static site generation, API routes, and built-in optimizations to React, making it ideal for SEO-critical websites and production applications.</p>

        <h4>Do you use TypeScript with Next.js?</h4>
        <p>Yes, I use TypeScript for all Next.js projects to ensure type safety, better maintainability, and a better developer experience.</p>

        <h4>Do you handle deployment on Vercel?</h4>
        <p>Yes, I handle complete deployment on Vercel (the creators of Next.js) and set up CI/CD pipelines for automated deployments.</p>

        <h4>What types of projects are suitable for Next.js?</h4>
        <p>Next.js is excellent for business websites, e-commerce platforms, blogs, SaaS applications, and any SEO-critical website that needs fast performance.</p>
      </div>
    </main>
  );
}