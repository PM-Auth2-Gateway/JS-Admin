import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation component', () => {
  it('should be rendered', () => {
    const component = shallow(<Navigation />);
    expect(component).toMatchSnapshot();
  });
});
