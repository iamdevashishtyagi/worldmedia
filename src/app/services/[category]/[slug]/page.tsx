// src/app/services/[category]/[slug]/page.tsx
// Individual service page for nested routes — /services/development/ecommerce-website-development
// For outdoor-advertising category, re-uses the existing servicesData content & layout
// For all other categories, uses newServicesData

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight, Phone, MessageSquare, Award, CheckCircle2, Zap,
  Globe, Code2, ShoppingBag, Settings2, LayoutTemplate, Sparkles,
  Layers, Image as LucideImage, Target, Play, Clapperboard, Palette, SearchCheck,
  Smartphone, ShieldCheck, Server, TrendingUp, Package, CreditCard,
  Receipt, MessageSquare as MsgSq, Users, GraduationCap, FileText,
  BarChart2, UserPlus, RefreshCw, Film, Mic, Music, MapPin,
  Monitor, Brush, Truck, Printer, Vote, Megaphone, PanelTop,
  Calendar, Share2, Layout, Mail, Star,
} from 'lucide-react';
import { getAllCategoryAndServiceSlugs, getCategoryBySlug } from '@/data/serviceCategories';
import { getNewServiceBySlug } from '@/data/newServices';
import { getServiceBySlug, getAllServiceSlugsWithCategory } from '@/data/services';
import { BreadcrumbJsonLd, ServiceDetailJsonLd, FaqJsonLd } from '@/components/SeoJsonLd';

// ---- Icon resolver ----
function SvcIcon({ name, className = 'w-5 h-5' }: { name?: string; className?: string }) {
  const p = { className, strokeWidth: 1.75 };
  switch (name) {
    case 'Globe': return <Globe {...p} />;
    case 'Code2': return <Code2 {...p} />;
    case 'ShoppingBag': return <ShoppingBag {...p} />;
    case 'Settings2': return <Settings2 {...p} />;
    case 'LayoutTemplate': return <LayoutTemplate {...p} />;
    case 'Sparkles': return <Sparkles {...p} />;
    case 'Layers': return <Layers {...p} />;
    case 'Image': return <LucideImage {...p} />;
    case 'Target': return <Target {...p} />;
    case 'Play': return <Play {...p} />;
    case 'Clapperboard': return <Clapperboard {...p} />;
    case 'Palette': return <Palette {...p} />;
    case 'SearchCheck': return <SearchCheck {...p} />;
    case 'Smartphone': return <Smartphone {...p} />;
    case 'ShieldCheck': return <ShieldCheck {...p} />;
    case 'Server': return <Server {...p} />;
    case 'TrendingUp': return <TrendingUp {...p} />;
    case 'Package': return <Package {...p} />;
    case 'CreditCard': return <CreditCard {...p} />;
    case 'Receipt': return <Receipt {...p} />;
    case 'MessageSquare': return <MsgSq {...p} />;
    case 'Users': return <Users {...p} />;
    case 'GraduationCap': return <GraduationCap {...p} />;
    case 'FileText': return <FileText {...p} />;
    case 'BarChart2': return <BarChart2 {...p} />;
    case 'UserPlus': return <UserPlus {...p} />;
    case 'RefreshCw': return <RefreshCw {...p} />;
    case 'Film': return <Film {...p} />;
    case 'Mic': return <Mic {...p} />;
    case 'Music': return <Music {...p} />;
    case 'MapPin': return <MapPin {...p} />;
    case 'Monitor': return <Monitor {...p} />;
    case 'Brush': return <Brush {...p} />;
    case 'Truck': return <Truck {...p} />;
    case 'Printer': return <Printer {...p} />;
    case 'Vote': return <Vote {...p} />;
    case 'Megaphone': return <Megaphone {...p} />;
    case 'PanelTop': return <PanelTop {...p} />;
    case 'Calendar': return <Calendar {...p} />;
    case 'Layout': return <Layout {...p} />;
    case 'Mail': return <Mail {...p} />;
    case 'Star': return <Star {...p} />;
    case 'Share2': return <Share2 {...p} />;
    case 'Zap': return <Zap {...p} />;
    case 'Award': return <Award {...p} />;
    case 'CheckCircle2': return <CheckCircle2 {...p} />;
    default: return <Sparkles {...p} />;
  }
}

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  // New nested services (development, designing, digital-advertising)
  const newParams = getAllCategoryAndServiceSlugs().filter(
    (p) => p.category !== 'outdoor-advertising'
  );

  // Legacy outdoor-advertising services now also available at /services/outdoor-advertising/[slug]
  const outdoorParams = getAllServiceSlugsWithCategory().map((p) => ({
    category: 'outdoor-advertising',
    slug: p.slug,
  }));

  return [...newParams, ...outdoorParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;

  if (category === 'outdoor-advertising') {
    const service = getServiceBySlug(slug);
    if (!service) return { title: 'Service Not Found | World Media NCR' };
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      keywords: service.keywords.join(', '),
      alternates: { canonical: `https://worldmediancr.com/services/${category}/${slug}` },
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url: `https://worldmediancr.com/services/${category}/${slug}`,
        siteName: 'World Media NCR',
        images: [{ url: service.ogImage, width: 1200, height: 630, alt: service.name }],
        locale: 'en_IN',
        type: 'website',
      },
    };
  }

  const service = getNewServiceBySlug(category, slug);
  if (!service) return { title: 'Service Not Found | World Media NCR' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(', '),
    alternates: { canonical: service.canonical },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: service.canonical,
      siteName: 'World Media NCR',
      images: [{ url: service.ogImage, width: 1200, height: 630, alt: service.name }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

// ----- Outdoor advertising services — render via existing ServiceDetail component -----
async function OutdoorServicePage({ slug, category }: { slug: string; category: string }) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // Dynamically import the existing outdoor service renderer
  const { default: ServiceDynamicPage } = await import('@/components/OutdoorServiceDetail');
  return <ServiceDynamicPage service={service} categorySlug={category} />;
}

// ----- New service pages (development, designing, digital-advertising) -----
async function NewServicePage({ category, slug }: { category: string; slug: string }) {
  const service = getNewServiceBySlug(category, slug);
  if (!service) notFound();
  const cat = getCategoryBySlug(category);

  const catHeroGradient = cat?.heroGradient || 'from-[#0A173E] via-[#0D1C4D] to-[#060E27]';
  const categoryDisplayName = cat?.name || category;

  return (
    <main className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://worldmediancr.com' },
          { name: 'Services', url: 'https://worldmediancr.com/services' },
          { name: categoryDisplayName, url: `https://worldmediancr.com/services/${category}` },
          { name: service.name, url: service.canonical },
        ]}
      />
      <ServiceDetailJsonLd
        name={service.name}
        description={service.metaDescription}
        url={service.canonical}
        serviceType={service.serviceType}
        areaServed={service.areaServed}
      />
      <FaqJsonLd faqs={service.faqs} />

      {/* ── HERO ── */}
      <section className={`relative bg-gradient-to-br ${catHeroGradient} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-[var(--yellow)] rounded-full mix-blend-overlay blur-3xl animate-pulse animation-delay-1000" />
          <div className="absolute top-1/2 right-0 w-48 h-48 bg-white rounded-full mix-blend-overlay blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--yellow)] transition">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--yellow)] transition">Services</Link>
            <span>/</span>
            <Link href={`/services/${category}`} className="hover:text-[var(--yellow)] transition">{categoryDisplayName}</Link>
            <span>/</span>
            <span className="text-[var(--yellow)] font-semibold">{service.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Service label */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 bg-[var(--yellow)] rounded-full animate-pulse" />
                <span className="text-sm font-bold text-white tracking-wide">{service.serviceType}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
                {service.heroHeadline}{' '}
                <span className="text-[var(--yellow)]">{service.heroHeadlineHighlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
                {service.heroSubheadline}
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.name)}`}
                  className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-8 py-4 rounded-xl font-extrabold text-base transition shadow-lg hover:scale-105 flex items-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919456497636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-xl font-bold text-base transition backdrop-blur-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {service.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center"
                >
                  <div className="text-3xl font-extrabold text-[var(--yellow)] leading-none mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-white mb-0.5">{stat.label}</div>
                  <div className="text-xs text-slate-400">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--yellow-dark)] mb-3">Overview</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] mb-3 leading-tight">
              {service.overviewHeading}
            </h2>
            <p className="text-slate-500 text-base font-semibold mb-6 italic">{service.overviewSubheading}</p>
            <div className="space-y-4">
              {service.overviewParagraphs.map((para, i) => (
                <p key={i} className="text-slate-700 leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>
            {service.pricingNote && (
              <div className="mt-6 bg-[#F0F8FF] border border-[#D8EAFD] rounded-xl px-5 py-4 flex items-start gap-3">
                <span className="text-[var(--yellow-dark)] text-xl mt-0.5">💡</span>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">{service.pricingNote}</p>
              </div>
            )}
          </div>

          {/* Trust sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#0A173E] text-white rounded-2xl p-6">
              <h3 className="font-extrabold text-lg mb-4 text-[var(--yellow)]">Ready to Start?</h3>
              <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                Get a free consultation from our expert team. We will understand your needs and share a custom proposal within 24 hours.
              </p>
              <Link
                href={`/contact?service=${encodeURIComponent(service.name)}`}
                className="w-full bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] py-3 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="mt-3 flex gap-2">
                <a
                  href="tel:+919456497636"
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 transition"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919456497636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Quick trust points */}
            <div className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-5">
              <h4 className="font-extrabold text-[#0A173E] text-sm mb-3">Why World Media NCR?</h4>
              {[
                '12+ years in Meerut & NCR market',
                'Dedicated project manager assigned',
                'Transparent pricing, no hidden costs',
                '100% satisfaction guaranteed',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2 py-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--yellow-dark)] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-xs text-slate-700 font-medium leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-[#F0F8FF] border-y border-[#D8EAFD] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--yellow-dark)] mb-3">Key Features</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight">
              {service.featuresHeading}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white border border-[#D8EAFD] rounded-2xl p-6 hover:border-[#0A173E] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 bg-[#F0F8FF] group-hover:bg-[#0A173E] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 shrink-0">
                  <SvcIcon name={feature.icon} className="w-5 h-5 text-[#0A173E] group-hover:text-[var(--yellow)] transition-colors duration-300" />
                </div>
                <h3 className="font-extrabold text-[#0A173E] mb-2 text-base">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK (if available) ── */}
      {service.techStack && service.techStack.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[#0A173E]">Technologies We Use</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {service.techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2.5 bg-[#F0F8FF] border border-[#D8EAFD] rounded-xl px-5 py-3 font-bold text-sm text-[#0A173E]"
              >
                <SvcIcon name={tech.icon} className="w-4 h-4 text-[var(--yellow-dark)]" />
                {tech.name}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--yellow-dark)] mb-3">Our Process</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight">
            {service.processHeading}
          </h2>
        </div>
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#D8EAFD] via-[#0A173E]/20 to-[#D8EAFD]" />
          <div className={`grid gap-6 ${service.processSteps.length <= 4 ? 'lg:grid-cols-' + service.processSteps.length : 'lg:grid-cols-5'}`}
            style={{ gridTemplateColumns: `repeat(${Math.min(service.processSteps.length, 5)}, minmax(0, 1fr))` }}
          >
            {service.processSteps.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center relative">
                {/* Step number bubble */}
                <div className="w-16 h-16 bg-[#0A173E] text-[var(--yellow)] rounded-2xl flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg relative z-10 shrink-0">
                  {step.step}
                </div>
                <h3 className="font-extrabold text-[#0A173E] text-sm mb-1.5 leading-tight">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F0F8FF] border-t border-[#D8EAFD] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--yellow-dark)] mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <article
                key={faq.question}
                className="bg-white border border-[#D8EAFD] rounded-2xl p-6 hover:border-[#0A173E]/30 transition-colors"
              >
                <h3 className="font-extrabold text-[#0A173E] text-base mb-2 flex items-start gap-2">
                  <span className="text-[var(--yellow-dark)] shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed pl-5">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27] text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#182859] shadow-2xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ready to get started with {service.name} in Meerut? Contact us today for a free consultation and custom quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/contact?service=${encodeURIComponent(service.name)}`}
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
          {/* Back to category */}
          <Link
            href={`/services/${category}`}
            className="inline-flex items-center gap-1.5 mt-6 text-slate-400 hover:text-[var(--yellow)] text-sm font-medium transition"
          >
            ← Back to {categoryDisplayName} Services
          </Link>
        </div>
      </section>
    </main>
  );
}

export default async function ServiceNestedPage({ params }: Props) {
  const { category, slug } = await params;

  if (category === 'outdoor-advertising') {
    return <OutdoorServicePage slug={slug} category={category} />;
  }

  return <NewServicePage category={category} slug={slug} />;
}
