import React, { useState } from "react";
import { connect } from "react-redux";
import { googleSigninStart } from "../../redux/user/user-action";
import "./welcome-login.scss";

const WelcomePage = ({ googleSignIn }) => {
  const [userCredentials, setUserCredential] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredential({ ...userCredentials, [name]: value });
  };

  return (
    <div className="welcome-page">
      <form onSubmit={handleSubmit}>
        <h3>Log in</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
            value={email}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="buttons">
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign in
          </button>
          <button
            onClick={googleSignIn}
            className="btn btn-dark btn-lg btn-block btn-gle"
          >
            GOOGLE SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSigninStart()),
});

export default connect(null, mapDispatchToProps)(WelcomePage);
