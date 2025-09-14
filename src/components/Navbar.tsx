"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900/90 backdrop-blur-sm text-white p-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-yellow-400">
          WorldMedia
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/clients"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Clients
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/clients"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-400 transition-colors duration-300"
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
