import React from "react";

export default function PortfolioPage() {
  const projects = [
    {
      name: "E-commerce SEO Boost",
      result: "Increased organic traffic by 250% in 3 months",
      description:
        "We implemented keyword optimization, technical SEO fixes, and backlink strategies for a growing online fashion store.",
    },
    {
      name: "Local Business Social Campaign",
      result: "Gained 1,500+ local followers and 200+ leads in 2 months",
      description:
        "Designed and managed Instagram and Facebook ad campaigns for a fitness center in Hyderabad.",
    },
    {
      name: "Website Redesign for SaaS Startup",
      result: "Reduced bounce rate by 40% and improved conversions",
      description:
        "Delivered a clean, fast, mobile-first website using React, improving the UX and brand trust.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fullscreen background image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: "url('/assets/portfolio.jpg')" }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 px-6 py-10 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center underline mb-4" style={{ color: "#FDFD96" }}>
          Our Portfolio
        </h1>

        <p className="text-center text-white text-lg sm:text-xl mb-10">
          A few highlights of the projects we've delivered successfully.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 bg-white bg-opacity-90 shadow-md rounded-xl border">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">{project.name}</h2>
              <p className="text-gray-700 italic mb-2">{project.result}</p>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
