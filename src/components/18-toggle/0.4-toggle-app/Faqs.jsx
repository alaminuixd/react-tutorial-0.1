import React, { useState } from "react";
import data from "./data";
import styles from "./Faqs.module.css";
import Faq from "./Faq";

function Faqs() {
  // faqs hook useState
  const [faqs, setFaqs] = useState(data);

  // State to track the currently open FAQ
  const [openFaqId, setOpenFaqId] = useState(null);

  // Function to toggle the FAQ
  const handleToggle = (id) => {
    // If the same FAQ is clicked, close it; otherwise, open the new one
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`${styles["home-container"]} ${styles["faqs"]}`}>
      <h1 style={{ marginBottom: "40px" }}>Frequently Asked Questions:</h1>
      {faqs &&
        faqs.map((faq) => {
          return (
            <Faq
              key={faq.id}
              {...faq}
              isOpen={faq.id === openFaqId} // if this is true only then show the answer of this
              onToggle={() => handleToggle(faq.id)}
            />
          );
        })}
    </div>
  );
}

export default Faqs;
