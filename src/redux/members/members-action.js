import MemberActionTypes from "./members-action.type";

export const addMemberStart = (memberName) => ({
  type: MemberActionTypes.ADD_MEMBER_START,
  payload: memberName,
});
export const addMemberSucess = () => ({
  type: MemberActionTypes.ADD_MEMBER_SUCESS,
});
export const addMemberFailure = (errorMessage) => ({
  type: MemberActionTypes.ADD_MEMBER_FAILURE,
  payload: errorMessage,
});

export const removeMemberStart = (memberName) => ({
  type: MemberActionTypes.REMOVE_MEMBER_START,
  payload: memberName,
});
export const removeMemberSucess = () => ({
  type: MemberActionTypes.REMOVE_MEMBER_SUCESS,
});
export const removeMemberFailure = (errorMessage) => ({
  type: MemberActionTypes.REMOVE_MEMBER_FAILURE,
  payload: errorMessage,
});

export const getMembersStart = () => ({
  type: MemberActionTypes.GET_MEMBER_START,
});
export const getMembersSucess = (membersList) => ({
  type: MemberActionTypes.GET_MEMBER_SUCESS,
  payload: membersList,
});
export const getMembersFailure = (errorMessage) => ({
  type: MemberActionTypes.GET_MEMBER_FAILURE,
  payload: errorMessage,
});
