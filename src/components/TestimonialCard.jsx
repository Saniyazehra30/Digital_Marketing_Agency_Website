import React from "react";
import { motion } from "framer-motion";

export function TestimonialCard({ name, feedback }) {
  return (
    <motion.div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
      <p className="italic text-gray-700 mb-4">“{feedback}”</p>
      <p className="font-semibold text-blue-600">– {name}</p>
    </motion.div>
  );
}
