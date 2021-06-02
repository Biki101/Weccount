import React from "react";
import withdraw from "../../assets/withdrawing.png";
import view from "../../assets/view.png";
import "./withdraw-book.styles.scss";
import { Link } from "react-router-dom";

const WithdrawBookOverView = ({ match }) => {
  return (
    <div className="withdraw-book">
      <div className="withdraw">
        <Link to={`${match.path}/withdraw`}>
          <img alt="withdrawing" src={withdraw} />
        </Link>
      </div>
      <div className="withdraw-record">
        <Link to={`${match.path}/recordsview`}>
          <img alt="withdrawing" src={view} />
        </Link>
      </div>
    </div>
  );
};

export default WithdrawBookOverView;
