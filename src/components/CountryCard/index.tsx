import type { FC } from "react";
import type { Continent, Country } from "../../types/country";
import CountryCardDetailsRow from "./CountryCardDetailsRow";

const continentNameBgColor: Record<Continent, string> = {
  Africa: "bg-amber-500/70 dark:bg-amber-950",
  Asia: "bg-green-700/80 dark:bg-green-950",
  Europe: "bg-blue-500 dark:bg-blue-950",
  "North America": "bg-red-500/80 dark:bg-red-950",
  "South America": "bg-fuchsia-900/60 dark:bg-fuchsia-950",
  Oceania: "bg-sky-400 dark:bg-sky-800",
};

const CountryCard: FC<CountryCardProps> = ({ country }) => {
  return (
    <article className="h-full p-4 rounded-md border border-gray-300 bg-white dark:border-slate-600 dark:bg-slate-900">
      <img
        src={country.image}
        alt={`Flag of ${country.name}`}
        className="max-h-32 mx-auto border border-gray-300 dark:border-slate-600"
      />

      <div className="text-start mt-7">
        <h3 className="text-3xl font-semibold text-slate-800 dark:text-white">
          {country.name}
        </h3>

        <div
          className={`text-white font-semibold text-center w-full my-2 rounded-sm ${continentNameBgColor[country.continent]}`}
        >
          {country.continent.toUpperCase()}
        </div>

        <p className="mt-3 text-sm text-gray-700 dark:text-slate-400">
          {country.shortInfo}
        </p>

        <dl className="mt-5 flex flex-col gap-1">
          <CountryCardDetailsRow
            detailKey="capital"
            value={country.capital}
            continent={country.continent}
          />

          <CountryCardDetailsRow
            detailKey="language"
            value={country.language}
            continent={country.continent}
          />

          <CountryCardDetailsRow
            detailKey="population"
            value={country.population.toLocaleString()}
            continent={country.continent}
          />

          <CountryCardDetailsRow
            detailKey="total-area"
            value={`${country.totalArea.toLocaleString()} km²`}
            continent={country.continent}
          />
        </dl>
      </div>
    </article>
  );
};

interface CountryCardProps {
  country: Country;
}

export default CountryCard;
