import React from "react";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const socialItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
  hover: { scale: 1.2, transition: { duration: 0.2 } },
};

export default function ContactPage() {
  return (
    <motion.div 
      className="flex flex-col md:flex-row min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Side: Background Image */}
      <motion.div 
        className="md:w-1/2 w-full h-64 md:h-full overflow-hidden"
        initial={{ x: -50, opacity: 0.8 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/assets/contact_page.jpg"
          alt="Contact"
          className="object-cover w-full h-full max-h-screen"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Right Side: Contact Form & Text */}
      <motion.div 
        className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-[#042c3d]"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-md mx-auto w-full"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold text-[#FDFD96] text-center underline mb-2 tracking-wider"
            variants={item}
          >
            Contact Us
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-center text-[#FCD8CD] text-base sm:text-lg mb-1"
            variants={item}
          >
            Let's Grow Your Brand Online
          </motion.p>

          {/* Main Heading */}
          <motion.p 
            className="text-center text-white text-2xl sm:text-3xl font-semibold mb-6"
            variants={item}
          >
            Start a conversation with us
          </motion.p>

          <motion.form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className="space-y-4"
            variants={container}
          >
            <motion.div variants={item}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              />
            </motion.div>

            <motion.div variants={item}>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              />
            </motion.div>

            <motion.div variants={item}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              />
            </motion.div>

            <motion.div variants={item}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              ></textarea>
            </motion.div>

            <motion.div variants={item}>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>

          {/* Social Icons */}
          <motion.div 
            className="flex justify-center gap-6 mt-6"
            variants={container}
          >
            {[
              { icon: "fab fa-facebook-f", color: "text-blue-700 hover:text-blue-900" },
              { icon: "fab fa-instagram", color: "text-pink-600 hover:text-pink-800" },
              { icon: "fab fa-twitter", color: "text-blue-400 hover:text-blue-600" },
              { icon: "fab fa-linkedin-in", color: "text-blue-800 hover:text-blue-900" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItem}
                whileHover="hover"
                className={`${social.color} transition text-2xl`}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}