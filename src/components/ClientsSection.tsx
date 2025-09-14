// src/components/ClientsSection.tsx
const clientsByIndustry = {
  "Real Estate": [
    "Metro Corporation", "Skyline Developers", "Urban Spaces Ltd", "Greenfield Properties",
    "Elite Builders", "Prime Realty Group", "Cityscape Developers"
  ],
  "Retail": [
    "Urban Retail Group", "MegaMart Chains", "Style Boutiques", "Home Essentials",
    "Fashion Hub", "SuperValue Stores", "Lifestyle Brands"
  ],
  "Technology": [
    "Tech Innovations Ltd", "Data Systems Inc", "Cloud Solutions", "Digital Dynamics",
    "NextGen Tech", "Innovate Labs", "Smart Systems"
  ],
  "Healthcare": [
    "MediCare Hospitals", "Wellness Centers", "Pharma Solutions", "Health First",
    "Care Plus", "Medical Innovations", "Life Care"
  ],
  "Education": [
    "EduFuture Schools", "Knowledge Institute", "Smart Learning", "Academic Excellence",
    "Campus Connect", "Learn Bright", "Education First"
  ],
  "Hospitality": [
    "Grand Hotels", "Food Express", "Travel Comfort", "Luxury Stays",
    "Taste Delights", "Hospitality Plus", "Comfort Zones"
  ]
};

export default function ClientsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Clients</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud to partner with leading organizations across various sectors
          </p>
        </div>

        {/* Clients by Industry */}
        <div className="space-y-16">
          {Object.entries(clientsByIndustry).map(([industry, clients]) => (
            <div key={industry} className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {industry}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                  >
                    <div className="text-center">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {client}
                      </h3>
                      <p className="text-gray-500 text-sm">{industry}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-xl">
              <p className="text-sm italic mb-4">"World Media transformed our brand visibility with their innovative hoarding solutions. Highly recommended!"</p>
              <p className="font-semibold">- Metro Corporation</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-xl">
              <p className="text-sm italic mb-4">"The vehicle branding campaign delivered exceptional results. Professional service from start to finish."</p>
              <p className="font-semibold">- Swift Logistics</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-xl">
              <p className="text-sm italic mb-4">"Their LED display solutions have significantly increased our footfall and customer engagement."</p>
              <p className="font-semibold">- Urban Retail Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}