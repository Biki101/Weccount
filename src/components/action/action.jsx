import React from "react";
import MemberManager from "../member-manager/member-manager";
import AddMember from "../add-member/add-member";
import Book from "../books/book";
import BookNav from "../book-nav/book-nav";
import { Route, Switch } from "react-router";
import WriteBook from "../write-book/write-book";
import ViewBook from "../view-book/view-book";

const Action = ({ match }) => {
  console.log(match);

  return (
    <Switch>
      <Route path="/recordbook/membermanager" component={MemberManager} />
      <Route path="/recordbook/addmember" component={AddMember} />
      <Route path="/recordbook/book" component={Book} />
      <Route path="/recordbook/booknav" component={BookNav} />
      <Route path="/recordbook/write" component={WriteBook} />
      <Route path="/recordbook/view" component={ViewBook} />
    </Switch>
  );
};

export default Action;
