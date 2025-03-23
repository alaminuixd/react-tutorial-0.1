import React from "react";
import { useContext } from "react";
import { MyUserContext } from "./MyUserContext";

function Child3() {
  const { user, parents } = useContext(MyUserContext);
  console.log(parents);
  return (
    <div>
      <h3>My name is {user.name}</h3>
      <p>My father name is {parents.father}</p>
      <p>My Mother name is {parents.mother}</p>
    </div>
  );
}

export default Child3;
