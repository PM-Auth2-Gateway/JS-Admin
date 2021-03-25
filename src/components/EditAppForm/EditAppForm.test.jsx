import React, { useState as useStateMock } from 'react';
import { shallow } from 'enzyme';

import EditAppForm from './EditAppForm';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('EditAppForm Component', () => {
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  it('should render EditAppForm Component', function () {
    const component = shallow(<EditAppForm />);

    expect(component).toMatchSnapshot();
  });
});
