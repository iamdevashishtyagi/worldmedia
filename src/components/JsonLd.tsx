// src/components/JsonLd.tsx
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AdvertisingAgency", "LocalBusiness"],
    "@id": "https://worldmediancr.com/#organization",
    "name": "World Media NCR",
    "alternateName": ["World Media Advertising Solutions", "World Media Meerut"],
    "url": "https://worldmediancr.com",
    "logo": "https://worldmediancr.com/images/website/logo2.png",
    "image": "https://worldmediancr.com/images/website/herobg2.jpg",
    "description": "World Media NCR is Meerut's premier outdoor advertising agency since 2013, offering premium highway hoardings, digital wall painting, unipoles, billboards, vehicle branding, and DOOH media across Meerut, Delhi NCR, and Western UP.",
    "foundingDate": "2013",
    "founder": {
      "@type": "Person",
      "name": "Shrikant Tyagi",
      "jobTitle": "Founder & CEO"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office Opp. GIC, Dharam Palace, Begum Bridge Road",
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
    "priceRange": "₹₹ - ₹₹₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Net Banking, Cheque",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9456497636",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9897907308",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/worldmediancr",
      "https://www.instagram.com/worldmediancr"
    ],
    "areaServed": [
      { "@type": "City", "name": "Meerut" },
      { "@type": "City", "name": "Muzaffarnagar" },
      { "@type": "City", "name": "Shamli" },
      { "@type": "City", "name": "Saharanpur" },
      { "@type": "City", "name": "Baghpat" },
      { "@type": "City", "name": "Hapur" },
      { "@type": "City", "name": "Ghaziabad" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "State", "name": "Delhi NCR" },
      { "@type": "State", "name": "Uttar Pradesh" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Outdoor Advertising Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hoarding Advertising in Meerut & NCR",
            "url": "https://worldmediancr.com/services/hoarding-advertising-meerut",
            "description": "Strategic outdoor billboard and unipole placements on Delhi-Meerut Expressway, Roorkee Road, and key commercial routes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Wall Painting in Meerut & UP",
            "url": "https://worldmediancr.com/services/digital-wall-painting-meerut",
            "description": "Long-lasting, high-coverage wall painting advertising across urban towns and rural districts in Western UP."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Billboard Advertising in Meerut",
            "url": "https://worldmediancr.com/services/billboard-advertising-meerut",
            "description": "Large format highway and arterial road billboards with high-impact commuter visibility."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vehicle Branding in Meerut",
            "url": "https://worldmediancr.com/services/vehicle-branding-meerut",
            "description": "Auto, bus, cab, and delivery fleet wraps for dynamic citywide brand exposure."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flex Printing in Meerut",
            "url": "https://worldmediancr.com/services/flex-printing-meerut",
            "description": "High-definition weather-resistant flex and vinyl printing for commercial promotions and events."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LED Display Advertising in Meerut",
            "url": "https://worldmediancr.com/services/led-display-advertising-meerut",
            "description": "Digital out-of-home (DOOH) screens in prime retail and commercial junctions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Political Advertising in Meerut",
            "url": "https://worldmediancr.com/services/political-advertising-meerut",
            "description": "Election visibility campaigns, constituency coverage, unipoles, and wall media across Western UP."
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
