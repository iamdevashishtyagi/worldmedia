// src/components/ClientsPreview.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";

const premierClients = [
  { name: "Tata Motors", logo: "/images/clients/tatamotors.png" },
  { name: "Patanjali", logo: "/images/clients/patanjali.svg" },
  { name: "UltraTech Cement", logo: "/images/clients/ultratechcement.png" },
  { name: "Ambuja Cement", logo: "/images/clients/ambujacement.png" },
  { name: "Apollo Hospitals", logo: "/images/clients/apollohospital.svg" },
  { name: "Medanta Hospitals", logo: "/images/clients/medantahospitals.png" },
  { name: "Tanishq Jewellers", logo: "/images/clients/tanishqjwellers.png" },
  { name: "Reliance Jewels", logo: "/images/clients/reliancejwell.png" },
  { name: "Apollo Pipes", logo: "/images/clients/apollopipes.png" },
  { name: "JK Tyres", logo: "/images/clients/jktyres.jpg" },
  { name: "Coca-Cola", logo: "/images/clients/coke.svg" },
  { name: "Zee Media", logo: "/images/clients/zeemedia.svg" },
];

export default function ClientsPreview() {
  return (
    <section className="w-full py-20 bg-white border-t border-[#D8EAFD] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#854D0E]" />
            Trusted by India&apos;s Leading Brands
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A173E] tracking-tight mt-2 mb-4">
            Brands That Trust World Media NCR
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            From Fortune 500 corporations to premier healthcare, automobile, and educational institutions, we power outdoor visibility for India&apos;s most recognized names.
          </p>
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 bg-[#0A173E] hover:bg-[#132456] text-white font-bold py-3.5 px-8 rounded-xl transition duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <span>View All Clients &amp; Testimonials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Real Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {premierClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl p-5 flex flex-col items-center justify-center hover:border-[var(--yellow)] hover:bg-white hover:shadow-lg transition-all duration-300 group aspect-video"
            >
              <div className="relative w-full h-11 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} - Advertising client of World Media NCR`}
                  fill
                  className="object-contain filter group-hover:scale-105 transition duration-300"
                />
              </div>
              <p className="text-xs text-slate-600 group-hover:text-[#0A173E] mt-3 font-semibold transition text-center truncate w-full">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
