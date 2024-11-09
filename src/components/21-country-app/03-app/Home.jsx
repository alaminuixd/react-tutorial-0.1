import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import styles from "./Home.module.css";
import Countries from "./Countries";

// global variables
const URL = "https://restcountries.com/v3.1/all";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(null);
  const [countries, setCountries] = useState([]);
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsLoading(false);
        throw new Error("The Data URL is invalid.");
      }
      const data = await response.json();
      const dataWithId = data.map((countries) => ({
        id: uuidv4(),
        ...countries,
      }));
      setCountries(dataWithId);
      setIsLoading(false);
    } catch (err) {
      setIsErr(err.message);
    }
  };
  useEffect(() => {
    fetchData(URL);
  }, []);
  useEffect(() => {
    console.log(countries);
  }, [countries]);
  /* *****************************RETURN JSX*********************** */
  return (
    <div className={styles["container"]}>
      <h1 className={styles["app-title"]}>Country App</h1>
      {isLoading && (
        <p className={styles["loading"]}>Data is loading. Please wait...</p>
      )}
      {isErr && <p className={styles["error"]}>{isErr}</p>}
      <Countries countries={countries} />
    </div>
  );
}

export default Home;
