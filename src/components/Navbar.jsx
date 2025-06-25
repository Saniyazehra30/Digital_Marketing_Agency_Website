import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar({ isAuthenticated, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Digital Marketing Agency</h1>

      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <span className="text-2xl cursor-pointer">&#9776;</span>
      </div>

      <ul className={`md:flex gap-6 ${open ? "block" : "hidden"} md:block text-center md:text-left`}>
        <li><Link to="/">Home</Link></li>
        {isAuthenticated && (
          <>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </>
        )}
        {!isAuthenticated ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        ) : (
          <li>
            <button
              onClick={onLogout}
              className="text-blue-600 hover:underline cursor-pointer bg-transparent border-none p-0"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
