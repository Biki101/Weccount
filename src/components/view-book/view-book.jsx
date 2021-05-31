import React from "react";
import { useLocation } from "react-router";
import { getMembersDailyGains } from "../../firebase/firebase.utils";
import GainListItems from "../gain-list-item/gain-lists.component";
import "./view-book.scss";

const ViewBook = () => {
  const location = useLocation();
  const { memberName } = location.state;
  const gainList = getMembersDailyGains(memberName);
  console.log(gainList);
  return (
    <div className="view">
      <h5>{memberName}</h5>
      <div className="view-header">
        <div className="header-block">
          <span>Date</span>
        </div>
        <div className="header-block">
          <span>Gain</span>
        </div>
        <div className="header-block">
          <span>Expense</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="gain-list">
        {gainList.map((dailyGain, index) => {
          return (
            <GainListItems
              key={index}
              date={dailyGain.date}
              expense={dailyGain.expense}
              gain={dailyGain.gain}
              className="daily-gain"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewBook;
