import React from "react";
import { Navbar, Button } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import "./nav-component.styles.scss";
import { signOutStart } from "../../redux/user/user-action";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router";

const NavBar = ({ signOut }) => {
  const history = useHistory();
  const takeToHomepage = () => {
    history.push("/");
  };
  const handleSignOut = () => {
    signOut();
    history.push("/");
  };
  return (
    <div className="nav-bar">
      <Navbar className="nav" bg="dark" variant="dark">
        <Navbar.Brand>
          <HomeIcon
            onClick={takeToHomepage}
            fontSize="large"
            style={{ marginTop: 10 }}
          />
        </Navbar.Brand>
        <Button variant="outline-info" onClick={handleSignOut}>
          SIGN OUT
        </Button>
      </Navbar>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
