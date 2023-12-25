import React, { useState } from "react";
import IncrementBtn from "./IncrementBtn";
import DecrementBnt from "./DecrementBnt";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <IncrementBtn count={count} setCount={setCount} />
      <h2>{count}</h2>
      <DecrementBnt count={count} setCount={setCount} />
    </div>
  );
};

export default Counter2;
