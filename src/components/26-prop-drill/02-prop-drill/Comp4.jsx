import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Comp4() {
  const { user, userEmail } = useContext(UserContext);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {userEmail.email}</p>
    </div>
  );
}

export default Comp4;
