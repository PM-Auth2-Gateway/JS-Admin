import { createSelector } from 'reselect';
const userSelector = (state) => state.user;

export const isAuthenticatedSelector = createSelector(
  userSelector,
  ({ authenticated }) => authenticated
);
