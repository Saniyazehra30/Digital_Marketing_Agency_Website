import React from "react";

export default function AboutPage() {
  return (
    <div
      className="w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/aboutus_page.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="bg-black bg-opacity-60 min-h-screen w-full px-6 py-10">
        <div className="max-w-4xl mx-auto space-y-8 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center uppercase underline decoration-yellow-400 decoration-4 underline-offset-4">
            About Us
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 text-justify">
            At DMA, we are passionate about helping businesses thrive in the digital world.
            Our team of creative marketers, designers, and developers work together to create
            meaningful online experiences that deliver measurable results.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl text-yellow-300 font-semibold">
                🌟 Our Mission
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 text-justify">
                To provide data-driven digital marketing solutions that accelerate growth
                for small and medium-sized businesses worldwide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl text-yellow-300 font-semibold">
                🚀 Our Vision
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 text-justify">
                To become a trusted global leader in digital strategy and brand transformation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl text-yellow-300 font-semibold">
                👩‍💻 Why Choose Us?
              </h2>
              <ul className="list-disc pl-6 text-sm sm:text-base md:text-lg text-gray-100 mt-2">
                <li>Results-first approach</li>
                <li>Customized marketing strategies</li>
                <li>Dedicated team of certified professionals</li>
                <li>Transparent reporting and performance tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
