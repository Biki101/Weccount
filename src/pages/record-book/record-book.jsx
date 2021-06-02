import React from "react";
import { Route, Switch } from "react-router";
import RecordBookOverView from "../../components/record-book-overview/record-book-overview";
import Action from "../../components/action/action";

const RecordBookPage = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={RecordBookOverView} />
      <Route path={`${match.path}/:bookAction`} component={Action} />
    </Switch>
  );
};
export default RecordBookPage;
