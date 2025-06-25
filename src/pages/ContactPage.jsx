import React from "react";

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side: Background Image */}
      <div className="md:w-1/2 w-full h-64 md:h-full">
        <img
          src="/assets/contact_page.jpg"
          alt="Contact"
          className="object-cover w-full h-full max-h-screen"
        />
      </div>

      {/* Right Side: Contact Form & Text */}
      <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-[#042c3d]">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#FDFD96] text-center underline mb-2 tracking-wider">
          Contact Us
        </h1>

        {/* Subheading */}
        <p className="text-center text-[#FCD8CD] text-base sm:text-lg mb-1">
          Let’s Grow Your Brand Online
        </p>

        {/* Main Heading */}
        <p className="text-center text-white text-2xl sm:text-3xl font-semibold mb-6">
          Start a conversation with us
        </p>

        <form
          action="https://formspree.io/f/yourFormID" // Replace with your actual Formspree ID
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-2xl text-blue-700 hover:text-blue-900 transition"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl text-pink-600 hover:text-pink-800 transition"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl text-blue-400 hover:text-blue-600 transition"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-2xl text-blue-800 hover:text-blue-900 transition"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
