// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <div>
          <Link to="/" className="text-2xl font-bold text-black">
            ShoesLand
          </Link>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="text-lg font-medium hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/men" className="text-lg font-medium hover:text-gray-600">
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" className="text-lg font-medium hover:text-gray-600">
              Women
            </Link>
          </li>
          <li>
            <Link to="/kids" className="text-lg font-medium hover:text-gray-600">
              Kids
            </Link>
          </li>
        </ul>
        <div className="hidden md:block">
          {/* Changed from Shop Now to Login */}
          <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800">
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)}
            className="text-3xl text-black"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white absolute top-20 left-0 right-0 shadow-lg py-4 z-50">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="/" className="text-lg font-medium hover:text-gray-600" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/men" className="text-lg font-medium hover:text-gray-600" onClick={() => setOpen(false)}>
                Men
              </Link>
            </li>
            <li>
              <Link to="/women" className="text-lg font-medium hover:text-gray-600" onClick={() => setOpen(false)}>
                Women
              </Link>
            </li>
            <li>
              <Link to="/kids" className="text-lg font-medium hover:text-gray-600" onClick={() => setOpen(false)}>
                Kids
              </Link>
            </li>
          </ul>
          <div className="mt-4 text-center">
            {/* Changed from Shop Now to Login */}
            <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;