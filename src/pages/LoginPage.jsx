import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold underline mb-6 text-center text-[#FDFD96]">
  Login
</h2>


      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className= " text-white ">
          Email:
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded  mt-1 text-black"
          />
        </label>
        <label className ="text-white ">
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
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
