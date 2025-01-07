import React from "react";
import Comp4 from "./Comp4";

function Comp3({ user }) {
  return (
    <div>
      <Comp4 user={user} />
    </div>
  );
}

export default Comp3;
