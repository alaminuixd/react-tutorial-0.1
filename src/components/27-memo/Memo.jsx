import React, { useCallback, useMemo, useState } from "react";
import Message from "./Message";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log("Memo rendering!");
  // without "useMemo" everytime anything re-render, caused by state change or component change, the for loop would have executed and took long time.
  const calcNum = useMemo(() => {
    let num = 0;
    for (let i = 0; i <= 500000000; i++) {
      num++;
    }
    return num;
  }, []);
  // functions
  const handleMessageCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Memo Component</h1>
      <h1>{count}</h1>
      <h1>Number: {calcNum}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {toggle ? <h1>On</h1> : <h1>Off</h1>}
      <button onClick={(e) => setToggle(!toggle)}>Toggle</button>
      <Message messageCount={count} onMessageCount={handleMessageCount} />
    </div>
  );
};

export default Memo;
