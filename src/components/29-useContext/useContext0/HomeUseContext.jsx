import React, { useState } from "react";
import { TestUseContext } from "./TestUseContext";
import Child1 from "./Child1";

function HomeUseContext() {
  const [user, setUser] = useState({
    id: new Date().getTime(),
    name: "Al Amin",
  });
  const [parents, setParents] = useState({
    id: new Date().getTime(),
    fatherName: "Syed Ahmed Khan",
    motherName: "Mamataz Begum",
  });
  return (
    <div>
      <TestUseContext.Provider value={{ user, parents }}>
        <Child1 />
      </TestUseContext.Provider>
    </div>
  );
}

export default HomeUseContext;
