import React, { useEffect, useState } from "react";
import "./index.scss";

const HomePage = () => {
  const [userName, setUserName] = useState("Fidan");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("HomePage component mounted");
    return () => {
      console.log("HomePage component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("HomePage component updated");
    // return () => {};
  }, [count]);

  return (
    <>
      <div id="home-page">
        <div className="container">
          <div className="home-page">
            <h1>This is Home Page</h1>
            <h3>User Name: {userName}</h3>
            <hr />
            <button
              style={{ margin: "20px 0" }}
              onClick={() => {
                setUserName("Salima");
              }}
            >
              Change UserName
            </button>

            <hr />
            <br />
            <button
              onClick={() => {
                setCount((c) => c + 1);
              }}
            >
              Increment
            </button>
            <h2>Count: {count}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
