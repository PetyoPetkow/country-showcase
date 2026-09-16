import CountryCard from "./components/CountryCard";
import useCountries from "./hooks/useCountries";

const App = () => {
  const { countries } = useCountries(12);

  return (
    <>
      <main className="bg-gray-50 p-4">
        <section aria-labelledby="countries-heading">
          <h2 id="countries-heading" className="sr-only">
            Countries
          </h2>

          <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6 max-w-350 mx-auto">
            {countries.map((country) => (
              <li key={country.name}>
                <CountryCard country={country} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
