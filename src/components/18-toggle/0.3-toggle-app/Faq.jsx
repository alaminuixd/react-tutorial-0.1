import React from "react";
import styles from "./Faq.module.css";

function Faq({ id, question, answer, isOpen, onToggle }) {
  return (
    <article className={styles["faq"]}>
      <div>
        <h3>{question}</h3>
        <button onClick={onToggle}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{answer}</p>} {/* Only show if isOpen is true */}
    </article>
  );
}

export default Faq;
