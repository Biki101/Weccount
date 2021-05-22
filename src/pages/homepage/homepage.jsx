import React from "react";
import { withRouter } from "react-router-dom";
import "./homepage.scss";

const Homepage = (props) => {
  return (
    <div className="homepage">
      <div className="menu">
        <div className="menu-items">
          <div
            className="content-record"
            onClick={() => props.history.push(`${props.match.url}recordbook`)}
          >
            <h1 className="r-book">Record Book</h1>
          </div>
          <div
            className="content-withdraw"
            onClick={() => props.history.push(`${props.match.url}withdrawbook`)}
          >
            <h1 className="w-book">Withdraw Book</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Homepage);
