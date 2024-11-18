import React from "react";
import PropTypes from "prop-types";

function User({ user }) {
  // Set default values only if user is null or undefined
  const defaultUser = user || {
    name: "Al Amin Khan",
    father: "Syed Ahmed Khan",
    id: 8039244,
  };

  return (
    <div>
      <h1>{defaultUser.name}</h1>
      <h3>{defaultUser.father}</h3>
      <h3>{defaultUser.id}</h3>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    father: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default User;
