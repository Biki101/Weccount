import React from "react";
import "./member-manager.styles.scss";
import addmem from "../../assets/addmember.png";
import DisplayMember from "../display-member/display-member";
import { useHistory, withRouter } from "react-router-dom";

const MemberManager = ({ match }) => {
  const history = useHistory();
  const takeToAddMember = () => {
    history.push("/recordbook/addmember");
  };

  return (
    <div className="member_mngr">
      <div className="add-member" onClick={takeToAddMember}>
        <img alt="add member" src={addmem}></img>
      </div>
      <div className="members">
        <h3>List of Members</h3>
        <DisplayMember />
      </div>
    </div>
  );
};

export default withRouter(MemberManager);
