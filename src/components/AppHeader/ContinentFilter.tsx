import type { FC } from "react";
import type { Continent } from "../../types/country";

const continents: Array<Continent | "all"> = [
  "all",
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Oceania",
];

const ContinentFilter: FC<ContinentFilterProps> = ({
  continentFilter,
  onContinentChange,
}) => {
  return (
    <>
      <label className="sr-only" htmlFor="continent-filter">
        Filter by continent
      </label>

      <select
        id="continent-filter"
        value={continentFilter}
        onChange={(event) =>
          onContinentChange(event.target.value as Continent | "all")
        }
        className="cursor-pointer rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none hover:border-slate-500 focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
      >
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent === "all" ? "All continents" : continent}
          </option>
        ))}
      </select>
    </>
  );
};

interface ContinentFilterProps {
  continentFilter: Continent | "all";
  onContinentChange: (value: Continent | "all") => void;
}

export default ContinentFilter;
