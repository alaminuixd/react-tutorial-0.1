import React, { useEffect } from "react";

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
}) {
  const formateLanguages = (theLang) => {
    const langArr = Object.values(theLang);
    const length = langArr.length;
    if (length === 1) {
      return langArr[0];
    } else if (length === 2) {
      return langArr.join(", ");
    } else {
      return `${langArr.slice(0, -1).join(", ")} and ${langArr[length - 1]}`;
    }
  };
  const formateCurrencies = (currObj) => {
    const currArr = [];
    if (currObj) {
      const curr = Object.values(currObj);
      for (let key in curr) {
        currArr.push(curr[key]);
      }
    }
    return currArr;
  };
  useEffect(() => {
    console.log(Array.isArray(currencies));
  }, []);
  return (
    <div className={styles["country-card-container"]}>
      <div>{flags && <img src={flags.png} alt={`${name.common} flag`} />}</div>
      <div>
        <div>
          {name && <h3>{name.common}</h3>}
          {capital && <p>Capital: {capital}</p>}
          {languages && (
            <p>
              {Object.values(languages).length > 1 ? (
                <span>Language: </span>
              ) : (
                <span>Languages: </span>
              )}
              {formateLanguages(languages)}
            </p>
          )}
          {independent ? <p>Independent: Yes</p> : <p>Independent: No</p>}
          {formateCurrencies(currencies).map((item) => {
            return (
              <div>
                <p>Currency Name: {item.name}</p>
                <p>Currency Symbol: {item.symbol}</p>
              </div>
            );
          })}
        </div>
        <button>Remove Country</button>
      </div>
    </div>
  );
}

export default Country;
