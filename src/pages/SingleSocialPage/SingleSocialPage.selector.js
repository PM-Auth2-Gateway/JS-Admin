import { createStructuredSelector } from 'reselect';

const currentSocialsSelector = (globalState) =>
  globalState.socials.current.value;
const loadingSocialsSelector = (globalState) =>
  globalState.socials.current.loading;
const errorSocialsSelector = (globalState) => globalState.socials.current.error;

const selector = createStructuredSelector({
  current: currentSocialsSelector,
  loading: loadingSocialsSelector,
  error: errorSocialsSelector,
});

export default selector;
