import React from "react";

import styles from "./Country.module.css";
function Country({
  id,
  name,
  flags,
  languages,
  capital,
  independent,
  startOfWeek,
  currencies,
  onDeleteCountry,
}) {
  const handleDeleteId = (countryName) => {
    onDeleteCountry(countryName);
  };
  const currenciesEntries = Object.entries(currencies || {});
  return (
    <div className={styles["country-card-container"]}>
      <div>{flags && <img src={flags.png} alt={`${name.common} flag`} />}</div>
      <div>
        <div>
          {name && <h3>{name.common}</h3>}
          {languages && (
            <p>
              {Object.values(languages).length < 2 ? (
                <span>Language: </span>
              ) : (
                <span>Languages: </span>
              )}
              {Object.values(languages).join(", ")}
            </p>
          )}
          {capital && (
            <p>
              <span>Capital: </span>
              {capital}
            </p>
          )}
          {independent ? (
            <p>
              <span>Independent: </span> Yes
            </p>
          ) : (
            <p>
              <span>Independent: </span> No
            </p>
          )}
          {startOfWeek && (
            <p>
              <span>Start of week: </span>
              {startOfWeek}
            </p>
          )}
          {currenciesEntries &&
            currenciesEntries.map(([code, { name, symbol }], index) => {
              return (
                <div key={index}>
                  <p>Currency: {`${code}, ${name}, ${symbol}`}</p>
                </div>
              );
            })}
        </div>
        <button onClick={() => handleDeleteId(name.common)}>
          Delete Country
        </button>
      </div>
    </div>
  );
}

export default Country;
