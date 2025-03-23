import React, { useState } from "react";

import { MyUserContext } from "./MyUserContext";
import Child1 from "./Child1";

function HomeContext() {
  const [user, setUser] = useState({
    id: new Date().getTime(),
    name: "Al Amin Khan",
    age: 39,
  });
  const [parents, setParents] = useState({
    id: new Date().getTime(),
    father: "Syed Ahmed",
    mother: "Mamataj Begum",
  });
  return (
    <div>
      <MyUserContext.Provider value={{ user, parents }}>
        <Child1 />
      </MyUserContext.Provider>
    </div>
  );
}

export default HomeContext;
