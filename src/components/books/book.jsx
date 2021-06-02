import React from "react";
import { createStructuredSelector } from "reselect";
import "./book.styles.scss";
import { selectMembersList } from "../../redux/members/members-selectors";
import { connect } from "react-redux";
//import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const Book = ({ membersDetail }) => {
  console.log(membersDetail);

  return (
    <div className="book">
      <h3 className="header">Please Select Members</h3>
      <div className="select-members">
        {membersDetail.map(({ name, phoneNumber }) => (
          <div key={phoneNumber} className="member">
            <Link
              to={{
                pathname: "/recordbook/booknav",
                state: {
                  memberName: name,
                },
              }}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  membersDetail: selectMembersList,
});

export default connect(mapStateToProps)(Book);
