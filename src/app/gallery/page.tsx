// src/app/gallery/page.tsx
import { Metadata } from 'next';
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: 'Advertising Gallery | Hoarding & Wall Painting Projects in Meerut',
  description: 'View our portfolio of successful advertising projects in Meerut & NCR. Real examples of hoarding advertising, digital wall painting, billboard campaigns, and outdoor media installations.',
  keywords: 'advertising gallery meerut, hoarding projects meerut, wall painting portfolio, outdoor advertising examples, billboard designs meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/gallery',
  },
};

export default function GalleryPage() {
  return (
    <main>
      <PortfolioGallery />
    </main>
  );
}