import Link from "next/link";

const services = [
  ["Hoarding advertising", "/services/hoarding-advertising-meerut"],
  ["Billboard advertising", "/services/billboard-advertising-meerut"],
  ["Digital wall painting", "/services/digital-wall-painting-meerut"],
  ["Vehicle branding", "/services/vehicle-branding-meerut"],
  ["Flex printing", "/services/flex-printing-meerut"],
  ["LED display advertising", "/services/led-display-advertising-meerut"],
  ["Political advertising", "/services/political-advertising-meerut"],
] as const;

const locations = [
  ["Meerut", "/locations/meerut"],
  ["Muzaffarnagar", "/locations/muzaffarnagar"],
  ["Shamli", "/locations/shamli"],
  ["Saharanpur", "/locations/saharanpur"],
  ["Baghpat", "/locations/baghpat"],
  ["Hapur", "/locations/hapur"],
  ["Delhi", "/locations/delhi"],
  ["Delhi NCR", "/locations/delhi-ncr"],
] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-sm text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">World Media NCR</p>
          <p className="mt-3 leading-6">Outdoor advertising, hoardings, wall painting and brand visibility solutions across Meerut and NCR.</p>
        </div>
        <nav aria-label="Company pages">
          <p className="font-semibold text-white">Company</p>
          <div className="mt-3 grid gap-2"><Link href="/about">About</Link><Link href="/services">All services</Link><Link href="/locations">Service areas</Link><Link href="/gallery">Gallery</Link><Link href="/clients">Clients</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></div>
        </nav>
        <nav aria-label="Advertising services">
          <p className="font-semibold text-white">Services</p>
          <div className="mt-3 grid gap-2">{services.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
        </nav>
        <nav aria-label="Advertising service areas">
          <p className="font-semibold text-white">Locations</p>
          <div className="mt-3 grid gap-2">{locations.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
        </nav>
      </div>
    </footer>
  );
}
