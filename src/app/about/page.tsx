// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">About World Media</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg text-white-600 mb-6">
            World Media has been at the forefront of the advertising industry since 2013, delivering innovative and effective advertising solutions to businesses of all sizes.
          </p>
          <p className="text-lg text-white mb-6">
            Our mission is to help brands achieve maximum visibility and impact through strategic outdoor advertising, digital solutions, and creative campaigns that resonate with target audiences.
          </p>
          <p className="text-lg text-white mb-6">
            What sets us apart is our commitment to quality, innovation, and customer satisfaction. We combine traditional advertising expertise with modern digital strategies to create comprehensive campaigns that deliver results.
          </p>
        </div>
      </div>
    </main>
  );
}