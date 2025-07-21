import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Add Framer Motion for advanced animations
import { motion } from "framer-motion";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    console.log("Login submitted", { email, password });
    onLogin();
    // Redirect to home page after login
    navigate("/home");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
    hover: { scale: 1.03, boxShadow: "0 4px 24px rgba(0,0,0,0.15)" },
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-black/70 backdrop-blur"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold underline mb-6 text-center text-[#FDFD96]"
        variants={itemVariants}
        transition={{ duration: 0.5 }}
      >
        Login
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.label className="text-white" variants={itemVariants}>
          Email:
          <motion.input
            type="email"
            placeholder="ENTER YOUR EMAIL "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded mt-1 text-black"
            whileFocus={{ scale: 1.04, borderColor: "#FDFD96" }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.label>
        <motion.label className="text-white" variants={itemVariants}>
          Password:
          <motion.input
            type="password"
            placeholder="ENTER PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded mt-1 text-black"
            whileFocus={{ scale: 1.04, borderColor: "#FDFD96" }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.label>
        <motion.button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          variants={itemVariants}
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Login
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default LoginPage;