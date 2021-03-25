import { createSelector, createStructuredSelector } from 'reselect';
const socialsState = (state) => state.socialsList;
const userState = (state) => state.user;

const socialsSelector = createSelector(socialsState, ({ socials }) => socials);

const userSelector = createSelector(userState, ({ user }) => user);

const isUserLoadingSelector = createSelector(
  userState,
  ({ isLoading }) => isLoading
);

const authenticatedSelector = createSelector(
  userState,
  ({ authenticated }) => authenticated
);

export const loginSelector = createStructuredSelector({
  socials: socialsSelector,
  isUserLoading: isUserLoadingSelector,
  authenticated: authenticatedSelector,
  user: userSelector,
});
