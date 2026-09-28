// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { locationsData } from "@/data/locations";
import { serviceCategories } from "@/data/serviceCategories";
import {
  ChevronDown, MapPin, Megaphone, Code2, Palette, TrendingUp,
  Truck, Printer, Monitor, Vote, Globe, ShoppingBag, Settings2,
  LayoutTemplate, Sparkles, Layers, Image as ImageIcon, Target,
  Play, Clapperboard, Brush, PanelTop, ArrowRight,
} from "lucide-react";

function NavIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const p = { className, strokeWidth: 1.75 };
  switch (name) {
    case "Megaphone": return <Megaphone {...p} />;
    case "Code2": return <Code2 {...p} />;
    case "Palette": return <Palette {...p} />;
    case "TrendingUp": return <TrendingUp {...p} />;
    case "Truck": return <Truck {...p} />;
    case "Printer": return <Printer {...p} />;
    case "Monitor": return <Monitor {...p} />;
    case "Vote": return <Vote {...p} />;
    case "Globe": return <Globe {...p} />;
    case "ShoppingBag": return <ShoppingBag {...p} />;
    case "Settings2": return <Settings2 {...p} />;
    case "LayoutTemplate": return <LayoutTemplate {...p} />;
    case "Sparkles": return <Sparkles {...p} />;
    case "Layers": return <Layers {...p} />;
    case "Image": return <ImageIcon {...p} />;
    case "Target": return <Target {...p} />;
    case "Play": return <Play {...p} />;
    case "Clapperboard": return <Clapperboard {...p} />;
    case "Brush": return <Brush {...p} />;
    case "PanelTop": return <PanelTop {...p} />;
    default: return <Sparkles {...p} />;
  }
}

// Category accent colors for the mega panel columns
const catAccents: Record<string, string> = {
  "outdoor-advertising": "border-yellow-400",
  "development": "border-blue-400",
  "designing": "border-orange-400",
  "digital-advertising": "border-emerald-400",
};
const catIconColors: Record<string, string> = {
  "outdoor-advertising": "text-yellow-500 bg-yellow-50",
  "development": "text-blue-500 bg-blue-50",
  "designing": "text-orange-500 bg-orange-50",
  "digital-advertising": "text-emerald-500 bg-emerald-50",
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile accordion state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);

  // Track last visited path for contact form auto-fill
  useEffect(() => {
    if (pathname && !pathname.startsWith("/contact") && typeof window !== "undefined") {
      try {
        sessionStorage.setItem("wm_last_visited_path", pathname);
      } catch {
        // Ignore if blocked
      }
    }
  }, [pathname]);

  // Services mega-menu state
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesCloseTimer = useRef<NodeJS.Timeout | null>(null);

  // Locations dropdown state
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const locationsRef = useRef<HTMLDivElement>(null);
  const locationsCloseTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
      if (locationsCloseTimer.current) clearTimeout(locationsCloseTimer.current);
    };
  }, []);

  const openServices = () => {
    if (servicesCloseTimer.current) { clearTimeout(servicesCloseTimer.current); servicesCloseTimer.current = null; }
    setIsServicesOpen(true);
  };
  const closeServices = () => {
    servicesCloseTimer.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const openLocations = () => {
    if (locationsCloseTimer.current) { clearTimeout(locationsCloseTimer.current); locationsCloseTimer.current = null; }
    setIsLocationsOpen(true);
  };
  const closeLocations = () => {
    locationsCloseTimer.current = setTimeout(() => setIsLocationsOpen(false), 150);
  };

  const locations = locationsData.map((l) => ({ name: l.name, path: `/locations/${l.slug}` }));

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md transition-all duration-300 py-3 ${
        isScrolled ? "shadow-sm border-b border-[#D8EAFD]" : "border-b border-[#D8EAFD]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
            <Image
              src="/images/website/logo2.png"
              alt="World Media NCR Advertising Solutions"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight leading-none">
              <span className="text-[#0A173E]">World</span>{" "}
              <span className="text-[#CA8A04]">Media</span>
            </span>
            <span className="text-[0.62rem] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
              NCR Outdoor Media
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          <Link href="/" className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group text-sm">
            Home
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Services Mega Menu Trigger */}
          <div ref={servicesRef} className="relative" onMouseEnter={openServices} onMouseLeave={closeServices}>
            <button className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group flex items-center gap-1 py-1 text-sm cursor-pointer">
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-[#0A173E]" : "text-slate-500"}`} />
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* MEGA MENU PANEL */}
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                {/* Invisible bridge to prevent hover gap */}
                <div className="absolute -top-2 left-0 right-0 h-2" />
                <div className="bg-white rounded-2xl shadow-2xl border border-[#D8EAFD] overflow-hidden"
                  style={{ width: "min(90vw, 880px)" }}
                >
                  {/* Mega header */}
                  <div className="bg-[#0A173E] px-6 py-4 flex items-center justify-between">
                    <div>
                      <p className="text-white font-extrabold text-base">All Services</p>
                      <p className="text-slate-400 text-xs mt-0.5">Advertising, Development, Design & Digital</p>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-center gap-1.5 text-[var(--yellow)] text-xs font-bold hover:underline"
                    >
                      View All <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* 4-column category grid */}
                  <div className="grid grid-cols-4 divide-x divide-[#D8EAFD]">
                    {serviceCategories.map((cat) => (
                      <div key={cat.slug} className={`p-4 border-t-2 ${catAccents[cat.slug] || "border-slate-200"}`}>
                        {/* Category header */}
                        <Link
                          href={`/services/${cat.slug}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-2 mb-3 group/catlink"
                        >
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${catIconColors[cat.slug] || "text-slate-600 bg-slate-100"}`}>
                            <NavIcon name={cat.icon} className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-extrabold text-[#0A173E] group-hover/catlink:text-[var(--yellow-dark)] transition leading-tight">
                            {cat.name}
                          </span>
                        </Link>

                        {/* Sub-services */}
                        <div className="space-y-1">
                          {cat.services.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services/${cat.slug}/${svc.slug}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="group/svclink flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#F0F8FF] transition-colors duration-150"
                            >
                              <NavIcon name={svc.icon} className="w-3 h-3 text-slate-400 group-hover/svclink:text-[#0A173E] shrink-0" />
                              <span className="text-[11px] font-medium text-slate-700 group-hover/svclink:text-[#0A173E] leading-tight">
                                {svc.name}
                              </span>
                              {svc.badge && (
                                <span className="ml-auto text-[9px] font-extrabold text-[#0A173E] bg-[var(--yellow)] px-1.5 py-0.5 rounded-full shrink-0">
                                  {svc.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div ref={locationsRef} className="relative" onMouseEnter={openLocations} onMouseLeave={closeLocations}>
            <button className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group flex items-center gap-1 py-1 text-sm cursor-pointer">
              Locations
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLocationsOpen ? "rotate-180 text-[#0A173E]" : "text-slate-500"}`} />
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full" />
            </button>

            {isLocationsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl z-50 border border-[#D8EAFD] animate-in fade-in slide-in-from-top-1 duration-200 overflow-hidden">
                <div className="absolute -top-2 left-0 right-0 h-2" />
                <Link
                  href="/locations"
                  onClick={() => setIsLocationsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-[#0A173E] font-extrabold text-xs border-b border-[#D8EAFD] hover:bg-[#F0F8FF] hover:text-[#CA8A04] transition-colors"
                >
                  <span>All Locations</span>
                  <MapPin className="w-3.5 h-3.5" />
                </Link>
                <div className="py-1 max-h-80 overflow-y-auto">
                  {locations.map((loc) => (
                    <Link
                      key={loc.path}
                      href={loc.path}
                      onClick={() => setIsLocationsOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-[#F0F8FF] hover:text-[#0A173E] transition-colors duration-150"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/gallery" className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group text-sm">
            Gallery
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/blog" className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group text-sm">
            Blog
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/about" className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group text-sm">
            About
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all shadow-xs hover:shadow-md hover:scale-105"
          >
            Get Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-slate-100 transition p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block h-0.5 w-6 bg-[#0A173E] transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#0A173E] transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#0A173E] transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A173E] text-white mt-3 shadow-2xl border-t border-[#182859] max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col text-base">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[var(--yellow)] font-semibold transition px-6 py-3 border-b border-[#182859]">
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border-b border-[#182859]">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-white w-full text-left flex justify-between items-center font-semibold px-6 py-3 cursor-pointer hover:text-[var(--yellow)] transition"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="bg-[#060E27]">
                  <Link
                    href="/services"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-8 py-3 text-[var(--yellow)] font-bold text-sm border-b border-[#182859]"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    All Services Overview
                  </Link>

                  {serviceCategories.map((cat) => (
                    <div key={cat.slug} className="border-b border-[#182859]">
                      <button
                        onClick={() => setMobileCategoryOpen(mobileCategoryOpen === cat.slug ? null : cat.slug)}
                        className="flex items-center justify-between w-full px-8 py-2.5 text-sm font-bold text-slate-200 hover:text-[var(--yellow)] transition cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <NavIcon name={cat.icon} className="w-3.5 h-3.5" />
                          {cat.name}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${mobileCategoryOpen === cat.slug ? "rotate-180" : ""}`} />
                      </button>

                      {mobileCategoryOpen === cat.slug && (
                        <div className="bg-[#0A173E]/50 pb-2">
                          <Link
                            href={`/services/${cat.slug}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-10 py-2 text-xs text-[var(--yellow)] font-bold hover:underline"
                          >
                            → View All {cat.name}
                          </Link>
                          {cat.services.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services/${cat.slug}/${svc.slug}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-12 py-1.5 text-xs text-blue-200 hover:text-[var(--yellow)] transition"
                            >
                              {svc.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Locations */}
            <div className="border-b border-[#182859]">
              <button
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                className="text-white w-full text-left flex justify-between items-center font-semibold px-6 py-3 cursor-pointer hover:text-[var(--yellow)] transition"
              >
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileLocationsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileLocationsOpen && (
                <div className="bg-[#060E27] pb-2">
                  <Link href="/locations" onClick={() => setIsMenuOpen(false)} className="block px-8 py-2 text-[var(--yellow)] font-bold text-sm border-b border-[#182859]">
                    All Locations
                  </Link>
                  {locations.slice(0, 12).map((loc) => (
                    <Link key={loc.path} href={loc.path} onClick={() => setIsMenuOpen(false)} className="block px-10 py-1.5 text-xs text-blue-200 hover:text-[var(--yellow)] transition">
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[var(--yellow)] font-semibold transition px-6 py-3 border-b border-[#182859]">Gallery</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[var(--yellow)] font-semibold transition px-6 py-3 border-b border-[#182859]">Blog</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[var(--yellow)] font-semibold transition px-6 py-3 border-b border-[#182859]">About Agency</Link>
            <div className="px-6 py-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] font-extrabold py-3 px-6 rounded-xl transition"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
