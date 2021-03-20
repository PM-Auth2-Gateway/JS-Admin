import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should pass', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});
