type Crumb = { name: string; path?: string };

const siteUrl = "https://worldmediancr.com";

function Script({ value }: { value: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  return <Script value={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, ...(item.path ? { item: `${siteUrl}${item.path}` } : {}) })) }} />;
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

export function FaqJsonLd({ questions }: { questions: Array<{ question: string; answer: string }> }) {
  return <Script value={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }} />;
}
