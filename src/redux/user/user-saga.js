import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  googleSigninFailure,
  googleSigninSucess,
  signOutFailure,
  signOutSucess,
} from "./user-action";
import UserActionTypes from "./user.type";
import {
  createUserProfileDocument,
  auth,
  getCurrentUser,
  googleProvider,
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSigninSucess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSigninFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(googleSigninFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      return;
    }
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(googleSigninFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSucess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGNING_OUT_START, signOut);
}

export function* userSagas() {
  yield all([call(onGoogleSignIn), call(onCheckUserSession), call(onSignOut)]);
}
