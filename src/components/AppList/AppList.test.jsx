import React from 'react';
import { shallow } from 'enzyme';
import { useRouteMatch } from 'react-router-dom';

import AppList from './AppList';

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn(),
}));

describe('AppList Component', () => {
  it('should render AppList Component', function () {
    useRouteMatch.mockReturnValue({ url: '/applications/' });
    const component = shallow(<AppList />);

    expect(component).toMatchSnapshot();
  });
});
