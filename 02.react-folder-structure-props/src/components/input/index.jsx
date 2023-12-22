import React from "react";

const InputComponent = () => {
  const handleChange = (inputValue) => {
    console.log(inputValue);
  };
  return <input onChange={(e) => handleChange(e.target.value)} />;
};

export default InputComponent;
