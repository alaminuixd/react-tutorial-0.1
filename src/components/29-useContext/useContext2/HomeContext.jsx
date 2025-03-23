import React, { useState } from "react";
import { MyUserContext } from "./../useContext1/MyUserContext";
import Child1 from "./Child1";

function HomeContext() {
  const [users, setUsers] = useState({
    id: new Date().getTime(),
    name: "Al Amin",
    age: 40,
  });
  const [parents, setParents] = useState({
    id: new Date().getTime(),
    fatherName: "Syed Ahmed Khan",
    motherName: "Mamataj Begum",
  });
  // handler functions
  const handleUsers = (e) => {
    setUsers((prev) => ({
      ...prev,
      name: "Abrar Syed",
    }));
  };
  const handleParents = (e) => {
    setParents((prev) => ({
      ...prev,
      fatherName: "Al Amin Khan",
      motherName: "Sabrina Akhter",
    }));
  };
  return (
    <div>
      <MyUserContext.Provider value={{ users, parents }}>
        <Child1 />
      </MyUserContext.Provider>
      <button onClick={handleUsers}>Change Users</button>
      <button onClick={handleParents}>Change Parents</button>
    </div>
  );
}

export default HomeContext;
