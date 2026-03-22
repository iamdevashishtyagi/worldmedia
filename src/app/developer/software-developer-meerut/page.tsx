import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Software Developer in Meerut | Web Developer',
  description: 'Professional software developer in Meerut - Devashish Tyagi from Sardhana. Expert in web development, Next.js, React, and full-stack applications. Hire a skilled software developer in Meerut.',
  keywords: 'software developer meerut, software developer sardhana, devashish tyagi software developer, software engineer meerut, software developer near me, best software developer meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/software-developer-meerut',
  },
  openGraph: {
    title: 'Devashish Tyagi | Software Developer in Meerut',
    description: 'Professional software developer based in Meerut. Expert in web development, Next.js, React, and full-stack applications.',
    url: 'https://worldmediancr.com/developer/software-developer-meerut',
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

export default function SoftwareDeveloperPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/developer" className="text-gray-700 hover:text-blue-600">Developer</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Software Developer Meerut</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto md:mx-0">
          <Image
            src="/images/developer/Devashish Tyagi.webp"
            alt="Devashish Tyagi - Software Developer from Meerut"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi</h1>
          <p className="text-xl text-gray-600">Professional Software Developer in Meerut</p>
          <p className="text-gray-500 mt-2">📍 Based in Sardhana, Meerut, Uttar Pradesh</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a professional <strong>software developer based in Meerut</strong>, specializing in web development, full-stack applications, and SEO-optimized digital solutions. With expertise in modern technologies, he helps businesses build robust, scalable, and high-performance software applications.</p>

        <h2 className="text-gray-900">Software Development Services</h2>
        <ul>
          <li><strong>Web Application Development:</strong> Custom web applications using Next.js, React, and Node.js</li>
          <li><strong>Full-Stack Development:</strong> Complete end-to-end application development</li>
          <li><strong>API Development:</strong> RESTful APIs and backend services</li>
          <li><strong>Database Design:</strong> MongoDB, PostgreSQL, and MySQL databases</li>
          <li><strong>SEO Optimization:</strong> Search engine optimized applications</li>
          <li><strong>Performance Optimization:</strong> Speed and Core Web Vitals improvement</li>
        </ul>

        <h2 className="text-gray-900">Technical Expertise</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Frontend</h4>
            <p className="text-sm text-gray-600">Next.js, React, TypeScript, Tailwind CSS, HTML5, CSS3</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Backend</h4>
            <p className="text-sm text-gray-600">Node.js, Express, Python, REST APIs, GraphQL</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Database</h4>
            <p className="text-sm text-gray-600">MongoDB, PostgreSQL, MySQL, Prisma</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">DevOps</h4>
            <p className="text-sm text-gray-600">Git, Vercel, AWS, Docker, CI/CD</p>
          </div>
        </div>

        <h2 className="text-gray-900">Why Hire a Software Developer in Meerut?</h2>
        <ul>
          <li><strong>Local Presence:</strong> Based in Sardhana, Meerut – available for local meetings</li>
          <li><strong>Remote Ready:</strong> Works with clients across India and globally</li>
          <li><strong>Full-Stack Capability:</strong> Handles both frontend and backend development</li>
          <li><strong>SEO Expertise:</strong> Builds applications that rank well on search engines</li>
          <li><strong>Quality Focus:</strong> Clean code, best practices, and thorough testing</li>
          <li><strong>Affordable Rates:</strong> Competitive pricing for high-quality work</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Featured Project: World Media NCR</h3>
          <p>Devashish Tyagi developed the complete World Media NCR website, a full-stack Next.js application featuring:</p>
          <ul className="mt-2">
            <li>Server-side rendering for optimal SEO</li>
            <li>Dynamic routing for 50+ service and location pages</li>
            <li>Advanced schema markup and metadata</li>
            <li>Contact form with API integration</li>
            <li>Optimized performance with excellent Core Web Vitals</li>
          </ul>
        </div>

        <h2 className="text-gray-900">Industries Served</h2>
        <ul>
          <li>Advertising and Marketing Agencies</li>
          <li>Real Estate and Construction</li>
          <li>Educational Institutions</li>
          <li>Healthcare and Medical Services</li>
          <li>E-commerce and Retail</li>
          <li>Political Campaigns and NGOs</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Looking for a Software Developer?</h3>
          <p className="mb-4">Contact Devashish Tyagi for professional software development services in Meerut and across India.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Contact Now</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>
      </div>
    </main>
  );
}