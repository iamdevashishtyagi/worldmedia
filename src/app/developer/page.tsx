// src/app/developer/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Developer | Devashish Tyagi - Sardhana, Meerut',
  description: 'Website developed by Devashish Tyagi, a professional web developer from Sardhana, Meerut. Expert in modern web technologies and SEO optimization.',
  keywords: 'devashish tyagi, devashish tyagi sardhana, devashish tyagi meerut, web developer sardhana, website developer meerut',
  alternates: {
    canonical: 'https://worldmediancr.com/developer',
  },
};

export default function DeveloperPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Website Developer: Devashish Tyagi</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-lg mb-4">
          This website for <strong>World Media NCR</strong> has been developed by <strong>Devashish Tyagi</strong>, 
          a professional web developer based in Sardhana, Meerut.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">About Devashish Tyagi</h2>
        <p className="mb-4">
          Devashish Tyagi is a skilled web developer from Sardhana, Meerut, specializing in modern web technologies 
          including Next.js, React, and SEO-friendly website development. With expertise in creating high-performance 
          websites that rank well in search engines, he helps businesses establish a strong digital presence.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Work on World Media NCR</h2>
        <p className="mb-4">
          For World Media NCR, Devashish Tyagi has implemented:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Modern Next.js 14 website architecture</li>
          <li>SEO-optimized page structures and metadata</li>
          <li>Local business schema implementation</li>
          <li>Fast-loading, mobile-responsive design</li>
          <li>Strategic keyword targeting for Meerut & NCR markets</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Location</h2>
        <p>
          Devashish Tyagi operates from Sardhana, Meerut, serving clients across Uttar Pradesh and beyond 
          with professional web development and digital solutions.
        </p>

        <div className="mt-8 p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-600">
            For web development inquiries, contact Devashish Tyagi through World Media NCR.
          </p>
        </div>
      </div>
    </main>
  );
}