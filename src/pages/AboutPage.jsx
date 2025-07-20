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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const pulseEmoji = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: { duration: 2, repeat: Infinity },
  },
};

export default function AboutPage() {
  return (
    <motion.div
      className="w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/aboutus_page.jpg')" }}
      initial={{ opacity: 0.8, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-60 min-h-screen w-full px-6 py-10">
        <div className="max-w-4xl mx-auto space-y-8 text-white">
          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center uppercase underline decoration-yellow-400 decoration-4 underline-offset-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About Us
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-100 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            At DMA, we are passionate about helping businesses thrive in the digital world.
            Our team of creative marketers, designers, and developers work together to create
            meaningful online experiences that deliver measurable results.
          </motion.p>

          {/* Content Sections */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Mission */}
            <motion.div variants={item}>
              <motion.h2 
                className="text-2xl sm:text-3xl text-yellow-300 font-semibold"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span
                  variants={pulseEmoji}
                  animate="pulse"
                  className="inline-block mr-2"
                >
                  🌟
                </motion.span>
                Our Mission
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-100 text-justify"
                variants={item}
              >
                To provide data-driven digital marketing solutions that accelerate growth
                for small and medium-sized businesses worldwide.
              </motion.p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={item}>
              <motion.h2 
                className="text-2xl sm:text-3xl text-yellow-300 font-semibold"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span
                  variants={pulseEmoji}
                  animate="pulse"
                  className="inline-block mr-2"
                >
                  🚀
                </motion.span>
                Our Vision
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-100 text-justify"
                variants={item}
              >
                To become a trusted global leader in digital strategy and brand transformation.
              </motion.p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div variants={item}>
              <motion.h2 
                className="text-2xl sm:text-3xl text-yellow-300 font-semibold"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span
                  variants={pulseEmoji}
                  animate="pulse"
                  className="inline-block mr-2"
                >
                  👩‍💻
                </motion.span>
                Why Choose Us?
              </motion.h2>
              <motion.ul 
                className="list-disc pl-6 text-sm sm:text-base md:text-lg text-gray-100 mt-2 space-y-1"
                variants={container}
              >
                {[
                  "Results-first approach",
                  "Customized marketing strategies",
                  "Dedicated team of certified professionals",
                  "Transparent reporting and performance tracking"
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    variants={listItem}
                    whileHover={{ 
                      x: 5,
                      color: "#facc15",
                      transition: { duration: 0.2 }
                    }}
                    className="transition-colors duration-300 cursor-default"
                  >
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}