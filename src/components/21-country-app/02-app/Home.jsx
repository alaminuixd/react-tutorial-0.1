import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import styles from "./Home.module.css";
import Countries from "./Countries";
import Search from "./Search";

const URL = "https://restcountries.com/v3.1/all";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  // Dafa fetching function
  async function fetchCountryData(url) {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Data fetch failed! Wrong URL!!");
      }
      const data = await response.json();
      const readyData = data.map((country) => ({ id: uuidv4(), ...country }));
      setCountries(readyData); // Update countries state
      setFilteredCountries(readyData); // Update filteredCountries state
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsErr(err.message);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      fetchCountryData(URL);
    }, 0);
  }, []);
  const handleDeleteCountry = (countryName) => {
    setCountries((prev) => {
      return prev.filter((country) => country.name.common !== countryName);
    });
  };
  const handleOnSearch = (searchName) => {
    const searchValue = searchName.toLowerCase().trim();
    const newCountry = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase().trim();
      return countryName.startsWith(searchValue);
    });
    setFilteredCountries(newCountry);
  };
  return (
    <div className={styles["container"]}>
      <h1 className={styles["app-title"]}>Country App</h1>
      <Search onSearch={handleOnSearch} />
      {isLoading && <p>Your data is loading...</p>}
      {isErr && <p>{isErr}</p>}
      <Countries
        countries={filteredCountries}
        onDeleteCountry={handleDeleteCountry}
      />
    </div>
  );
}

export default Home;
