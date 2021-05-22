import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user-saga";
import { membersSagas } from "./members/members.saga";

export default function* rootSaga() {
  yield all([call(userSagas), call(membersSagas)]);
}
