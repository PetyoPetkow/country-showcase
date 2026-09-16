import { Moon, Sun } from "lucide-react";
import type { FC } from "react";

const AppHeader: FC<AppHeaderProps> = ({ isDarkMode, toggle }) => {
  return (
    <header className="h-16 pr-10 flex items-center justify-end sticky top-0 border-b border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-950 ">
      <button
        onClick={toggle}
        className="cursor-pointer px-5 py-2 rounded-full border border-slate-400 dark:border-slate-700 text-slate-600 dark:text-slate-300"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <span className="flex gap-2">
            <Moon />
            Dark mode
          </span>
        ) : (
          <span className="flex gap-2">
            <Sun />
            Light mode
          </span>
        )}
      </button>
    </header>
  );
};

interface AppHeaderProps {
  isDarkMode: boolean;
  toggle: () => void;
}

export default AppHeader;
