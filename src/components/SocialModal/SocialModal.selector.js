import { createStructuredSelector } from 'reselect';

const currentAppSelector = (globalState) => globalState.socials.current.value;
const loadingAppSelector = (globalState) => globalState.socials.current.loading;
const errorAppSelector = (globalState) => globalState.socials.current.error;

const selector = createStructuredSelector({
  current: currentAppSelector,
  loading: loadingAppSelector,
  error: errorAppSelector,
});

export default selector;
