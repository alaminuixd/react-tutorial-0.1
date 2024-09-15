import { useState } from "react";
import Button from "react-bootstrap/Button";
export default function UseState1() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
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
