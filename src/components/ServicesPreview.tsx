// src/components/ServicesPreview.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Square, Truck, Circle, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Square size={48} className="text-blue-500" />,
    title: "Hoardings & Billboards",
    description:
      "High-impact outdoor advertising solutions for maximum brand visibility.",
    path: "/services/hoarding-advertising-meerut",
  },
  {
    icon: <Truck size={48} className="text-purple-500" />,
    title: "Vehicle Branding",
    description:
      "Transform your vehicles into mobile advertisements that capture attention.",
    path: "/services/vehicle-branding-meerut",
  },
  {
    icon: <Circle size={48} className="text-cyan-500" />,
    title: "Digital Wall Painting",
    description:
      "Long-lasting local visibility for brands across key neighbourhoods.",
    path: "/services/digital-wall-painting-meerut",
  },
  {
    icon: <Lightbulb size={48} className="text-yellow-500" />,
    title: "LED Display Boards",
    description:
      "Dynamic digital displays for modern, engaging advertising content.",
    path: "/services/led-display-advertising-meerut",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="w-full py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Advertising Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive advertising solutions to make your brand stand out in
            the market.
          </p>
          <Link
            href="/services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            View All Services
          </Link>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              <Link href={service.path} className="block h-full w-full">
              <div className="mb-6 flex justify-center"><span className="p-2 bg-gray-700 rounded-full">
                {service.icon}
              </span></div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-yellow-400">Learn more →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
