import { shallow } from 'enzyme';
import Navigation from './Navigation';
import { useFacebookAuth } from './../../hooks/useFacebookAuth';

jest.mock('./../../hooks/useFacebookAuth', () => ({
  ...jest.requireActual('./../../hooks/useFacebookAuth'),
  useFacebookAuth: jest.fn(),
}));

describe('Navigation component', () => {
  beforeEach(() => {
    useFacebookAuth.mockImplementation(() => ({
      authenticated: true,
      user: {
        name: 'test',
        picture: {
          data: {
            url: 'test',
          },
        },
      },
    }));
  });
  it('should be rendered', () => {
    const component = shallow(<Navigation />);
    expect(component).toMatchSnapshot();
  });

  it('should render user data', () => {
    const component = shallow(<Navigation />);
    expect(component).toMatchSnapshot();
  });
});
