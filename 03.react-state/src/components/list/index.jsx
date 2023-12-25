import React from "react";

const ListComp = ({ skills }) => {
  return (
    <>
      {" "}
      <h3>Skill List</h3>
      <ul>
        {skills.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListComp;
