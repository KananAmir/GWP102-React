import React from "react";
import Table from "../../components/table";
import InputComponent from "../../components/input";

const HomePage = (props) => {
  let { users } = props;
  return (
    <div id="home-page">
      <div className="container">
        <div className="home-page">This is HOMEPAGE</div>
        <br />
        <InputComponent />
        <h3>USERS TABLE</h3>
        <Table users={users} />
      </div>
    </div>
  );
};

export default HomePage;
