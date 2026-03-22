import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Full Stack Developer',
  description: 'Full stack developer - Devashish Tyagi. Expert in MERN stack, Next.js, Node.js, and database design. End-to-end web application development services.',
  keywords: 'full stack developer, full stack web developer, mern stack developer, full stack developer portfolio, hire full stack developer, best full stack developer',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/full-stack-developer',
  },
  openGraph: {
    title: 'Devashish Tyagi | Full Stack Developer',
    description: 'Full stack developer specializing in MERN stack, Next.js, and end-to-end web applications.',
    url: 'https://worldmediancr.com/developer/full-stack-developer',
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
          <li className="text-gray-500">Full Stack Developer</li>
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
        <p className="text-xl text-gray-600">Full Stack Developer</p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Devashish Tyagi is a professional <strong>full stack developer</strong> specializing in building complete web applications from database to user interface. With expertise in both frontend and backend technologies, he delivers end-to-end solutions that are scalable, secure, and performant.</p>

        <h2>Full Stack Development Services</h2>
        <ul>
          <li><strong>Complete Web Applications:</strong> End-to-end development from database to UI</li>
          <li><strong>Frontend Development:</strong> Next.js, React, TypeScript, Tailwind CSS</li>
          <li><strong>Backend Development:</strong> Node.js, Express, Python, REST APIs</li>
          <li><strong>Database Design:</strong> MongoDB, PostgreSQL, MySQL, Prisma</li>
          <li><strong>Authentication Systems:</strong> Secure user management and authorization</li>
          <li><strong>API Development:</strong> Well-documented, scalable REST APIs</li>
          <li><strong>Deployment:</strong> Vercel, AWS, Docker, CI/CD pipelines</li>
          <li><strong>Performance Optimization:</strong> Fast, efficient applications</li>
        </ul>

        <h2>Tech Stack</h2>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Frontend</h4>
            <p className="text-sm text-gray-600">Next.js 14, React 18, TypeScript, Tailwind CSS, Redux</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Backend</h4>
            <p className="text-sm text-gray-600">Node.js, Express, Next.js API Routes, Python</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">Database</h4>
            <p className="text-sm text-gray-600">MongoDB, PostgreSQL, MySQL, Prisma, Mongoose</p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-bold">DevOps & Tools</h4>
            <p className="text-sm text-gray-600">Git, Vercel, AWS, Docker, GitHub Actions</p>
          </div>
        </div>

        <h2>Why Hire a Full Stack Developer?</h2>
        <ul>
          <li><strong>End-to-End Expertise:</strong> One developer handles the entire application</li>
          <li><strong>Cost-Effective:</strong> No need to hire separate frontend and backend developers</li>
          <li><strong>Better Coordination:</strong> Seamless integration across the stack</li>
          <li><strong>Faster Development:</strong> Reduced communication overhead</li>
          <li><strong>Consistent Architecture:</strong> Unified approach to development</li>
        </ul>

        <h2>Featured Project: World Media NCR</h2>
        <p>As a full stack developer, Devashish Tyagi built the complete World Media NCR platform:</p>
        <ul>
          <li><strong>Frontend:</strong> Next.js 14 with TypeScript and Tailwind CSS</li>
          <li><strong>Backend:</strong> Next.js API routes for contact forms and dynamic content</li>
          <li><strong>Database:</strong> Optimized data structures for content management</li>
          <li><strong>SEO:</strong> Advanced metadata, schema markup, and sitemap generation</li>
          <li><strong>Performance:</strong> Optimized images, server-side rendering, static generation</li>
          <li><strong>Analytics:</strong> Google Analytics and Vercel Analytics integration</li>
        </ul>

        <h2>Types of Applications I Build</h2>
        <ul>
          <li>Business Websites and Corporate Portals</li>
          <li>E-commerce Platforms</li>
          <li>Content Management Systems</li>
          <li>Admin Dashboards and Backend Systems</li>
          <li>API-driven Applications</li>
          <li>Custom Web Applications</li>
          <li>Real-time Applications</li>
        </ul>

        <h2>Development Process</h2>
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
          <p className="mb-4">Contact Devashish Tyagi for end-to-end web application development services. Available for projects worldwide.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/developer/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700">Contact Me</Link>
            <Link href="/developer/portfolio" className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg text-center hover:bg-blue-50">View Portfolio</Link>
          </div>
        </div>

        <h3>Frequently Asked Questions</h3>
        
        <h4>What is a full stack developer?</h4>
        <p>A full stack developer is proficient in both frontend (user interface) and backend (server, database) development, capable of building complete web applications independently.</p>

        <h4>What technologies do you specialize in?</h4>
        <p>I specialize in the MERN/Next.js stack: Next.js/React for frontend, Node.js/Express for backend, and MongoDB/PostgreSQL for databases, all with TypeScript for type safety.</p>

        <h4>Do you handle deployment and hosting?</h4>
        <p>Yes, I handle complete deployment including setup on platforms like Vercel, AWS, or your preferred hosting provider. I also set up CI/CD pipelines for automated deployments.</p>

        <h4>Do you provide maintenance after launch?</h4>
        <p>Yes, I offer ongoing maintenance and support packages to ensure your application continues to run smoothly with updates and improvements as needed.</p>
      </div>
    </main>
  );
}