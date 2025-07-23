import React from "react";
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120 } },
    hover: { scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" },
  };

  return (
    <motion.div
      className="relative min-h-screen w-full overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Fullscreen background image with fade-in */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: "url('/assets/portfolio.jpg')" }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      {/* Foreground Content */}
      <motion.div className="relative z-10 px-6 py-10 max-w-6xl mx-auto" variants={containerVariants}>
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center underline mb-4"
          style={{ color: "#FDFD96" }}
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          Our Portfolio
        </motion.h1>

        <motion.p
          className="text-center text-white text-lg sm:text-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          A few highlights of the projects we've delivered successfully.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white bg-opacity-90 shadow-md rounded-xl border"
              variants={cardVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 200 }}
              layout
            >
              <motion.h2
                className="text-xl font-semibold text-blue-500 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              >
                {project.name}
              </motion.h2>
              <motion.p
                className="text-gray-700 italic mb-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              >
                {project.result}
              </motion.p>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
              >
                {project.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}