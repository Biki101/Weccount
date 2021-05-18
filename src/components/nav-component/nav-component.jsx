import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import "./nav-component.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { signOutStart } from "../../redux/user/user-action";
import { connect } from "react-redux";
import WelcomePage from "../../pages/welcome-login.page/welcome-login";

const NavBar = ({ currentUser, signOut }) => {
  return (
    <div className="nav-bar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <HomeIcon fontSize="large" style={{ marginTop: 10 }} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          {currentUser ? (
            <Button variant="outline-info" onClick={() => signOut()}>
              SIGN OUT
            </Button>
          ) : (
            <WelcomePage />
          )}
        </Form>
      </Navbar>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
