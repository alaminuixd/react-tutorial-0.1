import React from "react";

import styles from "./Countries.module.css";
import Country from "./Country";

function Countries(props) {
  const countries = props.countries;
  return (
    <div className={styles["country-container"]}>
      {countries &&
        countries.map((country) => {
          return <Country key={country.id} {...country} />;
        })}
    </div>
  );
}

export default Countries;
