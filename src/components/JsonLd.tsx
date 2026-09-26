import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["AdvertisingAgency", "LocalBusiness"],
    "@id": "https://worldmediancr.com/#organization",
    "name": "World Media NCR",
    "alternateName": [
      "Best Advertising Agency in Meerut",
      "Top Advertising Agency Meerut",
      "Best Hoarding Company in Meerut",
      "Top Billboard Advertising Agency Delhi NCR",
      "World Media Advertising Solutions",
      "World Media Meerut",
    ],
    "url": "https://worldmediancr.com",
    "logo": "https://worldmediancr.com/images/website/logo2.png",
    "image": "https://worldmediancr.com/images/website/herobg2.jpg",
    "description": "World Media NCR is widely recognized as the best advertising agency in Meerut and top outdoor media company since 2013, offering premium highway hoardings, digital wall painting, unipoles, billboards, vehicle branding, and DOOH media across Meerut, Delhi NCR, and Western UP.",
    "foundingDate": "2013",
    "founder": {
      "@type": "Person",
      "name": "Shrikant Tyagi",
      "jobTitle": "Founder & CEO",
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office Opp. GIC, Dharam Palace, Begum Bridge Road",
      "addressLocality": "Meerut",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "250001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.988531",
      "longitude": "77.706077",
    },
    "telephone": "+91-9456497636",
    "email": "worldmediancr@gmail.com",
    "priceRange": "₹₹ - ₹₹₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Net Banking, Cheque",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "20:00",
      },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1",
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9456497636",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"],
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9897907308",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"],
      },
    ],
    "sameAs": [
      "https://www.facebook.com/worldmediancr",
      "https://www.instagram.com/worldmediancr",
    ],
    "knowsAbout": [
      "Outdoor Advertising",
      "Hoarding Advertising",
      "Billboard Advertising",
      "Highway Unipoles",
      "Digital Wall Painting",
      "Transit Advertising",
      "Vehicle Branding",
      "Flex Printing",
      "LED Display Advertising",
      "DOOH Advertising",
      "Delhi-Meerut Expressway Hoardings",
      "Best Advertising Agency in Meerut",
    ],
    "areaServed": [
      ...locationsData.map((loc) => ({
        "@type": loc.slug.includes("ncr") ? "State" : "City",
        "name": loc.name,
      })),
      { "@type": "State", "name": "Uttar Pradesh" },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Outdoor Advertising Services",
      "itemListElement": servicesData.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "url": `https://worldmediancr.com/services/${service.slug}`,
          "description": service.metaDescription,
        },
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://worldmediancr.com/#website",
    "url": "https://worldmediancr.com",
    "name": "World Media NCR - Best Advertising Agency in Meerut",
    "description": "Premier outdoor advertising agency in Meerut offering prime highway hoardings, billboards, and digital wall painting across Meerut and Delhi NCR.",
    "publisher": {
      "@id": "https://worldmediancr.com/#organization",
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://worldmediancr.com/services?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
