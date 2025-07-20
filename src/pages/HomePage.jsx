import React from "react";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

export default function HomePage() {
  const services = [
    { title: "SEO", desc: "Improve your Google rankings." },
    { title: "Social Media Marketing", desc: "Engage your audience on social platforms." },
    { title: "Paid Ads", desc: "Run high-converting ad campaigns." },
    { title: "Content Marketing", desc: "Create and distribute valuable content." },
    { title: "Web Development", desc: "Design and build your online presence." },
    { title: "Email Marketing", desc: "Reach your audience directly." },
  ];

  return (
    <motion.div
      className="p-4 space-y-16 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/assets/home.jpg')" }}
      initial="hidden"
      animate="show"
    >
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-40 -z-10"
        variants={fadeIn}
      />

      {/* Hero Section */}
      <motion.section
        className="text-center py-16 bg-black bg-opacity-60 text-white rounded-2xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          variants={item}
        >
          Grow Your Business with Digital Marketing Agency
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          variants={item}
        >
          Digital Marketing Services that Deliver Results
        </motion.p>
        <motion.button
          className="text-lg px-6 py-2 bg-white text-blue-600 rounded-full shadow hover:shadow-md transition"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free Consultation
        </motion.button>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="bg-white bg-opacity-90 rounded-2xl p-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-6 text-center"
          variants={item}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition"
              variants={item}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        className="bg-gray-100 p-8 rounded-2xl text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-4"
          variants={item}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          className="mb-6"
          variants={item}
        >
          Let's work together to grow your business online.
        </motion.p>
        <motion.a
          href="/contact"
          variants={item}
        >
          <motion.button
            className="px-6 py-2 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.a>
      </motion.section>
    </motion.div>
  );
}