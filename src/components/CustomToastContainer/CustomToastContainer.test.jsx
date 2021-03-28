import { shallow } from 'enzyme';
import CustomToastContainer from './CustomToastContainer';

describe('CustomToastContainer component', () => {
  it('should be rendered', () => {
    const component = shallow(<CustomToastContainer />);
    expect(component).toMatchSnapshot();
  });
});
