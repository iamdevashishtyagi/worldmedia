// src/app/services/[category]/page.tsx
// Category landing page — /services/outdoor-advertising, /services/development, etc.
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight, Phone, MessageSquare, Megaphone, Code2, Palette, TrendingUp,
  Truck, Printer, Monitor, Vote, Globe, ShoppingBag, Settings2, LayoutTemplate,
  Sparkles, Layers, Image as LucideImage, Target, Play, Clapperboard, Brush, PanelTop,
  CheckCircle2, Award, Zap,
} from 'lucide-react';
import { serviceCategories, getCategoryBySlug, getAllCategorySlugs } from '@/data/serviceCategories';
import { newServicesData } from '@/data/newServices';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { BreadcrumbJsonLd, ServiceDetailJsonLd, FaqJsonLd } from '@/components/SeoJsonLd';
import OutdoorServiceDetail from '@/components/OutdoorServiceDetail';
import ServicesSection from '@/components/ServicesSection';

const outdoorFaqs = [
  {
    question: "Which outdoor advertising services does World Media NCR provide?",
    answer: "World Media NCR provides hoarding and billboard advertising, digital wall painting, vehicle branding, flex printing, LED display advertising and political advertising campaign support across Meerut, Delhi NCR, and Western UP.",
  },
  {
    question: "How do I get an advertising quote in Meerut?",
    answer: "Share your campaign objective, preferred area, format and timing with World Media NCR via call or WhatsApp at +91-9456497636. Our team provides transparent rate cards, site photos, and rapid site reservations.",
  },
  {
    question: "Which areas does World Media NCR serve?",
    answer: "World Media NCR serves Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, Ghaziabad, Noida, Delhi and Delhi NCR.",
  },
];

interface Props {
  params: Promise<{ category: string }>;
}

function CategoryIcon({ icon, className = 'w-6 h-6' }: { icon: string; className?: string }) {
  const props = { className, strokeWidth: 1.75 };
  switch (icon) {
    case 'Megaphone': return <Megaphone {...props} />;
    case 'Code2': return <Code2 {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'TrendingUp': return <TrendingUp {...props} />;
    case 'Truck': return <Truck {...props} />;
    case 'Printer': return <Printer {...props} />;
    case 'Monitor': return <Monitor {...props} />;
    case 'Vote': return <Vote {...props} />;
    case 'Globe': return <Globe {...props} />;
    case 'ShoppingBag': return <ShoppingBag {...props} />;
    case 'Settings2': return <Settings2 {...props} />;
    case 'LayoutTemplate': return <LayoutTemplate {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'Image': return <LucideImage {...props} />;
    case 'Target': return <Target {...props} />;
    case 'Play': return <Play {...props} />;
    case 'Clapperboard': return <Clapperboard {...props} />;
    case 'Brush': return <Brush {...props} />;
    case 'PanelTop': return <PanelTop {...props} />;
    default: return <Sparkles {...props} />;
  }
}

export async function generateStaticParams() {
  const categoryParams = getAllCategorySlugs().map((category) => ({ category }));
  const outdoorServiceParams = getAllServiceSlugs().map((slug) => ({ category: slug }));
  return [...categoryParams, ...outdoorServiceParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (cat) {
    const metaTitles: Record<string, string> = {
      'outdoor-advertising': 'Best Outdoor Advertising in Meerut | Hoardings, Billboard & OOH | World Media NCR',
      'development': 'Best Website Development in Meerut | Business, E-Commerce & Web Software | World Media NCR',
      'designing': 'Best Graphic Design Services in Meerut | Logo, UI/UX & Social Media Design | World Media NCR',
      'digital-advertising': 'Best Digital Advertising in Meerut | Meta Ads, YouTube & AI Videos | World Media NCR',
    };
    const metaDescs: Record<string, string> = {
      'outdoor-advertising': 'World Media NCR — Meerut\'s top outdoor advertising agency. Highway hoardings, digital wall painting, billboard gantries, vehicle branding, LED screens & political campaigns. Call +91-9456497636.',
      'development': 'Professional website development services in Meerut — business websites, portfolio websites, e-commerce stores, and custom web software. Built for SEO, speed & conversions. Call +91-9456497636.',
      'designing': 'Creative design services in Meerut — logo design, brand identity, website UI/UX, and social media graphics. Make your brand unforgettable. Call +91-9456497636.',
      'digital-advertising': 'Digital advertising services in Meerut — Meta Ads (Facebook & Instagram), YouTube video ads, and AI-generated business videos. Grow your brand online. Call +91-9456497636.',
    };

    return {
      title: metaTitles[category] || `${cat.name} Services | World Media NCR`,
      description: metaDescs[category] || cat.description,
      keywords: cat.services.flatMap((s) => s.keywords).join(', '),
      alternates: {
        canonical: `https://worldmediancr.com/services/${category}`,
      },
      openGraph: {
        title: metaTitles[category] || `${cat.name} | World Media NCR`,
        description: metaDescs[category] || cat.description,
        url: `https://worldmediancr.com/services/${category}`,
        siteName: 'World Media NCR',
        locale: 'en_IN',
        type: 'website',
      },
    };
  }

  // Check if this is an outdoor service slug
  const service = getServiceBySlug(category);
  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      keywords: service.keywords.join(', '),
      alternates: {
        canonical: service.canonical,
      },
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url: service.canonical,
        siteName: 'World Media NCR',
        locale: 'en_IN',
        type: 'website',
        images: [
          {
            url: service.previewImage || '/images/hero-bg.webp',
            width: 1200,
            height: 630,
            alt: service.name,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: service.metaTitle,
        description: service.metaDescription,
        images: [service.previewImage || '/images/hero-bg.webp'],
      },
    };
  }

  return { title: 'Services | World Media NCR' };
}

export default async function CategoryLandingPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  // If it matches an outdoor service directly (e.g. /services/hoarding-advertising-meerut)
  if (!cat) {
    const service = getServiceBySlug(category);
    if (service) {
      return <OutdoorServiceDetail service={service} categorySlug="outdoor-advertising" />;
    }
    notFound();
  }

  // If it's outdoor advertising, render the original outdoor services main page with alternate unipoles!
  if (category === 'outdoor-advertising') {
    return (
      <main className="bg-white">
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', url: 'https://worldmediancr.com' },
            { name: 'Services', url: 'https://worldmediancr.com/services' },
            { name: 'Outdoor Advertising', url: 'https://worldmediancr.com/services/outdoor-advertising' },
          ]}
        />
        <ServiceDetailJsonLd
          name="Best Outdoor Advertising Services in Meerut"
          description="Explore the best outdoor advertising services in Meerut by World Media NCR. Premium highway hoarding advertising, digital wall painting, billboard unipoles, vehicle branding, flex printing, and LED video displays."
          url="https://worldmediancr.com/services/outdoor-advertising"
          serviceType="Outdoor Advertising & OOH Media"
          areaServed="Meerut, Delhi NCR & Western Uttar Pradesh"
        />

        {/* Clean Breadcrumb Navigation Bar */}
        <div className="bg-[#F0F8FF] border-b border-[#D8EAFD] py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link href="/" className="hover:text-[#0A173E] transition">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0A173E] transition">Services</Link>
            <span>/</span>
            <span className="text-[#0A173E] font-bold">Outdoor Advertising</span>
          </div>
        </div>

        {/* The Original ServicesSection with Alternate Position Unipoles */}
        <ServicesSection />

        {/* Advertising Services FAQs */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <FaqJsonLd questions={outdoorFaqs} />
          <h2 className="text-3xl font-bold text-[#0A173E]">Advertising Services FAQs</h2>
          <div className="mt-6 space-y-6">
            {outdoorFaqs.map((faq) => (
              <article key={faq.question} className="p-6 bg-[#F0F8FF] rounded-2xl border border-[#D8EAFD]">
                <h3 className="text-xl font-semibold text-[#0A173E]">{faq.question}</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27] text-white rounded-3xl p-8 sm:p-12 border border-[#182859] shadow-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Book Prime Outdoor Sites in Meerut & NCR</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Get instant site availability, transparent rate cards, and rapid booking from Meerut&apos;s leading outdoor media owners.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact?service=Hoarding%20Advertising" className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-10 py-4 rounded-xl font-extrabold text-lg transition shadow-xl hover:scale-105 flex items-center gap-2">
                Inquire Outdoor Media <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/919456497636?text=Hi%20World%20Media%20NCR,%20I%20want%20to%20inquire%20about%20outdoor%20advertising%20sites." target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-10 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // For other categories (Development, Designing, Digital Advertising):
  const serviceLinks = newServicesData
    .filter((s) => s.category === category)
    .map((s) => ({
      slug: s.slug,
      name: s.name,
      shortDesc: s.tagline,
      icon: cat.services.find((cs) => cs.slug === s.slug)?.icon || 'Sparkles',
      badge: cat.services.find((cs) => cs.slug === s.slug)?.badge,
      href: `/services/${category}/${s.slug}`,
    }));

  const otherCategories = serviceCategories.filter((c) => c.slug !== category);

  return (
    <main className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://worldmediancr.com' },
          { name: 'Services', url: 'https://worldmediancr.com/services' },
          { name: cat.name, url: `https://worldmediancr.com/services/${category}` },
        ]}
      />
      <ServiceDetailJsonLd
        name={cat.name}
        description={cat.description}
        url={`https://worldmediancr.com/services/${category}`}
        serviceType={cat.tagline}
        areaServed="Meerut, Delhi NCR & Western Uttar Pradesh"
      />

      {/* HERO */}
      <section className={`relative bg-gradient-to-br ${cat.heroGradient} text-white overflow-hidden`}>
        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--yellow)] rounded-full mix-blend-overlay blur-3xl animate-pulse animation-delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--yellow)] transition">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--yellow)] transition">Services</Link>
            <span>/</span>
            <span className="text-[var(--yellow)] font-semibold">{cat.name}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Category label */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <CategoryIcon icon={cat.icon} className="w-4 h-4 text-[var(--yellow)]" />
              <span className="text-sm font-bold text-white tracking-wide">{cat.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5">
              {cat.name}{' '}
              <span className="text-[var(--yellow)]">Services</span>
              <br />
              <span className="text-2xl sm:text-3xl font-semibold text-slate-300">in Meerut & NCR</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {cat.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/contact?service=${encodeURIComponent(cat.name)}`}
                className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-8 py-4 rounded-xl font-extrabold text-base transition shadow-lg hover:scale-105 flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919456497636"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-xl font-bold text-base transition backdrop-blur-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--yellow-dark)] mb-3">Our {cat.name} Services</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-4">
            Choose the Right Service for Your Goals
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Every service is tailored for Meerut & NCR businesses — with transparent pricing, fast delivery, and measurable results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceLinks.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group relative bg-white rounded-2xl border border-[#D8EAFD] p-7 hover:border-[#0A173E] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A173E] to-[#0D1C4D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Badge */}
                {service.badge && (
                  <span className="absolute top-0 right-0 -mt-0 -mr-0 bg-[var(--yellow)] text-[#0A173E] text-[10px] font-extrabold px-2.5 py-1 rounded-bl-xl rounded-tr-xl">
                    {service.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-12 h-12 bg-[#F0F8FF] group-hover:bg-white/10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <CategoryIcon icon={service.icon} className="w-6 h-6 text-[#0A173E] group-hover:text-[var(--yellow)] transition-colors duration-300" />
                </div>

                {/* Name */}
                <h3 className="text-lg font-extrabold text-[#0A173E] group-hover:text-white transition-colors duration-300 mb-2 leading-snug">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed flex-grow">
                  {service.shortDesc}
                </p>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-[#0A173E] group-hover:text-[var(--yellow)] transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#F0F8FF] border-y border-[#D8EAFD] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] mb-3">
              Why Choose <span className="text-[var(--yellow-dark)]">World Media NCR</span>?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">Trusted by 500+ businesses across Meerut & NCR since 2013</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="w-6 h-6" />, title: '12+ Years Experience', desc: 'Established in Meerut since 2013 with deep local market knowledge' },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Result-Oriented', desc: 'Every service is delivered with measurable outcomes and transparent reporting' },
              { icon: <Zap className="w-6 h-6" />, title: 'Fast Turnaround', desc: 'Quick project timelines without compromising on quality or attention to detail' },
              { icon: <Phone className="w-6 h-6" />, title: 'Dedicated Support', desc: 'Personal account manager and responsive team available 6 days a week' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-[#D8EAFD] p-6 text-center">
                <div className="w-12 h-12 bg-[#0A173E] rounded-xl flex items-center justify-center mx-auto mb-4 text-[var(--yellow)]">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-[#0A173E] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A173E] mb-2">
            Explore Our Other Services
          </h2>
          <p className="text-slate-600">We offer a complete range of advertising, design & digital services</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {otherCategories.map((oc) => (
            <Link
              key={oc.slug}
              href={`/services/${oc.slug}`}
              className="group flex items-center gap-4 bg-white border border-[#D8EAFD] hover:border-[#0A173E] rounded-2xl p-5 transition-all duration-200 hover:shadow-lg"
            >
              <div className="w-11 h-11 bg-[#F0F8FF] group-hover:bg-[#0A173E] rounded-xl flex items-center justify-center transition-colors duration-200 shrink-0">
                <CategoryIcon icon={oc.icon} className="w-5 h-5 text-[#0A173E] group-hover:text-[var(--yellow)] transition-colors duration-200" />
              </div>
              <div>
                <p className="font-extrabold text-[#0A173E] group-hover:text-[#0A173E] text-sm">{oc.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{oc.tagline}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A173E] ml-auto transition-all duration-200 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27] text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#182859] shadow-2xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Contact World Media NCR today for a free consultation. We will understand your requirements and propose the best solution within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/contact?service=${encodeURIComponent(cat.name)}`}
              className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-10 py-4 rounded-xl font-extrabold text-lg transition shadow-xl hover:scale-105 flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919456497636"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-10 py-4 rounded-xl font-bold text-lg transition backdrop-blur-sm flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +91 94564 97636
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
