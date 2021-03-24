import React, { useState as useStateMock } from 'react';
import { shallow } from 'enzyme';

import DeleteAppModal from './DeleteAppModal';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('DeleteAppModal Component', () => {
  const setState = jest.fn();
  const onDelete = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  it('should render DeleteAppModal Component', function () {
    const component = shallow(<DeleteAppModal />);

    expect(component).toMatchSnapshot();
  });

  it('should open modal', function () {
    const component = shallow(<DeleteAppModal />);

    const openModalBtn = component.find(`[data-test="open-modal"]`);

    openModalBtn.simulate('click');
  });

  it('should close modal', function () {
    const component = shallow(<DeleteAppModal />);

    const closeModalBtn = component.find(`[data-test="close-modal"]`);

    closeModalBtn.simulate('click');
  });

  it('should submit modal', function () {
    const component = shallow(<DeleteAppModal onDelete={onDelete} />);

    const submitModalBtn = component.find(`[data-test="submit-modal"]`);

    submitModalBtn.simulate('click');
  });
});
