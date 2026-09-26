// src/app/locations/[slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs } from '@/data/locations';
import { FaqJsonLd, BreadcrumbJsonLd, LocationBusinessJsonLd } from '@/components/SeoJsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: 'Location Not Found | World Media NCR' };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords.join(', '),
    alternates: {
      canonical: location.canonical,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: location.canonical,
      siteName: 'World Media NCR',
      images: [
        {
          url: location.ogImage,
          width: 1200,
          height: 630,
          alt: `${location.metaTitle} - World Media NCR`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: location.metaTitle,
      description: location.metaDescription,
      images: [location.ogImage],
    },
  };
}

export default async function LocationDynamicPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const nearbyLocations = location.nearbySlugs
    .map((s) => getLocationBySlug(s))
    .filter(Boolean);

  return (
    <main className="bg-white">
      {/* Local Schema & Breadcrumb Schema */}
      <LocationBusinessJsonLd
        name={location.name}
        url={location.canonical}
        description={location.metaDescription}
        cityName={location.name}
        image={location.ogImage}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://worldmediancr.com' },
          { name: 'Locations', url: 'https://worldmediancr.com/locations' },
          { name: location.name, url: location.canonical },
        ]}
      />
      <FaqJsonLd
        faqs={location.faqs.map((f) => ({
          question: f.question,
          answer: f.answer,
        }))}
      />

      {/* DISTINCT HERO: Regional Transit Hub Design */}
      <section className="relative bg-[#0A173E] text-white pt-12 pb-24 overflow-hidden border-b border-[#182859]">
        {/* Subtle Map Grid Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(#D8EAFD 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--yellow)] transition">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[var(--yellow)] transition">Locations</Link>
            <span>/</span>
            <span className="text-[var(--yellow)] font-semibold">{location.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Local Authority Copy */}
            <div className="lg:col-span-7">
              {/* Regional Pin Indicator (Clean text, NO yellow background) */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Regional Outdoor Media Hub • {location.name} Division</span>
              </div>

              {/* Main H1 - Authority & Keyword Rich */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
                {location.heroHeadline} <span className="text-[var(--yellow)]">{location.heroHeadlineHighlight}</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed font-normal">
                {location.heroSubheadline}
              </p>

              {/* Quick Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <div>
                  <div className="text-lg sm:text-xl font-black text-white">{location.population.split(' ')[0]}</div>
                  <div className="text-xs text-slate-300">Target Population</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-[var(--yellow)]">{location.dailyTraffic.split(' ')[0]}</div>
                  <div className="text-xs text-slate-300">Daily Commuters</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-white">{location.highwayLinks.split(',')[0]}</div>
                  <div className="text-xs text-slate-300">Primary Highway</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-[var(--yellow)]">{location.activeSites.split(' ')[0]}</div>
                  <div className="text-xs text-slate-300">Direct Sites</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-8 py-4 rounded-xl font-extrabold transition shadow-lg hover:scale-105"
                >
                  Reserve Sites in {location.name}
                </Link>
                <a
                  href="https://wa.me/919456497636?text=Hi%20World%20Media%20NCR%2C%20I%20want%20to%20inquire%20about%20advertising%20in%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-xl font-bold transition backdrop-blur-sm"
                >
                  WhatsApp Availability
                </a>
                <a
                  href="tel:+919456497636"
                  className="text-slate-300 hover:text-white font-semibold text-sm flex items-center gap-1.5 ml-2 transition"
                >
                  <span>Desk:</span>
                  <strong className="text-white underline decoration-[var(--yellow)]">+91 94564 97636</strong>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Anchor Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3]">
                <Image
                  src={location.heroImage}
                  alt={`Hoarding advertising in ${location.name}`}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A173E] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs uppercase font-extrabold text-[var(--yellow)] tracking-wider mb-1">
                    Live Verified Media
                  </div>
                  <p className="font-bold text-lg leading-snug">
                    Prime Roadside Infrastructure in {location.name}
                  </p>
                  <p className="text-xs text-slate-300 mt-1">100% Nagar Nigam &amp; NHAI Licensed Sites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISTINCT SECTION: Strategic Transit Corridors Explorer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-3">
              {location.corridorsHeading}
            </h2>
            <p className="text-lg text-slate-600">
              High-visibility choke points engineered for maximum commuter dwell-time and sustained brand recall.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {location.corridors.map((corridor, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#F0F8FF]/60 border border-[#D8EAFD] hover:border-[#0A173E] hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0A173E] bg-white border border-[#D8EAFD] px-3 py-1 rounded-full">
                      {corridor.routeType}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full flex items-center gap-1">
                      <span>🚗</span> {corridor.traffic}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A173E] mb-2">
                    {corridor.name}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {corridor.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D8EAFD] flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">Available Formats:</span>
                  <span className="font-bold text-[#0A173E]">{corridor.format}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISTINCT SECTION: Key Geographic Landmarks & Traffic Nodes */}
      {location.landmarks && location.landmarks.length > 0 && (
        <section className="py-16 bg-[#F0F8FF] border-t border-b border-[#D8EAFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A173E] tracking-tight mb-2">
                Prime Traffic Hubs &amp; Interchanges in {location.name}
              </h2>
              <p className="text-sm text-slate-600">
                Key commercial junctions where commuter density and vehicle dwell time are highest.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {location.landmarks.map((lm, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-[#D8EAFD] shadow-2xs font-semibold text-sm text-[#0A173E]"
                >
                  <span className="text-amber-500 font-bold">📍</span>
                  <span>{lm}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DISTINCT SECTION: Local Media Inventory Matrix */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-3">
              Media Infrastructure Available in {location.name}
            </h2>
            <p className="text-lg text-slate-600">
              Direct-owned outdoor advertising formats engineered for high ROI and immediate market impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {location.inventory.map((inv, i) => (
              <Link
                key={i}
                href={inv.link}
                className="group p-6 rounded-2xl bg-white border border-[#D8EAFD] hover:border-[#0A173E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#0A173E] bg-[#F0F8FF] border border-[#D8EAFD] px-3 py-1 rounded-full inline-block mb-3">
                    {inv.count}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A173E] group-hover:text-blue-900 mb-2">
                    {inv.type}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {inv.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#0A173E] group-hover:underline">
                  <span>View Specifications →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DISTINCT SECTION: Market Growth & Strategic Overview */}
      <section className="py-20 bg-[#F0F8FF] border-t border-b border-[#D8EAFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-6 text-center">
            {location.overviewHeading}
          </h2>
          <div className="space-y-6 text-slate-700 text-lg leading-relaxed bg-white p-8 sm:p-10 rounded-3xl border border-[#D8EAFD] shadow-sm">
            {location.overviewParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* DISTINCT SECTION: Localized FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] tracking-tight mb-3">
              Frequently Asked Questions — {location.name}
            </h2>
            <p className="text-slate-600">
              Clear guidance on site availability, municipal permissions, and booking lead times.
            </p>
          </div>

          <div className="space-y-6">
            {location.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 bg-[#F0F8FF] rounded-2xl border border-[#D8EAFD]"
              >
                <h3 className="text-xl font-bold text-[#0A173E] mb-2">{faq.question}</h3>
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27] text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#182859] shadow-2xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Book Prime Billboard Sites in <span className="text-[var(--yellow)]">{location.name}</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get instant site photos, GPS locations, and direct media rate proposals from World Media NCR.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-10 py-4 rounded-xl font-extrabold text-lg transition shadow-xl hover:scale-105"
            >
              Check Available Sites
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

      {/* DISTINCT SECTION: Connected Regional Transit Network */}
      {nearbyLocations.length > 0 && (
        <section className="bg-[#F0F8FF] py-16 border-t border-[#D8EAFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-[#0A173E] mb-6 text-center">
              Explore Advertising Across Adjacent Regional Corridors
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearbyLocations.map((nb) => nb && (
                <Link
                  key={nb.slug}
                  href={`/locations/${nb.slug}`}
                  className="p-5 rounded-xl bg-white border border-[#D8EAFD] hover:border-[#0A173E] hover:shadow-md transition text-center group block"
                >
                  <h4 className="font-bold text-base text-[#0A173E] group-hover:underline">
                    {nb.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">{nb.highwayLinks}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
