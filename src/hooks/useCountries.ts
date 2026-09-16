import { useCallback, useEffect, useState } from "react";
import type { Country } from "../types/country";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchCountries = async (): Promise<Country[]> => {
  await delay(1500);

  const response = await fetch("/countries.json");

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return response.json();
};

const useCountries = (limit: number) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (count: number) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchCountries();
      setCountries(data.slice(0, count));
    } catch {
      setError("Unable to load countries. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch-on-mount/limit-change; result state is only set after the awaited fetch resolves
    load(limit);
  }, [limit, load]);

  const refetch = useCallback(() => load(limit), [limit, load]);

  return { countries, loading, error, refetch };
};

export default useCountries;
