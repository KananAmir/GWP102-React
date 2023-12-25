import React from "react";

const RowComp = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user.address.street}, {user.address.city}
      </td>
      <td>{user.phone}</td>
    </tr>
  );
};

export default RowComp;
