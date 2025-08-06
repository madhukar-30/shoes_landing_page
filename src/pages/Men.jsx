import React from "react";
import Card from "../components/Card";
import useSneaker from "../hooks/useSneakers";

const Men = () => {
  const { sneakers, loading } = useSneaker();

  // Filter for men's sneakers
  const menSneakers = sneakers.filter(
    (s) => s.gender?.toLowerCase() === "men" ||  s.gender?.toLowerCase() === "unisex" // depends on your API's structure
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Men's Collection</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : menSneakers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menSneakers.map((shoe) => (
            <Card key={shoe._id} shoe={shoe} />
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
