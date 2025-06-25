import React from "react";

export default function HomePage() {
  const services = [
    { title: "SEO", desc: "Improve your Google rankings." },
    { title: "Social Media Marketing", desc: "Engage your audience on social platforms." },
    { title: "Paid Ads", desc: "Run high-converting ad campaigns." },
    { title: "Content Marketing", desc: "Create and distribute valuable content." },
    { title: "Web Development", desc: "Design and build your online presence." },
    { title: "Email Marketing", desc: "Reach your audience directly." },
  ];

  return (
    <div
      className="p-4 space-y-16 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/assets/home.jpg')" }}
    >
      {/* Hero Section */}
      <section className="text-center py-16 bg-black bg-opacity-60 text-white rounded-2xl">
        <h1 className="text-4xl font-bold mb-4">
          Grow Your Business with Digital Marketing Agency
        </h1>
        <p className="text-lg mb-6">
          Digital Marketing Services that Deliver Results
        </p>
        <button className="text-lg px-6 py-2 bg-white text-blue-600 rounded-full shadow hover:shadow-md transition">
          Get a Free Consultation
        </button>
      </section>

      {/* Services Section */}
      <section className="bg-white bg-opacity-90 rounded-2xl p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-100 p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">
          Let’s work together to grow your business online.
        </p>
        <a href="/contact">
          <button className="px-6 py-2 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </a>
      </section>
    </div>
  );
}
