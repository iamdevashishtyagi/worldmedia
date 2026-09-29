// src/components/SiteFooter.tsx
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Code2,
  Megaphone,
  Palette,
  TrendingUp,
  Clock,
  ShieldCheck,
  Award,
  ExternalLink,
} from 'lucide-react';
import { serviceCategories } from '@/data/serviceCategories';
import { locationsData } from '@/data/locations';

export default function SiteFooter() {
  const outdoorCategory = serviceCategories.find((c) => c.slug === 'outdoor-advertising');
  const devCategory = serviceCategories.find((c) => c.slug === 'development');
  const designCategory = serviceCategories.find((c) => c.slug === 'designing');
  const digitalCategory = serviceCategories.find((c) => c.slug === 'digital-advertising');

  return (
    <footer className="bg-[#050B1E] text-slate-300 border-t border-[#14234B] relative overflow-hidden">
      {/* Decorative gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-1 bg-gradient-to-r from-transparent via-[var(--yellow)]/60 to-transparent" />

      {/* Top CTA / Consultation Strip */}

      {/* Main 5-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Direct Contact (Width 4 on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <Link href="/" className="inline-block">
                <span className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                  World Media <span className="text-[var(--yellow)]">NCR</span>
                </span>
              </Link>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[var(--yellow)]/15 text-[var(--yellow)] font-bold text-[11px] uppercase tracking-wider">
                  Est. 2013
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Outdoor • Web Dev • Design • Digital Ads
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Western UP & NCR’s premier integrated marketing agency. Providing 100% legal, high-visibility outdoor hoardings, fast custom website development, creative brand identities, and targeted digital marketing campaigns.
            </p>

            {/* Contact details */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--yellow)] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  Office Opp. GIC, Dharam Palace, Begum Bridge Road, Meerut, UP – 250001
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--yellow)] shrink-0" />
                <div className="flex flex-wrap gap-x-2">
                  <a href="tel:+919456497636" className="text-white hover:text-[var(--yellow)] font-semibold transition">
                    +91 94564 97636
                  </a>
                  <span className="text-slate-500">•</span>
                  <a href="tel:+919897907308" className="text-slate-300 hover:text-[var(--yellow)] transition">
                    +91 98979 07308
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--yellow)] shrink-0" />
                <a href="mailto:worldmediancr@gmail.com" className="text-slate-300 hover:text-[var(--yellow)] transition font-medium">
                  worldmediancr@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400 text-xs">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 8:30 PM (Direct Support)</span>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1 bg-[#0A173E] px-2.5 py-1 rounded-md border border-[#182859]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                MNC & Govt Verified Media
              </span>
              <span className="inline-flex items-center gap-1 bg-[#0A173E] px-2.5 py-1 rounded-md border border-[#182859]">
                <Award className="w-3.5 h-3.5 text-[var(--yellow)]" />
                12+ Years Industry Trust
              </span>
            </div>
          </div>

          {/* Column 2: Outdoor Advertising (Width 2 on lg) */}
          <div className="lg:col-span-2">
            <Link
              href="/services/outdoor-advertising"
              className="group inline-flex items-center gap-1.5 font-bold text-white text-xs uppercase tracking-wider mb-4 hover:text-[var(--yellow)] transition"
            >
              <Megaphone className="w-3.5 h-3.5 text-[var(--yellow)]" />
              <span>Outdoor Advertising</span>
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
            </Link>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {outdoorCategory?.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/outdoor-advertising/${s.slug}`}
                    className="text-slate-400 hover:text-white transition flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{s.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link
                  href="/services/outdoor-advertising"
                  className="text-[var(--yellow)] hover:underline font-semibold text-xs inline-flex items-center gap-1"
                >
                  <span>All Outdoor Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Web Development & Softwares (Width 2 on lg) */}
          <div className="lg:col-span-2">
            <Link
              href="/services/development"
              className="group inline-flex items-center gap-1.5 font-bold text-white text-xs uppercase tracking-wider mb-4 hover:text-blue-400 transition"
            >
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Web Development</span>
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
            </Link>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {devCategory?.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/development/${s.slug}`}
                    className="text-slate-400 hover:text-white transition flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{s.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/developer"
                  className="text-slate-400 hover:text-white transition group flex items-center gap-1"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Developer Portfolio</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li className="pt-1.5">
                <Link
                  href="/services/development"
                  className="text-blue-400 hover:underline font-semibold text-xs inline-flex items-center gap-1"
                >
                  <span>All Web Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Design & Digital Advertising (Width 2 on lg) */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link
                href="/services/designing"
                className="group inline-flex items-center gap-1.5 font-bold text-white text-xs uppercase tracking-wider mb-3 hover:text-orange-400 transition"
              >
                <Palette className="w-3.5 h-3.5 text-orange-400" />
                <span>Designing</span>
              </Link>
              <ul className="space-y-2 text-xs sm:text-sm">
                {designCategory?.services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/designing/${s.slug}`}
                      className="text-slate-400 hover:text-white transition block hover:translate-x-0.5 transition-transform"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link
                href="/services/digital-advertising"
                className="group inline-flex items-center gap-1.5 font-bold text-white text-xs uppercase tracking-wider mb-3 hover:text-emerald-400 transition"
              >
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Digital Advertising</span>
              </Link>
              <ul className="space-y-2 text-xs sm:text-sm">
                {digitalCategory?.services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/digital-advertising/${s.slug}`}
                      className="text-slate-400 hover:text-white transition block hover:translate-x-0.5 transition-transform"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5: Prime Locations & Company Links (Width 2 on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Service Locations
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                {locationsData.slice(0, 6).map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="text-slate-400 hover:text-white transition block hover:translate-x-0.5 transition-transform"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/locations"
                    className="text-[var(--yellow)] hover:underline font-semibold text-xs inline-flex items-center gap-1"
                  >
                    <span>All Locations ({locationsData.length})</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Company Pages
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-white transition block">
                    About Agency
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-slate-400 hover:text-white transition block">
                    Portfolio & Projects
                  </Link>
                </li>
                <li>
                  <Link href="/clients" className="text-slate-400 hover:text-white transition block">
                    Clients & Partners
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-white transition block">
                    Advertising Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-white transition block">
                    Contact & Inquiry
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* High-Intent SEO Keywords / City Tags Strip */}
        <div className="mt-14 pt-8 border-t border-[#14234B]">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
            Popular Searches & Coverage:
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400 leading-relaxed">
            <Link href="/services/outdoor-advertising/hoarding-advertising-meerut" className="hover:text-[var(--yellow)] transition">
              Best Hoarding Advertising in Meerut
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/services/outdoor-advertising/digital-wall-painting-meerut" className="hover:text-[var(--yellow)] transition">
              Digital Wall Painting UP
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/services/development/business-website-development" className="hover:text-blue-400 transition">
              Best Website Development Company Meerut
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/services/development/ecommerce-website-development" className="hover:text-blue-400 transition">
              E-Commerce Store Developers NCR
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/services/designing/logo-design-meerut" className="hover:text-orange-400 transition">
              Logo Design Agency Meerut
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/services/digital-advertising/meta-ads-management" className="hover:text-emerald-400 transition">
              Meta Facebook & Instagram Ads Meerut
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/services/development/web-software-development" className="hover:text-blue-400 transition">
              Custom Management Systems & ERP
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/locations/delhi-ncr" className="hover:text-white transition">
              Outdoor Hoardings Delhi-Meerut Expressway
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/services/outdoor-advertising/vehicle-branding-meerut" className="hover:text-[var(--yellow)] transition">
              Commercial Auto & Van Transit Branding
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/services/digital-advertising/ai-business-videos" className="hover:text-emerald-400 transition">
              AI Video Production for Business
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Developer Bar */}
      <div className="bg-[#030712] border-t border-[#0F1C3F] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <strong className="text-white">World Media NCR</strong>. All rights reserved.
          </p>

          <p className="text-center text-slate-400 text-[11px] sm:text-xs">
            100% Authorized Outdoor Sites • Custom Web Solutions • ROI Digital Campaigns
          </p>

          {/* Developer Attribution Link */}
          <div className="text-center md:text-right">
            <Link
              href="/developer"
              className="inline-flex items-center gap-1 py-1.5 rounded-lg border border-[#162758] hover:border-[var(--yellow)]/50 text-slate-300 hover:text-[var(--yellow)] transition duration-300 group shadow-sm"
            >
              <span>🚀</span>
              <span>Engineered by</span>
              <strong className="text-white group-hover:text-[var(--yellow)] transition font-bold">
                Devashish Tyagi
              </strong>
              <span className="text-slate-400 hidden sm:inline">• Full Stack Web Developer</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
