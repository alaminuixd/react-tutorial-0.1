import React from "react";
import Comp3 from "./Comp3";

function Comp2({ user }) {
  const { id, name } = user;
  return (
    <div>
      <Comp3 user={user} />
    </div>
  );
}

export default Comp2;
