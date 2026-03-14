import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advertising Agency in Meerut | Hoarding & Outdoor Ads | World Media NCR',
  description: 'Premier advertising agency in Meerut offering hoarding advertising, digital wall painting, billboard, and outdoor media services. 10+ years serving Meerut businesses. Get the best rates.',
  keywords: 'advertising agency meerut, advertising companies meerut, outdoor advertising meerut, hoarding advertising meerut, digital wall painting meerut, billboard meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/locations/meerut',
  },
};

export default function MeerutLocationPage() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Advertising Agency in Meerut – World Media NCR</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl mb-6">World Media NCR is your trusted <strong>advertising agency in Meerut</strong>, providing comprehensive outdoor advertising solutions since 2013. We specialize in helping Meerut-based businesses and national brands reach their target audience through strategic outdoor media placements.</p>

        <h2>Complete Advertising Services in Meerut</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Link href="/services/hoarding-advertising-meerut" className="block p-6 bg-white border rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Hoarding Advertising Meerut</h3>
            <p className="text-gray-600">Premium billboard spaces at Delhi Road, Roorkee Road, Garh Road and more</p>
          </Link>
          <Link href="/services/digital-wall-painting-meerut" className="block p-6 bg-white border rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Digital Wall Painting Meerut</h3>
            <p className="text-gray-600">Cost-effective long-term wall advertisements across the city</p>
          </Link>
          <Link href="/services/billboard-advertising-meerut" className="block p-6 bg-white border rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Billboard Advertising Meerut</h3>
            <p className="text-gray-600">Large format outdoor displays on highways and main roads</p>
          </Link>
          <Link href="/services/vehicle-branding-meerut" className="block p-6 bg-white border rounded-xl hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Vehicle Branding Meerut</h3>
            <p className="text-gray-600">Mobile advertising that travels across the city</p>
          </Link>
        </div>

        <h2>Prime Advertising Locations in Meerut</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Delhi Road</strong> – Main highway with 100,000+ daily commuters</li>
          <li><strong>Roorkee Road</strong> – Near educational institutions, heavy student traffic</li>
          <li><strong>Garh Road</strong> – Commercial district with shops and businesses</li>
          <li><strong>Muzaffarnagar Highway</strong> – Interstate route with high-speed traffic</li>
          <li><strong>University Road</strong> – Near Chaudhary Charan Singh University</li>
          <li><strong>Medical College Road</strong> – Healthcare district with patient traffic</li>
          <li><strong>Gokalpuri</strong> – Busy residential-commercial intersection</li>
          <li><strong>Shiv Chowk</strong> – Major city center with high footfall</li>
        </ul>

        <h2>Why Choose World Media NCR in Meerut?</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>10+ Years Experience</strong> – Deep understanding of Meerut market</li>
          <li><strong>Premium Locations</strong> – Access to best hoarding and wall spaces</li>
          <li><strong>500+ Happy Clients</strong> – Trusted by leading brands</li>
          <li><strong>Competitive Rates</strong> – Best prices for outdoor advertising</li>
          <li><strong>Professional Team</strong> – Expert designers and installers</li>
          <li><strong>All Permits Handled</strong> – Government-approved locations</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        
        <h3>Which is the best advertising agency in Meerut?</h3>
        <p>World Media NCR is widely recognized as one of the best advertising agencies in Meerut, with 10+ years of experience, prime locations across the city, and a track record of successful campaigns for local and national brands.</p>

        <h3>How much does outdoor advertising cost in Meerut?</h3>
        <p>Outdoor advertising costs in Meerut vary by medium: hoarding advertising ranges from ₹8,000 to ₹50,000 per month, digital wall painting from ₹50,000 to ₹2,00,000 for 3-year campaigns, and vehicle branding from ₹15,000 upwards per vehicle. Contact us for customized quotes.</p>

        <h3>Do you provide advertising services in nearby cities?</h3>
        <p>Yes, we provide advertising services across <Link href="/locations/muzaffarnagar">Muzaffarnagar</Link>, <Link href="/locations/shamli">Shamli</Link>, <Link href="/locations/saharanpur">Saharanpur</Link>, <Link href="/locations/baghpat">Baghpat</Link>, Hapur, and Delhi NCR. We have hoarding and wall painting locations in all these cities.</p>
      </div>

      <section className="mt-16 bg-blue-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6">Our Advertising Services in Meerut</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/services/hoarding-advertising-meerut" className="bg-white p-4 rounded-lg text-center hover:shadow-md">
            Hoarding Advertising
          </Link>
          <Link href="/services/digital-wall-painting-meerut" className="bg-white p-4 rounded-lg text-center hover:shadow-md">
            Digital Wall Painting
          </Link>
          <Link href="/services/billboard-advertising-meerut" className="bg-white p-4 rounded-lg text-center hover:shadow-md">
            Billboard Advertising
          </Link>
          <Link href="/services/vehicle-branding-meerut" className="bg-white p-4 rounded-lg text-center hover:shadow-md">
            Vehicle Branding
          </Link>
          <Link href="/services/flex-printing-meerut" className="bg-white p-4 rounded-lg text-center hover:shadow-md">
            Flex Printing
          </Link>
          <Link href="/services/led-display-advertising-meerut" className="bg-white p-4 rounded-lg text-center hover:shadow-md">
            LED Displays
          </Link>
        </div>
      </section>
    </main>
  );
}