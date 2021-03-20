import React from 'react';
import { shallow } from 'enzyme';
import { useRouteMatch } from 'react-router-dom';

import AppInfo from './AppInfo';

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn(),
  Link: 'Link',
}));

describe('AppInfo Component', () => {
  it('should render AppInfo Component', function () {
    useRouteMatch.mockReturnValue({ url: '/applications/1' });
    const component = shallow(<AppInfo />);

    expect(component).toMatchSnapshot();
  });
});
