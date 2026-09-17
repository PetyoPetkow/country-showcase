import type { FC } from "react";
import { Languages, Map, MapPin, Users, type LucideIcon } from "lucide-react";
import type { Continent } from "../../types/country";

const detailConfig: Record<
  CountryDetailKey,
  { label: string; icon: LucideIcon }
> = {
  capital: {
    label: "Capital",
    icon: MapPin,
  },
  language: {
    label: "Language",
    icon: Languages,
  },
  population: {
    label: "Population",
    icon: Users,
  },
  "total-area": {
    label: "Total Area",
    icon: Map,
  },
};

const continentIconColors: Record<Continent, string> = {
  Africa: "text-amber-700 dark:text-amber-500",
  Asia: "text-green-700 dark:text-green-500",
  Europe: "text-blue-700 dark:text-blue-300",
  "North America": "text-red-700 dark:text-red-400",
  "South America": "text-fuchsia-700 dark:text-fuchsia-300",
  Oceania: "text-sky-700 dark:text-sky-400",
};

const CountryCardDetailsRow: FC<CountryCardDetailsRowProps> = ({
  detailKey,
  value,
  continent,
}) => {
  const { label, icon: Icon } = detailConfig[detailKey];

  return (
    <div className="grid grid-cols-2 py-2 border-t border-gray-200 dark:border-slate-600">
      <dt className="flex items-center gap-3 dark:text-white">
        <Icon
          aria-hidden="true"
          className={`shrink-0 ${continentIconColors[continent]}`}
          size={18}
        />
        {label}
      </dt>

      <dd className="text-gray-600 dark:text-slate-300">{value}</dd>
    </div>
  );
};

type CountryDetailKey = "capital" | "language" | "population" | "total-area";

interface CountryCardDetailsRowProps {
  detailKey: CountryDetailKey;
  value: string | number;
  continent: Continent;
}

export default CountryCardDetailsRow;
