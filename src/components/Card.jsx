import React from "react";
import { Link } from "react-router-dom";

const Card = ({ shoe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="w-full aspect-square bg-white flex items-center justify-center p-4">
        <img 
          src={shoe.image} 
          alt={shoe.name} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{shoe.name}</h3>
        {/* Optional Link */}
        {/* <Link 
          to={`/product/${shoe.id}`}
          className="mt-2 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          View Details
        </Link> */}
      </div>
    </div>
  );
};

export default Card;
