import type { FC } from "react";
import type { Continent, Country } from "../../types/country";
import CountryCardDetailsRow from "./CountryCardDetailsRow";

const continentNameBgColor: Record<Continent, string> = {
  Africa: "bg-amber-500/70",
  Asia: "bg-green-700/80",
  Europe: "bg-blue-500",
  "North America": "bg-red-500/80",
  "South America": "bg-fuchsia-900/60",
  Oceania: "bg-sky-400",
};

const CountryCard: FC<CountryCardProps> = ({ country }) => {
  return (
    <article className="h-full border border-gray-300 bg-white p-4 rounded-md">
      <img
        src={country.image}
        alt={`Flag of ${country.name}`}
        className="mx-auto max-h-36 border border-gray-300"
      />

      <div className="text-start mt-7">
        <h3 className="text-3xl font-semibold text-slate-800">
          {country.name}
        </h3>

        <div
          className={`text-white font-semibold text-center w-full my-2 rounded-sm ${continentNameBgColor[country.continent]}`}
        >
          {country.continent.toUpperCase()}
        </div>

        <p className="text-gray-700 mt-3">{country.shortInfo}</p>

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
