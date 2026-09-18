import type { FC } from "react";
import CountryCard from "./CountryCard";
import CountryCardSkeleton from "./CountryCard/CountryCardSkeleton";
import ErrorState from "./ErrorState";
import type { Country } from "../types/country";

const CountryGrid: FC<CountryGridProps> = ({
  countries,
  loading,
  error,
  onRetry,
}) => {
  if (error) {
    return (
      <ErrorState
        title={error.title}
        message={error.message}
        onRetry={onRetry}
      />
    );
  }

  if (loading) {
    return (
      <>
        <p role="status" className="sr-only">
          Loading countries
        </p>
        <ul
          aria-busy={true}
          className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6 max-w-350 mx-auto w-full"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <li key={`skeleton-${index}`}>
              <CountryCardSkeleton />
            </li>
          ))}
        </ul>
      </>
    );
  }

  if (countries.length === 0) {
    return (
      <>
        <p aria-live="polite" className="sr-only">
          0 countries found
        </p>
        <div className="flex flex-1 items-center justify-center text-center">
          <p className="text-slate-600 dark:text-slate-300">
            No countries match your search or filter.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <p aria-live="polite" className="sr-only">
        {countries.length} {countries.length === 1 ? "country" : "countries"}{" "}
        found
      </p>
      <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6 max-w-350 mx-auto w-full">
        {countries.map((country) => (
          <li key={country.name}>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </>
  );
};

interface CountryGridProps {
  countries: Country[];
  loading: boolean;
  error: {
    title: string;
    message: string;
  } | null;
  onRetry: () => void;
}

export default CountryGrid;
