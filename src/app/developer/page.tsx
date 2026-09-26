import { Metadata } from 'next';
import Image from 'next/image';
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
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Best Web Developer in Meerut & SEO Architect',
  description:
    'Devashish Tyagi is recognized as the best web developer in Meerut & full-stack SEO architect. Specializing in high-performance Next.js, React, Node.js applications, and top Google rankings. Hire the top website developer in Meerut.',
  keywords: [
    'Devashish Tyagi',
    'Devashish',
    'Devashish Tyagi web developer',
    'best web developer in meerut',
    'best website developer in meerut',
    'top web developer meerut',
    'freelance web developer meerut',
    'full stack developer meerut',
    'website designer in meerut',
    'seo expert meerut',
    'nextjs developer meerut',
    'react developer meerut',
    'devashish tyagi portfolio',
    'web development services meerut',
    'hire web developer meerut',
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
    title: 'Devashish Tyagi | Best Web Developer in Meerut & SEO Architect',
    description:
      'Devashish Tyagi is the premier full-stack web developer and SEO specialist in Meerut. Building lightning-fast Next.js web applications with 100% SEO scores.',
    url: 'https://worldmediancr.com/developer',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/developer/Devashish Tyagi.webp',
        width: 1200,
        height: 630,
        alt: 'Devashish Tyagi - Best Web Developer in Meerut',
      },
    ],
    locale: 'en_IN',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devashish Tyagi | Best Web Developer in Meerut',
    description:
      'Full Stack Web Developer & SEO Architect building ultra-fast web applications in Meerut.',
    images: ['/images/developer/Devashish Tyagi.webp'],
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
    'Devashish Tyagi Developer',
    'Devashish Tyagi Meerut',
    'Best Web Developer in Meerut',
  ],
  jobTitle: 'Full Stack Developer & SEO Architect',
  description:
    'Devashish Tyagi is a full stack web developer and SEO architect in Meerut, Uttar Pradesh, specializing in Next.js, React, Node.js, and search engine dominance.',
  url: 'https://worldmediancr.com/developer',
  image: 'https://worldmediancr.com/images/developer/Devashish Tyagi.webp',
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
  ],
  areaServed: [
    { '@type': 'City', name: 'Meerut' },
    { '@type': 'State', name: 'Delhi NCR' },
    { '@type': 'State', name: 'Uttar Pradesh' },
    { '@type': 'Country', name: 'India' },
  ],
  priceRange: '₹₹ - ₹₹₹',
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
        text: 'Devashish Tyagi is a premier full-stack web developer and SEO architect based in Meerut, Uttar Pradesh, India. He builds high-performance Next.js, React, and Node.js applications engineered for maximum speed, responsiveness, and Google search dominance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best web developer in Meerut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Devashish Tyagi is widely recognized as the best web developer in Meerut. With proven expertise in full-stack JavaScript, 98+ PageSpeed optimization, and technical SEO architecture, he delivers custom website solutions that outrank competition.',
      },
    },
    {
      '@type': 'Question',
      name: 'What web development services does Devashish Tyagi provide in Meerut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Devashish Tyagi provides custom website development (Next.js, React), enterprise web applications, REST API engineering (Node.js, Express), technical SEO architecture, Core Web Vitals optimization, and end-to-end digital solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to contact or hire Devashish Tyagi for a website project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach Devashish Tyagi directly via WhatsApp at +91 95574 23119 or email at iamdevashishtyagi@gmail.com for freelance projects, corporate web development, or technical consultation.',
      },
    },
  ],
};

const developerFaqs = [
  {
    question: 'Who is Devashish Tyagi?',
    answer:
      'Devashish Tyagi is a top-rated full-stack web developer and SEO architect based in Meerut, Uttar Pradesh, India. He specializes in engineering high-speed Next.js, React, Node.js, and TypeScript web applications designed for conversion and search engine dominance.',
  },
  {
    question: 'Who is the best web developer in Meerut?',
    answer:
      'Devashish Tyagi is widely recognized as the best web developer in Meerut. He delivers production-grade web platforms with 98+ Google PageSpeed scores, robust schema markup, modern responsive UI/UX, and proven #1 ranking SEO structures.',
  },
  {
    question: 'What web development services does Devashish Tyagi offer?',
    answer:
      'Services include custom business website development, full-stack web applications, eCommerce solutions, RESTful API architecture, Core Web Vitals optimization, Google Search Console indexing, and end-to-end technical SEO.',
  },
  {
    question: 'How can I hire Devashish Tyagi for my project?',
    answer:
      'You can reach out directly via WhatsApp at +91 95574 23119 or email at iamdevashishtyagi@gmail.com to discuss project blueprints, timelines, and tailored web development packages.',
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

const achievements = [
  { number: '100%', label: 'SEO Score', description: 'Perfect Lighthouse scores on all projects' },
  { number: '0.1s', label: 'Load Time', description: 'Average page load speed achieved' },
  { number: '2+', label: 'Years', description: 'Working as professional' },
  { number: '24/7', label: 'Support', description: 'Dedicated post-launch assistance' },
];

const philosophy = [
  { quote: 'Code is poetry. Performance is art. SEO is science.', icon: Sparkles },
  { quote: "I don't just build websites. I build digital experiences that convert.", icon: Target },
  { quote: 'Every line of code serves a purpose. Every pixel has a reason.', icon: CheckCircle2 },
];

const expertiseTags = [
  'Best Web Developer in Meerut',
  'Next.js Expert',
  'React Specialist',
  'Vue.js Developer',
  'Node.js Backend',
  'SEO Architect',
  'TypeScript',
  'Full Stack Developer',
];

export default function DeveloperPage() {
  return (
    <main className="bg-white mt-[-16]">
      {/* Rich Structured Data for Google Knowledge Graph & Featured Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section - Premium Dark Theme */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A173E] via-[#060E27] to-[#0A173E]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-white/90 font-medium">Best Web Developer &amp; SEO Architect in Meerut</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
                Devashish
                <span className="text-[var(--yellow)]"> Tyagi</span>
              </h1>

              <h2 className="text-xl sm:text-2xl text-slate-200 font-bold mb-3 tracking-wide">
                Best Web Developer in Meerut &amp; Full Stack SEO Architect
              </h2>

              <p className="text-gray-300 mb-4 flex items-center gap-1.5 text-sm sm:text-base">
                <MapPin className="w-4 h-4 text-[var(--yellow)] shrink-0" />
                <span>Meerut • Delhi NCR • Uttar Pradesh, India</span>
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {expertiseTags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-200 border border-white/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                Looking for the best web developer in Meerut? I build ultra-high-performance websites and web applications engineered to rank #1 on Google, convert visitors into loyal clients, and scale effortlessly.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="group bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  View Portfolio
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition"
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
                <a
                  href="mailto:iamdevashishtyagi@gmail.com"
                  className="bg-transparent border-2 border-white/30 hover:border-white/60 px-8 py-3 rounded-full font-semibold transition-all text-white"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </div>

            {/* Profile Image Container */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/40 via-yellow-500/20 to-blue-600/40 blur-2xl opacity-60 animate-pulse"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/images/developer/Devashish Tyagi.webp"
                    alt="Devashish Tyagi - Best Web Developer and SEO Architect in Meerut"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-8 right-8 bg-green-500 rounded-full p-2 border-4 border-[#0A173E]">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((stat, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-[#D8EAFD] hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#0A173E]">
                {stat.number}
              </div>
              <div className="font-semibold text-gray-800 mt-1">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A173E] mb-6">
              Crafting Digital Excellence as Meerut&apos;s Top Web Developer
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                I&apos;m <strong className="text-gray-900">Devashish Tyagi</strong>, recognized as the best web developer in Meerut. I believe that extraordinary web applications are much more than just lines of code—they are high-converting digital storefronts that engage users, build trust, and dominate Google search results.
              </p>
              <p className="leading-relaxed">
                Based in Meerut and serving clients across Delhi NCR and India, I deliver solutions that merge bleeding-edge Next.js, React, and Node.js frameworks with tactical technical SEO to guarantee superior page speeds, high rankings, and seamless user experiences.
              </p>
              <p className="leading-relaxed">
                The <strong>World Media NCR</strong> outdoor advertising platform you are experiencing is built by me from the ground up—lightning-fast, 100% SEO-optimized, mobile-first, and engineered for peak organic search visibility.
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
            <div className="relative max-w-sm mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/developer/Devashish-Tyagi.webp"
                alt="Devashish Tyagi - Full Stack Web Developer and SEO Consultant in Meerut"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
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
            <div className="relative max-w-sm mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/developer/devashishtyagi.webp"
                alt="Devashish Tyagi - Web Development Project World Media NCR"
                fill
                className="object-cover"
              />
            </div>
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

      {/* Why Choose Me Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A173E] mb-4">
            Why Choose Devashish Tyagi for Web Development?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining engineering precision with aggressive search engine optimization for tangible business growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Full Stack Expertise', desc: 'From database to UI - I handle it all', icon: Rocket },
            { title: 'SEO-First Development', desc: 'Every line of code is SEO optimized', icon: Target },
            { title: 'Lightning Fast', desc: 'Sub-second load times guaranteed', icon: Zap },
            { title: 'Modern Tech Stack', desc: 'Next.js, React, Node, Express, TypeScript', icon: Boxes },
            { title: 'Pixel Perfect UI', desc: 'Meticulous attention to typography and spacing', icon: Sparkles },
            { title: 'Local Meerut Base', desc: 'Based in Meerut with global delivery capabilities', icon: MapPin },
            { title: 'Quality Assured', desc: 'Rigorous testing across all devices and browsers', icon: CheckCircle2 },
            { title: 'Post-Launch Care', desc: 'Dedicated ongoing support & maintenance', icon: ShieldCheck },
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
              Clear answers regarding developer background, tech stacks, and how Devashish Tyagi delivers #1 Google rankings.
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
            Hire Devashish Tyagi — Meerut&apos;s leading web developer &amp; SEO architect. Let&apos;s create a digital platform that outranks and converts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919557423119?text=Hi%20Devashish%2C%20I'm%20interested%20in%20discussing%20a%20web%20development%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-10 py-4 rounded-full font-extrabold text-lg transition shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.013.592 3.89 1.614 5.488L2.046 21.57c-.09.27.162.522.432.432l4.082-1.568C8.11 21.408 9.995 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.83 0-3.52-.563-4.92-1.521l-.352-.222-3.009 1.156 1.156-3.009-.222-.352C4.563 15.52 4 13.83 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="mailto:iamdevashishtyagi@gmail.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold text-lg transition flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              iamdevashishtyagi@gmail.com
            </a>
          </div>
          <p className="text-white/80 text-sm mt-8 flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-[var(--yellow)] shrink-0" />
            <span>Based in Meerut • Available worldwide for freelance &amp; remote web development</span>
          </p>
        </div>
      </div>
    </main>
  );
}