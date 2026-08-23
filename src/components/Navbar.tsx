"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Add timeout ref for dropdown closing
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Service links for dropdown
  const services = [
    { name: "All Services", path: "/services" },
    { name: "Digital Wall Painting", path: "/services/digital-wall-painting-meerut" },
    { name: "Hoarding Advertising", path: "/services/hoarding-advertising-meerut" },
    { name: "Billboard Advertising", path: "/services/billboard-advertising-meerut" },
    { name: "Vehicle Branding", path: "/services/vehicle-branding-meerut" },
    { name: "Flex Printing", path: "/services/flex-printing-meerut" },
    { name: "LED Display Advertising", path: "/services/led-display-advertising-meerut" },
    { name: "Political Advertising", path: "/services/political-advertising-meerut" },
  ];

  // Handlers for smooth dropdown transition
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150); // Small delay to allow moving to dropdown
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11">
            <Image
              src="/images/website/logo2.png"
              alt="World Media Advertising Solutions"
              fill
              priority
              className="object-contain"
            />
          </div>

          <span className="text-2xl font-bold text-yellow-400 tracking-wide">
            World Media
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className={`relative font-semibold transition duration-300 group ${
              isScrolled
                ? "text-black hover:text-yellow-500"
                : "text-black hover:text-yellow-400"
            }`}
          >
            Home
            <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Services Dropdown - Fixed gap issue */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`relative font-semibold transition duration-300 group flex items-center gap-1 py-2 ${
                isScrolled
                  ? "text-black hover:text-yellow-500"
                  : "text-black hover:text-yellow-400"
              }`}
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
              <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* Dropdown Menu - Dark theme with no gap */}
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 w-72 bg-gray-900 rounded-lg shadow-xl py-2 z-50 border border-gray-700">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.path}
                    className={`block px-4 py-2.5 transition-colors duration-200 ${
                      service.name === "All Services" 
                        ? "text-yellow-400 border-b border-gray-700 mb-1 hover:bg-gray-800 hover:text-yellow-300" 
                        : "text-gray-200 hover:bg-gray-800 hover:text-yellow-400"
                    }`}
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className={`relative font-semibold transition duration-300 group ${
              isScrolled
                ? "text-black hover:text-yellow-500"
                : "text-black hover:text-yellow-400"
            }`}
          >
            Gallery
            <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/locations"
            className={`relative font-semibold transition duration-300 group ${
              isScrolled ? "text-black hover:text-yellow-500" : "text-black hover:text-yellow-400"
            }`}
          >
            Locations
            <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/blog"
            className={`relative font-semibold transition duration-300 group ${
              isScrolled ? "text-black hover:text-yellow-500" : "text-black hover:text-yellow-400"
            }`}
          >
            Blog
            <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/clients"
            className={`relative font-semibold transition duration-300 group ${
              isScrolled
                ? "text-black hover:text-yellow-500"
                : "text-black hover:text-yellow-400"
            }`}
          >
            Clients
            <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/contact"
            className={`relative font-semibold transition duration-300 group ${
              isScrolled
                ? "text-black hover:text-yellow-500"
                : "text-black hover:text-yellow-400"
            }`}
          >
            Contact
            <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block h-[3px] w-6 bg-black transition ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-6 bg-black transition ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-6 bg-black transition ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu with Services Submenu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl mt-4 p-6">
          <div className="flex flex-col gap-6 text-lg">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="text-white hover:text-yellow-400 w-full text-left flex justify-between items-center"
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
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
                <div className="ml-4 mt-3 space-y-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                      className={`block py-1.5 text-base ${
                        service.name === "All Services"
                          ? "text-yellow-400 font-semibold"
                          : "text-gray-300 hover:text-yellow-400"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">
              Gallery
            </Link>
            <Link href="/locations" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">
              Locations
            </Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">
              Blog
            </Link>
            <Link href="/clients" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">
              Clients
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
