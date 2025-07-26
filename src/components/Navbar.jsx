import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="w-full flex justify-between items-center px-3 md:px-8 py-4 font-medium bg-white shadow-sm">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img 
          src={logo} 
          alt="Nike Logo" 
          className="w-16 sm:w-20 h-auto"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="w-3/4 sm:w-1/2 lg:w-1/4">
        <ul className="flex max-[350px]:flex-col max-[350px]:gap-2 justify-between items-center h-full">
          <li>
            <a 
              href="#menu" 
              className="text-gray-700 hover:text-gray-900 focus:text-black transition-colors duration-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
            >
              Menu
            </a>
          </li>
          <li>
            <a 
              href="#arrivals" 
              className="text-gray-700 hover:text-gray-900 focus:text-black transition-colors duration-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
            >
              New Arrivals
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-gray-900 focus:text-black transition-colors duration-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-gray-900 focus:text-black transition-colors duration-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* CTA Button */}
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 flex-shrink-0">
        Login
      </button>
    </header>
  );
}

export default Navbar;
