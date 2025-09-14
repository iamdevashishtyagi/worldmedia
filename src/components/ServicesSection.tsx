// src/components/ServicesSection.tsx
"use client";

import React from "react";
import { Square, Truck, Circle, Lightbulb, Megaphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltUnipole from "@/components/TiltUnipole";
import DashedPath from "@/components/CurvedPath";

const allServices = [
  {
    icon: <Square size={48} className="text-blue-500" />,
    title: "Hoardings & Billboards",
    description:
      "We design and install high-impact outdoor hoardings and billboards in strategic locations for maximum brand visibility. Our solutions are built to withstand weather conditions while maintaining visual appeal.",
    features: [
      "Strategic Location Analysis",
      "Weather-resistant Materials",
      "High-quality Printing",
      "Professional Installation",
    ],
    image: "/images/services/Hoarding1.jpg",
  },
  {
    icon: <Truck size={48} className="text-purple-500" />,
    title: "Vehicle Branding",
    description:
      "Transform your vehicles into mobile advertisements with our professional vehicle wrapping and branding services. Our designs are durable, eye-catching, and effective at capturing attention on the move.",
    features: [
      "Full/Partial Wraps",
      "Durable Vinyl Materials",
      "Professional Design",
      "Precision Installation",
    ],
    image: "/images/services/Hoarding2.jpg",
  },
  {
    icon: <Circle size={48} className="text-cyan-500" />,
    title: "Signages & Unipoles",
    description:
      "From directional signs to promotional unipoles, we create durable and visually appealing signage solutions that serve both functional and advertising purposes.",
    features: [
      "Custom Design",
      "Durable Materials",
      "Illuminated Options",
      "Maintenance Services",
    ],
    image: "/images/services/Hoarding3.jpg",
  },
  {
    icon: <Lightbulb size={48} className="text-yellow-500" />,
    title: "LED Display Boards",
    description:
      "Modern digital advertising solutions with bright, dynamic LED displays. Perfect for time-sensitive promotions, news updates, and engaging visual content.",
    features: [
      "High Brightness",
      "Remote Content Management",
      "Energy Efficient",
      "Weather Proof",
    ],
    image: "/images/services/Hoarding4.jpg",
  },
  {
    icon: <Megaphone size={48} className="text-red-500" />,
    title: "Digital Marketing",
    description:
      "Complement your outdoor advertising with targeted digital campaigns. We help you reach your audience online with strategic digital marketing solutions.",
    features: [
      "Social Media Marketing",
      "Google Ads",
      "SEO Optimization",
      "Analytics & Reporting",
    ],
    image: "/images/services/Hoarding5.jpg",
  },
  {
    icon: <Megaphone size={48} className="text-red-500" />,
    title: "Next Yours",
    description:
      "Complement your outdoor advertising with targeted digital campaigns. We help you reach your audience online with strategic digital marketing solutions.",
    features: [
      "Social Media Marketing",
      "Google Ads",
      "SEO Optimization",
      "Analytics & Reporting",
    ],
    image: "/images/services/YoursNextHoarding.jpg",
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full py-10 mb-1 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-28">
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"> Our Services </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive advertising solutions tailored to meet your business objectives and maximize brand exposure </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-35 md:space-y-40">
          {allServices.map((service, index) => (
            <>
              <div key={index} className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center" >
                {/* Service Text */}
                <motion.div
                  className={`
                    order-2 -mb-19
                    ${index % 2 === 1 ? "md:order-2" : "md:order-1"} 
                  `}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className="p-2 md:p-3 bg-blue-50 rounded-xl">{service.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight size={16} className="text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Service Image */}
                <motion.div
                  className={`
                    order-1 mb-19 md:mb-1
                    ${index % 2 === 1 ? "md:order-1" : "md:order-2"} 
                    flex justify-center w-full mt-6 md:mt-0
                  `}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="w-full mb-10 max-w-md md:max-w-full">
                    <TiltUnipole
                      image={service.image}
                      tilt={index % 2 === 0 ? "left" : "right"}
                      title={service.title}
                    />
                  </div>
                </motion.div>
              </div>
              <div className={`hidden [@media(min-width:1300px)]:flex -mb-16 -mt-27 -p-4 justify-center dashed-path-wrapper ${ index % 2 !== 1 ? "scale-x-[-1] mr-73" : "ml-73" }`} >
              {index !== allServices.length - 1 && (
                <DashedPath width={640} height={400} curve={10} orientation="horizontal" colorStart="purple" colorEnd="cyan" />
              )}
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}