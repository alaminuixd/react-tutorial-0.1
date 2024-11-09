import React from "react";

import Country from "./Country";
import { v4 as uuidv4 } from "uuid";
import styles from "./Countries.module.css";

function Countries(props) {
  return (
    <div className={styles["countries-container"]}>
      {props.countries &&
        props.countries.map((country) => {
          return (
            <Country key={country.id} {...country} onDelete={props.onDelete} />
          );
        })}
    </div>
  );
}

export default Countries;
