import React from "react";
import "./member.styles.scss";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import { removeMemberStart } from "../../redux/members/members-action";
import { connect } from "react-redux";

const Member = ({ name, removeMember }) => {
  return (
    <div className="member">
      <h3>{name}</h3>
      <div className="button" onClick={() => removeMember(name)}>
        <HighlightOffRoundedIcon fontSize="large" />
      </div>
    </div>
  );
};

const mapDispacthToProps = (dispatch) => ({
  removeMember: (name) => dispatch(removeMemberStart(name)),
});

export default connect(null, mapDispacthToProps)(Member);
