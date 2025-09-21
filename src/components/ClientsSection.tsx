// src/components/ClientsSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const clientsByIndustry = {
  "Industrial": ["ambujacement.png","ultratechcement.png","apollopipes.png","jkpipe.png","padmavatipipes.png"],
  "Healthcare": ["apollohospital.svg","jphospital.webp","medantahospitals.png","metrohospitals.png","yasodhahospital.png"],
  "Education": ["jnuuniversity.png","mahaveeruniversity.webp","motherhooduniversity.webp"],
  "Retail": ["patanjali.svg","reliancejwell.png","tanishqjwellers.svg"],
  "Beverages": ["coke.svg","pepsi.png"],
  "Automobile": ["tatamotors.png","jktyres.jpg"],
  "Technology": ["zeemedia.svg"]
};

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
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex justify-center mb-2">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function ClientsSection() {
  return (
    <section className="w-full py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly partner with industry leaders across multiple sectors.
          </p>
        </motion.div>
        <div className="space-y-16">
          {Object.entries(clientsByIndustry).map(([industry, logos], index) => (
            <motion.div key={industry} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index*0.1 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{industry}</h3>
              <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
                {logos.map((logo, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.05 }} className="flex justify-center items-center p-4 bg-white rounded-xl shadow-md border border-gray-200 h-28">
                    <Image src={`/images/clients/${logo}`} alt={logo} width={140} height={60} className="object-contain" onError={(e)=>{(e.target as HTMLImageElement).src="/images/clients/placeholder.png"}} />
                  </motion.div>
                ))}
              </div>
              <div className="sm:hidden">
                <Swiper spaceBetween={16} slidesPerView={2} loop autoplay={{ delay: 2000, disableOnInteraction: false }} modules={[Autoplay]}>
                  {logos.map((logo, idx) => (
                    <SwiperSlide key={idx}>
                      <motion.div whileHover={{ scale: 1.03 }} className="flex justify-center items-center p-4 bg-white rounded-xl shadow-md border border-gray-200 h-28">
                        <Image src={`/images/clients/${logo}`} alt={logo} width={140} height={60} className="object-contain" onError={(e)=>{(e.target as HTMLImageElement).src="/images/clients/placeholder.png"}} />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
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
