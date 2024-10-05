import React, { useState } from "react";
import styles from "./Toggle.module.css";

function Toggle() {
  const [toggle, setToggle] = useState(true);
  // following handler function is not in used
  const handleClick = (e) => {
    //toggle ? setToggle(false) : setToggle(true);
    //* (!toggle) OR (not toggle) means, the oposite value of "toggle" which is "true" by default
    setToggle(!toggle);
  };
  return (
    <div className={styles["home-container"]}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          distinctio nostrum veniam soluta blanditiis! Obcaecati mollitia, minus
          nam vitae pariatur tempora veritatis repellat nihil ut, temporibus
          quis ad vel! Autem!
        </p>
      )}
      <button
        style={{ marginRight: "10px" }}
        className={styles.submit}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
}

export default Toggle;
