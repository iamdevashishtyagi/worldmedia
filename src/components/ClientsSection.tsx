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
  "mahaveeruniversity.webp",
  "motherhooduniversity.webp",
  "patanjali.svg",
  "reliancejwell.png",
  "tanishqjwellers.svg",
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
    <section className="w-full py-10 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 text-black">
            {/* <span className="text-2xl">🤝</span> */}
            <h2 className="text-3xl font-bold">Our Clients</h2>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allClientLogos.map((logo, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="flex justify-center items-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 h-28">
          <Image src={`/images/clients/${logo}`} alt={logo} width={200} height={100} className="object-contain w-auto h-16 sm:h-20" quality={100} onError={(e) => {(e.target as HTMLImageElement).src = "/images/clients/placeholder.png"; }}/>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-32">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">TESTIMONIALS</h2>
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" whileHover={{ y: -4 }}>
                <p className="text-gray-700 italic mb-4">“{t.message}”</p>
                <p className="text-gray-900 font-semibold text-right">- {t.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <Swiper spaceBetween={16} slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Autoplay, Pagination]} pagination={{ clickable: true }}>
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <motion.div className="bg-white p-6 rounded-2xl shadow-lg">
                    <p className="text-gray-700 italic mb-4">“{t.message}”</p>
                    <p className="text-gray-900 font-semibold text-right">- {t.name}</p>
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
