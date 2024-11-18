import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

function Home() {
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    console.log(name);
    if (name.length > 2) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [name]);
  return (
    <div className={styles["home-container"]}>
      <input
        type="text"
        name="search"
        id="search"
        value={name}
        onChange={handleInputChange}
        className={validInput ? styles["validInput"] : styles["invalidInput"]}
      />
    </div>
  );
}

export default Home;
