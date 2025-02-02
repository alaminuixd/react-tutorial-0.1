import React, { useState } from "react";

import styles from "./Counter.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Counter = () => {
  const [count, setCount] = useState(0);
  // handler functions
  const handleInc = (e) => {
    setCount((prev) => (prev < 20 ? prev + 1 : prev));
  };
  const handleDec = (e) => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <div className={styles["counter-wrapper"]}>
      <h2>Counter App</h2>
      <p>Current value is: {count}</p>
      <div className={styles["button-wrapper"]}>
        <button onClick={handleDec} disabled={count < 1}>
          <FaMinus />
        </button>
        <button onClick={handleInc} disabled={count >= 20}>
          <FaPlus />
        </button>{" "}
      </div>
    </div>
  );
};

export default Counter;
