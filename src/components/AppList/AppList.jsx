import { useEffect } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllApps, loadAllApps } from '../../ducks/apps/all';

import AppPreview from '../AppPreview/AppPreview';

import styles from './AppList.module.scss';
import selector from './AppList.selector';

const AppList = () => {
  const dispatch = useDispatch();

  const { all, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(loadAllApps());

    return () => {
      dispatch(clearAllApps());
    };
  }, [dispatch]);

  return loading ? (
    <Spinner animation='border' />
  ) : (
    <ListGroup variant={'flush'}>
      {all.map(({ id, name }) => (
        <ListGroup.Item key={id} className={styles.listItem}>
          <AppPreview url={`applications/${id}`} name={name} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default AppList;
