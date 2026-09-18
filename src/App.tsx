import { useEffect, useMemo, useState } from "react";
import useCountries from "./hooks/useCountries";
import AppHeader, { type SortOption } from "./components/AppHeader";
import type { Continent } from "./types/country";
import CountryGrid from "./components/CountryGrid";

const sortConfig: Record<
  Exclude<SortOption, "none">,
  { field: "population" | "totalArea"; multiplier: 1 | -1 }
> = {
  "population-ascending": { field: "population", multiplier: 1 },
  "population-descending": { field: "population", multiplier: -1 },
  "totalArea-ascending": { field: "totalArea", multiplier: 1 },
  "totalArea-descending": { field: "totalArea", multiplier: -1 },
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [continentFilter, setContinentFilter] = useState<Continent | "all">(
    "all",
  );
  const [sortOption, setSortOption] = useState<SortOption>("none");

  const { countries, loading, error, refetch } = useCountries();

  const displayedCountries = useMemo(() => {
    const normalizedQuery = debouncedSearchQuery.trim().toLowerCase();
    const filteredCountries = countries.filter((country) => {
      const matchesName = country.name.toLowerCase().includes(normalizedQuery);
      const matchesContinent =
        continentFilter === "all" || country.continent === continentFilter;

      return matchesName && matchesContinent;
    });

    if (sortOption !== "none") {
      const { field, multiplier } = sortConfig[sortOption];
      filteredCountries.sort(
        (firstCountry, secondCountry) =>
          (firstCountry[field] - secondCountry[field]) * multiplier,
      );
    }

    return filteredCountries.slice(0, 12);
  }, [countries, continentFilter, debouncedSearchQuery, sortOption]);

  const toggleDarkMode = () => {
    setIsDarkMode((previous) => !previous);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <>
      <AppHeader
        isDarkMode={isDarkMode}
        toggle={toggleDarkMode}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        continentFilter={continentFilter}
        onContinentChange={setContinentFilter}
        sortOption={sortOption}
        onSortOptionChange={setSortOption}
      />

      <main className="flex flex-col min-h-[calc(100vh-4rem)] bg-slate-100 dark:bg-slate-950">
        <section
          aria-label="Countries"
          className="flex-1 flex flex-col px-4 py-10"
        >
          <h1 className="sr-only">
            Country Showcase
          </h1>

          <CountryGrid
            countries={displayedCountries}
            loading={loading}
            error={error}
            onRetry={refetch}
          />
        </section>
      </main>
    </>
  );
};

export default App;
