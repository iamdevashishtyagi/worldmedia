import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Professional Software Developer',
  description: 'Professional software developer - Devashish Tyagi. Expert in full-stack development, web applications, and modern technologies. Hire a skilled software developer for your project.',
  keywords: 'software developer, professional software developer, software engineer, full stack developer, software developer portfolio, hire software developer, best software developer',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/software-developer',
  },
  openGraph: {
    title: 'Devashish Tyagi | Professional Software Developer',
    description: 'Professional software developer specializing in full-stack web applications and modern technologies.',
    url: 'https://worldmediancr.com/developer/software-developer',
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
          <li className="text-gray-500">Software Developer</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto md:mx-0">
          <Image
            src="/images/developer/devashishtyagi.webp"
            alt="Devashish Tyagi - Professional Software Developer"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi</h1>
          <p className="text-xl text-gray-600">Professional Software Developer</p>
          <p className="text-gray-500 mt-2">Based in India | Available Worldwide</p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a professional <strong>software developer</strong> specializing in building robust, scalable web applications. With expertise in full-stack development, he creates end-to-end solutions that solve real-world problems.</p>

        <h2>Software Development Services</h2>
        <ul>
          <li><strong>Web Application Development:</strong> Custom web applications using modern frameworks</li>
          <li><strong>Full-Stack Development:</strong> Complete end-to-end application development</li>
          <li><strong>API Development:</strong> RESTful APIs and backend services</li>
          <li><strong>Database Design:</strong> Efficient data models and queries</li>
          <li><strong>Authentication Systems:</strong> Secure user management and authorization</li>
          <li><strong>Third-Party Integrations:</strong> Payment gateways, email services, and more</li>
          <li><strong>Performance Optimization:</strong> Fast, efficient applications</li>
          <li><strong>Technical Consulting:</strong> Expert advice for software projects</li>
        </ul>

        <h2>Technical Expertise</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Frontend</h4>
            <p className="text-sm text-gray-600">Next.js, React, TypeScript, Tailwind CSS</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Backend</h4>
            <p className="text-sm text-gray-600">Node.js, Express, Python, REST APIs</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Database</h4>
            <p className="text-sm text-gray-600">MongoDB, PostgreSQL, MySQL, Prisma</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">DevOps & Tools</h4>
            <p className="text-sm text-gray-600">Git, Vercel, AWS, Docker, CI/CD</p>
          </div>
        </div>

        <h2>Why Hire Devashish Tyagi?</h2>
        <ul>
          <li><strong>Full-Stack Expertise:</strong> Handles both frontend and backend development</li>
          <li><strong>Clean Code:</strong> Maintainable, well-documented code</li>
          <li><strong>Problem Solver:</strong> Focused on solving business problems</li>
          <li><strong>SEO Knowledge:</strong> Builds applications that rank well</li>
          <li><strong>Performance Focus:</strong> Optimizes for speed and user experience</li>
          <li><strong>Communication:</strong> Clear, regular updates throughout development</li>
        </ul>

        <h2>Featured Project: World Media NCR</h2>
        <p>As a software developer, Devashish Tyagi built the complete World Media NCR platform including:</p>
        <ul>
          <li>Full-stack Next.js 14 application with API routes</li>
          <li>Dynamic routing for 50+ service and location pages</li>
          <li>Advanced SEO implementation with metadata and schema markup</li>
          <li>Contact form with email integration</li>
          <li>Optimized database queries for fast page loads</li>
          <li>Automated sitemap generation</li>
          <li>Analytics integration for performance tracking</li>
        </ul>

        <h2>Industries I Serve</h2>
        <ul>
          <li>Advertising and Marketing</li>
          <li>Real Estate and Construction</li>
          <li>Educational Institutions</li>
          <li>Healthcare and Medical</li>
          <li>E-commerce and Retail</li>
          <li>Technology and Startups</li>
          <li>Non-profit and NGOs</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Need a Software Developer?</h3>
          <p className="mb-4">Contact Devashish Tyagi for professional software development services. Available for projects worldwide.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Contact Me</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>

        <h3>Frequently Asked Questions</h3>
        
        <h4>What types of software applications do you develop?</h4>
        <p>I develop web applications, full-stack applications, custom business software, e-commerce platforms, and API-driven applications. I specialize in modern JavaScript/TypeScript stack.</p>

        <h4>Do you handle both frontend and backend development?</h4>
        <p>Yes, I am a full-stack developer and handle all aspects of web application development from database design to frontend user interface.</p>

        <h4>What is your development process?</h4>
        <p>I follow an agile process: requirements gathering, design and architecture, development with regular updates, testing, deployment, and post-launch support.</p>

        <h4>Do you provide maintenance after launch?</h4>
        <p>Yes, I offer ongoing maintenance and support packages to ensure your software continues to run smoothly after launch.</p>
      </div>
    </main>
  );
}