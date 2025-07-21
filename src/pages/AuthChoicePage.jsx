import React from "react";
import { Link } from "react-router-dom";

function AuthChoicePage() {
  return (
    <div className="flex min-h-screen animate-page-fade">
      {/* Left Side: Image */}
      <div className="w-1/2 hidden md:block overflow-hidden">
        <img
          src="/assets/authpage_image.jpg"
          alt="Digital Marketing"
          className="object-cover w-full h-full transform animate-image-zoom"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#042c3d] text-white px-10">
        <div className="space-y-6 max-w-md">
          {/* Full Heading with fade-up */}
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-[#FDFD96] animate-fade-up-heading"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Welcome to Digital Marketing Agency
          </h1>

          {/* Paragraph */}
          <p className="text-lg sm:text-xl text-gray-200 animate-fade-up-delay">
            Please login or sign up to continue
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-4 animate-button-slide">
            <Link
              to="/login"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transform hover:scale-105 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transform hover:scale-105 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthChoicePage;
