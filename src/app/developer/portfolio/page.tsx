import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi Portfolio | Web Developer from Sardhana, Meerut',
  description: 'View portfolio of Devashish Tyagi, professional web developer from Sardhana, Meerut. Expertise in Next.js, React, SEO optimization, and modern web technologies.',
  keywords: 'devashish tyagi portfolio, devashish tyagi web developer, web developer portfolio meerut, next.js developer portfolio, react developer sardhana',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/portfolio',
  },
  openGraph: {
    title: 'Devashish Tyagi Portfolio | Web Developer',
    description: 'Professional portfolio of Devashish Tyagi, web developer from Sardhana, Meerut.',
    url: 'https://worldmediancr.com/developer/portfolio',
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

export default function DeveloperPortfolioPage() {
  const projects = [
    {
      name: 'World Media NCR',
      description: 'Complete advertising agency website with SEO optimization, Next.js 14, and responsive design. Implemented advanced SEO strategies for local search.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://worldmediancr.com',
      image: '/images/portfolio/Baghra Bus Stand.webp'
    },
    {
      name: 'Additional Projects',
      description: 'Various web development projects including e-commerce sites, business websites, and custom web applications for clients across India.',
      tech: ['React', 'Node.js', 'MongoDB', 'WordPress'],
      link: '/contact',
      image: '/images/developer/Devashish-Tyagi.webp'
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/developer" className="text-gray-700 hover:text-blue-600">Developer</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Portfolio</li>
        </ol>
      </nav>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
          <Image
            src="/images/developer/Devashish Tyagi.webp"
            alt="Devashish Tyagi - Web Developer from Meerut"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Devashish Tyagi - Portfolio</h1>
          <p className="text-xl text-gray-600 mb-4">Professional Web Developer from Sardhana, Meerut</p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js Expert</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">SEO Specialist</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">React Developer</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">About Devashish Tyagi</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>Devashish Tyagi is a skilled web developer based in Sardhana, Meerut, specializing in modern web technologies and SEO-optimized website development. With expertise in Next.js, React, and TypeScript, he builds fast, responsive, and search-engine-friendly websites that help businesses establish a strong online presence.</p>
          <p className="mt-4">Currently, Devashish Tyagi has developed and optimized <strong>World Media NCR</strong> - a leading advertising agency website, implementing advanced SEO strategies to rank for competitive keywords like "advertising agency in Meerut", "hoarding advertising Meerut", and "digital wall painting Meerut".</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={`${project.name} project by Devashish Tyagi`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{tech}</span>
                  ))}
                </div>
                <Link href={project.link} className="text-blue-600 font-semibold hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { skill: "Next.js 14", level: "Expert" },
            { skill: "React", level: "Expert" },
            { skill: "TypeScript", level: "Advanced" },
            { skill: "Tailwind CSS", level: "Expert" },
            { skill: "SEO Optimization", level: "Expert" },
            { skill: "Node.js", level: "Intermediate" },
            { skill: "MongoDB", level: "Intermediate" },
            { skill: "WordPress", level: "Advanced" },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-lg text-gray-900">{item.skill}</h3>
              <p className="text-sm text-gray-500">{item.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Looking for a Web Developer?</h2>
        <p className="text-xl mb-6">Contact Devashish Tyagi for professional web development services</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/developer/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Contact Devashish
          </Link>
          <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
            Send Message
          </Link>
        </div>
      </section>
    </main>
  );
}