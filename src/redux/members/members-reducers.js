import MemberActionTypes from "./members-action.type";
const ININTIAL_STATE = {
  members: null,
  errorMessage: "",
  isGettingMembers: false,
  isAddingMembers: false,
  isRemovingMembers: false,
};

const memberReducer = (state = ININTIAL_STATE, action) => {
  switch (action.type) {
    case MemberActionTypes.ADD_MEMBER_START:
      return {
        ...state,
        isAddingMembers: true,
      };
    case MemberActionTypes.REMOVE_MEMBER_START:
      return {
        ...state,
        isRemovingMembers: true,
      };
    case MemberActionTypes.GET_MEMBER_START:
      return {
        ...state,
        isGettingMembers: true,
      };
    case MemberActionTypes.GET_MEMBER_SUCESS:
      return {
        ...state,
        members: action.payload,
        errorMessage: "",
      };
    case MemberActionTypes.ADD_MEMBER_FAILURE:
    case MemberActionTypes.REMOVE_MEMBER_FAILURE:
    case MemberActionTypes.GET_MEMBER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isAddingMembers: false,
        isRemovingMembers: false,
        isGettingMembers: false,
      };
    default:
      return state;
  }
};

export default memberReducer;
