// src/components/ClientsSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const clientsByIndustry: Record<string, string[]> = {
  Industrial: ["ambujacement.png","ultratechcement.png","apollopipes.png","jkpipe.png","padmavatipipes.png"],
  Healthcare: ["apollohospital.svg","jphospital.webp","medantahospitals.png","metrohospitals.png","yasodhahospital.png"],
  Education: ["jnuuniversity.png","mahaveeruniversity.webp","motherhooduniversity.webp"],
  Retail: ["patanjali.svg","reliancejwell.png","tanishqjwellers.svg"],
  Beverages: ["coke.svg","pepsi.png"],
  Automobile: ["tatamotors.svg","jktyres.jpg"],
  Technology: ["zeemedia.svg"],
  RealEstate: ["bhutani.png"],
  Jewellery: ["jayantijwellerss.jpg"],
  Media: ["zeemedia.svg"],
  Hospitality: ["crystalworld.png"],
};

export default function ClientsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Esteemed Clients
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in partnering with industry leaders across diverse sectors
          </p>
        </motion.div>

        {/* Clients Carousel */}
        <div className="space-y-16">
          {Object.entries(clientsByIndustry).map(([industry, logos]) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {industry}
              </h2>

              <Swiper
                spaceBetween={20}
                slidesPerView={2}
                loop={true} // Infinite loop
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                }}
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
              >
                {logos.map((logo, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex justify-center items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 h-32"
                    >
                      <Image
                        src={`/images/clients/${logo}`}
                        alt={logo.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")}
                        width={140}
                        height={80}
                        className="object-contain max-h-16 w-auto"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/clients/placeholder.png";
                        }}
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
