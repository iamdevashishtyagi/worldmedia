import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Full Stack Developer in Meerut | MERN Stack',
  description: 'Full stack developer in Meerut - Devashish Tyagi from Sardhana. Expert in MERN stack, Next.js, Node.js, and database design. End-to-end web application development services.',
  keywords: 'full stack developer meerut, full stack developer sardhana, mern stack developer meerut, devashish tyagi full stack, web application developer meerut, backend developer meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/full-stack-developer-meerut',
  },
  openGraph: {
    title: 'Devashish Tyagi | Full Stack Developer in Meerut',
    description: 'Full stack developer based in Meerut. Expert in MERN stack, Next.js, and end-to-end applications.',
    url: 'https://worldmediancr.com/developer/full-stack-developer-meerut',
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

export default function FullStackDeveloperPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/developer" className="text-gray-700 hover:text-blue-600">Developer</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Full Stack Developer Meerut</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto mb-4">
          <Image
            src="/images/developer/Devashish Tyagi.webp"
            alt="Devashish Tyagi - Full Stack Developer"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi</h1>
        <p className="text-xl text-gray-600">Full Stack Developer in Meerut</p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a professional <strong>full stack developer based in Meerut</strong> (Sardhana), specializing in end-to-end web application development. With expertise in both frontend and backend technologies, he builds complete, scalable web applications from concept to deployment.</p>

        <h2 className="text-gray-900">Full Stack Development Expertise</h2>
        <ul>
          <li><strong>Frontend Development:</strong> Next.js, React, TypeScript, Tailwind CSS</li>
          <li><strong>Backend Development:</strong> Node.js, Express, Python, REST APIs</li>
          <li><strong>Database Management:</strong> MongoDB, PostgreSQL, MySQL, Prisma</li>
          <li><strong>Authentication:</strong> NextAuth.js, JWT, OAuth</li>
          <li><strong>Deployment:</strong> Vercel, AWS, Docker, CI/CD pipelines</li>
          <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
        </ul>

        <h2 className="text-gray-900">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Frontend Stack</h4>
            <p className="text-sm text-gray-600">Next.js 14, React 18, TypeScript, Tailwind CSS, Redux Toolkit</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Backend Stack</h4>
            <p className="text-sm text-gray-600">Node.js, Express, Next.js API Routes, Python</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Database Stack</h4>
            <p className="text-sm text-gray-600">MongoDB, PostgreSQL, Prisma, Mongoose</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">DevOps & Tools</h4>
            <p className="text-sm text-gray-600">Vercel, AWS, Docker, Git, GitHub Actions</p>
          </div>
        </div>

        <h2 className="text-gray-900">Full Stack Services</h2>
        <ul>
          <li><strong>Complete Web Applications:</strong> End-to-end development from database to UI</li>
          <li><strong>REST API Development:</strong> Scalable, well-documented APIs</li>
          <li><strong>Database Design:</strong> Efficient data models and queries</li>
          <li><strong>Authentication Systems:</strong> Secure user login and management</li>
          <li><strong>Admin Panels:</strong> Content management systems</li>
          <li><strong>Third-Party Integrations:</strong> Payment gateways, email services, etc.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Featured Project: World Media NCR</h3>
          <p>As a full stack developer, Devashish Tyagi built the complete World Media NCR platform including:</p>
          <ul className="mt-2">
            <li><strong>Frontend:</strong> Next.js 14 with TypeScript and Tailwind CSS</li>
            <li><strong>Backend:</strong> Next.js API routes for contact forms and dynamic content</li>
            <li><strong>SEO:</strong> Advanced metadata, schema markup, and sitemap generation</li>
            <li><strong>Performance:</strong> Optimized images, server-side rendering, static generation</li>
            <li><strong>Analytics:</strong> Google Analytics and Vercel Analytics integration</li>
          </ul>
        </div>

        <h2 className="text-gray-900">Why Hire a Full Stack Developer?</h2>
        <ul>
          <li><strong>End-to-End Expertise:</strong> One developer handles both frontend and backend</li>
          <li><strong>Cost-Effective:</strong> No need to hire separate frontend and backend developers</li>
          <li><strong>Better Coordination:</strong> Single point of contact for entire project</li>
          <li><strong>Consistent Architecture:</strong> Seamless integration across the stack</li>
          <li><strong>Faster Development:</strong> Reduced communication overhead</li>
        </ul>

        <h2 className="text-gray-900">Types of Applications I Build</h2>
        <ul>
          <li>Business websites and corporate portals</li>
          <li>E-commerce platforms</li>
          <li>Content management systems</li>
          <li>Admin dashboards</li>
          <li>API-driven applications</li>
          <li>Custom web applications</li>
        </ul>

        <h2 className="text-gray-900">Development Process</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4 text-center">
            <span className="text-2xl font-bold text-blue-600">1</span>
            <h4 className="font-bold mt-2">Requirements</h4>
            <p className="text-sm text-gray-600">Understanding your needs and goals</p>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center">
            <span className="text-2xl font-bold text-blue-600">2</span>
            <h4 className="font-bold mt-2">Architecture</h4>
            <p className="text-sm text-gray-600">Designing the system structure</p>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center">
            <span className="text-2xl font-bold text-blue-600">3</span>
            <h4 className="font-bold mt-2">Development</h4>
            <p className="text-sm text-gray-600">Building with regular updates</p>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center">
            <span className="text-2xl font-bold text-blue-600">4</span>
            <h4 className="font-bold mt-2">Deployment</h4>
            <p className="text-sm text-gray-600">Launching and post-launch support</p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Need a Full Stack Developer?</h3>
          <p className="mb-4">Contact Devashish Tyagi for end-to-end web application development services. Available for projects in Meerut, Delhi NCR, and worldwide.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Contact Me</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>

        <h3 className="text-gray-900">Frequently Asked Questions</h3>
        
        <h4 className="text-gray-900">What is a full stack developer?</h4>
        <p>A full stack developer is proficient in both frontend (user interface) and backend (server, database) development, capable of building complete web applications independently.</p>

        <h4 className="text-gray-900">What technologies do you specialize in?</h4>
        <p>I specialize in the MERN/Next.js stack: Next.js/React for frontend, Node.js/Express for backend, and MongoDB/PostgreSQL for databases, all with TypeScript for type safety.</p>

        <h4 className="text-gray-900">Do you handle deployment and hosting?</h4>
        <p>Yes, I handle complete deployment including setup on platforms like Vercel, AWS, or your preferred hosting provider. I also set up CI/CD pipelines for automated deployments.</p>

        <h4 className="text-gray-900">Do you provide maintenance after launch?</h4>
        <p>Yes, I offer ongoing maintenance and support packages to ensure your application continues to run smoothly with updates and improvements as needed.</p>

        <h4 className="text-gray-900">How long does it take to build a full stack application?</h4>
        <p>Timeline depends on project complexity. Small applications: 2-4 weeks. Medium applications: 1-3 months. Large enterprise applications: 3-6 months. I&apos;ll provide a specific timeline based on your requirements.</p>
      </div>
    </main>
  );
}