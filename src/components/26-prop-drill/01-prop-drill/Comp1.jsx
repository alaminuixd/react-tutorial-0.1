import React, { useState } from "react";
import Comp2 from "./Comp2";

function Comp1() {
  const [user, setUser] = useState({ id: 1, name: "Al Amin Khan" });
  return (
    <div>
      <h2>Prop1</h2>
      <Comp2 user={user} />
    </div>
  );
}

export default Comp1;
