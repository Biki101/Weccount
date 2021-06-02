import React, { useState } from "react";
import "./withdraw-form.styles.scss";
import { useLocation } from "react-router";
import {
  getTotalGainsAndExpenses,
  withdrawFromAccount,
} from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

const WithdrawForm = () => {
  const [withdrawAmount, setAmount] = useState(0);
  const location = useLocation();
  const { memberName } = location.state;
  const gEarray = getTotalGainsAndExpenses(memberName);
  console.log(gEarray);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const currentDay = date.getDate();
  var currentMonth = months[date.getMonth()];
  const currentDate = currentMonth + " / " + currentDay;
  const totalGains = gEarray.reduce(
    (total, currentObj) => total + parseInt(currentObj.gain),
    0
  );
  const totalExpenses = gEarray.reduce(
    (total, currentObj) => total + parseInt(currentObj.expense),
    0
  );
  const balance = totalGains - totalExpenses;
  const handleChange = (event) => {
    const amt = event.target.value;
    setAmount(amt);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    withdrawFromAccount(currentDate, memberName, withdrawAmount);
  };
  return (
    <div className="withdraw-form">
      <h1>{memberName}</h1>
      <div className="form-header">
        <div className="header-block">
          <span>Date</span>
        </div>
        <div className="header-block">
          <span>Total Gain</span>
        </div>
        <div className="header-block">
          <span>Total Expense</span>
        </div>
        <div className="header-block">
          <span>Balance</span>
        </div>
      </div>
      <div className="balance">
        <div className="form-header">
          <div className="header-block">
            <span>{currentDate}</span>
          </div>
          <div className="header-block">
            <span>{totalGains}</span>
          </div>
          <div className="header-block">
            <span>{totalExpenses}</span>
          </div>
          <div className="header-block">
            <span>{balance}</span>
          </div>
        </div>
      </div>
      <h2>Withdraw Form</h2>
      <form className="form">
        <input
          type="number"
          placeholder="Withdrawl Amount"
          onChange={handleChange}
        />
        <button type="button" className="btn btn-dark" onClick={handleSubmit}>
          <Link to="/withdrawbook">Withdraw</Link>
        </button>
      </form>
    </div>
  );
};

export default WithdrawForm;
