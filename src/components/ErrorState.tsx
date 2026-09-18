import { RotateCw, TriangleAlert } from "lucide-react";
import type { FC } from "react";

const ErrorState: FC<ErrorStateProps> = ({ title, message, onRetry }) => {
  return (
    <div
      role="alert"
      className="flex flex-1 flex-col items-center justify-center gap-6 text-center"
    >
      <TriangleAlert
        aria-hidden="true"
        className="text-red-500"
        size={60}
        strokeWidth={1}
      />

      <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
        {title}
      </h2>

      <p className="mt-2 text-slate-600 dark:text-slate-400">{message}</p>

      <button
        onClick={onRetry}
        className="mt-5 flex cursor-pointer items-center gap-3 rounded-md bg-slate-800 px-5 py-2 text-white transition-colors duration-200 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300"
      >
        <RotateCw aria-hidden="true" size={18} /> Try again
      </button>
    </div>
  );
};

interface ErrorStateProps {
  title: string;
  message: string;
  onRetry: () => void;
}

export default ErrorState;
