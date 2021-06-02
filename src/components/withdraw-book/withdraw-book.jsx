import React from "react";
import { Route, Switch } from "react-router";
import Action from "../action/action";
import WithdrawBookOverView from "../withdraw-book-overview/withdraw-book-overview";

const WithdrawBook = ({ match }) => {
  return (
    <Switch>
      <Route exact path="/withdrawbook" component={WithdrawBookOverView} />
      <Route path="/withdrawbook/:action" component={Action} />
    </Switch>
  );
};

export default WithdrawBook;
