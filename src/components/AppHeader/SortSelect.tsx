import type { FC } from "react";

const SortSelect: FC<SortSelectProps> = ({
  sortOption,
  onSortOptionChange,
}) => {
  return (
    <>
      <label className="sr-only" htmlFor="sort-option">
        Sort countries
      </label>

      <select
        id="sort-option"
        value={sortOption}
        onChange={(event) =>
          onSortOptionChange(event.target.value as SortOption)
        }
        className="cursor-pointer rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      >
        <option value="none">No sorting</option>
        <option value="population-ascending">Population (asc)</option>
        <option value="population-descending">Population (desc)</option>
        <option value="totalArea-ascending">Total area (asc)</option>
        <option value="totalArea-descending">Total area (desc)</option>
      </select>
    </>
  );
};

interface SortSelectProps {
  sortOption: SortOption;
  onSortOptionChange: (value: SortOption) => void;
}

export type SortOption =
  | "none"
  | "population-ascending"
  | "population-descending"
  | "totalArea-ascending"
  | "totalArea-descending";

export default SortSelect;
