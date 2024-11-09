import React, { useState } from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchCountry(props) {
  const [searchInput, setSearchInput] = useState({
    search: "",
  });
  // handler functions
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchInput((prev) => ({ ...prev, [name]: value }));
    props.onSearchVal(value); // Trigger search on input change
  };

  return (
    <form>
      <input
        type="text"
        name="search"
        id="search"
        value={searchInput.search}
        placeholder="search for a country..."
        onChange={handleSearchChange}
      />
    </form>
  );
}

export default SearchCountry;
