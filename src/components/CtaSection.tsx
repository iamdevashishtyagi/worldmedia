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
        <motion.div className="mt-6 flex flex-col items-center gap-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <span className="text-sm opacity-90">Or message us on WhatsApp:</span>
          <a href="https://wa.me/919897907308" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444"/></svg>Chat on WhatsApp</a>
        </motion.div>
        <motion.div className="mt-10 text-xs md:text-sm opacity-80" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <Link href="https://iamdevashishtyagi.github.io/" target="_blank" className="hover:text-yellow-400 transition duration-300" >🚀 <span>Developed by</span> <strong>Devashish Tyagi</strong></Link>
        </motion.div>
      </motion.div>
    </section>
  );
}