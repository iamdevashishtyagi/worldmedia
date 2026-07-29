import { BreadcrumbJsonLd, LocationListJsonLd } from "@/components/SeoJsonLd";

export default function LocationsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }]} /><LocationListJsonLd />{children}</>;
}
