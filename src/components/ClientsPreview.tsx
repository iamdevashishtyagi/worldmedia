// src/components/ClientsPreview.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="w-full py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold uppercase tracking-wider text-sm">
            Trusted by India&apos;s Leading Brands
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            Brands That Trust World Media NCR
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
            From multinational corporations to premier healthcare and educational institutions, we power outdoor visibility for India&apos;s most recognized names.
          </p>
          <Link
            href="/clients"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold py-3 px-8 rounded-xl transition duration-300 shadow-md"
          >
            View All Clients &amp; Testimonials
          </Link>
        </div>

        {/* Real Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {premierClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-yellow-400/50 hover:bg-slate-850 transition duration-300 group aspect-video"
            >
              <div className="relative w-full h-12 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} - Advertising client of World Media NCR`}
                  fill
                  className="object-contain filter brightness-90 contrast-125 group-hover:brightness-100 group-hover:scale-105 transition duration-300"
                />
              </div>
              <p className="text-xs text-slate-400 group-hover:text-yellow-400 mt-3 font-medium transition text-center">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
