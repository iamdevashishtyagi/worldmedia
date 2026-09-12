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

export function ServiceCatalogJsonLd() {
  const services: Array<[string, string]> = [
    ["Hoarding Advertising in Meerut", "/services/hoarding-advertising-meerut"], ["Billboard Advertising in Meerut", "/services/billboard-advertising-meerut"], ["Digital Wall Painting in Meerut", "/services/digital-wall-painting-meerut"], ["Vehicle Branding in Meerut", "/services/vehicle-branding-meerut"], ["Flex Printing in Meerut", "/services/flex-printing-meerut"], ["LED Display Advertising in Meerut", "/services/led-display-advertising-meerut"], ["Political Advertising in Meerut", "/services/political-advertising-meerut"],
  ];
  const value = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "World Media NCR advertising services",
    itemListElement: services.map(([name, path]) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        url: `${siteUrl}${path}`,
        provider: { "@type": "AdvertisingAgency", name: "World Media NCR", url: siteUrl },
      },
    })),
  };
  return <Script value={value} />;
}

export function LocationListJsonLd() {
  const locations = ["meerut", "muzaffarnagar", "shamli", "saharanpur", "baghpat", "hapur", "delhi", "delhi-ncr"];
  return <Script value={{ "@context": "https://schema.org", "@type": "ItemList", name: "World Media NCR service areas", itemListElement: locations.map((slug, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteUrl}/locations/${slug}` })) }} />;
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

