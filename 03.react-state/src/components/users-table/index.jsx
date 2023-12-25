import React from "react";
import { users } from "../../data";
import RowComp from "./RowComp";
import { uid } from "uid";

const UsersTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User Name</th>
          <th>User Email</th>
          <th>Adress</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index, array) => {
          //   return <RowComp user={user} key={uid()} />;
          return <RowComp user={user} key={user.id} />;
        })}
      </tbody>
    </table>
  );
};

export default UsersTable;
