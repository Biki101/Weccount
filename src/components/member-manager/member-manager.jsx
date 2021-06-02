import React from "react";
import "./member-manager.styles.scss";
import addmem from "../../assets/addmember.png";
import DisplayMember from "../display-member/display-member";
import { useHistory, withRouter } from "react-router-dom";

const MemberManager = () => {
  const history = useHistory();
  const takeToAddMember = () => {
    history.push("/recordbook/addmember");
  };

  return (
    <div className="member_mngr">
      <h3 className="members">List of Members</h3>
      <DisplayMember />
      <div className="add-member" onClick={takeToAddMember}>
        <img alt="add member" src={addmem}></img>
      </div>
    </div>
  );
};

export default withRouter(MemberManager);
