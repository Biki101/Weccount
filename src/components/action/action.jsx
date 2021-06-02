import React from "react";
import MemberManager from "../member-manager/member-manager";
import AddMember from "../add-member/add-member";
import Book from "../books/book";
import BookNav from "../book-nav/book-nav";
import { Route, Switch } from "react-router";
import WriteBook from "../write-book/write-book";
import ViewBook from "../view-book/view-book";
import Withdraw from "../withdraw-component/withdraw";
import WithdrawForm from "../withdraw-form/withdraw-form";
import WithdrawMemberRecords from "../withdraw-select-member/withdraw-select-member";
import WithdrawnRecords from "../withdraw-record/withdraw-record";

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
      <Route path="/withdrawbook/withdraw" component={Withdraw} />
      <Route path="/withdrawbook/form" component={WithdrawForm} />
      <Route
        path="/withdrawbook/recordsview"
        component={WithdrawMemberRecords}
      />
      <Route path="/withdrawbook/records" component={WithdrawnRecords} />
    </Switch>
  );
};

export default Action;
