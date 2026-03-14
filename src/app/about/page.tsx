// src/app/about/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Advertising Agency in Meerut | World Media NCR',
  description: 'Learn about World Media NCR, Meerut\'s premier advertising agency since 2013. Led by Shrikant Tyagi, we specialize in hoarding advertising, digital wall painting, and outdoor media solutions.',
  keywords: 'about world media ncr, advertising agency meerut about, shrikant tyagi meerut, devashish tyagi meerut, advertising company history, outdoor media experts',
  alternates: {
    canonical: 'https://worldmediancr.com/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Add schema markup for leadership */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "World Media NCR",
                "founder": {
                  "@type": "Person",
                  "name": "Shrikant Tyagi",
                  "jobTitle": "Founder & CEO",
                  "description": "Visionary entrepreneur in outdoor advertising industry"
                }
              }
            })
          }}
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
          World Media NCR – Leading Advertising Agency in Meerut Since 2013
        </h1>

        <div className="prose prose-lg mx-auto text-white">

          <p className="text-lg mb-6">
            World Media NCR is a leading advertising agency in Meerut providing innovative outdoor advertising solutions since 2013. 
            We specialize in hoarding advertising, digital wall painting, billboard advertising, vehicle branding, and complete outdoor 
            media solutions for businesses across Meerut and NCR. Our goal is to help brands achieve maximum visibility through strategic 
            advertising placements in high-traffic locations.
          </p>

          <p className="text-lg mb-6">
            Over the years, World Media NCR has built a strong reputation for delivering impactful advertising campaigns that help 
            businesses grow their brand presence. From digital wall painting in Meerut to large-scale hoarding advertising in NCR, 
            our services are designed to reach thousands of people every day. Our advertising strategies combine creative design, 
            strategic location selection, and high-quality production to ensure maximum brand exposure.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Our Advertising Services in Meerut & NCR
          </h2>

          <p className="text-lg mb-6">
            World Media NCR offers a wide range of outdoor advertising services tailored for businesses looking to expand their 
            reach in Meerut and surrounding NCR cities. Our most popular services include:
          </p>

          <ul className="list-disc pl-6 mb-6 text-lg">
            <li>Hoarding Advertising in Meerut and NCR</li>
            <li>Digital Wall Painting in Meerut</li>
            <li>Outdoor Billboard Advertising</li>
            <li>Vehicle Branding and Transit Advertising</li>
            <li>LED Display Advertising</li>
            <li>Retail and Market Area Advertising</li>
          </ul>

          <p className="text-lg mb-6">
            Whether you want to promote your brand through digital wall painting in Meerut or large hoarding advertising campaigns 
            across NCR highways and city markets, our experienced team ensures your brand message reaches the right audience at 
            the right locations.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Why Businesses Choose World Media NCR
          </h2>

          <p className="text-lg mb-6">
            Businesses trust World Media NCR because we focus on delivering high-impact advertising campaigns that generate real 
            results. Our deep understanding of outdoor advertising in Meerut allows us to identify prime advertising locations 
            including busy roads, markets, and commercial hubs. By combining traditional advertising techniques with modern 
            marketing strategies, we help brands dominate local visibility.
          </p>

          <p className="text-lg mb-6">
            Our commitment to quality, transparency, and innovation makes us one of the most trusted advertising companies in 
            Meerut and NCR. From campaign planning to final installation, our team ensures every project is executed with 
            precision and professionalism.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Leadership
          </h2>

          <p className="text-lg mb-6">
            World Media NCR is led by <strong>Shrikant Tyagi</strong>, a visionary entrepreneur with years of experience in the 
            outdoor advertising industry. Under his leadership, the company has successfully delivered numerous advertising 
            campaigns for local businesses, national brands, and growing startups across Meerut and NCR.
          </p>

          <p className="text-lg mb-6">
            With a strong focus on innovation and customer satisfaction, Shrikant Tyagi continues to expand the reach of 
            World Media NCR as a trusted name for advertising in Meerut, hoarding advertising NCR, and digital wall painting 
            campaigns across North India.
          </p>

        </div>
      </div>
    </main>
  );
}