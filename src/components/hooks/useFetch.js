import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Błąd HTTP! status: ${res.status}`);
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (e) {
        setError(e);
        console.error("Nie udało się pobrać danych:", e);
      } finally {
        setLoading(false);
      }
    };

    const timerId = setTimeout(() => {
      fetchData();
    }, 100);

    return () => clearTimeout(timerId);
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
