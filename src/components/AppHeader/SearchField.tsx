import type { FC } from "react";

const SearchField: FC<SearchFieldProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <>
      <label className="sr-only" htmlFor="country-search">
        Search countries by name
      </label>

      <input
        id="country-search"
        type="search"
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by country name"
        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none focus:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
    </>
  );
};

interface SearchFieldProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default SearchField;
