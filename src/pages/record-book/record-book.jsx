import React from "react";
import { Route } from "react-router";
import RecordBookOverView from "../../components/record-book-overview/record-book-overview";
import Action from "../../components/action/action";
import "./record-book.styles.scss";

const RecordBookPage = ({ match }) => {
  return (
    <div className="record-book">
      <Route exact path={`${match.path}`} component={RecordBookOverView} />
      <Route path={`${match.path}/:bookAction`} component={Action} />
    </div>
  );
};
export default RecordBookPage;
