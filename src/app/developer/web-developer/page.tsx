import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Professional Web Developer',
  description: 'Professional web developer - Devashish Tyagi. Expert in Next.js, React, TypeScript, and modern web development. Custom websites, SEO optimization, and responsive design.',
  keywords: 'web developer, professional web developer, website developer, web developer portfolio, hire web developer, best web developer, web developer india',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/web-developer',
  },
  openGraph: {
    title: 'Devashish Tyagi | Professional Web Developer',
    description: 'Professional web developer specializing in Next.js, React, and modern web technologies.',
    url: 'https://worldmediancr.com/developer/web-developer',
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

export default function WebDeveloperPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/developer" className="text-gray-700 hover:text-blue-600">Developer</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Web Developer</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto md:mx-0">
          <Image
            src="/images/developer/Devashish Tyagi.webp"
            alt="Devashish Tyagi - Professional Web Developer"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi</h1>
          <p className="text-xl text-gray-600">Professional Web Developer</p>
          <p className="text-gray-500 mt-2">Based in Sardhana, Meerut | Serving Clients Worldwide</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a professional <strong>web developer</strong> specializing in modern web technologies including Next.js, React, TypeScript, and Tailwind CSS. He builds fast, responsive, and SEO-optimized websites that help businesses establish a strong online presence.</p>

        <h2>Web Development Services</h2>
        <ul>
          <li><strong>Custom Website Development:</strong> Tailored websites built for your specific needs</li>
          <li><strong>Next.js & React Development:</strong> Modern, high-performance web applications</li>
          <li><strong>Responsive Web Design:</strong> Websites that work perfectly on all devices</li>
          <li><strong>SEO Optimization:</strong> Get found on Google with advanced SEO strategies</li>
          <li><strong>Website Redesign:</strong> Modernize your existing website</li>
          <li><strong>Performance Optimization:</strong> Fast loading times and excellent Core Web Vitals</li>
          <li><strong>E-commerce Development:</strong> Online stores with secure payment integration</li>
          <li><strong>Website Maintenance:</strong> Ongoing support and updates</li>
        </ul>

        <h2>Why Choose Devashish Tyagi?</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Modern Technology Stack</h4>
            <p className="text-sm text-gray-600">Next.js 14, React 18, TypeScript, Tailwind CSS</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ SEO Expertise</h4>
            <p className="text-sm text-gray-600">Websites that rank on Google</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Fast Performance</h4>
            <p className="text-sm text-gray-600">Optimized for Core Web Vitals</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Responsive Design</h4>
            <p className="text-sm text-gray-600">Perfect on mobile, tablet, desktop</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Clean Code</h4>
            <p className="text-sm text-gray-600">Maintainable and scalable code</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ After-Sales Support</h4>
            <p className="text-sm text-gray-600">Ongoing assistance after launch</p>
          </div>
        </div>

        <h2>Featured Project: World Media NCR</h2>
        <p>Devashish Tyagi developed the complete World Media NCR website – a comprehensive advertising agency platform featuring:</p>
        <ul>
          <li>50+ SEO-optimized service and location pages</li>
          <li>Dynamic routing with Next.js App Router</li>
          <li>Advanced schema markup and metadata</li>
          <li>Portfolio gallery with optimized images</li>
          <li>Blog section with 5+ articles</li>
          <li>Contact forms with API integration</li>
          <li>Excellent Core Web Vitals scores</li>
        </ul>

        <h2>Technologies I Work With</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Frontend</h4>
            <p className="text-sm text-gray-600">Next.js, React, TypeScript, Tailwind CSS, HTML5, CSS3</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Backend</h4>
            <p className="text-sm text-gray-600">Node.js, Express, Next.js API Routes</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Database</h4>
            <p className="text-sm text-gray-600">MongoDB, PostgreSQL, Prisma</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Tools & DevOps</h4>
            <p className="text-sm text-gray-600">Git, Vercel, GitHub, VS Code</p>
          </div>
        </div>

        <h2>Types of Websites I Build</h2>
        <ul>
          <li>Business and Corporate Websites</li>
          <li>Portfolio and Personal Websites</li>
          <li>E-commerce and Online Stores</li>
          <li>Educational and Institutional Websites</li>
          <li>Healthcare and Medical Websites</li>
          <li>Real Estate and Property Websites</li>
          <li>Restaurant and Hospitality Websites</li>
          <li>Blog and Content Platforms</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Looking for a Web Developer?</h3>
          <p className="mb-4">Contact Devashish Tyagi for professional web development services. Available for projects worldwide.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Hire Me</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>

        <h3>Frequently Asked Questions</h3>
        
        <h4>What is your experience as a web developer?</h4>
        <p>Devashish Tyagi has extensive experience in modern web development, specializing in Next.js, React, and TypeScript. He has built and optimized multiple websites including World Media NCR, a comprehensive advertising agency platform.</p>

        <h4>Do you build responsive websites?</h4>
        <p>Yes, all websites built by Devashish Tyagi are fully responsive and work perfectly on mobile devices, tablets, and desktop computers.</p>

        <h4>Do you provide SEO optimization?</h4>
        <p>Yes, SEO optimization is a key part of my development process. I implement advanced metadata, schema markup, and performance optimizations to help your website rank well on search engines.</p>

        <h4>What is the process for hiring you?</h4>
        <p>Contact me via the contact page to discuss your project requirements. I'll provide a timeline and quote. Once approved, development begins with regular updates throughout the process.</p>
      </div>
    </main>
  );
}