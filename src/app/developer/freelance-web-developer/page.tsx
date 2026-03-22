import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Freelance Web Developer',
  description: 'Hire a freelance web developer - Devashish Tyagi. Affordable, high-quality websites and web applications. Expert in Next.js, React, and SEO. Available for projects worldwide.',
  keywords: 'freelance web developer, hire freelance developer, freelance developer, best freelance web developer, freelance web designer, freelance developer india',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/freelance-web-developer',
  },
  openGraph: {
    title: 'Devashish Tyagi | Freelance Web Developer',
    description: 'Hire a freelance web developer for affordable, high-quality websites and web applications.',
    url: 'https://worldmediancr.com/developer/freelance-web-developer',
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
          <li className="text-gray-500">Freelance Web Developer</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto mb-4">
          <Image
            src="/images/developer/Devashish-Tyagi.webp"
            alt="Devashish Tyagi - Freelance Web Developer"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi</h1>
        <p className="text-xl text-gray-600">Freelance Web Developer</p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a <strong>freelance web developer</strong> offering affordable, high-quality web development services. With expertise in modern technologies and a focus on client satisfaction, he helps businesses establish a strong online presence without the overhead of an agency.</p>

        <h2>Freelance Services</h2>
        <ul>
          <li><strong>Custom Website Development:</strong> Tailored websites built to your specifications</li>
          <li><strong>Next.js & React Development:</strong> Modern, high-performance applications</li>
          <li><strong>Website Redesign:</strong> Modernize your existing website</li>
          <li><strong>SEO Optimization:</strong> Improve your Google rankings</li>
          <li><strong>E-commerce Development:</strong> Online stores with secure payments</li>
          <li><strong>Website Speed Optimization:</strong> Faster loading times</li>
          <li><strong>Responsive Design:</strong> Mobile-friendly websites</li>
          <li><strong>Technical Consulting:</strong> Expert advice for your web projects</li>
        </ul>

        <h2>Why Hire a Freelance Web Developer?</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Cost-Effective</h4>
            <p className="text-sm text-gray-600">Lower rates than agencies, no overhead costs</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Personalized Service</h4>
            <p className="text-sm text-gray-600">Direct communication, one-on-one attention</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Flexible Schedule</h4>
            <p className="text-sm text-gray-600">Work around your timeline and needs</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">✓ Direct Communication</h4>
            <p className="text-sm text-gray-600">No middlemen, clear and fast communication</p>
          </div>
        </div>

        <h2>Pricing Packages</h2>
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
            <p className="text-gray-600">Tailored to your requirements</p>
            <p className="text-blue-600 font-bold mt-2">Custom Quote</p>
          </div>
        </div>

        <h2>Recent Freelance Project: World Media NCR</h2>
        <p>A comprehensive advertising agency website featuring:</p>
        <ul>
          <li>50+ SEO-optimized service and location pages</li>
          <li>Complete responsive design</li>
          <li>Advanced SEO implementation</li>
          <li>Portfolio gallery with optimized images</li>
          <li>Blog system with 5+ articles</li>
          <li>Contact form with API integration</li>
        </ul>

        <h2>Technologies I Use</h2>
        <ul>
          <li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js, Express, Next.js API Routes</li>
          <li><strong>Database:</strong> MongoDB, PostgreSQL, Prisma</li>
          <li><strong>Deployment:</strong> Vercel, AWS, GitHub</li>
        </ul>

        <h2>Client Benefits</h2>
        <ul>
          <li><strong>No Agency Overhead:</strong> Pay only for the work you need</li>
          <li><strong>Direct Communication:</strong> Work directly with the developer</li>
          <li><strong>Fast Turnaround:</strong> Projects delivered on time</li>
          <li><strong>Quality Code:</strong> Clean, maintainable, and scalable code</li>
          <li><strong>SEO Optimized:</strong> Websites that rank on Google</li>
          <li><strong>Ongoing Support:</strong> Help even after project completion</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Looking for a Freelance Web Developer?</h3>
          <p className="mb-4">Contact Devashish Tyagi for affordable, high-quality web development services. Available for projects worldwide.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Hire Me</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>

        <h3>Frequently Asked Questions</h3>
        
        <h4>What is the advantage of hiring a freelance web developer?</h4>
        <p>Hiring a freelance web developer gives you direct access to a skilled professional without paying agency overhead. You get personalized attention, faster communication, and more flexibility in project execution.</p>

        <h4>How do I hire you for my project?</h4>
        <p>Contact me via the contact page to discuss your project. I'll provide a detailed proposal, timeline, and quote. Once approved, I'll begin development with regular updates throughout the process.</p>

        <h4>Do you work with clients outside India?</h4>
        <p>Yes, I work with clients worldwide. All communication can be done remotely via email, video calls, and project management tools.</p>

        <h4>What is your typical turnaround time?</h4>
        <p>Turnaround depends on project scope. Small websites: 2-3 weeks. Medium websites: 4-6 weeks. Large projects: 8-12 weeks. I'll provide a specific timeline based on your requirements.</p>
      </div>
    </main>
  );
}