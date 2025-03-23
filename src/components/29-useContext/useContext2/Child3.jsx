import React, { useContext, useEffect } from "react";
import { MyUserContext } from "../useContext1/MyUserContext";

function Child3({}) {
  const { users, parents } = useContext(MyUserContext);
  useEffect(() => {
    console.log(users, parents);
  }, [users, parents]);
  return <div>Child3</div>;
}

export default Child3;
