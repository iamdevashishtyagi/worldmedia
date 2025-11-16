// src/components/CtaSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="w-full pt-15 pb-5 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <motion.div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Join hundreds of satisfied clients who have transformed their
          advertising with World Media. Get started with a free consultation
          today.
        </p>
        <motion.div className="flex gap-3 justify-center items-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
          <Link href="/contact" className="w-1/2 md:w-auto text-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 md:py-4 md:px-10 rounded-full text-xs md:text-lg transition duration-300 shadow-lg hover:shadow-xl">Get Free Consultation</Link>
          <Link href="/gallery" className="w-1/2 md:w-auto text-center border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-4 md:py-4 md:px-10 rounded-full text-xs md:text-lg transition duration-300">View Our Work</Link>
        </motion.div>
        <motion.p className="text-sm mt-8 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 opacity-90" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <span>Or call us directly:</span>
          <strong className="flex flex-wrap justify-center gap-1 sm:gap-2">
            <a href="tel:+919456497636" className="text-white transition-all duration-200 hover:scale-105 hover:font-semibold whitespace-nowrap">+91 94564 96366</a>
            <span className="hidden sm:inline">,</span>
            <a href="tel:+919897907308" className="text-white transition-all duration-200 hover:scale-105 hover:font-semibold whitespace-nowrap">+91 98979 07308</a>
          </strong>
        </motion.p>
        <motion.div className="mt-10 text-xs md:text-sm opacity-80" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <Link href="https://iamdevashishtyagi.github.io/" target="_blank" className="hover:text-yellow-400 transition duration-300" >🚀 <span>Developed by</span> <strong>Devashish Tyagi</strong></Link>
        </motion.div>
      </motion.div>
    </section>
  );
}