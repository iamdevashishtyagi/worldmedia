// src/components/PortfolioPreview.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    id: 1,
    title: "Highway Billboard Campaign",
    category: "Hoardings",
    description: "Large format advertising on major highways",
  },
  {
    id: 2,
    title: "Corporate Vehicle Branding",
    category: "Vehicle",
    description: "Complete fleet branding for corporate clients",
  },
  {
    id: 3,
    title: "Shopping Mall LED Display",
    category: "LED",
    description: "Digital advertising in high-traffic shopping areas",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="w-full py-20 bg-gray-50">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing our successful advertising campaigns and creative
            solutions
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            View Full Portfolio
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ amount: 0.3 }}
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                {project.title}
              </div>

              {/* Project Info */}
              <div className="p-6 bg-white">
                <span className="text-sm text-blue-600 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
