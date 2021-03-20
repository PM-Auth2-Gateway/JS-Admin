import React from "react";
import {shallow} from 'enzyme';

import SocialInfo from "./SocialInfo";

describe("SocialInfo Component", () => {
  it('should render SocialInfo Component', function () {

    const component = shallow(<SocialInfo />);

    expect(component).toMatchSnapshot();
  });
})
