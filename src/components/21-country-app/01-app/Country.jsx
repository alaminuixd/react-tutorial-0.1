import React from "react";

import styles from "./Country.module.css";

function Country({
  id,
  name,
  flags,
  capital,
  population,
  area,
  independent,
  continents,
  currencies,
  onDelete,
}) {
  const handleDelete = (deleteId) => {
    onDelete(deleteId);
  };
  return (
    <div className={styles["country-card"]}>
      <div>{flags && <img src={flags.png} alt={`${name.common} flag`} />}</div>
      <div>
        {name && <h3>Name: {name.common}</h3>}
        {capital && (
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        )}
        {population && (
          <p>Population: {(population / 10000000).toFixed(2)} Crore</p>
        )}
        {area && <p>Area: {area}</p>}
        {currencies && (
          <p>
            <b>Currency: </b>
            {Object.values(currencies)
              .map((currency) => currency.name)
              .join(", ")}
          </p>
        )}
        {continents && <p>Continent: {continents}</p>}
        {independent ? <p>Yes, Independent</p> : <p>Not Independent</p>}
        <button onClick={() => handleDelete(id)}>Delete Country</button>
      </div>
    </div>
  );
}

export default Country;
