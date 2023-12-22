import React from "react";
import PirimaryButton from "../../components/button";

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div className="footer">FOOTER</div>
        <PirimaryButton
          btnText={"Footer Button"}
          bg={"orange"}
          userName={props.userName}
        />
      </div>
    </footer>
  );
};

export default Footer;
