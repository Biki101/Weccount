import React from "react";
import { useLocation } from "react-router";
import {
  getWithdrawnRecord,
  getMembersDailyGains,
} from "../../firebase/firebase.utils";
import "./withdraw-record.styles.scss";

const WithdrawnRecords = () => {
  const location = useLocation();
  const { memberName } = location.state;
  const records = getWithdrawnRecord(memberName);
  const gains = getMembersDailyGains(memberName);
  const netWithdrawnAmount = records.reduce(
    (total, currentObj) => total + parseInt(currentObj.amount),
    0
  );
  const balance = gains.reduce(
    (total, currentObj) =>
      total + parseInt(currentObj.gain) - parseInt(currentObj.expense),
    0
  );

  return (
    <div className="withdrawn-record">
      <h1>{memberName}</h1>
      <h2>Withdraw History</h2>
      <div className="form-header">
        <div className="header-block">
          <span>Date</span>
        </div>
        <div className="header-block">
          <span className="withdraw-amt">Amount</span>
        </div>
      </div>
      {records.map((record) => (
        <RecordMap key={record.key} date={record.date} amount={record.amount} />
      ))}
      <h2>Net Balance</h2>
      <div className="net-balance ">
        <div className="Net withdraw balance">
          <span>Balance</span>
          <span>{balance}</span>
        </div>
        <div className="net-withdraw balance">
          <span>Net Withdraw</span>
          <span>{netWithdrawnAmount}</span>
        </div>
        <div className="net-balance balance">
          <h3>Net Balance</h3>
          <h3>Rs {balance - netWithdrawnAmount}</h3>
        </div>
      </div>
    </div>
  );
};

export default WithdrawnRecords;

const RecordMap = ({ date, amount }) => {
  return (
    <div className="record">
      <div className="date">{date}</div>
      <div className="amount">{amount}</div>
    </div>
  );
};
