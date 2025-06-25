import React from "react";
import { TestimonialCard } from "../components/TestimonialCard";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Amit Sharma",
      feedback:
        "DMA helped us double our online sales in just 3 months. The team was responsive, professional, and results-focused.",
    },
    {
      name: "Riya Mehta",
      feedback:
        "They redesigned our website and launched Facebook Ads — we now get consistent leads every week!",
    },
    {
      name: "Nikhil Rao",
      feedback:
        "Truly the best marketing team we’ve worked with. SEO results were noticeable within the first few weeks.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{ backgroundImage: "url('/assets/testimonials.jpg')" }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-5xl mx-auto p-6 space-y-10">
        <h1
          className="text-4xl sm:text-5xl font-bold text-center underline decoration-white underline-offset-4"
          style={{ color: "#FDFD96" }}
        >
          Client Testimonials
        </h1>

        <p className="text-center text-white text-lg sm:text-xl">
          Here’s what our happy clients have to say about working with DMA.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} name={t.name} feedback={t.feedback} />
          ))}
        </div>
      </div>
    </div>
  );
}
