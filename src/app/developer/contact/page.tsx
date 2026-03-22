import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Devashish Tyagi | Web Developer in Meerut',
  description: 'Contact Devashish Tyagi, professional web developer from Sardhana, Meerut. Get in touch for web development projects, SEO optimization, and technical consulting.',
  keywords: 'contact devashish tyagi, web developer contact meerut, hire web developer sardhana, devashish tyagi email, web developer meerut contact',
  alternates: {
    canonical: 'https://worldmediancr.com/developer/contact',
  },
  openGraph: {
    title: 'Contact Devashish Tyagi | Web Developer',
    description: 'Get in touch with Devashish Tyagi for web development projects.',
    url: 'https://worldmediancr.com/developer/contact',
    siteName: 'World Media NCR',
    images: [
      {
        url: '/images/developer/Devashish Tyagi.webp',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_IN',
    type: 'profile',
  },
};

export default function DeveloperContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li><Link href="/developer" className="text-gray-700 hover:text-blue-600">Developer</Link></li>
          <li><span className="mx-2 text-gray-400">/</span></li>
          <li className="text-gray-500">Contact</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mx-auto mb-4">
          <Image
            src="/images/developer/Devashish-Tyagi.webp"
            alt="Devashish Tyagi - Contact"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contact Devashish Tyagi</h1>
        <p className="text-xl text-gray-600">Professional Web Developer from Sardhana, Meerut</p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">📍 Location</h3>
              <p className="text-gray-600">Sardhana, Meerut, Uttar Pradesh, India</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">📧 Email</h3>
              <p className="text-gray-600">iamdevashishtyagi@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">📞 Phone</h3>
              <p className="text-gray-600">+91 9557423119</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">💬 WhatsApp</h3>
              <p className="text-gray-600">+91 9557423119</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Services Offered</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-gray-600">Next.js & React Development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-gray-600">Full Stack Web Development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-gray-600">SEO Optimization & Strategy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-gray-600">Custom Website Development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-gray-600">Website Performance Optimization</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-gray-600">Technical Consulting</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Availability */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-bold mb-3 text-gray-900">Availability</h2>
        <p className="text-gray-700">Currently accepting new projects. Available for:</p>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>Full website development projects</li>
          <li>Next.js/React development</li>
          <li>SEO optimization and consulting</li>
          <li>Website performance audits</li>
          <li>Technical consulting</li>
        </ul>
        <p className="mt-4 text-gray-700">Response time: Usually within 24 hours.</p>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg mb-6">Contact Devashish Tyagi today for a free consultation</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:devashish@worldmediancr.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Email Me
          </a>
          <a href="tel:+919897907308" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
            Call Me
          </a>
        </div>
      </div>

      {/* Back to Developer */}
      <div className="text-center mt-8">
        <Link href="/developer" className="text-blue-600 hover:underline">
          ← Back to Developer Profile
        </Link>
      </div>
    </main>
  );
}