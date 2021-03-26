import React from 'react';
import Login from './Login';
import { shallow, mount } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LocalStorageService from './../../services/LocalStorageService';
import LoginApiService from '../../services/LoginApiService';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}));

jest.mock('./../../services/LocalStorageService');

jest.mock('./../../services/LoginApiService');
describe('Login component', () => {
  const dispatch = jest.fn();
  const historyPush = jest.fn();

  const data = {
    socials: [{ id: 1, name: 'test' }],
    authenticated: false,
    user: null,
  };

  const authData = {
    ...data,
    authenticated: true,
    user: {
      firstName: 'first',
      lastName: 'last',
      photo: 'test.png',
    },
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue(data);
    useHistory.mockReturnValue({
      push: historyPush,
    });
  });

  it('should render', () => {
    const component = shallow(<Login />);
    expect(component).toMatchSnapshot();
  });

  it('should render user data if user authenticated', () => {
    useSelector.mockReturnValue(authData);

    const component = shallow(<Login />);
    expect(component).toMatchSnapshot();
  });

  it('should redirect to root page on logout', () => {
    useSelector.mockReturnValue(authData);
    const component = shallow(<Login />);
    const logout = component.find('DropdownItem');
    logout.simulate('click');
    expect(historyPush).toBeCalledWith('/');
  });

  it('should call dispatch on first render', () => {
    mount(<Login />);
    expect(dispatch).toBeCalledTimes(1);
  });

  it('should call dispatch 3 time on first render if user and token present in localstorage', () => {
    LocalStorageService.getToken.mockReturnValue('token');
    mount(<Login />);
    expect(dispatch).toBeCalledTimes(2);
  });

  it('should fetch authLink on social click', () => {
    const component = shallow(<Login />);
    const socialBtn = component.find('DropdownItem');
    socialBtn.simulate('click');
    expect(LoginApiService.getAuthLink.mock.calls.length).toBe(1);
  });
});
