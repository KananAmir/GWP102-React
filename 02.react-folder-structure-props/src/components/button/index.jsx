import React from "react";
import "./index.scss";
const PirimaryButton = (props) => {
  console.log(props);
  return (
    <>
      <button className={props.bg === "orange" ? "bg-orange" : ""}>
        {props.btnText}
      </button>
      <h2>User Name: {props.userName}</h2>
    </>
  );
};

export default PirimaryButton;


//prop drilling