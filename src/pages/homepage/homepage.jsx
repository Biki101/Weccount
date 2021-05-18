import React from "react";
import NavBar from "../../components/nav-component/nav-component";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="menu">
        <div className="menu-items">
          <div className="content-record">
            <h1 className="r-book">Record Book</h1>
          </div>
          <div className="content-withdraw">
            <h1 className="w-book">Withdraw Book</h1>
          </div>
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Homepage;
