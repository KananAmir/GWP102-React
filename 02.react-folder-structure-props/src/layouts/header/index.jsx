import React from "react";
import PirimaryButton from "../../components/button";

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className="container">
        <div className="header">HEADER</div>
        <PirimaryButton btnText={"Header Button"}/>
        <p>User Name: {props.userName}</p>
        <p>Result: {props.result}</p>
      </div>
    </header>
  );
};

export default Header;
