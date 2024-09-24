/* **************************My Code**************************** */
import React from "react";
import "./EventBubble.css";
function EventBubbl() {
  const handleChildClick = (e) => {
    e.stopPropagation();
    console.log(`Child Event: ${e.target.textContent}`);
  };
  const handleParentClick = (e) => {
    console.log(`Parent Event: ${e.target.textContent}`);
  };
  return (
    <div className="parent" onClick={handleParentClick}>
      <h1>Welcome</h1>
      <button onClick={handleChildClick}>Click</button>
    </div>
  );
}
export default EventBubbl;
