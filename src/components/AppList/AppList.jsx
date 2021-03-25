import PropTypes from 'prop-types';
import { ListGroup, Spinner } from 'react-bootstrap';

import styles from './AppList.module.scss';

import AppPreview from '../AppPreview/AppPreview';

const propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

const AppList = (props) => {
  const { list, loading } = props;

  return loading ? (
    <Spinner animation='border' />
  ) : (
    <ListGroup variant={'flush'}>
      {list.map(({ id, name }) => (
        <ListGroup.Item key={id} className={styles.listItem}>
          <AppPreview url={`applications/${id}`} name={name} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

AppList.propTypes = propTypes;

export default AppList;
