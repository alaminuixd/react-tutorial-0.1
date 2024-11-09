import React, { useEffect, useState } from "react";

import styles from "./Search.module.css";
function Search(props) {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    props.onSearch(searchText.toLowerCase().trim());
  }, [searchText]);
  return (
    <div className={styles["search-wrapper"]}>
      <input
        type="text"
        name="search"
        id="search"
        value={searchText}
        placeholder="Search countries"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
