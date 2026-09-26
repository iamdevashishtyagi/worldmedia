// src/components/PortfolioPreview.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "Baghra Bus Stand Main Arterial Hoarding",
    location: "Baghra, Muzaffarnagar Road",
    category: "Highway Unipole",
    image: "/images/portfolio/Baghra Bus Stand.webp",
    description: "High-impact commuter bus stand display capturing continuous inter-district passenger traffic.",
  },
  {
    id: 2,
    title: "Chutmalpur Dehradun Highway Gantry",
    location: "Delhi-Roorkee-Dehradun Highway",
    category: "Highway Gantry",
    image: "/images/portfolio/Chutmalpur Facing Rorkee (Delhi Rorkee Dehradun Highway).webp",
    description: "Towering highway hoarding facing oncoming Roorkee and Dehradun commercial and tourist traffic.",
  },
  {
    id: 3,
    title: "Meerut Sardhana Road Arterial Display",
    location: "Sardhana Road, Meerut",
    category: "City Billboard",
    image: "/images/portfolio/Meerut Sardhana.webp",
    description: "High-density retail and residential intersection billboard engineered for maximum daily local recall.",
  },
  {
    id: 4,
    title: "Muzaffarnagar Meerut Road Interchange",
    location: "Muzaffarnagar Highway Junction",
    category: "Interchange Hoarding",
    image: "/images/portfolio/Muzaffarnagar Meerut Road.webp",
    description: "Prime arterial placement at critical highway choke point with massive commuter dwell time.",
  },
  {
    id: 5,
    title: "Mirapur Bypass Commercial Billboard",
    location: "Mirapur Bypass Highway",
    category: "Highway Billboard",
    image: "/images/portfolio/Mirapur Bypass.webp",
    description: "Unobstructed high-speed visibility catering to regional logistics and passenger transit.",
  },
  {
    id: 6,
    title: "Bhasuma Main Road Landmark Display",
    location: "Bhasuma Arterial Road",
    category: "Street Hoarding",
    image: "/images/portfolio/Bhasuma Main Road.webp",
    description: "Prominent market center billboard reaching shoppers, local businesses, and transit commuters.",
  },
];

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="w-full py-20 bg-[#F0F8FF] border-t border-[#D8EAFD]">
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
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white border border-[#D8EAFD] text-[#0A173E] text-xs font-bold rounded-full uppercase tracking-wider mb-3 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0A173E]" />
            Verified Outdoor Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A173E] tracking-tight mt-2 mb-4">
            Recent Advertising Sites &amp; Installations
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Real photos from our 100+ active billboard, hoarding, and wall painting sites across Meerut, Delhi NCR, and Western Uttar Pradesh.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#0A173E] hover:bg-[#132456] text-white font-bold py-3.5 px-8 rounded-xl transition duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <span>Explore Complete 50+ Site Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#D8EAFD] hover:border-[var(--yellow)] flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
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
                <div className="absolute top-3 left-3 bg-[#0A173E]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-xs">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold text-[#0A173E] uppercase tracking-wide mb-1">
                  📍 {project.location}
                </div>
                <h3 className="text-xl font-bold text-[#0A173E] mb-2 group-hover:text-[#CA8A04] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="pt-3 border-t border-[#D8EAFD] flex items-center justify-between text-sm">
                  <span className="text-[#0A173E] font-bold text-xs bg-[#F0F8FF] border border-[#D8EAFD] px-2.5 py-1 rounded-md">
                    Verified Location
                  </span>
                  <Link href="/contact" className="text-[#0A173E] hover:text-[#CA8A04] font-bold inline-flex items-center gap-1 transition-colors">
                    <span>Inquire Space</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
