import { createStructuredSelector } from 'reselect';

const allSocialsSelector = (globalState) => globalState.socials.all.value;
const loadingSocialsSelector = (globalState) => globalState.socials.all.loading;
const errorSocialsSelector = (globalState) => globalState.socials.all.error;

const selector = createStructuredSelector({
  all: allSocialsSelector,
  loading: loadingSocialsSelector,
  error: errorSocialsSelector,
});

export default selector;
