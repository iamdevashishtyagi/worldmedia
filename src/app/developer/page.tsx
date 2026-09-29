import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Layout,
  Server,
  TrendingUp,
  ShieldCheck,
  Layers,
  SearchCheck,
  Terminal,
  Database,
  Palette,
  Boxes,
  Sparkles,
  Target,
  Award,
  Smartphone,
  MapPin,
  CheckCircle2,
  Rocket,
  Cpu,
  Atom,
  FileCode2,
  Zap,
  Send,
} from 'lucide-react';
import PhysicsIcons from '@/components/physics/PhysicsIcons';
import { developerPhysicsIcons } from '@/data/heroPhysicsIcons';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Full-Stack Web Architect & Technical SEO Consultant | Meerut',
  description:
    'Devashish Tyagi is a senior full-stack software engineer and technical SEO architect based in Meerut, delivering high-performance Next.js web applications, resilient backend architectures, and top-tier Google search visibility across Delhi NCR.',
  keywords: [
    'Devashish Tyagi',
    'Devashish',
    'Devashish Tyagi Meerut',
    'Devashish Tyagi web developer',
    'Devashish Tyagi developer',
    'Devashish developer',
    'best developer in meerut',
    'best web developer in meerut',
    'best website developer in meerut',
    'top web developer meerut',
    'top developer meerut',
    'freelance web developer meerut',
    'full stack developer meerut',
    'software engineer devashish tyagi',
    'devashish tyagi portfolio',
    'best web developer meerut up',
    'website designer in meerut',
    'seo expert meerut',
    'nextjs developer meerut',
    'react developer meerut',
    'hire web developer meerut',
    'best developer page',
    'lead web architect meerut',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://worldmediancr.com/developer',
  },
  openGraph: {
    title: 'Devashish Tyagi | Full-Stack Web Architect & Software Engineer',
    description:
      'Engineering high-performance Next.js web platforms, resilient backend architectures, and search-optimized digital systems in Meerut & Delhi NCR.',
    url: 'https://worldmediancr.com/developer',
    siteName: 'World Media NCR',
    images: [
      {
        url: 'https://worldmediancr.com/images/developer/Devashish%20Tyagi.webp',
        width: 1200,
        height: 630,
        alt: 'Devashish Tyagi - Full-Stack Web Architect & Software Engineer',
      },
      {
        url: 'https://worldmediancr.com/images/developer/Devashish-Tyagi.webp',
        width: 1200,
        height: 630,
        alt: 'Devashish Tyagi - Technical SEO Architect Meerut',
      },
      {
        url: 'https://worldmediancr.com/images/developer/devashishtyagi.webp',
        width: 1200,
        height: 630,
        alt: 'Devashish Tyagi - Full Stack Software Engineer Meerut',
      },
    ],
    locale: 'en_IN',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devashish Tyagi | Full-Stack Web Architect & Technical SEO Consultant',
    description:
      'Engineering ultra-fast Next.js web platforms and scalable digital systems in Meerut & Delhi NCR.',
    images: ['https://worldmediancr.com/images/developer/Devashish%20Tyagi.webp'],
  },
  authors: [{ name: 'Devashish Tyagi' }],
  creator: 'Devashish Tyagi',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': ['Person', 'ProfessionalService'],
  '@id': 'https://worldmediancr.com/developer#person',
  name: 'Devashish Tyagi',
  alternateName: [
    'Devashish',
    'Devashish Tyagi',
    'Devashish Tyagi Meerut',
    'Devashish Developer',
    'Devashish Tyagi Web Developer',
    'Best Web Developer in Meerut',
    'Best Developer Meerut',
    'Top Developer in Meerut',
  ],
  jobTitle: 'Lead Full-Stack Web Architect & Technical SEO Consultant',
  description:
    'Devashish Tyagi is a senior full-stack software engineer and technical SEO architect based in Meerut, Uttar Pradesh, specializing in Next.js, React, Node.js, distributed architectures, and organic search discoverability.',
  url: 'https://worldmediancr.com/developer',
  image: [
    'https://worldmediancr.com/images/developer/Devashish%20Tyagi.webp',
    'https://worldmediancr.com/images/developer/Devashish-Tyagi.webp',
    'https://worldmediancr.com/images/developer/devashishtyagi.webp',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'World Media NCR',
    url: 'https://worldmediancr.com',
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full Stack Web Developer & Software Engineer',
    occupationLocation: {
      '@type': 'City',
      name: 'Meerut',
    },
  },
  email: 'iamdevashishtyagi@gmail.com',
  telephone: '+91-9557423119',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Meerut',
    addressRegion: 'Uttar Pradesh',
    postalCode: '250001',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://iamdevashishtyagi.vercel.app',
    'https://github.com/iamdevashishtyagi',
    'https://linkedin.com/in/iamdevashishtyagi',
  ],
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Full Stack Web Development',
    'Search Engine Optimization (SEO)',
    'Core Web Vitals',
    'Website Design Meerut',
    'Web Architecture',
    'E-Commerce Development',
  ],
  areaServed: [
    { '@type': 'City', name: 'Meerut' },
    { '@type': 'State', name: 'Delhi NCR' },
    { '@type': 'State', name: 'Uttar Pradesh' },
    { '@type': 'Country', name: 'India' },
  ],
  priceRange: '₹₹ - ₹₹₹',
};

// ImageObject schemas specifically for Google Images indexing
const imageSchemas = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Devashish Tyagi - Photos and Work',
  itemListElement: [
    {
      '@type': 'ImageObject',
      '@id': 'https://worldmediancr.com/images/developer/Devashish-Tyagi.webp#image',
      position: 1,
      name: 'Devashish Tyagi - Best Web Developer in Meerut',
      url: 'https://worldmediancr.com/images/developer/Devashish-Tyagi.webp',
      contentUrl: 'https://worldmediancr.com/images/developer/Devashish-Tyagi.webp',
      caption: 'Devashish Tyagi - Best Web Developer and SEO Architect in Meerut Uttar Pradesh',
      description: 'Portrait photo of Devashish Tyagi, leading full-stack web developer and SEO engineer in Meerut and Delhi NCR.',
      author: {
        '@type': 'Person',
        name: 'Devashish Tyagi',
      },
      representativeOfPage: true,
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://worldmediancr.com/images/developer/devashishtyagi.webp#image',
      position: 2,
      name: 'Devashish Tyagi - Software Engineer & Web Architect',
      url: 'https://worldmediancr.com/images/developer/devashishtyagi.webp',
      contentUrl: 'https://worldmediancr.com/images/developer/devashishtyagi.webp',
      caption: 'Devashish Tyagi developing high-performance web applications and enterprise platforms',
      description: 'Devashish Tyagi working on World Media NCR production architecture, full stack engineering, and SEO optimization in Meerut.',
      author: {
        '@type': 'Person',
        name: 'Devashish Tyagi',
      },
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://worldmediancr.com/images/developer/Devashish%20Tyagi.webp#image',
      position: 3,
      name: 'Devashish Tyagi Profile Portrait',
      url: 'https://worldmediancr.com/images/developer/Devashish%20Tyagi.webp',
      contentUrl: 'https://worldmediancr.com/images/developer/Devashish%20Tyagi.webp',
      caption: 'Devashish Tyagi - Full Stack Developer & SEO Consultant in Meerut',
      description: 'Profile avatar of Devashish Tyagi, top web developer in Meerut.',
      author: {
        '@type': 'Person',
        name: 'Devashish Tyagi',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://worldmediancr.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Devashish Tyagi - Full-Stack Web Architect',
      item: 'https://worldmediancr.com/developer',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Devashish Tyagi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Devashish Tyagi is a senior full-stack software engineer and technical SEO architect based in Meerut, Uttar Pradesh, India. He engineers high-performance Next.js, React, Node.js, and TypeScript web platforms designed for speed, resilience, and top Google rankings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sets Devashish Tyagi web engineering apart in Meerut & Delhi NCR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Devashish combines full-stack systems engineering with rigorous technical SEO architecture. Rather than relying on generic templates, every platform is custom-built with Next.js 15, strict TypeScript, modular REST APIs, and automated JSON-LD schemas—consistently achieving 95+ PageSpeed scores and sustainable organic search rankings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What web engineering and development services does Devashish Tyagi provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Devashish Tyagi provides custom enterprise web applications (Next.js, React), scalable backend APIs (Node.js, Express, databases), technical SEO architecture, Core Web Vitals optimization, and end-to-end digital engineering.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can teams or clients consult or hire Devashish Tyagi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach Devashish Tyagi directly via WhatsApp at +91 95574 23119 or email at iamdevashishtyagi@gmail.com for engineering consultations, freelance builds, or enterprise contracts.',
      },
    },
  ],
};

const developerFaqs = [
  {
    question: 'Who is Devashish Tyagi?',
    answer:
      'Devashish Tyagi is a senior full-stack software engineer and technical SEO architect based in Meerut, Uttar Pradesh, India. He specializes in designing and building scalable Next.js, React, Node.js, and TypeScript web platforms with performance-first architectures and enterprise search discoverability.',
  },
  {
    question: 'What sets Devashish Tyagi\'s web engineering apart in Meerut & Delhi NCR?',
    answer:
      'Devashish combines enterprise software engineering standards with deep technical SEO architecture. Rather than using generic templates, every digital platform is custom-built with Next.js 15, strict TypeScript, modular APIs, and automated structured data schemas—consistently achieving 95+ PageSpeed scores, zero layout shifts, and top organic search discoverability.',
  },
  {
    question: 'What development services does Devashish Tyagi offer?',
    answer:
      'Services include custom enterprise web applications, high-converting digital platforms, eCommerce architectures, RESTful API development, Core Web Vitals optimization, Google Search Console indexing, and end-to-end technical SEO engineering.',
  },
  {
    question: 'How can I discuss a technical project with Devashish Tyagi?',
    answer:
      'You can reach out directly via WhatsApp at +91 95574 23119 or email at iamdevashishtyagi@gmail.com to discuss architecture blueprints, timelines, and tailored web engineering packages.',
  },
];

const technicalStack = [
  { category: 'Frontend Frameworks', skills: ['Next.js 15/14', 'React 19/18', 'Vue.js 3', 'Nuxt.js'], icon: Layout },
  { category: 'Backend & APIs', skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'], icon: Server },
  { category: 'Styling & UI', skills: ['Tailwind CSS', 'Framer Motion', 'Vanilla CSS', 'Material UI'], icon: Palette },
  { category: 'SEO & Performance', skills: ['Core Web Vitals', 'Schema Markup (JSON-LD)', 'Meta Strategy', 'Local SEO', 'Lighthouse 100/100'], icon: TrendingUp },
  { category: 'Database & ORM', skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma', 'Mongoose'], icon: Database },
  { category: 'Tools & DevOps', skills: ['Git / GitHub', 'Vercel', 'Netlify', 'Docker', 'VS Code', 'Figma'], icon: Terminal },
];

const philosophy = [
  { quote: 'Architecture determines longevity. Systems should be modular, clean, and strictly typed.', icon: Boxes },
  { quote: 'Performance is a core product feature. Sub-second responsiveness directly drives engagement and conversions.', icon: Zap },
  { quote: 'Technical SEO is engineered at the root—semantic HTML, automated schema graphs, and zero layout shift.', icon: SearchCheck },
];

const expertiseTags = [
  'Full-Stack Web Architecture',
  'Next.js 15 & React',
  'TypeScript Engineering',
  'Node.js & Microservices',
  'Technical SEO & Core Web Vitals',
  'Distributed Databases',
  'High-Performance UI/UX',
  'Cloud Infrastructure',
];

export default function DeveloperPage() {
  return (
    <div className="bg-white">
      {/* Rich Structured Data for Google Knowledge Graph, Google Images & Featured Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section - Matching Hero-Clean Viewport Exact Sizing */}
      <section className="hero-clean lg:h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-4rem)] lg:max-h-[calc(100dvh-4rem)] flex flex-col justify-center relative overflow-hidden box-border">
        {/* Light Elegant Developer Tech Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EDF5FD] via-[#F8FAFC] to-[#EDF5FD]">
          {/* Subtle Clean Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          ></div>
          {/* Soft Ambient Light Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-300/20 rounded-full filter blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-300/15 rounded-full filter blur-[100px] pointer-events-none"></div>
          <div className="absolute top-10 right-1/3 w-80 h-80 bg-emerald-300/15 rounded-full filter blur-[120px] pointer-events-none"></div>
        </div>

        {/* Big Interactive Developer Physics Icons (Pure Icons) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <PhysicsIcons
            items={developerPhysicsIcons}
            gravity={0.88}
            bounce={0.72}
            friction={0.06}
            frictionAir={0.014}
            throwPower={1.25}
            className="w-full h-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 lg:pt-0 lg:pb-4 z-10 pointer-events-none w-full lg:-mt-6 xl:-mt-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="pointer-events-auto">
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 mb-3 border border-[#D8EAFD] shadow-2xs">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm text-slate-800 font-semibold tracking-tight">Full-Stack Web Architect &amp; Technical Systems Engineer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] mb-2 leading-tight tracking-tight">
                Devashish
                <span className="text-[#CA8A04]"> Tyagi</span>
              </h1>

              <h2 className="text-base sm:text-lg md:text-xl text-slate-700 font-bold mb-2.5 tracking-tight">
                Full-Stack Software Engineer &amp; Technical SEO Architect
              </h2>

              <p className="text-slate-600 mb-3.5 flex items-center gap-1.5 text-xs sm:text-sm font-medium">
                <MapPin className="w-4 h-4 text-yellow-600 shrink-0" />
                <span>Meerut • Delhi NCR • Uttar Pradesh, India</span>
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {expertiseTags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 sm:px-3 sm:py-1 bg-white/95 rounded-full text-xs font-semibold text-slate-700 border border-[#D8EAFD] shadow-2xs hover:border-[var(--yellow)] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 max-w-lg">
                Engineering high-performance web applications, scalable backend systems, and search-optimized digital platforms. Transforming complex requirements into fast, resilient digital products engineered for long-term growth.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0F172A] px-7 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <span>Explore Architecture</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <Link
                  href="/contact?service=Website%20Development"
                  className="bg-white border-2 border-slate-300 hover:border-slate-800 text-slate-800 px-7 py-3 rounded-full font-semibold transition-all shadow-2xs"
                >
                  Discuss a Project
                </Link>
              </div>
            </div>

            {/* Profile Image Container */}
            <div className="relative flex justify-center pointer-events-auto">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-yellow-400/20 to-blue-400/30 blur-2xl opacity-70 animate-pulse"></div>
                <figure
                  itemScope
                  itemType="https://schema.org/ImageObject"
                  className="relative w-68 h-68 sm:w-80 sm:h-80 md:w-92 md:h-92 lg:w-[395px] lg:h-[395px] xl:w-[415px] xl:h-[415px] rounded-full overflow-hidden border-4 border-white shadow-2xl"
                >
                  <Image
                    src="/images/developer/Devashish Tyagi.webp"
                    alt="Devashish Tyagi - Full-Stack Web Architect & Technical SEO Consultant in Meerut"
                    title="Devashish Tyagi - Full-Stack Software Engineer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 272px, (max-width: 1024px) 380px, 415px"
                    itemProp="contentUrl"
                  />
                  <figcaption className="sr-only">
                    Devashish Tyagi - Full-Stack Web Architect &amp; Software Systems Engineer in Meerut Uttar Pradesh
                  </figcaption>
                </figure>
                <div className="absolute bottom-6 right-6 sm:bottom-7 sm:right-7 lg:bottom-8 lg:right-8 bg-emerald-500 rounded-full p-2 sm:p-2.5 border-4 border-white shadow-lg">
                  <div className="w-2.5 h-2.5 bg-emerald-200 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A173E] mb-6">
              Engineering High-Performance Web Platforms &amp; Scalable Systems
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                I&apos;m <strong className="text-gray-900">Devashish Tyagi</strong>, a full-stack software engineer and technical web architect based in Meerut, Uttar Pradesh. I design and build mission-critical web applications that balance robust system architecture, clean modular code, and high search engine discoverability.
              </p>
              <p className="leading-relaxed">
                Serving enterprises, fast-growing brands, and organizations across Meerut, Delhi NCR, and globally, my approach integrates modern frontend technologies like Next.js 15 and React with scalable Node.js backend services and rigorous technical SEO protocols.
              </p>
              <p className="leading-relaxed">
                The entire <strong>World Media NCR</strong> outdoor media ecosystem you are exploring is engineered from the ground up by me—featuring static site generation, sub-second TTFB, rich schema graph data, and zero layout shift across every viewport.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {philosophy.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3.5 bg-[#F0F8FF]/70 rounded-xl border border-[#D8EAFD]">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#D8EAFD] flex items-center justify-center text-[#0A173E] shrink-0 mt-0.5 shadow-2xs">
                      <Icon className="w-4 h-4 text-[#0A173E]" strokeWidth={2} />
                    </div>
                    <p className="text-[#0A173E] font-medium italic text-sm leading-relaxed">{item.quote}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <figure
              itemScope
              itemType="https://schema.org/ImageObject"
              className="relative max-w-sm mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
            >
              <Image
                src="/images/developer/Devashish-Tyagi.webp"
                alt="Devashish Tyagi - Full-Stack Web Architect and Technical SEO Consultant in Meerut Uttar Pradesh"
                title="Devashish Tyagi - Software Engineer & Systems Architect"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                itemProp="contentUrl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              <figcaption className="sr-only">
                Devashish Tyagi - Full Stack Web Architect and Technical SEO Consultant in Meerut
              </figcaption>
            </figure>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Technical Stack Section */}
      <div className="bg-gray-50 py-24 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#F0F8FF] border border-[#D8EAFD] rounded-full text-[#0A173E] text-sm font-bold mb-4">
              Technical Arsenal
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A173E] mb-4">
              Full Stack Mastery &amp; Modern Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern tech stack engineered for sub-second speeds, flawless responsiveness, and search engine domination.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {technicalStack.map((stack, i) => {
              const Icon = stack.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-[#D8EAFD] hover:shadow-xl hover:border-[#0A173E] transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F0F8FF] border border-[#D8EAFD] flex items-center justify-center text-[#0A173E] group-hover:bg-[#0A173E] group-hover:text-[var(--yellow)] group-hover:border-[#0A173E] transition-colors mb-4">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A173E] mb-3">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-[#F0F8FF] border border-[#D8EAFD] rounded-lg text-xs font-semibold text-[#0A173E]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Work Section */}
      <div id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#F0F8FF] border border-[#D8EAFD] rounded-full text-[#0A173E] text-sm font-bold mb-4">
            Featured Production Project
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A173E] mb-4">
            World Media NCR Web Architecture
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete digital engineering and enterprise SEO implementation for Western UP&apos;s premier outdoor media company.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <figure
              itemScope
              itemType="https://schema.org/ImageObject"
              className="relative max-w-sm mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
            >
              <Image
                src="/images/developer/devashishtyagi.webp"
                alt="Devashish Tyagi - Full Stack Web Developer Engineering World Media NCR Website"
                title="Devashish Tyagi - Full Stack Web Developer &amp; Software Engineer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                itemProp="contentUrl"
              />
              <figcaption className="sr-only">
                Devashish Tyagi - Lead Full Stack Engineer and Web Architect of World Media NCR
              </figcaption>
            </figure>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-[#F0F8FF]/80 rounded-2xl p-8 border border-[#D8EAFD]">
              <h3 className="text-2xl font-extrabold text-[#0A173E] mb-4">What I Engineered</h3>
              <ul className="space-y-3.5 mb-6">
                {[
                  { text: '98+ Google Lighthouse Performance Score', icon: Award },
                  { text: 'Comprehensive Schema Markup (Organization, Service, LocalBusiness, Breadcrumb)', icon: TrendingUp },
                  { text: 'Next.js App Router Architecture with SSG Static Generation', icon: Zap },
                  { text: 'Strategic SEO targeting for Meerut, NCR, and Western UP keyword queries', icon: Target },
                  { text: 'Mobile-first, fully responsive design with zero layout shift', icon: Smartphone },
                  { text: 'Automated XML Sitemap generation & Search Console integration', icon: SearchCheck },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-7 h-7 rounded-lg bg-white border border-[#D8EAFD] flex items-center justify-center text-[#0A173E] shrink-0 shadow-2xs">
                        <Icon className="w-4 h-4 text-[#0A173E]" strokeWidth={2} />
                      </div>
                      <span className="text-sm sm:text-base text-slate-700">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="pt-4 border-t border-[#D8EAFD]">
                <p className="text-sm text-slate-600">
                  <span className="font-bold text-[#0A173E]">Tech Stack:</span> Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Vercel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-24 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#F0F8FF] border border-[#D8EAFD] rounded-full text-[#0A173E] text-sm font-bold mb-4">
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A173E] mb-4">
              Website Development &amp; SEO Services in Meerut
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end web engineering solutions tailored for startups, retail brands, and enterprise clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Full Stack Development',
                desc: 'End-to-end web applications built with Next.js, React, Node.js, and Express for maximum scalability and speed.',
                icon: Layers,
              },
              {
                title: 'Frontend Excellence',
                desc: 'Clean, pixel-perfect, and modern UI/UX with React and Tailwind CSS that captivates users across all device viewports.',
                icon: Layout,
              },
              {
                title: 'Backend & REST APIs',
                desc: 'Robust, secure backend APIs and microservices with Node.js, Express, MongoDB, and relational databases.',
                icon: Server,
              },
              {
                title: 'Enterprise Technical SEO',
                desc: 'Schema.org JSON-LD markup, internal linking, Core Web Vitals optimization, and keyword architecture for top Google rankings.',
                icon: TrendingUp,
              },
              {
                title: 'Speed & PageSpeed Tuning',
                desc: 'Sub-second load times, image compression, script optimization, and guaranteed 90+ mobile Lighthouse scores.',
                icon: Zap,
              },
              {
                title: 'Maintenance & Support',
                desc: 'Continuous monitoring, security updates, feature additions, and ongoing technical support for your digital assets.',
                icon: ShieldCheck,
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-[#D8EAFD] hover:shadow-xl hover:border-[#0A173E] transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F0F8FF] border border-[#D8EAFD] flex items-center justify-center text-[#0A173E] mb-6 group-hover:bg-[#0A173E] group-hover:text-[var(--yellow)] group-hover:border-[#0A173E] transition-all duration-300 shadow-2xs">
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A173E] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
                  <div className="mt-6 w-12 h-1 bg-[#D8EAFD] rounded-full group-hover:w-full group-hover:bg-[var(--yellow)] transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Quick Links to Web Development Service Pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#0A173E] to-[#0D1C4D] rounded-3xl p-8 md:p-12 border border-[#182859]">
          <div className="text-center mb-8">
            <p className="text-[var(--yellow)] font-bold text-xs uppercase tracking-widest mb-2">Web Development Services</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Explore My Development Services</h2>
            <p className="text-slate-400 text-sm mt-2">Click to view detailed pages with pricing, process & FAQs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Business Website', href: '/services/development/business-website-development', desc: 'SEO-optimized, fast-loading business sites', badge: 'Popular' },
              { name: 'Portfolio Website', href: '/services/development/portfolio-website-development', desc: 'Stunning portfolios that win clients' },
              { name: 'E-Commerce Store', href: '/services/development/ecommerce-website-development', desc: 'Full-featured online stores with payments', badge: 'High Demand' },
              { name: 'Web Software / ERP', href: '/services/development/web-software-development', desc: 'Custom management systems & web apps' },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group relative bg-white/10 hover:bg-white/20 border border-white/15 hover:border-[var(--yellow)]/50 rounded-2xl p-5 transition-all duration-200 flex flex-col"
              >
                {svc.badge && (
                  <span className="absolute top-3 right-3 text-[9px] font-extrabold bg-[var(--yellow)] text-[#0A173E] px-2 py-0.5 rounded-full">{svc.badge}</span>
                )}
                <h3 className="text-white font-extrabold text-sm mb-1.5">{svc.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-grow">{svc.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-[var(--yellow)] text-xs font-bold">
                  View Details <Rocket className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Me Section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A173E] mb-4">
            Engineering Principles &amp; Technical Standards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining software engineering precision with deep technical SEO for scalable, resilient digital infrastructure.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Full Stack Architecture', desc: 'End-to-end engineering from data models to UI', icon: Rocket },
            { title: 'Technical SEO by Design', desc: 'Structured data graphs, semantic tags & Core Web Vitals', icon: Target },
            { title: 'Sub-Second Performance', desc: 'Edge caching and optimized asset delivery', icon: Zap },
            { title: 'Modern Production Stack', desc: 'Next.js 15, TypeScript, Node.js & modern CSS', icon: Boxes },
            { title: 'Clean Modular Code', desc: 'Scalable architecture with strict typing and maintainability', icon: Sparkles },
            { title: 'Regional & Global Delivery', desc: 'Based in Meerut, delivering solutions worldwide', icon: MapPin },
            { title: 'Quality & Test Rigor', desc: 'Thorough validation across browsers and viewports', icon: CheckCircle2 },
            { title: 'Post-Deployment Care', desc: 'Proactive monitoring, security & performance tuning', icon: ShieldCheck },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#D8EAFD] hover:border-[#0A173E] hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-3.5 rounded-xl bg-[#F0F8FF] border border-[#D8EAFD] flex items-center justify-center text-[#0A173E] group-hover:bg-[#0A173E] group-hover:text-[var(--yellow)] transition-colors">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-[#0A173E] mb-1.5 text-base">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Frequently Asked Questions Section (Great for Google Ranking & Featured Snippets) */}
      <div className="bg-[#F0F8FF] py-24 border-t border-b border-[#D8EAFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1 bg-white border border-[#D8EAFD] rounded-full text-[#0A173E] text-xs font-bold mb-3 shadow-2xs">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-4">
              Web Development in Meerut: FAQs
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              Clear answers regarding engineering background, modern tech stacks, and how Devashish Tyagi builds search-dominant web platforms.
            </p>
          </div>

          <div className="space-y-6">
            {developerFaqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl border border-[#D8EAFD] shadow-xs"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#0A173E] mb-2.5">
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Icons Row */}
      <div className="bg-[#F0F8FF]/80 py-12 border-t border-b border-[#D8EAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[#0A173E] font-bold text-xs uppercase tracking-widest">
              Core Technologies &amp; Languages
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 items-center">
            {[
              { name: 'Next.js', icon: Layers },
              { name: 'React', icon: Atom },
              { name: 'TypeScript', icon: FileCode2 },
              { name: 'Node.js', icon: Server },
              { name: 'Express', icon: Cpu },
              { name: 'Tailwind CSS', icon: Palette },
              { name: 'MongoDB', icon: Database },
              { name: 'SEO Architect', icon: SearchCheck },
            ].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="group flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#D8EAFD] shadow-2xs flex items-center justify-center text-[#0A173E] group-hover:bg-[#0A173E] group-hover:text-[var(--yellow)] group-hover:border-[#0A173E] transition-all duration-200 mb-2">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-bold text-[#0A173E]">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build Something <span className="underline decoration-[var(--yellow)]">Extraordinary</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Collaborate with Devashish Tyagi — full-stack web architect &amp; technical SEO engineer. Let&apos;s engineer a high-performance digital platform that scales and ranks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact?service=Website%20Development"
              className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-10 py-4 rounded-full font-extrabold text-lg transition shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Project Inquiry</span>
            </Link>
            <a
              href="https://wa.me/919557423119?text=Hi%20Devashish%2C%20I'm%20interested%20in%20discussing%20a%20web%20development%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-extrabold text-lg transition shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.013.592 3.89 1.614 5.488L2.046 21.57c-.09.27.162.522.432.432l4.082-1.568C8.11 21.408 9.995 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.83 0-3.52-.563-4.92-1.521l-.352-.222-3.009 1.156 1.156-3.009-.222-.352C4.563 15.52 4 13.83 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="mailto:iamdevashishtyagi@gmail.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Directly
            </a>
          </div>
          <p className="text-white/80 text-sm mt-8 flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-[var(--yellow)] shrink-0" />
            <span>Based in Meerut • Available worldwide for freelance &amp; remote web development</span>
          </p>
        </div>
      </div>
    </div>
  );
}