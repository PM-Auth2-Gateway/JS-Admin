import { createStructuredSelector } from 'reselect';

const currentSelector = (globalState) => globalState.apps.all.value;
const loadingSelector = (globalState) => globalState.apps.all.loading;
const errorSelector = (globalState) => globalState.apps.all.error;

const selector = createStructuredSelector({
  all: currentSelector,
  loading: loadingSelector,
  error: errorSelector,
});

export default selector;
