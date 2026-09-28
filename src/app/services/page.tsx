// src/app/services/page.tsx — All Services Overview
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, Phone, MessageSquare, Megaphone, Code2, Palette, TrendingUp,
  Award, CheckCircle2, Zap, Star,
} from 'lucide-react';
import { serviceCategories } from '@/data/serviceCategories';
import { FaqJsonLd } from '@/components/SeoJsonLd';

const faqs = [
  { question: 'What services does World Media NCR offer?', answer: 'World Media NCR offers four main service categories: Outdoor Advertising (hoardings, billboards, wall painting, vehicle branding, LED screens), Web Development (business websites, e-commerce, portfolio, web software), Design Services (logo, UI/UX, social media design), and Digital Advertising (Meta Ads, YouTube Ads, AI business videos).' },
  { question: 'Which areas does World Media NCR serve?', answer: 'World Media NCR is based in Meerut and serves Meerut, Delhi NCR, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, Ghaziabad, Noida, and all of Western Uttar Pradesh for outdoor advertising. Web and digital services are available pan-India.' },
  { question: 'How do I get a free quote for advertising or website services?', answer: 'Contact us via our website inquiry form, WhatsApp at +91-9456497636, or call directly. Our team will understand your requirements and provide a transparent quote within 24 hours.' },
  { question: 'Does World Media NCR offer digital advertising along with outdoor advertising?', answer: 'Yes! We offer a complete 360-degree marketing solution — outdoor advertising, web development, design services, and digital advertising (Meta Ads, YouTube, AI videos) — all under one roof.' },
];

export const metadata: Metadata = {
  title: 'Best Advertising & Web Development Services in Meerut | World Media NCR',
  description: 'World Media NCR offers complete advertising, web development, design & digital marketing services in Meerut & NCR. Hoardings, websites, logo design, Meta Ads, YouTube advertising & more. Call +91-9456497636.',
  keywords: [
    'best advertising services meerut',
    'advertising agency meerut',
    'web development meerut',
    'logo design meerut',
    'digital marketing meerut',
    'hoarding advertising meerut',
    'meta ads meerut',
    'youtube advertising meerut',
    'website development meerut',
    'outdoor advertising meerut',
    'all services world media ncr',
  ].join(', '),
  alternates: { canonical: 'https://worldmediancr.com/services' },
  openGraph: {
    title: 'All Services | World Media NCR — Advertising, Web Development & Digital Marketing in Meerut',
    description: 'Complete advertising, web, design & digital marketing services in Meerut & NCR by World Media NCR.',
    url: 'https://worldmediancr.com/services',
    siteName: 'World Media NCR',
    locale: 'en_IN',
    type: 'website',
  },
};

const catIconColors: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  'outdoor-advertising': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', accent: 'border-t-amber-400' },
  'development': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', accent: 'border-t-blue-400' },
  'designing': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', accent: 'border-t-orange-400' },
  'digital-advertising': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', accent: 'border-t-emerald-400' },
};

function CategoryIconComp({ icon, className = 'w-7 h-7' }: { icon: string; className?: string }) {
  const p = { className, strokeWidth: 1.75 };
  switch (icon) {
    case 'Megaphone': return <Megaphone {...p} />;
    case 'Code2': return <Code2 {...p} />;
    case 'Palette': return <Palette {...p} />;
    case 'TrendingUp': return <TrendingUp {...p} />;
    default: return <Star {...p} />;
  }
}

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <FaqJsonLd questions={faqs} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--yellow)] rounded-full mix-blend-overlay blur-3xl animate-pulse animation-delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-[var(--yellow)] rounded-full animate-pulse" />
            <span className="text-sm font-bold text-white tracking-wide">World Media NCR — Complete Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5">
            Best Advertising & Digital Services{' '}
            <span className="text-[var(--yellow)]">in Meerut</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            From premium highway hoardings to high-ranking websites — World Media NCR is your one-stop partner for outdoor advertising, web development, design, and digital marketing in Meerut & NCR.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-8 py-4 rounded-xl font-extrabold text-base transition shadow-lg hover:scale-105 flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+919456497636" className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-xl font-bold text-base transition backdrop-blur-sm flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 94564 97636
            </a>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--yellow-dark)] mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] mb-4 tracking-tight">
            Four Service Categories, Infinite Possibilities
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every service is meticulously crafted for Meerut & NCR businesses — with transparent pricing, measurable results, and dedicated support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {serviceCategories.map((cat) => {
            const colors = catIconColors[cat.slug] || { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', accent: 'border-t-slate-400' };
            return (
              <div key={cat.slug} className={`group bg-white rounded-3xl border border-[#D8EAFD] border-t-4 ${colors.accent} p-8 hover:shadow-2xl transition-all duration-300 flex flex-col`}>
                {/* Category header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-14 h-14 ${colors.bg} ${colors.border} border rounded-2xl flex items-center justify-center shrink-0`}>
                    <CategoryIconComp icon={cat.icon} className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-[#0A173E] mb-1">{cat.name}</h2>
                    <p className="text-sm font-semibold text-slate-500">{cat.tagline}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{cat.description}</p>

                {/* Sub-services list */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {cat.services.slice(0, 6).map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${cat.slug}/${svc.slug}`}
                      className="group/svc flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0A173E] py-1.5 px-2 rounded-lg hover:bg-[#F0F8FF] transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 shrink-0 opacity-50 group-hover/svc:opacity-100 group-hover/svc:translate-x-0.5 transition-transform" />
                      {svc.name}
                      {svc.badge && (
                        <span className="ml-1 text-[9px] font-extrabold bg-[var(--yellow)] text-[#0A173E] px-1.5 py-0.5 rounded-full">
                          {svc.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/services/${cat.slug}`}
                  className="flex items-center justify-center gap-2 bg-[#0A173E] hover:bg-[#0D1C4D] text-white py-3 px-6 rounded-xl font-bold text-sm transition group-hover:bg-[var(--yellow)] group-hover:text-[#0A173E]"
                >
                  Explore {cat.name}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F0F8FF] border-y border-[#D8EAFD] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] mb-3">
              Why Choose <span className="text-[var(--yellow-dark)]">World Media NCR</span>?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">One agency, unlimited capabilities — 12+ years of delivering results in Meerut & NCR</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="w-6 h-6" />, title: '12+ Years Experience', desc: 'Deep roots in the Meerut market since 2013 — unmatched local knowledge and network' },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: 'End-to-End Solutions', desc: 'From outdoor hoardings to websites to digital ads — one partner for all your marketing needs' },
              { icon: <Zap className="w-6 h-6" />, title: 'Fast Delivery', desc: 'Quick turnaround times without compromising on quality — websites in days, campaigns in hours' },
              { icon: <Phone className="w-6 h-6" />, title: 'Dedicated Support', desc: 'Personal account manager assigned to every client — responsive team available 6 days a week' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-[#D8EAFD] p-6 text-center hover:shadow-md transition">
                <div className="w-12 h-12 bg-[#0A173E] rounded-xl flex items-center justify-center mx-auto mb-4 text-[var(--yellow)]">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-[#0A173E] mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#0A173E]">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="p-6 bg-[#F0F8FF] rounded-2xl border border-[#D8EAFD]">
              <h3 className="text-lg font-extrabold text-[#0A173E] mb-2">{faq.question}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-[#0A173E] via-[#0D1C4D] to-[#060E27] text-white rounded-3xl p-8 sm:p-12 border border-[#182859] shadow-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Start a Project Today</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation from Meerut&apos;s most trusted advertising & digital partner. We respond within 2 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] px-10 py-4 rounded-xl font-extrabold text-lg transition shadow-xl hover:scale-105 flex items-center gap-2">
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/919456497636" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-10 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
