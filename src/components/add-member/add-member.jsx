import React from "react";
import { useState } from "react";
import "./add-member.styles.scss";
import { createMember } from "../../firebase/firebase.utils";
import "firebase/firestore";
import "firebase/database";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Link } from "react-router-dom";

const AddMember = () => {
  const [memberCredentials, setMemberCredendials] = useState({
    phoneNumber: "",
    name: "",
  });

  const { name, phoneNumber } = memberCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    createMember(memberCredentials);
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setMemberCredendials({
      ...memberCredentials,
      name: name,
    });
  };

  const handleNumberChange = (event) => {
    const phoneNumber = event.target.value;
    setMemberCredendials({
      ...memberCredentials,
      phoneNumber: phoneNumber,
    });
  };

  return (
    <div className="add-member">
      <form onSubmit={handleSubmit}>
        <div className="header">
          <GroupAddIcon className="icon" fontSize="large" />
          <h3>Add Members</h3>
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter members' name"
            onChange={handleNameChange}
            value={name}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Phone Number"
            onChange={handleNumberChange}
            value={phoneNumber}
            required
          />
        </div>
        <div className="buttons">
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            <Link to="/">Add Member</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMember;
