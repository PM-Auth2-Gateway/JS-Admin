import { shallow } from 'enzyme';
import { useDispatch } from 'react-redux';
import { useAppContext } from '../../contexts/App.context';

import { updateSocialStatusById } from '../../ducks/socials/all';

import SocialPreview from './SocialPreview';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../contexts/App.context', () => ({
  useAppContext: jest.fn(),
}));

jest.mock('../../ducks/socials/all', () => ({
  updateSocialStatusById: jest.fn(),
}));

describe('SocialPreview Component', () => {
  const dispatch = jest.fn();
  const action = jest.fn();

  beforeAll(() => {
    updateSocialStatusById.mockReturnValue(action);
  });

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);

    useAppContext.mockReturnValue({
      appId: 1,
    });
  });

  it('should render component', function () {
    const component = shallow(<SocialPreview />);

    expect(component).toMatchSnapshot();
  });
});
