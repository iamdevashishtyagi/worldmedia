import { Metadata } from 'next';
import PortfolioGallery from "@/components/PortfolioGallery";
import { BreadcrumbJsonLd } from "@/components/SeoJsonLd";

export const metadata: Metadata = {
  title: 'Advertising Portfolio & Gallery | Best Hoarding Projects in Meerut | World Media NCR',
  description: 'View real project portfolio from the best advertising agency in Meerut. Live examples of highway hoarding advertising, digital wall painting, unipole billboards, and outdoor media campaigns by World Media NCR.',
  keywords: 'best advertising agency in meerut gallery, hoarding projects meerut, wall painting portfolio, outdoor advertising examples, billboard designs meerut, highway hoarding photo proof',
  alternates: {
    canonical: 'https://worldmediancr.com/gallery',
  },
  openGraph: {
    title: 'Advertising Portfolio & Gallery | Best Hoarding Projects in Meerut | World Media NCR',
    description: 'Portfolio of billboard, highway hoarding, and digital wall painting projects across Meerut and Delhi NCR.',
    url: 'https://worldmediancr.com/gallery',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/portfolio/Baghra Bus Stand.webp',
        width: 1200,
        height: 630,
        alt: 'World Media NCR - Best Advertising Agency in Meerut Portfolio',
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