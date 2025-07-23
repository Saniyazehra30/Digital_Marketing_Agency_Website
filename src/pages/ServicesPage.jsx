import React from "react";
import { ServiceCard } from "../components/ServiceCard";
import { motion } from "framer-motion";

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
    hover: { scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" },
  };

  return (
    <motion.div
      className="relative min-h-screen w-full overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Blurred Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{ backgroundImage: "url('/assets/services.jpg')" }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      {/* Foreground Content */}
      <motion.div className="relative z-10 px-6 py-10 max-w-6xl mx-auto text-[#FDFD96]" variants={containerVariants}>
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center underline tracking-wide mb-10"
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          Our Services
        </motion.h1>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 200 }}
              layout
            >
              <ServiceCard title={service.title} desc={service.desc} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}