import useCountries from "./hooks/useCountries";

const App = () => {
  const { countries } = useCountries(12);

  return (
    <>
      {countries.map((c) => (
        <div>{c.name}</div>
      ))}
    </>
  );
};

export default App;
