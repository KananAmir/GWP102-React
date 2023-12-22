import React from "react";
import "./index.scss";
const PirimaryButton = (props) => {
  // console.log(props);

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <button
        className={props.bg === "orange" ? "bg-orange" : ""}
        // onClick={() => {
        //   console.log("clicked");
        // }}
        // onClick={handleClick}
        onClick={() => handleClick()}
      >
        {props.btnText}
      </button>
      <h2>User Name: {props.userName}</h2>
    </>
  );
};

export default PirimaryButton;

//prop drilling
