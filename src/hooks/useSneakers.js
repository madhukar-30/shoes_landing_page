import { useState, useEffect } from "react";

const BASE = import.meta.env.VITE_SNEAKER_API || "http://localhost:3000";

const useSneaker = () => {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const res = await fetch(`${BASE}`);
        const data = await res.json();
        setSneakers(data);
      } catch (error) {
        console.error("Error fetching sneakers:", error);
      } finally {
        setLoading(false); // ✅ Must be here
      }
    };

    fetchSneakers();
  }, []);

  return { sneakers, loading };
};

export default useSneaker;
