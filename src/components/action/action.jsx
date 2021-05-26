import React from "react";
import MemberManager from "../member-manager/member-manager";
import AddMember from "../add-member/add-member";
import Book from "../books/book";
import BookNav from "../book-nav/book-nav";

const Action = ({ match }) => {
  console.log(match);
  if (match.params.bookAction === "membermanager") {
    return <MemberManager />;
  }
  if (match.params.bookAction === "addmember") {
    return <AddMember />;
  }
  if (match.params.bookAction === "book") {
    return <Book />;
  }
  if (match.params.bookAction === "booknav") {
    return <BookNav />;
  }
};

export default Action;
