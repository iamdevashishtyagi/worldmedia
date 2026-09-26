// src/components/ClientsSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const allClientLogos = [
  "ambujacement.png",
  "ultratechcement.png",
  "apollopipes.png",
  "jkpipe.png",
  "padmavatipipes.png",
  "apollohospital.svg",
  "jphospital.webp",
  "medantahospitals.png",
  "metrohospitals.png",
  "yasodhahospital.png",
  "jnuuniversity.png",
  "mahaveeruniversity.jpg",
  "motherhooduniversity.webp",
  "patanjali.svg",
  "reliancejwell.png",
  "tanishqjwellers.png",
  "coke.svg",
  "pepsi.png",
  "tatamotors.png",
  "jktyres.jpg",
  "zeemedia.svg"
];

const testimonials = [
  {
    message: "World Media transformed our brand visibility with their innovative campaigns. Highly recommended!",
    name: "Bhutani Infra",
  },
  {
    message: "The campaign delivered exceptional results. Professional service from start to finish.",
    name: "Patanjali",
  },
  {
    message: "Their solutions significantly increased our visibility and customer engagement.",
    name: "Apollo Hospitals",
  },
];

export default function ClientsSection() {
  return (
    <section className="w-full py-16 bg-[#F0F8FF] border-t border-[#D8EAFD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A173E]">Our Esteemed Clients</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-base">Over 100+ prestigious regional and national brands rely on World Media NCR for high-impact outdoor visibility.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {allClientLogos.map((logo, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="flex justify-center items-center p-4 bg-white rounded-xl shadow-2xs border border-[#D8EAFD] hover:border-[var(--yellow)] hover:shadow-md transition-all duration-300 h-28">
              <Image src={`/images/clients/${logo}`} alt={logo} width={200} height={100} className="object-contain w-auto h-16 sm:h-20" quality={100} onError={(e) => {(e.target as HTMLImageElement).src = "/images/clients/placeholder.png"; }}/>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A173E] mt-1">Client Testimonials</h2>
          </div>
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="bg-white p-7 rounded-2xl shadow-2xs hover:shadow-lg transition-all duration-300 border border-[#D8EAFD] hover:border-[var(--yellow)]" whileHover={{ y: -4 }}>
                <p className="text-slate-700 italic mb-5 leading-relaxed text-sm">“{t.message}”</p>
                <p className="text-[#0A173E] font-bold text-right text-sm">- {t.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <Swiper spaceBetween={16} slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Autoplay, Pagination]} pagination={{ clickable: true }}>
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <motion.div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D8EAFD]">
                    <p className="text-slate-700 italic mb-4 text-sm">“{t.message}”</p>
                    <p className="text-[#0A173E] font-bold text-right text-sm">- {t.name}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
