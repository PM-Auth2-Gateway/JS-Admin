import { createSelector } from 'reselect';

const selector = createSelector(
  (globalState) => globalState.apps,
  (apps) => apps.all
);

export default selector;
