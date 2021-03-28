import { shallow } from 'enzyme';
import AppSocialsInfo from './AppSocialsInfo';

describe('AppSocialsInfo Component', () => {
  it('should render component', function () {
    const component = shallow(<AppSocialsInfo />);

    expect(component).toMatchSnapshot();
  });
});
