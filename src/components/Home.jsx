// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
import SmoothShoeCanvas from "./SmoothShoeModel";
import { menimg, womanimg, kidimg } from "../utils";

function Home() {
  return (
    <section id="home" className="box-border overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row mt-10 w-full max-w-7xl mx-auto px-4 mb-32 md:gap-6 gap-2">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-7 uppercase leading-tight">
            Your feet deserve the best
          </h1>
          <p className="text-gray-600 font-medium text-justify mb-6">
            Your feet deserve the best and we are here to help you with our shoes
          </p>
          
          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="bg-red-500 text-white px-6 py-3 font-medium rounded">
              Shop Now
            </button>
            <button className="border-2 border-gray-600 text-gray-600 px-6 py-3 font-bold rounded">
              Category
            </button>
          </div>

          {/* Available On Section */}
          <div>
            <p className="mb-3">Also available on</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-6">
                <img 
                  src={flipkart} 
                  alt="flipkart logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-8 h-6">
                <img 
                  src={amazon} 
                  alt="amazon logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* shoes model*/}
        <div className="flex-1">
          <SmoothShoeCanvas />
        </div>
      </div>

      {/* Menu Categories Section */}
      <section id="menu" className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-4 overflow-hidden">
        {/* Men's Section */}
        <Link to="/men" className="w-full md:w-1/3 p-4">
          <div className="w-full h-64 mb-4 cursor-pointer">
            <img 
              src={menimg} 
              alt="Man wearing shoes" 
              className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform rounded-lg"
            />
          </div>
          <p className="text-center font-medium">Explore Men's collection</p>
        </Link>

        {/* Kids Section */}
        <Link to="/kids" className="w-full md:w-1/3 p-4">
          <div className="w-full h-64 mb-4 cursor-pointer">
            <img 
              src={kidimg} 
              alt="Kid wearing shoes" 
              className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform rounded-lg"
            />
          </div>
          <p className="text-center font-medium">Explore Kid's collection</p>
        </Link>

        {/* Women's Section */}
        <Link to="/women" className="w-full md:w-1/3 p-4">
          <div className="w-full h-64 mb-4 cursor-pointer">
            <img 
              src={womanimg} 
              alt="Woman wearing shoes" 
              className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform rounded-lg"
            />
          </div>
          <p className="text-center font-medium">Explore Women's collection</p>
        </Link>
      </section>
    </section>
  );
}

export default Home;