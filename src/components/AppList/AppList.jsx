import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllApps, loadAllApps } from '../../ducks/apps/all';

import AppPreview from '../AppPreview/AppPreview';
import Preloader from '../Preloader/Preloader';

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
    <Preloader />
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
