import { useEffect, useState } from "react";
import useCountries from "./hooks/useCountries";
import AppHeader from "./components/AppHeader";
import CountryCard from "./components/CountryCard";
import CountryCardSkeleton from "./components/CountryCard/CountryCardSkeleton";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const { countries, loading } = useCountries(12);

  const toggleDarkMode = () => {
    setIsDarkMode((previous) => !previous);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      <AppHeader isDarkMode={isDarkMode} toggle={toggleDarkMode} />

      <main className="p-4 bg-gray-50 dark:bg-slate-950">
        <section aria-labelledby="countries-heading">
          <h2 id="countries-heading" className="sr-only">
            Countries
          </h2>

          <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6 max-w-350 mx-auto">
            {loading
              ? Array.from({ length: 12 }).map((_, index) => (
                  <li key={`skeleton-${index}`}>
                    <CountryCardSkeleton />
                  </li>
                ))
              : countries.slice(0, 12).map((country) => (
                  <li key={country.name}>
                    <CountryCard country={country} />
                  </li>
                ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
