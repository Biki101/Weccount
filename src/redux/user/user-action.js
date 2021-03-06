import UserActionTypes from "./user.type";

export const googleSigninStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START,
});
export const googleSigninSucess = (user) => ({
  type: UserActionTypes.GOOGLE_SIGNIN_SUCESS,
  payload: user,
});
export const googleSigninFailure = (errorMessage) => ({
  type: UserActionTypes.GOOGLE_SIGNIN_FAILURE,
  payload: errorMessage,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGNING_OUT_START,
});
export const signOutSucess = () => ({
  type: UserActionTypes.SIGNING_OUT_SUCESS,
});
export const signOutFailure = (errorMessage) => ({
  type: UserActionTypes.SIGNING_OUT_FAILURE,
  payload: errorMessage,
});
