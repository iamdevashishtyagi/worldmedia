// src/components/AboutSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#0A173E] tracking-tight">
              About World Media NCR
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Founded in 2013, <strong>World Media NCR</strong> is Meerut&apos;s leading outdoor advertising and hoarding agency. For more than 12 years, we have helped businesses, brands, and institutions establish undeniable market presence across Meerut, Delhi NCR, and Western Uttar Pradesh.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Under the visionary leadership of <strong>Shrikant Tyagi</strong>, we manage an extensive portfolio of high-visibility highway unipoles, arterial city hoardings, transit vehicle wraps, and wide-coverage digital wall paintings.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { num: "500+", label: "Completed Campaigns" },
                { num: "100+", label: "Corporate Clients" },
                { num: "12+", label: "Years Experience" },
                { num: "100%", label: "Legal Permitted Sites" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center p-4 bg-[#F0F8FF] rounded-xl border border-[#D8EAFD] hover:border-[var(--yellow)] transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ amount: 0.3 }}
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0A173E] mb-1">{item.num}</div>
                  <div className="text-slate-700 text-xs sm:text-sm font-semibold">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#0A173E] hover:bg-[#132456] text-white font-bold py-3.5 px-8 rounded-xl transition duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <span>Learn More About Our Agency</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Column: Founder Photo Card */}
          <motion.div
            className="relative h-96 sm:h-[460px] w-full group"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          >
            <Image
              src='/images/website/profilepic.webp'
              alt='Shrikant Tyagi - Founder & CEO of World Media NCR'
              fill
              className="object-cover rounded-2xl shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold">Shrikant Tyagi</h3>
                <p className="text-yellow-400 font-medium">Founder &amp; CEO, World Media NCR</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
