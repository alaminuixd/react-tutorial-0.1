import React from "react";

function Comp4({ user }) {
  const { id, name } = user;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default Comp4;
