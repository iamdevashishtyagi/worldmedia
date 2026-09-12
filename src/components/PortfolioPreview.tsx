// src/components/PortfolioPreview.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    id: 1,
    title: "Delhi-Meerut Highway Unipole",
    category: "Highway Hoarding",
    location: "Meerut Highway Corridor",
    description: "Premium large-format unipole commanding 100,000+ daily commuter impressions.",
    image: "/images/portfolio/Muzaffarnagar Meerut Road.webp",
  },
  {
    id: 2,
    title: "Sardhana Road Arterial Display",
    category: "City Hoarding",
    location: "Meerut City Hub",
    description: "High-density retail and commercial junction billboard with 24/7 visibility.",
    image: "/images/portfolio/Meerut Sardhana.webp",
  },
  {
    id: 3,
    title: "Baghra Highway Bus Stand",
    category: "Transit Billboard",
    location: "Baghra Junction",
    description: "Strategic highway stop placement with high pedestrian dwell time and passenger traffic.",
    image: "/images/portfolio/Baghra Bus Stand.webp",
  },
  {
    id: 4,
    title: "Pan-UP Digital Wall Painting",
    category: "Wall Painting",
    location: "Western UP Towns & Villages",
    description: "Massive rural and semi-urban market penetration with 3-5 year weather durability.",
    image: "/images/toWEBP/dwp19.webp",
  },
  {
    id: 5,
    title: "Delhi-Dehradun Interstate Unipole",
    category: "Interstate Billboard",
    location: "Delhi-Roorkee Highway",
    description: "Massive highway display facing inter-state travelers and commercial logistics fleets.",
    image: "/images/portfolio/Chutmalpur Facing Rorkee (Delhi Rorkee Dehradun Highway).webp",
  },
  {
    id: 6,
    title: "Shamli Main Arterial Hoarding",
    category: "Commercial Hoarding",
    location: "Shamli Highway",
    description: "Prime town entry point billboard capturing inter-district commerce and commuters.",
    image: "/images/portfolio/SHAMLI KAIRANA ROAD.webp",
  },
];

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="w-full py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Proven Outdoor Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 mt-2 mb-4">
            Recent Advertising Sites &amp; Installations
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Real photos from our 100+ active billboard, hoarding, and wall painting sites across Meerut, Delhi NCR, and Western Uttar Pradesh.
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-slate-950 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition duration-300 shadow-md"
          >
            Explore Complete 50+ Site Gallery →
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ amount: 0.2 }}
            >
              {/* Real Project Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={`World Media NCR - ${project.title} at ${project.location}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                  📍 {project.location}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
                  <span className="text-emerald-700 font-semibold text-xs bg-emerald-50 px-2.5 py-1 rounded-md">
                    Verified Location
                  </span>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-bold hover:underline">
                    Inquire Space →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
