import React, { useContext } from "react";
import { TestUseContext } from "./TestUseContext";

function Child2() {
  const {
    user: { id: userID, name },
    parents: { id: parentsID, fatherName, motherName },
  } = useContext(TestUseContext);
  return (
    <div>
      <p>USER ID: {userID}</p>
      <p>Name: {name}</p>
      <p>Parents ID: {parentsID}</p>
      <p>Father: {fatherName}</p>
      <p>Mothe: {motherName}</p>
    </div>
  );
}

export default Child2;
