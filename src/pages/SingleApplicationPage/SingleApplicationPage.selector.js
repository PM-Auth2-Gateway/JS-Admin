import { createStructuredSelector } from 'reselect';

const currentAppSelector = (globalState) => globalState.apps.current.value;
const loadingAppSelector = (globalState) => globalState.apps.current.loading;
const errorAppSelector = (globalState) => globalState.apps.current.error;

export const appSelector = createStructuredSelector({
  current: currentAppSelector,
  loading: loadingAppSelector,
  error: errorAppSelector,
});

const allSocialsSelector = (globalState) => globalState.socials.all.value;
const loadingSocialsSelector = (globalState) => globalState.socials.all.loading;
const errorSocialsSelector = (globalState) => globalState.socials.all.error;

export const socialsSelector = createStructuredSelector({
  all: allSocialsSelector,
  loading: loadingSocialsSelector,
  error: errorSocialsSelector,
});
