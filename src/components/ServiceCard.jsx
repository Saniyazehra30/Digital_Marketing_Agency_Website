import React from "react";

export function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 bg-white">
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}
