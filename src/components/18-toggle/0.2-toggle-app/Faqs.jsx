import React, { useState } from "react";

import data from "./data";
import styles from "./Faqs.module.css";
import Faq from "./Faq";

function Faqs() {
  // faqs hook useState
  const [faqs, setFaqs] = useState(data);
  return (
    <div className={`${styles["home-container"]} ${styles["faqs"]}`}>
      <h1 style={{ marginBottom: "40px" }}>Freequently Ask Questions:</h1>
      {faqs && faqs.map((faq) => <Faq key={faq.id} {...faq} />)}
    </div>
  );
}

export default Faqs;
