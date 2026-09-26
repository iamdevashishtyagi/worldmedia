import Link from "next/link";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

const services = servicesData.map((s) => [s.name, `/services/${s.slug}`] as const);
const locations = locationsData.map((l) => [l.name, `/locations/${l.slug}`] as const);

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 px-6 pt-16 pb-4 md:pb-2 text-sm text-slate-300 border-t border-slate-800">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="text-xl font-bold text-white tracking-wide">World Media NCR</p>
          <p className="mt-1 text-xs font-medium text-yellow-400 uppercase tracking-wider">
            Outdoor Advertising Solutions • Est. 2013
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            Office Opp. GIC, Dharam Palace, Begum Bridge Road, Meerut, Uttar Pradesh – 250001
          </p>
          <div className="mt-4 space-y-1.5 text-slate-300">
            <p>
              <span className="font-semibold text-white">Call: </span>
              <a href="tel:+919456497636" className="hover:text-yellow-400 transition font-medium">
                +91 94564 97636
              </a>
              {" / "}
              <a href="tel:+919897907308" className="hover:text-yellow-400 transition">
                +91 98979 07308
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">WhatsApp: </span>
              <a
                href="https://wa.me/919456497636?text=Hi%20World%20Media%20NCR,%20I%20want%20to%20inquire%20about%20outdoor%20advertising."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
              >
                +91 94564 97636
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Email: </span>
              <a href="mailto:worldmediancr@gmail.com" className="hover:text-yellow-400 transition">
                worldmediancr@gmail.com
              </a>
            </p>
          </div>
        </div>

        <nav aria-label="Company pages">
          <p className="font-semibold text-white uppercase tracking-wider text-xs">Quick Links</p>
          <div className="mt-4 grid gap-2.5">
            <Link href="/about" className="hover:text-white transition">About Agency & Founder</Link>
            <Link href="/services" className="hover:text-white transition">All Advertising Services</Link>
            <Link href="/locations" className="hover:text-white transition">Service Locations</Link>
            <Link href="/gallery" className="hover:text-white transition">Portfolio & Projects</Link>
            <Link href="/clients" className="hover:text-white transition">Client Partners</Link>
            <Link href="/blog" className="hover:text-white transition">Advertising Blog & Tips</Link>
            <Link href="/contact" className="hover:text-white transition">Contact & Get Quote</Link>
          </div>
        </nav>

        <nav aria-label="Advertising services">
          <p className="font-semibold text-white uppercase tracking-wider text-xs">Services</p>
          <div className="mt-4 grid gap-2.5">
            {services.map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-white transition">
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <nav aria-label="Advertising service areas">
          <p className="font-semibold text-white uppercase tracking-wider text-xs">Service Areas</p>
          <div className="mt-4 grid gap-2.5">
            {locations.map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-white transition">
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-8 border-t border-[#182859] flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300 gap-4">
        <p>© {new Date().getFullYear()} World Media NCR. All rights reserved. Founded & Operated by Shrikant Tyagi.</p>
        <p className="text-slate-300">
          Premier Outdoor Advertising Agency in Meerut, Delhi-Meerut Expressway & Western Uttar Pradesh.
        </p>
      </div>
      <div className="mx-auto max-w-7xl mt-6 text-center text-xs md:text-sm opacity-80">
        <Link href="https://iamdevashishtyagi.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
          🚀 <span>Developed by</span> <strong>Devashish Tyagi</strong>
        </Link>
      </div>
    </footer>
  );
}
