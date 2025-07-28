import { useEffect, useState } from 'react';

// 1️⃣  Read the base once, outside the hook body
const BASE =
  import.meta.env.VITE_SNEAKS_BASE || 'http://localhost:4000';

export default function useSneakers({ keyword = 'nike', limit = 20 }) {
  const [data,    setData]   = useState([]);
  const [error,   setError]  = useState(null);
  const [loading, setLoad]   = useState(true);

  useEffect(() => {
    setLoad(true);

    // 2️⃣  Call the SAME path you exposed in Express
    fetch(`${BASE}/search?keywords=${encodeURIComponent(keyword)}&limit=${limit}`)
      .then(r => (r.ok ? r.json() : Promise.reject(`HTTP ${r.status}`)))
      .then(setData)
      .catch(e => setError(new Error(e)))
      .finally(() => setLoad(false));
  }, [keyword, limit]);

  return { data, error, loading };
}
