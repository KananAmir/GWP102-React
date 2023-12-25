import React from "react";

const DecrementBnt = ({ count, setCount }) => {
  return (
    <button
      onClick={() => {
        setCount((count) => count - 1);
      }}
    >
      DecrementBnt
    </button>
  );
};

export default DecrementBnt;
