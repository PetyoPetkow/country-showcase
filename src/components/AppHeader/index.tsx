import type { FC } from "react";
import type { Continent } from "../../types/country";
import SearchInput from "./SearchField";
import ContinentFilter from "./ContinentFilter";
import SortSelect, { type SortOption } from "./SortSelect";
import ThemeToggle from "./ThemeToggle";

const AppHeader: FC<AppHeaderProps> = ({
  isDarkMode,
  toggle,
  searchQuery,
  onSearchChange,
  continentFilter,
  onContinentChange,
  sortOption,
  onSortOptionChange,
}) => {
  return (
    <header className="border-b border-slate-200 bg-white px-4 py-4 dark:border-slate-600 dark:bg-slate-950 sm:sticky sm:top-0 sm:z-10 sm:px-10">
      <div className="mx-auto flex max-w-350 flex-col gap-x-20 gap-y-6 lg:flex-row lg:items-center">
        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <SearchInput
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
          />

          <ContinentFilter
            continentFilter={continentFilter}
            onContinentChange={onContinentChange}
          />

          <SortSelect
            sortOption={sortOption}
            onSortOptionChange={onSortOptionChange}
          />
        </div>

        <ThemeToggle isDarkMode={isDarkMode} toggle={toggle} />
      </div>
    </header>
  );
};

interface AppHeaderProps {
  isDarkMode: boolean;
  toggle: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  continentFilter: Continent | "all";
  onContinentChange: (value: Continent | "all") => void;
  sortOption: SortOption;
  onSortOptionChange: (value: SortOption) => void;
}

export type { SortOption } from "./SortSelect";
export default AppHeader;
