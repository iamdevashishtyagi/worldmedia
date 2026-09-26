// src/components/Hero.tsx
"use client";

import Link from "next/link";
import TiltUnipole from "@/components/TiltUnipole";

function ArrowRightIcon({ className = "icon icon-arrow-right" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function QuoteIcon({ className = "icon icon-quote" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="13" y2="13" />
    </svg>
  );
}

function WhatsAppIcon({ className = "icon" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444" />
    </svg>
  );
}

const serviceTags = [
  "Highway Unipoles",
  "Arterial Hoardings",
  "Digital Wall Painting",
  "Vehicle Fleet",
  "LED Digital Screens",
];

export default function Hero() {
  return (
    <section className="hero-clean">
      <div className="wrap">
        {/* Left Column: Focused, Tightly Spaced & High-Impact Content */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow badge */}
          <div className="mb-2">
            <span className="eyebrow">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              World Media NCR · Premier Outdoor Media Network · Estd. 2013
            </span>
          </div>

          {/* Main Headline */}
          <h1>
            Best advertising agency in <em>Meerut &amp; Delhi NCR</em>.
          </h1>

          {/* Lead Paragraph */}
          <p className="lead">
            Recognized as the top outdoor advertising company since 2013. Prime highway hoardings, arterial unipoles, LED displays, and digital wall painting across
            the Delhi-Meerut Expressway and Western UP — 100% legal, certified, and engineered for maximum brand recall.
          </p>

          {/* Service Format Highlights - compact & structured */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
            <span className="text-[0.68rem] uppercase font-bold tracking-wider text-slate-500 mr-1">
              Core Networks:
            </span>
            {serviceTags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center text-[0.72rem] font-semibold px-2.5 py-1 rounded bg-white border border-[#D8EAFD] text-slate-800 shadow-2xs hover:border-[var(--yellow)] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="row">
            <Link href="/locations" className="btn">
              <span>Explore Locations</span>
              <ArrowRightIcon />
            </Link>

            <Link href="/contact" className="btn ghost">
              <span>Request a Quote</span>
              <QuoteIcon />
            </Link>

            <a
              href="https://wa.me/919456497636?text=Hi%20World%20Media%20NCR%2C%20I%20want%20to%20inquire%20about%20hoardings%20and%20advertising%20locations."
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
              title="Chat on WhatsApp"
            >
              <span>WhatsApp</span>
              <WhatsAppIcon className="icon text-[#25D366]" />
            </a>
          </div>

          {/* Direct Line Note */}
          <div className="text-xs text-slate-600 -mt-2 mb-3 flex flex-wrap items-center gap-2">
            <span>Direct Desk:</span>
            <a
              href="tel:+919456497636"
              className="font-bold text-slate-900 hover:text-yellow-600 transition-colors underline decoration-slate-300"
            >
              +91 94564 97636
            </a>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="text-slate-500">Fast 4h site availability &amp; rate proposal</span>
          </div>

          {/* Proof Points Strip - Compact & balanced */}
          <div className="hero-props-compact">
            <div>
              <b>12+ Years</b>
              <p>Estd. 2013 · Meerut HQ</p>
            </div>
            <div>
              <b>500+ Prime Sites</b>
              <p>NE-3 &amp; Arterial Highways</p>
            </div>
            <div>
              <b>100% Permitted</b>
              <p>Nagar Nigam &amp; NHAI Clear</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Section Pole showing hero-bg.png */}
        <div className="relative flex flex-col items-center justify-center pt-2 pb-16 sm:pb-20 w-full">
          <Link
            href="/locations"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl group block cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            title="Click to view prime hoarding locations"
          >
            {/* Direct display of hero-bg.png inside the pole component */}
            <TiltUnipole
              image="/images/website/hero-bg.png"
              tilt="left"
              title="World Media NCR - Outdoor Billboard Advertising"
            />
          </Link>

          {/* Floating Stamp Badge on the Hoarding Pole */}
          <div className="absolute right-2 sm:right-6 bottom-4 sm:bottom-6 bg-white border-2 border-[var(--yellow)] px-3.5 py-1.5 rounded shadow-lg flex flex-col gap-0.5 z-20 pointer-events-none">
            <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[#CA8A04]">
              Direct Ownership
            </span>
            <b className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
              500+ Prime Sites
            </b>
          </div>

          {/* Live site caption tag */}
          <div className="mt-14 sm:mt-16 inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-[#D8EAFD] px-3.5 py-1 rounded-full text-xs font-semibold text-slate-700 shadow-xs z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Prime Commercial Hub · High-Impact Urban LED Display</span>
          </div>
        </div>
      </div>
    </section>
  );
}