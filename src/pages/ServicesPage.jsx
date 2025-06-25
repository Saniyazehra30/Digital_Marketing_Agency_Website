import React from "react";
import { ServiceCard } from "../components/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Increase your website’s visibility in search engines and attract organic traffic.",
    },
    {
      title: "Social Media Marketing",
      desc: "Grow your brand presence across Facebook, Instagram, LinkedIn, and more.",
    },
    {
      title: "Paid Advertising",
      desc: "Run high-performing Google Ads and Meta Ads campaigns to drive conversions.",
    },
    {
      title: "Content Creation",
      desc: "Engage audiences through well-written blogs, stunning graphics, and impactful videos.",
    },
    {
      title: "Web Design & Development",
      desc: "Build fast, mobile-responsive, and beautiful websites tailored to your goals.",
    },
    {
      title: "Email Marketing",
      desc: "Nurture leads and convert customers with strategic email campaigns.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{ backgroundImage: "url('/assets/services.jpg')" }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 px-6 py-10 max-w-6xl mx-auto text-[#FDFD96]">
        <h1 className="text-4xl sm:text-5xl font-bold text-center underline tracking-wide mb-10">
          Our Services
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} desc={service.desc} />
          ))}
        </div>
      </div>
    </div>
  );
}
