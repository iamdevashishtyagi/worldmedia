// src/components/ServicesPreview.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Square, Truck, Circle, Lightbulb, ArrowRight, Layers } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Square size={36} className="text-[#0A173E]" />,
    title: "Hoardings & Billboards",
    description:
      "High-impact highway unipoles & arterial billboards across Meerut & Delhi-Meerut Expressway.",
    path: "/services/hoarding-advertising-meerut",
  },
  {
    icon: <Truck size={36} className="text-[#0A173E]" />,
    title: "Vehicle Branding",
    description:
      "Transform transit fleets into high-reach mobile billboards across NCR and Western UP districts.",
    path: "/services/vehicle-branding-meerut",
  },
  {
    icon: <Circle size={36} className="text-[#0A173E]" />,
    title: "Digital Wall Painting",
    description:
      "Durable, long-lasting rural & urban brand visibility across thousands of strategic walls.",
    path: "/services/digital-wall-painting-meerut",
  },
  {
    icon: <Lightbulb size={36} className="text-[#CA8A04]" />,
    title: "LED Digital Screens",
    description:
      "Dynamic digital OOH displays for high-frequency video & animated campaigns at prime hubs.",
    path: "/services/led-display-advertising-meerut",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="w-full py-20 bg-[#F0F8FF] border-t border-b border-[#D8EAFD] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white border border-[#D8EAFD] text-[#0A173E] text-xs font-bold rounded-full uppercase tracking-wider mb-3 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#0A173E]" />
            Full-Spectrum Outdoor Media
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A173E] tracking-tight mb-4">
            Our Outdoor Advertising Services
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            End-to-end media planning, fabrication, municipal approvals, and verified 24/7 site maintenance engineered for unstoppable brand recall.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] font-bold py-3.5 px-8 rounded-xl transition duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#D8EAFD] p-7 rounded-2xl hover:border-[var(--yellow)] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
            >
              <Link href={service.path} className="block h-full w-full flex flex-col justify-between items-center">
                <div>
                  <div className="mb-5 flex justify-center">
                    <span className="p-3.5 bg-[#F0F8FF] border border-[#D8EAFD] group-hover:border-[var(--yellow)] group-hover:scale-110 rounded-2xl transition-all duration-300 shadow-2xs">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A173E] mb-3 group-hover:text-[#CA8A04] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-[#0A173E] group-hover:text-[#CA8A04] transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
