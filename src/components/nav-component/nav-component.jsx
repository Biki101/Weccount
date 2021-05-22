import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import "./nav-component.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { signOutStart } from "../../redux/user/user-action";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router";

const NavBar = ({ signOut, currentUser }) => {
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
      (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <HomeIcon
            onClick={takeToHomepage}
            fontSize="large"
            style={{ marginTop: 10 }}
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Button variant="outline-info" onClick={handleSignOut}>
          SIGN OUT
        </Button>
      </Navbar>
      )
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
