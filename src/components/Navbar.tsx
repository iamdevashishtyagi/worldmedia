"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {["Home", "Services", "Gallery", "Clients", "Contact"].map(
            (item, i) => (
              <Link
                key={i}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className={`relative font-semibold transition duration-300 ${
                  isScrolled
                    ? "text-black hover:text-yellow-500"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item}

                {/* Hover underline animation */}
                <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block h-[3px] w-6 bg-white transition ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-6 bg-white transition ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-6 bg-white transition ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl mt-4 p-6">
          <div className="flex flex-col gap-6 text-lg">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">Home</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">Services</Link>
            <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">Gallery</Link>
            <Link href="/clients" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">Clients</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-400">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}