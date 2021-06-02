import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectMembersList } from "../../redux/members/members-selectors";

const WithdrawSelectMember = ({ membersDetail }) => {
  return (
    <div className="withdraw">
      <h2 className="header">Please Select Members</h2>
      <div className="select-members">
        {membersDetail.map(({ name, phoneNumber }) => (
          <div key={phoneNumber} className="member">
            <Link
              to={{
                pathname: "/withdrawbook/records",
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

export default connect(mapStateToProps)(WithdrawSelectMember);
