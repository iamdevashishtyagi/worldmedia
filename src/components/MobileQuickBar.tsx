"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";

export default function MobileQuickBar() {
  const phoneNumber = "+919456497636";
  const whatsappUrl = "https://wa.me/919456497636?text=Hi%20World%20Media%20NCR%2C%20I%20am%20interested%20in%20outdoor%20advertising%20%2F%20hoardings.";

  return (
    <aside aria-label="Quick contact" className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-sm transition shadow-md active:scale-95"
          aria-label="Call World Media NCR"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition shadow-md active:scale-95"
          aria-label="Chat with World Media NCR on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
