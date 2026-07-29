import { BreadcrumbJsonLd, ServiceCatalogJsonLd } from "@/components/SeoJsonLd";

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} /><ServiceCatalogJsonLd />{children}</>;
}
