import { createSelector } from "reselect";

const selectMember = (state) => state.members;

export const selectMembersList = createSelector(
  [selectMember],
  (members) => members.members
);
