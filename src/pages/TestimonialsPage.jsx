import React from "react";
import { TestimonialCard } from "../components/TestimonialCard";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Amit Sharma",
      feedback:
        "DMA helped us double our online sales in just 3 months. The team was responsive, professional, and results-focused.",
    },
    {
      name: "Riya Mehta",
      feedback:
        "They redesigned our website and launched Facebook Ads — we now get consistent leads every week!",
    },
    {
      name: "Saniya",
      feedback:
        "They redesigned our website and launched Facebook Ads — we now get consistent leads every week!",
    },
    {
      name: "Nikhil Rao",
      feedback:
        "Truly the best marketing team we’ve worked with. SEO results were noticeable within the first few weeks.",
    },
    {
      name: "Priya Singh",
      feedback:
        "DMA’s Google Ads campaign brought us high-quality leads. Highly recommended!",
    },
    {
      name: "Rahul Verma",
      feedback:
        "Professional, creative, and always on time. Our brand visibility has never been better.",
    },
    {
      name: "Meera Joshi",
      feedback:
        "The team’s expertise in digital marketing is unmatched. We saw results fast!",
    },
     {
      name: "Vikram Patel",
      feedback:
        "Excellent communication and clear reporting. We trust DMA with all our marketing.",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const heading = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const description = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.95, rotate: -2 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotate: 0, 
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } 
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{ backgroundImage: "url('/assets/testimonials.jpg')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Foreground content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto p-6 space-y-10"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center underline decoration-white underline-offset-4"
          style={{ color: "#FDFD96" }}
          variants={heading}
        >
          Client Testimonials
        </motion.h1>

        <motion.p
          className="text-center text-white text-lg sm:text-xl"
          variants={description}
        >
          Here’s what our happy clients have to say about working with DMA.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={container}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                rotate: 1,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <TestimonialCard name={t.name} feedback={t.feedback} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}