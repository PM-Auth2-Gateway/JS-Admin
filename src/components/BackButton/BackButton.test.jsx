import { shallow } from 'enzyme';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import BackButton from './BackButton';

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}));

describe('BackButton Component', () => {
  const historyGoBack = jest.fn();

  beforeEach(() => {
    useHistory.mockReturnValue({
      goBack: historyGoBack,
    });
  });

  it('should render', () => {
    const component = shallow(<BackButton />);

    expect(component).toMatchSnapshot();
  });

  it('should go back on click', () => {
    const component = shallow(<BackButton />);

    const btn = component.find(Button);
    btn.simulate('click');

    expect(historyGoBack).toBeCalledTimes(1);
  });
});
