import { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import { useAppContext } from '../../contexts/App.context';

import { loadAllSocials, clearAllSocials } from '../../ducks/socials/all';

import SocialsList from './SocialsList';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../contexts/App.context', () => ({
  useAppContext: jest.fn(),
}));

jest.mock('../../ducks/socials/all', () => ({
  loadAllSocials: jest.fn(),
  clearAllSocials: jest.fn(),
}));

describe('SocialsList Component', () => {
  const dispatch = jest.fn();
  const action = jest.fn();

  beforeAll(() => {
    loadAllSocials.mockReturnValue(action);
    clearAllSocials.mockReturnValue(action);
  });

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);

    useAppContext.mockReturnValue({
      appId: 1,
    });
    useSelector.mockReturnValue({
      all: [
        {
          id: 1,
          name: 'Google',
          isSetting: false,
        },
        {
          id: 1,
          name: 'Facebook',
          isSetting: false,
        },
      ],
      loading: false,
      error: null,
    });
  });

  it('should render component', function () {
    const component = shallow(<SocialsList />);

    expect(component).toMatchSnapshot();
  });
});
