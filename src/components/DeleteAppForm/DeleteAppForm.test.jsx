import { shallow } from 'enzyme';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../contexts/App.context';
import { deleteCurrentApp } from '../../ducks/apps/current';
import DeleteAppModal from '../DeleteAppModal/DeleteAppModal';

import DeleteAppFrom from './DeleteAppForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
}));

jest.mock('../../contexts/App.context', () => ({
  useAppContext: jest.fn(),
}));

jest.mock('../../ducks/apps/current', () => ({
  deleteCurrentApp: jest.fn(),
}));

describe('DeleteAppForm Component', () => {
  const dispatch = jest.fn();
  const historyPush = jest.fn();
  const action = jest.fn;

  beforeAll(() => {
    deleteCurrentApp.mockReturnValue(action);
  });

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);

    useAppContext.mockReturnValue({
      appId: 1,
    });
    useHistory.mockReturnValue({
      push: historyPush,
    });
  });

  it('should render component', () => {
    const component = shallow(<DeleteAppFrom />);

    expect(component).toMatchSnapshot();
  });

  it('should call dispatch and redirect to /applications', async () => {
    const component = shallow(<DeleteAppFrom />);

    const deleteModal = component.find(DeleteAppModal);

    await deleteModal.prop('onDelete')();

    expect(dispatch).toBeCalledTimes(1);
    expect(historyPush).toBeCalledWith('/applications');
  });
});
