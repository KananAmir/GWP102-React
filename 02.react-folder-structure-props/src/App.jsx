import "./App.scss";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import HomePage from "./pages/home-page";
import { getAllData } from "./services/api";
import { users } from "./data/users";

function App() {
  console.log(users);
  let userName = "Lorem Ipsum";
  let result = 85;
  // getAllData("products");
  return (
    <>
      <Header userName={userName} result={result} />
      <hr />
      <HomePage users={users} />
      <hr />
      <Footer userName={userName} />
    </>
  );
}

export default App;
