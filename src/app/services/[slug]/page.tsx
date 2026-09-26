// src/app/services/[slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Lightbulb,
  ShieldCheck,
  Settings2,
  Eye,
  Camera,
  Palette,
  CircleDollarSign,
  Compass,
  SunMedium,
  Clock,
  Layers,
  Maximize2,
  Milestone,
  Building2,
  Film,
  Zap,
  Truck,
  Printer,
  CheckCircle2,
  Vote,
  Scale,
  Target,
  Sparkles,
} from 'lucide-react';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { ServiceDetailJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/SeoJsonLd';

function ServiceFeatureIcon({ icon, className = "w-6 h-6" }: { icon?: string; className?: string }) {
  const props = { className, strokeWidth: 1.75 };
  switch (icon) {
    case "map-pin":
    case "📍":
      return <MapPin {...props} />;
    case "lightbulb":
    case "💡":
      return <Lightbulb {...props} />;
    case "shield":
    case "🛡️":
      return <ShieldCheck {...props} />;
    case "settings":
    case "⚙️":
      return <Settings2 {...props} />;
    case "eye":
    case "👁️":
    case "👀":
      return <Eye {...props} />;
    case "camera":
    case "📸":
      return <Camera {...props} />;
    case "palette":
    case "🎨":
      return <Palette {...props} />;
    case "dollar-sign":
    case "💰":
      return <CircleDollarSign {...props} />;
    case "compass":
    case "🌾":
    case "🗺️":
      return <Compass {...props} />;
    case "sun":
    case "☀️":
      return <SunMedium {...props} />;
    case "clock":
    case "⏳":
    case "⏰":
      return <Clock {...props} />;
    case "layers":
    case "🧱":
      return <Layers {...props} />;
    case "maximize":
    case "📐":
      return <Maximize2 {...props} />;
    case "milestone":
    case "🛣️":
      return <Milestone {...props} />;
    case "building":
    case "🏗️":
      return <Building2 {...props} />;
    case "film":
    case "🎬":
      return <Film {...props} />;
    case "zap":
    case "⚡":
      return <Zap {...props} />;
    case "truck":
    case "🚗":
      return <Truck {...props} />;
    case "printer":
    case "📜":
      return <Printer {...props} />;
    case "check-circle":
    case "🪡":
      return <CheckCircle2 {...props} />;
    case "vote":
    case "🗳️":
      return <Vote {...props} />;
    case "scale":
    case "⚖️":
      return <Scale {...props} />;
    case "target":
    case "🎯":
      return <Target {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}


interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found | World Media NCR' };
  }

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
      images: [
        {
          url: service.ogImage,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.ogImage],
    },
  };
}

export default async function ServiceDynamicPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  return (
    <main className="bg-white">
      {/* Rich Structured Data for Google SERPs */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://worldmediancr.com' },
          { name: 'Services', url: 'https://worldmediancr.com/services' },
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
      <FaqJsonLd
        faqs={service.faqs.map((f) => ({
          question: f.question,
          answer: f.answer,
        }))}
      />

      {/* Hero Section - Premium Dark Navy Theme */}
      <div className="relative bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[var(--yellow)] transition">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[var(--yellow)] transition">Services</Link>
              <span>/</span>
              <span className="text-[var(--yellow)] font-semibold">{service.name}</span>
            </nav>

            {/* Main H1 - Strictly NO yellow tag line above it */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
              {service.heroHeadline} <span className="text-[var(--yellow)]">{service.heroHeadlineHighlight}</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed font-normal">
              {service.heroSubheadline}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href={`/contact?service=${encodeURIComponent(service.name)}`}
                className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-8 py-4 rounded-xl font-extrabold transition shadow-lg hover:scale-105"
              >
                Inquire &amp; Reserve Sites
              </Link>
              <a
                href={`https://wa.me/919456497636?text=Hi%20World%20Media%20NCR%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-xl font-bold transition backdrop-blur-sm"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919456497636"
                className="text-slate-300 hover:text-white font-semibold text-sm flex items-center gap-1.5 ml-2 transition"
              >
                <span>Call Desk:</span>
                <strong className="text-white underline decoration-[var(--yellow)]">+91 94564 97636</strong>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {service.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg border border-[#D8EAFD] text-center transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#0A173E] mb-1">
                {stat.value}
              </div>
              <div className="font-bold text-slate-900 text-sm md:text-base">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-4 text-center">
            {service.overviewHeading}
          </h2>
          <p className="text-lg text-slate-600 font-medium text-center mb-10">
            {service.overviewSubheading}
          </p>

          <div className="space-y-6 text-slate-700 text-lg leading-relaxed bg-[#F0F8FF]/50 p-8 sm:p-10 rounded-3xl border border-[#D8EAFD]">
            {service.overviewParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages / Features Section */}
      <section className="bg-[#F0F8FF] py-20 border-t border-b border-[#D8EAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A173E] tracking-tight mb-4">
              {service.featuresHeading}
            </h2>
            <p className="text-lg text-slate-600">
              Engineered for verified ROI, structural reliability, and commanding public awareness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-sm border border-[#D8EAFD] hover:border-[#0A173E] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-13 h-13 rounded-2xl bg-[#F0F8FF] border border-[#D8EAFD] text-[#0A173E] flex items-center justify-center mb-6 group-hover:bg-[#0A173E] group-hover:text-white group-hover:border-[#0A173E] transition-all duration-300">
                  <ServiceFeatureIcon icon={feature.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A173E] mb-3 group-hover:text-[#0A173E] transition">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-1">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats / Sizing Specs (if available) */}
      {service.typesList && service.typesList.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-4">
              {service.typesHeading}
            </h2>
            {service.typesSubheading && (
              <p className="text-lg text-slate-600">{service.typesSubheading}</p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.typesList.map((type, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#D8EAFD] shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#0A173E] uppercase tracking-wider bg-[#F0F8FF] px-3 py-1 rounded-full inline-block mb-3 border border-[#D8EAFD]">
                    {type.sizeOrFormat}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A173E] mb-2">{type.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{type.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                  Best For: <span className="text-slate-800">{type.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Gallery Showcase (if available) */}
      {service.galleryImages && service.galleryImages.length > 0 && (
        <section className="bg-white py-20 border-t border-[#D8EAFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-4">
                {service.galleryHeading || 'Live Campaign Execution'}
              </h2>
              <p className="text-lg text-slate-600">
                Real photos from our active media assets across Meerut, highways, and Western UP.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#D8EAFD] hover:shadow-xl transition"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A173E]/90 via-[#0A173E]/30 to-transparent opacity-90 group-hover:opacity-100 transition flex items-end p-5">
                    <div>
                      <p className="text-white font-bold text-base">{img.location}</p>
                      <p className="text-xs text-[var(--yellow)]">{service.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Locations Covered Section */}
      <section className="bg-[#F0F8FF] py-20 border-t border-[#D8EAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-4">
              {service.locationsHeading}
            </h2>
            <p className="text-lg text-slate-600">
              Unrivaled inventory density across North India&apos;s fastest growing transit corridors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.locationsList.map((loc, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#D8EAFD] shadow-xs hover:border-[#0A173E] hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg text-[#0A173E]">{loc.name}</h3>
                  <span className="text-[0.7rem] font-bold bg-[#F0F8FF] text-[#0A173E] border border-[#D8EAFD] px-2.5 py-0.5 rounded-full">
                    {loc.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-4">
            {service.processHeading}
          </h2>
          <p className="text-lg text-slate-600">
            From line-of-sight analysis to rapid crane mounting, our turnkey execution ensures peace of mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-[#D8EAFD] relative hover:shadow-lg transition"
            >
              <div className="text-4xl font-black text-[#D8EAFD] mb-3">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-[#0A173E] mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F0F8FF] py-20 border-t border-b border-[#D8EAFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Clear answers regarding bookings, permits, printing, and campaign execution.
            </p>
          </div>

          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 bg-white rounded-2xl border border-[#D8EAFD] shadow-xs"
              >
                <h3 className="text-xl font-bold text-[#0A173E] mb-3">{faq.question}</h3>
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27] text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#182859] shadow-2xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Ready to Dominate <span className="text-[var(--yellow)]">Outdoor Visibility</span>?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Contact World Media NCR today for real-time site availability, transparent rate cards, and customized campaign proposals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/contact?service=${encodeURIComponent(service.name)}`}
              className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-10 py-4 rounded-xl font-extrabold text-lg transition shadow-xl hover:scale-105"
            >
              Get Free Site Quote
            </Link>
            <a
              href="tel:+919456497636"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-10 py-4 rounded-xl font-bold text-lg transition backdrop-blur-sm"
            >
              Call +91 94564 97636
            </a>
          </div>
        </div>
      </section>

      {/* Related Services Navigation */}
      {relatedServices.length > 0 && (
        <section className="bg-white pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-[#0A173E] mb-6 text-center">
              Explore Complementary Advertising Solutions
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedServices.map((rel) => rel && (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="p-6 rounded-2xl bg-[#F0F8FF] border border-[#D8EAFD] hover:border-[#0A173E] hover:shadow-lg transition group block text-center"
                >
                  <h4 className="font-bold text-lg text-[#0A173E] group-hover:text-blue-900 mb-2">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.metaDescription}
                  </p>
                  <span className="inline-block mt-3 text-xs font-bold text-[#0A173E] group-hover:underline">
                    View Service Details →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
