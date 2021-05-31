import React, { useState } from "react";
import { Redirect, useLocation } from "react-router";
import { setMembersDailyGains } from "../../firebase/firebase.utils";
import "./write-book.styles.scss";

const WriteBook = () => {
  const location = useLocation();
  const { memberName } = location.state;
  const [name] = useState(memberName);
  const [gain, setGain] = useState("");
  const [confirmGain, setConfirmGain] = useState("");
  const [expense, setExpense] = useState("");
  const [confirmExpense, setConfirmExpense] = useState("");
  const [added, setAdded] = useState(false);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (gain === confirmGain && expense === confirmExpense) {
      setMembersDailyGains(name, gain, expense, currentDate);
      setAdded(true);
    } else {
      alert("Gains or Expense Mismatch");
    }
  };

  const handleGainChange = (event) => {
    const gain = event.target.value;
    setGain(gain);
  };
  const handleConfirmGainChange = (event) => {
    const gain = event.target.value;
    setConfirmGain(gain);
  };

  const handleExpenseChange = (event) => {
    const expense = event.target.value;
    setExpense(expense);
  };
  const handleConfirmExpenseChange = (event) => {
    const expense = event.target.value;
    setConfirmExpense(expense);
  };

  return (
    <div className="write">
      {added ? (
        <Redirect to="/recordbook/book" />
      ) : (
        <div className="container">
          <div className="main">
            <div className="main-center">
              <h5>{name}</h5>
              <form className="" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="date">Date: {currentDate}</label>
                </div>

                <div className="form-group">
                  <label>Todays' gain (in &#8360;)</label>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-rupee fa" aria-hidden="true"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      name="gain"
                      placeholder="Enter Todays' Gain"
                      onChange={handleGainChange}
                      value={gain}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Todays' Expenses (in &#8360;)</label>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-rupee fa" aria-hidden="true"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      name="expense"
                      placeholder="Enter Todays' Expenses"
                      onChange={handleExpenseChange}
                      value={expense}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Confirm Todays' gain (in &#8360;)</label>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-rupee fa" aria-hidden="true"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      name="confirmgain"
                      placeholder="Confirm Todays' Gain"
                      onChange={handleConfirmGainChange}
                      value={confirmGain}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm Todays' Expenses (in &#8360;)</label>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-rupee fa" aria-hidden="true"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      name="confirmexpense"
                      placeholder="Confirm Todays' Expenses"
                      onChange={handleConfirmExpenseChange}
                      value={confirmExpense}
                      required
                    />
                  </div>
                </div>

                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteBook;
