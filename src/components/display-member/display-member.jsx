import React from "react";
import { connect } from "react-redux";
import "./display-member.styles.scss";
import Member from "../member/member";
import { createStructuredSelector } from "reselect";
import { selectMembersList } from "../../redux/members/members-selectors";

const DisplayMember = ({ membersList }) => {
  // const [members, setMember] = useState();

  // useEffect(() => {
  //   setMember(membersList);
  // });

  return (
    <div className="display-member">
      {membersList.map((members, index) => (
        <Member key={index} name={members.name} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  membersList: selectMembersList,
});

export default connect(mapStateToProps)(DisplayMember);
