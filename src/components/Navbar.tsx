"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change state when scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 z-50 shadow-xl border-b border-blue-400/20 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 text-black shadow-lg"
        : "backdrop-blur-md text-white"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-yellow-400" : "text-yellow-400"
          }`}
        >
          World Media
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/"
            className={`transition-all duration-300 font-semibold ${
              isScrolled 
                ? "text-black hover:text-yellow-500"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`transition-all duration-300 font-semibold ${
              isScrolled 
                ? "text-black hover:text-yellow-500"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className={`transition-all duration-300 font-semibold ${
              isScrolled 
                ? "text-black hover:text-yellow-500"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/clients"
            className={`transition-all duration-300 font-semibold ${
              isScrolled 
                ? "text-black hover:text-yellow-500"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Clients
          </Link>
          <Link
            href="/contact"
            className={`transition-all duration-300 font-semibold ${
              isScrolled 
                ? "text-black hover:text-yellow-500"
                : "text-white hover:text-yellow-400"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl focus:outline-none transition-colors duration-300 ${
            isScrolled 
              ? "text-white hover:text-yellow-400" 
              : "text-white hover:text-yellow-400"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden p-4 rounded-lg shadow-xl border border-blue-400/20 mt-2 transition-all duration-300 ${
          isScrolled 
            ? "bg-gray-900/95 backdrop-blur-md" 
            : "bg-gray-900/95 backdrop-blur-md"
        }`}>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/clients"
              className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}