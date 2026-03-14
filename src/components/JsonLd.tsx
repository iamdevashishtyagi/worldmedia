// src/app/components/JsonLd.tsx
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": "World Media NCR",
    "url": "https://worldmediancr.com",
    "logo": "https://worldmediancr.com/images/website/logo2.png",
    "image": "https://worldmediancr.com/images/website/hero-bg.jpg",
    "description": "Leading advertising agency in Meerut offering hoarding advertising, digital wall painting, billboard advertising, and outdoor media solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office Opp. GIC, Dharam Palace, Meerut",
      "addressLocality": "Meerut",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "250001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.988531",
      "longitude": "77.706077"
    },
    "telephone": "+91-9456497636",
    "email": "worldmediancr@gmail.com",
    "openingHours": "Mo-Su 09:00-20:00",
    "sameAs": [
      "https://www.facebook.com/worldmediancr",
      "https://www.instagram.com/worldmediancr"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Meerut"
      },
      {
        "@type": "City",
        "name": "Muzaffarnagar"
      },
      {
        "@type": "City", 
        "name": "Shamli"
      },
      {
        "@type": "City",
        "name": "Saharanpur"
      },
      {
        "@type": "City",
        "name": "Baghpat"
      },
      {
        "@type": "City",
        "name": "Delhi NCR"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Advertising Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hoarding Advertising in Meerut"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Wall Painting in Meerut"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Billboard Advertising in Meerut"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vehicle Branding in Meerut"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}