import React, { useState } from "react";

import styles from "./Counter.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decCounter,
  incCounter,
  resetCounter,
} from "./services/actions/counter.actions";
// main component starts
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  // handler functions
  const handleInc = () => {
    dispatch(incCounter());
  };
  const handleDec = () => {
    dispatch(decCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div className={styles["counter-wrapper"]}>
      <h2>Counter App</h2>
      <p>Current value is: {count}</p>
      <div className={styles["button-wrapper"]}>
        <button onClick={handleDec}>
          <FaMinus />
        </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleInc}>
          <FaPlus />
        </button>{" "}
      </div>
    </div>
  );
};

export default Counter;
