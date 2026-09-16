import type { FC } from "react";

const SkeletonBlock: FC<SkeletonBlockProps> = ({ className = "" }) => (
  <div
    aria-hidden="true"
    className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${className}`}
  />
);

const CountryCardSkeleton = () => {
  return (
    <article
      aria-hidden="true"
      className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
    >
      <SkeletonBlock className="mx-auto mt-3 h-36 w-3/4" />

      <SkeletonBlock className="h-8 w-3/4 mt-3" />

      <SkeletonBlock className="mt-2 h-6 w-full" />

      <div className="mt-4 space-y-2">
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-5/6" />
        <SkeletonBlock className="h-4 w-2/3" />
      </div>

      <div className="mt-4 space-y-0">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-t border-gray-200 py-2 dark:border-gray-700"
          >
            <SkeletonBlock className="h-4 w-24" />
            <SkeletonBlock className="h-4 w-28" />
          </div>
        ))}
      </div>
    </article>
  );
};

interface SkeletonBlockProps {
  className?: string;
}

export default CountryCardSkeleton;
