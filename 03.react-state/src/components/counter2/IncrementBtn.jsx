import React from "react";

const IncrementBtn = ({ count, setCount }) => {
  return (
    <button onClick={() => setCount((count) => count + 1)}>IncrementBtn</button>
  );
};

export default IncrementBtn;
