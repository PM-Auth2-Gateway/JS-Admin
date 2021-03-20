import React, {useState as useStateMock} from "react";
import {shallow} from 'enzyme';

import CreateAppModal from "./CreateAppModal";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));


describe("CreateAppModal Component", () => {
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setState]);
  });

  it('should render CreateAppModal Component', function () {

    const component = shallow(<CreateAppModal />);

    expect(component).toMatchSnapshot();
  });

  it('should open modal', function () {
    const component = shallow(<CreateAppModal />);

    const openModalBtn = component.find(`[data-test="open-modal"]`);

    openModalBtn.simulate('click');
  });

  it('should close modal', function () {
    const component = shallow(<CreateAppModal />);

    const closeModalBtn = component.find(`[data-test="close-modal"]`);

    closeModalBtn.simulate('click');
  });

  it('should submit modal', function () {
    const component = shallow(<CreateAppModal />);

    const submitModalBtn = component.find(`[data-test="submit-modal"]`);

    submitModalBtn.simulate('click');
  });
})
