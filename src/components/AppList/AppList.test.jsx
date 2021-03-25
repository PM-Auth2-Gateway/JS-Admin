import React from 'react';
import { shallow } from 'enzyme';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import AppList from './AppList';
import AppPreview from '../AppPreview/AppPreview';

import { clearAllApps, loadAllApps } from '../../ducks/apps/all';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: jest.fn(),
  useHistory: jest.fn(),
  Link: () => '<div />',
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../ducks/apps/all', () => ({
  clearAllApps: jest.fn(),
  loadAllApps: jest.fn(),
}));

describe('AppList Component', () => {
  const dispatch = jest.fn();
  const action = jest.fn();

  const historyPush = jest.fn();

  beforeAll(() => {
    useRouteMatch.mockReturnValue({ url: '/applications/1' });

    clearAllApps.mockReturnValue(action);
    loadAllApps.mockReturnValue(action);
  });

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);

    useHistory.mockReturnValue({
      push: historyPush,
    });
    useRouteMatch.mockReturnValue({ url: '/applications/' });
    useSelector.mockReturnValue({
      all: [
        {
          id: 1,
          name: 'Test1',
        },
        {
          id: 2,
          name: 'Test2',
        },
      ],
      loading: false,
      error: null,
    });
  });

  it('should render AppList Component', () => {
    const component = shallow(<AppList />);

    expect(component).toMatchSnapshot();
  });

  it('should render to AppPreview', () => {
    const component = shallow(<AppList />);

    const list = component.find(ListGroup);

    const apps = list.find(AppPreview);

    expect(apps.length).toBe(2);
  });
});
