import React, { useState as useStateMock } from 'react';
import { useDispatch } from 'react-redux';
import { shallow } from 'enzyme';

import CreateAppModal from './CreateAppModal';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('CreateAppModal Component', () => {
  const setState = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  it('should render component', function () {
    const component = shallow(<CreateAppModal onSubmit={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });

  it('should open modal', function () {
    const component = shallow(<CreateAppModal onSubmit={jest.fn()} />);

    const openModalBtn = component.find(`[data-test="open-modal"]`);

    openModalBtn.simulate('click');
  });
});
