import { createStructuredSelector } from 'reselect';

const currentSelector = (globalState) => globalState.appsAll.value;
const loadingSelector = (globalState) => globalState.appsAll.loading;
const errorSelector = (globalState) => globalState.appsAll.error;

const selector = createStructuredSelector({
  all: currentSelector,
  loading: loadingSelector,
  error: errorSelector,
});

export default selector;
