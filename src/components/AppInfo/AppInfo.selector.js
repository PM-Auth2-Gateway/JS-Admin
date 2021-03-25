import { createStructuredSelector } from 'reselect';

const currentSelector = (globalState) => globalState.appsCurrent.value;
const loadingSelector = (globalState) => globalState.appsCurrent.loading;
const errorSelector = (globalState) => globalState.appsCurrent.error;

const selector = createStructuredSelector({
  current: currentSelector,
  loading: loadingSelector,
  error: errorSelector,
});

export default selector;
