// src/components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ shoe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={shoe.imageURL} 
        alt={shoe.name} 
        className="w-full h-48 object-contain p-4"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{shoe.name}</h3>
        <p className="text-gray-600">${shoe.price.toFixed(2)}</p>
        <Link 
          to={`/product/${shoe.id}`}
          className="mt-2 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;