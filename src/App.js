import { Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selector";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import WelcomePage from "./pages/welcome-login.page/welcome-login";
import { checkUserSession } from "./redux/user/user-action";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import RecordBook from "./pages/record-book/record-book";
import WithdrawBook from "./components/withdraw-book/withdraw-book";
import NavBar from "./components/nav-component/nav-component";

function App({ currentUser, checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div className="app">
      {currentUser ? <NavBar /> : null}
      <Switch>
        <Route
          exact
          path="/"
          component={() => (currentUser ? <HomePage /> : <WelcomePage />)}
        />
        <Route path="/recordbook" component={RecordBook} />
        <Route path="/withdrawbook" component={WithdrawBook} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
