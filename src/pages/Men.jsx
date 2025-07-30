// src/pages/Men.jsx
import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Men = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const baseUrl = import.meta.env.VITE_SNEAKS_BASE;
        const response = await fetch(`${baseUrl}/sneakers?limit=20&gender=men`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Map API response to our expected format
        const formattedShoes = data.results.map(sneaker => ({
          id: sneaker.id,
          name: sneaker.title,
          price: sneaker.retailPrice || 99.99, // Default price
          imageURL: sneaker.media.imageUrl || "https://via.placeholder.com/300x200?text=Shoe+Image",
          category: "men"
        }));
        
        setShoes(formattedShoes);
      } catch (error) {
        console.error("Error fetching shoes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Men's Collection</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : shoes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shoes.map((shoe) => (
            <Card key={shoe.id} shoe={shoe} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No men's shoes found. Try reloading the page or check your connection.
        </p>
      )}
    </div>
  );
};

export default Men;