"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { FaqJsonLd } from "@/components/SeoJsonLd";

export const homeFaqs = [
  {
    question: "Which is the best advertising agency in Meerut for hoarding and outdoor ads?",
    answer: "World Media NCR is widely recognized as Meerut's premier outdoor advertising agency. Established in 2013 by Shrikant Tyagi, the company controls 100+ prime hoarding sites across Delhi Road, Roorkee Road, Garh Road, and the Delhi-Meerut Expressway, trusted by major national brands including UltraTech Cement, Ambuja, Apollo Hospitals, Tata Motors, and Patanjali."
  },
  {
    question: "How much does a hoarding or billboard cost in Meerut & on the Delhi-Meerut Expressway?",
    answer: "Hoarding rates in Meerut vary based on traffic density, size, and illumination. City arterial hoardings (15x10 ft or 20x10 ft) typically range from ₹15,000 to ₹45,000 per month. Premium unipoles along the Delhi-Meerut Expressway (NE-3) and highway interchanges range from ₹50,000 to ₹1,50,000 per month. Discounts are available for 3-month, 6-month, and annual contracts."
  },
  {
    question: "What standard billboard and hoarding sizes do you provide?",
    answer: "We offer standard municipal and highway sizes including 10x10 ft, 15x10 ft, 20x10 ft, 30x15 ft, 40x20 ft, and extra-large expressway unipoles (up to 60x20 ft). Custom sizes can also be fabricated for rooftop hoardings, cantilever displays, and gantry structures."
  },
  {
    question: "Do you handle Meerut Nagar Nigam permits and structural safety approvals?",
    answer: "Yes, 100%. World Media NCR handles complete end-to-end legal compliance, including Nagar Nigam Meerut outdoor media permissions, NHAI / expressway clearances, structural stability certificates, and local body advertising taxes. Clients receive a completely hassle-free campaign."
  },
  {
    question: "What is digital wall painting, and why is it popular in Uttar Pradesh?",
    answer: "Digital wall painting uses high-resolution digital print stencils and weather-resistant polymer paints directly on roadside and village walls. It provides 3 to 5 years of permanent brand visibility at a fraction of the cost of monthly flex hoardings. It is the number one choice for FMCG, fertilizer, cement, and political campaigns targeting semi-urban and rural markets in Western UP."
  },
  {
    question: "How quickly can an outdoor campaign go live in Meerut or Delhi NCR?",
    answer: "Once the artwork is approved and the location is finalized, our in-house flex printing and installation team can launch a hoarding campaign within 24 to 48 hours. For large-scale multi-city wall painting or fleet branding campaigns, execution typically takes 5 to 10 days."
  }
];

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-slate-50 border-t border-slate-200">
      <FaqJsonLd questions={homeFaqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Everything You Need to Know About Advertising in Meerut &amp; NCR
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Get straightforward answers about rates, prime locations, campaign durations, and legal permissions.
          </p>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 bg-white rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-700 leading-relaxed text-base border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-yellow-500 rounded-2xl p-8 text-center text-slate-950 shadow-md">
          <h3 className="text-2xl font-extrabold mb-2">Have a Custom Campaign in Mind?</h3>
          <p className="text-slate-900 font-medium mb-6">
            Speak directly with Shrikant Tyagi &amp; the World Media NCR media planning desk today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919456497636"
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-850 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-lg"
            >
              <PhoneCall className="w-4 h-4 text-yellow-400" />
              <span>Call: +91 94564 97636</span>
            </a>
            <a
              href="https://wa.me/919456497636?text=Hi%20World%20Media%20NCR%2C%20I%20have%20an%20advertising%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition shadow-md"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
