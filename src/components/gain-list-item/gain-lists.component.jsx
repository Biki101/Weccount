import React from "react";
import "./gain-list.styles.scss";

const GainListItems = ({ date, expense, gain }) => {
  return (
    <div className="gain-list-items">
      <div className="date">{date}</div>
      <div className="gain">&#8377; {gain}</div>
      <div className="expense">&#8377; {expense}</div>
      <div className="remove">
        <i className="fa fa-remove"></i>
      </div>
    </div>
  );
};

export default GainListItems;
