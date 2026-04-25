import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Devashish Tyagi | Premium Web Developer & SEO Architect - Meerut',
  description: 'Devashish Tyagi - Premium web developer from Sardhana, Meerut. Specializing in high-performance Next.js, React, Vue.js, Node.js applications, enterprise-grade SEO, and digital transformation. Available for elite projects.',
  keywords: 'devashish tyagi, devashish tyagi meerut, devashish tyagi sardhana, premium web developer meerut, next js expert india, react developer, vue js developer, node js developer, express js, freelance web developer uttar pradesh, seo architect, high performance websites, enterprise web development',
  alternates: {
    canonical: 'https://worldmediancr.com/developer',
  },
  openGraph: {
    title: 'Devashish Tyagi | Premium Web Developer & SEO Architect',
    description: 'Building exceptional digital experiences. Expert in Next.js, React, Vue.js, Node.js, and enterprise-grade SEO.',
    url: 'https://worldmediancr.com/developer',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/developer/Devashish Tyagi.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'profile',
  },
  authors: [{ name: 'Devashish Tyagi' }],
  creator: 'Devashish Tyagi',
};

const technicalStack = [
  { category: 'Frontend Frameworks', skills: ['Next.js 14', 'React 18', 'Vue.js 3', 'Nuxt.js'], icon: '⚛️' },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'], icon: '⚙️' },
  { category: 'Styling & UI', skills: ['Tailwind CSS', 'Framer Motion', 'SCSS', 'Material UI', 'Vuetify'], icon: '🎨' },
  { category: 'SEO & Performance', skills: ['Core Web Vitals', 'Schema Markup', 'Meta Strategy', 'Local SEO', 'Lighthouse'], icon: '📈' },
  { category: 'Database', skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma', 'Mongoose'], icon: '🗄️' },
  { category: 'Tools & DevOps', skills: ['Git', 'Vercel', 'Netlify', 'Docker', 'VS Code', 'Figma'], icon: '🛠️' },
];

const achievements = [
  { number: '100%', label: 'SEO Score', description: 'Perfect Lighthouse scores on all projects' },
  { number: '0.1s', label: 'Load Time', description: 'Average page load speed achieved' },
  { number: '30+', label: 'Projects', description: 'Successfully delivered worldwide' },
  { number: '24/7', label: 'Support', description: 'Dedicated post-launch assistance' },
];

const philosophy = [
  { quote: "Code is poetry. Performance is art. SEO is science.", icon: "✨" },
  { quote: "I don't just build websites. I build digital experiences that convert.", icon: "🎯" },
  { quote: "Every line of code serves a purpose. Every pixel has a reason.", icon: "💎" },
];

const expertiseTags = [
  'Next.js Expert', 'React Specialist', 'Vue.js Developer', 'Node.js Backend',
  'Express API', 'SEO Architect', 'TypeScript', 'Full Stack Developer'
];

export default function DeveloperPage() {
  return (
    <main className="bg-white mt-[-16]">
      {/* Hero Section - Premium Dark Theme */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Abstract Background - Fixed without HTML entities */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-white/80">Available for Elite Projects</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Devashish
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400"> Tyagi</span>
              </h1>
              <p className="text-xl text-gray-300 mb-3">Full Stack Developer & SEO Architect</p>
              <p className="text-gray-400 mb-2">📍 Sardhana, Meerut • Uttar Pradesh, India</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {expertiseTags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                Transforming ideas into exceptional digital experiences. 
                I build high-performance websites and applications that rank, convert, and leave lasting impressions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#work" className="group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  View Portfolio
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="mailto:iamdevashishtyagi@gmail.com" className="bg-transparent border-2 border-white/30 hover:border-white/60 px-8 py-3 rounded-full font-semibold transition-all">
                  Let's Connect
                </a>
              </div>
            </div>
            
            {/* Profile Image Container */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-2xl opacity-60 animate-pulse"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/images/developer/Devashish Tyagi.webp"
                    alt="Devashish Tyagi - Premium Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-8 right-8 bg-green-500 rounded-full p-2 border-4 border-blue">
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
            <div key={i} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-950 to-blue-950">
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
            <div className="inline-block px-4 py-1 bg-indigo-100 rounded-full text-indigo-700 text-sm font-semibold mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Crafting Digital Excellence from <span className="text-indigo-900">Meerut</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                I'm <strong className="text-gray-900">Devashish Tyagi</strong>, a passionate full-stack developer who believes that 
                great web applications are more than just code—they're experiences that connect, engage, and convert.
              </p>
              <p className="leading-relaxed">
                Based in Sardhana, Meerut, I've helped businesses across India establish powerful digital presences. 
                From local enterprises to national brands, I deliver solutions that combine cutting-edge technology 
                with strategic SEO implementation.
              </p>
              <p className="leading-relaxed">
                The <strong>World Media NCR</strong> website you're experiencing is a testament to my commitment to 
                excellence—fast, responsive, SEO-optimized, and visually stunning.
              </p>
            </div>
            
            <div className="mt-8 space-y-3">
              {philosophy.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-700 italic text-sm">{item.quote}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative max-w-sm mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/developer/Devashish-Tyagi.webp"
                alt="Devashish Tyagi - Professional Full Stack Developer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Technical Stack Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-indigo-100 rounded-full text-indigo-700 text-sm font-semibold mb-4">
              Technical Arsenal
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Full Stack Mastery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern tech stack for building future-proof web applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {technicalStack.map((stack, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-3xl mb-3">{stack.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 rounded-lg text-xs text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Work Section */}
      <div id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-indigo-100 rounded-full text-indigo-700 text-sm font-semibold mb-4">
            Featured Project
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World Media NCR
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete digital transformation for a leading advertising agency
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/developer/devashishtyagi.webp"
                alt="Devashish Tyagi - Web Development Portfolio"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Delivered</h3>
              <ul className="space-y-3 mb-6">
                {[
                  '🏆 98+ Google PageSpeed Score',
                  '📈 Complete SEO optimization with schema markup',
                  '⚡ Lightning-fast Next.js 14 architecture',
                  '🎯 Strategic keyword targeting for local markets',
                  '📱 Fully responsive & mobile-first design',
                  '🔍 Google Search Console integration'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-indigo-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Tech Stack:</span> Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Vercel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-indigo-100 rounded-full text-indigo-700 text-sm font-semibold mb-4">
              Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Can Do For You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end web development and SEO solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Full Stack Development", desc: "End-to-end web applications with Next.js, React, Vue.js, Node.js, and Express for scalable solutions.", icon: "💎", color: "from-indigo-500 to-purple-600" },
              { title: "Frontend Excellence", desc: "Modern, responsive interfaces with React, Vue.js, and Next.js. Pixel-perfect implementations.", icon: "🎨", color: "from-blue-500 to-indigo-600" },
              { title: "Backend APIs", desc: "Robust REST APIs and microservices with Node.js, Express, and various databases.", icon: "⚙️", color: "from-green-500 to-teal-600" },
              { title: "Enterprise SEO", desc: "Technical SEO, schema markup, local SEO, and content strategy to dominate search results.", icon: "📈", color: "from-purple-500 to-pink-600" },
              { title: "Performance Optimization", desc: "Sub-second load times, Core Web Vitals optimization, and Lighthouse score perfection.", icon: "⚡", color: "from-orange-500 to-red-600" },
              { title: "Ongoing Support", desc: "24/7 maintenance, updates, and continuous improvement for your web applications.", icon: "🔄", color: "from-cyan-500 to-blue-600" },
            ].map((service, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                <div className={`mt-4 w-12 h-1 bg-gradient-to-r ${service.color} rounded-full group-hover:w-full transition-all duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Me Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Partner With Me?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Because your digital success is my mission
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Full Stack Expertise", desc: "From database to UI - I handle it all", icon: "🚀" },
            { title: "SEO-First Development", desc: "Every line of code is SEO optimized", icon: "🎯" },
            { title: "Lightning Fast", desc: "Sub-second load times guaranteed", icon: "⚡" },
            { title: "Modern Tech Stack", desc: "React, Vue, Node, Express, Next.js", icon: "⚛️" },
            { title: "Pixel Perfect", desc: "Meticulous attention to details", icon: "✨" },
            { title: "Local Expertise", desc: "Based in Sardhana, Meerut", icon: "📍" },
            { title: "Quality Assured", desc: "Rigorous testing across all devices", icon: "✅" },
            { title: "Post-Launch Care", desc: "Dedicated ongoing support", icon: "🛡️" },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Icons Row */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm uppercase tracking-wide">Technologies I Work With</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Vue.js', icon: '💚' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Express', icon: '🚂' },
              { name: 'Next.js', icon: '▲' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Tailwind', icon: '🎨' },
              { name: 'MongoDB', icon: '🗄️' }
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-3xl mb-1">{tech.icon}</div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something <span className="underline decoration-pink-400">Extraordinary</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's collaborate and create a digital experience that sets your business apart.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/919557423119?text=Hi%20Devashish%2C%20I'm%20interested%20in%20discussing%20a%20web%20development%20project." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg transition shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.013.592 3.89 1.614 5.488L2.046 21.57c-.09.27.162.522.432.432l4.082-1.568C8.11 21.408 9.995 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.83 0-3.52-.563-4.92-1.521l-.352-.222-3.009 1.156 1.156-3.009-.222-.352C4.563 15.52 4 13.83 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
              Start a Conversation
            </a>
            <a 
              href="mailto:iamdevashishtyagi@gmail.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold text-lg transition"
            >
              <div>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg><p>iamdevashishtyagi@gmail.com</p>
              </div>
            </a>
          </div>
          <p className="text-white/60 text-sm mt-8">
            📍 Based in Sardhana, Meerut • Available worldwide for remote projects
          </p>
        </div>
      </div>
    </main>
  );
}