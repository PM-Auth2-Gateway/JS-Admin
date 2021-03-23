import { createStructuredSelector } from 'reselect';

const currentSelector = (globalState) => globalState.apps.current;
const errorSelector = (globalState) => globalState.apps.error;

const selector = createStructuredSelector({
  current: currentSelector,
  error: errorSelector,
});

export default selector;
