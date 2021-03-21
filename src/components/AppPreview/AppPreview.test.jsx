import React from 'react';
import { shallow } from 'enzyme';

import AppPreview from './AppPreview';

describe('AppPreview Component', () => {
  it('should render AppPreview Component', function () {
    const component = shallow(
      <AppPreview url={'/application/1'} name={'App Name'} />
    );

    expect(component).toMatchSnapshot();
  });
});
