import React from "react";
import MemberManager from "../member-manager/member-manager";
import AddMember from "../add-member/add-member";

const Action = ({ match }) => {
  console.log(match);
  if (match.params.bookAction === "membermanager") {
    return (
      <div>
        <MemberManager />
      </div>
    );
  }
  if (match.params.bookAction === "addmember") {
    return (
      <div>
        <AddMember />
      </div>
    );
  }
};

export default Action;
