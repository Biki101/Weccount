import React from "react";
import "./gain-list.styles.scss";

const GainListItems = ({ date, expense, gain }) => {
  return (
    <div className="gain-list-items">
      <div className="date">{date}</div>
      <div className="gain">{gain}</div>
      <div className="expense">{expense}</div>
      <div className="remove">
        <i className="fa fa-remove"></i>
      </div>
    </div>
  );
};

export default GainListItems;
