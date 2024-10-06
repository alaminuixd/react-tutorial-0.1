import React, { useState, useEffect } from "react";

import styles from "./UseEffect.module.css";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  // handlers
  const handleClick = (e) => {
    setCount((prev) => (prev = prev + 1));
  };
  const handleLoading = () => {
    setLoading(!loading);
  };
  useEffect(() => {
    console.log("I am useEffect");
  }, [count]);
  return (
    <div className={styles["home-container"]}>
      {console.log("rendering")}
      <h1>Count {count}</h1>
      <button className={styles.submit} onClick={handleClick}>
        +
      </button>{" "}
      <button className={styles.submit} onClick={handleLoading}>
        {loading ? "Loading" : "Not loading"}
      </button>
    </div>
  );
}

export default UseEffect;
