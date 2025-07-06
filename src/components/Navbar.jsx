import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <header className="w-full flex justify-between pr-3 pl-3 md:pr-8 md:pl-8 font-medium  ">
      <div className="w-16 sm:w-20 ">
        <img src={logo} alt="logo" />
      </div>
      <nav  className=" w-3/4 sm:w-1/2 lg:w-1/4 p-2">
        <ul className=" max-[350px]:flex-col flex  justify-between h-full items-center  " >
          <li><a  href='#'>Menu</a></li>
          <li><a href='#'>Location</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <button className="text-white bg-red-500 h-1/2 mt-auto mb-auto px-3 py-1">Login</button>
    </header>
  );
}

export default Navbar;
