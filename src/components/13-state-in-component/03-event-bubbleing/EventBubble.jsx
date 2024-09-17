/* **************************My Code**************************** */
import React from "react";
import "./EventBubble.css";
function EventBubbl() {
  const handleChildClick = (e) => {
    console.log(`Child Event: ${e}`);
    e.stopPropagation();
  };
  const handleParentClick = (e) => {
    console.log(`Parent Event: ${e}`);
  };
  return (
    <div className="parent" onClick={handleParentClick}>
      <h1>Welcome</h1>
      <button onClick={handleChildClick}>Click</button>
    </div>
  );
}
export default EventBubbl;
