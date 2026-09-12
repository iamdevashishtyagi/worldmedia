import { Metadata } from 'next';
import PortfolioGallery from "@/components/PortfolioGallery";
import { BreadcrumbJsonLd } from "@/components/SeoJsonLd";

export const metadata: Metadata = {
  title: 'Advertising Gallery | Hoarding & Wall Painting Projects in Meerut',
  description: 'View our portfolio of successful advertising projects in Meerut & NCR. Real examples of hoarding advertising, digital wall painting, billboard campaigns, and outdoor media installations.',
  keywords: 'advertising gallery meerut, hoarding projects meerut, wall painting portfolio, outdoor advertising examples, billboard designs meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/gallery',
  },
  openGraph: {
    title: 'Outdoor Advertising Gallery | World Media NCR',
    description: 'Portfolio of billboard, highway hoarding, and digital wall painting projects across Meerut and Delhi NCR.',
    url: 'https://worldmediancr.com/gallery',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Baghra Bus Stand.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function GalleryPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://worldmediancr.com' },
          { name: 'Gallery', url: 'https://worldmediancr.com/gallery' },
        ]}
      />
      <PortfolioGallery />
    </main>
  );
}