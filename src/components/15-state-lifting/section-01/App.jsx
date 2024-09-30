import React, { useState } from "react";
import Child from "./components/15-state-lifting/Child";

function App() {
  const [val, setVal] = useState({
    childData: "",
  });

  const data = "I am from the parent component";

  const handleChildData = (childData) => {
    setVal((prev) => {
      return {
        ...prev, // Spread the previous state to keep other properties intact
        childData: childData, // Update the childData
      };
    });
  };

  return (
    <div>
      <Child data={data} onChildData={handleChildData} />
      <h1>{val.childData}</h1> {/* Display the updated childData */}
    </div>
  );
}

export default App;
