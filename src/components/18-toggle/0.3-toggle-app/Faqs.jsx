import React, { useState } from "react";
import data from "./data";
import styles from "./Faqs.module.css";
import Faq from "./Faq";

function Faqs() {
  const [faqs, setFaqs] = useState(data);
  const [activeFaqId, setActiveFaqId] = useState(null); // Tracks which FAQ is open
  //console.log(activeFaqId);
  const handleToggle = (id) => {
    setActiveFaqId(id === activeFaqId ? null : id); // Toggle between opening and closing
  };

  return (
    <div className={`${styles["home-container"]} ${styles["faqs"]}`}>
      <h1 style={{ marginBottom: "40px" }}>Frequently Asked Questions:</h1>
      {faqs &&
        faqs.map((faq) => (
          <Faq
            key={faq.id}
            {...faq}
            isOpen={faq.id === activeFaqId}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
    </div>
  );
}

export default Faqs;
