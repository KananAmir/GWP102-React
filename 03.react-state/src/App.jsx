import { useState } from "react";
import "./App.css";
import Carousel from "./components/carousel";
import HomePage from "./pages/home-page";
import Counter from "./components/counter";
import Counter2 from "./components/counter2";
import ListComp from "./components/list";
import UsersTable from "./components/users-table";

function App() {
  const [productName, setProductName] = useState("ASUS");
  const [skills, setSkills] = useState(["html", "css", "js"]);
  const [show, setShow] = useState(false);
  const sayHi = (user) => {
    console.log(`Hello ${user}`);
  };
  return (
    <>
      <h1>Product Name: {productName}</h1>
      {/* <Carousel /> */}
      {/* <HomePage sayHi={sayHi} /> */}
      <hr />
      <button onClick={() => setShow(true)}>Show Skills</button>
      <button onClick={() => setShow(false)}>Hide Skills</button>
      <button onClick={() => setShow(!show)}>Toggle Skills</button>

      {show && <ListComp skills={skills} />}
      <hr />
      <h1>Counter</h1>
      {/* <Counter /> */}
      <Counter2 />

      <hr />
      <h1>Users Table</h1>
      <UsersTable />
    </>
  );
}

export default App;
