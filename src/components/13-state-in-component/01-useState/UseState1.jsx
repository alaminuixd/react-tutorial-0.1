import { useState } from "react";
import Button from "react-bootstrap/Button";
export default function UseState1() {
  // update state based on previos state
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>Your mark is {count}</h1>
      <Button variant="primary" size="md" onClick={handleClick}>
        +
      </Button>
    </div>
  );
}
