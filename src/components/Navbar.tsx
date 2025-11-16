"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-blue-900/95 to-gray-900 backdrop-blur-md text-white p-4 z-50 shadow-xl border-b border-blue-400/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          World Media
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/"
            className="hover:text-yellow-400 transition-all duration-300 font-semibold"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-yellow-400 transition-all duration-300 font-semibold"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="hover:text-yellow-400 transition-all duration-300 font-semibold"
          >
            Gallery
          </Link>
          <Link
            href="/clients"
            className="hover:text-yellow-400 transition-all duration-300 font-semibold"
          >
            Clients
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-400 transition-all duration-300 font-semibold"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none hover:text-yellow-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md p-4 rounded-lg shadow-xl border border-blue-400/20 mt-2">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-yellow-400 transition-all duration-300 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-yellow-400 transition-all duration-300 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="hover:text-yellow-400 transition-all duration-300 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/clients"
              className="hover:text-yellow-400 transition-all duration-300 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-400 transition-all duration-300 font-semibold py-2"
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