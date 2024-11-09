import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Countries from "./Countries";
import styles from "./Home.module.css";
import SearchCountry from "./SearchCountry";

const url = "https://restcountries.com/v3.1/all";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(null);
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  // Data fetching function
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Data loading failed!");
      }
      const data = await response.json();
      // Insert id for each array object
      const dataWithId = data.map((country) => ({ ...country, id: uuidv4() }));
      setCountries(dataWithId);
      setAllCountries(dataWithId);
      setIsLoading(false);
      setIsErr(null);
    } catch (err) {
      setIsLoading(false);
      setIsErr(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleDeleteCountry = (selectedID) => {
    setCountries((prev) => prev.filter((country) => country.id !== selectedID));
    console.log(selectedID);
  };

  /* const handleSearchVal = (searchVal) => {
    const filteredCountries = allCountries.filter((country) =>
      country.name.common
        .trim()
        .toLowerCase()
        .includes(searchVal.trim().toLowerCase())
    );
    setCountries(filteredCountries);
  }; */
  const handleSearchVal = (searchVal) => {
    const filteredCountries = allCountries.filter((country) => {
      country.name.common
        .toLowerCase()
        .trim()
        .includes(searchVal.trim().toLowerCase());
    });
    setCountries(filteredCountries);
  };

  return (
    <div className={styles["home-container"]}>
      <h1 className={styles["tac"]}>Country App</h1>
      <SearchCountry onSearchVal={handleSearchVal} />
      {isLoading && <p className={styles["loading"]}>Data is loading... </p>}
      {isErr && <p className={styles["loading"]}>{isErr.message}</p>}
      {countries && (
        <Countries countries={countries} onDelete={handleDeleteCountry} />
      )}
    </div>
  );
}

export default Home;
