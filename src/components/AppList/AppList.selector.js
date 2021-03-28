import { createStructuredSelector } from 'reselect';

const allSelector = (globalState) => globalState.apps.all.value;
const loadingSelector = (globalState) => globalState.apps.all.loading;
const errorSelector = (globalState) => globalState.apps.all.error;

const selector = createStructuredSelector({
  all: allSelector,
  loading: loadingSelector,
  error: errorSelector,
});

export default selector;
