import { BreadcrumbJsonLd, LocationListJsonLd } from "@/components/SeoJsonLd";

export default function LocationsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }]} />
      <LocationListJsonLd />
      {children}
    </div>
  );
}
