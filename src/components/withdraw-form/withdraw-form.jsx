import React, { useState } from "react";
import "./withdraw-form.styles.scss";
import { useLocation } from "react-router";
import {
  getTotalGainsAndExpenses,
  getWithdrawnRecord,
  withdrawFromAccount,
} from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

const WithdrawForm = () => {
  const [withdrawAmount, setAmount] = useState(0);
  const location = useLocation();
  const { memberName } = location.state;
  const gEarray = getTotalGainsAndExpenses(memberName);
  const wArray = getWithdrawnRecord(memberName);
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
  const totalWithdraw = wArray.reduce(
    (total, currentObj) => total + parseInt(currentObj.amount),
    0
  );

  const balance = totalGains - totalExpenses - totalWithdraw;
  const handleChange = (event) => {
    const amt = event.target.value;
    setAmount(amt);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (totalWithdraw < balance) {
      withdrawFromAccount(currentDate, memberName, withdrawAmount);
    } else {
      alert("Not Enough Balance");
    }
  };
  return (
    <div className="withdraw-form">
      <h1 className="header">{memberName}</h1>
      <div className="rcrd">
        <div className="record"></div>
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
            <span>Total Withdraw</span>
          </div>
          <div className="header-block">
            <span>Balance</span>
          </div>
        </div>
        <div className="balance">
          <div className="balance-block">
            <span>{currentDate}</span>
          </div>
          <div className="balance-block">
            <span>{totalGains}</span>
          </div>
          <div className="balance-block">
            <span>{totalExpenses}</span>
          </div>
          <div className="balance-block">
            <span>{totalWithdraw}</span>
          </div>
          <div className="balance-block">
            <span>&#8377; {balance}</span>
          </div>
        </div>
      </div>
      {/* <h2 className="withdraw-form-header">Withdraw Form</h2> */}
      <form className="form">
        <span className="withdraw-amt">Amount to Withdraw: &#8377;</span>
        <input
          type="number"
          placeholder="Withdrawl Amount"
          onChange={handleChange}
        />
        <button type="button" className="dark" onClick={handleSubmit}>
          <Link className="link" to="/withdrawbook">
            Withdraw
          </Link>
        </button>
      </form>
    </div>
  );
};

export default WithdrawForm;
