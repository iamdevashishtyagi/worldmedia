// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track the user's current browsing page in sessionStorage so the contact form can auto-fill context
  useEffect(() => {
    if (pathname && !pathname.startsWith("/contact") && typeof window !== "undefined") {
      try {
        sessionStorage.setItem("wm_last_visited_path", pathname);
      } catch {
        // Ignore sessionStorage restrictions if cookies/storage blocked
      }
    }
  }, [pathname]);
  
  // Services dropdown state & refs
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Locations dropdown state & refs
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);
  const locationsCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (servicesCloseTimeoutRef.current) {
        clearTimeout(servicesCloseTimeoutRef.current);
      }
      if (locationsCloseTimeoutRef.current) {
        clearTimeout(locationsCloseTimeoutRef.current);
      }
    };
  }, []);

  // Dynamic Service links derived automatically from servicesData
  const services = [
    { name: "All Services", path: "/services" },
    ...servicesData.map((s) => ({
      name: s.name,
      path: `/services/${s.slug}`,
    })),
  ];

  // Dynamic Location links derived automatically from locationsData
  const locations = [
    { name: "All Locations", path: "/locations" },
    ...locationsData.map((l) => ({
      name: l.name,
      path: `/locations/${l.slug}`,
    })),
  ];

  // Handlers for Services dropdown transition
  const handleServicesMouseEnter = () => {
    if (servicesCloseTimeoutRef.current) {
      clearTimeout(servicesCloseTimeoutRef.current);
      servicesCloseTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesCloseTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  // Handlers for Locations dropdown transition
  const handleLocationsMouseEnter = () => {
    if (locationsCloseTimeoutRef.current) {
      clearTimeout(locationsCloseTimeoutRef.current);
      locationsCloseTimeoutRef.current = null;
    }
    setIsLocationsDropdownOpen(true);
  };

  const handleLocationsMouseLeave = () => {
    locationsCloseTimeoutRef.current = setTimeout(() => {
      setIsLocationsDropdownOpen(false);
    }, 150);
  };

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
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/"
            className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group text-sm"
          >
            Home
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Services Dropdown */}
          <div
            ref={servicesDropdownRef}
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group flex items-center gap-1 py-1 text-sm cursor-pointer"
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isServicesDropdownOpen ? "rotate-180 text-[#0A173E]" : "text-slate-500"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* Dropdown Menu - Clean white & Alice Blue theme */}
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl py-2 z-50 border border-[#D8EAFD] animate-in fade-in slide-in-from-top-1 duration-200">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.path}
                    className={`block px-4 py-2.5 text-xs sm:text-sm transition-colors duration-200 ${
                      service.name === "All Services" 
                        ? "text-[#0A173E] font-bold border-b border-[#D8EAFD] mb-1 hover:bg-[#F0F8FF] hover:text-[#CA8A04]" 
                        : "text-slate-700 font-medium hover:bg-[#F0F8FF] hover:text-[#0A173E]"
                    }`}
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div
            ref={locationsDropdownRef}
            className="relative"
            onMouseEnter={handleLocationsMouseEnter}
            onMouseLeave={handleLocationsMouseLeave}
          >
            <button
              className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group flex items-center gap-1 py-1 text-sm cursor-pointer"
            >
              Locations
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isLocationsDropdownOpen ? "rotate-180 text-[#0A173E]" : "text-slate-500"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* Dropdown Menu - Clean white & Alice Blue theme */}
            {isLocationsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-2 z-50 border border-[#D8EAFD] animate-in fade-in slide-in-from-top-1 duration-200">
                {locations.map((loc, index) => (
                  <Link
                    key={index}
                    href={loc.path}
                    className={`block px-4 py-2.5 text-xs sm:text-sm transition-colors duration-200 ${
                      loc.name === "All Locations" 
                        ? "text-[#0A173E] font-bold border-b border-[#D8EAFD] mb-1 hover:bg-[#F0F8FF] hover:text-[#CA8A04]" 
                        : "text-slate-700 font-medium hover:bg-[#F0F8FF] hover:text-[#0A173E]"
                    }`}
                    onClick={() => setIsLocationsDropdownOpen(false)}
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group text-sm"
          >
            Gallery
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/blog"
            className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group text-sm"
          >
            Blog
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/clients"
            className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group text-sm"
          >
            Clients
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/about"
            className="relative font-semibold text-slate-800 hover:text-[#0A173E] transition duration-200 group text-sm"
          >
            About
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-[var(--yellow)] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Quick CTA button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all shadow-xs hover:shadow-md hover:scale-105"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-slate-100 transition p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#0A173E] transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-[#0A173E] transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-[#0A173E] transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu with Services & Locations Submenus */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A173E] text-white mt-3 p-6 shadow-2xl border-t border-[#182859]">
          <div className="flex flex-col gap-4 text-base">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[var(--yellow)] font-semibold transition py-1">
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="border-t border-[#182859] pt-2">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="text-white hover:text-[var(--yellow)] w-full text-left flex justify-between items-center font-semibold cursor-pointer py-1"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="ml-3 mt-2 space-y-2 border-l-2 border-[#182859] pl-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                      className={`block py-1 text-sm ${
                        service.name === "All Services"
                          ? "text-[var(--yellow)] font-bold"
                          : "text-blue-100 hover:text-[var(--yellow)]"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Locations Dropdown */}
            <div className="border-t border-b border-[#182859] py-2">
              <button
                onClick={() => setIsLocationsDropdownOpen(!isLocationsDropdownOpen)}
                className="text-white hover:text-[var(--yellow)] w-full text-left flex justify-between items-center font-semibold cursor-pointer py-1"
              >
                Locations
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLocationsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLocationsDropdownOpen && (
                <div className="ml-3 mt-2 space-y-2 border-l-2 border-[#182859] pl-3">
                  {locations.map((loc, index) => (
                    <Link
                      key={index}
                      href={loc.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsLocationsDropdownOpen(false);
                      }}
                      className={`block py-1 text-sm ${
                        loc.name === "All Locations"
                          ? "text-[var(--yellow)] font-bold"
                          : "text-blue-100 hover:text-[var(--yellow)]"
                      }`}
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[var(--yellow)] font-semibold transition py-1">
              Gallery
            </Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[var(--yellow)] font-semibold transition py-1">
              Blog
            </Link>
            <Link href="/clients" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[var(--yellow)] font-semibold transition py-1">
              Clients
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[var(--yellow)] font-semibold transition py-1">
              About Agency
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] font-extrabold py-3 px-6 rounded-xl transition"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
