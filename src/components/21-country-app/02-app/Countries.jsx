import React from "react";

import Country from "./Country";
import styles from "./Countries.module.css";
function Countries(props) {
  return (
    <div className={styles["country-container"]}>
      {props.countries &&
        props.countries.map((country) => {
          return (
            <Country
              key={country.id}
              {...country}
              onDeleteCountry={props.onDeleteCountry}
            />
          );
        })}
    </div>
  );
}

export default Countries;
