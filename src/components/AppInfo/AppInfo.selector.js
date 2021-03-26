import { createStructuredSelector } from 'reselect';

const currentAppSelector = (globalState) => globalState.apps.current.value;
const loadingAppSelector = (globalState) => globalState.apps.current.loading;
const errorAppSelector = (globalState) => globalState.apps.current.error;

const selector = createStructuredSelector({
  current: currentAppSelector,
  loading: loadingAppSelector,
  error: errorAppSelector,
});

export default selector;
