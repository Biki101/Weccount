import UserActionTypes from "./user.type";

const ININTIAL_STATE = {
  currentUser: null,
  isSigningIn: false,
  errorMessage: undefined,
};

const userReducer = (state = ININTIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGNIN_START:
      return {
        ...state,
        isSigningIn: true,
      };
    case UserActionTypes.GOOGLE_SIGNIN_SUCESS:
      return {
        ...state,
        currentUser: action.payload,
        isSigningIn: false,
        errorMessage: null, //clear error message
      };
    case UserActionTypes.SIGNING_OUT_FAILURE:
    case UserActionTypes.GOOGLE_SIGNIN_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        errorMessage: action.payload,
      };
    case UserActionTypes.SIGNING_OUT_SUCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default userReducer;
