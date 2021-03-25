import { Link } from 'react-router-dom';
import { Badge, Card } from 'react-bootstrap';

import { useAppContext } from '../../contexts/App.context';

import styles from './SocialPreview.module.scss';

const SocialPreview = ({ id, name, isSetting }) => {
  const { appId } = useAppContext();

  return (
    <Card className={styles.card}>
      <Link to={`/applications/${appId}/socials/${id}`}>
        <Card.Body>
          <Card.Title className={styles.socialPreview}>
            <img className={styles.appIcon} alt='icon' />
            <p>{name}</p>
          </Card.Title>
          <Card.Text className={'text-muted'}>
            Allow your users to login with their {name} Account
          </Card.Text>
          <Badge variant={isSetting ? 'success' : 'info'}>
            {isSetting ? 'Active' : 'Disabled'}
          </Badge>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default SocialPreview;
