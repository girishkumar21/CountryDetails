//import CountriesData from "../CountriesData";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import HomepageShimmer from "./HomepageShimmer";
const CountriesList = ({ query, filter }) => {
  const [CountriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountriesData(data));
  }, []);

  CountriesData.sort((a, b) => a.name.common.localeCompare(b.name.common));
  return CountriesData.length === 0 ? (
    <HomepageShimmer />
  ) : (
    <div className="countries-container">
      {CountriesData.filter((country) => {
        return country.region?.toLowerCase().includes(filter);
      })
        .filter((country) => {
          return country.name.common.toLowerCase().includes(query);
        })
        .map((country, i) => {
          //console.log(country);
          return (
            <CountryCard
              key={i}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital}
              data={country}
            />
          );
        })}
    </div>
  );
};

export default CountriesList;
