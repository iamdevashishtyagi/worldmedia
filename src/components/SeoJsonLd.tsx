type Crumb = { name: string; path?: string; url?: string };

const siteUrl = "https://worldmediancr.com";

function Script({ value }: { value: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  return (
    <Script
      value={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => {
          const raw = item.url || item.path;
          const fullUrl = raw ? (raw.startsWith("http") ? raw : `${siteUrl}${raw}`) : undefined;
          return {
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            ...(fullUrl ? { item: fullUrl } : {}),
          };
        }),
      }}
    />
  );
}

import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

export function ServiceCatalogJsonLd() {
  const value = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "World Media NCR advertising services",
    itemListElement: servicesData.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${siteUrl}/services/${service.slug}`,
        provider: { "@type": "AdvertisingAgency", name: "World Media NCR", url: siteUrl },
      },
    })),
  };
  return <Script value={value} />;
}

export function LocationListJsonLd() {
  return (
    <Script
      value={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "World Media NCR service areas",
        itemListElement: locationsData.map((loc, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: loc.name,
          url: `${siteUrl}/locations/${loc.slug}`,
        })),
      }}
    />
  );
}

export function FaqJsonLd({
  questions,
  faqs,
}: {
  questions?: Array<{ question: string; answer: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}) {
  const list = faqs || questions || [];
  return (
    <Script
      value={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: list.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return (
    <Script
      value={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        url: url.startsWith("http") ? url : `${siteUrl}${url}`,
        ...(image ? { image: image.startsWith("http") ? image : `${siteUrl}${image}` } : {}),
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
          "@type": "Organization",
          name: "World Media NCR",
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "World Media NCR",
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/website/logo2.png`,
          },
        },
      }}
    />
  );
}

export function ServiceDetailJsonLd({
  name,
  description,
  url,
  serviceType,
  areaServed = "Meerut & Delhi NCR",
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
}) {
  return (
    <Script
      value={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        serviceType,
        description,
        url: url.startsWith("http") ? url : `${siteUrl}${url}`,
        areaServed: {
          "@type": "AdministrativeArea",
          name: areaServed,
        },
        provider: {
          "@type": "AdvertisingAgency",
          name: "World Media NCR",
          url: siteUrl,
          telephone: "+91-9456497636",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office Opp. GIC, Dharam Palace, Begum Bridge Road",
            addressLocality: "Meerut",
            addressRegion: "Uttar Pradesh",
            postalCode: "250001",
            addressCountry: "IN",
          },
        },
      }}
    />
  );
}

