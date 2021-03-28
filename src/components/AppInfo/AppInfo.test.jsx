import React from 'react';
import { shallow, mount } from 'enzyme';
import { useRouteMatch, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCurrentApp,
  loadCurrentApp,
  removeCurrentApp,
  updateCurrentApp,
} from '../../ducks/apps/current';

import AppInfo from './AppInfo';

import { useAppContext } from '../../contexts/App.context';

jest.mock('../../contexts/App.context', () => ({
  useAppContext: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn(),
  useParams: jest.fn(),
  useHistory: jest.fn(),
  Link: () => '<div />',
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../ducks/apps/current', () => ({
  deleteCurrentApp: jest.fn(),
  loadCurrentApp: jest.fn(),
  removeCurrentApp: jest.fn(),
  updateCurrentApp: jest.fn(),
}));

describe('AppInfo Component', () => {
  const dispatch = jest.fn();
  const action = jest.fn();

  const historyPush = jest.fn();

  beforeAll(() => {
    deleteCurrentApp.mockReturnValue(action);
    loadCurrentApp.mockReturnValue(action);
    removeCurrentApp.mockReturnValue(action);
    updateCurrentApp.mockReturnValue(action);
  });

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);

    useAppContext.mockReturnValue({
      appId: 1,
    });
    useHistory.mockReturnValue({
      push: historyPush,
    });
    useRouteMatch.mockReturnValue({ url: '/applications/1' });
    useParams.mockReturnValue({ appId: 1 });
    useSelector.mockReturnValue({
      current: {
        id: 1,
        name: 'Test',
      },
      loading: false,
      error: null,
    });
  });

  it('should render AppInfo Component', () => {
    const component = shallow(<AppInfo />);

    expect(component).toMatchSnapshot();
  });

  it('should dispatch on mount', () => {
    // eslint-disable-next-line no-unused-vars
    const component = mount(<AppInfo />);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should dispatch on unmount', () => {
    const component = mount(<AppInfo />);
    component.unmount();

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
