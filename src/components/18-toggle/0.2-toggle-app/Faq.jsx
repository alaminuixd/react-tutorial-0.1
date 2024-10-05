import React, { useState } from "react";

import styles from "./Faq.module.css";

function Faq({ id, question, answer }) {
  const [toggle, setToggle] = useState(false);
  return (
    <article className={styles["faq"]}>
      <div>
        <h3>{question}</h3>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && <p>{answer}</p>}
    </article>
  );
}

export default Faq;
