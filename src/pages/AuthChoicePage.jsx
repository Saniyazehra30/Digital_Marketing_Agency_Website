import React from "react";
import { Link } from "react-router-dom";

function AuthChoicePage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side: Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="/assets/authpage_image.jpg"
          alt="Digital Marketing"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#042c3d] text-white px-10">
        <div className="space-y-6 max-w-md">
          <h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#FDFD96]"
            style={{ fontFamily: "Times New Roman, serif", textDecoration: "underline" }}
          >
            Welcome to <br /> Digital Marketing Agency
          </h1>

          <p className="text-lg sm:text-xl text-gray-200">
            Please login or sign up to continue
          </p>

          <div className="flex gap-6 mt-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
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
