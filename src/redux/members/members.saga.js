import { all, call, takeLatest, put } from "redux-saga/effects";
import MemberActionTypes from "./members-action.type";
import {
  addMemberFailure,
  addMemberSucess,
  getMembersFailure,
  getMembersStart,
  getMembersSucess,
  removeMemberFailure,
  removeMemberSucess,
} from "./members-action";
import {
  createMember,
  getMembers,
  removeMember,
} from "../../firebase/firebase.utils";
import UserActionTypes from "../user/user.type";

export function* addingMember({ payload: userName }) {
  try {
    yield createMember(userName);
    yield put(addMemberSucess());
  } catch (error) {
    yield put(addMemberFailure(error));
  }
}

export function* removingMember({ payload: memberName }) {
  try {
    yield removeMember(memberName);
    yield put(removeMemberSucess());
    //alert("Members Data Removed");
  } catch (error) {
    yield put(removeMemberFailure(error));
    //alert("Error Removing Data");
  }
}

export function* gettingMembers() {
  try {
    const membersList = yield getMembers();
    yield put(getMembersSucess(membersList));
  } catch (error) {
    yield put(getMembersFailure(error));
  }
}

export function* getInintialMembersList() {
  yield put(getMembersStart());
}

export function* onSigningInSucess() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGNIN_SUCESS,
    getInintialMembersList
  );
}

export function* onAddMemberSucess() {
  yield takeLatest(MemberActionTypes.ADD_MEMBER_SUCESS, gettingMembers);
}
export function* onRemoveMemberSucess() {
  yield takeLatest(MemberActionTypes.REMOVE_MEMBER_SUCESS, gettingMembers);
}

export function* onGettingMembers() {
  yield takeLatest(MemberActionTypes.GET_MEMBER_START, gettingMembers);
}

export function* onAddingMember() {
  yield takeLatest(MemberActionTypes.ADD_MEMBER_START, addingMember);
}

export function* onRemovingMember() {
  yield takeLatest(MemberActionTypes.REMOVE_MEMBER_START, removingMember);
}

export function* membersSagas() {
  yield all([
    call(onAddMemberSucess),
    call(onSigningInSucess),
    call(onAddingMember),
    call(onRemoveMemberSucess),
    call(onRemovingMember),
    call(onGettingMembers),
  ]);
}
