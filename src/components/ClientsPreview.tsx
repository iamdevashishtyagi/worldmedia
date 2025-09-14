// src/components/ClientsPreview.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const featuredClients = [
  { name: "Metro Corporation", industry: "Real Estate" },
  { name: "Swift Logistics", industry: "Transportation" },
  { name: "Urban Retail Group", industry: "Retail" },
  { name: "Tech Innovations Ltd", industry: "Technology" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
};

export default function ClientsPreview() {
  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Valued Clients
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Trusted by leading brands and businesses across various industries
          </p>
          <Link
            href="/clients"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            View All Clients
          </Link>
        </div>

        {/* Clients Grid with animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {featuredClients.map((client, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gray-800 p-8 rounded-xl w-full h-40 flex items-center justify-center hover:bg-gray-750 transition-all duration-300 group"
            >
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
                  {client.name}
                </h3>
                <p className="text-gray-400 text-sm">{client.industry}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
