import { Moon, Sun } from "lucide-react";
import type { FC } from "react";

const ThemeToggle: FC<ThemeToggleProps> = ({ isDarkMode, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="cursor-pointer self-end lg:self-auto rounded-full border border-slate-400 px-5 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-amber-50 dark:hover:bg-slate-700 transition-colors duration-200"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDarkMode}
    >
      {isDarkMode ? (
        <span className="flex gap-2">
          <Moon aria-hidden="true" />
          Dark mode
        </span>
      ) : (
        <span className="flex gap-2">
          <Sun aria-hidden="true" />
          Light mode
        </span>
      )}
    </button>
  );
};

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggle: () => void;
}

export default ThemeToggle;
