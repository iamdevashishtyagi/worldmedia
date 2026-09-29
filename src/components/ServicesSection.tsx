// src/components/ServicesSection.tsx
"use client";

import React from "react";
import {
  MapPin,
  Lightbulb,
  ShieldCheck,
  Settings2,
  Eye,
  Camera,
  Palette,
  CircleDollarSign,
  Compass,
  SunMedium,
  Clock,
  Layers,
  Maximize2,
  Milestone,
  Building2,
  Film,
  Zap,
  Truck,
  Printer,
  Vote,
  Scale,
  Target,
  Square,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import TiltUnipole from "@/components/TiltUnipole";
import DashedPath from "@/components/CurvedPath";
import Link from 'next/link';
import { servicesData } from "@/data/services";

function getServiceIcon(iconKey?: string) {
  const props = { size: 40, className: "text-[#0A173E]" };
  switch (iconKey) {
    case "map-pin": return <MapPin {...props} />;
    case "lightbulb": return <Lightbulb {...props} />;
    case "shield": return <ShieldCheck {...props} />;
    case "settings": return <Settings2 {...props} />;
    case "eye": return <Eye {...props} />;
    case "camera": return <Camera {...props} />;
    case "palette": return <Palette {...props} />;
    case "dollar-sign": return <CircleDollarSign {...props} />;
    case "compass": return <Compass {...props} />;
    case "sun": return <SunMedium {...props} />;
    case "clock": return <Clock {...props} />;
    case "layers": return <Layers {...props} />;
    case "maximize": return <Maximize2 {...props} />;
    case "milestone": return <Milestone {...props} />;
    case "building": return <Building2 {...props} />;
    case "film": return <Film {...props} />;
    case "zap": return <Zap {...props} />;
    case "truck": return <Truck {...props} />;
    case "printer": return <Printer {...props} />;
    case "vote": return <Vote {...props} />;
    case "scale": return <Scale {...props} />;
    case "target": return <Target {...props} />;
    default: return <Square {...props} />;
  }
}

const allServices = servicesData.map((service) => ({
  icon: getServiceIcon(service.features[0]?.icon),
  title: service.name,
  path: `/services/outdoor-advertising/${service.slug}`,
  description: service.heroSubheadline,
  features: service.features.slice(0, 4).map((f) => f.title),
  image: service.previewImage || service.heroImage || service.ogImage,
}));

export default function ServicesSection() {
  return (
    <section className="w-full py-10 mb-1 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7, ease: "easeOut" }} >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#0A173E] tracking-tight">Our Advertising Services</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Comprehensive advertising solutions tailored to meet your business objectives and maximize brand exposure across Meerut, NCR, and Western UP</p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-32 md:space-y-36">
          {allServices.map((service, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center" >
                {/* Service Text */}
                <motion.div
                  className={`
                    order-2 -mb-10
                    ${index % 2 === 1 ? "md:order-2" : "md:order-1"} 
                  `}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className="p-3 bg-[#F0F8FF] border border-[#D8EAFD] rounded-2xl shadow-2xs">{service.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A173E]">{service.title}</h2>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight size={16} className="text-[#0A173E] flex-shrink-0" />
                        <span className="text-slate-700 text-sm md:text-base font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href={service.path}
                      className="inline-flex items-center gap-2 bg-[#0A173E] hover:bg-[#060E27] text-white font-bold px-7 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                    >
                      <span>Explore Format</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
                
                {/* Service Image */}
                <motion.div
                  className={`
                    order-1 mb-10 md:mb-0
                    ${index % 2 === 1 ? "md:order-1" : "md:order-2"} 
                    flex justify-center w-full mt-4 md:mt-0
                  `}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                >
                  <div className="w-full mb-8 max-w-md md:max-w-full">
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
                  <DashedPath width={640} height={400} curve={10} orientation="horizontal" colorStart="#0A173E" colorEnd="#FACC15" />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
