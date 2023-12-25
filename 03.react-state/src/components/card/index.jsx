import React from "react";
import "./index.scss";

const CardComp = ({ product }) => {
  return (
    <div id="card">
      <img src={product.imgUrl} alt="" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default CardComp;
