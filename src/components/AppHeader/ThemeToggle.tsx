import { Moon, Sun } from "lucide-react";
import type { FC } from "react";

const ThemeToggle: FC<ThemeToggleProps> = ({ isDarkMode, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="cursor-pointer self-end rounded-full border border-slate-400 px-5 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-300 lg:self-auto"
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
  );
};

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggle: () => void;
}

export default ThemeToggle;
