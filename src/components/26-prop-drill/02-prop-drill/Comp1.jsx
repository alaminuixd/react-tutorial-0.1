import React, { useState } from "react";
import Comp2 from "./Comp2";
import { UserContext } from "./UserContext";

function Comp1() {
  const [user, setUser] = useState({ id: 1, name: "Al Amin Khan" });
  const [userEmail, setUserEmail] = useState({
    id: 1,
    email: "alaminuixd@gmail.com",
  });
  return (
    <UserContext.Provider value={{ user, userEmail }}>
      <h2>Prop1</h2>
      <Comp2 user={user} />
    </UserContext.Provider>
  );
}

export default Comp1;
