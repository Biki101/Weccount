import react from "react";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="menu">
        <div className="menu-items">
          <div className="content-record">
            <h1>Record Book</h1>
          </div>
          <div className="content-withdraw">
            <h1>Withdraw Book</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
