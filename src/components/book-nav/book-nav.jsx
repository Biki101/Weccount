import React, { useState } from "react";
import { useLocation } from "react-router";
import write from "../../assets/write.png";
import view from "../../assets/view.png";
import "./book-nav.styles.scss";
import { Link } from "react-router-dom";

const BookNav = () => {
  const location = useLocation();
  const { memberName } = location.state;
  const [name, setMember] = useState(memberName);
  return (
    <div className="book-nav">
      <div className="write-record">
        <Link
          to={{
            pathname: "/recordbook/booknav/write",
            state: {
              memberName: name,
            },
          }}
        >
          <img alt="write" src={write} />
        </Link>
      </div>
      <div className="view-record">
        <Link
          to={{
            pathname: "/recordbook/booknav/write",
            state: {
              memberName: name,
            },
          }}
        >
          <img alt="view" src={view} />
        </Link>
      </div>
    </div>
  );
};

export default BookNav;
