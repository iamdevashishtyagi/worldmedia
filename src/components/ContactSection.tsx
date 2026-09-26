// src/components/ContactSection.tsx
"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Send, Phone, Mail, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

export const SERVICE_OPTIONS = [
  { value: "Highway Unipoles & Hoardings", label: "Highway Unipoles & Hoardings" },
  { value: "Digital Wall Painting", label: "Digital Wall Painting" },
  { value: "Billboard & Overhead Gantries", label: "Billboard & Overhead Gantries" },
  { value: "Transit Vehicle Fleet Branding", label: "Transit Vehicle Fleet Branding" },
  { value: "LED Digital Screen Displays (DOOH)", label: "LED Digital Screen Displays (DOOH)" },
  { value: "Large-Format Flex Printing", label: "Large-Format Flex Printing" },
  { value: "Political Advertising Campaigns", label: "Political Advertising Campaigns" },
  { value: "Website Development", label: "Website Development" },
  { value: "Other / Specific", label: "Other / Specific" },
];

function matchService(query?: string | null): string {
  if (!query) return "";
  const q = query.toLowerCase().trim();
  if (q.includes("web") || q.includes("developer") || q.includes("software") || q.includes("seo architecture") || q.includes("site dev")) {
    return "Website Development";
  }
  if (q.includes("hoarding") || q.includes("unipole")) {
    return "Highway Unipoles & Hoardings";
  }
  if (q.includes("wall") || q.includes("dwp") || q.includes("paint")) {
    return "Digital Wall Painting";
  }
  if (q.includes("billboard") || q.includes("gantry") || q.includes("overhead")) {
    return "Billboard & Overhead Gantries";
  }
  if (q.includes("vehicle") || q.includes("auto") || q.includes("transit") || q.includes("fleet") || q.includes("bus")) {
    return "Transit Vehicle Fleet Branding";
  }
  if (q.includes("led") || q.includes("screen") || q.includes("dooh") || q.includes("video")) {
    return "LED Digital Screen Displays (DOOH)";
  }
  if (q.includes("flex") || q.includes("banner") || q.includes("print")) {
    return "Large-Format Flex Printing";
  }
  if (q.includes("political") || q.includes("election") || q.includes("campaign")) {
    return "Political Advertising Campaigns";
  }
  if (q.includes("other") || q.includes("specific") || q.includes("custom")) {
    return "Other / Specific";
  }

  const found = SERVICE_OPTIONS.find(
    (opt) => opt.value.toLowerCase() === q || opt.label.toLowerCase() === q
  );
  return found ? found.value : "";
}

function getDefaultRequirement(
  service?: string | null,
  location?: string | null,
  topic?: string | null
): string {
  if (service === "Website Development") {
    return "I am interested in custom website development & technical SEO architecture for my business. Please share details and consultation.";
  }
  if (service === "Other / Specific") {
    return "I have a specific advertising / custom media requirement. Here are the campaign details:";
  }
  if (service && location) {
    return `I am interested in ${service} in ${location}. Please share available sites, prime corridors, and rate cards.`;
  }
  if (service) {
    return `I am interested in ${service}. Please share site availability, prime locations, and competitive rate cards.`;
  }
  if (location) {
    return `Inquiry regarding outdoor advertising, hoarding, and billboard inventory availability in ${location}. Please share prime sites and rates.`;
  }
  if (topic) {
    return `Inquiry regarding "${topic}". Please share campaign strategy and media solutions.`;
  }
  return "";
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [autoFilledContext, setAutoFilledContext] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error"; visible: boolean } | null>(null);

  useEffect(() => {
    const serviceParam = searchParams.get("service") || searchParams.get("s");
    const locationParam = searchParams.get("location") || searchParams.get("loc");
    const requirementParam = searchParams.get("requirement") || searchParams.get("message") || searchParams.get("req");
    const topicParam = searchParams.get("topic");
    const sourceParam = searchParams.get("source") || searchParams.get("from");

    let matchedService = matchService(serviceParam);
    let resolvedLocation = locationParam || "";
    let initialMessage = requirementParam || "";
    let contextLabel = "";

    // 1. If service/location not in search params, check sessionStorage and document.referrer
    let priorPath = "";
    if (typeof window !== "undefined") {
      try {
        priorPath = sessionStorage.getItem("wm_last_visited_path") || "";
      } catch {
        priorPath = "";
      }
    }
    const referrer = typeof document !== "undefined" ? document.referrer : "";
    const sourcePath = priorPath || referrer;

    if (!matchedService && sourcePath) {
      const lower = sourcePath.toLowerCase();
      if (lower.includes("/developer")) {
        matchedService = "Website Development";
        contextLabel = "Website Development (Developer Portfolio)";
      } else if (lower.includes("/services/")) {
        const slug = lower.split("/services/")[1]?.split(/[?#/]/)[0];
        if (slug) {
          const serviceObj = servicesData.find((s) => s.slug === slug);
          if (serviceObj) {
            matchedService = matchService(serviceObj.name);
          } else {
            matchedService = matchService(slug);
          }
          if (matchedService) {
            contextLabel = `Service: ${matchedService}`;
          }
        }
      } else if (lower.includes("/locations/")) {
        const locSlug = lower.split("/locations/")[1]?.split(/[?#/]/)[0];
        if (locSlug) {
          const locObj = locationsData.find((l) => l.slug === locSlug);
          resolvedLocation = locObj ? locObj.name : decodeURIComponent(locSlug);
          contextLabel = `Location: ${resolvedLocation}`;
        }
      } else if (lower.includes("/blog/")) {
        contextLabel = "Article Reader Inquiry";
      } else if (lower.includes("/gallery")) {
        contextLabel = "Portfolio Inquiry";
      } else if (lower.includes("/about")) {
        contextLabel = "Corporate Partnership";
      }
    }

    if (serviceParam && !contextLabel) {
      contextLabel = `Service: ${matchedService || serviceParam}`;
    } else if (locationParam && !contextLabel) {
      contextLabel = `Location: ${locationParam}`;
    } else if (sourceParam && !contextLabel) {
      contextLabel = sourceParam;
    }

    // 2. Intelligent auto-fill for requirement field
    if (!initialMessage) {
      initialMessage = getDefaultRequirement(matchedService, resolvedLocation, topicParam);
    }

    if (matchedService || initialMessage || contextLabel) {
      setFormData((prev) => ({
        ...prev,
        service: matchedService || prev.service,
        message: initialMessage || prev.message,
      }));
      if (contextLabel) {
        setAutoFilledContext(contextLabel);
      }
    }
  }, [searchParams]);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast((prev) => (prev ? { ...prev, visible: false } : null));
    }, 3500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (res.ok && json?.success) {
        showToast("Inquiry sent successfully! Our team will contact you shortly.", "success");
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
        setAutoFilledContext("");
      } else {
        showToast(json?.error || "Failed to send inquiry. Please call us directly.", "error");
        console.error("Contact API returned error:", json);
      }
    } catch (err) {
      showToast("Error sending message. Please try again or reach us via WhatsApp.", "error");
      console.error("Contact submit error:", err);
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newService = e.target.value;
    setFormData((prev) => {
      const isAutoOrEmpty =
        !prev.message ||
        prev.message.startsWith("I am interested in") ||
        prev.message.startsWith("I have a specific advertising") ||
        prev.message.startsWith("Inquiry regarding");

      const newMessage = isAutoOrEmpty && newService ? getDefaultRequirement(newService) : prev.message;

      return {
        ...prev,
        service: newService,
        message: newMessage,
      };
    });
  };

  return (
    <>
      <section className="w-full py-20 bg-[#F0F8FF] border-t border-[#D8EAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A173E] tracking-tight">
              Get In Touch With World Media NCR
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to dominate your market? Contact us for a free site availability audit, custom proposal, and competitive rate cards.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Direct Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#0A173E]">
                Direct Contacts &amp; Desk
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white border border-[#D8EAFD] rounded-xl shadow-2xs mt-1">
                    <MapPin className="w-5 h-5 text-[#0A173E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A173E] text-base mb-1">Head Office</h3>
                    <p className="text-slate-700 leading-relaxed text-sm">
                      Office Opp. GIC, Dharam Palace<br />
                      Begum Bridge Road<br />
                      Meerut, Uttar Pradesh – 250001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white border border-[#D8EAFD] rounded-xl shadow-2xs mt-1">
                    <Phone className="w-5 h-5 text-[#0A173E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A173E] text-base mb-1">Phone Desk</h3>
                    <a
                      href="tel:+919456497636"
                      className="text-slate-800 transition-colors hover:text-[#0A173E] font-bold block mb-1 text-sm"
                    >
                      +91 94564 97636
                    </a>
                    <a
                      href="tel:+919897907308"
                      className="text-slate-800 transition-colors hover:text-[#0A173E] font-bold block text-sm"
                    >
                      +91 98979 07308
                    </a>
                  </div>
                </div>

                {/* WhatsApp Section */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white border border-[#D8EAFD] rounded-xl shadow-2xs mt-1">
                    <svg className="w-5 h-5 text-[#0A173E]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A173E] text-base mb-1">WhatsApp Fast Desk</h3>
                    <a
                      href="https://wa.me/919456497636?text=Hi%20World%20Media%20NCR%2C%20I%20have%20an%20advertising%20inquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0A173E] hover:bg-[#132456] text-white font-bold py-2 px-4 rounded-xl text-xs transition shadow-sm hover:shadow-md mb-1"
                    >
                      <span>Chat Directly on WhatsApp</span>
                    </a>
                    <p className="text-slate-500 text-xs">Priority reply within 15 minutes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white border border-[#D8EAFD] rounded-xl shadow-2xs mt-1">
                    <Mail className="w-5 h-5 text-[#0A173E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A173E] text-base mb-1">Email Inquiries</h3>
                    <a
                      href="mailto:worldmediancr@gmail.com"
                      className="text-slate-800 block transition hover:text-[#0A173E] text-sm mb-0.5"
                    >
                      worldmediancr@gmail.com
                    </a>
                    <a
                      href="mailto:shrikanttyagiworldmedia@gmail.com"
                      className="text-slate-800 block transition hover:text-[#0A173E] text-sm"
                    >
                      shrikanttyagiworldmedia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white border border-[#D8EAFD] rounded-xl shadow-2xs mt-1">
                    <Clock className="w-5 h-5 text-[#0A173E]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A173E] text-base mb-1">Operating Hours</h3>
                    <p className="text-slate-700 text-sm">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                    <p className="text-slate-500 text-xs mt-0.5">24/7 Monitoring for active campaigns</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#D8EAFD]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-extrabold text-[#0A173E]">Send Us a Message</h2>
                <span className="text-xs text-slate-500 font-semibold">* Required fields</span>
              </div>

              {/* Context Indicator if arrived from specific service / location */}
              {autoFilledContext && (
                <div className="mb-5 flex items-center gap-2 px-3.5 py-2 bg-[#F0F8FF] border border-[#D8EAFD] rounded-xl text-xs font-semibold text-[#0A173E]">
                  <Sparkles className="w-4 h-4 text-[var(--yellow)] shrink-0" />
                  <span>
                    Auto-configured for: <strong className="text-[#0A173E]">{autoFilledContext}</strong>
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D8EAFD] rounded-xl text-slate-900 focus:ring-2 focus:ring-[#0A173E] focus:border-transparent text-sm bg-slate-50/50"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D8EAFD] text-slate-900 rounded-xl focus:ring-2 focus:ring-[#0A173E] focus:border-transparent text-sm bg-slate-50/50"
                      placeholder="e.g. +91 94564 97636"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D8EAFD] text-slate-900 rounded-xl focus:ring-2 focus:ring-[#0A173E] focus:border-transparent text-sm bg-slate-50/50"
                      placeholder="youraddress@gmail.com (Optional)"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Brand / Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D8EAFD] text-slate-900 rounded-xl focus:ring-2 focus:ring-[#0A173E] focus:border-transparent text-sm bg-slate-50/50"
                      placeholder="Company or Brand Name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleServiceChange}
                    className="w-full px-4 py-3 border border-[#D8EAFD] text-slate-900 rounded-xl focus:ring-2 focus:ring-[#0A173E] focus:border-transparent text-sm bg-slate-50/50"
                  >
                    <option value="">Select a service / advertising format</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Campaign Requirements / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D8EAFD] text-slate-900 rounded-xl focus:ring-2 focus:ring-[#0A173E] focus:border-transparent text-sm bg-slate-50/50"
                    placeholder="Describe desired locations, campaign timeline, budget, or specific project details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-[var(--yellow)] hover:bg-[var(--yellow-hover)] text-[#0A173E] font-extrabold py-3.5 px-8 rounded-xl transition duration-200 text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer ${
                    loading ? "opacity-70 cursor-wait" : "active:scale-98"
                  }`}
                >
                  {loading ? "Sending..." : "Submit Inquiry"} <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {toast && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-all duration-500 ${
            toast.visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <div
            className={`px-6 py-3 rounded-lg shadow-lg text-white font-semibold pointer-events-auto flex items-center gap-2 ${
              toast.type === "success" ? "bg-[#0A173E] border border-[var(--yellow)] text-white" : "bg-red-700"
            }`}
          >
            {toast.type === "success" && <CheckCircle2 className="w-5 h-5 text-[var(--yellow)]" />}
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default function ContactSection() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-slate-500">Loading inquiry desk...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}