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
      <h1 className="header">{memberName}</h1>
      <h2>Withdraw History</h2>
      <div className="records">
        <div className="form-header">
          <div className="header-block">
            <span>Date</span>
          </div>
          <div className="header-block">
            <span className="withdraw-amt">Amount</span>
          </div>
        </div>
        {records.map((record) => (
          <RecordMap
            key={record.key}
            date={record.date}
            amount={record.amount}
          />
        ))}
      </div>
      <h2>Net Balance</h2>
      <div className="net-balance ">
        <div className="net-records">
          <div className="net-withdraw balance">
            <span>Balance</span>
            <span>&#8377;{balance}</span>
          </div>
          <div className="net-withdraw balance">
            <span>Net Withdraw</span>
            <span>&#8377;{netWithdrawnAmount}</span>
          </div>
        </div>
        <div className="net-balance balance">
          <h3>Net Balance</h3>
          <h3 className="total-balance">
            &#8377;{balance - netWithdrawnAmount}
          </h3>
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
      <div className="amount">&#8377;{amount}</div>
    </div>
  );
};
