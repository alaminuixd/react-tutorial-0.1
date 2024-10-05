import React from "react";
import styles from "./Faq.module.css";

function Faq({ id, question, answer, isOpen, onToggle }) {
  return (
    <article className={styles["faq"]}>
      <div>
        <h3>{question}</h3>
        <button onClick={onToggle}>+</button>
      </div>
      {isOpen && <p>{answer}</p>}
    </article>
  );
}

export default Faq;
