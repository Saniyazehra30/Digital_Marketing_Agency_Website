import React from "react";

export function TestimonialCard({ name, feedback }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
      <p className="italic text-gray-700 mb-4">“{feedback}”</p>
      <p className="font-semibold text-blue-600">– {name}</p>
    </div>
  );
}
