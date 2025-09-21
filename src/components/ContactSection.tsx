// src/components/ContactSection.tsx
"use client";

import React, { useState } from 'react';
import { MapPin, Send, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; visible: boolean } | null>(null);
  
  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast(prev => prev ? { ...prev, visible: false } : null);
    }, 3000);
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
        showToast("Message sent! We will contact you shortly.", "success");
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        showToast("Failed to send. Please try again later.", "error" );
        console.error("Contact API returned error:");
      }
    } catch (err) {
      showToast("Error sending message. Check console for details.", "error" );
      console.error("Contact submit error:");
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 4000);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to transform your advertising? Contact us for a free consultation and quote.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-950 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-1">Address</h3>
                    <p className="text-black">
                      Office No. Advertising Avenue<br />
                      Business District<br />
                      City, State, ZipCode
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-950 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-1">Phone</h3>
                      <a href="tel:+15551234567" className="text-black transition-all duration-200 hover:text-blue-950 hover:scale-105 hover:font-semibold block">+1 (555) 123-4567 </a>
                      <a href="tel:+15559876543" className="text-black transition-all duration-200 hover:text-blue-950 hover:scale-105 hover:font-semibold block">+1 (555) 987-6543</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-950 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-1">Email</h3>
                      <a href="mailto:info@worldmedia.com" className="text-black block transition-all duration-200 hover:text-blue-950 hover:scale-105 hover:font-semibold" target="_blank" rel="noopener noreferrer">info@worldmedia.com</a>
                      <a href="mailto:sales@worldmedia.com" className="text-black block transition-all duration-200 hover:text-blue-950 hover:scale-105 hover:font-semibold" target="_blank" rel="noopener noreferrer"> sales@worldmedia.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-950 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-600 text-lg mb-1">Business Hours</h3>
                    <p className="text-black">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-black">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-black">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"> Full Name * </label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your full name"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567"/>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your company name"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="hoardings">Hoardings & Billboards</option>
                    <option value="vehicle">Vehicle Branding</option>
                    <option value="signage">Signages & Unipoles</option>
                    <option value="led">LED Display Boards</option>
                    <option value="digital">Digital Marketing</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your advertising needs..." />
                </div>
                <button type="submit" disabled={loading} className={`w-full bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition duration-200 text-lg flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-wait" : "hover:bg-grey-900 active:scale-95"}`}>
                  {loading ? "Sending..." : "Send Message"} <Send size={20} />
                </button>
                {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
      {toast && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-all duration-500 ${toast.visible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className={`px-6 py-3 rounded-lg shadow-lg text-white font-semibold pointer-events-auto ${toast.type === 'success' ? 'bg-green-700' : 'bg-red-700'}`}>{toast.message}</div>
        </div>
      )}
    </>
  );
}