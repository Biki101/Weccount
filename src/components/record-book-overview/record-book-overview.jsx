import React from "react";
import "./record-book-overview.styles.scss";
import manager from "../../assets/member-manager.png";
import book from "../../assets/book.png";
import { Link } from "react-router-dom";

const RecordBookOverView = () => {
  return (
    <div className="record-book">
      <div className="member-manager">
        <Link to="/recordbook/membermanager">
          <img alt="member manager" src={manager} />
        </Link>
      </div>
      <div className="open-book">
        <Link to="/recordbook/book">
          <img alt="book" src={book} />
        </Link>
      </div>
    </div>
  );
};
export default RecordBookOverView;
