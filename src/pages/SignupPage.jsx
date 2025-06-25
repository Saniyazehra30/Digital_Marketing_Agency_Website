import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    // Simulate check if email already exists
    const existingEmails = ["test@example.com", "user@example.com"]; // Example existing emails
    if (existingEmails.includes(email)) {
      // If email exists, redirect to login page
      alert("Email already exists. Redirecting to login.");
      navigate("/login");
      return;
    }
    // Proceed with signup logic here
    console.log("Signup submitted", { email, password });
    onLogin();
    // Redirect to home page after successful signup
    navigate("/home");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold underline mb-6 text-center text-[#FDFD96]">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className='text-white'>
          Email:
          <input
            type="email"
            placeholder='Enter your email '
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded mt-1 text-black"
          />
        </label>
        <label className='text-white'>
          Password:
          <input
            type="password"
            placeholder='ENTER PASSWORD'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded  mt-1 text-black"
          />
        </label>
        <label className='text-white'>
          Confirm Password:
          <input
            type="password"
            placeholder='Reenter your password '
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 border rounded  mt-1 text-black"
          />
        </label>
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
