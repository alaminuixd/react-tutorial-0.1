import React, { useState } from "react";
import User from "./User";

function Users() {
  const [user, setUser] = useState(null);
  return (
    <>
      <User user={user} />
    </>
  );
}

export default Users;
