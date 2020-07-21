import { createSelector } from "reselect";

const selectUser = (state) => state.user; //input selector

export const selectCurrentUser = createSelector(
  //output selector that use input selector
  [selectUser],
  (user) => user.currentUser
);
